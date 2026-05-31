import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { imageUrl, artGallery } from "@/lib/images";

export const metadata: Metadata = {
  title: "Product / E-commerce Photography",
  description:
    "High-resolution product imagery for online stores, lookbooks and catalogues — packshots, flat-lays, 360° spins and lifestyle sets.",
};

// Blocks 2–4 removed per brief. Keeping: Pure-white packshots, Detail & macro, Retouching & batch delivery.
const services = [
  {
    t: "Pure-white packshots",
    d: "Clean, consistent product shots on seamless white — marketplace-ready (Takealot, Amazon, Shopify).",
  },
  {
    t: "Detail & macro",
    d: "Close-ups of texture, finish, stitching and material — the things that justify the price.",
  },
  {
    t: "Retouching & batch delivery",
    d: "Colour-matched, cleaned and exported to your exact platform specs.",
  },
];

export default function ProductPage() {
  return (
    <>
      <PageHero
        title="Product / E-commerce"
        lead="High-resolution product imagery for online stores, lookbooks and catalogues — styled, lit and retouched to convert browsers into buyers. From clean marketplace packshots to editorial lifestyle sets, delivered to your platform's exact specifications."
      />

      {/* Feature band image */}
      <section className="container-x py-6">
        <Reveal className="relative aspect-[16/7] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageUrl("sections/product-band.jpg", artGallery[4].fallback)}
            alt="Product photography"
            className="h-full w-full object-cover"
          />
        </Reveal>
      </section>

      {/* Services grid — no numbers */}
      <section className="container-x py-12">
        <h2 className="label mb-8 text-ink-soft">What we shoot</h2>
        <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={i * 50} className="bg-bone p-8">
              <h3 className="text-xl font-light">{s.t}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-ink-soft">
                {s.d}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="container-x py-12">
        <div className="grid gap-10 border-t border-line pt-12 md:grid-cols-2">
          <h2 className="text-4xl font-extralight tracking-tight sm:text-5xl">
            A repeatable look, at scale.
          </h2>
          <div className="space-y-6 text-base font-light leading-relaxed text-ink-soft">
            <p>
              Whether it's ten hero products or a thousand SKUs, we build a
              lighting and styling template so every image in your catalogue
              feels like it belongs to the same brand.
            </p>
            <p>
              Files arrive named, colour-corrected and sized for web, print and
              each marketplace — ready to drop straight into your store.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x pb-8">
        <div className="flex flex-col items-start justify-between gap-6 border-t border-line pt-12 sm:flex-row sm:items-center">
          <p className="max-w-prose2 text-2xl font-extralight">
            Building or refreshing your online store?
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
