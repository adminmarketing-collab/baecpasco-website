import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function GET() {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["lgbasalo@gmail.com"],
      subject: "Direct Test",
      html: "<p>Direct API test</p>",
    });

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}