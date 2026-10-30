/* Lehrerseite für den Beamer: zeigt live, wie weit die Klasse mit den Übungen eines Arbeitsblatts ist.
 * Aufruf: lehrer-ab1.html#k=IHR-SCHLÜSSEL (der Schlüssel wird danach nur in diesem Browser gespeichert
 * und aus der Adresszeile entfernt, damit er auf dem Beamer nicht zu sehen ist). */
(function () {
  'use strict';

  var E = window.EINSTELLUNGEN || {};
  var SERVER = String(E.serverAdresse || '').replace(/\/+$/, '');
  var SEKUNDEN = Math.max(2, Number(E.aktualisierenSekunden) || 5);
  var raum = document.body.getAttribute('data-raum');
  var UEBUNGEN = Object.keys(INHALTE).filter(function (k) { return INHALTE[k].raum === raum; });
  var SCHLUESSEL_SPEICHER = 'kb1-parkinson-lehrer-schluessel';

  var inhalt = document.getElementById('l-inhalt');
  var status = document.getElementById('l-status');
  var fuss = document.getElementById('l-fuss');
  var letzterStand = null, timer = null, schluessel = null;

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function kurz(s, n) {
    s = String(s).replace(/\*\*/g, '');
    return s.length > n ? s.slice(0, n - 1) + '…' : s;
  }
  function uhrzeit(ms) {
    var d = new Date(ms);
    return ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2) + ':' + ('0' + d.getSeconds()).slice(-2);
  }
  function lokal() { try { return window.localStorage; } catch (e) { return null; } }

  // ---------- Schlüssel ----------
  function leseSchluessel() {
    var m = location.hash.match(/k=([^&]+)/);
    var l = lokal();
    if (m) {
      var k = decodeURIComponent(m[1]);
      try { if (l) l.setItem(SCHLUESSEL_SPEICHER, k); } catch (e) { /* egal */ }
      try { history.replaceState(null, '', location.pathname + location.search); } catch (e) { location.hash = ''; }
      return k;
    }
    try { return l ? l.getItem(SCHLUESSEL_SPEICHER) : null; } catch (e) { return null; }
  }

  function frageSchluessel(meldung) {
    stoppe();
    inhalt.innerHTML = '<section class="l-karte l-schmal"><h2>Lehrer-Schlüssel</h2>' +
      (meldung ? '<p class="l-fehler">' + esc(meldung) + '</p>' : '') +
      '<p>Geben Sie den Schlüssel ein, den Sie im Cloudflare-Dashboard als <code>LEHRER_SCHLUESSEL</code> hinterlegt haben.</p>' +
      '<form id="l-form"><input id="l-feld" type="password" autocomplete="off" aria-label="Lehrer-Schlüssel">' +
      '<button type="submit" class="l-knopf">Anzeigen</button></form></section>';
    fuss.innerHTML = '';
    document.getElementById('l-form').addEventListener('submit', function (ev) {
      ev.preventDefault();
      var k = document.getElementById('l-feld').value.trim();
      if (!k) return;
      schluessel = k;
      var l = lokal();
      try { if (l) l.setItem(SCHLUESSEL_SPEICHER, k); } catch (e) { /* egal */ }
      starte();
    });
  }

  // ---------- Server ----------
  function hole() {
    var url = SERVER + '/stand?raum=' + encodeURIComponent(raum) + '&k=' + encodeURIComponent(schluessel);
    return fetch(url, { cache: 'no-store' }).then(function (r) {
      if (r.status === 401) { frageSchluessel('Der Schlüssel stimmt nicht.'); throw new Error('401'); }
      if (r.status === 503) { throw new Error('Auf dem Server ist noch kein LEHRER_SCHLUESSEL hinterlegt.'); }
      if (!r.ok) throw new Error('Server antwortet mit ' + r.status);
      return r.json();
    }).then(function (daten) {
      letzterStand = daten;
      zeichne(daten);
      status.textContent = 'Stand ' + uhrzeit(daten.jetzt || Date.now()) + ' · ' + daten.eintraege.length +
        ' angemeldet · aktualisiert alle ' + SEKUNDEN + ' s';
      status.className = 'l-status';
    }).catch(function (e) {
      if (e && e.message === '401') return;
      status.textContent = (e && e.message && e.message.indexOf('LEHRER') >= 0 ? e.message :
        'Keine Verbindung zum Server') + (letzterStand ? ' – angezeigt wird der letzte Stand' : '');
      status.className = 'l-status l-warnung';
    });
  }

  function sende(pfad, daten) {
    return fetch(SERVER + pfad, {
      method: 'POST', headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(Object.assign({ raum: raum, k: schluessel }, daten || {}))
    });
  }

  // ---------- Anzeige ----------
  function zeichne(daten) {
    var leute = daten.eintraege.slice().sort(function (a, b) { return a.name.localeCompare(b.name, 'de'); });
    inhalt.innerHTML = UEBUNGEN.map(function (uid) {
      var U = INHALTE[uid];
      var n = U.karten.length;
      var mind = U.mindestens || 0;
      var zeilen = leute.map(function (p) {
        var u = (p.uebungen || {})[uid];
        var g = u ? Math.min(u.geloest, n) : -1;
        return { p: p, u: u, g: g, fertig: g === n, klick: g === n && u.erster < mind };
      });
      var fertig = zeilen.filter(function (z) { return z.fertig; }).length;
      var dabei = zeilen.filter(function (z) { return z.g > 0 && !z.fertig; }).length;
      var gesamt = zeilen.length;
      var offen = gesamt - fertig - dabei;
      zeilen.sort(function (a, b) {
        if (a.fertig !== b.fertig) return a.fertig ? -1 : 1;
        if (a.g !== b.g) return b.g - a.g;
        return a.p.name.localeCompare(b.p.name, 'de');
      });
      var pillen = zeilen.map(function (z) {
        var anteil = z.g > 0 ? Math.round(100 * z.g / n) : 0;
        var art = z.fertig ? (z.klick ? 'l-pille l-klick' : 'l-pille l-fertig') : (z.g > 0 ? 'l-pille l-dabei' : 'l-pille l-offen');
        var stand = z.fertig ? (z.klick ? '⚠' : '✓') : (z.g >= 0 ? z.g + '/' + n : '–');
        var titel = z.klick ? 'fertig, aber beim ersten Versuch nur ' + z.u.erster + ' von ' + n + ' richtig' : '';
        return '<li class="' + art + '" style="--anteil:' + anteil + '%"' + (titel ? ' title="' + esc(titel) + '"' : '') + '>' +
          '<span class="l-name">' + esc(z.p.name) + '</span><span class="l-stand">' + stand + '</span>' +
          '<button type="button" class="l-weg" data-id="' + esc(z.p.id) + '" data-name="' + esc(z.p.name) + '" aria-label="' + esc(z.p.name) + ' entfernen">×</button></li>';
      }).join('');
      // Welche Karten waren beim ersten Versuch am häufigsten falsch?
      var zaehler = {};
      zeilen.forEach(function (z) {
        if (!z.u || !z.u.falsch) return;
        z.u.falsch.forEach(function (nr) { zaehler[nr] = (zaehler[nr] || 0) + 1; });
      });
      var oft = Object.keys(zaehler).map(function (nr) { return [Number(nr), zaehler[nr]]; })
        .sort(function (a, b) { return b[1] - a[1] || a[0] - b[0]; }).slice(0, 3);
      var oftHtml = oft.length ? '<h3>Oft falsch beim ersten Versuch</h3><ol class="l-oft">' + oft.map(function (o) {
        var karte = U.karten.filter(function (k) { return k.nummer === o[0]; })[0];
        return '<li><strong>Karte ' + o[0] + ' · ' + o[1] + '×</strong> ' + esc(kurz(karte ? karte.text : '', 90)) + '</li>';
      }).join('') + '</ol>' : '';
      var proz = function (x) { return gesamt ? (100 * x / gesamt) : 0; };
      return '<section class="l-karte" data-uebung="' + uid + '">' +
        '<h2>' + esc(U.titel) + '</h2>' +
        '<p class="l-zahl"><strong>' + fertig + '</strong> von ' + gesamt + ' fertig' +
        (dabei ? ' <span class="l-dabei-text">· ' + dabei + ' dabei</span>' : '') + '</p>' +
        '<div class="l-balken" role="img" aria-label="' + fertig + ' fertig, ' + dabei + ' dabei, ' + offen + ' noch nicht begonnen">' +
        '<span class="l-b-fertig" style="width:' + proz(fertig) + '%"></span>' +
        '<span class="l-b-dabei" style="width:' + proz(dabei) + '%"></span></div>' +
        (gesamt ? '<ul class="l-pillen">' + pillen + '</ul>' : '<p class="l-leer">Noch niemand angemeldet.</p>') +
        oftHtml + '</section>';
    }).join('');
    Array.prototype.forEach.call(inhalt.querySelectorAll('.l-weg'), function (b) {
      b.addEventListener('click', function () {
        if (!window.confirm('„' + b.getAttribute('data-name') + '“ von der Liste entfernen?')) return;
        sende('/entfernen', { id: b.getAttribute('data-id') }).then(hole, hole);
      });
    });
  }

  function zeichneFuss() {
    fuss.innerHTML = '<button type="button" class="l-knopf l-zweit" id="l-leeren">Liste leeren (neue Stunde)</button> ' +
      '<button type="button" class="l-knopf l-zweit" id="l-schluessel">Schlüssel ändern</button>' +
      '<p class="l-hinweis">Namen und Fortschritt werden nach spätestens 12 Stunden automatisch gelöscht. ' +
      '⚠ = fertig, aber beim ersten Versuch zu oft falsch (durchgeklickt?).</p>';
    document.getElementById('l-leeren').addEventListener('click', function () {
      if (!window.confirm('Alle Namen und Fortschritte für dieses Arbeitsblatt löschen?')) return;
      sende('/leeren').then(hole, hole);
    });
    document.getElementById('l-schluessel').addEventListener('click', function () {
      var l = lokal();
      try { if (l) l.removeItem(SCHLUESSEL_SPEICHER); } catch (e) { /* egal */ }
      schluessel = null;
      frageSchluessel();
    });
  }

  function stoppe() { if (timer) { clearInterval(timer); timer = null; } }
  function starte() {
    stoppe();
    inhalt.innerHTML = '<p class="l-leer">Lade …</p>';
    zeichneFuss();
    hole();
    timer = setInterval(hole, SEKUNDEN * 1000);
  }

  if (!SERVER) {
    inhalt.innerHTML = '<section class="l-karte l-schmal"><h2>Noch nicht eingerichtet</h2>' +
      '<p>Tragen Sie in <code>docs/einstellungen.js</code> bei <code>serverAdresse</code> die Adresse Ihres Cloudflare-Workers ein ' +
      '(siehe README, Abschnitt „Fortschrittsanzeige einrichten“).</p></section>';
    return;
  }
  schluessel = leseSchluessel();
  if (schluessel) starte(); else frageSchluessel();
  window.addEventListener('hashchange', function () {
    if (!/k=/.test(location.hash)) return;
    schluessel = leseSchluessel();
    starte();
  });
})();
