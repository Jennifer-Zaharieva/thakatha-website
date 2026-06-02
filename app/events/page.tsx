import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Gallery from "@/components/Gallery";
import Reveal from "@/components/Reveal";
import { artGallery } from "@/lib/images";

export const metadata: Metadata = {
  title: "Events Photography",
  description:
    "Photography for exhibition openings, launches, fairs, artist portraits and interior spaces.",
};

const services = [
  {
    t: "Exhibition Openings",
    d: "Gallery launches, openings and private views documented.",
  },
  {
    t: "Events & Gatherings",
    d: "Coverage for exhibitions, launches, fairs, corporate functions and cultural events.",
  },
  {
    t: "Portraits & Teams",
    d: "Portraits for artists, founders, teams and professionals: photographed on location, in workplaces, galleries or creative environments.",
  },
  {
    t: "Spaces & Interiors",
    d: "Photography for galleries, interiors, hospitality spaces and architectural environments.",
  },
  {
    t: "Documentary Details",
    d: "Atmospheric and candid imagery that captures the feeling of the event or space.",
  },
  {
    t: "Fast Turnaround",
    d: "Edited and publication-ready selects delivered efficiently for press, publishing and social use.",
  },
];

export default function EventsPage() {
  return (
    <>
      <PageHero
        title="Events"
        lead="Photography for exhibition openings, launches, fairs, artist and corporate portraits and interior spaces. We document the atmosphere, people and details that shape galleries, creative spaces and cultural events."
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
            Have an opening or launch coming up?
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
