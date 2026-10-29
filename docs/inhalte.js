/* ==========================================================================
   INHALTE – KB I · Parkinson (3BFP3, Themenblock I) – AB 1 und AB 2
   ==========================================================================

   In dieser Datei stehen ALLE Texte der vier Übungen.
   Sie können die Texte hier ändern, ohne etwas vom Programm zu verstehen
   (auf GitHub: Datei öffnen → Stift „Edit this file“ → ändern → „Commit changes“;
   nach 1–2 Minuten ist die Änderung online).

   So ändern Sie einen Text sicher:
   - Ändern Sie nur, was ZWISCHEN den einfachen Hochkommas ' … ' steht.
   - Die Hochkommas selbst, die Kommas am Zeilenende und die Klammern
     { } [ ] müssen stehen bleiben.
   - Deutsche Anführungszeichen „ … “ dürfen Sie im Text frei verwenden.
     Ein einfaches Hochkomma (') im Text müssen Sie als \' schreiben.
   - **fett** funktioniert in Karten, Erklärungen, Tipps und Merksätzen.

   Aufbau einer Übung:
     ab          – Arbeitsblatt (erscheint in der Kopfzeile)
     titel       – Überschrift der Übung
     anweisung   – Arbeitsanweisung über den Karten
     knoepfe     – die Antwortknöpfe: kuerzel (intern) und text (auf dem Knopf)
     hilfe       – (optional) aufklappbarer Hilfe-Kasten: titel + punkte
     mindestens  – so viele Karten müssen beim ERSTEN Versuch richtig sein,
                   sonst gibt es statt des Merksatzes „Nicht einfach durchklicken!“
     karten      – die Aussagen (siehe unten)
     merksatz    – erscheint erst, wenn alle Karten richtig gelöst sind
                   (kurze Zusammenfassung „Das Wichtigste in Kürze“).

   Aufbau einer Karte:
     nummer      – die Nummer auf der Karte
     text        – die Aussage
     richtig     – Kürzel der richtigen Antwort, z. B. 'R'
                   (mehrere richtige Antworten: ['R', 'K'])
     erklaerung  – erscheint, wenn richtig geantwortet wurde
     tipp        – erscheint nach einer falschen Antwort
                   (die richtige Lösung wird nie direkt verraten)
   ========================================================================== */

