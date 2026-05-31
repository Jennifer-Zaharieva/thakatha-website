import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import BriefForm from "@/components/BriefForm";

export const metadata: Metadata = {
  title: "Layout & Design — Catalogues & Artists' Books",
  description:
    "Art catalogues and artists' books — considered layout, typesetting and print-ready design. Send us your brief and we'll return a tailored quote.",
};

const services = [
  {
    t: "Art catalogues",
    d: "Exhibition and collection catalogues — sequencing, plates, essays and indices, set for print.",
  },
  {
    t: "Artists' books",
    d: "Monographs and limited editions designed around the artist's work and voice.",
  },
  {
    t: "Typesetting & layout",
    d: "Considered grids and typography that give each work the page it deserves.",
  },
  {
    t: "Print-ready production",
    d: "Pre-press, colour management and printer liaison through to the finished object.",
  },
];

export default function LayoutDesignPage() {
  return (
    <>
      <PageHero
        kicker="Print & Editorial"
        title="Layout / Design"
        lead="Art catalogues and artists' books — considered layout, typesetting and print-ready design that gives the work the page it deserves. Tell us about your project below and we'll send back a tailored quote by email."
      />

      {/* Services grid — no numbers */}
      <section className="container-x py-10">
        <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
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

      {/* Brief form */}
      <section id="brief" className="container-x scroll-mt-24 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="label text-clay">The Brief</p>
              <h2 className="display mt-5 text-4xl sm:text-5xl">
                Tell us what you need.
              </h2>
              <p className="mt-6 max-w-prose2 text-base font-light leading-relaxed text-ink-soft">
                A few quick questions so we can scope your project accurately.
                The more detail you give, the sharper the quote — and you can
                always call us to talk it through.
              </p>
              <div className="mt-8 space-y-1 text-sm font-light text-ink-soft">
                <a href="tel:+27657199045" className="link-underline block">
                  +27 65 71 99 045
                </a>
                <a
                  href="mailto:thakatha.repro@gmail.com"
                  className="link-underline block"
                >
                  thakatha.repro@gmail.com
                </a>
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
