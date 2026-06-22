import Link from "next/link";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/content";

export const metadata = {
  title: "About — Thakatha",
  description:
    "Thakatha is a specialist photography studio for the art world — colour-accurate, archival reproduction of artworks, catalogues and collections across Johannesburg and Cape Town.",
};

// Galleries, artists and institutions the studio has worked with.
// Edit this list freely — add or remove names as your roster grows.
const clients = [
  "Goodman Gallery",
  "Everard Read",
  "Strauss & Co",
  "Nelson Makamo",
];

const approach = [
  {
    title: "Colour-accurate capture",
    body:
      "Calibrated lighting and profiling so the reproduction matches the original — the colour, the surface, the proportion, exactly as they are.",
  },
  {
    title: "Archival-quality files",
    body:
      "High-resolution files built to last, ready for print, digital and permanent collection records.",
  },
  {
    title: "Careful with originals",
    body:
      "Delicate works handled with care, photographed on-site at galleries and studios when the work can’t travel.",
  },
  {
    title: "Across every medium",
    body:
      "Paintings, sculpture, works on paper, books and in-situ installation views — documented with the same precision.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="container-x pt-16 pb-12 sm:pt-24">
        <Reveal>
          <p className="label text-clay">About the studio</p>
          <h1 className="display mt-6 max-w-4xl text-5xl sm:text-7xl">
            Imagery, true to the original.
          </h1>
          <p className="mt-8 max-w-prose2 text-lg font-light leading-relaxed text-ink-soft">
            Thakatha is a specialist photography studio for the art world —
            capturing, cataloguing and presenting work with archival precision,
            across Johannesburg and Cape Town.
          </p>
        </Reveal>
      </section>

      {/* Purpose */}
      <section className="container-x py-12 sm:py-16">
        <Reveal className="grid grid-cols-12 gap-y-8">
          <div className="col-span-12 lg:col-span-3">
            <p className="label text-clay">Our purpose</p>
          </div>
          <div className="col-span-12 lg:col-span-8 lg:col-start-5">
            <p className="text-2xl font-extralight leading-snug tracking-tight text-ink sm:text-3xl">
              We exist for one reason: to make a reproduction that is true.
            </p>
            <p className="mt-6 max-w-prose2 text-base font-light leading-relaxed text-ink-soft">
              When you are documenting an artist’s body of work or a gallery’s
              collection, the image has to be exactly right. Anything less
              misrepresents the work. That standard sits behind everything we
              photograph — from a single canvas to a full catalogue, from a
              quiet studio to an opening night.
            </p>
          </div>
        </Reveal>
      </section>

      {/* How we work */}
      <section className="container-x py-12 sm:py-16">
        <Reveal>
          <p className="label text-clay">How we work</p>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
          {approach.map((item) => (
            <Reveal key={item.title} className="border-t border-line pt-6">
              <h3 className="text-xl font-light tracking-tight text-ink">
                {item.title}
              </h3>
              <p className="mt-3 max-w-prose2 text-base font-light leading-relaxed text-ink-soft">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Trusted by */}
      <section className="container-x py-12 sm:py-16">
        <Reveal className="grid grid-cols-12 gap-y-8">
          <div className="col-span-12 lg:col-span-3">
            <p className="label text-clay">Trusted by</p>
          </div>
          <div className="col-span-12 lg:col-span-8 lg:col-start-5">
            <ul className="flex flex-wrap gap-x-10 gap-y-4">
              {clients.map((c) => (
                <li
                  key={c}
                  className="text-lg font-light tracking-tight text-ink"
                >
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-prose2 text-sm font-light leading-relaxed text-ink-faint">
              Working with galleries, auction houses, artists and institutions
              across {site.contact.locations}.
            </p>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="container-x py-20 sm:py-28">
        <Reveal className="border border-line bg-paper px-8 py-16 text-center sm:px-16 sm:py-24">
          <p className="label text-clay">Start a project</p>
          <h2 className="display mx-auto mt-6 max-w-4xl text-4xl sm:text-6xl">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-6 max-w-prose2 font-light text-ink-soft">
            Share a brief and we’ll send back a tailored quote — whether it’s a
            single canvas, a full catalogue, or an opening night.
          </p>
          <Link
            href="/publishing-design#brief"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-xs font-medium uppercase tracking-label text-bone transition-colors duration-300 hover:bg-clay-deep"
          >
            Get a quote
            <span>→</span>
          </Link>
        </Reveal>
      </section>
    </>
  );
}
