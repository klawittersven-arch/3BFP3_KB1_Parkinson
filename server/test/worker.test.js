// Lokaler Test des Workers mit nachgebildeter Cloudflare-Umgebung (ohne Abhängigkeiten).
// Aufruf im Ordner server/:  node test/worker.test.js
import worker, { Raum } from '../src/index.js';
import { AUFBEWAHRUNG_MS } from '../src/logik.js';

let ok = 0, nok = 0;
const pruefe = (bed, text) => { if (bed) ok++; else { nok++; console.log('  ✗ ' + text); } };

function umgebung(schluessel) {
  const raeume = new Map();
  return {
    LEHRER_SCHLUESSEL: schluessel,
    RAUM: {
      idFromName: (n) => n,
      get(id) {
        if (!raeume.has(id)) {
          const speicher = new Map();
          const state = { storage: { get: async (k) => structuredClone(speicher.get(k)), put: async (k, v) => { speicher.set(k, structuredClone(v)); } } };
          raeume.set(id, { raum: new Raum(state, {}), speicher });
        }
        const r = raeume.get(id);
        return { fetch: (url, init) => r.raum.fetch(new Request(url, init)), _r: r };
      }
    },
    _raeume: raeume
  };
}

const B = 'https://w.test';
const post = (env, pfad, daten) => worker.fetch(new Request(B + pfad, { method: 'POST', headers: { 'Content-Type': 'text/plain' }, body: typeof daten === 'string' ? daten : JSON.stringify(daten) }), env);
const get = (env, pfad) => worker.fetch(new Request(B + pfad), env);

const eintrag = (o = {}) => Object.assign({ raum: 'ab1', uebung: 'ab1a', geraet: 'a'.repeat(32), name: 'Lena K.', geloest: 3, gesamt: 10, erster: 2, falsch: ['2-R', '5-F'] }, o);

const env = umgebung('geheim-123');

// CORS und Gesundheitscheck
let r = await worker.fetch(new Request(B + '/fortschritt', { method: 'OPTIONS' }), env);
pruefe(r.status === 204 && r.headers.get('Access-Control-Allow-Origin') === '*', 'OPTIONS mit CORS');
r = await get(env, '/');
pruefe(r.status === 200, 'Startseite antwortet');

// Fortschritt senden
r = await post(env, '/fortschritt', eintrag());
pruefe(r.status === 204 && r.headers.get('Access-Control-Allow-Origin') === '*', 'Fortschritt angenommen (204, CORS)');
r = await post(env, '/fortschritt', eintrag({ geraet: 'b'.repeat(32), name: 'Tim B.', geloest: 10, erster: 9, falsch: ['3-R'] }));
r = await post(env, '/fortschritt', eintrag({ geraet: 'b'.repeat(32), name: 'Tim B.', uebung: 'ab1b', geloest: 4, erster: 4, falsch: [] }));
pruefe(r.status === 204, 'zweite Übung desselben Geräts');

// Ungültige Daten
const ungueltig = [
  ['kein JSON', 'xyz'], ['Raum', eintrag({ raum: 'AB 1' })], ['Name leer', eintrag({ name: '' })],
  ['Name mit Zeichen', eintrag({ name: '<script>' })], ['Name zu lang', eintrag({ name: 'A'.repeat(30) + ' K.' })],
  ['Gerät', eintrag({ geraet: 'xyz' })], ['geloest > gesamt', eintrag({ geloest: 11 })],
  ['falsch-Liste', eintrag({ falsch: ['a'] })], ['falsch als Zahl', eintrag({ falsch: [2] })], ['falsch mit HTML', eintrag({ falsch: ['2-<b>'] })], ['zu groß', JSON.stringify(eintrag({ name: 'Lena K.', x: 'y'.repeat(5000) }))]
];
for (const [t, d] of ungueltig) {
  r = await post(env, '/fortschritt', d);
  pruefe(r.status === 400, 'abgelehnt: ' + t + ' (' + r.status + ')');
}

