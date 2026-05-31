"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { sections, site } from "@/lib/content";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isDark = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isDark
          ? "bg-black"
          : "bg-bone/90 backdrop-blur-md border-b border-line"
      }`}
    >
      <div className="container-x flex h-[68px] items-center justify-between">

        {/* Wordmark */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className={`text-[15px] font-semibold uppercase tracking-wide2 transition-colors duration-500 ${
            isDark ? "text-bone" : "text-ink"
          }`}
        >
          {site.brand}
        </Link>

        {/* Desktop right side only */}
        <div className="hidden items-center gap-9 md:flex">
          {isDark ? (
            <span className="text-[20px] font-extrabold uppercase tracking-wide text-bone">
              Photography & Visual Production
            </span>
          ) : (
            <>
              {sections.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}`}
                  className="label link-underline text-ink-soft hover:text-ink"
                >
                  {s.title}
                </Link>
              ))}
              <Link
                href="/layout-design#brief"
                className="rounded-full bg-ink px-5 py-2.5 text-[11px] font-medium uppercase tracking-label text-bone transition-colors duration-300 hover:bg-clay-deep"
              >
                Get a Quote
              </Link>
            </>
          )}
        </div>

        {/* Hamburger — mobile only */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span className={`block h-px w-6 transition-all duration-300 ${isDark ? "bg-bone" : "bg-ink"} ${open ? "translate-y-[3px] rotate-45" : ""}`} />
          <span className={`block h-px w-6 transition-all duration-300 ${isDark ? "bg-bone" : "bg-ink"} ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 top-[68px] z-40 bg-bone transition-opacity duration-300 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="container-x flex flex-col gap-2 pt-10">
          {sections.map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}`}
              onClick={() => setOpen(false)}
              className="border-b border-line py-5"
            >
              <span className="label mr-4 text-clay">{s.index}</span>
              <span className="text-3xl font-extralight tracking-tight">{s.title}</span>
            </Link>
          ))}
          <Link
            href="/layout-design#brief"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex w-fit rounded-full bg-ink px-7 py-3.5 text-xs font-medium uppercase tracking-label text-bone"
          >
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
