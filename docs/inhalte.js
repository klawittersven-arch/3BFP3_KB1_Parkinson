/* ==========================================================================
   INHALTE – KB I · Parkinson (3BFP3, Themenblock I) – Klausurtraining 1 und 2
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
     merksatz    – erscheint erst, wenn alle Karten richtig gelöst sind.
                   WICHTIG: Der Merksatz steht wortgleich in der Musterlösung
                   des Arbeitsblatts. Wenn Sie ihn hier ändern, ändern Sie ihn
                   bitte auch dort.

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
    merksatzUeberschrift: 'Ihr Merksatz',
    merksatzHinweis: 'Schreiben Sie den Merksatz auf Ihr Arbeitsblatt.',
    // {x} und {y} werden automatisch durch Zahlen ersetzt.
    fortschritt: '{x} von {y} richtig',
    ersterVersuch: 'Beim ersten Versuch richtig: {x} von {y}',
    nochEinmal: 'Noch einmal üben',
    richtigText: 'Richtig!',
    falschText: 'Noch nicht richtig – versuchen Sie es noch einmal.',
    tippVorwort: 'Tipp:',
    // {x} = beim ersten Versuch richtig, {y} = Anzahl Karten, {z} = nötige Mindestzahl
    durchklickenTitel: 'Hey, nicht einfach durchklicken!',
    durchklickenText: 'Beim ersten Versuch richtig: {x} von {y} – nötig sind mindestens {z}. Lesen Sie jede Karte genau und überlegen Sie, bevor Sie antworten. Dann erhalten Sie auch Ihren Merksatz.',
    durchklickenKnopf: 'Übung neu starten',
    zurUebersicht: 'Zur Übersicht',
    naechsteUebung: 'Weiter zu Übung 2',
    fertigAlle: 'Beide Übungen dieses Arbeitsblatts sind gelöst. 👍'
  },

  /* ========================================================================
     KLAUSURTRAINING 1 – Krankheitsbild und Pflegeprobleme (Di 03.11.)
     ======================================================================== */

  ab1a: {
    ab: 'Klausurtraining 1',
    titel: 'Übung 1: Fachlich richtig oder falsch?',
    anweisung: 'Jonas (3. Ausbildungsjahr) hat in einer Probeklausur das Krankheitsbild Parkinson erläutert. Prüfen Sie seine Sätze: **R** = fachlich richtig, **F** = fachlich falsch.',
    knoepfe: [
      { kuerzel: 'R', text: 'R – richtig' },
      { kuerzel: 'F', text: 'F – falsch' }
    ],
    mindestens: 7,
    karten: [
      { nummer: 1,
        text: 'Parkinson ist eine langsam fortschreitende Erkrankung des Nervensystems. Dabei gehen Nervenzellen in der Substantia nigra im Mittelhirn zugrunde.',
        richtig: 'R',
        erklaerung: 'Genau: Parkinson ist eine chronisch fortschreitende (neurodegenerative) Erkrankung. Betroffen ist vor allem die Substantia nigra im Mittelhirn.',
        tipp: 'Erinnern Sie sich an Ihr Arbeitsblatt „Warum entstehen die Symptome?“: Wo liegt die Substantia nigra?' },
      { nummer: 2,
        text: 'Die Nervenzellen der Substantia nigra bilden Acetylcholin. Bei Parkinson entsteht deshalb ein Acetylcholinmangel.',
        richtig: 'F',
        erklaerung: 'Richtig erkannt – der Satz ist falsch: Die Zellen bilden **Dopamin**. Es entsteht ein Dopaminmangel; Acetylcholin überwiegt dadurch nur relativ (Ungleichgewicht).',
        tipp: 'Welcher Botenstoff wird in der Substantia nigra gebildet?' },
      { nummer: 3,
        text: 'Die ersten Bewegungsstörungen zeigen sich, sobald die ersten Nervenzellen untergehen.',
        richtig: 'F',
        erklaerung: 'Richtig erkannt – der Satz ist falsch: Bewegungsstörungen fallen erst auf, wenn bereits **mehr als die Hälfte** der dopaminbildenden Zellen untergegangen ist (je nach Quelle 50–80 %). Deshalb wird Parkinson oft spät erkannt.',
        tipp: 'Kann das Gehirn einen Verlust von Nervenzellen eine Zeit lang ausgleichen?' },
      { nummer: 4,
        text: 'Beim idiopathischen Parkinson-Syndrom ist die Ursache für den Untergang der Nervenzellen unbekannt.',
        richtig: 'R',
        erklaerung: '„Idiopathisch“ heißt: ohne bekannte Ursache. Das idiopathische Parkinson-Syndrom ist mit etwa 75 % die häufigste Form.',
        tipp: 'Denken Sie an die Begriffshilfe zu „idiopathisch“.' },
      { nummer: 5,
        text: 'Der typische Parkinson-Tremor ist ein Ruhezittern: Er tritt auf, wenn die Hand entspannt aufliegt, und wird bei gezielten Bewegungen meist schwächer.',
        richtig: 'R',
        erklaerung: 'Richtig: **Ruhetremor**, oft zuerst auf einer Körperseite; bei Aufregung wird er stärker.',
        tipp: 'Wann zittert die Hand von Herrn Lenz – auf der Armlehne oder beim Greifen nach der Tasse?' },
      { nummer: 6,
        text: 'Rigor bedeutet, dass die Muskulatur schlaff ist und beim passiven Bewegen kaum Widerstand leistet.',
        richtig: 'F',
        erklaerung: 'Richtig erkannt – der Satz ist falsch: Rigor ist eine **Muskelsteifigkeit** (erhöhter Muskeltonus). Beim passiven Bewegen spürt man einen zähen, oft ruckartigen Widerstand (Zahnradphänomen).',
        tipp: 'Übersetzen Sie „Rigor“.' },
      { nummer: 7,
        text: 'Riechstörungen, Verstopfung und heftige Bewegungen im Traum können schon Jahre vor den ersten Bewegungsstörungen auftreten.',
        richtig: 'R',
        erklaerung: 'Ja – das sind typische **Frühzeichen** (Prodromalsymptome). Heftige Bewegungen und Rufen im Traum heißen REM-Schlaf-Verhaltensstörung.',
        tipp: 'Lesen Sie, was Frau Lenz über die Zeit vor zehn Jahren erzählt.' },
      { nummer: 8,
        text: 'Die posturale Instabilität (gestörte Halte- und Stellreflexe) tritt meist erst im Verlauf auf und erhöht das Sturzrisiko stark.',
        richtig: 'R',
        erklaerung: 'Richtig – das **vierte Leitsymptom**: Betroffene können einen Gleichgewichtsverlust nicht schnell genug ausgleichen und stürzen leicht, oft nach hinten.',
        tipp: 'Was passiert, wenn die Reflexe fehlen, die uns beim Umdrehen oder bei einem Stoß auffangen?' },
      { nummer: 9,
        text: 'Wird Parkinson früh genug behandelt, kann die Erkrankung geheilt werden.',
        richtig: 'F',
        erklaerung: 'Richtig erkannt – der Satz ist falsch: Parkinson ist **nicht heilbar**. Die Therapie lindert die Symptome und erhält die Selbstständigkeit möglichst lange; der Zelluntergang schreitet weiter fort.',
        tipp: 'Können untergegangene Nervenzellen ersetzt werden?' },
      { nummer: 10,
        text: 'Weil Herr Lenz kaum Mimik zeigt und langsam antwortet, ist er geistig nicht mehr leistungsfähig.',
        richtig: 'F',
        erklaerung: 'Richtig erkannt – der Satz ist falsch: Hypomimie (starres Gesicht) und Bradyphrenie (verlangsamtes Denken) bedeuten **keinen Verlust der Intelligenz**. Wer das verwechselt, kränkt Betroffene und spricht über ihren Kopf hinweg.',
        tipp: 'Was steht im Fall über sein Denken? „Geistig ist er klar.“' }
    ],
    merksatz: 'Parkinson ist eine fortschreitende neurodegenerative Erkrankung: In der Substantia nigra gehen dopaminbildende Nervenzellen zugrunde. Der Dopaminmangel stört die Bewegungssteuerung. Leitsymptome sind Bradykinese/Akinese, Rigor, Ruhetremor und – meist später – posturale Instabilität. Parkinson ist nicht heilbar; die Therapie lindert die Symptome.'
  },

  ab1b: {
    ab: 'Klausurtraining 1',
    titel: 'Übung 2: PESR-Bausteine erkennen',
    anweisung: 'Die Informationen gehören zu einem Pflegeproblem von Herrn Lenz. Ordnen Sie jede Information einem Baustein zu: **P** = Pflegeproblem · **E** = Einflussfaktor/Ursache · **S** = Symptom/Kennzeichen · **R** = Ressource.',
    knoepfe: [
      { kuerzel: 'P', text: 'P' },
      { kuerzel: 'E', text: 'E' },
      { kuerzel: 'S', text: 'S' },
      { kuerzel: 'R', text: 'R' }
    ],
    hilfe: {
      titel: 'Hilfe: Das PESR-Schema',
      punkte: [
        '**P – Pflegeproblem:** kurzer, pflegefachlicher Titel (Was ist das Problem?).',
        '**E – Einflussfaktoren/Ursachen:** Warum besteht das Problem? „… aufgrund von …“ – bei Parkinson oft die Leitsymptome oder Wirkungsschwankungen.',
        '**S – Symptome/Kennzeichen:** Was beobachten Sie konkret? „… erkennbar an …“ (mit Zeilenangabe).',
        '**R – Ressourcen:** Was kann der Mensch selbst? Was oder wer hilft (Motivation, Wissen, Hilfsmittel, Angehörige, Therapien)?'
      ]
    },
    mindestens: 6,
    karten: [
      { nummer: 1,
        text: 'Beeinträchtigte Gehfähigkeit',
        richtig: 'P',
        erklaerung: 'Das ist der Problemtitel – kurz und pflegefachlich. Alle anderen Karten erklären, belegen oder entschärfen dieses Problem.',
        tipp: 'Welche Karte könnte als Überschrift über allen anderen stehen?' },
      { nummer: 2,
        text: 'Bradykinese und Rigor',
        richtig: 'E',
        erklaerung: 'Einflussfaktoren: Die verlangsamten Bewegungen und die Muskelsteifigkeit sind die Ursache der Gehstörung.',
        tipp: 'Ist das eine konkrete Beobachtung – oder die Erklärung dafür?' },
      { nummer: 3,
        text: 'Bleibt an der Schlafzimmertür wie festgeklebt stehen (Freezing).',
        richtig: 'S',
        erklaerung: 'Symptom: eine konkrete Beobachtung, an der Sie das Problem erkennen.',
        tipp: 'Können Sie das sehen?' },
      { nummer: 4,
        text: 'Geht mit kleinen, schlurfenden Schritten.',
        richtig: 'S',
        erklaerung: 'Symptom: So zeigt sich die beeinträchtigte Gehfähigkeit.',
        tipp: 'Ursache oder Beobachtung?' },
      { nummer: 5,
        text: 'Kurz vor der nächsten Tablette lässt die Wirkung seiner Parkinson-Medikamente nach.',
        richtig: 'E',
        erklaerung: 'Einflussfaktor: Wirkungsschwankung (Wearing-off) – in dieser Zeit verschlechtert sich die Gehfähigkeit.',
        tipp: 'Erklärt diese Information, WARUM er gerade schlechter geht?' },
      { nummer: 6,
        text: 'Die Physiotherapeutin hat ihm gezeigt, über eine Markierung zu steigen und die Schritte mitzuzählen.',
        richtig: 'R',
        erklaerung: 'Ressource: Er kennt Strategien gegen das Freezing (äußere Reize). Daran knüpfen die Pflegemaßnahmen an.',
        tipp: 'Hilft ihm das – oder schadet es?' },
      { nummer: 7,
        text: 'Gestörte Halte- und Stellreflexe (posturale Instabilität)',
        richtig: 'E',
        erklaerung: 'Einflussfaktor: Gleichgewichtsverluste kann er nicht mehr schnell ausgleichen.',
        tipp: 'Ist das eine Beobachtung – oder ein Grund für das Problem?' },
      { nummer: 8,
        text: 'Möchte wieder selbstständig in seine Werkstatt gehen.',
        richtig: 'R',
        erklaerung: 'Ressource: Motivation ist eine wichtige Ressource für Training und Mitarbeit.',
        tipp: 'Was treibt ihn an?' },
      { nummer: 9,
        text: 'Ist vor zwei Wochen beim Umdrehen rückwärts gestürzt.',
        richtig: 'S',
        erklaerung: 'Symptom bzw. Kennzeichen: ein konkretes Ereignis, das die Gehstörung belegt (und auf eine Sturzgefahr hinweist).',
        tipp: 'Was ist hier konkret passiert?' },
      { nummer: 10,
        text: 'Nutzt seinen Rollator zuverlässig.',
        richtig: 'R',
        erklaerung: 'Ressource: Er hat ein Hilfsmittel und setzt es ein.',
        tipp: 'Unterstützt ihn das?' }
    ],
    merksatz: 'PESR: P = Pflegeproblem als kurzer Titel · E = Einflussfaktoren/Ursachen („aufgrund von …“) – bei Parkinson oft Leitsymptome und Wirkungsschwankungen · S = Symptome/Kennzeichen, die Sie im Fall beobachten („erkennbar an …“, mit Zeilenangabe) · R = Ressourcen: Fähigkeiten, Motivation, Hilfsmittel und Menschen, die unterstützen.'
  },

  /* ========================================================================
     KLAUSURTRAINING 2 – Pflege planen und im Notfall handeln (Di 10.11.)
     ======================================================================== */

  ab2a: {
    ab: 'Klausurtraining 2',
    titel: 'Übung 1: Fachgerecht gepflegt?',
    anweisung: 'Prüfen Sie, wie Pflegefachpersonen Herrn Lenz versorgen: **R** = fachgerecht, **F** = nicht fachgerecht. Die Erklärungen liefern Ihnen die Begründungen für Aufgabe 1.',
    knoepfe: [
      { kuerzel: 'R', text: 'R – fachgerecht' },
      { kuerzel: 'F', text: 'F – nicht fachgerecht' }
    ],
    hilfe: {
      titel: 'Hilfe: Leitfragen',
      punkte: [
        'Fördert die Maßnahme seine **Selbstständigkeit** (aktivierende Pflege)?',
        'Senkt sie das **Sturz-** oder das **Aspirationsrisiko**?',
        'Passt sie zu den **Leitsymptomen** (Akinese, Rigor, Tremor, gestörtes Gleichgewicht)?',
        'Berücksichtigt sie, dass **Zeitdruck und Stress** die Symptome verstärken?'
      ]
    },
    mindestens: 7,
    karten: [
      { nummer: 1,
        text: 'Herr Lenz bleibt an der Schlafzimmertür wie festgeklebt stehen. Die Pflegefachperson zieht ihn am Arm nach vorn, damit er weitergeht.',
        richtig: 'F',
        erklaerung: 'Nicht fachgerecht: Ziehen bringt ihn aus dem Gleichgewicht – wegen der gestörten Halte- und Stellreflexe droht ein Sturz. Besser: kurz stehen lassen, ruhig ansprechen, dann einen äußeren Reiz geben.',
        tipp: 'Was passiert mit seinem Gleichgewicht, wenn jemand an ihm zieht?' },
      { nummer: 2,
        text: 'Bei Freezing gibt die Pflegefachperson einen Rhythmus vor („eins – zwei – eins – zwei“) und lässt Herrn Lenz bewusst über die Klebemarkierung am Boden steigen.',
        richtig: 'R',
        erklaerung: 'Fachgerecht: Äußere Reize (Rhythmus, Linien, Musik) helfen, die Bewegung neu zu starten. Sie ersetzen die gestörte automatische Bewegungssteuerung.',
        tipp: 'Was hat die Physiotherapeutin Herrn Lenz gezeigt?' },
      { nummer: 3,
        text: 'Zum Umdrehen soll sich Herr Lenz schnell auf der Stelle drehen, damit er nicht so lange unsicher steht.',
        richtig: 'F',
        erklaerung: 'Nicht fachgerecht: Schnelles Drehen auf der Stelle löst Freezing und Stürze aus. Besser: in einem großen Bogen gehen und Schritt für Schritt wenden.',
        tipp: 'Wobei ist Herr Lenz vor zwei Wochen gestürzt?' },
      { nummer: 4,
        text: 'In der Wohnung werden lose Teppiche und Kabel entfernt, ein Nachtlicht angebracht und Haltegriffe im Bad montiert.',
        richtig: 'R',
        erklaerung: 'Fachgerecht: Sturzprophylaxe – ohne Stolperfallen, mit Licht und Haltemöglichkeiten sinkt das Sturzrisiko, auch nachts auf dem Weg zur Toilette.',
        tipp: 'Welches Risiko besteht bei Herrn Lenz besonders?' },
      { nummer: 5,
        text: 'Körperpflege und Gehtraining plant die Pflegefachperson in die Zeit, in der die Tabletten gut wirken und Herr Lenz gut beweglich ist.',
        richtig: 'R',
        erklaerung: 'Fachgerecht: In der guten Phase (On-Phase) kann er mehr selbst tun – das fördert die Selbstständigkeit und senkt das Sturzrisiko. Die Beweglichkeit über den Tag beobachten und dokumentieren.',
        tipp: 'Ist Herr Lenz den ganzen Tag gleich beweglich?' },
      { nummer: 6,
        text: 'Weil das Waschen so lange dauert, übernimmt die Pflegefachperson die Körperpflege komplett.',
        richtig: 'F',
        erklaerung: 'Nicht fachgerecht: Aktivierende Pflege heißt, er tut alles selbst, was er kann. Zeit lassen und nicht drängen – Zeitdruck und Stress verstärken die Symptome. Nur dort unterstützen, wo es nötig ist.',
        tipp: 'Was bedeutet aktivierende Pflege?' },
      { nummer: 7,
        text: 'Beim Essen sitzt Herr Lenz aufrecht am Tisch, das Kinn leicht zur Brust geneigt. Er isst in Ruhe kleine Bissen.',
        richtig: 'R',
        erklaerung: 'Fachgerecht: Aspirationsprophylaxe – aufrechte Haltung und Kinn zur Brust schützen die Atemwege; kleine Bissen und Ruhe erleichtern das Schlucken.',
        tipp: 'Wie schützt die Haltung beim Schlucken die Atemwege?' },
      { nummer: 8,
        text: 'Damit das Wasser besser hinunterläuft, soll Herr Lenz beim Trinken den Kopf weit in den Nacken legen.',
        richtig: 'F',
        erklaerung: 'Nicht fachgerecht: Mit dem Kopf im Nacken sind die Atemwege offen – Flüssigkeit gelangt leicht in die Luftröhre (Aspiration). Besser: Kopf leicht nach vorn, Getränke nach logopädischer Empfehlung andicken, Becher mit Nasenausschnitt.',
        tipp: 'Probieren Sie es selbst: Wie schluckt es sich mit dem Kopf im Nacken?' },
      { nummer: 9,
        text: 'Gegen die Verstopfung achtet die Pflegefachperson darauf, dass Herr Lenz über den Tag verteilt etwa 1,5 Liter trinkt, ballaststoffreich isst und sich täglich bewegt.',
        richtig: 'R',
        erklaerung: 'Fachgerecht: Obstipationsprophylaxe – Flüssigkeit, Ballaststoffe und Bewegung regen den trägen Darm an. Ein Stuhlprotokoll zeigt, ob die Maßnahmen wirken.',
        tipp: 'Was regt die Darmtätigkeit an?' },
      { nummer: 10,
        text: 'Zum Ankleiden bekommt Herr Lenz Kleidung mit Klettverschlüssen statt kleiner Knöpfe. Er zieht sich im Sitzen an.',
        richtig: 'R',
        erklaerung: 'Fachgerecht: Rigor und Akinese erschweren feine Bewegungen. Einfache Verschlüsse erhalten die Selbstständigkeit (Kompensation), Sitzen beugt Stürzen vor.',
        tipp: 'Was fällt ihm wegen Rigor und Akinese schwer?' }
    ],
    merksatz: 'Pflege bei Parkinson: aktivierend pflegen und Zeit lassen – Stress verstärkt die Symptome. Anstrengendes in die gute Phase (On-Phase) legen. Bei Freezing nicht ziehen, sondern äußere Reize geben (Rhythmus, Markierung); in großen Bögen wenden; Stolperfallen beseitigen. Beim Essen aufrecht sitzen, Kinn zur Brust, kleine Bissen. Gegen Verstopfung: trinken, Ballaststoffe, Bewegung.'
  },

  ab2b: {
    ab: 'Klausurtraining 2',
    titel: 'Übung 2: Akinetische Krise – was tun?',
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
  }
};
