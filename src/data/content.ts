// Texte 1:1 von heidirast.com (Methoden, Erfahrungen, FAQs)

export const methodGroups = [
  {
    title: 'Körper- und Energiebewusstseinsarbeit',
    symbol: 'circles',
    methods: [
      {
        name: 'Body Code und Belief Code',
        source: 'nach discoverhealing.com',
        text: 'Durch gezielte energetische Arbeit werden gespeicherte emotionale Blockaden, belastende Glaubensmuster und körperliche Dysbalancen sanft aufgespürt und gelöst.',
      },
      {
        name: 'Watteheilung',
        text: 'Eine intuitive, sanfte Heilmethode, die dich wie in weiche Heilwatte hüllt und auf tiefer Ebene Entspannung und Erneuerung ermöglicht.',
      },
      {
        name: 'Heilfrequenzen',
        text: 'Frequenzen aus verschiedenen Systemen (Light Key System, Light Healing Frequencies, Prosonodolicht, Elise-Energie) wirken tief auf Körper, Geist und Seele und unterstützen deine Ausrichtung auf Gesundheit und inneres Wachstum.',
      },
    ],
  },
  {
    title: 'Arbeit mit Symbolen, Zahlen und Dekreten',
    symbol: 'diamond',
    methods: [
      {
        name: 'Heilsymbole und Light Keys',
        text: 'Kraftvolle energetische Symbole und Werkzeuge, die dich dabei unterstützen, neue Realitäten für dich zu erschaffen und Heilung einzuladen.',
      },
      {
        name: 'Decrees',
        source: 'Affirmationen der neuen Energie',
        text: 'Hochschwingende kraftvolle Sätze, die ich oft als Audio für dich aufnehme, um neue Frequenzen in dein Leben zu bringen.',
      },
      {
        name: 'Zahlenreihen und Zahlencodes',
        source: 'z. B. von Grigori Grabovoi',
        text: 'Frequenzfolgen, die spezifische Heilungsimpulse setzen und dich bei Transformation und Manifestation unterstützen.',
      },
    ],
  },
  {
    title: 'Klassische und moderne Energiemethoden',
    symbol: 'sun',
    methods: [
      {
        name: 'Reiki',
        source: 'verschiedene Formen',
        text: 'Universelle Lebensenergie wird gezielt übertragen, um Balance und Wohlbefinden auf allen Ebenen zu fördern.',
      },
      {
        name: 'Energetische Wirbelsäulenaufrichtung',
        text: 'Stärkung der inneren und äußeren Aufrichtung, Auflösung energetischer Blockaden entlang der Wirbelsäule.',
      },
      {
        name: 'Energetisches Facelift',
        source: 'auch remote',
        text: 'Eine wohltuende Verjüngungsenergie, die dich innerlich wie äußerlich strahlen lässt.',
      },
      {
        name: 'Japanisches Heilströmen',
        source: 'Jin Shin Jyutsu',
        text: 'Harmonisierung des Energieflusses im Körper durch sanftes Halten bestimmter Punkte.',
      },
      {
        name: 'Chakrenbalance und Mudras',
        text: 'Ausgleich und Aktivierung deiner Energiezentren zur Förderung von Klarheit, Vitalität und innerer Ruhe.',
      },
      {
        name: 'Radionik',
        source: 'Prosonodolicht, Elise-Energie und weitere Heilfrequenzen',
        text: 'Feinstoffliche Impulse zur Harmonisierung deines gesamten Systems und zur Unterstützung spezifischer Anliegen.',
      },
    ],
  },
  {
    title: 'Besondere Räume für Transformation',
    symbol: 'flower',
    methods: [
      {
        name: 'Heilungsräume',
        text: 'Energetisch gehaltene Räume, in denen tiefe innere Prozesse möglich sind – getragen von Licht, Frequenzen und liebevoller Präsenz.',
      },
    ],
  },
] as const;

