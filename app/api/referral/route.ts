import { NextResponse } from 'next/server';
import { sendEmail } from '../mail';

const CRM_BOOK_URL =
  process.env.CRM_BOOK_URL || 'https://admin.ontimetherapy.com/api/book';

export async function POST(request: Request) {
  try {
    const payload = await request.json();

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
          ...payload,
          therapyType: payload.therapyType || 'Self-Referral Intake',
          name: payload.fullName || payload.name,
        }),
      });

      crmResponseOk = response.ok;
      if (response.ok) {
        crmData = await response.json();
      } else {
        crmErrorText = await response.text();
        console.error('CRM Referral API Error response:', crmErrorText);
      }
    } catch (crmErr) {
      console.error('Failed to forward self-referral to CRM API:', crmErr);
    }

    const leadId = crmData.leadId || undefined;

    // 2. Staff Email Notification
    const staffSubject = `New Client Self-Referral - ${payload.fullName}`;
    const staffHtml = `
      <h2>New Client Self-Referral Submission</h2>
      ${leadId ? `<p><strong>Reference ID / Lead ID:</strong> ${leadId}</p>` : ''}
      <table style="border-collapse: collapse; width: 100%; max-width: 650px; font-family: sans-serif; font-size: 14px;">
        <tr style="background-color: #f9f9f9;">
          <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold; width: 220px;">Full Name</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd;">${payload.fullName}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold;">Date of Birth</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd;">${payload.dob}</td>
        </tr>
        <tr style="background-color: #f9f9f9;">
          <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold;">Address</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd;">${payload.address}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd;"><a href="tel:${payload.phone}">${payload.phone}</a></td>
        </tr>
        <tr style="background-color: #f9f9f9;">
          <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold;">Emergency Contact</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd;">${payload.emergencyContact}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold;">Email</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd;"><a href="mailto:${payload.email}">${payload.email}</a></td>
        </tr>
        <tr style="background-color: #f9f9f9;">
          <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold;">Best Time to Contact</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd;">${payload.bestTimeToContact || 'N/A'}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold;">Preferred Method</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd;">${payload.preferredMethod}</td>
        </tr>
        <tr style="background-color: #f9f9f9;">
          <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold;">Presenting Issue</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd; white-space: pre-wrap;">${payload.presentingIssue}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold;">Previous Counselling</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd; white-space: pre-wrap;">${payload.previousCounselling || 'None'}</td>
        </tr>
        <tr style="background-color: #f9f9f9;">
          <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold;">Medical / Psychiatric History</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd; white-space: pre-wrap;">${payload.medicalHistory || 'None'}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold;">Upcoming Appointments</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd;">${payload.upcomingAppointments || 'None'}</td>
        </tr>
        <tr style="background-color: #f9f9f9;">
          <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold;">Risk History</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd; white-space: pre-wrap;">${payload.riskHistory || 'None'}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold;">GP Details</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd; white-space: pre-wrap;">${payload.gpDetails}</td>
        </tr>
        <tr style="background-color: #f9f9f9;">
          <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold;">GP Contact Consent</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd;"><strong>${payload.gpConsent}</strong></td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold;">Electronic Signature</td>
          <td style="padding: 8px 12px; border: 1px solid #ddd;">${payload.signature} (Date: ${payload.signDate})</td>
        </tr>
      </table>
      ${!crmResponseOk ? `<p style="color:#e53e3e; margin-top:1rem;"><strong>Note:</strong> CRM sync failed (${crmErrorText || 'unreachable'}). Manual entry may be required.</p>` : ''}
    `;

    const staffText = `
New Client Self-Referral Submission
${leadId ? `Reference ID: ${leadId}` : ''}
Full Name: ${payload.fullName}
DOB: ${payload.dob}
Address: ${payload.address}
Phone: ${payload.phone}
Emergency Contact: ${payload.emergencyContact}
Email: ${payload.email}
Best Time to Contact: ${payload.bestTimeToContact || 'N/A'}
Preferred Method: ${payload.preferredMethod}
Presenting Issue: ${payload.presentingIssue}
Previous Counselling: ${payload.previousCounselling || 'None'}
Medical/Psychiatric History: ${payload.medicalHistory || 'None'}
Upcoming Appointments: ${payload.upcomingAppointments || 'None'}
Risk History: ${payload.riskHistory || 'None'}
GP Details: ${payload.gpDetails}
GP Consent: ${payload.gpConsent}
Signature: ${payload.signature} (${payload.signDate})
    `.trim();

    try {
      await sendEmail(staffSubject, staffHtml, staffText, payload.email, 'contact@ontimetherapy.com');
    } catch (mailErr) {
      console.error('Failed to send staff referral email:', mailErr);
    }

    // 3. Client Confirmation Email
    if (payload.email) {
      const clientSubject = `Self-Referral Confirmation - Ontime Therapy Services`;
      const clientHtml = `
        <div style="font-family: sans-serif; max-width: 600px; color: #333; line-height: 1.6;">
          <h2 style="color: #ff7824;">Thank You for Your Self-Referral</h2>
          <p>Dear ${payload.fullName},</p>
          <p>We have successfully received your confidential client self-referral form.</p>
          ${leadId ? `<p><strong>Your Reference ID:</strong> ${leadId}</p>` : ''}
          <p>Mr Anotida Macdonald aims to review your referral details and contact you within <strong>48 hours</strong> to discuss the next steps for your care.</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 1.5rem 0;" />
          <p style="font-size: 13px; color: #666;">
            <strong>Confidentiality Notice:</strong> All information submitted is protected under UK/Jersey data protection laws, stored on encrypted systems, and handled in accordance with ACCPH & NMC ethical standards.
          </p>
          <p style="font-size: 13px; color: #d9534f;">
            <strong>Crisis Support:</strong> Outpatient counselling is not for acute crisis. If you are experiencing an emergency, please dial <strong>999</strong> or contact the Samaritans on <strong>116 123</strong> immediately.
          </p>
          <p>Warm regards,<br /><strong>Ontime Therapy Services</strong><br /><a href="https://ontimetherapy.com" style="color: #ff7824;">ontimetherapy.com</a></p>
        </div>
      `;
      const clientText = `
Dear ${payload.fullName},

We have successfully received your confidential client self-referral form.
${leadId ? `Reference ID: ${leadId}` : ''}

Mr Anotida Macdonald aims to review your referral details and contact you within 48 hours to discuss next steps.

Ontime Therapy Services
contact@ontimetherapy.com
      `.trim();

      try {
        await sendEmail(clientSubject, clientHtml, clientText, 'contact@ontimetherapy.com', payload.email);
      } catch (clientMailErr) {
        console.error('Failed to send client confirmation email:', clientMailErr);
      }
    }

    return NextResponse.json({
      success: true,
      ...(leadId ? { leadId } : {}),
      crmSynced: crmResponseOk,
    });
  } catch (error: any) {
    console.error('API Referral Error:', error);
    return NextResponse.json(
      { error: error.message || 'An error occurred processing the referral.' },
      { status: 500 }
    );
  }
}
