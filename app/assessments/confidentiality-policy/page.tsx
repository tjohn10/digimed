"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Printer } from 'lucide-react';

export default function ConfidentialityPolicy() {
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
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '1.5px', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>Practice Policy Document</span>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 800, margin: 0, fontFamily: 'var(--font-heading)', color: 'var(--text-main)' }}>Confidentiality & Consent Policy</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginTop: '0.5rem', fontWeight: 500 }}>Combined Policy – UK & Jersey</p>
        </div>

        {/* Section 1 */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)', borderBottom: '1px solid var(--border)', paddingBottom: '0.4rem', marginBottom: '0.85rem', fontFamily: 'var(--font-heading)' }}>
            1. Purpose of This Policy
          </h3>
          <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
            This policy explains how Ontime Therapy manages confidentiality, personal information, and consent to share information. It applies to children, young people, adults, and parents/carers accessing therapeutic services.
            Ontime Therapy is committed to providing safe, ethical, trauma-informed care while protecting your privacy under UK and Jersey law.
          </p>
        </div>

        {/* Section 2 */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)', borderBottom: '1px solid var(--border)', paddingBottom: '0.4rem', marginBottom: '0.85rem', fontFamily: 'var(--font-heading)' }}>
            2. Confidentiality & Data Protection (UK & Jersey)
          </h3>
          <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>
            Ontime Therapy protects all personal information in accordance with:
          </p>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem', listStyleType: 'disc' }}>
            <li>UK GDPR</li>
            <li>Data Protection Act 2018 (UK)</li>
            <li>Data Protection (Jersey) Law 2018</li>
            <li>Professional safeguarding and clinical practice standards</li>
          </ul>
          
          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginTop: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>How your information is used:</h4>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem', listStyleType: 'circle' }}>
            <li>Assessment and treatment planning</li>
            <li>Clinical record-keeping</li>
            <li>Communication with you or your parent/carer</li>
            <li>Coordinating care with other professionals (with consent unless safeguarding applies)</li>
          </ul>

          <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>
            <strong>How your information is stored:</strong> All records are stored securely. Only authorised clinicians have access.
          </p>

          <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginTop: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Your rights:</h4>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0, listStyleType: 'circle' }}>
            <li>Access your personal information</li>
            <li>Request corrections</li>
            <li>Withdraw consent for information sharing (unless safeguarding duties apply)</li>
            <li>Request information about how your data is used</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div style={{ marginBottom: '2rem', padding: '1.25rem', background: 'rgba(255, 120, 36, 0.02)', borderRadius: '8px', border: '1px solid rgba(255, 120, 36, 0.12)' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)', borderBottom: '1px solid var(--border)', paddingBottom: '0.4rem', marginBottom: '0.85rem', fontFamily: 'var(--font-heading)' }}>
            3. Consent to Share Information (Routine Care)
          </h3>
          <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>
            To ensure safe, joined-up care, Ontime Therapy may need to share relevant information with professionals involved in your or your child’s support, including: GP, CAMHS / mental-health services, school or college, social care, or other agencies in the UK or Jersey. Information is shared only when necessary, and always with care, respect, and transparency.
          </p>

          <div style={{ marginTop: '1.25rem', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
            <p style={{ fontSize: '0.95rem', fontStyle: 'italic', marginBottom: '0.75rem', color: 'var(--text-main)' }}>
              I consent to Ontime Therapy sharing relevant information with professionals involved in my / my child’s care.
            </p>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)' }}>
                <input 
                  type="radio" 
                  name="routine-policy-consent" 
                  checked={consentRoutine === 'Yes'}
                  onChange={() => setConsentRoutine('Yes')}
                  style={{ accentColor: 'var(--primary)', width: '18px', height: '18px' }}
                />
                ☐ Yes
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)' }}>
                <input 
                  type="radio" 
                  name="routine-policy-consent" 
                  checked={consentRoutine === 'No'}
                  onChange={() => setConsentRoutine('No')}
                  style={{ accentColor: 'var(--primary)', width: '18px', height: '18px' }}
                />
                ☐ No
              </label>
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div style={{ marginBottom: '2rem', padding: '1.25rem', background: 'rgba(6, 182, 212, 0.02)', borderRadius: '8px', border: '1px solid rgba(6, 182, 212, 0.12)' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)', borderBottom: '1px solid var(--border)', paddingBottom: '0.4rem', marginBottom: '0.85rem', fontFamily: 'var(--font-heading)' }}>
            4. Safeguarding & Risk (UK & Jersey)
          </h3>
          <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>
            Confidentiality has legal limits. Ontime Therapy has a duty to protect children, young people, and vulnerable adults. Information may be shared without consent if there is a concern about: suicide or self-harm, harm to others, abuse or neglect, significant risk to a child or vulnerable adult, or situations requiring immediate protection under UK or Jersey safeguarding law.
          </p>
          <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>
            Where possible, Ontime Therapy will discuss this with you first. However, information may be shared without discussion if doing so increases risk.
          </p>

          <div style={{ marginTop: '1.25rem', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
            <p style={{ fontSize: '0.95rem', fontStyle: 'italic', marginBottom: '0.75rem', color: 'var(--text-main)' }}>
              I understand and consent to information being shared without my permission if safeguarding or risk concerns arise, in line with UK and Jersey law.
            </p>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)' }}>
                <input 
                  type="radio" 
                  name="safeguarding-policy-consent" 
                  checked={consentSafeguarding === 'Yes'}
                  onChange={() => setConsentSafeguarding('Yes')}
                  style={{ accentColor: 'var(--primary)', width: '18px', height: '18px' }}
                />
                ☐ Yes
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)' }}>
                <input 
                  type="radio" 
                  name="safeguarding-policy-consent" 
                  checked={consentSafeguarding === 'No'}
                  onChange={() => setConsentSafeguarding('No')}
                  style={{ accentColor: 'var(--primary)', width: '18px', height: '18px' }}
                />
                ☐ No
              </label>
            </div>
          </div>
        </div>

        {/* Section 5 */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)', borderBottom: '1px solid var(--border)', paddingBottom: '0.4rem', marginBottom: '0.85rem', fontFamily: 'var(--font-heading)' }}>
            5. Young People (Aged 11–17)
          </h3>
          <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '0.5rem' }}>
            Young people may have the right to confidentiality if assessed as Gillick competent. Ontime Therapy will:
          </p>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0, listStyleType: 'disc' }}>
            <li>Respect the young person’s confidentiality</li>
            <li>Encourage open communication with parents/carers</li>
            <li>Share information only when consent is given or safeguarding requires it</li>
          </ul>
        </div>

        {/* Section 6 */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)', borderBottom: '1px solid var(--border)', paddingBottom: '0.4rem', marginBottom: '0.85rem', fontFamily: 'var(--font-heading)' }}>
            6. Parent/Carer Involvement
          </h3>
          <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
            For children and young people, parents/carers are encouraged to be involved in the therapeutic process. Information will be shared with parents/carers only with consent, unless safeguarding concerns require disclosure.
          </p>
        </div>

        {/* Section 7 */}
        <div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>
            7. Declaration & Signatures
          </h3>
          
          <div className="signatures-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }}>
            
            {/* Client Signature Area */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', background: 'rgba(255, 255, 255, 0.01)', padding: '1.25rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
              <h4 style={{ margin: '0 0 0.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.25rem', fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)' }}>Client / Parent / Carer</h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0, fontStyle: 'italic' }}>
                I have read and understood Ontime Therapy’s Confidentiality & Consent Policy. I agree to the terms outlined above.
              </p>
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
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.25rem', color: 'var(--text-muted)' }}>Digital Signature</label>
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
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0, fontStyle: 'italic' }}>
                I have explained this policy and answered any questions.
              </p>
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
          Print or Save Policy (PDF)
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
