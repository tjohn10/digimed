import { NextResponse } from 'next/server';
import { sendEmail } from '../mail';

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    // 1. Forward request to CRM API
    let crmData: { leadId?: string } = {};
    let crmResponseOk = false;
    let crmErrorText = '';

    try {
      const response = await fetch('https://ott-therapist-crm.vercel.app/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      crmResponseOk = response.ok;
      if (response.ok) {
        crmData = await response.json();
      } else {
        crmErrorText = await response.text();
        console.error('CRM API Error response:', crmErrorText);
      }
    } catch (crmErr) {
      console.error('Failed to forward booking to CRM API:', crmErr);
    }

    const leadId = crmData.leadId || 'N/A';

    // 2. Prepare and send email notification
    const subject = `New Appointment Booking - ${payload.name} (${payload.therapyType})`;
    const bodyHtml = `
      <h2>New Appointment Intake Booking</h2>
      <p><strong>Reference ID / Lead ID:</strong> ${leadId}</p>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px; font-family: sans-serif; font-size: 14px;">
        <tr style="background-color: #f9f9f9;">
          <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold; width: 200px;">Name</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd;">${payload.name}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold;">Email</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd;"><a href="mailto:${payload.email}">${payload.email}</a></td>
        </tr>
        <tr style="background-color: #f9f9f9;">
          <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd;"><a href="tel:${payload.phone}">${payload.phone}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold;">Therapy Required</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd;">${payload.therapyType}</td>
        </tr>
        <tr style="background-color: #f9f9f9;">
          <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold;">Clinical Indicator / Diagnosis</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd;">${payload.diagnosis}${payload.diagnosisOther ? ` (Other: ${payload.diagnosisOther})` : ''}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold;">Preferred Method</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd;">${payload.method}</td>
        </tr>
        <tr style="background-color: #f9f9f9;">
          <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold;">Funding Choice</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd;">${payload.payment}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold;">Preferred Appointment</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd;">${payload.preferredDate} at ${payload.preferredTime}</td>
        </tr>
        <tr style="background-color: #f9f9f9;">
          <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold;">Sharing Consent</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd;">${payload.sharingConsent}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold;">Additional Context / Info</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd; white-space: pre-wrap;">${payload.additionalInfo || 'None'}</td>
        </tr>
      </table>
    `;

    const bodyText = `
New Appointment Intake Booking
Reference ID / Lead ID: ${leadId}
Name: ${payload.name}
Email: ${payload.email}
Phone: ${payload.phone}
Therapy Required: ${payload.therapyType}
Clinical Indicator / Diagnosis: ${payload.diagnosis}${payload.diagnosisOther ? ` (Other: ${payload.diagnosisOther})` : ''}
Preferred Method: ${payload.method}
Funding Choice: ${payload.payment}
Preferred Appointment: ${payload.preferredDate} at ${payload.preferredTime}
Sharing Consent: ${payload.sharingConsent}
Additional Context / Info: ${payload.additionalInfo || 'None'}
    `.trim();

    try {
      await sendEmail(subject, bodyHtml, bodyText, payload.email);
    } catch (mailErr) {
      console.error('Failed to send booking notification email:', mailErr);
    }

    if (!crmResponseOk) {
      return NextResponse.json(
        { error: crmErrorText || 'Failed to submit intake form to CRM, but email notification was sent.' }, 
        { status: 500 }
      );
    }

    return NextResponse.json(crmData);
  } catch (error: any) {
    console.error('API Book Error:', error);
    return NextResponse.json({ error: error.message || 'An error occurred processing the booking.' }, { status: 500 });
  }
}
