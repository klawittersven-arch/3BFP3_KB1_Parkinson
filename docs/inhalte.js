/* ==========================================================================
   INHALTE – KB I · Parkinson (3BFP3, Themenblock I)
   ==========================================================================

   In dieser Datei stehen ALLE Texte der acht Übungen.
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
     ARBEITSBLATT 1 – Das Krankheitsbild prüfungsreif erläutern
     ======================================================================== */

  ab1a: {
    ab: 'Arbeitsblatt 1',
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
        tipp: 'Wann zittert die Hand von Herrn Lenz – beim Fernsehen oder beim Greifen nach der Tasse?' },
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
        tipp: 'Was sagt Frau Lenz? „Aber er bekommt alles mit.“' }
    ],
    merksatz: 'Parkinson ist eine fortschreitende neurodegenerative Erkrankung: In der Substantia nigra gehen dopaminbildende Nervenzellen zugrunde. Der Dopaminmangel stört die Bewegungssteuerung. Leitsymptome sind Bradykinese/Akinese, Rigor, Ruhetremor und – meist später – posturale Instabilität. Parkinson ist nicht heilbar; die Therapie lindert die Symptome.'
  },

  ab1b: {
    ab: 'Arbeitsblatt 1',
    titel: 'Übung 2: Physisch, psychisch oder sozial?',
    anweisung: 'Ordnen Sie die Auswirkungen der Erkrankung bei Herrn Lenz zu: **Ph** = physisch (körperlich), **Ps** = psychisch (seelisches Erleben), **So** = sozial (Beziehungen, Teilhabe, Rollen).',
    knoepfe: [
      { kuerzel: 'PH', text: 'Ph – physisch' },
      { kuerzel: 'PS', text: 'Ps – psychisch' },
      { kuerzel: 'SO', text: 'So – sozial' }
    ],
    mindestens: 6,
    karten: [
      { nummer: 1,
        text: 'Vor zwei Wochen ist Herr Lenz rückwärts gegen den Schrank gestürzt und hat sich eine Platzwunde zugezogen.',
        richtig: 'PH',
        erklaerung: 'Körperliche Auswirkung: Sturz mit Verletzung – eine Folge der posturalen Instabilität und der Gangstörung.',
        tipp: 'Betrifft das den Körper, das Erleben oder die Beziehungen zu anderen?' },
      { nummer: 2,
        text: 'Er schämt sich für sein Zittern, wenn andere zusehen.',
        richtig: 'PS',
        erklaerung: 'Scham ist ein Gefühl – eine psychische Auswirkung. Sie kann zu sozialem Rückzug führen.',
        tipp: 'Hier geht es um ein Gefühl.' },
      { nummer: 3,
        text: 'Er geht nicht mehr zu seinem Stammtisch.',
        richtig: 'SO',
        erklaerung: 'Sozialer Rückzug: Kontakte und Teilhabe am gesellschaftlichen Leben nehmen ab.',
        tipp: 'Was verändert sich in seinen Kontakten zu anderen Menschen?' },
      { nummer: 4,
        text: '„Manchmal frage ich mich, wofür das alles noch gut ist.“',
        richtig: 'PS',
        erklaerung: 'Hinweis auf Hoffnungslosigkeit und depressive Stimmung. Depressionen sind bei Parkinson häufig (nichtmotorisches Symptom): nachfragen und an die Ärztin weitergeben!',
        tipp: 'Was drückt Herr Lenz mit diesem Satz über sein Erleben aus?' },
      { nummer: 5,
        text: 'Er hat nur noch alle vier bis fünf Tage Stuhlgang.',
        richtig: 'PH',
        erklaerung: 'Obstipation – körperlich. Ursachen: verlangsamte Darmtätigkeit (das vegetative Nervensystem ist mitbetroffen), Bewegungsmangel, oft zu wenig Flüssigkeit.',
        tipp: 'Welches Organsystem ist betroffen?' },
      { nummer: 6,
        text: 'Frau Lenz übernimmt immer mehr Aufgaben, die früher ihr Mann erledigt hat.',
        richtig: 'SO',
        erklaerung: 'Die Rollen in der Partnerschaft verändern sich: Aus der Ehefrau wird zunehmend die pflegende Angehörige – eine soziale Auswirkung und ein Belastungsrisiko für Frau Lenz.',
        tipp: 'Es geht um Rollen und Aufgaben in der Familie.' },
      { nummer: 7,
        text: 'Er hat in einem halben Jahr 4 kg abgenommen.',
        richtig: 'PH',
        erklaerung: 'Körperlich: Tremor und Rigor verbrauchen Energie; zugleich dauert das Essen lange, und durch die Riechstörung schmeckt es weniger.',
        tipp: 'Woran lässt sich diese Auswirkung messen?' },
      { nummer: 8,
        text: 'Er hat Angst, wieder zu stürzen, und bewegt sich deshalb immer weniger.',
        richtig: 'PS',
        erklaerung: 'Sturzangst ist psychisch – mit körperlichen Folgen: weniger Bewegung, weniger Kraft, noch höheres Sturzrisiko (Teufelskreis).',
        tipp: 'Welches Gefühl steckt dahinter?' },
      { nummer: 9,
        text: 'Im Supermarkt hat ihn jemand gefragt, ob er betrunken sei.',
        richtig: 'SO',
        erklaerung: 'Stigmatisierung: Andere deuten seine Symptome falsch. Das belastet Begegnungen und kann zu Rückzug führen.',
        tipp: 'Es geht um die Reaktion anderer Menschen.' }
    ],
    merksatz: 'Parkinson betrifft den ganzen Menschen: physisch (z. B. Stürze, Obstipation, Gewichtsverlust), psychisch (z. B. Scham, Sturzangst, depressive Stimmung) und sozial (z. B. Rückzug, Stigmatisierung, veränderte Rollen in der Familie). In der Prüfung belegen Sie jede Auswirkung mit einer Information aus dem Fall.'
  },

  /* ========================================================================
     ARBEITSBLATT 2 – Medikamente sicher managen, akinetische Krise
     ======================================================================== */

  ab2a: {
    ab: 'Arbeitsblatt 2',
    titel: 'Übung 1: On, Off oder Dyskinesie?',
    anweisung: 'Herr Lenz nimmt seit acht Jahren L-Dopa. Ordnen Sie die Beobachtungen zu: **On** = gute Beweglichkeit, das Medikament wirkt · **Off** = Unbeweglichkeit, das Medikament wirkt nicht ausreichend · **Dys** = Dyskinesie, unwillkürliche Überbewegungen.',
    knoepfe: [
      { kuerzel: 'ON', text: 'On' },
      { kuerzel: 'OFF', text: 'Off' },
      { kuerzel: 'DYS', text: 'Dys' }
    ],
    hilfe: {
      titel: 'Hilfe: Wirkungsschwankungen',
      punkte: [
        '**On:** L-Dopa wirkt – gute Beweglichkeit.',
        '**Off:** L-Dopa wirkt nicht (ausreichend) – Steifigkeit, Verlangsamung, Freezing.',
        '**Wearing-off:** Die Wirkung lässt vorhersehbar kurz vor der nächsten Dosis nach.',
        '**On-Off-Phänomen:** plötzliche, nicht vorhersehbare Wechsel – „wie ein Lichtschalter“.',
        '**Dyskinesien:** unwillkürliche, schlenkernde oder drehende Überbewegungen, meist bei hohem Wirkspiegel.'
      ]
    },
    mindestens: 5,
    karten: [
      { nummer: 1,
        text: 'Eine Stunde nach der Tablette geht Herr Lenz flüssig ins Bad und knöpft sein Hemd allein zu.',
        richtig: 'ON',
        erklaerung: 'On-Phase: L-Dopa wirkt, die Beweglichkeit ist gut. Die beste Zeit für Körperpflege, Therapien und wichtige Gespräche.',
        tipp: 'Wirkt das Medikament gerade?' },
      { nummer: 2,
        text: 'Kurz vor der nächsten Einnahme werden seine Schritte kleiner, und er bleibt an der Tür stehen.',
        richtig: 'OFF',
        erklaerung: 'Off – genauer: **Wearing-off**. Die Wirkung lässt vorhersehbar vor der nächsten Dosis nach. Uhrzeit dokumentieren: So kann die Ärztin die Abstände anpassen.',
        tipp: 'Achten Sie auf den Zeitpunkt: kurz VOR der nächsten Tablette.' },
      { nummer: 3,
        text: 'Etwa eine Stunde nach der Tablette machen Kopf und Arme schlenkernde, drehende Bewegungen, die er nicht steuern kann.',
        richtig: 'DYS',
        erklaerung: 'Dyskinesie: unwillkürliche Überbewegungen, meist bei hohem Wirkspiegel („peak-dose“). Viele Betroffene empfinden sie als weniger belastend als das Off.',
        tipp: 'Zu wenig Bewegung – oder zu viel?' },
      { nummer: 4,
        text: 'Mitten im Gespräch wird er plötzlich ganz steif – ohne Zusammenhang mit der Uhrzeit der Tablette.',
        richtig: 'OFF',
        erklaerung: 'Off – hier als **On-Off-Phänomen**: plötzliche, nicht vorhersehbare Wechsel, „wie bei einem Lichtschalter“.',
        tipp: 'Kann er sich in diesem Moment gut bewegen?' },
      { nummer: 5,
        text: 'Morgens vor der ersten Tablette kommt er kaum aus dem Bett.',
        richtig: 'OFF',
        erklaerung: 'Off am frühen Morgen: Über Nacht ist der Wirkspiegel abgesunken. Die erste Tablette pünktlich und rechtzeitig vor dem Aufstehen geben.',
        tipp: 'Wann hat er zuletzt L-Dopa eingenommen?' },
      { nummer: 6,
        text: 'Nach einem großen Schnitzel zum Mittagessen wirkt die Tablette verspätet und schwächer; er bewegt sich kaum.',
        richtig: 'OFF',
        erklaerung: 'Off: Eiweißbausteine (Aminosäuren) konkurrieren mit L-Dopa um die Aufnahme im Darm und ins Gehirn. Deshalb L-Dopa mit Abstand zu eiweißreichen Mahlzeiten geben.',
        tipp: 'Was hat das Mittagessen mit der Aufnahme des Medikaments zu tun?' },
      { nummer: 7,
        text: 'Er spricht deutlich lauter, seine Mimik ist lebhafter, das Zittern ist kaum zu sehen.',
        richtig: 'ON',
        erklaerung: 'On-Phase: Auch Stimme, Mimik und Tremor bessern sich, wenn L-Dopa wirkt.',
        tipp: 'Sind die Parkinson-Symptome gerade stark oder schwach?' },
      { nummer: 8,
        text: 'Er kann im Sessel nicht stillsitzen, die Beine „tanzen“, und der Oberkörper wiegt hin und her.',
        richtig: 'DYS',
        erklaerung: 'Dyskinesie. Beobachten, Uhrzeit dokumentieren und an die Ärztin weitergeben – nicht mit Unruhe oder Angst verwechseln.',
        tipp: 'Kann er diese Bewegungen willentlich steuern?' }
    ],
    merksatz: 'Nach Jahren der L-Dopa-Therapie wechseln On-Phasen (gute Beweglichkeit) mit Off-Phasen (Unbeweglichkeit, Freezing) und Dyskinesien (Überbewegungen). Pflegefachpersonen beobachten diese Wirkungsschwankungen, dokumentieren sie mit Uhrzeit (z. B. im Parkinson-Tagebuch) und geben sie an die Ärztin weiter – nur so lässt sich die Medikation anpassen.'
  },

  ab2b: {
    ab: 'Arbeitsblatt 2',
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
  },

  /* ========================================================================
     ARBEITSBLATT 3 – Pflegeprozess: PESR, Pflegeziele, Maßnahmen
     ======================================================================== */

  ab3a: {
    ab: 'Arbeitsblatt 3',
    titel: 'Übung 1: PESR-Bausteine erkennen',
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
        '**E – Einflussfaktoren/Ursachen:** Warum besteht das Problem? „… aufgrund von …“ – bei Parkinson oft die Leitsymptome, Wirkungsschwankungen oder Begleiterkrankungen.',
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
        text: 'Setzt kleine, schlurfende Schritte.',
        richtig: 'S',
        erklaerung: 'Symptom: So zeigt sich die beeinträchtigte Gehfähigkeit.',
        tipp: 'Ursache oder Beobachtung?' },
      { nummer: 5,
        text: 'Die Wirkung der L-Dopa-Tablette lässt vormittags kurz vor der nächsten Einnahme nach.',
        richtig: 'E',
        erklaerung: 'Einflussfaktor: Wearing-off – in dieser Zeit verschlechtert sich die Gehfähigkeit.',
        tipp: 'Erklärt diese Information, WARUM er gerade schlechter geht?' },
      { nummer: 6,
        text: 'Hat in der Reha gelernt, über eine Markierung zu steigen und seine Schritte mitzuzählen.',
        richtig: 'R',
        erklaerung: 'Ressource: Er kennt Strategien gegen das Freezing (Cueing). Daran knüpfen die Pflegemaßnahmen an.',
        tipp: 'Hilft ihm das – oder schadet es?' },
      { nummer: 7,
        text: 'Zustand nach Hüftoperation vor sechs Wochen.',
        richtig: 'E',
        erklaerung: 'Einflussfaktor: Die Operation schränkt Kraft und Beweglichkeit zusätzlich ein.',
        tipp: 'Ist das eine Beobachtung – oder ein Grund für das Problem?' },
      { nummer: 8,
        text: 'Möchte wieder selbstständig in seine Werkstatt gehen.',
        richtig: 'R',
        erklaerung: 'Ressource: Motivation ist eine wichtige Ressource für Training und Mitarbeit.',
        tipp: 'Was treibt ihn an?' },
      { nummer: 9,
        text: 'Ist zweimal im Flur beinahe gestürzt.',
        richtig: 'S',
        erklaerung: 'Symptom bzw. Kennzeichen: ein konkretes Ereignis, das die Gehstörung belegt (und auf eine Sturzgefahr hinweist).',
        tipp: 'Was ist hier konkret passiert?' },
      { nummer: 10,
        text: 'Nutzt seinen Rollator zuverlässig.',
        richtig: 'R',
        erklaerung: 'Ressource: Er hat ein Hilfsmittel und setzt es ein.',
        tipp: 'Unterstützt ihn das?' }
    ],
    merksatz: 'PESR: P = Pflegeproblem als kurzer Titel · E = Einflussfaktoren/Ursachen („aufgrund von …“) – bei Parkinson oft Leitsymptome, Wirkungsschwankungen, Begleiterkrankungen · S = Symptome/Kennzeichen, die Sie im Fall beobachten („erkennbar an …“, mit Zeilenangabe) · R = Ressourcen: Fähigkeiten, Motivation, Hilfsmittel und Menschen, die unterstützen.'
  },

  ab3b: {
    ab: 'Arbeitsblatt 3',
    titel: 'Übung 2: Ist das Pflegeziel überprüfbar?',
    anweisung: 'Prüfen Sie die Pflegeziele für Herrn Lenz. Ein überprüfbares Ziel beantwortet: **Wer? Was** (beobachtbar)? **Wie/womit? Bis wann?**',
    knoepfe: [
      { kuerzel: 'JA', text: 'Ja – überprüfbar' },
      { kuerzel: 'NEIN', text: 'Nein – nicht überprüfbar' }
    ],
    mindestens: 7,
    karten: [
      { nummer: 1,
        text: 'Herr Lenz überwindet bis zum 15.12. das Freezing an der Schlafzimmertür selbstständig mithilfe einer Bodenmarkierung.',
        richtig: 'JA',
        erklaerung: 'Überprüfbar: wer (Herr Lenz), was (Freezing selbstständig überwinden), womit (Bodenmarkierung), bis wann (15.12.).',
        tipp: 'Prüfen Sie: Wer? Was? Womit? Bis wann? Fehlt etwas?' },
      { nummer: 2,
        text: 'Herr Lenz soll sicherer gehen.',
        richtig: 'NEIN',
        erklaerung: 'Nicht überprüfbar: Was heißt „sicherer“? Es fehlt der Zeitpunkt, und „soll“ ist ein Wunsch. Besser: „Herr Lenz geht bis zum … mit dem Rollator ohne Sturz vom Schlafzimmer ins Bad.“',
        tipp: 'Woran würden Sie in zwei Wochen erkennen, ob das Ziel erreicht ist?' },
      { nummer: 3,
        text: 'Herr Lenz erhält zweimal pro Woche Physiotherapie.',
        richtig: 'NEIN',
        erklaerung: 'Das ist eine Maßnahme, kein Ziel. Ein Ziel beschreibt das Ergebnis beim Menschen.',
        tipp: 'Beschreibt der Satz ein Ergebnis – oder was getan wird?' },
      { nummer: 4,
        text: 'Herr Lenz trinkt ab sofort täglich mindestens 1,5 Liter; Kontrolle mit dem Trinkprotokoll.',
        richtig: 'JA',
        erklaerung: 'Überprüfbar: Menge, Zeitraum und Kontrollinstrument sind festgelegt.',
        tipp: 'Lässt sich am Ende des Tages messen, ob das Ziel erreicht ist?' },
      { nummer: 5,
        text: 'Herr Lenz hat ab der kommenden Woche mindestens jeden zweiten Tag weichen Stuhlgang (Kontrolle: Stuhlprotokoll).',
        richtig: 'JA',
        erklaerung: 'Überprüfbar: Häufigkeit, Beschaffenheit, Zeitpunkt und Kontrolle sind benannt.',
        tipp: 'Könnten zwei Pflegefachpersonen unabhängig voneinander dasselbe feststellen?' },
      { nummer: 6,
        text: 'Die Pflegefachperson achtet beim Essen darauf, dass Herr Lenz sich nicht verschluckt.',
        richtig: 'NEIN',
        erklaerung: 'Aus Sicht der Pflegenden formuliert und eigentlich eine Maßnahme. Ziel z. B.: „Herr Lenz isst seine Mahlzeiten ab sofort ohne Husten und Verschlucken.“',
        tipp: 'Wer steht im Mittelpunkt eines Pflegeziels?' },
      { nummer: 7,
        text: 'Herr Lenz hält bis zum 31.01. sein Gewicht von mindestens 66 kg (wöchentliches Wiegen).',
        richtig: 'JA',
        erklaerung: 'Überprüfbar: messbarer Wert, Termin und Kontrolle.',
        tipp: 'Lässt sich das mit einer Waage überprüfen?' },
      { nummer: 8,
        text: 'Herrn Lenz geht es psychisch besser.',
        richtig: 'NEIN',
        erklaerung: 'Nicht überprüfbar: Woran sollte man „besser“ erkennen, und bis wann? Besser z. B.: „Herr Lenz nimmt ab nächster Woche einmal wöchentlich an der Parkinson-Gruppe teil.“',
        tipp: 'Ist das beobachtbar und mit einem Zeitpunkt versehen?' },
      { nummer: 9,
        text: 'Herr Lenz spricht bis Ende des Monats im Gespräch mit seiner Frau so laut, dass sie nicht nachfragen muss.',
        richtig: 'JA',
        erklaerung: 'Überprüfbar: beobachtbares Verhalten mit klarem Kriterium und Zeitpunkt.',
        tipp: 'Gibt es ein beobachtbares Kriterium und einen Termin?' }
    ],
    merksatz: 'Ein überprüfbares Pflegeziel beschreibt aus Sicht des pflegebedürftigen Menschen ein beobachtbares Ergebnis: Wer? Was? Wie/womit? Bis wann? Maßnahmen („erhält …“), Wünsche („soll …“) und Formulierungen aus Sicht der Pflegenden sind keine Pflegeziele.'
  },

  /* ========================================================================
     ARBEITSBLATT 4 – Rehabilitation, Team, Kommunikation, Angehörige
     ======================================================================== */

  ab4a: {
    ab: 'Arbeitsblatt 4',
    titel: 'Übung 1: Restitution, Kompensation oder Adaption?',
    anweisung: 'Ordnen Sie die rehabilitativen Maßnahmen für Herrn Lenz einem Rehabilitationsziel zu: **R** = Restitution · **K** = Kompensation · **A** = Adaption.',
    knoepfe: [
      { kuerzel: 'R', text: 'R – Restitution' },
      { kuerzel: 'K', text: 'K – Kompensation' },
      { kuerzel: 'A', text: 'A – Adaption' }
    ],
    hilfe: {
      titel: 'Hilfe: Die drei Rehabilitationsziele',
      punkte: [
        '**Restitution:** Eine Fähigkeit wird durch Training wiederhergestellt oder verbessert.',
        '**Kompensation:** Eine dauerhaft eingeschränkte Fähigkeit wird durch Hilfsmittel oder Ersatzstrategien ausgeglichen.',
        '**Adaption:** Umwelt, Alltag und Ziele werden an die Einschränkungen angepasst.'
      ]
    },
    mindestens: 6,
    karten: [
      { nummer: 1,
        text: 'Nach der Hüftoperation trainiert Herr Lenz mit der Physiotherapeutin, bis er wieder wie vor dem Sturz 200 m mit dem Rollator gehen kann.',
        richtig: 'R',
        erklaerung: 'Restitution: Eine Fähigkeit, die durch ein akutes Ereignis verloren ging, wird durch Training wiederhergestellt.',
        tipp: 'Wird hier eine Fähigkeit zurückgewonnen?' },
      { nummer: 2,
        text: 'Ein Anti-Freezing-Stock: Auf Knopfdruck klappt unten ein Bügel aus, über den Herr Lenz steigt.',
        richtig: 'K',
        erklaerung: 'Kompensation: Ein Hilfsmittel setzt einen optischen Reiz und gleicht die gestörte Bewegungsauslösung aus.',
        tipp: 'Wird die Fähigkeit trainiert – oder durch ein Hilfsmittel ersetzt?' },
      { nummer: 3,
        text: 'Die Teppiche im Flur werden entfernt; ein Bewegungsmelder schaltet nachts das Licht ein.',
        richtig: 'A',
        erklaerung: 'Adaption: Die Wohnung wird an seine Einschränkungen angepasst – Stolperfallen weg, mehr Licht.',
        tipp: 'Verändert sich Herr Lenz – oder seine Umgebung?' },
      { nummer: 4,
        text: 'Besteck mit verdickten Griffen und ein Teller mit erhöhtem Rand.',
        richtig: 'K',
        erklaerung: 'Kompensation: Hilfsmittel gleichen die eingeschränkte Feinmotorik und den Tremor aus.',
        tipp: 'Was gleicht hier etwas aus?' },
      { nummer: 5,
        text: 'Herr Lenz legt Arzttermine und Besuche bewusst in die Zeit nach der Tablette (On-Phase).',
        richtig: 'A',
        erklaerung: 'Adaption: Er passt seinen Tagesablauf an die Wirkungsschwankungen an.',
        tipp: 'Wird hier ein Hilfsmittel genutzt, eine Fähigkeit trainiert – oder der Alltag angepasst?' },
      { nummer: 6,
        text: 'Die Logopädin übt mit ihm lautes Sprechen, damit seine Stimme wieder kräftiger wird.',
        richtig: 'R',
        erklaerung: 'Restitution: Die Stimmfunktion wird durch gezieltes Training verbessert (z. B. Stimmtraining LSVT LOUD®).',
        tipp: 'Wird die Stimme selbst trainiert – oder ersetzt?' },
      { nummer: 7,
        text: 'Ein Sprachverstärker (Mikrofon mit kleinem Lautsprecher) macht seine leise Stimme hörbar.',
        richtig: 'K',
        erklaerung: 'Kompensation: Ein technisches Hilfsmittel gleicht die zu leise Stimme aus.',
        tipp: 'Vergleichen Sie mit Karte 6: Training oder Hilfsmittel?' },
      { nummer: 8,
        text: 'Das Ehepaar richtet das Schlafzimmer im Erdgeschoss ein, damit Herr Lenz nachts keine Treppe mehr gehen muss.',
        richtig: 'A',
        erklaerung: 'Adaption: Die Wohnsituation wird an die Einschränkung angepasst.',
        tipp: 'Was wird hier verändert?' },
      { nummer: 9,
        text: 'Herr Lenz arbeitet nicht mehr an der Kreissäge. Stattdessen baut er mit seinem Enkel Vogelhäuschen aus vorgesägten Teilen.',
        richtig: 'A',
        erklaerung: 'Adaption: Er passt Ziele und Tätigkeiten an die Erkrankung an – und behält trotzdem eine sinnstiftende Aktivität.',
        tipp: 'Gibt er etwas auf, gleicht er etwas aus – oder passt er sein Ziel an?' },
      { nummer: 10,
        text: 'Nach drei Wochen Bettruhe wegen einer Lungenentzündung baut er mit täglichen Gehübungen seine Kraft wieder auf.',
        richtig: 'R',
        erklaerung: 'Restitution: Kraft und Ausdauer werden nach einer akuten Verschlechterung durch Training wiederhergestellt.',
        tipp: 'Wird eine verlorene Fähigkeit zurückgewonnen?' }
    ],
    merksatz: 'Restitution = Fähigkeiten durch Training wiederherstellen (bei Parkinson v. a. nach akuten Verschlechterungen wie Operation oder Infekt). Kompensation = eingeschränkte Fähigkeiten durch Hilfsmittel und Strategien ausgleichen (z. B. Anti-Freezing-Stock, Griffverdickung, Sprachverstärker). Adaption = Umwelt, Alltag und Ziele an die Erkrankung anpassen (z. B. Wohnraum, Tagesplanung nach On-Phasen).'
  },

  ab4b: {
    ab: 'Arbeitsblatt 4',
    titel: 'Übung 2: Wer übernimmt was im Team?',
    anweisung: 'Ordnen Sie die Aufgaben der Berufsgruppe zu, die sie in der Parkinson-Komplexbehandlung hauptsächlich übernimmt: **PT** = Physiotherapie · **ET** = Ergotherapie · **LO** = Logopädie · **SD** = Sozialdienst/Pflegeberatung.',
    knoepfe: [
      { kuerzel: 'PT', text: 'PT' },
      { kuerzel: 'ET', text: 'ET' },
      { kuerzel: 'LO', text: 'LO' },
      { kuerzel: 'SD', text: 'SD' }
    ],
    mindestens: 5,
    karten: [
      { nummer: 1,
        text: 'Gangtraining mit großen Schritten und rhythmischen Signalen (Zählen, Metronom).',
        richtig: 'PT',
        erklaerung: 'Physiotherapie: Gang, Gleichgewicht, Beweglichkeit. Akustische und optische Reize (Cueing) helfen bei Parkinson besonders.',
        tipp: 'Wer arbeitet mit Gang und Gleichgewicht?' },
      { nummer: 2,
        text: 'Schluckuntersuchung, Schlucktraining und Empfehlung zur passenden Kostform.',
        richtig: 'LO',
        erklaerung: 'Logopädie: Diagnostik und Therapie von Schluckstörungen (Dysphagie) – wichtig zur Vorbeugung einer Aspirationspneumonie.',
        tipp: 'Wer ist für Sprechen, Stimme und Schlucken zuständig?' },
      { nummer: 3,
        text: 'Anziehen und Körperpflege im Alltag trainieren; passende Hilfsmittel auswählen.',
        richtig: 'ET',
        erklaerung: 'Ergotherapie: Selbstständigkeit bei Alltagsaktivitäten und Auswahl von Hilfsmitteln.',
        tipp: 'Wer trainiert Handlungen des täglichen Lebens?' },
      { nummer: 4,
        text: 'Wohnraumberatung: Haltegriffe, Stolperfallen, Umbau des Bades.',
        richtig: 'ET',
        erklaerung: 'Ergotherapie: Sie beurteilt die Wohnung und schlägt Anpassungen vor (die Finanzierung klärt dann z. B. die Pflegeberatung).',
        tipp: 'Wer passt Alltag und Umgebung an die Fähigkeiten an?' },
      { nummer: 5,
        text: 'Stimmtraining für lauteres Sprechen.',
        richtig: 'LO',
        erklaerung: 'Logopädie: z. B. LSVT LOUD® – ein intensives Stimmtraining gegen die leise, monotone Sprache.',
        tipp: 'Wer arbeitet mit Stimme und Sprache?' },
      { nummer: 6,
        text: 'Gleichgewichtstraining und Üben, nach einem Sturz wieder aufzustehen.',
        richtig: 'PT',
        erklaerung: 'Physiotherapie: Gleichgewicht, Kraft und Sturzprävention.',
        tipp: 'Wer trainiert Gleichgewicht und Kraft?' },
      { nummer: 7,
        text: 'Beratung zum Pflegegrad, zu Entlastungsleistungen und zum Antrag auf eine Rehabilitation.',
        richtig: 'SD',
        erklaerung: 'Sozialdienst bzw. Pflegeberatung (z. B. Pflegestützpunkt): Leistungen, Anträge, Finanzierung.',
        tipp: 'Wer kennt sich mit Leistungen und Anträgen aus?' },
      { nummer: 8,
        text: 'Feinmotorik üben, z. B. Knöpfe schließen und Schreiben gegen die immer kleiner werdende Schrift.',
        richtig: 'ET',
        erklaerung: 'Ergotherapie: Feinmotorik und Handfunktion – z. B. Schreibtraining gegen die Mikrographie.',
        tipp: 'Wer trainiert die Feinmotorik der Hände für den Alltag?' },
      { nummer: 9,
        text: 'Kontakt zu einer Parkinson-Selbsthilfegruppe herstellen und einen Hausnotruf organisieren.',
        richtig: 'SD',
        erklaerung: 'Sozialdienst/Pflegeberatung: Vernetzung mit Selbsthilfe (z. B. Deutsche Parkinson Vereinigung) und Organisation von Hilfen für zu Hause.',
        tipp: 'Wer vernetzt und organisiert Unterstützung für zu Hause?' }
    ],
    merksatz: 'Parkinson wird interprofessionell versorgt: Physiotherapie (Gang, Gleichgewicht, Sturzprävention), Ergotherapie (Alltag, Feinmotorik, Hilfsmittel, Wohnraum), Logopädie (Stimme, Sprechen, Schlucken), Sozialdienst/Pflegeberatung (Leistungen, Entlastung, Vernetzung). Die Pflegefachperson koordiniert, bringt ihre Beobachtungen ins Team ein und hilft, das Geübte in den Alltag zu übertragen.'
  }
};
