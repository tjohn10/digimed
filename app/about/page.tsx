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
        <h1 className="section-title" style={{ fontSize: '2.75rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>Mr Anotida Macdonald (Ano)</h1>
        <p className="section-subtitle" style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginTop: '0.5rem', fontWeight: 500 }}>
          CEO of Ontime Therapy Services & Senior Mental Health Practitioner
        </p>
      </div>

      <div className="about-grid">
        
        {/* Profile Card / Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Avatar Container with Glassmorphism */}
          <div className="glass-panel responsive-panel" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', border: '1px solid var(--border)' }}>
            <div style={{ 
              width: '180px',
              height: '180px',
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
                src="/images/therap.jpeg"
                alt="Anotida Macdonald Nduna" 
                style={{ 
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }} 
              />
            </div>
            
            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, margin: '0 0 0.25rem' }}>Mr Anotida Macdonald</h3>
              <p style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', margin: 0 }}>CEO & Registered Practitioner</p>
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
          <div className="glass-panel" style={{ padding: '1.5rem', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Accreditation & Registry</h4>
            
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <img src="/images/accph-member.jpg" alt="ACCPH Logo" style={{ height: '40px', objectFit: 'contain', background: '#fff', padding: '4px', borderRadius: '4px' }} />
              <div>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', color: 'var(--text-main)' }}>ACCPH Accredited Member</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Independent Practitioner Registry</span>
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '4px', background: 'rgba(255, 120, 36, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontWeight: 'bold', fontSize: '0.8rem', flexShrink: 0 }}>
                  NMC
                </div>
                <div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', color: 'var(--text-main)' }}>Nursing & Midwifery Council</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Registered Member (NMC)</span>
                </div>
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '4px', background: 'rgba(6, 182, 212, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)', fontWeight: 'bold', fontSize: '0.8rem', flexShrink: 0 }}>
                  JCC
                </div>
                <div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', color: 'var(--text-main)' }}>Jersey Care Commission</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Registered Practitioner</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Biography & Detail Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          
          {/* Bio */}
          <div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>About Mr Anotida Macdonald & Ontime Therapy Services</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1rem' }}>
              <strong>Ontime Therapy Services</strong> is led by <strong>Mr Anotida Macdonald</strong>, a Senior Mental Health Practitioner, Counsellor, Psychotherapist, and Advanced CBE & CBT‑E Personal Trainer with extensive experience across CAMHS, adult mental health, eating‑disorder pathways, and integrative therapeutic practice. His work is grounded in evidence‑based approaches and shaped by a deep commitment to helping people heal, find balance, and thrive.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1rem' }}>
              Anotida’s professional journey is strengthened by personal experiences that have shaped his empathy, resilience, and understanding of human suffering. He has lived through mass bereavement and the emotional complexities of divorce, experiences that taught him the weight of grief, the fragility of relationships, and the courage required to rebuild life after profound loss. These chapters of his life are not the centre of his story, but they inform the compassion, steadiness, and authenticity he brings to his clinical work. They allow him to sit with people in their darkest moments without judgement, and to support them with a depth of understanding that cannot be learned from textbooks alone.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1rem' }}>
              At Ontime Therapy Services, clients find a space that is safe, confidential, and grounded in genuine human care. The service offers:
            </p>
            <div style={{ background: 'rgba(6, 182, 212, 0.03)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '1.5rem' }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  "Clinical assessment and therapeutic formulation",
                  "Counselling and psychotherapy for children, young people, adults, and families",
                  "Specialist CBT‑E support for eating disorders",
                  "Trauma‑informed and integrative therapeutic interventions"
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)' }}></div>
                    <span style={{ fontWeight: 500 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1rem' }}>
              Anotida’s approach blends clinical skill with humility, faith‑centred values, and a belief in every person’s capacity to grow. His practice is relational, respectful, and built on the understanding that healing is not linear — it is a journey walked with patience, courage, and the right support.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: 0 }}>
              Ontime Therapy Services stands as a place where people can explore their experiences safely, reconnect with their strengths, and move toward a future defined not by what they have endured, but by what they are becoming.
            </p>
          </div>

          {/* Clinical Tracks */}
          <div className="glass-panel responsive-panel" style={{ border: '1px solid var(--border)' }}>
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
