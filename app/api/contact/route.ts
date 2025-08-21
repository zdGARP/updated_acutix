import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, helpType, additionalInfo, to, ...rest } = body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    let subject = 'New Contact Form Submission';
    let text = '';

    if (helpType) {
      subject = `Contact: ${helpType}`;
      text = `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nPurpose: ${helpType}\nMessage: ${additionalInfo}`;
    } else if (rest.type === 'internship') {
      subject = 'Internship Application';
      text = JSON.stringify(body, null, 2);
    } else if (rest.type === 'meetup') {
      subject = 'Tech Meetup Request';
      text = JSON.stringify(body, null, 2);
    } else {
      text = JSON.stringify(body, null, 2);
    }

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER || to,
      subject,
      text
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email', details: String(error) }, { status: 500 });
  }
}
