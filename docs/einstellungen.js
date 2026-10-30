/* ==========================================================================
   EINSTELLUNGEN – Fortschrittsanzeige für den Beamer
   ==========================================================================

   serverAdresse: die Adresse Ihres Cloudflare-Workers, z. B.
     'https://parkinson-fortschritt.IHR-NAME.workers.dev'
   (Sie sehen sie im Cloudflare-Dashboard unter Workers & Pages → parkinson-fortschritt.)

   Solange hier '' steht, funktionieren die Übungen ganz normal – nur ohne
   Namenseingabe und ohne Fortschrittsanzeige.
   ========================================================================== */

var EINSTELLUNGEN = {
  serverAdresse: '',

  // So oft (in Sekunden) holt die Lehrerseite den neuen Stand.
  aktualisierenSekunden: 5,

  // Namen mit diesen Wortteilen werden abgelehnt (nur Kleinbuchstaben).
  sperrwoerter: [
    'arsch', 'fick', 'fotze', 'hure', 'nutte', 'wichs', 'schlampe', 'bitch',
    'fuck', 'shit', 'scheis', 'kacke', 'pisse', 'penis', 'pimmel', 'schwanz',
    'muschi', 'vagina', 'titte', 'porn', 'sex', 'nazi', 'hitler',
    'neger', 'nigg', 'kanake', 'zigeuner', 'schwuchtel', 'spast', 'mongo',
    'behindert', 'missgeburt', 'bastard', 'wixer', 'wixxer', 'opfer',
    'dick', 'cock', 'pussy', 'slut', 'whore', 'cunt', 'kill'
  ]
};
