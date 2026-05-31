import Link from "next/link";
import { clients, site, homeServices } from "@/lib/content";
import { imageUrl, artGallery } from "@/lib/images";
import Reveal from "@/components/Reveal";

export default function Home() {
  // Hero video — hosted in Supabase Storage
  const heroVideo = "https://pavzocgkrwbhbrjskaud.supabase.co/storage/v1/object/public/video%20for%20front%20page/T%20H%20A%20K%20A%20T%20H%20A%20%20-%20%20R%20E%20P%20R%20O_3.mp4";

  return (
    <>
      {/* ── HERO ── Full-screen black, matching the original studio look */}
      <section
        className="relative flex flex-col overflow-hidden bg-ink"
        style={{ minHeight: "calc(100vh - 68px)" }}
      >
        {/* Video background — loads once uploaded to Supabase */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          aria-hidden="true"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Dark overlay — text stays solid white, no video bleeding through letters */}
        <div className="absolute inset-0 bg-ink/55" />

        {/* Content layer */}
        <div className="relative z-10 container-x flex flex-1 flex-col py-8">

          {/* Top right — brand descriptor */}
          <div className="flex justify-end">
            <span className="text-[11px] font-light uppercase tracking-label text-bone/55">
              Photography & Visual Production
            </span>
          </div>

          {/* Centre — wordmark */}
          <div className="flex flex-1 items-center">
            <h1
              className="reveal font-semibold uppercase leading-none tracking-[-0.02em] text-bone"
              style={{
                fontSize: "clamp(72px, 16vw, 200px)",
                animationDelay: "100ms",
              }}
            >
              Thakatha
            </h1>
          </div>

          {/* Bottom — contact left, clients right */}
          <div className="flex flex-col gap-8 pb-4 sm:flex-row sm:items-end sm:justify-between">

            {/* Left: contact + location */}
            <div
              className="reveal space-y-1"
              style={{ animationDelay: "300ms" }}
            >
              <a
                href={site.contact.phoneHref}
                className="block text-sm font-light text-bone/75 transition-colors hover:text-bone"
              >
                {site.contact.phone}
              </a>
              <a
                href={`mailto:${site.contact.email}`}
                className="block text-sm font-light text-bone/75 transition-colors hover:text-bone"
              >
                {site.contact.email}
              </a>
              <p className="pt-2 text-[11px] uppercase tracking-label text-bone/40">
                JHB · CPT · South Africa
              </p>
            </div>

            {/* Right: client/gallery names */}
            <div
              className="reveal max-w-[340px] sm:text-right"
              style={{ animationDelay: "400ms" }}
            >
              <p className="text-[11px] font-light uppercase leading-loose tracking-label text-bone/45">
                {clients.join("  ·  ")}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── SERVICES TABLE ── No borders, clean grid */}
      <section className="container-x py-20 sm:py-28">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {homeServices.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <h3 className="text-sm font-medium text-ink">{s.title}</h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-ink-faint">
                {s.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── IMAGE GALLERY ── Mixed masonry, like the original site */}
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
