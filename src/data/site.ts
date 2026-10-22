import { url } from '../utils/url';

export const site = {
  name: 'Heidi Rast',
  title: 'Heidi Rast – Energetische Heilarbeit',
  tagline: 'Lichtvolle Heilfrequenzen für Körper, Geist und Seele',
  description:
    'Heidi Rast, magische Heilerin: energetische Fernbehandlungen mit Body Code, Heilfrequenzen, Reiki, Watteheilung und Decrees – für Körper, Geist und Seele.',
  email: 'therapierast@gmail.com',
  shop: 'https://heidisshop.tentary.com/',
  heilsession: 'https://heidisshop.tentary.com/p/f3fyoz',
  telegram: 'https://t.me/heidirastonlinepraxis',
};

export const mailto = `mailto:${site.email}`;

export const nav = [
  { href: url('/ueber-mich/'), label: 'Über mich' },
  { href: url('/methoden/'), label: 'Methoden' },
  { href: url('/angebote/'), label: 'Angebote' },
  { href: url('/ablauf-buchung/'), label: 'Ablauf & Buchung' },
  { href: url('/erfahrungen/'), label: 'Erfahrungen' },
  { href: url('/blog/'), label: 'Blog' },
  { href: url('/kontakt/'), label: 'Kontakt & FAQ' },
];

export const legalNav = [
  { href: url('/impressum/'), label: 'Impressum' },
  { href: url('/datenschutz/'), label: 'Datenschutz' },
];
