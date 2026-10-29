# KB I – Parkinson · digitale Übungen zu AB 1 und AB 2 (3BFP3)

Kleine Web-App zu den zwei abschließenden Parkinson-Arbeitsblättern im Fach KB I (generalistische Pflegeausbildung,
3. Ausbildungsjahr, Themenblock I). Die Schülerinnen und Schüler scannen den QR-Code auf dem Arbeitsblatt,
bearbeiten am Smartphone eine Zuordnungsübung und erhalten sofort Rückmeldung. Die Übungen sparen Schreibzeit:
Übung 1 bereitet jeweils die nächste schriftliche Aufgabe vor, die zweite Übung ist „für die Schnellen“.
Sind alle Karten richtig gelöst, erscheint eine kurze Zusammenfassung.

Übersicht: https://klawittersven-arch.github.io/3BFP3_KB1_Parkinson/

| Arbeitsblatt | Übung | Adresse (QR-Code in `qr/`) |
|---|---|---|
| AB 1 – Pflegeprobleme und Pflegeziele (Di 03.11.) | Übung 1: Sturzgefahr – ein Risiko-Pflegeproblem (P / RF / R / anderes Problem) | `…/ab1a.html` |
| | Für die Schnellen: Ist das Pflegeziel überprüfbar? | `…/ab1b.html` |
| AB 2 – Notfall akinetische Krise (Di 10.11.) | Übung 1: Akinetische Krise – was tun? (sofort / nach Anordnung / nicht tun) | `…/ab2a.html` |
| | Für die Schnellen: Komplikationen vorbeugen | `…/ab2b.html` |

## So funktioniert eine Übung

- Karten mit Aussagen, darunter die Antwortknöpfe. **Richtig:** grün mit ✓ und Erklärung.
  **Falsch:** orange mit ✗ und Tipp – die Lösung wird nie verraten, ein neuer Versuch ist möglich.
- Fortschrittsanzeige oben („3 von 10 richtig“).
- Erst wenn alle Karten gelöst sind, erscheint die Zusammenfassung. Wer einfach durchklickt (zu wenige Karten beim
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

## QR-Codes

`qr/qr_ab1a.png` … `qr/qr_ab2b.png` (Fehlerkorrektur M, Ruhezone 4 Module) – bereits in die Arbeitsblätter
eingesetzt. Neu erzeugen: `python3 werkzeuge/qr_erzeugen.py` (benötigt `segno` oder `opencv-python`).

Die Arbeitsblätter und Musterlösungen liegen bewusst **nicht** in diesem Repository, denn es ist öffentlich.

## GitHub Pages (falls noch nicht aktiv)

Settings → Pages → „Deploy from a branch“ → Branch **main**, Ordner **/docs** → Save. Nach 1–5 Minuten sind
die Seiten erreichbar.

## Tests

`node tests/uebungen.test.js` prüft alle Übungen in Handygröße (360 px) mit Playwright: Tipp nach falscher
Antwort, Zusammenfassung erst nach vollständiger Lösung, Erkennen von „Durchklicken“, Zurücksetzen, Speichern beim
Neuladen, kein waagerechtes Scrollen, keine Konsolenfehler und keine Anfragen an fremde Adressen.

## Dateien

```
docs/                    ← alles, was GitHub Pages veröffentlicht
  inhalte.js             ← ALLE Texte der Übungen
  app.js, style.css      ← Programmlogik und Gestaltung
  index.html             ← Übersicht
  ab1a.html … ab2b.html  ← die vier Übungen (erzeugt mit werkzeuge/seiten_erzeugen.py)
  sw.js                  ← Offline-Speicher (nach größeren Änderungen VERSION erhöhen)
qr/                      ← QR-Codes
werkzeuge/               ← QR-Codes und Seiten erzeugen
tests/                   ← automatischer Test
```
