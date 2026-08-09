"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Users, Heart, ShieldAlert, GraduationCap, MessageSquare, AlertCircle, 
  HelpCircle, CheckCircle, ArrowRight
} from 'lucide-react';

export default function ParentalSupport() {
  return (
    <section className="view-section active" style={{ maxWidth: '1360px', margin: '2rem auto', width: '100%', padding: '0 1rem' }}>
      {/* Page Title */}
      <div className="section-title-wrap" style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
        <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '0.75rem' }}>Family Resource</span>
        <h1 className="section-title" style={{ fontSize: '2.75rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>Support for Parents and Carers</h1>
        <p className="section-subtitle" style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginTop: '0.5rem', lineHeight: 1.6 }}>
          Practical guidance and CAMHS-focused resources to support families, parents, and carers helping children and young people through mental health challenges.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
        
        {/* Section 1: Understanding CAMHS */}
        <div className="glass-panel" style={{ padding: '3rem', border: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'start', marginBottom: '1.5rem' }}>
            <div style={{ padding: '0.6rem', borderRadius: '10px', background: 'rgba(59, 130, 246, 0.08)', color: 'var(--secondary)', flexShrink: 0 }}>
              <HelpCircle size={24} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0, fontFamily: 'var(--font-heading)', color: 'var(--text-main)' }}>Understanding CAMHS</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '0.2rem', fontWeight: 600 }}>Child and Adolescent Mental Health Services</p>
            </div>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            CAMHS is the NHS service that assesses and treats children and young people (usually up to 18) experiencing moderate to severe mental health difficulties. Referral pathways can feel complex, but they typically involve:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="camhs-steps-grid">
            <div className="glass-card" style={{ padding: '1.5rem', border: '1px solid var(--border)' }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-main)' }}>1. Referral & Triage</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5, margin: 0 }}>
                Referrals are typically submitted by GPs, school staff, or social workers. The CAMHS triage team reviews clinical severity to assign appropriate pathways.
              </p>
            </div>
            <div className="glass-card" style={{ padding: '1.5rem', border: '1px solid var(--border)' }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-main)' }}>2. Multidisciplinary Care</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5, margin: 0 }}>
                Care plans may involve clinical psychologists, psychiatrists, systemic family therapists, psychiatric nurses, and multi-agency support networks.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Supporting a Child in Crisis */}
        <div className="glass-panel" style={{ padding: '3rem', border: '1px solid var(--border)', borderLeft: '4px solid #ef4444', background: 'var(--bg-card)' }}>
          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'start', marginBottom: '1.5rem' }}>
            <div style={{ padding: '0.6rem', borderRadius: '10px', background: 'rgba(239, 68, 68, 0.08)', color: '#ef4444', flexShrink: 0 }}>
              <ShieldAlert size={24} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0, fontFamily: 'var(--font-heading)', color: 'var(--text-main)' }}>Supporting a Child in Crisis</h2>
              <p style={{ color: '#ef4444', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '0.2rem', fontWeight: 600 }}>Emergency Parent Safety Protocol</p>
            </div>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            If a child or young person is experiencing an acute mental health crisis, active safety management is the primary priority:
          </p>
          <ul style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.8, paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><strong>Maintain Safety and Supervision:</strong> Ensure the young person is in a safe space. Remove access to medication, sharp objects, or other means of harm. Keep them under direct supervision.</li>
            <li><strong>Offer Calm Reassurance:</strong> Speak in a soft, steady, and grounding voice. Validate their intense distress without lecturing or arguing about behaviors.</li>
            <li><strong>Communicate Openly & Non-judgementally:</strong> Encourage them to share what they are experiencing. Ask open questions like, &quot;How can I best support you right now?&quot; and listen without reacting in anger.</li>
            <li><strong>Seek Urgent Professional Help:</strong> If you are concerned that safety cannot be maintained at home, do not wait. Contact NHS 111, phone a local NHS Urgent Mental Health Helpline, or attend A&E. Refer to our <Link href="/useful-information/crisis-advice" style={{ color: '#ef4444', fontWeight: 600, textDecoration: 'none' }}>Crisis Advice</Link> page.</li>
          </ul>
        </div>

        {/* Section 3: Eating Disorder Early Signs */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '2rem' }} className="ed-grid">
          
          <div className="glass-panel" style={{ padding: '2.5rem', border: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.25rem' }}>
              <AlertCircle size={22} color="var(--primary)" />
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, margin: 0, fontFamily: 'var(--font-heading)' }}>Eating Disorder Early Signs</h3>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Eating disorders can develop rapidly in youth. Early clinical identification significantly improves recovery outcomes. Watch for these indicators:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'start', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <CheckCircle size={16} color="var(--primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span><strong>Food avoidance:</strong> Skipping meals, hiding food, or finding excuses not to eat.</span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'start', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <CheckCircle size={16} color="var(--primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span><strong>Rigid rules:</strong> Developing obsessions with calories, ingredients, food groups, or eating rituals.</span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'start', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <CheckCircle size={16} color="var(--primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span><strong>Weight fluctuations:</strong> Sudden, noticeable weight loss or changes, often masked by baggy clothing.</span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'start', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <CheckCircle size={16} color="var(--primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span><strong>Secrecy:</strong> Spending long periods in the bathroom immediately after meals, or eating in private.</span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'start', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <CheckCircle size={16} color="var(--primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span><strong>Body image distress:</strong> Obsessive mirror checking, frequent weighing, or extreme anxiety about appearance.</span>
              </li>
            </ul>
          </div>

          <div className="glass-panel" style={{ padding: '2.5rem', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.25rem' }}>
              <MessageSquare size={22} color="var(--primary)" />
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, margin: 0, fontFamily: 'var(--font-heading)' }}>Talking About Mental Health</h3>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1rem' }}>
              Conversations with children about mental health require sensitivity and deliberate validation:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '10px', border: '1px solid var(--border)' }}>
                <p style={{ fontStyle: 'italic', fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0 0 0.5rem' }}>Instead of saying:</p>
                <p style={{ fontSize: '0.9rem', fontWeight: 600, color: '#ef4444', margin: 0 }}>&quot;You have no reason to feel sad; your life is fine.&quot;</p>
              </div>
              <div style={{ padding: '1rem', background: 'rgba(255,120,36,0.04)', borderRadius: '10px', border: '1px solid var(--primary-glow)' }}>
                <p style={{ fontStyle: 'italic', fontSize: '0.85rem', color: 'var(--primary)', margin: '0 0 0.5rem' }}>Try validating like this:</p>
                <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)', margin: 0 }}>&quot;I can hear how hard things are for you right now, and I’m here to listen and help you through this.&quot;</p>
              </div>
            </div>
          </div>

        </div>

        {/* Section 4: School Support and EHCP */}
        <div className="glass-panel" style={{ padding: '3rem', border: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'start', marginBottom: '1.5rem' }}>
            <div style={{ padding: '0.6rem', borderRadius: '10px', background: 'rgba(255, 120, 36, 0.08)', color: 'var(--primary)', flexShrink: 0 }}>
              <GraduationCap size={24} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0, fontFamily: 'var(--font-heading)', color: 'var(--text-main)' }}>School Support & EHCP Guidance</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '0.2rem', fontWeight: 600 }}>Navigating UK Educational adjustments</p>
            </div>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Mental health difficulties can severely impact a child’s education. Schools have a statutory duty to support pupils with medical and psychological conditions:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="school-support-grid">
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-main)' }}>Reasonable Adjustments</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                Work with the school’s Special Educational Needs Co-ordinator (SENCO) to arrange reasonable adjustments. These can include quiet room access during distress, modified timetables, exam concessions, or designated support staff check-ins.
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-main)' }}>Education, Health & Care Plans (EHCP)</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                For severe, long-term difficulties that require specialized educational provision beyond standard school resources, you can request an EHCP assessment from your Local Authority. An EHCP is a legally binding document outlining the child’s needs and the statutory support that must be provided.
              </p>
            </div>
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
          .camhs-steps-grid,
          .ed-grid,
          .school-support-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
