import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "About — Thakatha",
  description:
    "Thakatha is a specialist photography company working across art reproduction, product photography, events and publishing, based in Cape Town and Johannesburg.",
};

const STUDIO_IMG =
  "https://pavzocgkrwbhbrjskaud.supabase.co/storage/v1/object/public/video%20for%20front%20page/studio.jpg";
const PORTRAIT_IMG =
  "https://pavzocgkrwbhbrjskaud.supabase.co/storage/v1/object/public/video%20for%20front%20page/jennifer-zaharieva.jpg";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="container-x pt-16 pb-10 sm:pt-24">
        <Reveal>
          <p className="label text-clay">About the studio</p>
          <h1 className="display mt-6 max-w-4xl text-5xl sm:text-7xl">
            Photography with precision and care
          </h1>
          <p className="mt-8 max-w-prose2 text-lg font-light leading-relaxed text-ink-soft">
            Thakatha is a specialist photography company working across art
            reproduction, product photography, events and publishing.
          </p>
        </Reveal>
      </section>

      {/* Feature image — work in progress */}
      <section className="container-x pb-12 sm:pb-16">
        <Reveal>
          <div className="aspect-[3/2] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={STUDIO_IMG}
              alt="Documenting a framed artwork in the studio"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </section>

      {/* Intro */}
      <section className="container-x pb-12 sm:pb-16">
        <Reveal className="max-w-prose2">
          <p className="text-base font-light leading-relaxed text-ink-soft">
            Founded in the art world, our work is guided by attention to detail,
            consistency and a commitment to quality. Whether documenting a
            collection, photographing products or capturing an event, we create
            imagery that is thoughtful, professional and fit for purpose.
          </p>
          <p className="mt-6 text-base font-light leading-relaxed text-ink-soft">
            Working across Cape Town and Johannesburg, we partner with artists,
            galleries, collectors, brands and institutions throughout South
            Africa.
          </p>
        </Reveal>
      </section>

      {/* Our Approach */}
      <section className="container-x py-12 sm:py-16">
        <Reveal className="grid grid-cols-12 gap-y-8">
          <div className="col-span-12 lg:col-span-3">
            <p className="label text-clay">Our approach</p>
          </div>
          <div className="col-span-12 lg:col-span-8 lg:col-start-5">
            <p className="text-2xl font-extralight leading-snug tracking-tight text-ink sm:text-3xl">
              We believe good photography starts with careful observation.
            </p>
            <p className="mt-6 max-w-prose2 text-base font-light leading-relaxed text-ink-soft">
              Every project is approached with precision, professionalism and an
              understanding of what makes the subject unique.
            </p>
            <p className="mt-6 max-w-prose2 text-base font-light leading-relaxed text-ink-soft">
              From artwork documentation and e-commerce photography to events
              and publications, our focus remains the same: creating images that
              serve their purpose well.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Behind Thakatha */}
      <section className="container-x py-12 sm:py-16">
        <Reveal>
          <p className="label text-clay">Behind Thakatha</p>
        </Reveal>
        <div className="mt-10 grid grid-cols-12 gap-8 gap-y-10">
          <Reveal className="col-span-12 sm:col-span-5 lg:col-span-4">
            <div className="aspect-[5/6] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={PORTRAIT_IMG}
                alt="Jennifer Zaharieva, founder of Thakatha"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal className="col-span-12 sm:col-span-7 lg:col-span-7 lg:col-start-6">
            <p className="max-w-prose2 text-base font-light leading-relaxed text-ink-soft">
              Founded by Jennifer Zaharieva, Thakatha operates through a small
              team working across Cape Town and Johannesburg.
            </p>
            <p className="mt-6 max-w-prose2 text-base font-light leading-relaxed text-ink-soft">
              What began as a specialist art documentation practice has evolved
              into a broader photography company, while maintaining the
              standards of care and attention to detail that shaped its
              foundation.
            </p>
          </Reveal>
        </div>
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
            single canvas, a product range, a publication, or an opening night.
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
