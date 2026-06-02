import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Gallery from "@/components/Gallery";
import Reveal from "@/components/Reveal";
import { artGallery } from "@/lib/images";

export const metadata: Metadata = {
  title: "Product / E-commerce Photography",
  description:
    "Clean, high-resolution product photography for online stores, catalogues and marketplace listings.",
};

const services = [
  {
    t: "Pure-White Packshots",
    d: "Clean product photography on seamless white backgrounds for online stores and catalogues.",
  },
  {
    t: "Detail & Macro",
    d: "Close-up imagery that captures texture, finish and material detail.",
  },
  {
    t: "Batch Photography",
    d: "Consistent multi-product photography prepared for collections, inventories and online listings.",
  },
  {
    t: "Retouching & Exporting",
    d: "Colour-corrected, cleaned and delivered to your required specifications.",
  },
  {
    t: "Catalogue & Publishing Use",
    d: "Product imagery prepared for catalogues, editorial layouts and printed material.",
  },
];

export default function ProductPage() {
  return (
    <>
      <PageHero
        title="Product / E-commerce"
        lead="Clean, high-resolution product photography for online stores, catalogues and marketplace listings. We create consistent white-background imagery prepared for e-commerce platforms, publishing and digital use."
      />

      {/* Services grid */}
      <section className="container-x py-10">
        <h2 className="mb-8 text-[15px] font-semibold uppercase tracking-wide2 text-ink">What We Shoot</h2>
        <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={i * 50} className="bg-bone p-8">
              <h3 className="text-xl font-light">{s.t}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-ink-soft">{s.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="container-x py-16">
        <Gallery images={artGallery} />
      </section>

      <section className="container-x pb-8">
        <div className="flex flex-col items-start justify-between gap-6 border-t border-line pt-12 sm:flex-row sm:items-center">
          <p className="max-w-prose2 text-2xl font-extralight">
            Building or refreshing your online store?
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
