// Interne Links mit Basis-Pfad versehen.
// Auf netcup ist der Basis-Pfad „/“, auf GitHub Pages „/hr-website/“.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (path: string) => (path.startsWith('/') ? `${base}${path}` : path);
