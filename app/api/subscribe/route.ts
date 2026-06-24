import { NextResponse } from "next/server";

/**
 * Email capture endpoint — PLACEHOLDER BACKEND.
 *
 * Right now this validates the input and logs it server-side, then returns
 * success. No data is stored or sent anywhere. Wire it to a real provider
 * before launch by following one of the examples below.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * OPTION A — ConvertKit (Kit)
 * ─────────────────────────────────────────────────────────────────────────
 * 1. Create a Form in ConvertKit and copy its Form ID.
 * 2. In Vercel → Project → Settings → Environment Variables, add:
 *      CONVERTKIT_API_KEY   = your_api_key
 *      CONVERTKIT_FORM_ID   = your_form_id
 * 3. Replace the placeholder block below with:
 *
 *    const r = await fetch(
 *      `https://api.convertkit.com/v3/forms/${process.env.CONVERTKIT_FORM_ID}/subscribe`,
 *      {
 *        method: "POST",
 *        headers: { "Content-Type": "application/json" },
 *        body: JSON.stringify({
 *          api_key: process.env.CONVERTKIT_API_KEY,
 *          email,
 *          first_name: firstName,
 *        }),
 *      }
 *    );
 *    if (!r.ok) throw new Error("ConvertKit error");
 *
 * ─────────────────────────────────────────────────────────────────────────
 * OPTION B — Mailchimp
 * ─────────────────────────────────────────────────────────────────────────
 * 1. Get your API key, Audience (List) ID, and server prefix (e.g. "us21").
 * 2. Add env vars in Vercel:
 *      MAILCHIMP_API_KEY    = your_api_key
 *      MAILCHIMP_LIST_ID    = your_list_id
 *      MAILCHIMP_SERVER     = us21
 * 3. Replace the placeholder block below with:
 *
 *    const r = await fetch(
 *      `https://${process.env.MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members`,
 *      {
 *        method: "POST",
 *        headers: {
 *          "Content-Type": "application/json",
 *          Authorization: `Bearer ${process.env.MAILCHIMP_API_KEY}`,
 *        },
 *        body: JSON.stringify({
 *          email_address: email,
 *          status: "subscribed",
 *          merge_fields: { FNAME: firstName },
 *        }),
 *      }
 *    );
 *    if (!r.ok && r.status !== 400) throw new Error("Mailchimp error");
 *
 * ─────────────────────────────────────────────────────────────────────────
 * OPTION C — Any other provider (Resend, Beehiiv, Loops, Buttondown, etc.)
 * ─────────────────────────────────────────────────────────────────────────
 * The shape is the same: read firstName + email, POST to the provider's
 * subscribe endpoint with your secret key from process.env, throw on failure.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const { firstName, email } = await request.json();

    if (
      typeof firstName !== "string" ||
      typeof email !== "string" ||
      !firstName.trim() ||
      !EMAIL_RE.test(email)
    ) {
      return NextResponse.json(
        { error: "A first name and a valid email are required." },
        { status: 400 }
      );
    }

    // ── Subscribe via Kit (ConvertKit) V3 API.
    const apiKey = process.env.CONVERTKIT_API_KEY;
    const formId = process.env.CONVERTKIT_FORM_ID;

    if (!apiKey || !formId) {
      console.error("[OMB] Missing CONVERTKIT_API_KEY or CONVERTKIT_FORM_ID");
      return NextResponse.json(
        { error: "Subscription is not configured yet." },
        { status: 500 }
      );
    }

    const kitRes = await fetch(
      `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          api_key: apiKey,
          email: email.trim().toLowerCase(),
          first_name: firstName.trim(),
        }),
      }
    );

    if (!kitRes.ok) {
      console.error("[OMB] Kit subscribe failed:", kitRes.status);
      return NextResponse.json(
        { error: "Unable to process request." },
        { status: 502 }
      );
    }
    // ── END Kit

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to process request." },
      { status: 500 }
    );
  }
}
