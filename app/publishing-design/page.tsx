import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import BriefForm from "@/components/BriefForm";

export const metadata: Metadata = {
  title: "Publishing & Design — Catalogues & Artists' Books",
  description:
    "Art catalogues, artist books, collection books and printed material: from layout and image sequencing to print preparation and final production.",
};

const services = [
  {
    t: "Art Catalogues",
    d: "Exhibition and collection catalogues including image layout, essays, artwork sequencing and print preparation.",
  },
  {
    t: "Artist & Collection Books",
    d: "Artist books, private collection books and custom publications designed around the work, imagery and archive.",
  },
  {
    t: "Catalogue Layout & Design",
    d: "Clean, considered layouts for catalogues, books and printed material.",
  },
  {
    t: "Print Preparation & Production",
    d: "Preparing files for print and coordinating production through to the final printed result.",
  },
];

export default function PublishingDesignPage() {
  return (
    <>
      <PageHero
        kicker="Print & Editorial"
        title="Publishing & Design"
        lead="Art catalogues, artist books, collection books and printed material: from layout and image sequencing to print preparation and final production. We create publication-ready books, catalogues and editorial material for galleries, artists, exhibitions, collections and private clients."
      />

      <section className="container-x py-10">
        <h2 className="mb-8 text-[15px] font-semibold uppercase tracking-wide2 text-ink">What We Do</h2>
        <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={i * 50} className="bg-bone p-8">
              <h3 className="text-xl font-light">{s.t}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-ink-soft">{s.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="brief" className="container-x scroll-mt-24 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="label text-clay">The Brief</p>
              <h2 className="display mt-5 text-4xl sm:text-5xl">Tell us what you need.</h2>
              <p className="mt-6 max-w-prose2 text-base font-light leading-relaxed text-ink-soft">
                A few quick questions so we can scope your project accurately. The more detail you give, the sharper the quote — and you can always call us to talk it through.
              </p>
              <div className="mt-8 space-y-1 text-sm font-light text-ink-soft">
                <a href="tel:+27657199045" className="link-underline block">+27 65 71 99 045</a>
                <a href="mailto:thakatha.repro@gmail.com" className="link-underline block">thakatha.repro@gmail.com</a>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal delay={120}>
              <BriefForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
