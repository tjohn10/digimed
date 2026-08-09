"use client";

import React from 'react';
import Link from 'next/link';
import { BookOpen, Users, PhoneCall, ArrowRight, Shield } from 'lucide-react';

export default function UsefulInformationHub() {
  return (
    <section className="view-section active" style={{ maxWidth: '1360px', margin: '2rem auto', width: '100%', padding: '0 1rem' }}>
      {/* Page Title */}
      <div className="section-title-wrap" style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
        <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '0.75rem' }}>Resource Hub</span>
        <h1 className="section-title" style={{ fontSize: '2.75rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>Ontime Therapy – Useful Information</h1>
        <p className="section-subtitle" style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginTop: '0.5rem', lineHeight: 1.6 }}>
          A comprehensive clinical resource providing detailed guidance, crisis support, mental health education, and therapy preparation for clients, families, and referrers.
        </p>
      </div>

      {/* Grid of Main Subsections */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '4rem' }} className="useful-info-grid">
        
        {/* Card 1: Self Guided Support */}
        <div className="glass-card" style={{ padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
          <div>
            <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(255, 120, 36, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <BookOpen size={24} color="var(--primary)" />
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-main)' }}>1. Self Guided Support</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              Access evidence-based coping skills, grounding techniques, mental health condition guides, and preparation resources for your therapy journey.
            </p>
          </div>
          <Link href="/useful-information/self-guided" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', gap: '0.5rem' }}>
            Explore Self Guided Support <ArrowRight size={16} />
          </Link>
        </div>

        {/* Card 2: Parental Support */}
        <div className="glass-card" style={{ padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
          <div>
            <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(59, 130, 246, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <Users size={24} color="var(--secondary)" />
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-main)' }}>2. Parental Support</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              Tailored information and CAMHS-focused resources for families, parents, and carers supporting children and young people.
            </p>
          </div>
          <Link href="/useful-information/parental-support" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center', gap: '0.5rem' }}>
            Explore Parental Support <ArrowRight size={16} />
          </Link>
        </div>

        {/* Card 3: Crisis Advice */}
        <div className="glass-card" style={{ padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', borderLeft: '1px solid rgba(239, 68, 68, 0.2)' }}>
          <div>
            <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(239, 68, 68, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <PhoneCall size={24} color="#ef4444" />
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-main)' }}>3. Crisis Advice</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              Urgent support guides, emergency action plans, safeguarding boundaries, and curated community/national UK crisis helplines.
            </p>
          </div>
          <Link href="/useful-information/crisis-advice" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center', gap: '0.5rem', borderColor: 'rgba(239, 68, 68, 0.3)', color: '#ef4444' }}>
            View Crisis Advice <ArrowRight size={16} />
          </Link>
        </div>

      </div>

      {/* Trust Badge / Outpatient Warning */}
      <div className="glass-panel" style={{ padding: '2rem', display: 'flex', alignItems: 'start', gap: '1.5rem', borderLeft: '4px solid var(--primary)', marginBottom: '4rem' }}>
        <Shield size={24} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
        <div>
          <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-main)' }}>Clinical & Evidence-Based Outpatient Care</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
            Ontime Therapy provides structured outpatient psychotherapy services. Our resources align with NICE clinical recommendations and professional codes of conduct. If you or someone you care for requires immediate crisis or emergency services, please refer directly to our <Link href="/useful-information/crisis-advice" style={{ color: '#ef4444', fontWeight: 600, textDecoration: 'none' }}>Crisis Advice</Link> page.
          </p>
        </div>
      </div>

      {/* Inline styles for responsive layout */}
      <style jsx>{`
        @media (max-width: 900px) {
          .useful-info-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
