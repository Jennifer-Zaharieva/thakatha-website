"use client";

import { useState } from "react";

const SERVICES = [
  "Art Reproduction",
  "Product / E-commerce",
  "Events",
  "Layout / Catalogue Design",
];

const DELIVERABLES = ["Web / digital", "Print", "Both"];
const LOCATIONS = ["Johannesburg", "Cape Town", "Other / Remote"];
const TIMELINES = ["As soon as possible", "Within a month", "1–3 months", "Flexible"];
const BUDGETS = ["Under R5k", "R5k – R15k", "R15k – R40k", "R40k+", "Not sure yet"];

type Status = "idle" | "sending" | "done" | "error";

function Field({
  label,
  children,
  hint,
}: {
  label: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="label block text-ink-soft">{label}</span>
      {hint && <span className="mt-1 block text-xs font-light text-ink-faint">{hint}</span>}
      <div className="mt-3">{children}</div>
    </label>
  );
}

const inputCls =
  "w-full border-0 border-b border-line bg-transparent pb-3 text-base font-light text-ink outline-none transition-colors placeholder:text-ink-faint/60 focus:border-ink";

export default function BriefForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [services, setServices] = useState<string[]>([]);

  const toggleService = (s: string) =>
    setServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const payload = { ...data, services };

    try {
      const res = await fetch("/api/brief", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong.");
      }
      setStatus("done");
      form.reset();
      setServices([]);
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="border border-line bg-paper p-10 text-center sm:p-16">
        <div className="label text-clay">Received</div>
        <h3 className="mt-4 text-3xl font-extralight tracking-tight">Thank you.</h3>
        <p className="mx-auto mt-4 max-w-prose2 font-light text-ink-soft">
          We have your brief and will be in touch with a tailored quote shortly.
          For anything urgent, call us on{" "}
          <a href="tel:+27657199045" className="link-underline">
            +27 65 71 99 045
          </a>
          .
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 text-xs uppercase tracking-label text-ink-faint hover:text-ink"
        >
          Submit another brief
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-14">
      {/* Contact */}
      <fieldset className="space-y-8">
        <legend className="label mb-2 text-clay">01 — Who you are</legend>
        <div className="grid gap-8 sm:grid-cols-2">
          <Field label="Name">
            <input name="name" required className={inputCls} placeholder="Your name" />
          </Field>
          <Field label="Email">
            <input
              name="email"
              type="email"
              required
              className={inputCls}
              placeholder="you@email.com"
            />
          </Field>
          <Field label="Phone">
            <input name="phone" className={inputCls} placeholder="Optional" />
          </Field>
          <Field label="Organisation / Studio / Gallery">
            <input name="organisation" className={inputCls} placeholder="Optional" />
          </Field>
        </div>
      </fieldset>

      {/* Services */}
      <fieldset className="space-y-5">
        <legend className="label mb-2 text-clay">02 — What you need</legend>
        <div className="flex flex-wrap gap-3">
          {SERVICES.map((s) => {
            const on = services.includes(s);
            return (
              <button
                type="button"
                key={s}
                onClick={() => toggleService(s)}
                className={`rounded-full border px-5 py-2.5 text-sm font-light transition-colors duration-300 ${
                  on
                    ? "border-ink bg-ink text-bone"
                    : "border-line text-ink-soft hover:border-ink"
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* The brief */}
      <fieldset className="space-y-8">
        <legend className="label mb-2 text-clay">03 — The brief</legend>
        <Field
          label="Tell us about the project"
          hint="What are we photographing or designing? What's the end goal?"
        >
          <textarea
            name="brief"
            required
            rows={4}
            className={`${inputCls} resize-none`}
            placeholder="e.g. 24 paintings to reproduce for a catalogue, plus opening-night coverage…"
          />
        </Field>
        <div className="grid gap-8 sm:grid-cols-2">
          <Field label="Approx. number of items" hint="Artworks, products, pages…">
            <input name="quantity" className={inputCls} placeholder="e.g. 24" />
          </Field>
          <Field label="Largest dimensions" hint="For reproduction — biggest piece">
            <input name="dimensions" className={inputCls} placeholder="e.g. 2m × 1.5m" />
          </Field>
        </div>
      </fieldset>

      {/* Logistics */}
      <fieldset className="space-y-8">
        <legend className="label mb-2 text-clay">04 — Logistics</legend>
        <div className="grid gap-8 sm:grid-cols-2">
          <Field label="Location">
            <select name="location" className={inputCls} defaultValue="">
              <option value="" disabled>
                Select…
              </option>
              {LOCATIONS.map((l) => (
                <option key={l}>{l}</option>
              ))}
            </select>
          </Field>
          <Field label="Deliverables">
            <select name="deliverables" className={inputCls} defaultValue="">
              <option value="" disabled>
                Select…
              </option>
              {DELIVERABLES.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
          </Field>
          <Field label="Timeline">
            <select name="timeline" className={inputCls} defaultValue="">
              <option value="" disabled>
                Select…
              </option>
              {TIMELINES.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </Field>
          <Field label="Budget range" hint="Helps us scope the right approach">
            <select name="budget" className={inputCls} defaultValue="">
              <option value="" disabled>
                Select…
              </option>
              {BUDGETS.map((b) => (
                <option key={b}>{b}</option>
              ))}
            </select>
          </Field>
        </div>
      </fieldset>

      {error && (
        <p className="text-sm font-light text-clay-deep">{error}</p>
      )}

      <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-xs font-medium uppercase tracking-label text-bone transition-colors duration-300 hover:bg-clay-deep disabled:opacity-50"
        >
          {status === "sending" ? "Sending…" : "Send the brief"}
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
        <p className="text-xs font-light text-ink-faint">
          We'll reply by email with a tailored quote.
        </p>
      </div>
    </form>
  );
}
