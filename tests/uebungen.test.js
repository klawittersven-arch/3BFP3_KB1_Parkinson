/* Automatischer Test aller Übungen in Handygröße und der Lehrerseiten (Playwright, Chromium).
 * Aufruf (im Repository-Ordner):  node tests/uebungen.test.js
 * Teil A: Übungen ohne Fortschrittsanzeige (serverAdresse leer) – Tipp, Zusammenfassung,
 *         Durchklicken, Zurücksetzen, kein waagerechtes Scrollen, keine fremden Anfragen.
 * Teil B: mit Fortschrittsanzeige – Namenseingabe, Senden des Fortschritts (nachgebildeter Server).
 * Teil C: Lehrerseiten – Schlüssel, Anzeige der Namen und Zahlen, Entfernen, Leeren. */
const { chromium } = require('playwright');
const http = require('http');
const fs = require('fs');
const path = require('path');

const DOCS = path.join(__dirname, '..', 'docs');
const TYPEN = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png' };
const SERVER = 'https://fortschritt.test';
const SCHLUESSEL = 'test-schluessel';
const IDS = ['ab1a', 'ab1b', 'ab1c', 'ab2a', 'ab2b', 'ab2c'];

function webserver() {
  return new Promise(ok => {
    const s = http.createServer((req, res) => {
      let p = decodeURIComponent(req.url.split('?')[0]);
      if (p.endsWith('/')) p += 'index.html';
      const f = path.join(DOCS, p);
      if (!f.startsWith(DOCS) || !fs.existsSync(f)) { res.writeHead(404); return res.end(); }
      res.writeHead(200, { 'Content-Type': TYPEN[path.extname(f)] || 'application/octet-stream' });
      fs.createReadStream(f).pipe(res);
    }).listen(0, () => ok(s));
  });
}

