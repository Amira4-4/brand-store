/**
 * Placeholder image helper.
 *
 * NOTE FOR STORE OWNER / DEVELOPER:
 * These are neutral, royalty-free placeholder photos (via picsum.photos,
 * seeded so each product keeps a stable, consistent image on every reload).
 * They are NOT real product photography.
 *
 * To replace with real photos:
 *  1. Search the suggested query (see each product's `searchHint` in
 *     src/data/products.js) on https://unsplash.com, https://pexels.com,
 *     or https://pixabay.com — all copyright-free.
 *  2. Download the image and drop it in src/assets/products/.
 *  3. Replace the `image` field for that product with the local import path.
 */
export function placeholderImage(seed, width = 600, height = 750) {
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/${width}/${height}`;
}
