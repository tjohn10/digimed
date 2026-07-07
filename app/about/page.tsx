"use client";

import React from 'react';
import { Shield, Award, Heart, CheckCircle2, Calendar, Star } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <section className="view-section active" style={{ maxWidth: '1000px', margin: '2rem auto' }}>
      
      {/* Introduction Header */}
      <div className="section-title-wrap" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '0.75rem' }}>Meet Your Practitioner</span>
        <h1 className="section-title" style={{ fontSize: '2.75rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>Anotida Macdonald Nduna (Ano)</h1>
        <p className="section-subtitle" style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginTop: '0.5rem', fontWeight: 500 }}>
          Senior Mental Health Practitioner & Specialist Eating Disorder Practitioner
        </p>
      </div>

      <div className="about-grid">
        
        {/* Profile Card / Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Avatar Container with Glassmorphism */}
          <div className="glass-panel" style={{ padding: '2.5rem 2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', border: '1px solid var(--border)' }}>
            <div style={{ 
              width: '130px', 
              height: '130px', 
              borderRadius: '50%', 
              overflow: 'hidden',
              border: '3px solid var(--primary)',
              boxShadow: '0 8px 24px rgba(255, 120, 36, 0.25)',
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              position: 'relative'
            }}>
              <img 
                src="/images/ano_nduna.png" 
                alt="Anotida Macdonald Nduna" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover' 
                }} 
              />
            </div>
            
            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, margin: '0 0 0.25rem' }}>Ano Nduna</h3>
              <p style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', margin: 0 }}>Registered Professional</p>
            </div>

            <div style={{ width: '100%', borderTop: '1px solid var(--border)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', textAlign: 'left', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', color: 'var(--text-muted)' }}>
                <Award size={16} color="var(--primary)" style={{ flexShrink: 0 }} />
                <span>18+ Years NHS Frontline Experience</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', color: 'var(--text-muted)' }}>
                <Shield size={16} color="var(--primary)" style={{ flexShrink: 0 }} />
                <span>Specialist Eating Disorder Clinician</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', color: 'var(--text-muted)' }}>
                <CheckCircle2 size={16} color="var(--primary)" style={{ flexShrink: 0 }} />
                <span>Safeguarding Governance Lead</span>
              </div>
            </div>

            <Link href="/book" className="btn btn-primary" style={{ width: '100%', display: 'flex', gap: '0.5rem', justifyContent: 'center', padding: '0.75rem' }}>
              <Calendar size={18} />
              Book Appointment
            </Link>
          </div>

          {/* Accreditations Panel */}
          <div className="glass-panel" style={{ padding: '1.5rem', border: '1px solid var(--border)' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Accreditation & Registry</h4>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <img src="/images/accph-member.jpg" alt="ACCPH Logo" style={{ height: '40px', objectFit: 'contain', background: '#fff', padding: '4px', borderRadius: '4px' }} />
              <div>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block' }}>ACCPH Accredited Member</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Independent Practitioner Registry</span>
              </div>
            </div>
          </div>
        </div>

        {/* Biography & Detail Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          
          {/* Bio */}
          <div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>Clinical Experience & Background</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1rem' }}>
              As a Senior Mental Health Practitioner with over <strong>18 years of frontline NHS mental health experience</strong>, I provide evidence-based, highly structured psychological treatments tailored to the unique complexities of every client. My practice is grounded in clinical excellence, compassionate containment, and robust safeguarding governance.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7 }}>
              Over nearly two decades in NHS clinical teams, I have developed deep specializations in managing complex childhood and adolescent mental health distress, acute psychiatric crisis, and specialized eating disorders. I work collaboratively with individuals, couples, and families to foster lasting, sustainable healing.
            </p>
          </div>

          {/* Clinical Tracks */}
          <div className="glass-panel" style={{ padding: '2rem', border: '1px solid var(--border)' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.25rem', fontFamily: 'var(--font-heading)', color: 'var(--text-main)' }}>Frontline NHS Clinical Tracks</h3>
            <div className="about-nhs-tracks">
              {[
                "CAMHS (Child & Adolescent Mental Health Services)",
                "Specialist Eating Disorder Services (AN, BN, ARFID, OSFED)",
                "Crisis & Home Treatment Teams",
                "A&E Psychiatric Liaison Work",
                "SPA Triage & Clinical Intake Assessment",
                "Primary Care Psychological Therapies"
              ].map((track, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'start' }}>
                  <Star size={16} color="var(--primary)" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{track}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Core Values */}
          <div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>Core Practice Values</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                {
                  title: "Compassion & Empathy",
                  desc: "Creating an unconditionally safe, warm, and validation-focused space where you can express and unpack difficult emotional processes without fear of judgment.",
                  icon: <Heart size={20} color="var(--primary)" />
                },
                {
                  title: "Clinical Professionalism",
                  desc: "Rigorously applying gold-standard, evidence-based psychotherapeutic protocols (such as CBT and CBT-E) to ensure measurable therapeutic changes.",
                  icon: <Award size={20} color="var(--primary)" />
                },
                {
                  title: "Structure & Action-Oriented",
                  desc: "Structuring sessions with clear agendas, collaborative goal mapping, and actionable worksheets to bridge the gap between clinical dialogue and real-life environments.",
                  icon: <CheckCircle2 size={20} color="var(--primary)" />
                },
                {
                  title: "Robust Safeguarding Governance",
                  desc: "Enforcing absolute standards in clinical safety, risk triage, and regulatory governance to protect minor and vulnerable adult populations under my care.",
                  icon: <Shield size={20} color="var(--primary)" />
                }
              ].map((val, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'start' }}>
                  <div style={{ padding: '0.75rem', borderRadius: '10px', background: 'rgba(255, 120, 36, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {val.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, margin: '0 0 0.35rem', color: 'var(--text-main)' }}>{val.title}</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
      
    </section>
  );
}
