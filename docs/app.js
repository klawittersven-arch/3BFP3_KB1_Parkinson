/* Programmlogik der Übungen (Zuordnen mit sofortiger Rückmeldung).
 * Alle Texte stehen in inhalte.js – hier muss für Textänderungen nichts angepasst werden. */
(function () {
  'use strict';

  var A = INHALTE.allgemein;
  var id = document.body.getAttribute('data-uebung');
  var U = INHALTE[id];
  var SPEICHER = 'kb1-parkinson-' + id;
  var GELOEST = 'kb1-parkinson-geloest';

  // ---------- Hilfsfunktionen ----------
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function fmt(s) { // **fett** → <strong>
    return esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  }
  function ersetze(s, w) {
    return s.replace(/\{(\w)\}/g, function (m, k) { return w[k] !== undefined ? w[k] : m; });
  }
  function richtigeListe(k) { return Array.isArray(k.richtig) ? k.richtig : [k.richtig]; }
  function erklaerungFuer(k, kuerzel) {
    if (k.erklaerung && typeof k.erklaerung === 'object') return k.erklaerung[kuerzel] || '';
    return k.erklaerung || '';
  }
  function lade(schluessel, art) {
    try { var s = (art || window.sessionStorage).getItem(schluessel); return s ? JSON.parse(s) : null; } catch (e) { return null; }
  }
  function speichere(schluessel, wert, art) {
    try { (art || window.sessionStorage).setItem(schluessel, JSON.stringify(wert)); } catch (e) { /* ohne Speicher geht es auch */ }
  }
  function lokal() { try { return window.localStorage; } catch (e) { return null; } }

  // ---------- Zustand ----------
  function leererZustand() {
    return U.karten.map(function () { return { geloest: false, falsch: [], gewaehlt: null }; });
  }
  var zustand = lade(SPEICHER);
  if (!zustand || zustand.length !== U.karten.length) zustand = leererZustand();

  // ---------- Seite aufbauen ----------
  document.title = U.titel + ' – ' + A.kopfzeile;
  document.getElementById('kopfzeile').textContent = A.kopfzeile + ' · ' + U.ab;
  document.getElementById('titel').textContent = U.titel;
  document.getElementById('anweisung').innerHTML = fmt(U.anweisung);
  document.getElementById('noch-einmal').textContent = A.nochEinmal;
  document.getElementById('zur-uebersicht').textContent = A.zurUebersicht;

  if (U.hilfe) {
    var d = document.createElement('details');
    d.className = 'hilfe';
    d.innerHTML = '<summary>' + esc(U.hilfe.titel) + '</summary><ul>' +
      U.hilfe.punkte.map(function (p) { return '<li>' + fmt(p) + '</li>'; }).join('') + '</ul>';
    document.getElementById('hilfe-platz').appendChild(d);
  }

  // Lange Beschriftungen: Knöpfe auf schmalen Handys untereinander statt nebeneinander
  var laengste = Math.max.apply(null, U.knoepfe.map(function (b) { return b.text.length; }));
  var lang = (U.knoepfe.length >= 3 && laengste > 6) || laengste > 16;
  // Vier Knöpfe mit mittellangen Beschriftungen: auf dem Handy 2 × 2 statt untereinander
  var zweiMalZwei = U.knoepfe.length === 4 && laengste <= 16;

  var kartenBox = document.getElementById('karten');
  var kartenEl = [];

  U.karten.forEach(function (k, i) {
    var el = document.createElement('section');
    el.className = 'karte';
    el.setAttribute('aria-labelledby', 'k' + i + '-text');
    var knoepfe = U.knoepfe.map(function (b) {
      return '<button type="button" class="antwort" data-kuerzel="' + esc(b.kuerzel) + '">' +
        '<span class="symbol" aria-hidden="true"></span><span class="beschriftung">' + esc(b.text) + '</span></button>';
    }).join('');
    el.innerHTML =
      '<p class="karte-text" id="k' + i + '-text"><span class="nummer">' + esc(k.nummer) + '</span>' + fmt(k.text) + '</p>' +
      '<div class="knoepfe knoepfe-' + U.knoepfe.length + (zweiMalZwei ? ' knoepfe-2x2' : (lang ? ' knoepfe-lang' : '')) + '" role="group" aria-label="Antwort zu Karte ' + esc(k.nummer) + '">' + knoepfe + '</div>' +
      '<div class="rueckmeldung" role="status" aria-live="polite"></div>';
    kartenBox.appendChild(el);
    kartenEl.push(el);
    Array.prototype.forEach.call(el.querySelectorAll('.antwort'), function (btn) {
      btn.addEventListener('click', function () { antworte(i, btn.getAttribute('data-kuerzel')); });
    });
  });

  // ---------- Antworten ----------
  function antworte(i, kuerzel) {
    var z = zustand[i];
    if (z.geloest || z.falsch.indexOf(kuerzel) >= 0) return;
    if (richtigeListe(U.karten[i]).indexOf(kuerzel) >= 0) {
      z.geloest = true;
      z.gewaehlt = kuerzel;
    } else {
      z.falsch.push(kuerzel);
    }
    speichere(SPEICHER, zustand);
    zeichneKarte(i, true);
    aktualisiere(true);
  }

  function zeichneKarte(i, frisch) {
    var k = U.karten[i], z = zustand[i], el = kartenEl[i];
    var rm = el.querySelector('.rueckmeldung');
    Array.prototype.forEach.call(el.querySelectorAll('.antwort'), function (btn) {
      var ku = btn.getAttribute('data-kuerzel');
      var sym = btn.querySelector('.symbol');
      btn.classList.remove('ist-richtig', 'ist-falsch');
      btn.disabled = false;
      sym.textContent = '';
      if (z.falsch.indexOf(ku) >= 0) { btn.classList.add('ist-falsch'); btn.disabled = true; sym.textContent = '✗'; }
      if (z.geloest) {
        btn.disabled = true;
        if (ku === z.gewaehlt) { btn.classList.add('ist-richtig'); sym.textContent = '✓'; }
      }
    });
    el.classList.toggle('karte-richtig', z.geloest);
    el.classList.toggle('karte-tipp', !z.geloest && z.falsch.length > 0);
    if (z.geloest) {
      rm.className = 'rueckmeldung richtig';
      rm.innerHTML = '<p class="rm-kopf"><span aria-hidden="true">✓</span> ' + esc(A.richtigText) + '</p><p>' + fmt(erklaerungFuer(k, z.gewaehlt)) + '</p>';
    } else if (z.falsch.length) {
      rm.className = 'rueckmeldung falsch';
      rm.innerHTML = '<p class="rm-kopf"><span aria-hidden="true">✗</span> ' + esc(A.falschText) + '</p><p><strong>' + esc(A.tippVorwort) + '</strong> ' + fmt(k.tipp) + '</p>';
    } else {
      rm.className = 'rueckmeldung';
      rm.innerHTML = '';
    }
  }

  function anzahlGeloest() { return zustand.filter(function (z) { return z.geloest; }).length; }
  function anzahlErsterVersuch() { return zustand.filter(function (z) { return z.geloest && z.falsch.length === 0; }).length; }

  function aktualisiere(frisch) {
    var n = U.karten.length, g = anzahlGeloest();
    document.getElementById('fortschritt-text').textContent = ersetze(A.fortschritt, { x: g, y: n });
    document.getElementById('fortschritt-balken').style.width = (100 * g / n) + '%';
    var bereich = document.getElementById('merksatz-bereich');
    if (g < n) { bereich.hidden = true; bereich.innerHTML = ''; return; }

    var erster = anzahlErsterVersuch();
    var mind = U.mindestens || 0;
    bereich.hidden = false;
    if (erster < mind) {
      bereich.className = 'durchklicken';
      bereich.innerHTML = '<h2>' + esc(A.durchklickenTitel) + '</h2><p>' +
        esc(ersetze(A.durchklickenText, { x: erster, y: n, z: mind })) + '</p>' +
        '<button type="button" class="knopf" id="neu-start">' + esc(A.durchklickenKnopf) + '</button>';
      document.getElementById('neu-start').addEventListener('click', zuruecksetzen);
    } else {
      bereich.className = 'merksatz';
      var weiter = '';
      if (/a$/.test(id) && INHALTE[id.replace(/a$/, 'b')]) {
        weiter = '<a class="knopf" href="' + id.replace(/a$/, 'b') + '.html">' + esc(A.naechsteUebung) + ' →</a>';
      } else {
        weiter = '<a class="knopf" href="index.html">' + esc(A.zurUebersicht) + '</a>';
      }
      bereich.innerHTML = '<h2><span aria-hidden="true">📝</span> ' + esc(A.merksatzUeberschrift) + '</h2>' +
        '<p class="merksatz-text">' + fmt(U.merksatz) + '</p>' +
        '<p class="merksatz-hinweis">' + esc(A.merksatzHinweis) + '</p>' +
        '<p class="erster-versuch">' + esc(ersetze(A.ersterVersuch, { x: erster, y: n })) + '</p>' + weiter;
      var l = lokal();
      if (l) {
        var geloest = lade(GELOEST, l) || {};
        geloest[id] = Date.now();
        speichere(GELOEST, geloest, l);
      }
    }
    if (frisch) {
      setTimeout(function () {
        try { bereich.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (e) { bereich.scrollIntoView(); }
      }, 150);
    }
  }

  function zuruecksetzen() {
    zustand = leererZustand();
    speichere(SPEICHER, zustand);
    var l = lokal();
    if (l) {
      var geloest = lade(GELOEST, l) || {};
      delete geloest[id];
      speichere(GELOEST, geloest, l);
    }
    kartenEl.forEach(function (el, i) { zeichneKarte(i, false); });
    aktualisiere(false);
    window.scrollTo(0, 0);
  }

  document.getElementById('noch-einmal').addEventListener('click', zuruecksetzen);

  kartenEl.forEach(function (el, i) { zeichneKarte(i, false); });
  aktualisiere(false);

  if ('serviceWorker' in navigator && location.protocol === 'https:') {
    navigator.serviceWorker.register('sw.js').catch(function () { /* egal */ });
  }
})();