var INHALTE = {

  /* ------------------------------------------------------------------------
     Texte, die auf allen Übungsseiten gleich sind
     ------------------------------------------------------------------------ */
  allgemein: {
    kopfzeile: 'KB I – Parkinson',
    merksatzUeberschrift: 'Das Wichtigste in Kürze',
    merksatzHinweis: 'Nutzen Sie das für die nächste Aufgabe auf Ihrem Arbeitsblatt.',
    // {x} und {y} werden automatisch durch Zahlen ersetzt.
    fortschritt: '{x} von {y} richtig',
    ersterVersuch: 'Beim ersten Versuch richtig: {x} von {y}',
    nochEinmal: 'Noch einmal üben',
    richtigText: 'Richtig!',
    falschText: 'Noch nicht richtig – versuchen Sie es noch einmal.',
    tippVorwort: 'Tipp:',
    // {x} = beim ersten Versuch richtig, {y} = Anzahl Karten, {z} = nötige Mindestzahl
    durchklickenTitel: 'Hey, nicht einfach durchklicken!',
    durchklickenText: 'Beim ersten Versuch richtig: {x} von {y} – nötig sind mindestens {z}. Lesen Sie jede Karte genau und überlegen Sie, bevor Sie antworten. Dann erhalten Sie auch die Zusammenfassung.',
    durchklickenKnopf: 'Übung neu starten',
    zurUebersicht: 'Zur Übersicht',
    naechsteUebung: 'Weiter: Übung für die Schnellen',
    fertigAlle: 'Beide Übungen dieses Arbeitsblatts sind gelöst. 👍'
  },

  /* ========================================================================
     AB 1 – Pflegeprobleme und Pflegeziele prüfungsreif formulieren (Di 03.11.)
     ======================================================================== */

  ab1a: {
    ab: 'AB 1',
    titel: 'Übung 1: Sturzgefahr – ein Risiko-Pflegeproblem',
    anweisung: 'Die Informationen stammen aus dem Fall von Herrn Lenz. Ordnen Sie zu: **P** = Pflegeproblem · **RF** = Risikofaktor · **R** = Ressource · **anderes Problem** = gehört zu einem anderen Pflegeproblem.',
    knoepfe: [
      { kuerzel: 'P', text: 'P' },
      { kuerzel: 'RF', text: 'RF' },
      { kuerzel: 'R', text: 'R' },
      { kuerzel: 'X', text: 'anderes Problem' }
    ],
    hilfe: {
      titel: 'Hilfe: aktuell oder Risiko?',
      punkte: [
        '**Aktuelles Pflegeproblem:** Das Problem besteht schon → P + E (Ursachen) + S (Symptome) + R.',
        '**Risiko-Pflegeproblem:** Das Problem droht erst → P + **RF** (Risikofaktoren) + R.',
        'Risikofaktoren liegen in der Person (z. B. Gangstörung) oder in der Umgebung (z. B. Stolperfallen).'
      ]
    },
    mindestens: 7,
    karten: [
      { nummer: 1,
        text: 'Sturzgefahr',
        richtig: 'P',
        erklaerung: 'Der Titel des Risiko-Pflegeproblems: Ein (erneuter) Sturz droht. Alle anderen passenden Karten begründen oder entschärfen diese Gefahr.',
        tipp: 'Welche Karte könnte als Überschrift über den anderen stehen?' },
      { nummer: 2,
        text: 'Bleibt an der Türschwelle zum Bad oft wie festgeklebt stehen.',
        richtig: 'RF',
        erklaerung: 'Risikofaktor Freezing: Der Oberkörper will weiter, die Füße bleiben stehen – so kommt es leicht zum Sturz.',
        tipp: 'Macht das einen Sturz wahrscheinlicher?' },
      { nummer: 3,
        text: 'Macht kleine, schlurfende Schritte.',
        richtig: 'RF',
        erklaerung: 'Risikofaktor Gangstörung: Wer die Füße kaum hebt, bleibt leicht an Kanten und Teppichen hängen.',
        tipp: 'Was passiert mit schlurfenden Füßen an einer Teppichkante?' },
      { nummer: 4,
        text: 'Ist vor zwei Wochen beim Umdrehen in der Küche gestürzt.',
        richtig: 'RF',
        erklaerung: 'Ein Sturz in der Vorgeschichte ist einer der stärksten Risikofaktoren für weitere Stürze. Beim Risiko-Pflegeproblem gehört er deshalb zu den Risikofaktoren.',
        tipp: 'Wer schon einmal gestürzt ist – wie hoch ist dann das Risiko für den nächsten Sturz?' },
      { nummer: 5,
        text: 'Muss nachts zwei- bis dreimal zur Toilette.',
        richtig: 'RF',
        erklaerung: 'Risikofaktor: Nachts kommen Müdigkeit, Dunkelheit und Eile zusammen – eine typische Sturzsituation.',
        tipp: 'Denken Sie an den Weg zur Toilette um 3 Uhr nachts.' },
      { nummer: 6,
        text: 'Im Flur liegen lose Teppiche.',
        richtig: 'RF',
        erklaerung: 'Umgebungsbezogener Risikofaktor: eine Stolperfalle, die sich leicht beseitigen lässt.',
        tipp: 'Liegt das Risiko nur in der Person – oder auch in der Wohnung?' },
      { nummer: 7,
        text: 'Geht mit dem Rollator.',
        richtig: 'R',
        erklaerung: 'Ressource: Er hat ein Hilfsmittel und nutzt es.',
        tipp: 'Hilft ihm das – oder gefährdet es ihn?' },
      { nummer: 8,
        text: 'Kann über eine Markierung am Boden steigen und dabei mitzählen.',
        richtig: 'R',
        erklaerung: 'Ressource: Er kennt aus der Physiotherapie eine Strategie gegen Freezing. Daran knüpfen die Pflegeinterventionen an.',
        tipp: 'Ist das eine Fähigkeit, die ihm hilft?' },
      { nummer: 9,
        text: 'Ist geistig klar und will so viel wie möglich selbst machen.',
        richtig: 'R',
        erklaerung: 'Ressource: Verständnis und Motivation – er kann Anleitungen umsetzen und arbeitet mit.',
        tipp: 'Was bringt Herr Lenz selbst mit?' },
      { nummer: 10,
        text: 'Verschluckt sich häufig bei Suppe und Wasser.',
        richtig: 'X',
        erklaerung: 'Gehört zu einem anderen Pflegeproblem: beeinträchtigtes Schlucken (Aspirationsgefahr). Nur Informationen, die zum Problem passen, kommen in das PESR-Schema.',
        tipp: 'Hat das etwas mit Stürzen zu tun?' }
    ],
    merksatz: 'Risiko-Pflegeproblem: Das Problem ist noch nicht eingetreten. Statt Ursachen und Symptomen nennen Sie die **Risikofaktoren** aus dem Fall – in der Person (Freezing, Gangstörung, frühere Stürze) und in der Umgebung (Stolperfallen, nächtliche Wege) – dazu die **Ressourcen**. Ein früherer Sturz ist einer der stärksten Risikofaktoren.'
  },

  ab1b: {
    ab: 'AB 1',
    titel: 'Für die Schnellen: Ist das Pflegeziel überprüfbar?',
    anweisung: 'Prüfen Sie die Pflegeziele für Herrn Lenz: **Ü** = überprüfbar formuliert · **N** = nicht überprüfbar.',
    knoepfe: [
      { kuerzel: 'Ü', text: 'Ü – überprüfbar' },
      { kuerzel: 'N', text: 'N – nicht überprüfbar' }
    ],
    hilfe: {
      titel: 'Hilfe: Checkliste Pflegeziel',
      punkte: [
        '**Wer?** Herr Lenz ist das Subjekt – nicht die Pflegefachperson.',
        '**Was?** Das Ergebnis ist beobachtbar oder messbar.',
        '**Bis wann?** Es gibt eine Zeitangabe.',
        'Es ist **realistisch** – Parkinson ist nicht heilbar.',
        'Kein „soll“, keine Maßnahme („erhält …“).'
      ]
    },
    mindestens: 7,
    karten: [
      { nummer: 1,
        text: 'Herr Lenz trinkt ab morgen täglich mindestens 1,5 Liter (Trinkprotokoll).',
        richtig: 'Ü',
        erklaerung: 'Überprüfbar: Herr Lenz als Subjekt, messbare Menge, Zeitangabe, Kontrolle über das Trinkprotokoll.',
        tipp: 'Gehen Sie die Checkliste durch: Wer? Was? Bis wann?' },
      { nummer: 2,
        text: 'Herr Lenz soll mehr trinken.',
        richtig: 'N',
        erklaerung: 'Nicht überprüfbar: „soll“ ist ein Wunsch, „mehr“ ist nicht messbar, und es fehlt die Zeitangabe.',
        tipp: 'Wie viel ist „mehr“ – und bis wann?' },
      { nummer: 3,
        text: 'Die Pflegefachperson entfernt die losen Teppiche im Flur.',
        richtig: 'N',
        erklaerung: 'Das ist eine Maßnahme, kein Ziel. Ein Pflegeziel beschreibt das Ergebnis beim Pflegeempfänger.',
        tipp: 'Wer ist hier das Subjekt?' },
      { nummer: 4,
        text: 'Herr Lenz überwindet das Freezing an der Türschwelle ab nächster Woche selbstständig durch Mitzählen.',
        richtig: 'Ü',
        erklaerung: 'Überprüfbar: beobachtbares Verhalten, Hilfsmittel/Strategie genannt, Zeitangabe.',
        tipp: 'Kann man beobachten, ob das gelingt?' },
      { nummer: 5,
        text: 'Herr Lenz wird wieder gesund und kann bald ohne Rollator gehen.',
        richtig: 'N',
        erklaerung: 'Nicht realistisch: Parkinson schreitet fort und ist nicht heilbar. Außerdem ist „bald“ keine Zeitangabe.',
        tipp: 'Ist das bei Parkinson realistisch?' },
      { nummer: 6,
        text: 'Herr Lenz hält sein jetziges Gewicht in den nächsten vier Wochen (wöchentliches Wiegen).',
        richtig: 'Ü',
        erklaerung: 'Überprüfbar: messbar (Waage), realistisch, mit Zeitraum und Kontrolle.',
        tipp: 'Lässt sich das messen?' },
      { nummer: 7,
        text: 'Herr Lenz erhält angedickte Getränke.',
        richtig: 'N',
        erklaerung: 'Das ist eine Maßnahme („erhält …“). Ein Ziel wäre z. B.: „Herr Lenz trinkt ab sofort ohne Verschlucken.“',
        tipp: 'Beschreibt der Satz ein Ergebnis – oder eine Handlung?' },
      { nummer: 8,
        text: 'Herr Lenz hat ab kommender Woche mindestens jeden zweiten Tag weichen Stuhlgang (Stuhlprotokoll).',
        richtig: 'Ü',
        erklaerung: 'Überprüfbar: Häufigkeit und Beschaffenheit sind beobachtbar, Zeitangabe und Kontrolle sind genannt.',
        tipp: 'Wer? Was? Bis wann? Womit kontrolliert?' },
      { nummer: 9,
        text: 'Herr Lenz fühlt sich wohler.',
        richtig: 'N',
        erklaerung: 'Nicht überprüfbar: „wohler“ ist nicht beobachtbar oder messbar, und es fehlt die Zeitangabe.',
        tipp: 'Woran würden Sie erkennen, dass das Ziel erreicht ist?' },
      { nummer: 10,
        text: 'Herr Lenz wendet ab sofort bei jeder Mahlzeit die sichere Schluckhaltung an.',
        richtig: 'Ü',
        erklaerung: 'Überprüfbar: beobachtbares Verhalten bei jeder Mahlzeit, ab sofort.',
        tipp: 'Kann die Pflegefachperson das bei jeder Mahlzeit beobachten?' }
    ],
    merksatz: 'Ein überprüfbares Pflegeziel beschreibt das **Ergebnis** aus Sicht des Pflegeempfängers: **Wer?** (Herr Lenz) · **Was?** (beobachtbar oder messbar) · **Womit/wie?** · **Bis wann?** – realistisch, ohne „soll“ und ohne Maßnahme.'
  },

  /* ========================================================================
     AB 2 – Notfall akinetische Krise (Di 10.11.)
     ======================================================================== */

  ab2a: {
    ab: 'AB 2',
    titel: 'Übung 1: Akinetische Krise – was tun?',
    anweisung: 'Herr Lenz befindet sich in einer akinetischen Krise. Ordnen Sie zu: **S** = Das tun Sie sofort selbstständig als Pflegefachperson · **A** = nur nach ärztlicher Anordnung · **N** = Das tun Sie nicht – es schadet.',
    knoepfe: [
      { kuerzel: 'S', text: 'S – sofort selbst' },
      { kuerzel: 'A', text: 'A – nach Anordnung' },
      { kuerzel: 'N', text: 'N – nicht tun!' }
    ],
    mindestens: 6,
    karten: [
      { nummer: 1,
        text: 'Die Stationsärztin sofort informieren.',
        richtig: 'S',
        erklaerung: 'Die akinetische Krise ist ein lebensbedrohlicher Notfall – ärztliche Behandlung so schnell wie möglich.',
        tipp: 'Wer muss bei einem Notfall als Erstes Bescheid wissen?' },
      { nummer: 2,
        text: 'Blutdruck, Puls, Atmung, Temperatur, Bewusstsein und Sauerstoffsättigung engmaschig kontrollieren und dokumentieren.',
        richtig: 'S',
        erklaerung: 'Krankenbeobachtung ist eine eigenständige Pflegeaufgabe: Fieber, Herzrasen und Bewusstseinsstörung zeigen, wie bedrohlich die Lage ist.',
        tipp: 'Brauchen Sie für das Beobachten eine Anordnung?' },
      { nummer: 3,
        text: 'Herrn Lenz einen Becher Wasser reichen, damit er trotz des Fiebers genug trinkt.',
        richtig: 'N',
        erklaerung: 'Er kann nicht sicher schlucken – **Aspirationsgefahr**! Nichts über den Mund geben; Flüssigkeit erhält er nach ärztlicher Anordnung als Infusion.',
        tipp: 'Lesen Sie, was der Fall über sein Schlucken sagt.' },
      { nummer: 4,
        text: 'Den Oberkörper hochlagern, Speichel absaugen und die Mundhöhle frei halten.',
        richtig: 'S',
        erklaerung: 'Aspirationsprophylaxe: Er kann seinen Speichel nicht schlucken. Oberkörperhochlage und Absaugen schützen die Atemwege.',
        tipp: 'Wie schützen Sie seine Atemwege?' },
      { nummer: 5,
        text: 'Eine Infusion zur Flüssigkeitszufuhr anlegen.',
        richtig: 'A',
        erklaerung: 'Er braucht dringend Flüssigkeit – eine Infusion ist aber eine ärztliche Therapie: nur nach ärztlicher Anordnung.',
        tipp: 'Wer entscheidet über eine Infusionstherapie?' },
      { nummer: 6,
        text: 'Die Parkinson-Medikamente über eine Magensonde geben.',
        richtig: 'A',
        erklaerung: 'So erhält er die fehlenden Medikamente trotz Schluckstörung. Magensonde, Medikament und Dosis nur nach ärztlicher Anordnung.',
        tipp: 'Wer entscheidet über Medikament, Dosis und Verabreichungsweg?' },
      { nummer: 7,
        text: 'Die fehlenden Tabletten zerkleinern und Herrn Lenz mit etwas Joghurt eingeben.',
        richtig: 'N',
        erklaerung: 'Er kann nicht sicher schlucken – **Aspirationsgefahr**! Nichts über den Mund geben. Wie er seine Medikamente erhält, entscheidet die Ärztin.',
        tipp: 'Kann Herr Lenz gerade sicher schlucken?' },
      { nummer: 8,
        text: 'Ein- und Ausfuhr bilanzieren.',
        richtig: 'S',
        erklaerung: 'Fieber, Schwitzen und fehlendes Trinken führen schnell zur Exsikkose. Die Flüssigkeitsbilanz ist eine pflegerische Überwachungsaufgabe.',
        tipp: 'Fieber + Schwitzen + nichts trinken – was müssen Sie im Blick behalten?' },
      { nummer: 9,
        text: 'Ein fiebersenkendes Medikament verabreichen.',
        richtig: 'A',
        erklaerung: 'Ein Arzneimittel – nur nach ärztlicher Anordnung. Ergänzend sind kühlende Maßnahmen möglich (z. B. leichte Bettdecke, kühle Waschung).',
        tipp: 'Arzneimittel oder Pflegemaßnahme?' },
      { nummer: 10,
        text: 'Regelmäßig umlagern sowie Thrombose-, Dekubitus- und Pneumonieprophylaxe durchführen.',
        richtig: 'S',
        erklaerung: 'Er kann sich nicht bewegen – Thrombose, Dekubitus und Pneumonie drohen. Prophylaxen sind eigenständige Pflegemaßnahmen.',
        tipp: 'Welche Komplikationen drohen bei völliger Unbeweglichkeit?' }
    ],
    merksatz: 'Die akinetische Krise ist ein lebensbedrohlicher Notfall. Sofort: Ärztin informieren, Vitalzeichen und Bewusstsein überwachen, Atemwege frei halten und nichts über den Mund geben (Aspiration), Prophylaxen durchführen, Ein- und Ausfuhr bilanzieren. Medikamente und Infusionen nur nach ärztlicher Anordnung.'
  },

  ab2b: {
    ab: 'AB 2',
    titel: 'Für die Schnellen: Komplikationen vorbeugen',
    anweisung: 'Herr Lenz kann sich in der akinetischen Krise nicht bewegen und nicht schlucken. Welcher Komplikation beugt die Maßnahme vor? Ordnen Sie zu.',
    knoepfe: [
      { kuerzel: 'P', text: 'Pneumonie' },
      { kuerzel: 'D', text: 'Dekubitus' },
      { kuerzel: 'T', text: 'Thrombose' },
      { kuerzel: 'E', text: 'Exsikkose' }
    ],
    mindestens: 7,
    karten: [
      { nummer: 1,
        text: 'Oberkörper hochlagern und Speichel absaugen.',
        richtig: 'P',
        erklaerung: 'Schützt vor Aspiration – Speichel, der in die Lunge gelangt, führt zur Aspirationspneumonie.',
        tipp: 'Wohin gelangt Speichel, den er nicht schlucken kann?' },
      { nummer: 2,
        text: 'Fersen frei lagern und die Haut täglich auf Rötungen kontrollieren.',
        richtig: 'D',
        erklaerung: 'Druckentlastung und Hautinspektion: An Fersen und Kreuzbein entsteht bei Unbeweglichkeit schnell ein Dekubitus.',
        tipp: 'Wo entsteht Druck, wenn jemand sich nicht bewegt?' },
      { nummer: 3,
        text: 'Regelmäßig die Position wechseln (Umlagern).',
        richtig: ['D', 'P'],
        erklaerung: 'Positionswechsel entlasten die Haut (Dekubitus) und verbessern die Belüftung der Lunge (Pneumonie) – beide Antworten sind richtig.',
        tipp: 'Was wird durch einen Positionswechsel entlastet?' },
      { nummer: 4,
        text: 'Mehrmals täglich gründliche Mundpflege.',
        richtig: 'P',
        erklaerung: 'Weniger Keime im Mund – weniger Keime, die mit dem Speichel in die Lunge gelangen.',
        tipp: 'Was passiert mit Keimen aus dem Mund, wenn er sich verschluckt?' },
      { nummer: 5,
        text: 'Füße kreisen lassen bzw. die Beine passiv durchbewegen.',
        richtig: 'T',
        erklaerung: 'Bewegung aktiviert die Muskelpumpe und hält das Blut in den Beinvenen in Fluss.',
        tipp: 'Was passiert mit dem Blut in den Beinvenen, wenn die Muskeln nicht arbeiten?' },
      { nummer: 6,
        text: 'Medizinische Thromboseprophylaxestrümpfe nach Anordnung anziehen.',
        richtig: 'T',
        erklaerung: 'Kompression beschleunigt den venösen Rückfluss.',
        tipp: 'Wofür sind diese Strümpfe gedacht?' },
      { nummer: 7,
        text: 'Ein- und Ausfuhr bilanzieren.',
        richtig: 'E',
        erklaerung: 'Fieber, Schwitzen und kein Trinken: Die Bilanz zeigt früh, ob Flüssigkeit fehlt.',
        tipp: 'Was fehlt dem Körper bei Fieber, Schwitzen und ohne Trinken?' },
      { nummer: 8,
        text: 'Haut und Schleimhäute auf Trockenheit beobachten, stehende Hautfalten prüfen.',
        richtig: 'E',
        erklaerung: 'Trockene Schleimhäute und stehende Hautfalten sind Zeichen eines Flüssigkeitsmangels.',
        tipp: 'Woran erkennen Sie, dass jemand „ausgetrocknet“ ist?' },
      { nummer: 9,
        text: 'Atemfrequenz und Sauerstoffsättigung kontrollieren, atemstimulierende Einreibung.',
        richtig: 'P',
        erklaerung: 'Atemkontrolle erkennt eine Pneumonie früh; die Einreibung fördert tiefe Atemzüge.',
        tipp: 'Welche Komplikation betrifft die Atmung?' },
      { nummer: 10,
        text: 'Nichts über den Mund geben, solange er nicht sicher schlucken kann.',
        richtig: 'P',
        erklaerung: 'Aspirationsprophylaxe – jede Flüssigkeit im Mund kann in die Lunge gelangen.',
        tipp: 'Was passiert, wenn er trinkt, obwohl er nicht schlucken kann?' }
    ],
    merksatz: 'Bei völliger Unbeweglichkeit drohen Komplikationen: **Pneumonie** – Oberkörper hoch, absaugen, Mundpflege, nichts über den Mund · **Dekubitus** – Positionswechsel, Fersen frei, Haut kontrollieren · **Thrombose** – Beine bewegen, Strümpfe nach Anordnung · **Exsikkose** – bilanzieren, Haut und Schleimhäute beobachten.'
  }
};
