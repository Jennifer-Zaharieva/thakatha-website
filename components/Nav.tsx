"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { site } from "@/lib/content";

const links = [
  { title: "Art Reproduction",     href: "/art-reproduction" },
  { title: "Product & E-Commerce", href: "/product" },
  { title: "Events",               href: "/events" },
  { title: "Publishing & Design",  href: "/publishing-design" },
];

export default function Nav() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname              = usePathname();
  const isDark                = pathname === "/" && !scrolled;

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
      className={`sticky top-0 z-[100] transition-all duration-500 ${
        isDark ? "bg-[#0b0b0b]" : "bg-bone/90 backdrop-blur-md"
      }`}
    >
      <div className="container-x flex h-[68px] items-center justify-between">

        <Link
          href="/"
          onClick={() => setOpen(false)}
          className={`text-[15px] font-semibold uppercase tracking-wide2 transition-colors duration-500 ${
            isDark ? "text-bone" : "text-ink"
          }`}
        >
          {site.brand}
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {isDark ? (
            <span className="text-[20px] font-extrabold uppercase tracking-wide text-bone">
              Photography & Visual Production
            </span>
          ) : (
            <>
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="label link-underline text-ink-soft hover:text-ink"
                >
                  {l.title}
                </Link>
              ))}
              <Link
                href="/publishing-design#brief"
                className="rounded-full bg-ink px-5 py-2.5 text-[11px] font-medium uppercase tracking-label text-bone transition-colors duration-300 hover:bg-clay-deep"
              >
                Get a Quote
              </Link>
            </>
          )}
        </div>

        {/* Hamburger */}
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
      {open && (
        <div className="fixed inset-0 top-[68px] z-[99] overflow-y-auto bg-[#FBF8F2] md:hidden">
          <div className="container-x flex flex-col pt-8">
            {links.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-5 border-b border-line py-5"
              >
                <span className="label text-clay">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-3xl font-extralight tracking-tight text-ink">{l.title}</span>
              </Link>
            ))}
            <Link
              href="/publishing-design#brief"
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex w-fit rounded-full bg-ink px-7 py-3.5 text-xs font-medium uppercase tracking-label text-bone"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
