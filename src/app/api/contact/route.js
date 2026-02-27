import { NextResponse } from "next/server";
import { Resend } from "resend";

console.log("API route triggered");
console.log("API KEY:", process.env.RESEND_API_KEY);
const resend = new Resend(process.env.RESEND_API_KEY);

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
