# KB I – Parkinson · digitale Übungen zu AB 1 und AB 2 (3BFP3)

Kleine Web-App zu den zwei abschließenden Parkinson-Arbeitsblättern im Fach KB I (generalistische Pflegeausbildung,
3. Ausbildungsjahr, Themenblock I). Die Schülerinnen und Schüler scannen den QR-Code auf dem Arbeitsblatt,
bearbeiten am Smartphone eine Zuordnungsübung und erhalten sofort Rückmeldung. Die Erklärungen liefern die
Begründungen für die folgende schriftliche Aufgabe auf dem Arbeitsblatt – so sparen die SuS Schreib- und Denkzeit.
Auf einer **Lehrerseite für den Beamer** sehen Sie live, wie weit die Klasse ist.

Übersicht: https://klawittersven-arch.github.io/3BFP3_KB1_Parkinson/

| Arbeitsblatt | Übung | Adresse (QR-Code in `qr/`) |
|---|---|---|
| AB 1 – Therapie und Medikamente (Di 03.11.) | Übung 1: L-Dopa – richtig gegeben? (R / F) → Aufgabe 1 | `…/ab1a.html` |
| | Übung 2: On, Off oder Dyskinesie? → Aufgabe 2 | `…/ab1b.html` |
| | Für die Schnellen: Therapie-Check (Medikament / aktivierend / invasiv / Diagnostik) | `…/ab1c.html` |
| AB 2 – Parkinson im Krankenhaus (Di 10.11.) | Übung 1: Off-Phase oder Notfall? → Aufgabe 1 | `…/ab2a.html` |
| | Übung 2: Akinetische Krise – was tun? (sofort / nach Anordnung / nicht tun) → Aufgabe 2 | `…/ab2b.html` |
| | Für die Schnellen: Sturzgefahr sortieren (P / RF / R / anderes Problem) → Aufgabe 3 | `…/ab2c.html` |

**Lehrerseiten (Beamer):** `…/lehrer-ab1.html#k=IHR-SCHLÜSSEL` und `…/lehrer-ab2.html#k=IHR-SCHLÜSSEL`

## So funktioniert eine Übung

- Beim ersten Öffnen geben die SuS **Vorname + Anfangsbuchstaben des Nachnamens** ein („Lena K.“; aus „Lena Kraus“
  wird automatisch „Lena K.“). Das Handy merkt sich den Namen für alle Übungen; „ändern“ ist jederzeit möglich.
- Karten mit Aussagen, darunter die Antwortknöpfe. **Richtig:** grün mit ✓ und Erklärung.
  **Falsch:** orange mit ✗ und Tipp – die Lösung wird nie verraten, ein neuer Versuch ist möglich.
- Erst wenn alle Karten gelöst sind, erscheint „Das Wichtigste in Kürze“ und der Hinweis, welche Aufgabe auf dem
  Arbeitsblatt jetzt dran ist. Wer einfach durchklickt (zu wenige Karten beim ersten Versuch richtig, Wert
  `mindestens` je Übung), bekommt stattdessen „Hey, nicht einfach durchklicken!“.
- „Noch einmal üben“ setzt die Übung zurück. Ein versehentliches Neuladen löscht nichts.

## Lehrerseite für den Beamer

- Je Arbeitsblatt ein eigener Link (`lehrer-ab1.html`, `lehrer-ab2.html`), je Übung eine Spalte:
  „17 von 22 fertig“, Balken und **alle Namen mit ihrem Stand** (✓ = fertig, 6/10 = dabei, – = noch nicht begonnen).
  ⚠ heißt: fertig, aber beim ersten Versuch zu oft falsch (durchgeklickt?).
- Darunter: **„Oft falsch beim ersten Versuch“** – die drei Karten, die Sie besprechen sollten.
- Die Anzeige aktualisiert sich alle 5 Sekunden (`aktualisierenSekunden` in `docs/einstellungen.js`).
- Einen unpassenden Namen entfernen: mit der Maus über den Namen fahren → **×**.
- **Liste leeren (neue Stunde):** löscht alle Namen dieses Arbeitsblatts. Ohne Leeren werden die Einträge
  nach 12 Stunden ohne Aktivität automatisch gelöscht.
- Der Schlüssel steht nur beim ersten Öffnen in der Adresse (`#k=…`). Die Seite merkt ihn sich in diesem Browser
  und entfernt ihn aus der Adresszeile – auf dem Beamer ist er also nicht zu sehen.

## Fortschrittsanzeige einrichten (einmalig, ca. 10 Minuten)

Die Handys senden ihren Fortschritt an einen kleinen **Cloudflare Worker** (Ordner `server/`, kostenlos).
Solange er nicht eingerichtet ist, funktionieren die Übungen ganz normal – nur ohne Namen und ohne Lehrerseite.

