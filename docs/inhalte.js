/* ==========================================================================
   INHALTE – KB I · Parkinson (3BFP3, Themenblock I) – AB 1 und AB 2
   ==========================================================================

   In dieser Datei stehen ALLE Texte der sechs Übungen.
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
     knoepfe     – die Antwortknöpfe: kuerzel (intern, nur GROSSBUCHSTABEN, höchstens 6)
                   und text (auf dem Knopf)
     hilfe       – (optional) aufklappbarer Hilfe-Kasten: titel + punkte
     mindestens  – so viele Karten müssen beim ERSTEN Versuch richtig sein,
                   sonst gibt es statt des Merksatzes „Nicht einfach durchklicken!“
     karten      – die Aussagen (siehe unten)
     merksatz    – erscheint erst, wenn alle Karten richtig gelöst sind
                   (kurze Zusammenfassung „Das Wichtigste in Kürze“).
     raum        – zu welchem Arbeitsblatt die Übung gehört ('ab1' oder 'ab2');
                   danach richtet sich die Fortschrittsanzeige für den Beamer.
     danach      – Hinweis nach dem Lösen (z. B. „Bearbeiten Sie jetzt Aufgabe 1“).

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
    // {x} und {y} werden automatisch durch Zahlen ersetzt.
    fortschritt: '{x} von {y} richtig',
    ersterVersuch: 'Beim ersten Versuch richtig: {x} von {y}',
    nochEinmal: 'Noch einmal üben',
    richtigText: 'Richtig!',
    falschText: 'Noch nicht richtig – versuchen Sie es noch einmal.',
    tippVorwort: 'Tipp:',
    // {x} = beim ersten Versuch richtig, {y} = Anzahl Karten, {z} = nötige Mindestzahl
    durchklickenTitel: 'Hey, nicht einfach durchklicken!',
    durchklickenText: 'Beim ersten Versuch richtig: {x} von {y} – nötig sind mindestens {z}. Lesen Sie jede Karte genau und überlegen Sie, bevor Sie antworten.',
    durchklickenKnopf: 'Übung neu starten',
    zurUebersicht: 'Zur Übersicht',

    // Namenseingabe (nur wenn die Fortschrittsanzeige eingerichtet ist, siehe einstellungen.js)
    nameTitel: 'Wer sind Sie?',
    nameText: 'Geben Sie Ihren **Vornamen** und den **ersten Buchstaben Ihres Nachnamens** ein. Ihre Lehrkraft sieht auf dem Beamer, wie weit die Klasse ist.',
    nameBeispiel: 'z. B. Lena K.',
    nameKnopf: 'Los geht’s',
    nameFehler: 'Bitte so eingeben: Vorname, Leerzeichen, erster Buchstabe des Nachnamens – z. B. „Lena K.“',
    nameDatenschutz: 'Gespeichert werden nur Ihr Name, Ihr Fortschritt und bei welchen Karten der erste Versuch falsch war (die Lehrkraft sieht das nur zusammengefasst für die Klasse). Alles wird nach spätestens 12 Stunden automatisch gelöscht.',
    nameAnzeige: 'Angemeldet als {x}',
    nameAendern: 'ändern'
  },

  /* ========================================================================
     AB 1 – Therapie und Medikamente aus Sicht der Pflege (Di 03.11.)
     ======================================================================== */

  ab1a: {
    ab: 'AB 1',
    raum: 'ab1',
    titel: 'Übung 1: L-Dopa – richtig gegeben?',
    anweisung: 'Prüfen Sie, wie mit den Parkinson-Medikamenten umgegangen wird: **R** = richtig gehandelt, **F** = falsch gehandelt. Lesen Sie die Erklärungen genau – Sie brauchen sie für Aufgabe 1.',
    knoepfe: [
      { kuerzel: 'R', text: 'R – richtig gehandelt' },
      { kuerzel: 'F', text: 'F – falsch gehandelt' }
    ],
    mindestens: 7,
    karten: [
      { nummer: 1,
        text: 'Frau Kern erhält ihre L-Dopa-Tablette um 7:00 Uhr mit einem Glas Wasser. Gefrühstückt wird um 7:30 Uhr.',
        richtig: 'R',
        erklaerung: 'Richtig gehandelt: pünktlich nach ihrem Plan, mit Wasser und **30 Minuten vor dem Essen**. So wird L-Dopa gut aufgenommen.',
        tipp: 'Prüfen Sie Uhrzeit, Getränk und Abstand zum Essen.' },
      { nummer: 2,
        text: 'Herr Bauer nimmt seine L-Dopa-Tablette mit einem Glas Milch, damit sein Magen geschützt ist.',
        richtig: 'F',
        erklaerung: 'Falsch gehandelt: **Eiweiß** (Milch, Quark, Käse, Fleisch) behindert die Aufnahme von L-Dopa aus dem Darm und ins Gehirn – die Wirkung kommt später und schwächer. L-Dopa mit **Wasser** einnehmen, 30 Minuten vor oder 60–90 Minuten nach dem Essen.',
        tipp: 'Was ist in Milch reichlich enthalten?' },
      { nummer: 3,
        text: 'Weil die Station um 8 Uhr Tabletten verteilt, bekommt Frau Kern ihre 7-Uhr-Tablette eine Stunde später.',
        richtig: 'F',
        erklaerung: 'Falsch gehandelt: Parkinson-Medikamente sind **zeitkritisch**. Sie werden zu den **individuellen Uhrzeiten** gegeben, nicht nach den Verteilzeiten – sonst drohen Off-Phasen und Stürze.',
        tipp: 'Nach wessen Zeitplan richten sich Parkinson-Medikamente?' },
      { nummer: 4,
        text: 'Herrn Bauer ist nach der Tablette oft übel. Er isst nach der Einnahme einen Zwieback.',
        richtig: 'R',
        erklaerung: 'Richtig gehandelt: Ein **kleiner, eiweißarmer Imbiss** (z. B. Zwieback) lindert die Übelkeit, ohne die Aufnahme von L-Dopa zu stören.',
        tipp: 'Enthält Zwieback viel Eiweiß?' },
      { nummer: 5,
        text: 'Herr Vogt kann seine große Retardtablette schlecht schlucken. Die Pflegefachperson zermörsert sie.',
        richtig: 'F',
        erklaerung: 'Falsch gehandelt: **Retardtabletten** geben den Wirkstoff langsam ab. Zermörsert wird alles auf einmal frei – erst zu viel, später zu wenig Wirkung. Andere Darreichungsform mit der Ärztin oder der Apotheke klären.',
        tipp: 'Was bedeutet „retard“?' },
      { nummer: 6,
        text: 'Frau Haas kann nicht mehr gut schlucken. Die Ärztin verordnet eine lösliche L-Dopa-Tablette, die in Wasser aufgelöst getrunken wird.',
        richtig: 'R',
        erklaerung: 'Richtig gehandelt: Bei Schluckstörungen gibt es **lösliche Tabletten** – nach ärztlicher Verordnung. Aufgelöst können sie auch über eine Magensonde gegeben werden.',
        tipp: 'Wer hat hier entschieden – und welche Tablette wurde gewählt?' },
      { nummer: 7,
        text: 'Frau Kern fühlt sich heute sehr beweglich. Sie lässt ihre Mittagstablette weg, „damit sich der Körper nicht daran gewöhnt“.',
        richtig: 'F',
        erklaerung: 'Falsch gehandelt: Parkinson-Medikamente **nie eigenmächtig weglassen** oder absetzen – es drohen Off-Phasen und im schlimmsten Fall eine **akinetische Krise**. Änderungen nur nach ärztlicher Anordnung.',
        tipp: 'Was passiert, wenn der Dopaminspiegel stark abfällt?' },
      { nummer: 8,
        text: 'Herrn Bauer ist übel. Der Hausarzt verordnet Metoclopramid (MCP). Die Pflegefachperson gibt es, ohne nachzufragen.',
        richtig: 'F',
        erklaerung: 'Falsch gehandelt: **MCP blockiert Dopamin** und verschlechtert die Parkinson-Symptome. Bedenken äußern und mit der Ärztin klären – eine Alternative ist z. B. Domperidon.',
        tipp: 'Wie wirkt MCP auf das Dopamin?' },
      { nummer: 9,
        text: 'Frau Kern nimmt seit Kurzem einen Dopaminagonisten. Die Pflegefachperson beobachtet, ob sie tagsüber plötzlich einschläft, und rät ihr, vorerst nicht Auto zu fahren.',
        richtig: 'R',
        erklaerung: 'Richtig gehandelt: Dopaminagonisten können **plötzliches Einschlafen** auslösen – gefährlich im Straßenverkehr. Auch auf Impulskontrollstörungen (z. B. Kauf- oder Spielsucht) und Halluzinationen achten.',
        tipp: 'Welche Nebenwirkung von Dopaminagonisten ist beim Autofahren gefährlich?' },
      { nummer: 10,
        text: 'Herr Vogt ist nachts unruhig und sieht Tiere an der Wand. Die Pflegefachperson bittet die Ärztin, statt Haloperidol ein anderes Medikament zu prüfen.',
        richtig: 'R',
        erklaerung: 'Richtig gehandelt: **Haloperidol** ist ein klassisches Neuroleptikum und blockiert Dopamin – bei Parkinson gefährlich (vgl. symptomatisches Parkinson-Syndrom). Halluzinationen können auch eine Nebenwirkung der Parkinson-Medikamente sein.',
        tipp: 'Bei welcher Form des Parkinson-Syndroms sind Neuroleptika der Auslöser?' }
    ],
    merksatz: 'L-Dopa richtig geben: **pünktlich** nach dem individuellen Plan · **30 Minuten vor oder 60–90 Minuten nach dem Essen mit Wasser** – Eiweiß (Milch, Quark, Fleisch) schwächt die Wirkung · **Retardtabletten nicht teilen oder mörsern** · **nie eigenmächtig weglassen** · **keine Dopamin-Gegenspieler** wie MCP oder Haloperidol – Bedenken äußern · Wirkung und Nebenwirkungen beobachten und dokumentieren.',
    danach: 'Bearbeiten Sie jetzt **Aufgabe 1** auf Ihrem Arbeitsblatt.'
  },

  ab1b: {
    ab: 'AB 1',
    raum: 'ab1',
    titel: 'Übung 2: On, Off oder Dyskinesie?',
    anweisung: 'Herr Lenz nimmt seit acht Jahren L-Dopa. Ordnen Sie jede Beobachtung zu: **On** = gute Beweglichkeit · **Off** = Unbeweglichkeit · **Dyskinesie** = unwillkürliche Überbewegungen.',
    knoepfe: [
      { kuerzel: 'ON', text: 'On' },
      { kuerzel: 'OFF', text: 'Off' },
      { kuerzel: 'DYS', text: 'Dyskinesie' }
    ],
    hilfe: {
      titel: 'Hilfe: Wirkungsschwankungen',
      punkte: [
        '**On:** L-Dopa wirkt – gute Beweglichkeit.',
        '**Off:** L-Dopa wirkt nicht (ausreichend) – Steifigkeit, Verlangsamung, Freezing.',
        '**Wearing-off:** Die Wirkung lässt vorhersehbar kurz vor der nächsten Tablette nach (eine Form von Off).',
        '**Dyskinesien:** unwillkürliche Überbewegungen, meist bei hohem Wirkspiegel.'
      ]
    },
    mindestens: 7,
    karten: [
      { nummer: 1,
        text: 'Eine Stunde nach der Tablette geht Herr Lenz mit dem Rollator sicher ins Bad.',
        richtig: 'ON',
        erklaerung: 'On-Phase: L-Dopa wirkt gut. Das ist die beste Zeit für Mobilisation und Körperpflege.',
        tipp: 'Wie beweglich ist er gerade?' },
      { nummer: 2,
        text: 'Morgens vor der ersten Tablette kommt Herr Lenz kaum aus dem Bett.',
        richtig: 'OFF',
        erklaerung: 'Off-Phase: Über Nacht ist der Wirkspiegel gesunken. Pflegerisch: die erste Tablette rechtzeitig vor dem Aufstehen geben.',
        tipp: 'Wann hat er die letzte Tablette genommen?' },
      { nummer: 3,
        text: 'Nachmittags machen Arme und Kopf von Herrn Lenz unwillkürliche, schlenkernde Bewegungen.',
        richtig: 'DYS',
        erklaerung: 'Dyskinesien: unwillkürliche Überbewegungen, meist bei hohem Wirkspiegel. Mit Uhrzeit dokumentieren und der Ärztin melden.',
        tipp: 'Sind die Bewegungen zu wenig – oder zu viel?' },
      { nummer: 4,
        text: 'Kurz vor der nächsten Tablette bleibt Herr Lenz an der Badezimmertür wie festgeklebt stehen.',
        richtig: 'OFF',
        erklaerung: 'Off-Phase durch **Wearing-off**: Die Wirkung lässt vorhersehbar vor der nächsten Dosis nach. Tabletten pünktlich geben, Wege in dieser Zeit absichern.',
        tipp: 'Achten Sie auf den Zeitpunkt: kurz vor der nächsten Tablette.' },
      { nummer: 5,
        text: 'Am Vormittag knöpft sich Herr Lenz sein Hemd selbst zu.',
        richtig: 'ON',
        erklaerung: 'On-Phase: Auch feinmotorische Tätigkeiten gelingen. Aktivierend pflegen – er macht es selbst.',
        tipp: 'Gelingt ihm gerade etwas, das Beweglichkeit braucht?' },
      { nummer: 6,
        text: 'Mitten beim Mittagessen wird Herr Lenz plötzlich steif und kann kaum noch schlucken – vor 20 Minuten ging es noch gut.',
        richtig: 'OFF',
        erklaerung: 'Plötzlicher, nicht vorhersehbarer Wechsel in die Off-Phase (**On-Off-Phänomen**). Essen pausieren – Verschluckungsgefahr! Beobachten und dokumentieren.',
        tipp: 'Wird er beweglicher oder unbeweglicher?' },
      { nummer: 7,
        text: 'Herr Lenz rutscht im Sessel hin und her, sein Oberkörper windet sich, als könne er nicht stillsitzen.',
        richtig: 'DYS',
        erklaerung: 'Dyskinesien: Überbewegungen, die Herr Lenz nicht steuern kann. Für Sicherheit sorgen (Sturzgefahr) und an die Ärztin melden – oft wird die Dosis angepasst.',
        tipp: 'Kann er die Bewegungen steuern?' },
      { nummer: 8,
        text: 'Beim Spaziergang mit seiner Frau ist Herr Lenz gut zu Fuß und erzählt viel.',
        richtig: 'ON',
        erklaerung: 'On-Phase: gute Beweglichkeit. Termine, Gespräche und Aktivitäten am besten in diese Zeit legen.',
        tipp: 'Wie gut kann er sich gerade bewegen?' },
      { nummer: 9,
        text: 'Kurz vor der 15-Uhr-Tablette zittert die Hand stärker und die Schritte werden immer kleiner.',
        richtig: 'OFF',
        erklaerung: 'Wearing-off: Die Symptome nehmen vor der nächsten Dosis zu. Pünktliche Gabe ist besonders wichtig; die Uhrzeiten dokumentieren.',
        tipp: 'Was passiert kurz vor der nächsten Tablette mit der Wirkung?' },
      { nummer: 10,
        text: 'Wenn die Tablette am stärksten wirkt, zucken und tänzeln die Beine von Herrn Lenz.',
        richtig: 'DYS',
        erklaerung: 'Dyskinesien treten typischerweise bei hohem Wirkspiegel auf („peak dose“). Dokumentieren und an die Ärztin weitergeben.',
        tipp: 'Wirkt die Tablette gerade zu wenig – oder sehr stark?' }
    ],
    merksatz: 'Wirkungsschwankungen: **On** = gute Beweglichkeit · **Off** = Steifigkeit, Verlangsamung, Freezing – oft vorhersehbar kurz vor der nächsten Tablette (**Wearing-off**) · **Dyskinesien** = unwillkürliche Überbewegungen bei hohem Wirkspiegel. Pflegerisch: Beweglichkeit mit Uhrzeit beobachten und dokumentieren, anstrengende Tätigkeiten in die **On-Phase** legen, Tabletten pünktlich geben, Schwankungen an die Ärztin melden.',
    danach: 'Bearbeiten Sie jetzt **Aufgabe 2** auf Ihrem Arbeitsblatt.'
  },

  ab1c: {
    ab: 'AB 1',
    raum: 'ab1',
    titel: 'Für die Schnellen: Therapie-Check',
    anweisung: 'Ordnen Sie zu: Ist das ein **Medikament**, eine **aktivierende Therapie**, ein **invasives Verfahren** oder eine Untersuchung zur **Diagnostik**?',
    knoepfe: [
      { kuerzel: 'MED', text: 'Medikament' },
      { kuerzel: 'AKT', text: 'Aktivierend' },
      { kuerzel: 'INV', text: 'Invasiv' },
      { kuerzel: 'DIA', text: 'Diagnostik' }
    ],
    hilfe: {
      titel: 'Hilfe: die drei Säulen der Therapie',
      punkte: [
        '**Medikamente:** gleichen den Dopaminmangel aus.',
        '**Aktivierende Therapien:** Physiotherapie, Ergotherapie, Logopädie.',
        '**Invasive Verfahren:** bei fortgeschrittener Erkrankung – Eingriffe oder Pumpen (siehe Film mit Frank Elstner).',
        '**Diagnostik:** Untersuchungen, die die Diagnose sichern.'
      ]
    },
    mindestens: 7,
    karten: [
      { nummer: 1, text: 'Levodopa mit Benserazid', richtig: 'MED',
        erklaerung: 'L-Dopa mit Decarboxylasehemmer – das wirksamste Parkinson-Medikament.', tipp: 'Wird hier etwas eingenommen?' },
      { nummer: 2, text: 'Gang- und Gleichgewichtstraining mit großen, bewussten Schritten', richtig: 'AKT',
        erklaerung: 'Physiotherapie – eine aktivierende Therapie. Sie erhält Beweglichkeit und beugt Stürzen vor.', tipp: 'Wer übt hier mit Herrn Lenz?' },
      { nummer: 3, text: 'Tiefe Hirnstimulation („Hirnschrittmacher“)', richtig: 'INV',
        erklaerung: 'Ein operativer Eingriff bei fortgeschrittener Erkrankung: Elektroden im Gehirn geben elektrische Impulse ab.', tipp: 'Ist dafür eine Operation nötig?' },
      { nummer: 4, text: 'Riechtest mit Riechstiften', richtig: 'DIA',
        erklaerung: 'Diagnostik: Eine Riechstörung ist ein häufiges Frühzeichen von Parkinson.', tipp: 'Wird hier behandelt – oder untersucht?' },
      { nummer: 5, text: 'Schlucktraining und Stimmübungen', richtig: 'AKT',
        erklaerung: 'Logopädie – eine aktivierende Therapie gegen Schluck- und Sprechstörungen.', tipp: 'Welche Berufsgruppe übt das Schlucken?' },
      { nummer: 6, text: 'Pramipexol (Dopaminagonist)', richtig: 'MED',
        erklaerung: 'Dopaminagonisten wirken wie Dopamin direkt an den Rezeptoren.', tipp: 'Wird hier etwas eingenommen?' },
      { nummer: 7, text: 'Apomorphin-Pumpe, die das Medikament ständig unter die Haut abgibt', richtig: 'INV',
        erklaerung: 'Medikamentenpumpen werden bei fortgeschrittener Erkrankung eingesetzt, um die Wirkung gleichmäßiger zu machen.', tipp: 'Braucht es dafür einen Eingriff am Körper?' },
      { nummer: 8, text: 'L-Dopa-Test: Bessern sich die Symptome nach einer Dosis L-Dopa?', richtig: 'DIA',
        erklaerung: 'Diagnostik: Bessern sich die Symptome deutlich, spricht das für ein idiopathisches Parkinson-Syndrom.', tipp: 'Geht es hier um Behandlung – oder um eine Frage an den Körper?' },
      { nummer: 9, text: 'Knöpfe schließen und Besteck halten üben', richtig: 'AKT',
        erklaerung: 'Ergotherapie – eine aktivierende Therapie für Alltagsfähigkeiten und Feinmotorik.', tipp: 'Welche Therapie übt Alltagstätigkeiten?' },
      { nummer: 10, text: 'MRT des Kopfes, um andere Ursachen auszuschließen', richtig: 'DIA',
        erklaerung: 'Diagnostik: Bildgebung (CT oder MRT) schließt z. B. Tumoren oder Schlaganfälle als Ursache aus.', tipp: 'Wozu dient ein MRT?' }
    ],
    merksatz: 'Parkinson ist nicht heilbar – die Therapie lindert die Symptome. **Medikamente** (L-Dopa + Decarboxylasehemmer, Dopaminagonisten) · **aktivierende Therapien** (Physio-, Ergotherapie, Logopädie) · **invasive Verfahren** bei fortgeschrittener Erkrankung (tiefe Hirnstimulation, Medikamentenpumpen). **Diagnostik:** neurologische Untersuchung, L-Dopa-Test, Riechtest, CT/MRT zum Ausschluss anderer Ursachen.',
    danach: 'Stark – alle Übungen zu AB 1 geschafft! Vergleichen Sie Ihre Antworten zu Aufgabe 1 und 2 mit Ihrer Nachbarin oder Ihrem Nachbarn.'
  },

  /* ========================================================================
     AB 2 – Parkinson im Krankenhaus: akinetische Krise (Di 10.11.)
     ======================================================================== */

  ab2a: {
    ab: 'AB 2',
    raum: 'ab2',
    titel: 'Übung 1: Off-Phase oder Notfall?',
    anweisung: 'Ordnen Sie jede Situation zu: **Off-Phase** · **Dyskinesie** · **Notfall: akinetische Krise**. Lesen Sie die Erklärungen – Sie brauchen sie für Aufgabe 1.',
    knoepfe: [
      { kuerzel: 'OFF', text: 'Off-Phase' },
      { kuerzel: 'DYS', text: 'Dyskinesie' },
      { kuerzel: 'KRISE', text: 'Notfall: Krise' }
    ],
    hilfe: {
      titel: 'Hilfe: Woran erkenne ich den Notfall?',
      punkte: [
        '**Off-Phase:** Steifigkeit, bessert sich nach der nächsten Tablette.',
        '**Dyskinesie:** unwillkürliche Überbewegungen bei hohem Wirkspiegel.',
        '**Akinetische Krise:** völlige Unbeweglichkeit über Stunden, Tabletten wirken nicht mehr, dazu Schluck- und Sprechunfähigkeit, Fieber, Herzrasen, Schwitzen oder Bewusstseinsstörung.'
      ]
    },
    mindestens: 7,
    karten: [
      { nummer: 1,
        text: 'Frau Kern ist kurz vor ihrer nächsten Tablette steif und langsam. 40 Minuten nach der Einnahme geht es ihr wieder besser.',
        richtig: 'OFF',
        erklaerung: 'Typisches Wearing-off: Nach der Tablette wird es besser. Pünktlich geben und beobachten – kein Notfall.',
        tipp: 'Wird es nach der nächsten Tablette wieder besser?' },
      { nummer: 2,
        text: 'Herr Bauer liegt seit Stunden völlig unbeweglich im Bett, kann nicht schlucken, hat 39 °C Fieber und einen Puls von 120/min.',
        richtig: 'KRISE',
        erklaerung: 'Völlige Unbeweglichkeit über Stunden, Schluckunfähigkeit, Fieber und Herzrasen: **akinetische Krise** – lebensbedrohlich, sofort die Ärztin informieren!',
        tipp: 'Wie lange dauert der Zustand an – und was kommt zur Steifigkeit dazu?' },
      { nummer: 3,
        text: 'Herr Vogt macht eine Stunde nach seiner Tablette schlenkernde Bewegungen mit Armen und Kopf.',
        richtig: 'DYS',
        erklaerung: 'Dyskinesien bei hohem Wirkspiegel – dokumentieren und an die Ärztin melden, aber kein Notfall.',
        tipp: 'Bewegt er sich zu wenig – oder zu viel?' },
      { nummer: 4,
        text: 'Frau Haas erbricht seit zwei Tagen und behält keine Tablette bei sich. Sie wird immer steifer und schläfriger.',
        richtig: 'KRISE',
        erklaerung: 'Beim Erbrechen werden die Medikamente nicht aufgenommen – ein typischer **Auslöser**. Steifigkeit und Schläfrigkeit nehmen zu: Die Krise bahnt sich an. Sofort die Ärztin informieren, nicht abwarten.',
        tipp: 'Kommen die Tabletten überhaupt im Körper an?' },
      { nummer: 5,
        text: 'Herr Roth bleibt morgens vor seiner ersten Tablette an der Badezimmertür stehen.',
        richtig: 'OFF',
        erklaerung: 'Morgendliche Off-Phase: Über Nacht ist der Wirkspiegel gesunken. Erste Tablette rechtzeitig geben.',
        tipp: 'Wann hat er die letzte Tablette genommen?' },
      { nummer: 6,
        text: 'Herr Bauer kann seit dem Morgen weder sprechen noch schlucken. Er schwitzt stark und ist kaum wach. Seine Tabletten wurden vor der Operation weggelassen.',
        richtig: 'KRISE',
        erklaerung: 'Akinetische Krise: Sprech- und Schluckunfähigkeit, Schwitzen, Bewusstseinsstörung. Auslöser: **Parkinson-Medikamente weggelassen**.',
        tipp: 'Was wurde vor der Operation mit seinen Tabletten gemacht?' },
      { nummer: 7,
        text: 'Frau Kern windet sich im Sessel und kann nicht stillsitzen – eine Stunde nach ihrer Tablette.',
        richtig: 'DYS',
        erklaerung: 'Dyskinesien: Überbewegungen bei hohem Wirkspiegel. Für Sicherheit sorgen und dokumentieren.',
        tipp: 'Zu viel oder zu wenig Bewegung?' },
      { nummer: 8,
        text: 'Herr Roth wird nachmittags langsamer. Nach der pünktlichen 15-Uhr-Tablette bessert sich das wieder.',
        richtig: 'OFF',
        erklaerung: 'Wearing-off: vorhersehbar vor der nächsten Dosis, bessert sich nach der Einnahme.',
        tipp: 'Was passiert nach der Tablette?' },
      { nummer: 9,
        text: 'Frau Haas hat eine Lungenentzündung mit Fieber. Sie wird zunehmend steif, kann kaum noch schlucken, und ihre Tabletten wirken nicht mehr.',
        richtig: 'KRISE',
        erklaerung: '**Infekte und Fieber** sind typische Auslöser. Tabletten wirken nicht mehr, Schluckstörung: akinetische Krise – Notfall!',
        tipp: 'Helfen die Tabletten noch?' },
      { nummer: 10,
        text: 'Herr Vogt hat zuckende, tänzelnde Bewegungen der Beine, wenn die Tablette am stärksten wirkt.',
        richtig: 'DYS',
        erklaerung: 'Dyskinesien bei maximaler Wirkung („peak dose“) – dokumentieren und melden.',
        tipp: 'Wirkt die Tablette gerade zu wenig – oder sehr stark?' }
    ],
    merksatz: '**Off-Phase:** Steifigkeit vor der nächsten Tablette – bessert sich nach der Einnahme. **Dyskinesie:** Überbewegungen bei hohem Wirkspiegel. **Akinetische Krise:** völlige Unbeweglichkeit über Stunden, Schluck- und Sprechunfähigkeit, Fieber, Herzrasen, Schwitzen, Bewusstseinsstörung – die Tabletten wirken nicht mehr. Das ist ein **lebensbedrohlicher Notfall**: sofort die Ärztin informieren.',
    danach: 'Bearbeiten Sie jetzt **Aufgabe 1** auf Ihrem Arbeitsblatt.'
  },

  ab2b: {
    ab: 'AB 2',
    raum: 'ab2',
    titel: 'Übung 2: Akinetische Krise – was tun?',
    anweisung: 'Herr Lenz befindet sich in einer akinetischen Krise. Ordnen Sie zu: **S** = sofort selbstständig als Pflegefachperson · **A** = nur nach ärztlicher Anordnung · **N** = nicht tun – es schadet. Die Erklärungen helfen Ihnen bei Aufgabe 2.',
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
        erklaerung: 'Er kann nicht sicher schlucken – **Aspirationsgefahr**! Nichts über den Mund geben; Flüssigkeit bekommt er nach ärztlicher Anordnung als Infusion.',
        tipp: 'Lesen Sie, was der Fall über sein Schlucken sagt.' },
      { nummer: 4,
        text: 'Den Oberkörper hochlagern, Speichel absaugen und die Mundhöhle frei halten.',
        richtig: 'S',
        erklaerung: 'Aspirationsprophylaxe: Er kann seinen Speichel nicht schlucken. Oberkörperhochlage und Absaugen schützen die Atemwege.',
        tipp: 'Wie schützen Sie seine Atemwege?' },
      { nummer: 5,
        text: 'Eine Amantadin-Infusion anschließen.',
        richtig: 'A',
        erklaerung: 'Amantadin als Infusion wird bei der akinetischen Krise häufig eingesetzt – ein Arzneimittel: nur nach ärztlicher Anordnung.',
        tipp: 'Handelt es sich um ein Arzneimittel?' },
      { nummer: 6,
        text: 'L-Dopa als lösliche Tablette über eine Magensonde geben.',
        richtig: 'A',
        erklaerung: 'So bekommt er das fehlende L-Dopa trotz Schluckstörung. Magensonde, Medikament und Dosis nur nach ärztlicher Anordnung.',
        tipp: 'Wer entscheidet über Medikament, Dosis und Verabreichungsweg?' },
      { nummer: 7,
        text: 'Gegen die Übelkeit erneut Metoclopramid (MCP) geben – wie gestern angeordnet.',
        richtig: 'N',
        erklaerung: '**MCP blockiert Dopamin** und hat die Krise mit ausgelöst. Nicht geben, Bedenken äußern und mit der Ärztin klären (Alternative z. B. Domperidon).',
        tipp: 'Wie wirkt MCP bei Parkinson?' },
      { nummer: 8,
        text: 'Ein- und Ausfuhr bilanzieren.',
        richtig: 'S',
        erklaerung: 'Fieber, Schwitzen und fehlendes Trinken führen schnell zur Exsikkose. Die Flüssigkeitsbilanz ist eine pflegerische Überwachungsaufgabe.',
        tipp: 'Fieber + Schwitzen + nichts trinken – was müssen Sie im Blick behalten?' },
      { nummer: 9,
        text: 'Die fehlenden Tabletten zerkleinern und Herrn Lenz mit etwas Joghurt eingeben.',
        richtig: 'N',
        erklaerung: 'Er kann nicht sicher schlucken – **Aspirationsgefahr**! Außerdem behindert Eiweiß die Aufnahme. Wie er die Medikamente bekommt, entscheidet die Ärztin.',
        tipp: 'Kann Herr Lenz gerade sicher schlucken?' },
      { nummer: 10,
        text: 'Regelmäßig umlagern sowie Thrombose-, Dekubitus- und Pneumonieprophylaxe durchführen.',
        richtig: 'S',
        erklaerung: 'Er kann sich nicht bewegen – Thrombose, Dekubitus und Pneumonie drohen. Prophylaxen sind eigenständige Pflegemaßnahmen.',
        tipp: 'Welche Komplikationen drohen bei völliger Unbeweglichkeit?' }
    ],
    merksatz: 'Akinetische Krise – lebensbedrohlicher Notfall. **Sofort selbstständig:** Ärztin informieren, Vitalzeichen und Bewusstsein überwachen, Oberkörper hoch, Speichel absaugen, nichts über den Mund geben (Aspiration), Prophylaxen, Ein- und Ausfuhr bilanzieren. **Nach ärztlicher Anordnung:** z. B. Amantadin-Infusion, L-Dopa über Magensonde, Infusionen. **Nicht:** trinken lassen, Tabletten über den Mund, Dopamin-Gegenspieler wie MCP oder Haloperidol.',
    danach: 'Bearbeiten Sie jetzt **Aufgabe 2** auf Ihrem Arbeitsblatt.'
  },

  ab2c: {
    ab: 'AB 2',
    raum: 'ab2',
    titel: 'Für die Schnellen: Sturzgefahr sortieren',
    anweisung: 'Herr Lenz hat sich von der Krise erholt und wird mobilisiert. Ordnen Sie zu: **P** = Pflegeproblem · **RF** = Risikofaktor · **R** = Ressource · **anderes Problem** = gehört zu einem anderen Pflegeproblem.',
    knoepfe: [
      { kuerzel: 'P', text: 'P' },
      { kuerzel: 'RF', text: 'RF' },
      { kuerzel: 'R', text: 'R' },
      { kuerzel: 'X', text: 'anderes Problem' }
    ],
    hilfe: {
      titel: 'Hilfe: aktuelles oder Risiko-Pflegeproblem?',
      punkte: [
        '**Aktuell (PESR):** Das Problem besteht schon → P + E (Ursachen) + S (Symptome) + R.',
        '**Risiko (PRF):** Das Problem droht erst → P + **RF** (Risikofaktoren) + R.',
        'Risikofaktoren liegen in der Person (z. B. Freezing) oder in der Umgebung (z. B. dunkle Wege).'
      ]
    },
    mindestens: 7,
    karten: [
      { nummer: 1, text: 'Sturzgefahr', richtig: 'P',
        erklaerung: 'Der Titel des Risiko-Pflegeproblems: Ein erneuter Sturz droht.', tipp: 'Welche Karte könnte als Überschrift über den anderen stehen?' },
      { nummer: 2, text: 'Bleibt kurz vor der nächsten Tablette an Türen wie festgeklebt stehen.', richtig: 'RF',
        erklaerung: 'Risikofaktor: Freezing im Off (Wearing-off) – der Oberkörper will weiter, die Füße bleiben stehen.', tipp: 'Macht das einen Sturz wahrscheinlicher?' },
      { nummer: 3, text: 'Ist vor drei Monaten beim Umdrehen in der Küche gestürzt.', richtig: 'RF',
        erklaerung: 'Ein Sturz in der Vorgeschichte ist einer der stärksten Risikofaktoren für weitere Stürze.', tipp: 'Wer schon gestürzt ist – wie hoch ist dann das Risiko?' },
      { nummer: 4, text: 'Die Umgebung im Krankenhaus ist fremd, der Weg zur Toilette ist nachts dunkel.', richtig: 'RF',
        erklaerung: 'Umgebungsbezogene Risikofaktoren: fremde Wege und Dunkelheit – Nachtlicht, Klingel und Hilfsmittel in Reichweite.', tipp: 'Liegt das Risiko nur in der Person – oder auch in der Umgebung?' },
      { nummer: 5, text: 'Macht kleine, schlurfende Schritte.', richtig: 'RF',
        erklaerung: 'Risikofaktor Gangstörung: Wer die Füße kaum hebt, bleibt leicht hängen.', tipp: 'Was passiert mit schlurfenden Füßen an einer Kante?' },
      { nummer: 6, text: 'Geht mit dem Rollator.', richtig: 'R',
        erklaerung: 'Ressource: Er hat ein Hilfsmittel und nutzt es.', tipp: 'Hilft ihm das – oder gefährdet es ihn?' },
      { nummer: 7, text: 'Kann über eine Markierung am Boden steigen und dabei mitzählen.', richtig: 'R',
        erklaerung: 'Ressource: eine Strategie gegen Freezing aus der Physiotherapie. Daran knüpfen die Interventionen an.', tipp: 'Ist das eine Fähigkeit, die ihm hilft?' },
      { nummer: 8, text: 'Ist geistig klar und möchte so schnell wie möglich wieder selbst gehen.', richtig: 'R',
        erklaerung: 'Ressource: Verständnis und Motivation – er kann Anleitungen umsetzen und arbeitet mit.', tipp: 'Was bringt Herr Lenz selbst mit?' },
      { nummer: 9, text: 'Verschluckt sich noch manchmal beim Trinken.', richtig: 'X',
        erklaerung: 'Gehört zu einem anderen Pflegeproblem: beeinträchtigtes Schlucken (Aspirationsgefahr).', tipp: 'Hat das etwas mit Stürzen zu tun?' },
      { nummer: 10, text: 'Ist nach der Hüftoperation beim Aufstehen noch unsicher und hat Schmerzen bei Belastung.', richtig: 'RF',
        erklaerung: 'Risikofaktor: Schmerzen und Unsicherheit nach der Operation. Schmerzmanagement und begleitetes Aufstehen senken das Risiko.', tipp: 'Macht das das Gehen sicherer oder unsicherer?' }
    ],
    merksatz: 'Risiko-Pflegeproblem: **P** = Sturzgefahr · **RF** = Risikofaktoren aus dem Fall – in der Person (Freezing, Off-Phasen, kleinschrittiger Gang, früherer Sturz, Schmerzen nach der OP) und in der Umgebung (fremde Umgebung, dunkle Wege) · **R** = Ressourcen. Interventionen begründen Sie mit den Risikofaktoren – z. B. Mobilisation in der **On-Phase**, etwa eine Stunde nach der Tablette.',
    danach: 'Bearbeiten Sie jetzt **Aufgabe 3** („Für die Schnellen“) auf Ihrem Arbeitsblatt.'
  }
};
