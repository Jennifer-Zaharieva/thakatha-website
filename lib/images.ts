/**
 * IMAGE MANIFEST
 * --------------
 * Each image has:
 *   - file:     the path inside your Supabase Storage bucket (what you upload to)
 *   - fallback: a live URL that renders immediately, before you finish uploading
 *   - w, h:     intrinsic dimensions, used to size the masonry gallery nicely
 *   - alt:      accessible description
 *
 * HOW TO SWITCH TO SUPABASE
 * 1. Create a PUBLIC storage bucket in Supabase called `site-images`.
 * 2. Upload your downloaded files using the `file` names below
 *    (e.g. art-reproduction/art-01.jpg).
 * 3. Set NEXT_PUBLIC_SUPABASE_STORAGE_URL in your env, e.g.
 *    https://YOURPROJECT.supabase.co/storage/v1/object/public/site-images
 * Once that variable is set, every image is served from Supabase automatically.
 * Until then the `fallback` URLs keep the site looking complete.
 */

const STORAGE_BASE = process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL;

export function imageUrl(file: string, fallback: string): string {
  if (STORAGE_BASE) {
    return `${STORAGE_BASE.replace(/\/$/, "")}/${file}`;
  }
  return fallback;
}

export type GalleryImage = {
  file: string;
  fallback: string;
  w: number;
  h: number;
  alt: string;
};

const wix = (id: string, w: number, h: number) =>
  `https://static.wixstatic.com/media/765fdc_${id}~mv2.jpg/v1/fit/w_${w},h_${h},q_90,enc_avif,quality_auto/765fdc_${id}~mv2.jpg`;

/** Art Reproduction gallery — sourced from the original studio archive. */
export const artGallery: GalleryImage[] = [
  { file: "art-reproduction/art-01.jpg", fallback: wix("fbfca8052f0a4a1495db9f6da5209f59", 960, 594), w: 480, h: 297, alt: "Fine art reproduction" },
  { file: "art-reproduction/art-02.jpg", fallback: wix("c09193e13cf2482a82baf468f1ce6f68", 960, 1222), w: 480, h: 611, alt: "Artwork captured in studio" },
  { file: "art-reproduction/art-03.jpg", fallback: wix("f8c841b2d68a4973b5757ecc4d407129", 960, 660), w: 480, h: 330, alt: "Painting reproduction" },
  { file: "art-reproduction/art-04.jpg", fallback: wix("f1c5215fe3eb42a6ae8184d5ee90d995", 960, 534), w: 480, h: 267, alt: "Gallery installation shot" },
  { file: "art-reproduction/art-05.jpg", fallback: wix("5ecfc879ef0b432aba18f5639866aaa3", 960, 772), w: 480, h: 386, alt: "Artwork detail" },
  { file: "art-reproduction/art-06.jpg", fallback: wix("1864ef617ace49bca6a6e4d52fb82a5d", 960, 418), w: 480, h: 209, alt: "Gallery panorama" },
  { file: "art-reproduction/art-07.jpg", fallback: wix("29060c24966c44eb9d7d651cb8cf5ed0", 960, 954), w: 480, h: 477, alt: "Reproduced artwork" },
  { file: "art-reproduction/art-08.jpg", fallback: wix("6c349ac07b59419c910fc8b3289c9389", 960, 670), w: 480, h: 335, alt: "In situ artwork" },
  { file: "art-reproduction/art-09.jpg", fallback: wix("610a0a390e9a40029742d52af7ee647d", 960, 617), w: 960, h: 617, alt: "Studio reproduction setup" },
  { file: "art-reproduction/art-10.jpg", fallback: wix("94433d7d65e640bdbc0712816d585cef", 960, 1438), w: 480, h: 719, alt: "Tall artwork reproduction" },
  { file: "art-reproduction/art-11.jpg", fallback: wix("fbbb4844919d4b04a692520d642fb1af", 960, 720), w: 480, h: 360, alt: "Artwork" },
  { file: "art-reproduction/art-12.jpg", fallback: wix("32fc3238bb3e4480826cb25c4f39e9bd", 960, 826), w: 480, h: 413, alt: "Artwork" },
  { file: "art-reproduction/art-13.jpg", fallback: wix("a0f78574ed8743c4b4f44dfc2c20e2e3", 960, 1202), w: 480, h: 601, alt: "Portrait orientation artwork" },
  { file: "art-reproduction/art-14.jpg", fallback: wix("f5df20423f2e4cd3a56f9f3aff5d547d", 960, 1114), w: 480, h: 557, alt: "Artwork" },
  { file: "art-reproduction/art-15.jpg", fallback: wix("38610edf63374e15ac83fb914ea764f1", 960, 642), w: 480, h: 321, alt: "Artwork" },
  { file: "art-reproduction/art-16.jpg", fallback: wix("080fc6daee4548a5bafa685f40c2720c", 960, 816), w: 480, h: 408, alt: "Artwork" },
  { file: "art-reproduction/art-17.jpg", fallback: wix("7c300e439af24ba583e3d42c5f9da087", 960, 764), w: 480, h: 382, alt: "Artwork" },
  { file: "art-reproduction/art-18.jpg", fallback: wix("cbf7cde0e1fe4e40a053867c03ca9adf", 960, 802), w: 480, h: 401, alt: "Artwork" },
  { file: "art-reproduction/art-19.jpg", fallback: wix("7dc0aad0123643fca4193248d862e3e8", 960, 720), w: 480, h: 360, alt: "Artwork" },
  { file: "art-reproduction/art-20.jpg", fallback: wix("cd2446c673c048d38396954f089d629e", 960, 724), w: 480, h: 362, alt: "Artwork" },
  { file: "art-reproduction/art-21.jpg", fallback: wix("479c4250f88b4ec286d418b76552e4b6", 960, 1256), w: 480, h: 628, alt: "Artwork" },
  { file: "art-reproduction/art-22.jpg", fallback: wix("350add3dd6a243c3bd35b0b5cee1c08b", 960, 812), w: 480, h: 406, alt: "Artwork" },
  { file: "art-reproduction/art-23.jpg", fallback: wix("75e7fb8155884258a13b87dcfaace9b9", 960, 1404), w: 480, h: 702, alt: "Artwork" },
  { file: "art-reproduction/art-24.jpg", fallback: wix("c12d0bfc9894469bb9284ddef5c1830f", 960, 962), w: 960, h: 962, alt: "Artwork" },
  { file: "art-reproduction/art-25.jpg", fallback: wix("c6c7bea9a4204341b748509e62ad7622", 960, 694), w: 960, h: 694, alt: "Artwork" },
];

/** A representative hero image per landing-page section. */
export const sectionHero = {
  art: artGallery[8].fallback,
  product: artGallery[0].fallback,
  events: artGallery[3].fallback,
  layout: artGallery[1].fallback,
};
