"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Phone, ShieldAlert, AlertTriangle, LifeBuoy, HeartHandshake, ExternalLink, 
  ArrowRight, Heart
} from 'lucide-react';

export default function CrisisAdvice() {
  return (
    <section className="view-section active" style={{ maxWidth: '1000px', margin: '2rem auto', width: '100%' }}>
      
      {/* Critical Red Warning Banner */}
      <div className="glass-panel" style={{ padding: '2.5rem', borderLeft: '6px solid #ef4444', background: 'rgba(239, 68, 68, 0.04)', marginBottom: '3.5rem' }}>
        <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'start' }}>
          <ShieldAlert size={28} color="#ef4444" style={{ flexShrink: 0, marginTop: '4px' }} />
          <div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: '#ef4444', margin: '0 0 0.5rem' }}>
              Crisis & Emergency Advice
            </h1>
            <p style={{ color: 'var(--text-main)', fontWeight: 600, fontSize: '1.05rem', lineHeight: 1.6, margin: '0 0 0.75rem' }}>
              Ontime Therapy does not provide crisis or emergency intervention. If you or someone you are supporting is at immediate risk, urgent statutory support is required.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
              Our practice is an outpatient therapy service. Our clinical practitioners are not equipped to respond to acute psychiatric crises, active self-harm, or medical emergencies. Please use the statutory and helpline support pathways listed below.
            </p>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '2.5rem', marginBottom: '4rem' }} className="crisis-main-grid">
        
        {/* Left Column: Actions and Checklists */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          
          {/* Section 1: When Immediate Help Is Required */}
          <div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.25rem', fontFamily: 'var(--font-heading)', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <AlertTriangle size={20} color="#ef4444" /> When Immediate Help Is Required
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>
              A mental health emergency includes situations where an individual:
            </p>
            <ul style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.7, paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>Is unable to keep themselves safe from serious harm.</li>
              <li>Has harmed themselves or intends to harm themselves immediately.</li>
              <li>Is experiencing suicidal thoughts they feel they may act on.</li>
              <li>Shows signs of psychosis (hallucinations, delusions, severe confusion).</li>
              <li>Is at immediate risk of harming others.</li>
              <li>Is severely distressed and completely unable to function or care for themselves.</li>
            </ul>
          </div>

          {/* Section 2: What to Do */}
          <div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.25rem', fontFamily: 'var(--font-heading)', color: 'var(--text-main)' }}>
              What to Do
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              
              <div className="glass-card" style={{ padding: '1.25rem 1.5rem', borderLeft: '4px solid #ef4444', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 0.25rem', color: 'var(--text-main)' }}>Emergency Services</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>Attend your nearest A&E or call 999 if there is immediate danger.</p>
                </div>
                <a href="tel:999" className="btn btn-primary" style={{ padding: '0.5rem 1rem', background: '#ef4444', color: '#ffffff', fontSize: '0.85rem' }}>Call 999</a>
              </div>

              <div className="glass-card" style={{ padding: '1.25rem 1.5rem', borderLeft: '4px solid var(--primary)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 0.25rem', color: 'var(--text-main)' }}>NHS 111 (Mental Health Advice)</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>Access urgent mental health advice when not in immediate danger.</p>
                </div>
                <a href="tel:111" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>Call 111</a>
              </div>

              <div className="glass-card" style={{ padding: '1.25rem 1.5rem', borderLeft: '4px solid var(--secondary)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 0.25rem', color: 'var(--text-main)' }}>Local NHS Urgent Mental Health Line</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>24/7 support from trained clinicians in your area.</p>
                </div>
                <a href="https://www.nhs.uk/service-search/mental-health/find-an-urgent-mental-health-helpline" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem', gap: '0.25rem' }}>Find <ExternalLink size={12} /></a>
              </div>

              <div className="glass-card" style={{ padding: '1.25rem 1.5rem', border: '1px solid var(--border)' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 0.25rem', color: 'var(--text-main)' }}>Crisis Resolution Team (CRHT)</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>If already under secondary mental health services, contact your local crisis resolution/home treatment team.</p>
              </div>

              <div className="glass-card" style={{ padding: '1.25rem 1.5rem', border: '1px solid var(--border)' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 0.25rem', color: 'var(--text-main)' }}>Your General Practitioner (GP)</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>Contact your GP surgery to request an urgent same-day appointment for crisis support.</p>
              </div>

            </div>
          </div>

        </div>

        {/* Right Column: Supporting details & Safeguarding */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Supporting Someone in Crisis */}
          <div className="glass-panel" style={{ padding: '2rem', border: '1px solid var(--border)', background: 'var(--bg-card)' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>Supporting Someone in Crisis</h3>
            <ul style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li><strong>Stay Calm:</strong> Speak in a clear, validating, and reassuring manner to help lower situational arousal.</li>
              <li><strong>Remove Access:</strong> Secure and remove access to medications, tools, or objects of self-harm.</li>
              <li><strong>Do Not Leave Alone:</strong> Ensure the person is not left alone if they are at risk of immediate harm.</li>
              <li><strong>Call Emergencies:</strong> Immediately contact 999 or attend an A&E if safety cannot be maintained at home.</li>
            </ul>
          </div>

          {/* Professional and Safeguarding Info */}
          <div className="glass-panel" style={{ padding: '2rem', border: '1px solid var(--border)' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>Professional & Safeguarding Information</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)', margin: '0 0 0.25rem' }}>When to Refer to CAMHS</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.5, margin: 0 }}>
                  Referral to CAMHS is clinically indicated when a young person’s mental health difficulties significantly impair daily functioning, present a clear risk of self-harm, or require specialist psychiatric diagnosis.
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)', margin: '0 0 0.25rem' }}>Safeguarding Override</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.5, margin: 0 }}>
                  Safeguarding children and vulnerable adults is a statutory legal duty. If abuse, neglect, or serious risk of harm is identified in therapy, we must report it. Statutory duties supersede standard client confidentiality agreements.
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)', margin: '0 0 0.25rem' }}>Multi-Agency Working</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.5, margin: 0 }}>
                  We collaborate with schools, GPs, social services, and specialist secondary mental health services to build a comprehensive, holistic network of support.
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)', margin: '0 0 0.25rem' }}>NICE Guidance & Mental Health Act</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.5, margin: 0 }}>
                  Our practice aligns with National Institute for Health and Care Excellence (NICE) guidelines. In crisis contexts, the Mental Health Act provides the statutory framework for assessment, treatment, and protection.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Section 3: Community and National Resources */}
      <div className="glass-panel" style={{ padding: '3rem', border: '1px solid var(--border)', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '0.5rem', fontFamily: 'var(--font-heading)', color: 'var(--text-main)', textAlign: 'center' }}>
          Community and National Resources
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', textAlign: 'center', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
          A curated list of trusted UK support services offering confidential crisis helplines, peer support, and resource directories.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="resources-grid">
          
          <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid var(--border)' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.75rem' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>Samaritans</h4>
                <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', borderRadius: '4px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', fontWeight: 700 }}>24/7 FREE</span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                Providing confidential emotional support for anyone experiencing feelings of distress, despair, or suicidal thoughts UK-wide.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a href="tel:116123" className="btn btn-primary" style={{ padding: '0.45rem 1rem', fontSize: '0.8rem', flex: 1, justifyContent: 'center' }}>Call 116 123</a>
              <a href="https://www.samaritans.org" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '0.45rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Visit Samaritans"><ExternalLink size={14} /></a>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid var(--border)' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.75rem' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>Shout</h4>
                <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', borderRadius: '4px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', fontWeight: 700 }}>24/7 TEXT</span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                The UK’s first free, confidential, 24/7 text support service for anyone experiencing distress, depression, or a mental health crisis.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a href="sms:85258?body=SHOUT" className="btn btn-primary" style={{ padding: '0.45rem 1rem', fontSize: '0.8rem', flex: 1, justifyContent: 'center' }}>Text SHOUT to 85258</a>
              <a href="https://giveusashout.org" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '0.45rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Visit Shout"><ExternalLink size={14} /></a>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid var(--border)' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.75rem' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>Hub of Hope</h4>
                <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', borderRadius: '4px', background: 'rgba(59, 130, 246, 0.1)', color: 'var(--secondary)', fontWeight: 700 }}>DIRECTORY</span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                A comprehensive national database provided by Chasing the Stigma, bringing together local, national, peer, NHS, and private mental health resources.
              </p>
            </div>
            <a href="https://hubofhope.co.uk" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', width: '100%', justifyContent: 'center', gap: '0.25rem' }}>
              Search Database <ExternalLink size={14} />
            </a>
          </div>

          <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid var(--border)' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.75rem' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>NHS Talking Therapies</h4>
                <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', borderRadius: '4px', background: 'rgba(59, 130, 246, 0.1)', color: 'var(--secondary)', fontWeight: 700 }}>NHS SERVICES</span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                Free, confidential psychological services provided by the NHS. Allows direct self-referral for CBT, counseling, and guided self-help in England.
              </p>
            </div>
            <a href="https://www.nhs.uk/service-search/mental-health/find-an-nhs-talking-therapies-service" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', width: '100%', justifyContent: 'center', gap: '0.25rem' }}>
              Find NHS Talking Therapies <ExternalLink size={14} />
            </a>
          </div>

          <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid var(--border)' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.75rem' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>Switchboard LGBT+</h4>
                <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', borderRadius: '4px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', fontWeight: 700 }}>HELPLINE</span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                Providing an information, support and referral service for lesbians, gay men, bisexual and trans people and anyone seeking help regarding sexuality or gender identity.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a href="tel:08000119100" className="btn btn-primary" style={{ padding: '0.45rem 1rem', fontSize: '0.8rem', flex: 1, justifyContent: 'center' }}>Call 0800 0119 100</a>
              <a href="https://switchboard.lgbt" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '0.45rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }} aria-label="Visit Switchboard LGBT+"><ExternalLink size={14} /></a>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid var(--border)' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.75rem' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>Nightline Association</h4>
                <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', borderRadius: '4px', background: 'rgba(59, 130, 246, 0.1)', color: 'var(--secondary)', fontWeight: 700 }}>STUDENT SUPPORT</span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                Confidential, anonymous, student-run night-time helpline and information services operating across higher education institutions in the UK.
              </p>
            </div>
            <a href="https://www.nightline.ac.uk" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', width: '100%', justifyContent: 'center', gap: '0.25rem' }}>
              Find Your Nightline <ExternalLink size={14} />
            </a>
          </div>

        </div>
      </div>

      {/* Return to Hub */}
      <div style={{ textAlign: 'center', marginTop: '5rem', marginBottom: '2rem' }}>
        <Link href="/useful-information" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          ← Back to Resource Hub
        </Link>
      </div>

      {/* CSS adjustments */}
      <style jsx>{`
        @media (max-width: 900px) {
          .crisis-main-grid,
          .resources-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
