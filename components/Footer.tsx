import Link from "next/link";
import { site, clients, sections } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="mt-32 bg-ink text-bone">
      {/* Client marquee */}
      <div className="marquee overflow-hidden border-b border-white/10 py-6">
        <div className="marquee-track flex w-max gap-12 whitespace-nowrap">
          {[...clients, ...clients].map((c, i) => (
            <span
              key={i}
              className="text-sm font-light uppercase tracking-label text-bone/55"
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      <div className="container-x grid gap-12 py-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="text-2xl font-semibold uppercase tracking-wide2">
            {site.brand}
          </div>
          <p className="mt-5 max-w-prose2 text-sm font-light leading-relaxed text-bone/60">
            {site.intro}
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="label text-bone/40">Studio</div>
          <ul className="mt-5 space-y-2 text-sm font-light text-bone/80">
            {sections.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="link-underline">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="label text-bone/40">Contact</div>
          <ul className="mt-5 space-y-2 text-sm font-light text-bone/80">
            <li>
              <a href={site.contact.phoneHref} className="link-underline">
                {site.contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.contact.email}`} className="link-underline">
                {site.contact.email}
              </a>
            </li>
            <li className="pt-2 text-bone/55">{site.contact.locations}</li>
          </ul>
        </div>
      </div>

      <div className="container-x flex flex-col items-start justify-between gap-2 border-t border-white/10 py-6 text-[11px] uppercase tracking-label text-bone/40 sm:flex-row sm:items-center">
        <span>
          © {new Date().getFullYear()} {site.brand}
        </span>
        <span>Fine Art Reproduction · Photography · Catalogues</span>
      </div>
    </footer>
  );
}
