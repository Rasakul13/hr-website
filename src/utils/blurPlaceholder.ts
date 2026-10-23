// Winzige, weichgezeichnete Vorschau eines Bildes als data-URI (rund 1 KB).
// Wird beim Bauen aus der Originaldatei erzeugt und direkt in die Seite geschrieben,
// damit sofort etwas in den echten Farben zu sehen ist, solange das Bild lädt.
import sharp from 'sharp';

const cache = new Map<string, Promise<string | undefined>>();

export function blurPlaceholder(image: unknown): Promise<string | undefined> {
  // Astro hängt importierten Bildern den Pfad zur Originaldatei als `fsPath` an
  const fsPath = (image as { fsPath?: string } | null)?.fsPath;
  if (!fsPath) return Promise.resolve(undefined);

  let placeholder = cache.get(fsPath);
  if (!placeholder) {
    placeholder = create(fsPath).catch(() => undefined);
    cache.set(fsPath, placeholder);
  }
  return placeholder;
}

async function create(fsPath: string) {
  const { data, info } = await sharp(fsPath)
    .resize(16, 16, { fit: 'inside' })
    .flatten({ background: '#f5efe5' })
    .jpeg({ quality: 70 })
    .toBuffer({ resolveWithObject: true });

  const href = `data:image/jpeg;base64,${data.toString('base64')}`;
  // Der SVG-Filter zeichnet weich, die Alpha-Korrektur verhindert helle Ränder
  const svg =
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${info.width} ${info.height}' preserveAspectRatio='none'>` +
    `<filter id='b' x='0' y='0' width='1' height='1' color-interpolation-filters='sRGB'>` +
    `<feGaussianBlur stdDeviation='1' edgeMode='duplicate'/>` +
    `<feComponentTransfer><feFuncA type='discrete' tableValues='1 1'/></feComponentTransfer>` +
    `</filter>` +
    `<image href='${href}' width='100%' height='100%' preserveAspectRatio='none' filter='url(#b)'/>` +
    `</svg>`;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}
