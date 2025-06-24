// app/api/contact/route.ts
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();

  // ———— Configure your SMTP transporter ————
  // For Gmail, you might need an App Password if 2FA is enabled
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,       // e.g. "smtp.gmail.com"
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,                      // true if port 465
    auth: {
      user: process.env.SMTP_USER,     // your Gmail address
      pass: process.env.SMTP_PASS,     // your Gmail app password
    },
  });

  // ———— Build the email ————
  const mailOptions = {
    from: `"Site Contact" <${process.env.SMTP_USER}>`,
    to: 'devs.technicalsociety@gmail.com',
    subject: `New message from ${name}`,
    text: `
Name: ${name}
Email: ${email}

Message:
${message}
    `.trim(),
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
    `,
  };

  // ———— Send it ————
  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Error sending mail:', err);
    return NextResponse.json({ error: 'Failed to send.' }, { status: 500 });
  }
}