// Nachgebildeter Fortschritts-Server (gleiche Schnittstelle wie server/src/index.js)
function fortschrittsServer() {
  const raeume = {};
  const posts = [];
  let nr = 0;
  const kopf = { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' };
  return {
    posts, raeume,
    async route(route) {
      const req = route.request();
      const url = new URL(req.url());
      if (req.method() === 'POST' && url.pathname === '/fortschritt') {
        const d = JSON.parse(req.postData());
        posts.push(d);
        const r = raeume[d.raum] = raeume[d.raum] || {};
        const p = r[d.geraet] = r[d.geraet] || { id: 'id' + (++nr), uebungen: {} };
        p.name = d.name; p.t = Date.now();
        p.uebungen[d.uebung] = { geloest: d.geloest, gesamt: d.gesamt, erster: d.erster, falsch: d.falsch, t: Date.now() };
        return route.fulfill({ status: 204, headers: kopf });
      }
      if (req.method() === 'GET' && url.pathname === '/stand') {
        if (url.searchParams.get('k') !== SCHLUESSEL) return route.fulfill({ status: 401, headers: kopf, body: '{}' });
        const r = raeume[url.searchParams.get('raum')] || {};
        return route.fulfill({ status: 200, headers: kopf, body: JSON.stringify({ jetzt: Date.now(), eintraege: Object.values(r) }) });
      }
      if (req.method() === 'POST' && (url.pathname === '/leeren' || url.pathname === '/entfernen')) {
        const d = JSON.parse(req.postData());
        if (d.k !== SCHLUESSEL) return route.fulfill({ status: 401, headers: kopf });
        const r = raeume[d.raum] || {};
        for (const g of Object.keys(r)) if (url.pathname === '/leeren' || r[g].id === d.id) delete r[g];
        return route.fulfill({ status: 204, headers: kopf });
      }
      return route.fulfill({ status: 404, headers: kopf });
    }
  };
}

(async () => {
  global.window = {};
  eval(fs.readFileSync(path.join(DOCS, 'inhalte.js'), 'utf8') + ';global.I = INHALTE;');
  const s = await webserver();
  const basis = `http://127.0.0.1:${s.address().port}/`;
  const browser = await chromium.launch();
  let ok = 0, nok = 0;
  const pruefe = (bed, text) => { if (bed) ok++; else { nok++; console.log('  ✗ ' + text); } };

  function beobachte(page, fehler, erlaubt) {
    page.on('console', m => { if (m.type() === 'error') fehler.push(m.text()); });
    page.on('pageerror', e => fehler.push(String(e)));
    page.on('request', r => { if (!r.url().startsWith(basis) && !(erlaubt && r.url().startsWith(erlaubt))) fehler.push('fremde Anfrage: ' + r.url()); });
  }

  /* ---------------- Teil A: Übungen ohne Fortschrittsanzeige ---------------- */
  {
    const ctx = await browser.newContext({ viewport: { width: 360, height: 740 }, isMobile: true, hasTouch: true });
    const page = await ctx.newPage();
    const fehler = [];
    beobachte(page, fehler);
    for (const id of IDS) {
      const U = I[id];
      await page.goto(basis + id + '.html');
      await page.evaluate(() => sessionStorage.clear());
      await page.reload();
      pruefe(await page.locator('#name-bereich').isHidden(), `${id}: ohne Server keine Namenseingabe`);
      const karten = page.locator('.karte');
      pruefe(await karten.count() === U.karten.length, `${id}: Anzahl Karten`);
      pruefe(!(await page.locator('#merksatz-bereich').isVisible()), `${id}: Zusammenfassung anfangs verborgen`);
      pruefe(!(await page.content()).includes(U.merksatz.slice(0, 40)), `${id}: Zusammenfassung steht nicht vorab im Text`);

      const k0 = U.karten[0];
      const falsch0 = U.knoepfe.map(b => b.kuerzel).find(k => ![].concat(k0.richtig).includes(k));
      await karten.nth(0).locator(`button[data-kuerzel="${falsch0}"]`).click();
      pruefe((await karten.nth(0).locator('.rueckmeldung').innerText()).includes('Tipp'), `${id}: Tipp nach falscher Antwort`);

      for (let i = 0; i < U.karten.length; i++) {
        const r = [].concat(U.karten[i].richtig)[0];
        await karten.nth(i).locator(`button[data-kuerzel="${r}"]`).click();
      }
      const bereich = page.locator('#merksatz-bereich');
      pruefe(await bereich.isVisible(), `${id}: Zusammenfassung sichtbar`);
      pruefe((await bereich.innerText()).includes('Das Wichtigste in Kürze'), `${id}: Zusammenfassung erscheint (bei 1 Fehler)`);
      pruefe((await bereich.innerText()).includes(U.danach.replace(/\*\*/g, '').slice(0, 25)), `${id}: Hinweis, wie es weitergeht`);

      await page.reload();
      pruefe((await page.locator('#fortschritt-text').innerText()).startsWith(`${U.karten.length} von`), `${id}: Stand nach Neuladen erhalten`);
      await page.click('#noch-einmal');
      pruefe((await page.locator('#fortschritt-text').innerText()).startsWith('0 von'), `${id}: Zurücksetzen`);

      for (let i = 0; i < U.karten.length; i++) {
        const richtige = [].concat(U.karten[i].richtig);
        for (const b of U.knoepfe.map(x => x.kuerzel)) {
          if (richtige.includes(b)) continue;
          const btn = karten.nth(i).locator(`button[data-kuerzel="${b}"]`);
          if (await btn.isEnabled()) await btn.click();
        }
        await karten.nth(i).locator(`button[data-kuerzel="${richtige[0]}"]`).click();
      }
      pruefe((await bereich.innerText()).includes('nicht einfach durchklicken'), `${id}: Durchklicken erkannt`);
      const breit = await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1);
      pruefe(breit, `${id}: kein waagerechtes Scrollen bei 360 px`);
      // Knöpfe überlappen nicht
      const ueberlapp = await page.evaluate(() => {
        const b = [...document.querySelectorAll('.karte')[0].querySelectorAll('.antwort')].map(x => x.getBoundingClientRect());
        for (let i = 0; i < b.length; i++) for (let j = i + 1; j < b.length; j++) {
          const a = b[i], c = b[j];
          if (a.left < c.right - 1 && c.left < a.right - 1 && a.top < c.bottom - 1 && c.top < a.bottom - 1) return true;
        }
        return false;
      });
      pruefe(!ueberlapp, `${id}: Antwortknöpfe überlappen nicht`);
      await page.click('#noch-einmal');
    }
    await page.goto(basis + 'index.html');
    pruefe(await page.locator('.ab a').count() === 6, 'Übersicht: 6 Links');
    await page.goto(basis + 'lehrer-ab1.html');
    pruefe((await page.locator('#l-inhalt').innerText()).includes('Noch nicht eingerichtet'), 'Lehrerseite ohne Server: Hinweis zur Einrichtung');
    pruefe(fehler.length === 0, 'Teil A: keine Konsolenfehler / fremden Anfragen: ' + fehler.join(' | '));
    await ctx.close();
  }

  /* ---------------- Teil B: Namenseingabe und Fortschritt senden ---------------- */
  const fs1 = fortschrittsServer();
  async function kontextMitServer(optionen) {
    const ctx = await browser.newContext(optionen);
    await ctx.route('**/einstellungen.js', async route => {
      const antwort = await route.fetch();
      const text = (await antwort.text()).replace("serverAdresse: ''", `serverAdresse: '${SERVER}/'`);
      await route.fulfill({ response: antwort, body: text });
    });
    await ctx.route(SERVER + '/**', r => fs1.route(r));
    return ctx;
  }
  const schueler = [];
  {
    const ctx = await kontextMitServer({ viewport: { width: 360, height: 740 }, isMobile: true, hasTouch: true });
    const page = await ctx.newPage();
    const fehler = [];
    beobachte(page, fehler, SERVER);
    await page.goto(basis + 'ab1a.html');
    pruefe(await page.locator('#name-bereich').isVisible(), 'B: Namenseingabe erscheint');
    pruefe(await page.locator('#uebung-teil').isHidden(), 'B: Karten erst nach dem Namen');
    for (const falscherName of ['Lena', 'L K.', 'Arsch K.', '<b>x</b> K.']) {
      await page.fill('#name-feld', falscherName);
      await page.click('#name-form button[type=submit]');
      pruefe(await page.locator('#name-fehler').isVisible() && await page.locator('#uebung-teil').isHidden(), `B: ungültiger Name abgelehnt: ${falscherName}`);
    }
    await page.fill('#name-feld', '  lena   kraus ');
    await page.click('#name-form button[type=submit]');
    pruefe(await page.locator('#uebung-teil').isVisible(), 'B: Karten nach gültigem Namen sichtbar');
    pruefe((await page.locator('#name-zeile').innerText()).includes('Lena K.'), 'B: Name wird zu „Lena K.“');
    await page.waitForTimeout(200);
    pruefe(fs1.posts.length >= 1 && fs1.posts[fs1.posts.length - 1].name === 'Lena K.' && fs1.posts[fs1.posts.length - 1].geloest === 0, 'B: Anmeldung wird gesendet (0 gelöst)');
    const U = I.ab1a;
    const karten = page.locator('.karte');
    const falsch0 = U.knoepfe.map(b => b.kuerzel).find(k => ![].concat(U.karten[1].richtig).includes(k));
    await karten.nth(1).locator(`button[data-kuerzel="${falsch0}"]`).click();
    for (let i = 0; i < 6; i++) await karten.nth(i).locator(`button[data-kuerzel="${[].concat(U.karten[i].richtig)[0]}"]`).click();
    await page.waitForTimeout(200);
    const letzter = fs1.posts[fs1.posts.length - 1];
    pruefe(letzter.geloest === 6 && letzter.raum === 'ab1' && letzter.uebung === 'ab1a' && letzter.gesamt === 10, 'B: Fortschritt 6/10 gesendet');
    pruefe(JSON.stringify(letzter.falsch) === JSON.stringify(['2-' + falsch0]) && letzter.erster === 5, 'B: Fehler beim ersten Versuch (Karte 2, gewählte Antwort) gesendet: ' + JSON.stringify(letzter.falsch));
    pruefe(/^[a-f0-9]{32}$/.test(letzter.geraet), 'B: zufällige Geräte-Kennung');
    // Neu laden: kein erneutes Fragen nach dem Namen
    await page.goto(basis + 'ab1b.html');
    pruefe(await page.locator('#name-bereich').isHidden() && (await page.locator('#name-zeile').innerText()).includes('Lena K.'), 'B: Name bleibt gespeichert');
    // Name ändern
    await page.click('#name-aendern');
    pruefe(await page.locator('#name-bereich').isVisible(), 'B: Name lässt sich ändern');
    await page.fill('#name-feld', 'Anna-Lena K.');
    await page.click('#name-form button[type=submit]');
    pruefe((await page.locator('#name-zeile').innerText()).includes('Anna-Lena K.'), 'B: geänderter Name');
    for (let i = 0; i < 10; i++) await page.locator('.karte').nth(i).locator(`button[data-kuerzel="${[].concat(I.ab1b.karten[i].richtig)[0]}"]`).click();
    await page.waitForTimeout(200);
    pruefe(fs1.posts[fs1.posts.length - 1].geloest === 10, 'B: fertige Übung gesendet');
    const breit = await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1);
    pruefe(breit, 'B: kein waagerechtes Scrollen');
    pruefe(fehler.length === 0, 'Teil B: keine Konsolenfehler / fremden Anfragen: ' + fehler.join(' | '));
    await page.screenshot({ path: path.join(__dirname, 'handy-name.png') });
    await ctx.close();

    // Weitere Schüler (für die Lehreransicht)
    const namen = [['Tim B.', 10, []], ['Mia S.', 3, [1, 2]], ['Jonas W.', 10, [1, 2, 3, 4, 5, 6]]];
    for (const [n, anzahl, falsch] of namen) {
      const c = await kontextMitServer({ viewport: { width: 360, height: 740 } });
      const p = await c.newPage();
      await p.goto(basis + 'ab1a.html');
      await p.fill('#name-feld', n);
      await p.click('#name-form button[type=submit]');
      for (let i = 0; i < anzahl; i++) {
        const k = p.locator('.karte').nth(i);
        if (falsch.includes(I.ab1a.karten[i].nummer)) {
          const f = I.ab1a.knoepfe.map(b => b.kuerzel).find(x => ![].concat(I.ab1a.karten[i].richtig).includes(x));
          await k.locator(`button[data-kuerzel="${f}"]`).click();
        }
        await k.locator(`button[data-kuerzel="${[].concat(I.ab1a.karten[i].richtig)[0]}"]`).click();
      }
      await p.waitForTimeout(150);
      schueler.push(n);
      await c.close();
    }
  }

  /* ---------------- Teil C: Lehrerseite ---------------- */
  {
    const ctx = await kontextMitServer({ viewport: { width: 1280, height: 720 } });
    const page = await ctx.newPage();
    const fehler = [];
    beobachte(page, fehler, SERVER);
    page.on('dialog', d => d.accept());
    // ohne Schlüssel → Eingabe
    await page.goto(basis + 'lehrer-ab1.html');
    pruefe(await page.locator('#l-feld').isVisible(), 'C: ohne Schlüssel erscheint die Eingabe');
    await page.fill('#l-feld', 'falsch');
    await page.click('#l-form button');
    await page.waitForTimeout(300);
    pruefe((await page.locator('#l-inhalt').innerText()).includes('stimmt nicht'), 'C: falscher Schlüssel wird gemeldet');
    // mit Schlüssel in der Adresse
    await page.goto(basis + 'lehrer-ab1.html#k=' + SCHLUESSEL);
    await page.waitForSelector('.l-karte[data-uebung="ab1a"]');
    pruefe(!page.url().includes(SCHLUESSEL), 'C: Schlüssel verschwindet aus der Adresszeile');
    pruefe(await page.locator('.l-karte').count() === 3, 'C: drei Übungen für AB 1');
    const a = page.locator('.l-karte[data-uebung="ab1a"]');
    const zahl = await a.locator('.l-zahl').innerText();
    pruefe(/^2 von 4 fertig · 2 dabei/.test(zahl), 'C: „2 von 4 fertig · 2 dabei“ bei ab1a: ' + zahl);
    const pillen = await a.locator('.l-pille').allInnerTexts();
    pruefe(pillen.length === 4 && pillen.join(' ').includes('Mia S.') && pillen.join(' ').includes('3/10'), 'C: alle Namen mit Fortschritt: ' + pillen.join(' | '));
    pruefe(pillen[pillen.length - 1].includes('Mia S.'), 'C: Wer am wenigsten hat, steht hinten');
    pruefe(await a.locator('.l-klick').count() === 1, 'C: Durchklicken (Jonas W.) wird markiert');
    const oft = await a.locator('.l-oft li').allInnerTexts();
    pruefe(oft.length === 3 && oft[0].startsWith('Karte 2 · 3×'), 'C: häufigster Fehler Karte 2: ' + oft.join(' | '));
    // Besprechen: Karte groß anzeigen, gewählte falsche Antwort mit Anzahl, Lösung erst nach „Auflösen“
    await a.locator('.l-oft-knopf').first().click();
    const ansicht = page.locator('.l-besprechen');
    pruefe(await ansicht.isVisible(), 'C: Besprechen-Ansicht öffnet sich');
    pruefe((await ansicht.locator('.l-b-aussage').innerText()).includes('Glas Milch'), 'C: Besprechen zeigt Karte 2');
    const gew = ansicht.locator('.l-b-gewaehlt');
    pruefe(await gew.count() === 1 && (await gew.innerText()).includes('R – richtig gehandelt') && (await gew.innerText()).includes('3× zuerst gewählt'), 'C: gewählte falsche Antwort mit Anzahl');
    pruefe(await ansicht.locator('.l-b-erklaerung').isHidden(), 'C: Erklärung vor dem Auflösen verborgen');
    pruefe(!(await ansicht.innerText()).includes('Lena') && !(await ansicht.innerText()).includes('Mia'), 'C: Besprechen ohne Namen');
    await page.screenshot({ path: path.join(__dirname, 'lehrer-besprechen.png') });
    await page.click('#l-b-auf');
    pruefe(await ansicht.locator('.l-b-erklaerung').isVisible() && await page.locator('.l-aufgeloest .l-b-loesung').count() === 1, 'C: Auflösen zeigt Lösung und Erklärung');
    await page.screenshot({ path: path.join(__dirname, 'lehrer-aufgeloest.png') });
    await page.click('#l-b-weiter');
    pruefe((await ansicht.locator('.l-b-kopf').innerText()).includes('Karte 1'), 'C: Nächste Karte');
    await page.keyboard.press('Escape');
    pruefe(await page.locator('.l-besprechen').count() === 0, 'C: Besprechen schließen mit Esc');
    const b = page.locator('.l-karte[data-uebung="ab1b"]');
    pruefe(/^1 von 4 fertig/.test(await b.locator('.l-zahl').innerText()), 'C: ab1b: 1 von 4 fertig');
    pruefe(await b.locator('.l-offen').count() === 3, 'C: ab1b: 3 noch nicht begonnen');
    pruefe((await page.locator('#l-status').innerText()).includes('4 angemeldet'), 'C: Statuszeile');
    await page.screenshot({ path: path.join(__dirname, 'lehrer-ab1.png') });
    // Aktualisierung: neuer Fortschritt erscheint ohne Neuladen
    fs1.raeume.ab1['f'.repeat(32)] = { id: 'neu1', name: 'Paul F.', t: Date.now(), uebungen: { ab1a: { geloest: 10, gesamt: 10, erster: 10, falsch: [], t: Date.now() } } };
    await page.waitForTimeout(5600);
    pruefe(/^3 von 5 fertig/.test(await a.locator('.l-zahl').innerText()), 'C: Anzeige aktualisiert sich selbst');
    // Entfernen eines Namens
    await a.locator('.l-pille', { hasText: 'Paul F.' }).locator('.l-weg').click({ force: true });
    await page.waitForTimeout(400);
    pruefe(!(await a.locator('.l-pille').allInnerTexts()).join(' ').includes('Paul F.'), 'C: Name entfernt');
    // AB 2 ist getrennt
    await page.goto(basis + 'lehrer-ab2.html');
    await page.waitForSelector('.l-karte');
    pruefe(await page.locator('.l-karte').count() === 3 && (await page.locator('.l-karte').first().innerText()).includes('Noch niemand'), 'C: AB 2 eigene Seite, noch leer (Schlüssel gemerkt)');
    // Leeren
    await page.goto(basis + 'lehrer-ab1.html');
    await page.waitForSelector('.l-pille');
    await page.click('#l-leeren');
    await page.waitForTimeout(400);
    pruefe(await page.locator('.l-pille').count() === 0, 'C: Liste geleert');
    const breit = await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1);
    pruefe(breit, 'C: kein waagerechtes Scrollen');
    const echteFehler = fehler.filter(f => !/status of 401/.test(f)); // 401 beim absichtlich falschen Schlüssel
    pruefe(echteFehler.length === 0, 'Teil C: keine Konsolenfehler / fremden Anfragen: ' + echteFehler.join(' | '));
    await ctx.close();
  }

  await browser.close();
  s.close();
  console.log(`${ok} Prüfungen bestanden, ${nok} fehlgeschlagen`);
  process.exit(nok ? 1 : 0);
})();
