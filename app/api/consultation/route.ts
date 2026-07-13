import { NextResponse } from 'next/server';
import { sendEmail } from '../mail';

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    // Prepare and send email notification
    const subject = `New Free Consultation Request - ${payload.firstName} ${payload.lastName} (${payload.therapistName})`;
    const bodyHtml = `
      <h2>New Free Consultation Request</h2>
      <p>A client has requested a free 15-minute consultation phone assessment.</p>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px; font-family: sans-serif; font-size: 14px;">
        <tr style="background-color: #f9f9f9;">
          <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold; width: 200px;">Therapist</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd;">${payload.therapistName}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold;">Client Name</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd;">${payload.firstName} ${payload.lastName}</td>
        </tr>
        <tr style="background-color: #f9f9f9;">
          <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold;">Email</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd;"><a href="mailto:${payload.email}">${payload.email}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd;"><a href="tel:${payload.phone}">${payload.phone}</a></td>
        </tr>
        <tr style="background-color: #f9f9f9;">
          <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold;">Preferred Date</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd;">${payload.date}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold;">Preferred Time Slot</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd;">${payload.time}</td>
        </tr>
      </table>
    `;

    const bodyText = `
New Free Consultation Request
Therapist: ${payload.therapistName}
Client Name: ${payload.firstName} ${payload.lastName}
Email: ${payload.email}
Phone: ${payload.phone}
Preferred Date: ${payload.date}
Preferred Time Slot: ${payload.time}
    `.trim();

    try {
      await sendEmail(subject, bodyHtml, bodyText, payload.email);
    } catch (mailErr) {
      console.error('Failed to send consultation notification email:', mailErr);
      return NextResponse.json({ error: 'Failed to send consultation email.' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('API Consultation Error:', error);
    return NextResponse.json({ error: error.message || 'An error occurred processing the consultation.' }, { status: 500 });
  }
}
