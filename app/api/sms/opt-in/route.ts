import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      firstName,
      lastName,
      phone,
      email,
      consent,
      consentText,
      source,
    } = body ?? {};

    if (!firstName || !phone || consent !== true) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Basic E.164 check
    if (!/^\+\d{10,15}$/.test(phone)) {
      return NextResponse.json(
        { error: "Phone must be in E.164 format (ex: +15555555555)." },
        { status: 400 }
      );
    }

    // TODO: Persist to DB (recommended)
    // Example fields to store:
    // - phone, email, firstName, lastName
    // - consentText, consentAt (new Date()), ip/userAgent (if desired)
    // - source (sms-opt-in-page)
    // - status: "opted_in"
    //
    // IMPORTANT: Twilio loves seeing that you store consent timestamps + language.

    return NextResponse.json({
      ok: true,
      saved: {
        firstName,
        lastName: lastName || null,
        phone,
        email: email || null,
        consentText: consentText || null,
        source: source || null,
      },
    });
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message || "Server error." },
      { status: 500 }
    );
  }
}