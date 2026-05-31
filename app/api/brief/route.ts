import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export const runtime = "nodejs";

type BriefPayload = {
  name?: string;
  email?: string;
  phone?: string;
  organisation?: string;
  services?: string[];
  brief?: string;
  quantity?: string;
  dimensions?: string;
  location?: string;
  deliverables?: string;
  timeline?: string;
  budget?: string;
};

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req: Request) {
  let body: BriefPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = (body.name || "").toString().trim();
  const email = (body.email || "").toString().trim();
  const brief = (body.brief || "").toString().trim();

  if (!name || !email || !brief) {
    return NextResponse.json(
      { error: "Please provide your name, email and a project description." },
      { status: 400 }
    );
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  const record = {
    name,
    email,
    phone: (body.phone || "").toString().trim() || null,
    organisation: (body.organisation || "").toString().trim() || null,
    services: Array.isArray(body.services) ? body.services : [],
    brief,
    quantity: (body.quantity || "").toString().trim() || null,
    dimensions: (body.dimensions || "").toString().trim() || null,
    location: (body.location || "").toString().trim() || null,
    deliverables: (body.deliverables || "").toString().trim() || null,
    timeline: (body.timeline || "").toString().trim() || null,
    budget: (body.budget || "").toString().trim() || null,
  };

  let stored = false;
  let emailed = false;

  // 1) Store in Supabase
  const supabase = getSupabaseAdmin();
  if (supabase) {
    const { error } = await supabase.from("briefs").insert(record);
    if (error) {
      console.error("Supabase insert error:", error.message);
    } else {
      stored = true;
    }
  }

  // 2) Email notification via Resend (optional)
  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.QUOTE_NOTIFICATION_EMAIL;
  const from = process.env.QUOTE_FROM_EMAIL; // must be a verified Resend sender/domain
  if (resendKey && to && from) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(resendKey);
      const rows = (Object.entries({
        Name: record.name,
        Email: record.email,
        Phone: record.phone,
        Organisation: record.organisation,
        Services: record.services.join(", "),
        Brief: record.brief,
        "No. of items": record.quantity,
        Dimensions: record.dimensions,
        Location: record.location,
        Deliverables: record.deliverables,
        Timeline: record.timeline,
        Budget: record.budget,
      }) as [string, string | null][])
        .filter(([, v]) => v)
        .map(
          ([k, v]) =>
            `<tr><td style="padding:6px 16px 6px 0;color:#8A8275;font-size:12px;text-transform:uppercase;letter-spacing:.12em;vertical-align:top">${k}</td><td style="padding:6px 0;color:#1A1712">${String(
              v
            ).replace(/\n/g, "<br/>")}</td></tr>`
        )
        .join("");

      await resend.emails.send({
        from,
        to,
        replyTo: record.email,
        subject: `New brief — ${record.name}`,
        html: `<div style="font-family:'Plus Jakarta Sans',Arial,sans-serif;background:#F6F2EA;padding:32px"><div style="max-width:620px;margin:0 auto;background:#FBF8F2;border:1px solid #E4DCCD;padding:32px"><div style="font-size:12px;letter-spacing:.22em;text-transform:uppercase;color:#9C5B3B">Thakatha · New Brief</div><table style="margin-top:20px;border-collapse:collapse;width:100%">${rows}</table></div></div>`,
      });
      emailed = true;
    } catch (err) {
      console.error("Resend error:", err);
    }
  }

  if (!stored && !emailed) {
    return NextResponse.json(
      {
        error:
          "We couldn't process your brief right now. Please email thakatha.repro@gmail.com directly.",
      },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true, stored, emailed });
}
