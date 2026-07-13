"use client";

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, AlertCircle, ShieldAlert, PhoneCall } from 'lucide-react';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqData: FAQItem[] = [
  {
    question: "What is Cognitive Behavioural Therapy (CBT)?",
    answer: (
      <div>
        <p style={{ marginBottom: '1.25rem' }}>
          Cognitive Behavioural Therapy (CBT) is an evidence-based psychotherapeutic framework focusing on how thoughts, beliefs, and behavioral actions influence emotional and physiological feelings. By recognizing and challenging cognitive distortions, CBT teaches practical coping strategies to manage anxiety, depression, and other emotional distress.
        </p>
        <div className="faq-cbt-images">
          <div style={{ background: 'var(--bg-panel)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border)', textAlign: 'center' }}>
            <img src="/images/cbt-steps.jpg" alt="Steps in a CBT Session" style={{ width: '100%', borderRadius: '8px', marginBottom: '0.75rem', display: 'block' }} />
            <strong style={{ fontSize: '0.85rem', color: 'var(--text-main)' }}>Steps in a CBT Session</strong>
          </div>
          <div style={{ background: 'var(--bg-panel)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border)', textAlign: 'center' }}>
            <img src="/images/cbt-triangle.jpg" alt="CBT Changing Perceptions" style={{ width: '100%', borderRadius: '8px', marginBottom: '0.75rem', display: 'block' }} />
            <strong style={{ fontSize: '0.85rem', color: 'var(--text-main)' }}>CBT Changing Perceptions</strong>
          </div>
        </div>
      </div>
    )
  },
  {
    question: "Who is my therapist and what are their qualifications?",
    answer: "Your practitioner is Mr Anotida Macdonald (Ano), a Senior Mental Health Practitioner, Counsellor, Psychotherapist, and Advanced CBE & CBT‑E Personal Trainer with extensive experience across CAMHS, adult mental health, eating‑disorder pathways, and integrative therapeutic practice. He holds over 18 years of frontline NHS clinical experience, and is registered with the ACCPH, Nursing & Midwifery Council (NMC), and Jersey Care Commission."
  },
  {
    question: "Do you offer online or in-person sessions?",
    answer: "Yes, both. In-person therapy is provided at our clinic offices in Jersey island and Staffordshire. Online sessions are conducted via secure, encrypted video consultations accessible to clients UK-wide. Clinical studies confirm that secure online CBT is equal in treatment efficacy to traditional face-to-face sessions."
  },
  {
    question: "What are your session fees and are there any admin costs?",
    answer: "We work on a transparent, flat-fee structure of £85 per standard clinical session. There are zero registration fees, hidden administrative referral markups, or diagnostic report surcharges. Your fee goes directly to supporting clinical work and patient materials."
  },
  {
    question: "How long is each standard therapy session?",
    answer: "A standard clinical therapy session is 50 minutes long. This is standard clinical practice, allowing the remaining 10 minutes of the hour for practitioner documentation, clinical reflections, and preparation for your treatment plan."
  },
  {
    question: "What is your cancellation and rescheduling policy?",
    answer: "To maintain an ethical and structured schedule, we require at least 24-48 hours' notice for any session cancellation or slot rescheduling. Late cancellations (under 24 hours) or missed appointments without notification are charged at the full session fee."
  },
  {
    question: "How do I request an initial consultation?",
    answer: "You can easily submit an appointment request by navigating to our booking form (/book) or clicking 'Get Therapy' in the header. We collect basic contact details, booking preferences, and clinical indicators, aiming to respond to every initial inquiry in under 24 hours."
  },
  {
    question: "How many sessions will I need to see results?",
    answer: "Because CBT is goal-oriented and time-limited, treatment courses generally range between 8 to 21 weekly sessions, depending on the severity and complexity of symptoms. We perform symptom triages every few weeks to collaboratively review your progress."
  },
  {
    question: "Is my personal therapy information kept confidential?",
    answer: "Yes, confidentiality is a cornerstone of our practice. Your session discussions, intake paperwork, and screening scores are protected under strict GDPR rules. However, confidentiality is bound by clinical safety guidelines: if there is an immediate risk of harm to yourself or others, we are legally required to involve support services."
  },
  {
    question: "What is your Safeguarding policy for minors or adult safety?",
    answer: "We follow statutory safeguarding guidelines for child protection and vulnerable adults. Our lead practitioner maintains active safeguarding certifications and reports directly to UK regulatory frameworks. If abuse, neglect, or serious safety threats are identified, safety overrides take precedence to ensure individual welfare."
  },
  {
    question: "Do you provide psychiatric crisis intervention services?",
    answer: "No. OTT Psychotherapy is an outpatient therapeutic service and is not equipped to manage psychiatric crises, severe self-harm events, or medical emergencies. In the event of an urgent mental health crisis, please dial 999 or proceed to your nearest A&E department."
  },
  {
    question: "Can I verify your accreditation with professional bodies?",
    answer: "Yes, absolutely. Our lead practitioner is an accredited registered member of the ACCPH (Accredited Counsellors, Coaches, Psychotherapists and Hypnotherapists) registry. You can request our registry reference details or search the registry directly to verify active status."
  },
  {
    question: "How do I use the online CBT tools and assessments?",
    answer: "Our self-assessments (PHQ-9 and GAD-7) and CBT Thought Records are completely free and run client-side. To prioritize clinical privacy, your worksheet entries are stored locally on your device (localStorage) and are never uploaded to any server. You can print or save them directly."
  },
  {
    question: "What locations do you serve in the UK?",
    answer: "We serve clients locally in Jersey island and Staffordshire for in-person appointments, and provide secure online video therapy consultations to children, adolescents, couples, families, and professionals across the entire United Kingdom."
  }
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="view-section active" style={{ maxWidth: '1000px', margin: '2rem auto' }}>
      
      {/* Page Title */}
      <div className="section-title-wrap" style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
        <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '0.75rem' }}>Policies & Information</span>
        <h1 className="section-title" style={{ fontSize: '2.75rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>FAQ & Practice Policies</h1>
        <p className="section-subtitle" style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
          Find transparent answers about our session framework, fees, cancellation terms, and clinical safeguarding guidelines.
        </p>
      </div>

      <div className="faq-main-grid">
        
        {/* Accordion List (Left) */}
        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '2rem', fontFamily: 'var(--font-heading)', color: 'var(--text-main)' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqData.map((item, index) => {
              const isOpen = activeIndex === index;
              return (
                <div 
                  key={index} 
                  className="glass-panel" 
                  style={{ 
                    padding: '1.25rem 1.5rem', 
                    cursor: 'pointer', 
                    transition: 'all 0.3s ease',
                    borderLeft: isOpen ? '4px solid var(--primary)' : '1px solid var(--border)',
                    background: isOpen ? 'var(--bg-panel-hover)' : 'var(--bg-panel)'
                  }}
                  onClick={() => toggleAccordion(index)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <HelpCircle size={18} color={isOpen ? 'var(--primary)' : 'var(--text-muted)'} style={{ flexShrink: 0 }} />
                      <h3 style={{ fontSize: '1rem', fontWeight: 650, fontFamily: 'var(--font-heading)', color: 'var(--text-main)', margin: 0 }}>
                        {item.question}
                      </h3>
                    </div>
                    <ChevronDown size={16} color={isOpen ? 'var(--primary)' : 'var(--text-muted)'} style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0 }} />
                  </div>
                  
                  {isOpen && (
                    <div style={{ 
                      marginTop: '1rem', 
                      paddingLeft: '1.85rem', 
                      color: 'var(--text-muted)', 
                      fontSize: '0.92rem', 
                      lineHeight: 1.6,
                      animation: 'fadeIn 0.2s ease'
                    }}>
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Policies Callout Panels (Right) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'sticky', top: '100px' }}>
          
          {/* Cancellation Policy Callout */}
          <div className="glass-panel" style={{ padding: '2rem', border: '1px solid var(--border)', borderLeft: '4px solid var(--primary)', background: 'var(--bg-card)' }}>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1rem' }}>
              <AlertCircle size={22} color="var(--primary)" />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0, fontFamily: 'var(--font-heading)' }}>Cancellation Policy</h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
              We require at least <strong>24-48 hours' notice</strong> for cancellations or rescheduling. Late cancellations or missed appointments may be charged at the <strong>full session fee</strong>.
            </p>
          </div>

          {/* Safeguarding Policy details */}
          <div className="glass-panel" style={{ padding: '2rem', border: '1px solid var(--border)', borderLeft: '4px solid var(--secondary)', background: 'var(--bg-card)' }}>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1rem' }}>
              <ShieldAlert size={22} color="var(--secondary)" />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0, fontFamily: 'var(--font-heading)' }}>Safeguarding Policy</h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1rem' }}>
              OTT Psychotherapy maintains robust compliance with statutory UK safeguarding protocols for child protection and vulnerable adults. 
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
              If a minor or vulnerable adult is identified to be at risk of abuse, neglect, or harm, we have a legal duty to report concerns to local authorities or social services. Confidentiality parameters are overridden in these acute safety contexts.
            </p>
          </div>

          {/* Crisis Support Notice */}
          <div className="glass-panel" style={{ padding: '2rem', border: '1px solid var(--border)', borderLeft: '4px solid #ef4444', background: 'var(--bg-card)' }}>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1rem' }}>
              <PhoneCall size={20} color="#ef4444" />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0, fontFamily: 'var(--font-heading)', color: '#ef4444' }}>Crisis Support Notice</h3>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
              Our practice is an outpatient service and is not equipped for immediate mental health emergencies. If you are experiencing thoughts of self-harm or acute distress, call <strong>999</strong>, call the Samaritans at <strong>116 123</strong>, or attend nearest A&E.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}