export interface Testimonial {
  title: string;
  quote: string;
  context?: string;
  /** Auf der Website ausgeblendet – siehe Hinweis unten */
  hidden?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    title: 'So gut wie lange nicht',
    quote: 'Liebe Heidi, vielen Dank für all deine wunderbaren Behandlungen. Ich fühle mich so gut wie schon lange nicht.',
  },
  {
    title: 'Ohne Probleme schlafen',
    quote: 'Liebe Heidi, seit deiner Fernbehandlung (energetischer Facelift) kann ich ohne Probleme ein- und durchschlafen! Danke, danke, danke!!!!',
  },
  {
    title: 'Gamechanger',
    quote: 'Heidi, die Session war ein absoluter Gamechanger!',
  },
  {
    // Ausgeblendet: Aussage zu Krebsheilung ohne schulmedizinische Therapie ist als
    // Werbeaussage einer Energetikerin rechtlich heikel (Heilversprechen). Vor dem
    // Einblenden bitte mit Heidi / Wirtschaftskammer abklären.
    hidden: true,
    title: 'Wieder gesund',
    context: 'Von einer Klientin, die immer bei Gruppenanwendungen dabei war, erhielt ich folgende Nachricht:',
    quote: 'Ich habe übrigens im April Brustkrebs gehabt, wurde Ende Mai operiert und bin, ohne jegliche schulmedizinische Therapie (die mir dringend empfohlen wurden), wieder gesund. Auch mit deiner Unterstützung und dafür möchte ich mich ganz herzlich bedanken!',
  },
  {
    title: 'Bauchweh weg',
    quote: 'Hallo Heidi, das Bauchweh, das mich mehrere Monate immer wieder gequält hat, ist weg! Danke dir!',
  },
  {
    title: 'Großer Unterschied',
    context: 'Diese Klientin lässt sich und ihre Familie ständig energetisch betreuen – nur im August hatten sie pausiert und Ende September bekam ich diese Nachricht von ihr:',
    quote: 'Ich merke dass die energien der Wahnsinn sind im Vergleich dazu, als wir jetzt im August pausiert haben, großer unterschied, hörst du das oft?',
  },
  {
    title: 'Wieder gut gefühlt',
    quote: 'Deine Behandlung hat super gewirkt! Ich hab mich dann gestern Abend wieder gut gefühlt u heute auch! Faszinierend! DANKE',
  },
];

export const faqs = [
  {
    q: 'Wie funktioniert eine energetische Fernbehandlung?',
    a: 'Energie kennt keine räumlichen Grenzen. Durch gezielte Techniken übertrage ich die Heilimpulse direkt in dein Energiefeld, unabhängig von deinem Standort.',
  },
  {
    q: 'Ist eine Fernbehandlung genauso wirksam wie eine Behandlung vor Ort?',
    a: 'Ja, viele Klienten berichten sogar von tieferen und intensiveren Erfahrungen, da sie sich in ihrer gewohnten Umgebung besser entspannen können.',
  },
  {
    q: 'Muss ich während der Fernbehandlung etwas tun?',
    a: 'Es ist ideal, wenn du dich zur vereinbarten Zeit in Ruhe entspannst. Alternativ kannst du die Energie als Energiedepot abrufen, wann es dir passt.',
  },
  {
    q: 'Wie lange dauert eine Fernbehandlung?',
    a: 'Je nach Methode beträgt die Behandlungsdauer meist 20 bis 60 Minuten. Manche Energiedepots stehen dir über einen längeren Zeitraum zur Verfügung.',
  },
  {
    q: 'Wie spüre ich die Wirkung?',
    a: 'Die Wahrnehmung ist individuell – von tiefer Entspannung über innere Wärme bis hin zu emotionalen oder körperlichen Erleichterungen.',
  },
  {
    q: 'Wie oft sollte ich eine Fernbehandlung buchen?',
    a: 'Das hängt vom Anliegen ab. Manche Themen lösen sich bereits nach einer Sitzung, andere benötigen mehrere Behandlungen.',
  },
  {
    q: 'Kann eine energetische Behandlung Nebenwirkungen haben?',
    a: 'Gelegentlich kann es zu einer vorübergehenden Erstreaktion kommen, ähnlich wie bei einer Entgiftung. Das ist ein Zeichen für den Heilprozess.',
  },
  {
    q: 'Brauche ich ein bestimmtes Anliegen für eine Behandlung?',
    a: 'Nein, du kannst eine Sitzung auch einfach zur allgemeinen Harmonisierung und Stärkung deines Energiefeldes buchen.',
  },
  {
    q: 'Ersetzt eine Fernbehandlung einen Arztbesuch?',
    a: 'Nein, energetische Behandlungen sind eine ergänzende Methode und ersetzen keine medizinische oder therapeutische Behandlung.',
  },
];
