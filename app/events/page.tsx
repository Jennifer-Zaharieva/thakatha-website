import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { imageUrl, artGallery } from "@/lib/images";

export const metadata: Metadata = {
  title: "Events Photography",
  description:
    "Coverage for launches, exhibitions, fairs, gallery events and cultural gatherings — capturing the people, atmosphere and details that shape the experience.",
};

const services = [
  {
    t: "Exhibition openings",
    d: "The hang, the crowd, the conversations — the work seen through the eyes of the room.",
  },
  {
    t: "Launches & private views",
    d: "Brand and product launches captured with editorial polish and discretion.",
  },
  {
    t: "Art fairs & booths",
    d: "Stand documentation, sales-floor energy and collector moments across the fair.",
  },
  {
    t: "Portraits on the night",
    d: "Portraits of artists, hosts and guests amid the event.",
  },
  {
    t: "Documentary candids",
    d: "Unposed, story-driven frames that hold the atmosphere of the evening.",
  },
  {
    t: "Fast turnaround",
    d: "A same-week edit, with social-ready selects delivered the morning after.",
  },
];

export default function EventsPage() {
  return (
    <>
      <PageHero
        title="Events"
        lead="Coverage for launches, exhibitions, fairs, gallery events and cultural gatherings — capturing the people, atmosphere and details that shape the experience."
      />

      <section className="container-x py-6">
        <Reveal className="relative aspect-[16/7] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageUrl("sections/events-band.jpg", artGallery[3].fallback)}
            alt="Event photography"
            className="h-full w-full object-cover"
          />
        </Reveal>
      </section>

      {/* Services grid — no numbers */}
      <section className="container-x py-12">
        <h2 className="label mb-8 text-ink-soft">How we cover the night</h2>
        <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
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

      <section className="container-x py-12">
        <div className="grid gap-10 border-t border-line pt-12 md:grid-cols-2">
          <h2 className="text-4xl font-extralight tracking-tight sm:text-5xl">
            Present, but never in the way.
          </h2>
          <div className="space-y-6 text-base font-light leading-relaxed text-ink-soft">
            <p>
              We've spent years inside galleries and at fairs, so we read a room
              quickly — anticipating the moment that matters and staying out of
              the experience for everyone else.
            </p>
            <p>
              You receive a tightly curated edit: the artworks, the crowd and the
              key portraits, colour-graded and ready to publish.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x pb-8">
        <div className="flex flex-col items-start justify-between gap-6 border-t border-line pt-12 sm:flex-row sm:items-center">
          <p className="max-w-prose2 text-2xl font-extralight">
            Have an opening or launch coming up?
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
