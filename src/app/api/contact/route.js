import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const data = await req.json();
    const selectedServices = Array.isArray(data.services)
      ? data.services.join(", ")
      : data.service || "Not selected";

    const emailBody = `
New Contact Form Message

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}
Service Interested In: ${selectedServices}

Message:
${data.message}
    `;

    await resend.emails.send({
      from: "Website Contact <noreply@baecpasco.com>",
      to: "admin.marketing@baecpasco.com",
      subject: "New Contact Form Message",
      text: emailBody,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Email failed to send" },
      { status: 500 }
    );
  }
}