// Stand abrufen
r = await get(env, '/stand?raum=ab1&k=falsch');
pruefe(r.status === 401, 'falscher Schlüssel → 401');
r = await get(env, '/stand?raum=ab1');
pruefe(r.status === 401, 'ohne Schlüssel → 401');
r = await get(env, '/stand?raum=ab1&k=geheim-123');
let s = await r.json();
pruefe(r.status === 200 && s.eintraege.length === 2, 'Stand: 2 Einträge');
const tim = s.eintraege.find((e) => e.name === 'Tim B.');
pruefe(tim && tim.uebungen.ab1a.geloest === 10 && tim.uebungen.ab1b.geloest === 4, 'Stand: Übungen je Gerät');
pruefe(!JSON.stringify(s).includes('a'.repeat(32)), 'Stand enthält keine Geräte-Kennungen');
pruefe(typeof tim.id === 'string' && /^[a-z0-9]{4,16}$/.test(tim.id), 'Stand: kurze Kennung zum Entfernen');

// Namensänderung überschreibt
await post(env, '/fortschritt', eintrag({ name: 'Lena M.' }));
s = await (await get(env, '/stand?raum=ab1&k=geheim-123')).json();
pruefe(s.eintraege.some((e) => e.name === 'Lena M.') && !s.eintraege.some((e) => e.name === 'Lena K.'), 'Name wird aktualisiert');

// Räume getrennt
await post(env, '/fortschritt', eintrag({ raum: 'ab2', uebung: 'ab2a' }));
s = await (await get(env, '/stand?raum=ab2&k=geheim-123')).json();
pruefe(s.eintraege.length === 1, 'Räume sind getrennt');

// Entfernen
r = await post(env, '/entfernen', { raum: 'ab1', k: 'falsch', id: tim.id });
pruefe(r.status === 401, 'Entfernen mit falschem Schlüssel → 401');
r = await post(env, '/entfernen', { raum: 'ab1', k: 'geheim-123', id: tim.id });
s = await (await get(env, '/stand?raum=ab1&k=geheim-123')).json();
pruefe(r.status === 204 && s.eintraege.length === 1, 'Entfernen eines Namens');

// Leeren
r = await post(env, '/leeren', { raum: 'ab1', k: 'geheim-123' });
s = await (await get(env, '/stand?raum=ab1&k=geheim-123')).json();
pruefe(r.status === 204 && s.eintraege.length === 0, 'Liste leeren');

// Automatisches Löschen nach 12 Stunden
await post(env, '/fortschritt', eintrag());
const echtJetzt = Date.now;
Date.now = () => echtJetzt() + AUFBEWAHRUNG_MS + 1000;
s = await (await get(env, '/stand?raum=ab1&k=geheim-123')).json();
Date.now = echtJetzt;
pruefe(s.eintraege.length === 0, 'Einträge nach 12 Stunden gelöscht');

// Ohne eingerichteten Schlüssel
const env2 = umgebung(undefined);
r = await get(env2, '/stand?raum=ab1&k=x');
pruefe(r.status === 503, 'ohne LEHRER_SCHLUESSEL → 503');

// Obergrenze Geräte
const env3 = umgebung('k');
let letzte;
for (let i = 0; i < 125; i++) letzte = await post(env3, '/fortschritt', eintrag({ geraet: i.toString(16).padStart(32, '0') }));
pruefe(letzte.status === 429, 'Obergrenze von 120 Geräten pro Raum');

// Daten werden im Durable-Object-Speicher gesichert
await post(env, '/fortschritt', eintrag({ name: 'Mia S.' }));
const gespeichert = env._raeume.get('ab1').speicher.get('daten');
pruefe(gespeichert && Object.keys(gespeichert).length === 1, 'Daten im Speicher gesichert');

console.log(`${ok} Prüfungen bestanden, ${nok} fehlgeschlagen`);
process.exit(nok ? 1 : 0);
