import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, course, message } = body;

        // Create a transporter using environment variables
        // If no variables are found, it will log to console as a fallback
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || "smtp.gmail.com",
            port: Number(process.env.SMTP_PORT) || 587,
            secure: process.env.SMTP_SECURE === "true",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: process.env.SMTP_FROM || `"Institutional Portal" <${process.env.SMTP_USER}>`,
            to: "dhineshbabu9025@gmail.com",
            subject: `New Inquiry: ${course || "General Inquiry"} - ${name}`,
            text: `
                New contact form submission:
                Name: ${name}
                Email: ${email}
                Phone: ${phone}
                Course/Specialty: ${course}
                Message: ${message || "N/A"}
            `,
            html: `
                <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                    <h2 style="color: #0c1b3d;">New Inquiry Received</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Course/Specialty:</strong> ${course}</p>
                    <p><strong>Message:</strong> ${message || "N/A"}</p>
                    <hr style="border: 0; border-top: 1px solid #eee;" />
                    <p style="font-size: 12px; color: #666;">This is an automated notification from the Institutional Portal.</p>
                </div>
            `,
        };

        // If credentials exist, send the email
        if (process.env.SMTP_USER && process.env.SMTP_PASS) {
            await transporter.sendMail(mailOptions);
        } else {
            console.log("SMTP credentials missing. Logging submission to console:", { name, email, phone, course, message });
            // Simulate work if no SMTP provided to show "success" in UI for demo purposes
            await new Promise((resolve) => setTimeout(resolve, 800));
        }

        return NextResponse.json({ message: "Inquiry received successfully" }, { status: 200 });
    } catch (error) {
        console.error("Email error:", error);
        return NextResponse.json({ error: "Failed to process inquiry" }, { status: 500 });
    }
}