1. **GitHub Pages** muss aktiv sein: im Repository Settings → Pages → „Deploy from a branch“ → Branch **main**,
   Ordner **/docs** → Save.
2. Cloudflare-Dashboard → **Workers & Pages** → **Create application** → Repository verbinden (GitHub) →
   **3BFP3_KB1_Parkinson** auswählen.
3. Einstellungen beim Anlegen:
   - Name des Workers: **`parkinson-fortschritt`** (muss genau so heißen wie in `server/wrangler.jsonc`)
   - **Root directory / Pfad:** `server`
   - Build command: leer lassen · Deploy command: `npx wrangler deploy` (Voreinstellung)
   - Optional unter „Build watch paths“: `server/*` – dann baut Cloudflare nur neu, wenn sich der Server ändert.
4. **Deploy**. Danach zeigt Cloudflare die Adresse, z. B. `https://parkinson-fortschritt.IHR-NAME.workers.dev`.
   Zum Test im Browser öffnen: „Fortschrittsanzeige … läuft.“
5. Im Worker → **Settings → Variables and Secrets → Add**: Typ **Secret**, Name **`LEHRER_SCHLUESSEL`**,
   Wert: ein selbst gewähltes Kennwort (z. B. drei zufällige Wörter). → Deploy/Save.
6. Auf GitHub `docs/einstellungen.js` öffnen → Stift → bei `serverAdresse` die Adresse aus Schritt 4 eintragen
   (in Hochkommas, ohne Schrägstrich am Ende) → Commit changes.
7. Lehrerseiten auf dem Schul-Laptop einmal öffnen und als Lesezeichen speichern:
   `https://klawittersven-arch.github.io/3BFP3_KB1_Parkinson/lehrer-ab1.html#k=IHR-SCHLÜSSEL` (und `lehrer-ab2.html`).

## Datenschutz

- Übertragen werden nur: der eingegebene Name („Lena K.“), eine zufällige Geräte-Kennung, die Übung, die Zahl der
  gelösten Karten und die Nummern der Karten, die beim ersten Versuch falsch waren. Keine Anmeldung, keine Cookies,
  keine Analyse, keine fremden Schriften oder Skripte.
- Die Lehrerseite zeigt Fehler nur zusammengefasst für die Klasse, nicht je Person. Abrufen kann den Stand nur,
  wer den Lehrer-Schlüssel kennt.
- Gelöscht wird automatisch nach 12 Stunden ohne Aktivität oder sofort mit „Liste leeren“.
- Die Daten liegen bei Cloudflare (Durable Object). Bitte im Zweifel mit der/dem Datenschutzbeauftragten der Schule
  abstimmen.

## Texte ändern

Alle Texte (Karten, Erklärungen, Tipps, Zusammenfassungen) stehen in **`docs/inhalte.js`** – mit Anleitung oben in
der Datei. Auf GitHub: Datei öffnen → Stift („Edit this file“) → ändern → „Commit changes“. Nach 1–2 Minuten ist die
Änderung online. Nur den Text zwischen den einfachen Hochkommas `' … '` ändern; `**fett**` funktioniert.

## QR-Codes

`qr/qr_ab1a.png` … `qr/qr_ab2c.png` (Fehlerkorrektur M, Ruhezone 4 Module) – bereits in die Arbeitsblätter
eingesetzt. Neu erzeugen: `python3 werkzeuge/qr_erzeugen.py` (benötigt `segno` oder `opencv-python`).
Die Arbeitsblätter und Musterlösungen liegen bewusst **nicht** in diesem Repository, denn es ist öffentlich.

## Tests

- `node tests/uebungen.test.js` prüft mit Playwright alle Übungen in Handygröße (360 px), die Namenseingabe, das
  Senden des Fortschritts und die Lehrerseiten (mit nachgebildetem Server).
- `cd server && node test/worker.test.js` prüft den Worker (Eingabeprüfung, Schlüssel, Räume, Entfernen, Leeren,
  Löschen nach 12 Stunden, Obergrenzen).

## Dateien

```
docs/                    ← alles, was GitHub Pages veröffentlicht
  inhalte.js             ← ALLE Texte der Übungen
  einstellungen.js       ← Adresse des Workers, Aktualisierungstakt, Sperrwörter für Namen
  app.js, style.css      ← Übungen (Handy)
  lehrer.js, lehrer.css  ← Lehrerseiten (Beamer)
  index.html             ← Übersicht
  ab1a.html … ab2c.html  ← die sechs Übungen   (erzeugt mit werkzeuge/seiten_erzeugen.py)
  lehrer-ab1.html, lehrer-ab2.html             (ebenfalls erzeugt)
  sw.js                  ← Offline-Speicher (nach größeren Änderungen VERSION erhöhen)
server/                  ← Cloudflare Worker für die Fortschrittsanzeige
qr/                      ← QR-Codes
werkzeuge/               ← QR-Codes und Seiten erzeugen
tests/                   ← automatische Tests
```
