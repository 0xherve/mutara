import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body: unknown = await req.json();
    // Forward to Make.com webhook URL (to be configured via env)
    const webhookUrl = process.env.MAKE_WEBHOOK_URL;
    if (!webhookUrl) {
      return NextResponse.json({ error: "Webhook URL not configured" }, { status: 500 });
    }

    const forward = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!forward.ok) {
      const text = await forward.text();
      return NextResponse.json({ error: "Webhook error", details: text }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Invalid request";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}


