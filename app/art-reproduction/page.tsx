import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Gallery from "@/components/Gallery";
import Reveal from "@/components/Reveal";
import { artGallery } from "@/lib/images";

export const metadata: Metadata = {
  title: "Art Reproduction",
  description:
    "Colour-accurate photography for artworks, exhibitions, catalogues and artist documentation.",
};

const offerings = [
  {
    t: "Paintings & Works on Paper",
    d: "High-resolution colour-accurate capture calibrated for print, archive and online catalogues.",
  },
  {
    t: "Sculpture & Objects",
    d: "Lighting and detail-focused photography that captures form, texture and material accurately.",
  },
  {
    t: "Books & Catalogues",
    d: "Covers, spreads and details photographed for reproduction, publishing and digital editions.",
  },
  {
    t: "Exhibition & Installation Views",
    d: "Gallery and in-situ documentation that captures how work exists within space.",
  },
  {
    t: "Artist Portraits",
    d: "Natural portraits of artists in studio, exhibition or working environments.",
  },
];

export default function ArtReproductionPage() {
  return (
    <>
      <PageHero
        kicker="Fine Art"
        title="Art Reproduction"
        lead="Colour-accurate photography for artworks, exhibitions, catalogues and artist documentation. We photograph paintings, sculpture, books and installations with archival precision for print, digital and collection records."
      />

      {/* Offerings grid */}
      <section className="container-x py-10">
        <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((o, i) => (
            <Reveal key={o.t} delay={i * 50} className="bg-bone p-8">
              <h3 className="text-xl font-light">{o.t}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-ink-soft">{o.d}</p>
            </Reveal>
          ))}

          {/* Publishing & Catalogue Production block */}
          <Reveal delay={5 * 50} className="bg-bone p-8">
            <h3 className="text-xl font-light">Publishing & Catalogue Production</h3>
            <p className="mt-3 text-sm font-light leading-relaxed text-ink-soft">
              From artwork photography to layout, printing and final production, we create exhibition catalogues, artist books and publication-ready material for galleries, artists and institutions.
            </p>
            <Link
              href="/publishing-design"
              className="mt-5 inline-flex items-center gap-2 text-sm font-light text-clay transition-colors hover:text-clay-deep"
            >
              Explore Publishing & Editorial <span>→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="container-x py-16">
        <div className="mb-10 flex items-end justify-between border-b border-line pb-5">
          <h2 className="label text-ink-soft">Selected Work</h2>
          <span className="text-sm font-light text-ink-faint">{artGallery.length} pieces</span>
        </div>
        <Gallery images={artGallery} />
      </section>

      <section className="container-x pb-8">
        <div className="flex flex-col items-start justify-between gap-6 border-t border-line pt-12 sm:flex-row sm:items-center">
          <p className="max-w-prose2 text-2xl font-extralight">
            Have a collection or exhibition to reproduce?
          </p>
          <Link
            href="/publishing-design#brief"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-ink px-7 py-4 text-xs font-medium uppercase tracking-label text-bone transition-colors duration-300 hover:bg-clay-deep"
          >
            Request a quote <span>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
