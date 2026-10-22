import type { ImageMetadata } from 'astro';
import { mailto } from './site';

import imgBodycode from '../assets/images/angebot-bodycode.png';
import imgWatte from '../assets/images/angebot-watte.jpg';
import imgReiki from '../assets/images/angebot-reiki.jpg';
import imgIntensiv from '../assets/images/angebot-intensiv.png';
import imgBusiness from '../assets/images/angebot-business.jpg';
import imgDecrees from '../assets/images/angebot-decrees.png';
import imgLightkey from '../assets/images/angebot-lightkey.jpg';
import imgHeilsession from '../assets/images/angebot-heilsession.jpg';

export interface Offer {
  id: string;
  title: string;
  subtitle: string;
  meta?: string;
  image: ImageMetadata;
  imageAlt: string;
  /** Absätze – einfache Hervorhebungen mit <strong> sind erlaubt */
  text: string[];
  suitable: string[];
  includes?: string[];
  note?: string;
  claim: string;
  cta: { label: string; href: string };
  top?: boolean;
}

// Texte 1:1 von heidirast.com/angebote-1/
export const offers: Offer[] = [
  {
    id: 'intensivbegleitung',
    top: true,
    title: 'Heidis Intensivbegleitung',
    subtitle: 'Tiefgehende Transformation auf energetischer Ebene',
    meta: '4 Wochen',
    image: imgIntensiv,
    imageAlt: 'Heidis Intensivbegleitung – Porträt von Heidi zwischen offenen Händen',
    text: [
      'Manche Themen brauchen mehr als eine einzelne Heilsession. In meiner vierwöchigen Intensivbegleitung erhältst du eine individuelle energetische Unterstützung, die genau auf deine momentanen Bedürfnisse und dein persönliches Anliegen abgestimmt ist.',
    ],
    suitable: [
      'Körperliche Themen – hormonelle Balance, Heilunterstützung nach Verletzungen oder OPs',
      'Emotionale Themen wie Ängste, Sorgen, Selbstzweifel',
      'Beziehungsthemen – Partnerschaft, unerfüllter Kinderwunsch, Familienthemen',
      'Business & Erfolg – mehr Kunden, Leichtigkeit im Job, energetische Firmenbegleitung',
    ],
    includes: [
      'einen individuellen Heilungsraum für vier Wochen',
      'vier ausführliche, individuell abgestimmte Heilsessions',
      'auf Wunsch eine oder zwei dieser Sessions telefonisch oder per Zoom',
      'mehrere ergänzende kurze Heilsessions mit Heilfrequenzen und Heilsymbolen',
      'unterstützende Audios, Heilzahlen und Healing Codes – passend zu deinem Thema',
      'persönlichen Kontakt per E-Mail während der gesamten Begleitung',
    ],
    note: 'Du erhältst von mir Informationen zu den Anwendungen und teilweise auch Protokolle der Sessions. Bei Fragen oder auftretendem Unwohlsein kannst du dich jederzeit per E-Mail an mich wenden. In der Regel antworte ich innerhalb weniger Stunden.',
    claim: 'Starte Deine Heilreise – sichere Dir Deine Begleitung.',
    cta: { label: 'Buchen', href: 'https://heidisshop.tentary.com/p/IFnMwJ' },
  },
  {
    id: 'business-begleitung',
    top: true,
    title: 'Energetische Business-Begleitung',
    subtitle: 'Erfolg mit Leichtigkeit',
    image: imgBusiness,
    imageAlt: 'Menschen im Büro, umgeben von Licht und Energie',
    text: [
      'Erfolg ist nicht nur Strategie – auch die Energie muss stimmen. Ich begleite Unternehmer:innen, Selbstständige und Unternehmen energetisch, um Blockaden aufzulösen und den Weg für Wachstum und Erfolg freizumachen.',
      'Tausche harte Arbeit gegen sanfte, aber wirkungsvolle Energie!',
    ],
    suitable: [
      'Blockaden im Business, stagnierende Aufträge',
      'Geld- und Erfolgsblockaden lösen',
      'Energetische Firmenharmonisierung',
      'Teambalance und Kundenmagnetismus',
    ],
    claim: 'Erlaube Deinem Business, in den Flow zu kommen.',
    cta: { label: 'Anfrage stellen', href: mailto },
  },
  {
    id: 'heilsession',
    title: 'Heidis Heilsession',
    subtitle: 'Fernbehandlung für Körper, Herz & Seele',
    meta: '30 Minuten · Fernbehandlung',
    image: imgHeilsession,
    imageAlt: 'Heidis Heilsession – Porträt von Heidi zwischen offenen Händen',
    text: [
      'Diese 30-minütige Fernbehandlung ist eine wohltuende und tiefgreifende energetische Unterstützung auf allen Ebenen – insbesondere für die körperliche und emotionale Heilung und Transformation.',
    ],
    suitable: [
      'Wenn Du unsicher bist, was Du genau brauchst oder was Dein Thema ist',
      'Wenn Du eine individuell maßgeschneiderte Fernsession von Heidi bekommen möchtest',
      'Alle Themen und Beschwerden',
    ],
    claim: 'Nutze Heidis gesamtes Wissen und Können als Schlüssel zur Veränderung.',
    cta: { label: 'Buchen', href: 'https://heidisshop.tentary.com/p/f3fyoz' },
  },
  {
    id: 'body-code',
    title: 'Body Code & Belief Code',
    subtitle: 'Versteckte Blockaden auflösen',
    image: imgBodycode,
    imageAlt: 'Abzeichen: Certified Body Code Practitioner',
    text: [
      'Emotionale Altlasten, negative Glaubensmuster oder unbewusste Blockaden können uns ausbremsen. Mit dem <strong>Body Code</strong> und <strong>Belief Code</strong> decke ich verborgene Ursachen auf und löse sie energetisch.',
    ],
    suitable: [
      'Körperliche Themen wie chronische Beschwerden, Heilunterstützung',
      'Emotionale Belastungen wie Ängste, Stress, Gedankenkreisen',
      'Geld- & Erfolgsblockaden',
    ],
    claim: 'Alte Muster auflösen und spürbar freier fühlen.',
    cta: { label: 'Buchen', href: 'https://heidisshop.tentary.com/p/d53uP0' },
  },
  {
    id: 'watteheilung',
    title: 'Watteheilung',
    subtitle: 'Sanfte Impulse für tiefe Veränderung',
    image: imgWatte,
    imageAlt: 'Rosafarbene Wolken am Himmel',
    text: [
      'Die <strong>Watteheilung</strong> arbeitet mit feinsten energetischen Impulsen, die Blockaden lösen, ohne Widerstände zu aktivieren. Sie wirkt besonders sanft und dennoch tiefgreifend – wie ein energetischer Hauch, der disharmonische Energien transformiert.',
    ],
    suitable: [
      'Emotionale Heilung ohne Konfrontation',
      'Sanfte Transformation bei tiefsitzenden Themen',
      'Unterstützung bei Erschöpfung & Stress',
      'Heilunterstützung für den Körper',
    ],
    claim: 'Leichtigkeit spüren – Blockaden auf sanfte Weise lösen.',
    cta: { label: 'Buchen', href: 'https://heidisshop.tentary.com/p/007emm' },
  },
  {
    id: 'reiki',
    title: 'Reiki & Energetisches Heilen',
    subtitle: 'Heilung durch Licht und Berührung',
    image: imgReiki,
    imageAlt: 'Offene Hände mit Licht und dem Reiki-Schriftzeichen',
    text: [
      'Reiki ist eine sanfte, aber kraftvolle Methode, um Energieblockaden zu lösen und das Wohlbefinden zu steigern. Ich arbeite mit verschiedenen Reiki-Formen sowie <strong>energetischer Wirbelsäulenaufrichtung</strong> und <strong>Facelifting-Techniken</strong>.',
    ],
    suitable: [
      'Stressabbau & tiefe Entspannung',
      'Aktivierung der Selbstheilungskräfte',
      'Verjüngung & energetisches Gleichgewicht',
    ],
    claim: 'Erlebe tiefe Regeneration auf allen Ebenen.',
    cta: { label: 'Buchen', href: 'https://heidisshop.tentary.com/p/PLUTZz' },
  },
  {
    id: 'decrees',
    title: 'Ein-Sekunden-Alchemie & Decrees',
    subtitle: 'Sofortige energetische Veränderung',
    image: imgDecrees,
    imageAlt: 'Leuchtendes Herz aus Licht',
    text: [
      'Manchmal braucht es nur einen Moment, um festgefahrene Muster zu durchbrechen. Mit den <strong>Decrees von Nidhu B Kapoor</strong> und der <strong>Ein-Sekunden-Alchemie</strong> können spürbare Veränderungen sofort eintreten.',
    ],
    suitable: [
      'Schnelle Energieanhebung & Soforthilfe',
      'Lösung von Ängsten & negativen Emotionen',
      'Manifestation positiver Veränderungen',
      'Körperliche Themen wirkungsvoll auflösen',
    ],
    claim: 'Erlebe, wie schnell Transformation geschehen kann.',
    cta: { label: 'Buchen', href: 'https://heidisshop.tentary.com/p/QjIzpx' },
  },
  {
    id: 'light-key-healing',
    title: 'Light Key Healing',
    subtitle: 'Heilfrequenzen für tiefgreifende Transformation',
    image: imgLightkey,
    imageAlt: 'Light Key Anwendung – Hand und leuchtender goldener Schlüssel',
    text: [
      'Frequenzen wirken auf tiefster Ebene und können Körper, Geist und Seele harmonisieren. Ich nutze Frequenzen aus dem <strong>Light Key System, Prosonodolicht, Elise-Energie und anderen</strong> hochschwingenden Heilmethoden.',
    ],
    suitable: [
      'Schnelle Unterstützung bei körperlichen Themen',
      'Energetische Reinigung & Schutz',
      'Auflösung von karmischen Mustern',
      'Aktivierung der Selbstheilungskräfte',
    ],
    claim: 'Erlebe die Kraft der Heilfrequenzen.',
    cta: { label: 'Buchen', href: 'https://heidisshop.tentary.com/p/q4yeQH' },
  },
];
