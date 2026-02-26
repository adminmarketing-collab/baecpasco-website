import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.re_P5Vbc21A_7CSkePyr1joypX9W2osEw8h3);

export async function POST(req) {
  try {
    const data = await req.json();

    const emailBody = `
New Contact Form Message

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}
Service Interested In: ${data.service || "Not selected"}

Message:
${data.message}
    `;

    await resend.emails.send({
      from: "Website Contact <noreply@send.baecpasco.com>",
      to: ["admin.marketing@baecpasco.com"], // 👈 CHANGE to client email
      reply_to: data.email,
      subject: `New message from ${data.name}`,
      text: emailBody,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("EMAIL ERROR:", error);

    return NextResponse.json(
      { success: false, message: "Email failed to send" },
      { status: 500 }
    );
  }
}

