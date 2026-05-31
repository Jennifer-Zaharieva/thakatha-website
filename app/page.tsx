import { clients, site, homeServices } from "@/lib/content";
import { imageUrl, artGallery } from "@/lib/images";
import Reveal from "@/components/Reveal";

export default function Home() {
  const heroVideo = "https://pavzocgkrwbhbrjskaud.supabase.co/storage/v1/object/public/video%20for%20front%20page/T%20H%20A%20K%20A%20T%20H%20A%20%20-%20%20R%20E%20P%20R%20O_3.mp4";

  return (
    <>
      {/* ── HERO ── Full screen video, no overlay, no text */}
      <section
        className="relative overflow-hidden bg-ink"
        style={{ minHeight: "calc(100vh - 68px)" }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Contact bottom-left, clients bottom-right */}
        <div className="absolute bottom-8 left-0 right-0 z-10 container-x flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-1">
            <a href={site.contact.phoneHref} className="block text-sm font-light text-bone/75 hover:text-bone transition-colors">
              {site.contact.phone}
            </a>
            <a href={`mailto:${site.contact.email}`} className="block text-sm font-light text-bone/75 hover:text-bone transition-colors">
              {site.contact.email}
            </a>
            <p className="pt-2 text-[11px] uppercase tracking-label text-bone/40">
              JHB · CPT · South Africa
            </p>
          </div>
          <div className="max-w-[340px] sm:text-right">
            <p className="text-[11px] font-light uppercase leading-loose tracking-label text-bone/45">
              {clients.join("  ·  ")}
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
