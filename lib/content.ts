import { imageUrl, sectionHero } from "./images";

export const site = {
  brand: "Thakatha",
  tagline: "Photography & Visual Production",
  intro: "Photography for brands, visual artists and events.",
  contact: {
    phone: "+27 65 71 99 045",
    phoneHref: "tel:+27657199045",
    email: "thakatha.repro@gmail.com",
    locations: "Johannesburg · Cape Town · South Africa",
  },
};

export type Section = {
  slug: string;
  index: string;
  title: string;
  short: string;
  description: string;
  hero: string;
};

export const sections: Section[] = [
  {
    slug: "art-reproduction",
    index: "01",
    title: "Art Reproduction",
    short: "Paintings, sculpture & books, in situ.",
    description:
      "Paintings, sculpture, books and works on paper — plus in-situ gallery shots and artist portraits. Colour-accurate, archival reproduction that does justice to the original.",
    hero: imageUrl("sections/art.jpg", sectionHero.art),
  },
  {
    slug: "product",
    index: "02",
    title: "Product / E-commerce",
    short: "Imagery that sells.",
    description:
      "High-resolution product imagery for online stores, lookbooks and catalogues — styled, lit and retouched to convert browsers into buyers. Pure-white packshots, editorial flat-lays, 360° spins and lifestyle sets.",
    hero: imageUrl("sections/product.jpg", sectionHero.product),
  },
  {
    slug: "events",
    index: "03",
    title: "Events",
    short: "The atmosphere of the evening.",
    description:
      "Coverage for launches, exhibitions, fairs, gallery events and cultural gatherings — capturing the people, atmosphere and details that shape the experience.",
    hero: imageUrl("sections/events.jpg", sectionHero.events),
  },
  {
    slug: "publishing-design",
    index: "04",
    title: "Publishing & Design",
    short: "Art catalogues & artists' books.",
    description:
      "Art catalogues and artists' books — considered layout, typesetting and print-ready design that gives the work the page it deserves.",
    hero: imageUrl("sections/layout.jpg", sectionHero.layout),
  },
];

/** Services displayed on the landing page — table format, no lines. */
export const homeServices = [
  { title: "Art Reproduction", desc: "Colour-accurate photography for paintings, sculpture and artworks." },
  { title: "Product & E-Commerce", desc: "Clean, high-end product photography for brands and online stores." },
  { title: "Events & Experiences", desc: "Gallery openings, launches, fairs and corporate events." },
  { title: "Portraits & Teams", desc: "Portraits for artists, founders, teams and creative brands." },
  { title: "Spaces & Interiors", desc: "Hotels, galleries, interiors and architectural spaces." },
];

/** Galleries, artists and institutions the studio has worked with. */
export const clients = [
  "Nelson Makamo",
  "Joni Brenner",
  "Strauss & Co",
  "Warren Siebrits",
  "Karel Nel",
  "Jake Singer",
  "Norman Catherine",
  "Francis Goodman",
  "Everard Read",
  "Goodman Gallery",
  "Anita Makan",
  "Riaan Bolt",
  "Blank Projects",
  "Johannesburg Art Gallery",
  "Wits Art Museum",
];

/** Disciplines covered — kept for the Art Reproduction page context. */
export const disciplines = [
  "paintings",
  "drawings",
  "prints",
  "mixed media",
  "sculpture",
  "installation",
  "performance art",
  "furniture",
  "ceramics",
  "artist portraits",
  "gallery shots",
  "book making",
  "catalogue design",
];
