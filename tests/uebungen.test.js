/* Automatischer Test aller Übungen in Handygröße (Playwright, Chromium).
 * Aufruf (im Repository-Ordner):  node tests/uebungen.test.js
 * Prüft: falsche Antwort → Tipp und kein Merksatz; alle richtig → Merksatz erscheint;
 * „durchklicken“ wird erkannt; „Noch einmal üben“ setzt zurück; keine Konsolenfehler,
 * keine Anfragen an fremde Adressen. */
const { chromium } = require('playwright');
const http = require('http');
const fs = require('fs');
const path = require('path');

const DOCS = path.join(__dirname, '..', 'docs');
const TYPEN = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png' };

function server() {
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

(async () => {
  global.window = {};
  eval(fs.readFileSync(path.join(DOCS, 'inhalte.js'), 'utf8') + ';global.I = INHALTE;');
  const s = await server();
  const basis = `http://127.0.0.1:${s.address().port}/`;
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 360, height: 740 }, isMobile: true, hasTouch: true });
  const page = await ctx.newPage();
  const fehler = [];
  page.on('console', m => { if (m.type() === 'error') fehler.push(m.text()); });
  page.on('pageerror', e => fehler.push(String(e)));
  page.on('request', r => { if (!r.url().startsWith(basis)) fehler.push('fremde Anfrage: ' + r.url()); });
  let ok = 0, nok = 0;
  const pruefe = (bed, text) => { if (bed) ok++; else { nok++; console.log('  ✗ ' + text); } };

  for (const id of ['ab1a', 'ab1b', 'ab2a', 'ab2b']) {
    const U = I[id];
    await page.goto(basis + id + '.html');
    await page.evaluate(() => sessionStorage.clear());
    await page.reload();
    const karten = page.locator('.karte');
    pruefe(await karten.count() === U.karten.length, `${id}: Anzahl Karten`);
    pruefe(!(await page.locator('#merksatz-bereich').isVisible()), `${id}: Merksatz anfangs verborgen`);
    pruefe(!(await page.content()).includes(U.merksatz.slice(0, 40)), `${id}: Merksatz steht nicht vorab im Text`);

    // 1) Erste Karte falsch beantworten → Tipp
    const k0 = U.karten[0];
    const falsch0 = U.knoepfe.map(b => b.kuerzel).find(k => ![].concat(k0.richtig).includes(k));
    await karten.nth(0).locator(`button[data-kuerzel="${falsch0}"]`).click();
    pruefe((await karten.nth(0).locator('.rueckmeldung').innerText()).includes('Tipp'), `${id}: Tipp nach falscher Antwort`);

    // 2) Alle Karten richtig beantworten
    for (let i = 0; i < U.karten.length; i++) {
      const r = [].concat(U.karten[i].richtig)[0];
      await karten.nth(i).locator(`button[data-kuerzel="${r}"]`).click();
    }
    const bereich = page.locator('#merksatz-bereich');
    pruefe(await bereich.isVisible(), `${id}: Merksatz-Bereich sichtbar`);
    pruefe((await bereich.innerText()).includes('Das Wichtigste in Kürze'), `${id}: Zusammenfassung erscheint (bei 1 Fehler)`);

    // 3) Reload behält den Stand
    await page.reload();
    pruefe((await page.locator('#fortschritt-text').innerText()).startsWith(`${U.karten.length} von`), `${id}: Stand nach Neuladen erhalten`);

    // 4) Zurücksetzen
    await page.click('#noch-einmal');
    pruefe((await page.locator('#fortschritt-text').innerText()).startsWith('0 von'), `${id}: Zurücksetzen`);

    // 5) Durchklicken: immer zuerst falsch
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
    // Waagerechtes Scrollen?
    const breit = await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1);
    pruefe(breit, `${id}: kein waagerechtes Scrollen bei 360 px`);
    await page.click('#noch-einmal');
  }
  await page.goto(basis + 'index.html');
  pruefe(await page.locator('.ab a').count() === 4, 'Übersicht: 4 Links');
  pruefe(fehler.length === 0, 'keine Konsolenfehler / fremden Anfragen: ' + fehler.join(' | '));
  await browser.close();
  s.close();
  console.log(`${ok} Prüfungen bestanden, ${nok} fehlgeschlagen`);
  process.exit(nok ? 1 : 0);
})();
