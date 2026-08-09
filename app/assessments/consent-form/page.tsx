"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Printer, CheckCircle } from 'lucide-react';

export default function ClientConsentForm() {
  const [consentRoutine, setConsentRoutine] = useState<string | null>(null);
  const [consentSafeguarding, setConsentSafeguarding] = useState<string | null>(null);
  
  const [clientName, setClientName] = useState('');
  const [clientSig, setClientSig] = useState('');
  const [clientDate, setClientDate] = useState(new Date().toISOString().split('T')[0]);

  const [clinicianName, setClinicianName] = useState('Anotida Macdonald Nduna');
  const [clinicianSig, setClinicianSig] = useState('A. M. Nduna');
  const [clinicianDate, setClinicianDate] = useState(new Date().toISOString().split('T')[0]);

  return (
    <section className="view-section active" style={{ maxWidth: '1150px', margin: '2rem auto', padding: '0 1.5rem', width: '100%' }}>
      
      {/* Back link & Print Action */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }} className="no-print">
        <Link href="/assessments" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          <ArrowLeft size={16} />
          Back to Assessments
        </Link>
        <button className="btn btn-primary" onClick={() => window.print()} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          <Printer size={16} />
          Print / Save PDF
        </button>
      </div>

      <div className="glass-panel responsive-panel" style={{ border: '1px solid var(--border)', background: 'var(--bg-card)', borderRadius: '16px' }}>
        
        {/* Document Header */}
        <div style={{ textAlign: 'center', borderBottom: '2px solid var(--border)', paddingBottom: '2rem', marginBottom: '2.5rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '1.5px', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>Clinical Documentation</span>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 800, margin: 0, fontFamily: 'var(--font-heading)', color: 'var(--text-main)' }}>Consent to Share Information & Safeguarding Statement</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginTop: '0.5rem', fontWeight: 500 }}>Ontime Therapy – Client Consent Form</p>
        </div>

        {/* Section 1 */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
            1. Confidentiality & Data Protection (UK & Jersey)
          </h3>
          <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>
            Ontime Therapy is committed to protecting your personal information in accordance with:
          </p>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem', listStyleType: 'disc' }}>
            <li>UK GDPR</li>
            <li>Data Protection Act 2018 (UK)</li>
            <li>Data Protection (Jersey) Law 2018</li>
            <li>Relevant professional codes of practice and safeguarding legislation</li>
          </ul>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, background: 'rgba(255, 255, 255, 0.02)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
            Your information is stored securely and used only for the purpose of providing safe, effective therapeutic support. You have the right to access your data, request corrections, and withdraw consent for information sharing unless safeguarding duties apply.
          </p>
        </div>

        {/* Section 2 */}
        <div style={{ marginBottom: '2.5rem', padding: '1.5rem', background: 'rgba(255, 120, 36, 0.02)', borderRadius: '10px', border: '1px solid rgba(255, 120, 36, 0.15)' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
            2. Consent to Share Information (Routine Care)
          </h3>
          <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
            To ensure continuity of care, it may be helpful to share relevant information with other professionals involved in your support. This may include your GP, CAMHS, mental-health services, school, social care, or other agencies in the UK or Jersey, depending on your location and care pathway.
          </p>
          
          <div style={{ marginTop: '1.5rem' }}>
            <span style={{ display: 'block', fontSize: '0.92rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-main)' }}>
              Please indicate your consent:
            </span>
            <p style={{ fontSize: '0.95rem', fontStyle: 'italic', marginBottom: '1rem', color: 'var(--text-main)' }}>
              I consent to Ontime Therapy sharing relevant information with other professionals involved in my care.
            </p>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)' }}>
                <input 
                  type="radio" 
                  name="routine-consent" 
                  checked={consentRoutine === 'Yes'}
                  onChange={() => setConsentRoutine('Yes')}
                  style={{ accentColor: 'var(--primary)', width: '18px', height: '18px' }}
                />
                ☐ Yes
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)' }}>
                <input 
                  type="radio" 
                  name="routine-consent" 
                  checked={consentRoutine === 'No'}
                  onChange={() => setConsentRoutine('No')}
                  style={{ accentColor: 'var(--primary)', width: '18px', height: '18px' }}
                />
                ☐ No
              </label>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div style={{ marginBottom: '2.5rem', padding: '1.5rem', background: 'rgba(6, 182, 212, 0.02)', borderRadius: '10px', border: '1px solid rgba(6, 182, 212, 0.15)' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
            3. Safeguarding & Risk (UK & Jersey)
          </h3>
          <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>
            Confidentiality has important legal limits. Under UK and Jersey safeguarding frameworks, information may need to be shared without your consent if there is a concern that you or someone else is at risk of harm. This includes:
          </p>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem', listStyleType: 'disc' }}>
            <li>Risk of suicide or self-harm</li>
            <li>Risk of harm to others</li>
            <li>Concerns about abuse or neglect</li>
            <li>Significant risk to a child or vulnerable adult</li>
            <li>Situations requiring immediate protection under UK or Jersey safeguarding law</li>
          </ul>
          <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
            Where possible, Ontime Therapy will discuss this with you before sharing information, unless doing so increases risk.
          </p>

          <div style={{ marginTop: '1.5rem', borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
            <span style={{ display: 'block', fontSize: '0.92rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-main)' }}>
              Please indicate your understanding and consent:
            </span>
            <p style={{ fontSize: '0.95rem', fontStyle: 'italic', marginBottom: '1rem', color: 'var(--text-main)' }}>
              I understand and consent to information being shared without my permission if there is a safeguarding or risk concern, in line with UK and Jersey safeguarding law.
            </p>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)' }}>
                <input 
                  type="radio" 
                  name="safeguarding-consent" 
                  checked={consentSafeguarding === 'Yes'}
                  onChange={() => setConsentSafeguarding('Yes')}
                  style={{ accentColor: 'var(--primary)', width: '18px', height: '18px' }}
                />
                ☐ Yes
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)' }}>
                <input 
                  type="radio" 
                  name="safeguarding-consent" 
                  checked={consentSafeguarding === 'No'}
                  onChange={() => setConsentSafeguarding('No')}
                  style={{ accentColor: 'var(--primary)', width: '18px', height: '18px' }}
                />
                ☐ No
              </label>
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>
            4. Declarations & Signatures
          </h3>
          
          <div className="signatures-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }}>
            
            {/* Client Signature Area */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', background: 'rgba(255, 255, 255, 0.01)', padding: '1.25rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
              <h4 style={{ margin: '0 0 0.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.25rem', fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)' }}>Client / Parent / Carer</h4>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.25rem', color: 'var(--text-muted)' }}>Name</label>
                <input 
                  type="text" 
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Type Full Name"
                  style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--border)', background: 'var(--bg-panel)', color: 'var(--text-main)', outline: 'none' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.25rem', color: 'var(--text-muted)' }}>Digital Signature (Type to Sign)</label>
                <input 
                  type="text" 
                  value={clientSig}
                  onChange={(e) => setClientSig(e.target.value)}
                  placeholder="e.g. /John Doe/"
                  style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--border)', background: 'var(--bg-panel)', color: 'var(--text-main)', fontFamily: 'cursive', outline: 'none' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.25rem', color: 'var(--text-muted)' }}>Date</label>
                <input 
                  type="date" 
                  value={clientDate}
                  onChange={(e) => setClientDate(e.target.value)}
                  style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--border)', background: 'var(--bg-panel)', color: 'var(--text-main)', outline: 'none' }}
                />
              </div>
            </div>

            {/* Clinician Signature Area */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', background: 'rgba(255, 255, 255, 0.01)', padding: '1.25rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
              <h4 style={{ margin: '0 0 0.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.25rem', fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)' }}>Clinician / Practitioner</h4>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.25rem', color: 'var(--text-muted)' }}>Name</label>
                <input 
                  type="text" 
                  value={clinicianName}
                  onChange={(e) => setClinicianName(e.target.value)}
                  placeholder="Practitioner Name"
                  style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--border)', background: 'var(--bg-panel)', color: 'var(--text-main)', outline: 'none' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.25rem', color: 'var(--text-muted)' }}>Digital Signature</label>
                <input 
                  type="text" 
                  value={clinicianSig}
                  onChange={(e) => setClinicianSig(e.target.value)}
                  placeholder="Practitioner Signature"
                  style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--border)', background: 'var(--bg-panel)', color: 'var(--text-main)', fontFamily: 'cursive', outline: 'none' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.25rem', color: 'var(--text-muted)' }}>Date</label>
                <input 
                  type="date" 
                  value={clinicianDate}
                  onChange={(e) => setClinicianDate(e.target.value)}
                  style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--border)', background: 'var(--bg-panel)', color: 'var(--text-main)', outline: 'none' }}
                />
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Printing Actions Footer */}
      <div style={{ textAlign: 'center', marginTop: '2.5rem', display: 'flex', justifyContent: 'center', gap: '1rem' }} className="no-print">
        <button className="btn btn-primary" onClick={() => window.print()} style={{ padding: '0.75rem 2.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          <Printer size={18} />
          Print or Save Document (PDF)
        </button>
      </div>

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
            font-size: 1rem !important;
          }
          .signatures-grid {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
          }
          .signatures-grid > div {
            border: 1px solid #000000 !important;
            background: transparent !important;
            padding: 1rem !important;
          }
        }
        @media (max-width: 768px) {
          .signatures-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
