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
        text: 'Wird Parkinson früh mit L-Dopa behandelt, kann die Erkrankung geheilt werden.',
        richtig: 'F',
        erklaerung: 'Richtig erkannt – der Satz ist falsch: Parkinson ist **nicht heilbar**. L-Dopa ersetzt den fehlenden Botenstoff und lindert die Symptome (symptomatische Therapie); der Zelluntergang schreitet weiter fort.',
        tipp: 'Behandelt L-Dopa die Ursache – oder die Folgen des Zelluntergangs?' },
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
        text: 'Die Wirkung der L-Dopa-Tablette lässt kurz vor der nächsten Einnahme nach.',
        richtig: 'E',
        erklaerung: 'Einflussfaktor: Wearing-off – in dieser Zeit verschlechtert sich die Gehfähigkeit.',
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
     KLAUSURTRAINING 2 – Medikamente und Notfall (Di 10.11.)
     ======================================================================== */

  ab2a: {
    ab: 'Klausurtraining 2',
    titel: 'Übung 1: Richtig gehandelt?',
    anweisung: 'Herr Lenz nimmt seit acht Jahren L-Dopa. Prüfen Sie, wie die Pflegefachpersonen mit seinen Medikamenten umgehen: **R** = richtig gehandelt, **F** = falsch gehandelt.',
    knoepfe: [
      { kuerzel: 'R', text: 'R – richtig gehandelt' },
      { kuerzel: 'F', text: 'F – falsch gehandelt' }
    ],
    hilfe: {
      titel: 'Hilfe: Wirkungsschwankungen',
      punkte: [
        '**On:** L-Dopa wirkt – gute Beweglichkeit.',
        '**Off:** L-Dopa wirkt nicht (ausreichend) – Steifigkeit, Verlangsamung, Freezing.',
        '**Wearing-off:** Die Wirkung lässt vorhersehbar kurz vor der nächsten Dosis nach.',
        '**Dyskinesien:** unwillkürliche Überbewegungen, meist bei hohem Wirkspiegel.'
      ]
    },
    mindestens: 7,
    karten: [
      { nummer: 1,
        text: 'Herr Lenz erhält seine L-Dopa-Tablette um 7:00 Uhr – wie zu Hause – mit einem Glas Wasser. Das Frühstück folgt um 7:30 Uhr.',
        richtig: 'R',
        erklaerung: 'Richtig gehandelt: pünktlich nach seinem eigenen Plan, mit Wasser und 30 Minuten vor dem Essen.',
        tipp: 'Prüfen Sie Uhrzeit, Getränk und Abstand zum Essen.' },
      { nummer: 2,
        text: 'Weil die Station um 8 Uhr Tabletten verteilt, bekommt Herr Lenz seine 7-Uhr-Tablette eine Stunde später.',
        richtig: 'F',
        erklaerung: 'Falsch gehandelt: Parkinson-Medikamente sind zeitkritisch. Sie werden nach den individuellen Uhrzeiten gegeben, nicht nach den Verteilzeiten – sonst drohen Off-Phasen.',
        tipp: 'Nach wessen Zeitplan richten sich Parkinson-Medikamente?' },
      { nummer: 3,
        text: 'Herr Lenz nimmt L-Dopa mit einem Becher Quark, damit sein Magen geschützt ist.',
        richtig: 'F',
        erklaerung: 'Falsch gehandelt: Eiweiß (Quark, Milch, Käse, Fleisch) behindert die Aufnahme von L-Dopa. Bei Übelkeit hilft ein kleiner eiweißarmer Imbiss (z. B. Zwieback).',
        tipp: 'Was enthält Quark – und was bedeutet das für die Aufnahme von L-Dopa?' },
      { nummer: 4,
        text: 'Vor der Operation soll Herr Lenz nüchtern bleiben. Die Pflegefachperson klärt mit der Ärztin, ob er L-Dopa mit einem Schluck Wasser nehmen darf.',
        richtig: 'R',
        erklaerung: 'Richtig gehandelt: L-Dopa darf nicht einfach wegfallen. Ein Schluck Wasser ist meist erlaubt – oder die Ärztin ordnet eine Alternative an.',
        tipp: 'Darf L-Dopa einfach wegfallen?' },
      { nummer: 5,
        text: 'Der Nachtdienst lässt ab 22 Uhr alle Tabletten weg, auch L-Dopa – „wegen der OP morgen“.',
        richtig: 'F',
        erklaerung: 'Falsch gehandelt: Das eigenmächtige Weglassen von L-Dopa ist der häufigste Auslöser einer akinetischen Krise.',
        tipp: 'Was passiert, wenn der Dopaminspiegel über viele Stunden abfällt?' },
      { nummer: 6,
        text: 'Herrn Lenz ist nach der OP übel. Die Pflegefachperson gibt das angeordnete Metoclopramid (MCP), ohne nachzufragen.',
        richtig: 'F',
        erklaerung: 'Falsch gehandelt: MCP blockiert Dopamin und verschlechtert die Parkinson-Symptome. Die Pflegefachperson muss die Anordnung hinterfragen – eine Alternative ist z. B. Domperidon.',
        tipp: 'Wie wirkt MCP auf das Dopaminsystem?' },
      { nummer: 7,
        text: 'Herr Lenz kann die große Retardtablette schlecht schlucken. Die Pflegefachperson zermörsert sie.',
        richtig: 'F',
        erklaerung: 'Falsch gehandelt: Retardtabletten dürfen nicht geteilt oder zermörsert werden – sonst wird der Wirkstoff auf einmal frei. Darreichungsform mit Ärztin oder Apotheke klären (z. B. lösliche Tablette).',
        tipp: 'Was bedeutet „retard“?' },
      { nummer: 8,
        text: 'Die Pflegefachperson notiert mit Uhrzeit, wann Herr Lenz steif wird und wann er unwillkürliche Überbewegungen hat, und gibt das an die Ärztin weiter.',
        richtig: 'R',
        erklaerung: 'Richtig gehandelt: Wirkungsschwankungen (Off-Phasen, Dyskinesien) dokumentieren, z. B. im Parkinson-Tagebuch – so kann die Ärztin die Medikation anpassen.',
        tipp: 'Wofür braucht die Ärztin diese Informationen?' },
      { nummer: 9,
        text: 'Die Pflegefachperson plant die Mobilisation etwa eine Stunde nach der Tablette.',
        richtig: 'R',
        erklaerung: 'Richtig gehandelt: In der On-Phase ist Herr Lenz am beweglichsten – das senkt das Sturzrisiko.',
        tipp: 'Wann wirkt L-Dopa am besten?' },
      { nummer: 10,
        text: 'Herr Lenz ist nachts unruhig und sieht Tiere an der Wand. Die Pflegefachperson bittet die Ärztin, statt Haloperidol ein anderes Medikament zu prüfen.',
        richtig: 'R',
        erklaerung: 'Richtig gehandelt: Haloperidol blockiert Dopamin und ist bei Parkinson gefährlich. Möglich sind z. B. Quetiapin oder Clozapin – nach ärztlicher Anordnung.',
        tipp: 'Welche Wirkung hat Haloperidol auf das Dopaminsystem?' }
    ],
    merksatz: 'Parkinson-Medikamente sind zeitkritisch: pünktlich nach dem individuellen Plan geben, L-Dopa 30 Minuten vor oder 60–90 Minuten nach dem Essen mit Wasser, nie eigenmächtig weglassen (auch nicht bei Nüchternheit), keine Dopamin-Gegenspieler wie Haloperidol oder MCP. Wirkung und Wirkungsschwankungen beobachten und dokumentieren.'
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
        text: 'Eine Infusion mit Amantadin anschließen.',
        richtig: 'A',
        erklaerung: 'Amantadin als Infusion wird bei der akinetischen Krise häufig eingesetzt – es ist aber ein Arzneimittel: nur nach ärztlicher Anordnung.',
        tipp: 'Handelt es sich um ein Arzneimittel?' },
      { nummer: 6,
        text: 'Lösliches L-Dopa über eine Magensonde geben.',
        richtig: 'A',
        erklaerung: 'So erhält er den fehlenden Wirkstoff trotz Schluckstörung. Magensonde und Medikamentengabe nur nach ärztlicher Anordnung.',
        tipp: 'Wer entscheidet über Medikament, Dosis und Verabreichungsweg?' },
      { nummer: 7,
        text: 'Wegen der Unruhe in der Nacht wie am Vorabend Haloperidol geben.',
        richtig: 'N',
        erklaerung: 'Haloperidol blockiert Dopamin und kann eine akinetische Krise auslösen oder verschlimmern. Liegt eine solche Anordnung vor, äußern Sie Ihre Bedenken (Remonstration) und klären sie mit der Ärztin.',
        tipp: 'Wie wirkt ein klassisches Neuroleptikum auf das Dopaminsystem?' },
      { nummer: 8,
        text: 'Ein- und Ausfuhr bilanzieren.',
        richtig: 'S',
        erklaerung: 'Fieber und Schwitzen führen schnell zur Exsikkose. Die Flüssigkeitsbilanz ist eine pflegerische Überwachungsaufgabe und Grundlage für die ärztliche Infusionstherapie.',
        tipp: 'Fieber + Schwitzen + nichts trinken – was müssen Sie im Blick behalten?' },
      { nummer: 9,
        text: 'Paracetamol als Infusion gegen das Fieber geben.',
        richtig: 'A',
        erklaerung: 'Ein Arzneimittel – nur nach ärztlicher Anordnung. Ergänzend sind kühlende Maßnahmen möglich.',
        tipp: 'Arzneimittel oder Pflegemaßnahme?' },
      { nummer: 10,
        text: 'Regelmäßig umlagern sowie Thrombose-, Dekubitus- und Pneumonieprophylaxe durchführen.',
        richtig: 'S',
        erklaerung: 'Er kann sich nicht bewegen – Thrombose, Dekubitus und Pneumonie drohen. Prophylaxen sind eigenständige Pflegemaßnahmen (Medikamente wie Heparin nur nach Anordnung).',
        tipp: 'Welche Komplikationen drohen bei völliger Unbeweglichkeit?' }
    ],
    merksatz: 'Die akinetische Krise ist ein lebensbedrohlicher Notfall. Sofort: Ärztin informieren, Vitalzeichen und Bewusstsein überwachen, nichts über den Mund geben (Aspiration), Prophylaxen durchführen, Flüssigkeit bilanzieren. Nur nach ärztlicher Anordnung: Medikamente wie Amantadin-Infusion, L-Dopa über Magensonde und Infusionen. Dopamin-Gegenspieler wie Haloperidol oder MCP gefährden Menschen mit Parkinson.'
  }
};
