/** Prefix an absolute site path with the configured `base` (e.g. `/Theology-Site/`). */
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}

export function categoryUrl(slug: string): string {
  return url(`/${slug}/`);
}

export function entryUrl(id: string): string {
  return url(`/${id}/`);
}

export function tagUrl(tag: string): string {
  return url(`/tags/${slugifyTag(tag)}/`);
}

export function slugifyTag(tag: string): string {
  return tag
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
