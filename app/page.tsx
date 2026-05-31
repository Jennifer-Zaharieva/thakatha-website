import { site, homeServices } from "@/lib/content";
import { imageUrl, artGallery } from "@/lib/images";
import Reveal from "@/components/Reveal";

const clientsStyled = [
  { name: "Nelson Makamo",            weight: "font-extrabold" },
  { name: "Joni Brenner",             weight: "font-extralight" },
  { name: "Strauss & Co",             weight: "font-bold" },
  { name: "Warren Siebrits",          weight: "font-light" },
  { name: "Karel Nel",                weight: "font-extralight" },
  { name: "Jake Singer",              weight: "font-extrabold" },
  { name: "Norman Catherine",         weight: "font-light" },
  { name: "Francis Goodman",          weight: "font-bold" },
  { name: "Everard Read",             weight: "font-extralight" },
  { name: "Goodman Gallery",          weight: "font-semibold" },
  { name: "Anita Makan",              weight: "font-light" },
  { name: "Riaan Bolt",               weight: "font-extrabold" },
  { name: "Blank Projects",           weight: "font-extralight" },
  { name: "Johannesburg Art Gallery", weight: "font-semibold" },
  { name: "Wits Art Museum",          weight: "font-light" },
];

export default function Home() {
  const heroVideo = "https://pavzocgkrwbhbrjskaud.supabase.co/storage/v1/object/public/video%20for%20front%20page/T%20H%20A%20K%20A%20T%20H%20A%20%20-%20%20R%20E%20P%20R%20O_3.mp4";

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden bg-ink"
        style={{ height: "calc(100dvh - 68px)" }}
      >
        {/* Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover object-top sm:object-center"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Mobile only — Photography & Visual Production centered at top of hero */}
        <div className="absolute top-5 left-0 right-0 z-10 flex justify-center md:hidden">
          <span className="text-[4vw] font-extrabold uppercase tracking-wide text-bone/80 whitespace-nowrap">
            Photography & Visual Production
          </span>
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-6 left-0 right-0 z-10 container-x flex flex-row items-end justify-between gap-4">

          {/* Left: contact */}
          <div className="space-y-0.5">
            <a href={site.contact.phoneHref} className="block text-[11px] sm:text-sm font-light text-bone/75 hover:text-bone transition-colors">
              {site.contact.phone}
            </a>
            <a href={`mailto:${site.contact.email}`} className="block text-[11px] sm:text-sm font-light text-bone/75 hover:text-bone transition-colors">
              {site.contact.email}
            </a>
            <p className="pt-1 text-[9px] sm:text-[11px] uppercase tracking-label text-bone/40">
              JHB · CPT · South Africa
            </p>
          </div>

          {/* Right: clients */}
          <div className="max-w-[52%] sm:max-w-[55%] text-right">
            <p className="text-[8px] sm:text-[11px] uppercase leading-loose text-bone/70">
              {clientsStyled.map((c, i) => (
                <span key={c.name}>
                  <span className={c.weight}>{c.name.toUpperCase()}</span>
                  {i < clientsStyled.length - 1 && (
                    <span className="font-extralight opacity-40">  ·  </span>
                  )}
                </span>
              ))}
            </p>
          </div>

        </div>
      </section>

      {/* ── SERVICES TABLE ── */}
      <section className="container-x py-20 sm:py-28">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {homeServices.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <h3 className="text-sm font-medium text-ink">{s.title}</h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-ink-faint">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── IMAGE GALLERY ── */}
      <section className="container-x pb-24">
        <div className="columns-2 gap-3 sm:columns-3 lg:columns-4 [&>*]:mb-3">
          {artGallery.map((img, i) => (
            <Reveal key={img.file} delay={Math.min(i * 15, 300)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageUrl(img.file, img.fallback)}
                alt={img.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
