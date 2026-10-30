/* Programmlogik der Übungen (Zuordnen mit sofortiger Rückmeldung).
 * Alle Texte stehen in inhalte.js – hier muss für Textänderungen nichts angepasst werden. */
(function () {
  'use strict';

  var A = INHALTE.allgemein;
  var E = window.EINSTELLUNGEN || {};
  var id = document.body.getAttribute('data-uebung');
  var U = INHALTE[id];
  var SPEICHER = 'kb1-parkinson-' + id;
  var GELOEST = 'kb1-parkinson-geloest';
  var NAME = 'kb1-parkinson-name';
  var GERAET = 'kb1-parkinson-geraet';
  var SERVER = String(E.serverAdresse || '').replace(/\/+$/, '');

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

  // ---------- Name und Fortschrittsanzeige ----------
  // Name: „Vorname X.“ – nur nötig, wenn in einstellungen.js eine serverAdresse steht.
  function normalisiereName(roh) {
    var t = String(roh || '').replace(/\s+/g, ' ').trim();
    var m = t.match(/^(.+) (\S)[^ ]*$/); // „Lena Kraus“ wird zu „Lena K.“
    if (!m) return null;
    var vor = m[1].charAt(0).toUpperCase() + m[1].slice(1);
    var name = vor + ' ' + m[2].toUpperCase() + '.';
    if (name.length > 24 || !/^\p{L}[\p{L}' -]*\p{L} \p{L}\.$/u.test(name)) return null;
    var flach = name.toLowerCase().replace(/[^\p{L}]/gu, '');
    var sperr = (E.sperrwoerter || []).some(function (w) { return flach.indexOf(w) >= 0; });
    return sperr ? null : name;
  }
  function geraetId() {
    var l = lokal(), g = null;
    try { g = l && l.getItem(GERAET); } catch (e) { g = null; }
    if (g && /^[a-f0-9]{16,64}$/.test(g)) return g;
    var b = new Uint8Array(16);
    try { window.crypto.getRandomValues(b); } catch (e) { for (var i = 0; i < 16; i++) b[i] = Math.floor(Math.random() * 256); }
    g = Array.prototype.map.call(b, function (x) { return ('0' + x.toString(16)).slice(-2); }).join('');
    try { if (l) l.setItem(GERAET, g); } catch (e) { /* egal */ }
    return g;
  }
  function gespeicherterName() {
    var l = lokal();
    try { return l ? normalisiereName(l.getItem(NAME)) : null; } catch (e) { return null; }
  }
  var name = SERVER ? gespeicherterName() : null;
  var wiederholung = null;

  function sende() {
    if (!SERVER || !name || !U.raum) return;
    var daten = {
      raum: U.raum, uebung: id, geraet: geraetId(), name: name,
      geloest: anzahlGeloest(), gesamt: U.karten.length, erster: anzahlErsterVersuch(),
      // je Karte die zuerst gewählte falsche Antwort, z. B. "2-F" (für die Besprechung am Beamer)
      falsch: zustand.map(function (z, i) { return z.falsch.length ? U.karten[i].nummer + '-' + z.falsch[0] : ''; })
        .filter(function (x) { return x; })
    };
    var ok = function (r) { if (!r.ok) throw new Error('Status ' + r.status); };
    try {
      fetch(SERVER + '/fortschritt', {
        method: 'POST', headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(daten), keepalive: true
      }).then(ok).catch(spaeter);
    } catch (e) { spaeter(); }
  }
  function spaeter() { // ohne Verbindung: in 10 s noch einmal den aktuellen Stand senden
    if (wiederholung) return;
    wiederholung = setTimeout(function () { wiederholung = null; sende(); }, 10000);
  }

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
  var nameBereich = document.getElementById('name-bereich');
  var nameZeile = document.getElementById('name-zeile');
  var uebungTeil = document.getElementById('uebung-teil');

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
    sende();
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
      bereich.className = 'abschluss';
      bereich.innerHTML =
        '<div class="weiter" role="status"><p class="weiter-titel"><span aria-hidden="true">✓</span> ' + esc(A.fertigTitel) + '</p>' +
        (U.danach ? '<p class="weiter-text">' + fmt(U.danach) + '</p>' : '') + '</div>' +
        '<div class="merksatz"><h2><span aria-hidden="true">📝</span> ' + esc(A.merksatzUeberschrift) + '</h2>' +
        '<p class="merksatz-text">' + fmt(U.merksatz) + '</p>' +
        '<p class="erster-versuch">' + esc(ersetze(A.ersterVersuch, { x: erster, y: n })) + '</p></div>';
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
    sende();
    window.scrollTo(0, 0);
  }

  document.getElementById('noch-einmal').addEventListener('click', zuruecksetzen);

  kartenEl.forEach(function (el, i) { zeichneKarte(i, false); });
  aktualisiere(false);

  // ---------- Namenseingabe ----------
  function zeigeName() {
    nameZeile.hidden = false;
    nameZeile.innerHTML = esc(ersetze(A.nameAnzeige, { x: name })) +
      ' · <button type="button" class="link-knopf" id="name-aendern">' + esc(A.nameAendern) + '</button>';
    document.getElementById('name-aendern').addEventListener('click', frageName);
  }
  function frageName() {
    uebungTeil.hidden = true;
    nameZeile.hidden = true;
    nameBereich.hidden = false;
    nameBereich.innerHTML = '<h2>' + esc(A.nameTitel) + '</h2><p>' + fmt(A.nameText) + '</p>' +
      '<form id="name-form" novalidate><label for="name-feld" class="unsichtbar">Name</label>' +
      '<input id="name-feld" type="text" autocomplete="off" autocapitalize="words" spellcheck="false" maxlength="30" placeholder="' + esc(A.nameBeispiel) + '" value="' + esc(name || '') + '">' +
      '<p class="name-fehler" id="name-fehler" role="alert" hidden></p>' +
      '<button type="submit" class="knopf">' + esc(A.nameKnopf) + '</button></form>' +
      '<p class="hinweis-klein">' + esc(A.nameDatenschutz) + '</p>';
    var feld = document.getElementById('name-feld');
    document.getElementById('name-form').addEventListener('submit', function (ev) {
      ev.preventDefault();
      var n = normalisiereName(feld.value);
      var f = document.getElementById('name-fehler');
      if (!n) { f.textContent = A.nameFehler; f.hidden = false; feld.focus(); return; }
      name = n;
      var l = lokal();
      try { if (l) l.setItem(NAME, n); } catch (e) { /* egal */ }
      nameBereich.hidden = true;
      nameBereich.innerHTML = '';
      uebungTeil.hidden = false;
      zeigeName();
      sende();
    });
  }
  if (SERVER) {
    if (name) { zeigeName(); sende(); } else { frageName(); }
  }

  if ('serviceWorker' in navigator && location.protocol === 'https:') {
    navigator.serviceWorker.register('sw.js').catch(function () { /* egal */ });
  }
})();
