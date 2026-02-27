import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req) {
  try {
    console.log("API route triggered");
    console.log("API KEY:", process.env.RESEND_API_KEY);

    const resend = new Resend(process.env.RESEND_API_KEY);

    const data = await req.json();

    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["lgbasalo@gmail.com"],
      subject: "Production Test Email",
      html: "<p>This is a production test.</p>",
    });

    console.log("RESEND RESPONSE:", response);

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("RESEND ERROR:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}