import { NextResponse } from 'next/server';
import { sendEmail } from '../mail';

const CRM_BOOK_URL =
  process.env.CRM_BOOK_URL || 'https://admin.ontimetherapy.com/api/book';

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const fullName = `${payload.firstName} ${payload.lastName}`.trim();

    // 1. Forward request to the admin CRM (best-effort – never block submission)
    let crmData: { leadId?: string } = {};
    let crmResponseOk = false;
    let crmErrorText = '';

    try {
      const response = await fetch(CRM_BOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: fullName,
          email: payload.email,
          phone: payload.phone,
          therapyType: `Free Consultation (${payload.therapistName})`,
          preferredDate: payload.date,
          preferredTime: payload.time,
          diagnosis: 'Initial Triage Consultation',
          method: 'Phone Assessment',
          payment: 'Free Consultation'
        }),
      });

      crmResponseOk = response.ok;
      if (response.ok) {
        crmData = await response.json();
      } else {
        crmErrorText = await response.text();
        console.error('CRM Consultation API Error response:', crmErrorText);
      }
    } catch (crmErr) {
      console.error('Failed to forward consultation to CRM API:', crmErr);
    }

    const leadId = crmData.leadId || undefined;

    // 2. Staff Email Notification
    const staffSubject = `New Free Consultation Request - ${fullName} (${payload.therapistName})`;
    const staffHtml = `
      <h2>New Free Consultation Request</h2>
      ${leadId ? `<p><strong>Reference ID / Lead ID:</strong> ${leadId}</p>` : ''}
      <p>A client has requested a free 15-minute consultation phone assessment.</p>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px; font-family: sans-serif; font-size: 14px;">
        <tr style="background-color: #f9f9f9;">
          <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold; width: 200px;">Therapist</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd;">${payload.therapistName}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold;">Client Name</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd;">${fullName}</td>
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
      ${!crmResponseOk ? `<p style="color:#e53e3e; margin-top:1rem;"><strong>Note:</strong> CRM sync failed (${crmErrorText || 'unreachable'}). Manual entry may be required.</p>` : ''}
    `;

    const staffText = `
New Free Consultation Request
${leadId ? `Reference ID: ${leadId}` : ''}
Therapist: ${payload.therapistName}
Client Name: ${fullName}
Email: ${payload.email}
Phone: ${payload.phone}
Preferred Date: ${payload.date}
Preferred Time Slot: ${payload.time}
    `.trim();

    try {
      await sendEmail(staffSubject, staffHtml, staffText, payload.email, 'contact@ontimetherapy.com');
    } catch (mailErr) {
      console.error('Failed to send staff consultation email:', mailErr);
    }

    // 3. Client Confirmation Email
    if (payload.email) {
      const clientSubject = `Consultation Request Confirmation - Ontime Therapy`;
      const clientHtml = `
        <div style="font-family: sans-serif; max-width: 600px; color: #333; line-height: 1.6;">
          <h2 style="color: #ff7824;">Consultation Booking Received</h2>
          <p>Dear ${payload.firstName},</p>
          <p>Thank you for requesting a free 15-minute phone consultation with <strong>${payload.therapistName}</strong>.</p>
          ${leadId ? `<p><strong>Booking Reference ID:</strong> ${leadId}</p>` : ''}
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin: 15px 0; border: 1px solid #eee;">
            <p style="margin: 5px 0;"><strong>Requested Date:</strong> ${payload.date}</p>
            <p style="margin: 5px 0;"><strong>Requested Time Slot:</strong> ${payload.time}</p>
            <p style="margin: 5px 0;"><strong>Contact Phone:</strong> ${payload.phone}</p>
          </div>
          <p>A practitioner will call you on your phone number at the requested time to conduct your consultation.</p>
          <p>Warm regards,<br /><strong>Ontime Therapy Services</strong><br /><a href="https://ontimetherapy.com" style="color: #ff7824;">ontimetherapy.com</a></p>
        </div>
      `;
      const clientText = `
Dear ${payload.firstName},

Thank you for requesting a free 15-minute phone consultation with ${payload.therapistName}.
${leadId ? `Booking Reference ID: ${leadId}` : ''}
Requested Date: ${payload.date}
Requested Time Slot: ${payload.time}
Contact Phone: ${payload.phone}

A practitioner will call you at the requested time.

Ontime Therapy Services
      `.trim();

      try {
        await sendEmail(clientSubject, clientHtml, clientText, 'contact@ontimetherapy.com', payload.email);
      } catch (clientMailErr) {
        console.error('Failed to send client consultation confirmation email:', clientMailErr);
      }
    }

    return NextResponse.json({
      success: true,
      ...(leadId ? { leadId } : {}),
      crmSynced: crmResponseOk,
    });
  } catch (error: any) {
    console.error('API Consultation Error:', error);
    return NextResponse.json({ error: error.message || 'An error occurred processing the consultation.' }, { status: 500 });
  }
}
