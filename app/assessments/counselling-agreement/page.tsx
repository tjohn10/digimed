"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, Printer, Shield, CheckCircle2, AlertTriangle, 
  MessageSquare, Video, Mail, Phone, Lock, Heart, FileText, ArrowRight, UserCheck
} from 'lucide-react';

export default function CounsellingAgreementPage() {
  const [agreed, setAgreed] = useState(false);
  const [clientSig, setClientSig] = useState('');
  const [signDate, setSignDate] = useState(new Date().toISOString().split('T')[0]);

  return (
    <section className="view-section active" style={{ maxWidth: '1200px', margin: '2rem auto', padding: '0 1.5rem', width: '100%' }}>
      
      {/* Top Controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }} className="no-print">
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Link href="/assessments" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.65rem 1.25rem' }}>
            <ArrowLeft size={16} />
            Assessments Hub
          </Link>
          <Link href="/self-referral" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.65rem 1.25rem' }}>
            <FileText size={16} />
            Client Self-Referral Form <ArrowRight size={14} />
          </Link>
        </div>

        <button className="btn btn-secondary" onClick={() => window.print()} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.65rem 1.5rem' }}>
          <Printer size={16} />
          Print / Save Agreement (PDF)
        </button>
      </div>

      <div className="glass-panel responsive-panel" style={{ border: '1px solid var(--border)', background: 'var(--bg-card)', borderRadius: '20px', padding: '3.5rem 3rem' }}>
        
        {/* Document Header */}
        <div style={{ textAlign: 'center', borderBottom: '2px solid var(--border)', paddingBottom: '2.5rem', marginBottom: '2.5rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '1.5px', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
            Ontime Therapy Services
          </span>
          <h1 style={{ fontSize: '2.6rem', fontWeight: 800, margin: '0 0 0.5rem', fontFamily: 'var(--font-heading)', color: 'var(--text-main)', lineHeight: 1.2 }}>
            Online Counselling Agreement
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginTop: '0.75rem', fontWeight: 500 }}>
            Practice Policy, Person-Centred Therapeutic Framework &amp; Confidentiality Standards
          </p>
        </div>

        {/* Section 1: About Me */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ padding: '0.5rem', borderRadius: '8px', background: 'rgba(255, 120, 36, 0.08)', color: 'var(--primary)' }}>
              <Shield size={20} />
            </div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: 0, fontFamily: 'var(--font-heading)', color: 'var(--text-main)' }}>
              About Me
            </h2>
          </div>
          <p style={{ color: 'var(--text-main)', fontSize: '0.98rem', lineHeight: 1.7, margin: '0 0 1rem' }}>
            My name is <strong>Anotida Macdonald</strong>, an ACCPH‑accredited Counsellor &amp; Psychotherapist and NMC‑registered Mental Health Nurse. I adhere to the <strong>ACCPH Ethical Framework for Good Practice</strong> and the <strong>ACCPH Guidelines for Online Counselling and Psychotherapy</strong>.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', margin: 0 }}>
            More information on accreditation standards can be found at:{' '}
            <a href="https://www.accph.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>
              www.accph.org.uk
            </a>
          </p>
        </div>

        {/* Section 2: What is Person-Centred Counselling? */}
        <div style={{ marginBottom: '2.5rem', background: 'rgba(255, 120, 36, 0.02)', padding: '2rem', borderRadius: '14px', border: '1px solid rgba(255, 120, 36, 0.15)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ padding: '0.5rem', borderRadius: '8px', background: 'rgba(255, 120, 36, 0.08)', color: 'var(--primary)' }}>
              <Heart size={20} />
            </div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: 0, fontFamily: 'var(--font-heading)', color: 'var(--text-main)' }}>
              What is Person‑Centred Counselling?
            </h2>
          </div>
          <p style={{ color: 'var(--text-main)', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '1rem' }}>
            The Person‑Centred Approach aligns closely with my therapeutic philosophy. At its core is the belief that people are inherently good and capable of growth when offered the right conditions.
          </p>
          <p style={{ color: 'var(--text-main)', fontSize: '0.98rem', fontWeight: 600, marginBottom: '0.5rem' }}>
            This approach emphasises:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }} className="pillar-subgrid">
            <div style={{ padding: '0.85rem 1.15rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid var(--border)' }}>
              <strong style={{ color: 'var(--primary)', display: 'block', marginBottom: '0.2rem' }}>Honesty &amp; Authenticity</strong>
              <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Genuine and transparent engagement throughout our clinical relationship.</span>
            </div>
            <div style={{ padding: '0.85rem 1.15rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid var(--border)' }}>
              <strong style={{ color: 'var(--primary)', display: 'block', marginBottom: '0.2rem' }}>Non‑Judgement</strong>
              <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>An unconditionally safe space free from prejudice or criticism.</span>
            </div>
            <div style={{ padding: '0.85rem 1.15rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid var(--border)' }}>
              <strong style={{ color: 'var(--primary)', display: 'block', marginBottom: '0.2rem' }}>Acceptance</strong>
              <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Respecting and validating your individual life experiences and identity.</span>
            </div>
            <div style={{ padding: '0.85rem 1.15rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid var(--border)' }}>
              <strong style={{ color: 'var(--primary)', display: 'block', marginBottom: '0.2rem' }}>Client‑Led Pace</strong>
              <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>A therapeutic relationship where you lead the pace and direction of our work.</span>
            </div>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', fontStyle: 'italic', margin: 0 }}>
            My aim is to provide these conditions consistently throughout our work together.
          </p>
        </div>

        {/* Section 3: What is Online Counselling? & How It Works */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', fontFamily: 'var(--font-heading)', color: 'var(--text-main)', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>
            What is Online Counselling &amp; How It Works
          </h2>
          <p style={{ color: 'var(--text-main)', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Online counselling allows you to engage in therapy using digital communication tools such as Zoom, email, online chat, or webcam. You choose the method that feels most comfortable, as well as the time, place, and pace that best suits your needs.
          </p>

          {/* 3 Modalities Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }} className="modalities-grid">
            
            {/* 1. Online Chat Room */}
            <div className="glass-panel" style={{ padding: '1.75rem', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ padding: '0.6rem', borderRadius: '8px', background: 'rgba(255, 120, 36, 0.08)', color: 'var(--primary)', alignSelf: 'flex-start' }}>
                <MessageSquare size={22} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0, color: 'var(--text-main)' }}>Online Chat Room</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                You will receive access to a secure, encrypted login area where we meet at a pre‑arranged time. Sessions last <strong>50 minutes</strong>. A webcam is not required, and you may remain anonymous if you wish.
              </p>
            </div>

            {/* 2. Webcam or Audio (Zoom) */}
            <div className="glass-panel" style={{ padding: '1.75rem', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ padding: '0.6rem', borderRadius: '8px', background: 'rgba(6, 182, 212, 0.08)', color: 'var(--secondary)', alignSelf: 'flex-start' }}>
                <Video size={22} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0, color: 'var(--text-main)' }}>Webcam / Audio (Zoom)</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                Zoom allows us to meet face‑to‑face online. You will be guided through setting up a secure Zoom account. Sessions last <strong>50 minutes</strong>. You may choose audio‑only if preferred. Seeing your counsellor can enhance communication through tone of voice, facial expression, and other non‑verbal cues.
              </p>
            </div>

            {/* 3. Email Counselling */}
            <div className="glass-panel" style={{ padding: '1.75rem', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ padding: '0.6rem', borderRadius: '8px', background: 'rgba(255, 120, 36, 0.08)', color: 'var(--primary)', alignSelf: 'flex-start' }}>
                <Mail size={22} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0, color: 'var(--text-main)' }}>Email Counselling</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                Email counselling offers time to reflect before sending and between exchanges. I aim to respond within <strong>48 working hours</strong>. You will be guided in setting up a secure email account. <em>Note: Email counselling is not suitable for urgent or crisis situations.</em>
              </p>
            </div>

          </div>
        </div>

        {/* Section 4: Benefits & Things to Consider Grid */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="benefits-grid">
            
            {/* Benefits */}
            <div className="glass-panel" style={{ padding: '2rem', border: '1px solid var(--border)', borderLeft: '4px solid #10b981' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.25rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={22} /> Benefits of Online Counselling
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  "Access therapy from home at a time that suits you",
                  "Encrypted platforms provide confidentiality",
                  "No visibility entering a counselling practice",
                  "Ability to review written communication before sending",
                  "Flexible pace and structure",
                  "Writing may feel easier for some clients",
                  "Faster access to support",
                  "Choice of email, chat, audio, or webcam"
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'start', gap: '0.75rem', color: 'var(--text-main)', fontSize: '0.92rem', lineHeight: 1.5 }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', marginTop: '0.5rem', flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Things to Consider */}
            <div className="glass-panel" style={{ padding: '2rem', border: '1px solid var(--border)', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <AlertTriangle size={22} /> Things to Consider
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  "Your comfort with technology",
                  "Whether you prefer face‑to‑face interaction",
                  "Your ability to express yourself in writing",
                  "Whether your situation feels too complex for online work",
                  "Access to a private, uninterrupted space",
                  "Potential for misunderstanding in text‑based communication",
                  "Limited non‑verbal cues"
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'start', gap: '0.75rem', color: 'var(--text-main)', fontSize: '0.92rem', lineHeight: 1.5 }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)', marginTop: '0.5rem', flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Section 5: Confidentiality and Security */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{ padding: '0.5rem', borderRadius: '8px', background: 'rgba(6, 182, 212, 0.08)', color: 'var(--secondary)' }}>
              <Lock size={20} />
            </div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: 0, fontFamily: 'var(--font-heading)', color: 'var(--text-main)' }}>
              Confidentiality and Security
            </h2>
          </div>
          <p style={{ color: 'var(--text-main)', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '1rem' }}>
            You can read my privacy policy at:{' '}
            <a href="https://www.ontimetherapy.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>
              www.ontimetherapy.com/privacy
            </a>. All information shared with me is held in strict confidence and stored securely on a password‑protected drive.
          </p>
          <div style={{ background: 'rgba(239, 68, 68, 0.03)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '12px', padding: '1.5rem', marginBottom: '1.25rem' }}>
            <p style={{ color: '#ef4444', fontWeight: 700, fontSize: '0.98rem', margin: '0 0 0.5rem' }}>
              In line with ACCPH and NMC professional standards, confidentiality may be broken if:
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: 'var(--text-main)', fontSize: '0.94rem', lineHeight: 1.7, margin: 0 }}>
              <li>You disclose involvement in terrorism, money laundering, or drug trafficking.</li>
              <li>There is risk of harm to yourself or others.</li>
              <li>There is harm or abuse involving a minor or vulnerable adult.</li>
            </ul>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.6 }}>
            <li>• <strong>Secure Email:</strong> Email communication is encouraged through secure servers such as ProtonMail.</li>
            <li>• <strong>Clinical Supervision:</strong> Session material may be discussed in clinical supervision without identifying information. Supervisors adhere to the same strict confidentiality standards.</li>
            <li>• <strong>Encryption:</strong> Zoom counselling uses encrypted, secure enterprise connections.</li>
            <li>• <strong>Record Retention:</strong> Records are stored securely for <strong>7 years</strong> (or 7 years after a child turns 18) and then permanently deleted or shredded.</li>
            <li>• <strong>GP Coordination:</strong> If emergency support is needed, I may request consent to contact your GP or recommend alternative healthcare services.</li>
          </ul>
        </div>

        {/* Section 6: In an Emergency */}
        <div style={{ marginBottom: '2.5rem', padding: '2rem', background: 'rgba(239, 68, 68, 0.04)', borderRadius: '14px', borderLeft: '4px solid #ef4444', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <AlertTriangle size={24} color="#ef4444" />
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, margin: 0, fontFamily: 'var(--font-heading)', color: '#ef4444' }}>
              In an Emergency
            </h2>
          </div>
          <p style={{ color: 'var(--text-main)', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>
            <strong>Online counselling is not suitable if you are in crisis.</strong> Signs of crisis may include suicidal thoughts or intent to harm yourself or others.
          </p>
          <p style={{ color: 'var(--text-main)', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '1rem' }}>
            Please contact your local <strong>Accident &amp; Emergency (A&amp;E)</strong> department and ask for the crisis team, or call <strong>999</strong> immediately.
          </p>
          <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1.25rem', borderRadius: '10px', border: '1px solid var(--border)' }}>
            <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)', margin: '0 0 0.5rem' }}>
              Immediate 24/7 Helpline Support — Samaritans:
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', color: 'var(--text-muted)', fontSize: '0.92rem' }}>
              <span>Telephone: <strong style={{ color: 'var(--primary)' }}>08457 90 90 90</strong> or <strong style={{ color: 'var(--primary)' }}>116 123</strong> (Free UK)</span>
              <span>Email: <a href="mailto:jo@samaritans.org" style={{ color: 'var(--primary)', textDecoration: 'none' }}>jo@samaritans.org</a></span>
            </div>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5, marginTop: '1rem', marginBottom: 0 }}>
            All client material is treated confidentially and removed from my computer at the end of our work together. Records are stored securely using a client ID number.
          </p>
        </div>

        {/* Section 7: Conditions of Counselling */}
        <div style={{ marginBottom: '3rem', padding: '1.75rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '12px', border: '1px solid var(--border)' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.75rem', fontFamily: 'var(--font-heading)', color: 'var(--text-main)' }}>
            Conditions of Counselling
          </h2>
          <p style={{ color: 'var(--text-main)', fontSize: '0.96rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>
            • <strong>Session Recording:</strong> Please do <strong>not</strong> record sessions without prior written agreement.
          </p>
          <p style={{ color: 'var(--text-main)', fontSize: '0.96rem', lineHeight: 1.6, margin: 0 }}>
            • <strong>Questions or Queries:</strong> If you have questions about this agreement, please contact me:
            <br />
            Email: <a href="mailto:admin@ontimetherapy.com" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>admin@ontimetherapy.com</a> &nbsp;|&nbsp; Phone: <a href="tel:07497208249" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>07497208249</a>
          </p>
        </div>

        {/* Agreement Sign-off & Next Steps */}
        <div style={{ borderTop: '2px solid var(--border)', paddingTop: '2.5rem' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.25rem', fontFamily: 'var(--font-heading)', color: 'var(--text-main)' }}>
            Agreement Sign‑Off &amp; Referral Next Steps
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '2rem', marginBottom: '2.5rem' }} className="agreement-action-grid">
            
            {/* Quick Digital Acknowledgement */}
            <div style={{ padding: '1.75rem', background: 'rgba(255, 120, 36, 0.03)', borderRadius: '14px', border: '1px solid rgba(255, 120, 36, 0.2)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-main)' }}>
                Digital Agreement Confirmation
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <label style={{ display: 'flex', gap: '0.75rem', cursor: 'pointer', fontSize: '0.92rem', alignItems: 'start', lineHeight: 1.5, color: 'var(--text-main)' }}>
                  <input 
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    style={{ accentColor: 'var(--primary)', width: '18px', height: '18px', marginTop: '0.15rem', flexShrink: 0 }}
                  />
                  <span>
                    I confirm that I have read, understood, and agreed to the <strong>Ontime Therapy Online Counselling Agreement</strong>.
                  </span>
                </label>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.3rem', color: 'var(--text-muted)' }}>
                    Type Name to Sign
                  </label>
                  <input 
                    type="text" 
                    value={clientSig}
                    onChange={(e) => setClientSig(e.target.value)}
                    placeholder="e.g. /Your Full Name/"
                    style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg-panel)', color: 'var(--text-main)', fontFamily: 'cursive', fontSize: '1.1rem', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.3rem', color: 'var(--text-muted)' }}>
                    Date
                  </label>
                  <input 
                    type="date" 
                    value={signDate}
                    onChange={(e) => setSignDate(e.target.value)}
                    style={{ width: '100%', padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg-panel)', color: 'var(--text-main)', outline: 'none' }}
                  />
                </div>
              </div>
            </div>

            {/* Standalone Referral Form Callout */}
            <div style={{ padding: '1.75rem', background: 'rgba(6, 182, 212, 0.04)', borderRadius: '14px', border: '1px solid rgba(6, 182, 212, 0.2)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ padding: '0.5rem', background: 'rgba(6, 182, 212, 0.1)', color: 'var(--secondary)', borderRadius: '8px', display: 'inline-flex', marginBottom: '1rem' }}>
                  <FileText size={22} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0 0 0.5rem', color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>
                  Ready to register?
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, margin: '0 0 1.5rem' }}>
                  Complete our dedicated <strong>Client Self‑Referral Form</strong> to provide your contact details, presenting goals, medical history, and GP details.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <Link href="/self-referral" className="btn btn-primary" style={{ width: '100%', padding: '0.8rem', justifyContent: 'center', fontWeight: 700, gap: '0.5rem' }}>
                  Open Client Self-Referral Form <ArrowRight size={16} />
                </Link>
                <Link href="/book" className="btn btn-secondary" style={{ width: '100%', padding: '0.75rem', justifyContent: 'center', fontSize: '0.9rem' }}>
                  Book Direct Intake Consultation
                </Link>
              </div>
            </div>

          </div>

          <div style={{ textAlign: 'center', marginTop: '1.5rem' }} className="no-print">
            <button className="btn btn-secondary" onClick={() => window.print()} style={{ padding: '0.75rem 2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <Printer size={18} /> Print or Save Full Agreement (PDF)
            </button>
          </div>

        </div>

      </div>

      {/* Responsive and Print Styles */}
      <style jsx global>{`
        @media print {
          body {
            background: #ffffff !important;
            color: #000000 !important;
          }
          header, footer, .no-print, .btn, button {
            display: none !important;
          }
          .glass-panel {
            border: none !important;
            box-shadow: none !important;
            background: transparent !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          input, select, textarea {
            border: none !important;
            border-bottom: 1px solid #000000 !important;
            background: transparent !important;
            color: #000000 !important;
            border-radius: 0 !important;
            padding: 0.25rem 0 !important;
            font-size: 0.95rem !important;
          }
        }
        @media (max-width: 900px) {
          .modalities-grid,
          .benefits-grid,
          .pillar-subgrid,
          .agreement-action-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
        }
      `}</style>

    </section>
  );
}
