# heidirast.com

Statische Website (Astro) für Heidi Rast – Energetische Heilarbeit.

## Entwickeln

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # fertige Seite in dist/
npm run preview  # dist/ lokal ansehen
```

## Wo steht was?

| Inhalt | Datei |
|---|---|
| E-Mail, Shop-, Telegram-Links, Navigation | `src/data/site.ts` |
| Angebote (Texte, Bilder, Shop-Links) | `src/data/offers.ts` |
| Methoden, Erfahrungen, FAQs | `src/data/content.ts` |
| Blogartikel (Markdown + Titelbild) | `src/content/blog/` |
| Farben, Schriften, Buttons | `src/styles/global.css` |
| Seiten | `src/pages/` |

Neuer Blogartikel: Markdown-Datei mit Frontmatter (wie der Decrees-Artikel) und Titelbild in `src/content/blog/` ablegen und dann `npm run build`.

## Vorschau auf GitHub Pages

Jeder Push auf `main` baut die Seite automatisch und veröffentlicht sie unter
https://rasakul13.github.io/hr-website/ (Workflow: `.github/workflows/deploy.yml`).

- Die Vorschau ist für Suchmaschinen gesperrt (`noindex`).
- Das Kontaktformular funktioniert dort nicht, weil GitHub Pages kein PHP ausführt.
- Interne Links immer mit `url('/pfad/')` aus `src/utils/url.ts` schreiben. Dann funktionieren sie unter `/hr-website/` und auf netcup gleichermaßen.

## Veröffentlichen auf netcup

1. `npm run build`
2. Den **Inhalt** von `dist/` per SFTP/FTP in das Webverzeichnis der Domain hochladen (inkl. der versteckten Datei `.htaccess`).
3. Nach dem Umzug der Domain prüfen:
   - Alte Jimdo-Adressen leiten weiter (z. B. `/angebote-1/` → `/angebote/`), siehe `public/.htaccess`.
   - Das Kontaktformular (`kontakt.php`) verschickt Mails. Dafür muss die Absenderadresse `kontakt@heidirast.com` bei netcup als Postfach oder Alias existieren.

## Vor dem Livegang offen

- **Datenschutzerklärung** (`src/pages/datenschutz.astro`) ist ein Entwurf und muss geprüft werden.
- **Erfahrungsbericht „Wieder gesund“** ist in `src/data/content.ts` ausgeblendet (`hidden: true`), weil die Aussage zur Krebsheilung als Heilversprechen rechtlich heikel ist.
- **Impressum:** Die Physiotherapie-Adressen wurden 1:1 übernommen. Bitte prüfen, ob sie noch aktuell sind.
