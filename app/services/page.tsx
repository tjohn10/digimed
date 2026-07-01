"use client";

import React, { useState } from 'react';
import { 
  User, Baby, UserCheck, Heart, Users, Apple, 
  ShieldAlert, Award, FileText, ArrowRight, Sparkles 
} from 'lucide-react';
import Link from 'next/link';

interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
  shortDesc: string;
  detailedDesc: string;
  symptomsTitle: string;
  symptoms: string[];
}

const servicesData: Service[] = [
  {
    id: "individual-cbt",
    title: "Individual CBT",
    icon: <User size={24} />,
    shortDesc: "Evidence-based, structured therapy tailored for personal emotional and mental health challenges.",
    detailedDesc: "Individual Cognitive Behavioral Therapy (CBT) is structured to identify how thoughts, feelings, physical sensations, and behaviors interact to maintain distress. Together, we develop active strategies to dismantle negative thinking patterns and build resilient, sustainable behaviors.",
    symptomsTitle: "Common issues we address include:",
    symptoms: [
      "anxiety",
      "depression",
      "panic",
      "stress",
      "low self-esteem",
      "social/health anxiety",
      "obsessive thinking",
      "emotional regulation",
      "life transitions"
    ]
  },
  {
    id: "child-cbt",
    title: "Child CBT",
    icon: <Baby size={24} />,
    shortDesc: "Age-appropriate, creative, and engaging CBT techniques focusing on early intervention.",
    detailedDesc: "Child CBT is structured specifically for children, translating psychological principles into age-appropriate, playful, and creative activities. Sessions focus on emotional recognition and regulation, while closely involving parents or carers to ensure a supportive environment at home.",
    symptomsTitle: "Key focus areas include:",
    symptoms: [
      "emotional regulation",
      "school stress",
      "behavioral challenges",
      "parent/carer involvement"
    ]
  },
  {
    id: "adolescent-therapy",
    title: "Adolescent Therapy",
    icon: <UserCheck size={24} />,
    shortDesc: "A safe, confidential therapeutic space specifically designed for teenagers.",
    detailedDesc: "Adolescent therapy bridges clinical standards and teenage-friendly containment. It respects privacy while addressing developmental changes, identity challenges, and social dynamics. We support adolescents in building self-efficacy, emotional resiliency, and healthy boundaries.",
    symptomsTitle: "Tailored support for:",
    symptoms: [
      "exam stress",
      "identity",
      "self-discovery",
      "family conflict"
    ]
  },
  {
    id: "couples-therapy",
    title: "Couples Therapy",
    icon: <Heart size={24} />,
    shortDesc: "A balanced space to navigate communication challenges and rebuild intimacy.",
    detailedDesc: "Couples therapy offers an objective, balanced platform to assess conflict patterns, enhance communication quality, and unpack unresolved issues. Rather than placing blame, we collaboratively establish mutual patterns of validation, safety, trust, and connection.",
    symptomsTitle: "Core components of sessions:",
    symptoms: [
      "communication",
      "trust",
      "conflict patterns",
      "rebuilding intimacy"
    ]
  },
  {
    id: "family-therapy",
    title: "Family Therapy",
    icon: <Users size={24} />,
    shortDesc: "Examining and rebuilding family relationship dynamics and conflicts.",
    detailedDesc: "Family therapy looks at relational systems to resolve conflicts, reframe dynamics, and facilitate mutual support. It establishes structured communication tracks to help families handle major transitions, blended family integrations, and behavioral stressors collectively.",
    symptomsTitle: "Specialized assistance for:",
    symptoms: [
      "family dynamics",
      "parent-child conflict",
      "blended family challenges",
      "communication"
    ]
  },
  {
    id: "eating-disorder-support",
    title: "Eating Disorder Support",
    icon: <Apple size={24} />,
    shortDesc: "Specialist treatment informed by CBT-E for eating disorders and body image concerns.",
    detailedDesc: "Specialist eating disorder psychotherapy is heavily informed by CBT-E (Enhanced Cognitive Behavioural Therapy), the premier evidence-based standard. We approach treatments with clinical sensitivity, clinical nutritional integration, behavioral normalization, and body image reconstruction.",
    symptomsTitle: "Accredited clinical care for:",
    symptoms: [
      "Anorexia",
      "Bulimia",
      "ARFID",
      "OSFED",
      "binge eating",
      "body image concerns"
    ]
  },
  {
    id: "trauma-support",
    title: "Trauma Support",
    icon: <ShieldAlert size={24} />,
    shortDesc: "Safe, trauma-informed processing for childhood, sudden loss, or abuse.",
    detailedDesc: "Trauma-informed processing is structured to build stability, emotional regulation, and safety before processing complex emotional events. We utilize evidence-based trauma models to assist clients in resolving somatic symptoms and cognitive triggers.",
    symptomsTitle: "Safe containment for:",
    symptoms: [
      "childhood/relationship trauma",
      "sudden loss",
      "emotional abuse"
    ]
  },
  {
    id: "parenting-support",
    title: "Parenting Support",
    icon: <Award size={24} />,
    shortDesc: "Clinical guidance to establish positive communication and manage behavior.",
    detailedDesc: "Parenting support provides objective, clinical consultations for parents navigating challenging behaviors, child stress, and boundary management. We review developmental trends and offer actionable techniques to strengthen parent-child validation.",
    symptomsTitle: "Structured clinical strategies for:",
    symptoms: [
      "managing challenging behaviors",
      "positive behavior strategies",
      "parent-child communication"
    ]
  },
  {
    id: "staff-support",
    title: "Staff Support",
    icon: <FileText size={24} />,
    shortDesc: "Specialized support for professionals experiencing stress, burnout, or pressures.",
    detailedDesc: "Staff support focuses on helping high-performance, clinical, or front-line professionals navigate work pressures. We address somatic burnout indicators, leadership isolation, and construct healthy return-to-work protocols following sick leave.",
    symptomsTitle: "Dedicated support for:",
    symptoms: [
      "work-related stress",
      "burnout",
      "compassion fatigue",
      "leadership pressures",
      "returning to work"
    ]
  }
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<Service>(servicesData[0]);

  return (
    <section className="view-section active" style={{ maxWidth: '1100px', margin: '2rem auto' }}>
      
      {/* Title */}
      <div className="section-title-wrap" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '0.75rem' }}>Our Specialties</span>
        <h1 className="section-title" style={{ fontSize: '2.75rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>Clinical Treatment Services</h1>
        <p className="section-subtitle" style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
          Explore our 9 specialist practice areas. Select any card below to view details and scannable treatment profiles.
        </p>
      </div>

      <div className="services-detail-grid">
        
        {/* Interactive Grid Cards (Left Side) */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem' }}>
          {servicesData.map((service) => {
            const isSelected = selectedService.id === service.id;
            return (
              <div 
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="glass-panel"
                style={{ 
                  padding: '1.25rem 1.5rem', 
                  cursor: 'pointer', 
                  border: isSelected ? '2px solid var(--primary)' : '1px solid var(--border)',
                  background: isSelected ? 'var(--bg-panel-hover)' : 'var(--bg-panel)',
                  transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  boxShadow: isSelected ? '0 8px 24px -10px var(--primary-glow)' : 'none'
                }}
              >
                <div style={{ 
                  padding: '0.6rem', 
                  borderRadius: '10px', 
                  background: isSelected ? 'var(--primary)' : 'rgba(255,120,36,0.06)',
                  color: isSelected ? '#ffffff' : 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'all 0.2s'
                }}>
                  {service.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 0.25rem', color: 'var(--text-main)' }}>{service.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.4, margin: 0 }}>{service.shortDesc}</p>
                </div>
                <ArrowRight size={16} color={isSelected ? 'var(--primary)' : 'var(--border-hover)'} style={{ transform: isSelected ? 'translateX(3px)' : 'none', transition: 'transform 0.2s' }} />
              </div>
            );
          })}
        </div>

        {/* Detailed Service Content Drawer (Right Side) */}
        <div className="glass-panel" style={{ padding: '3rem 2.5rem', border: '1px solid var(--border)', background: 'var(--bg-card)', position: 'sticky', top: '100px' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '1.5rem' }}>
            <div style={{ 
              padding: '0.75rem', 
              borderRadius: '12px', 
              background: 'rgba(255, 120, 36, 0.08)',
              color: 'var(--primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {selectedService.icon}
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Specialist Area</span>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, margin: 0, fontFamily: 'var(--font-heading)', color: 'var(--text-main)' }}>{selectedService.title}</h2>
            </div>
          </div>

          <p style={{ color: 'var(--text-main)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            {selectedService.detailedDesc}
          </p>

          <div style={{ background: 'rgba(6, 182, 212, 0.04)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.75rem' }}>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, margin: '0 0 1rem', textTransform: 'uppercase', color: 'var(--text-main)', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={16} color="var(--secondary)" />
              {selectedService.symptomsTitle}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {selectedService.symptoms.map((symptom, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)' }}></div>
                  <span style={{ fontWeight: 500 }}>{symptom}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1.25rem' }}>
            <Link href={`/book?service=${selectedService.id}`} className="btn btn-primary" style={{ flex: 1, padding: '0.85rem' }}>
              Book {selectedService.title}
            </Link>
            <Link href="/about" className="btn btn-secondary" style={{ padding: '0.85rem' }}>
              Practitioner Details
            </Link>
          </div>

        </div>

      </div>
      
    </section>
  );
}
