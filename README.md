# KB I – Parkinson · digitale Übungen zu den Arbeitsblättern (3BFP3)

Kleine Web-App zu den vier Parkinson-Arbeitsblättern im Fach KB I (generalistische Pflegeausbildung,
3. Ausbildungsjahr, Themenblock I). Die Schülerinnen und Schüler scannen den QR-Code auf dem Arbeitsblatt,
bearbeiten am Smartphone eine Zuordnungsübung und erhalten sofort Rückmeldung. Sind alle Karten richtig
gelöst, erscheint ein **Merksatz**, den sie auf das Arbeitsblatt abschreiben – so ist das Wesentliche auf
Papier gesichert und die SuS lernen mit dem Arbeitsblatt für Klausur und Examen.

Übersicht: https://klawittersven-arch.github.io/3BFP3_KB1_Parkinson/

| AB | Übung | Adresse (QR-Code in `qr/`) |
|---|---|---|
| 1 – Krankheitsbild prüfungsreif erläutern | Übung 1: Fachlich richtig oder falsch? (R/F) | `…/ab1a.html` |
| | Übung 2: Physisch, psychisch oder sozial? | `…/ab1b.html` |
| 2 – Medikamente, akinetische Krise | Übung 1: On, Off oder Dyskinesie? | `…/ab2a.html` |
| | Übung 2: Akinetische Krise – was tun? (sofort / nach Anordnung / nicht tun) | `…/ab2b.html` |
| 3 – Pflegeprozess | Übung 1: PESR-Bausteine erkennen | `…/ab3a.html` |
| | Übung 2: Ist das Pflegeziel überprüfbar? | `…/ab3b.html` |
| 4 – Reha, Team, Kommunikation | Übung 1: Restitution, Kompensation oder Adaption? | `…/ab4a.html` |
| | Übung 2: Wer übernimmt was im Team? | `…/ab4b.html` |

## So funktioniert eine Übung

- Karten mit Aussagen, darunter die Antwortknöpfe. **Richtig:** grün mit ✓ und Erklärung.
  **Falsch:** orange mit ✗ und Tipp – die Lösung wird nie verraten, ein neuer Versuch ist möglich.
- Fortschrittsanzeige oben („3 von 10 richtig“).
- Erst wenn alle Karten gelöst sind, erscheint der Merksatz. Wer einfach durchklickt (zu wenige Karten beim
  ersten Versuch richtig, Wert `mindestens` je Übung), bekommt stattdessen „Hey, nicht einfach durchklicken!“.
- „Noch einmal üben“ setzt die Übung zurück. Ein versehentliches Neuladen löscht nichts.
- Die Übersichtsseite zeigt mit ✓, welche Übungen auf diesem Handy schon gelöst wurden.

**Datenschutz:** keine Anmeldung, keine Cookies, keine Analyse, keine fremden Schriften oder Skripte.
Es werden keine Daten übertragen; der Lernstand liegt nur im Browser des Handys. Nach dem ersten Aufruf
funktionieren die Übungen auch bei schwachem WLAN (Offline-Speicher).

## Texte ändern

Alle Texte (Karten, Erklärungen, Tipps, Merksätze) stehen in **`docs/inhalte.js`** – mit Anleitung oben in der
Datei. Auf GitHub: Datei öffnen → Stift („Edit this file“) → ändern → „Commit changes“. Nach 1–2 Minuten ist
die Änderung online.

- Nur den Text zwischen den einfachen Hochkommas `' … '` ändern; `**fett**` funktioniert.
- **Wichtig:** Die Merksätze stehen wortgleich in den Musterlösungen der Arbeitsblätter. Wer einen Merksatz
  hier ändert, sollte ihn auch in der Musterlösung anpassen.

## QR-Codes

`qr/qr_ab1a.png` … `qr/qr_ab4b.png` (Fehlerkorrektur M, Ruhezone 4 Module) – bereits in die Arbeitsblätter
eingesetzt. Neu erzeugen: `python3 werkzeuge/qr_erzeugen.py` (benötigt `segno` oder `opencv-python`).

Die Arbeitsblätter und Musterlösungen liegen bewusst **nicht** in diesem Repository, denn es ist öffentlich.

## GitHub Pages (falls noch nicht aktiv)

Settings → Pages → „Deploy from a branch“ → Branch **main**, Ordner **/docs** → Save. Nach 1–5 Minuten sind
die Seiten erreichbar.

## Tests

`node tests/uebungen.test.js` prüft alle acht Übungen in Handygröße (360 px) mit Playwright: Tipp nach falscher
Antwort, Merksatz erst nach vollständiger Lösung, Erkennen von „Durchklicken“, Zurücksetzen, Speichern beim
Neuladen, kein waagerechtes Scrollen, keine Konsolenfehler und keine Anfragen an fremde Adressen.

## Dateien

```
docs/                    ← alles, was GitHub Pages veröffentlicht
  inhalte.js             ← ALLE Texte der Übungen
  app.js, style.css      ← Programmlogik und Gestaltung
  index.html             ← Übersicht
  ab1a.html … ab4b.html  ← die acht Übungen (erzeugt mit werkzeuge/seiten_erzeugen.py)
  sw.js                  ← Offline-Speicher (nach größeren Änderungen VERSION erhöhen)
qr/                      ← QR-Codes
werkzeuge/               ← QR-Codes und Seiten erzeugen
tests/                   ← automatischer Test
```
