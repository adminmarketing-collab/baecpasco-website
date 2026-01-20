import { NextResponse } from "next/server";

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

    // For now, we just console.log (you'll replace this later with a real email service)
    console.log("📩 New Contact Form Submission:", emailBody);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}
