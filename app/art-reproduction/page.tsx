import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Gallery from "@/components/Gallery";
import Reveal from "@/components/Reveal";
import { artGallery } from "@/lib/images";

export const metadata: Metadata = {
  title: "Art Reproduction",
  description:
    "Colour-accurate, archival reproduction of paintings, sculpture, books and works on paper — plus in-situ gallery shots and artist portraits.",
};

const offerings = [
  {
    t: "Paintings and works on paper",
    d: "2D artworks accurate colour with even lighting and no glare — calibrated for print and archive.",
  },
  {
    t: "Sculpture & objects",
    d: "Dimensional lighting that reveals form, surface and material across multiple angles.",
  },
  {
    t: "Books & catalogues",
    d: "Spreads, covers and details photographed for reproduction and digital editions.",
  },
  {
    t: "In-situ & gallery shots",
    d: "Installation and hang photography that documents the work in its space.",
  },
  {
    t: "Artist portraits",
    d: "Portraiture of artists in studio or on location.",
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

      {/* Offerings grid — no numbers */}
      <section className="container-x py-10">
        <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((o, i) => (
            <Reveal key={o.t} delay={i * 50} className="bg-bone p-8">
              <h3 className="text-xl font-light">{o.t}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-ink-soft">
                {o.d}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="container-x py-16">
        <div className="mb-10 flex items-end justify-between border-b border-line pb-5">
          <h2 className="label text-ink-soft">Selected Work</h2>
          <span className="text-sm font-light text-ink-faint">
            {artGallery.length} pieces
          </span>
        </div>
        <Gallery images={artGallery} />
      </section>

      {/* CTA */}
      <section className="container-x pb-8">
        <div className="flex flex-col items-start justify-between gap-6 border-t border-line pt-12 sm:flex-row sm:items-center">
          <p className="max-w-prose2 text-2xl font-extralight">
            Have a collection or exhibition to reproduce?
          </p>
          <Link
            href="/layout-design#brief"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-ink px-7 py-4 text-xs font-medium uppercase tracking-label text-bone transition-colors duration-300 hover:bg-clay-deep"
          >
            Request a quote <span>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
