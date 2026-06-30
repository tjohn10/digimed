"use client";

import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, AlertTriangle } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: React.ReactNode;
}

const faqData: FAQItem[] = [
    {
        question: "What is Cognitive Behavioral Therapy (CBT)?",
        answer: "Cognitive Behavioral Therapy (CBT) is an evidence-based, goal-oriented psychotherapeutic treatment. It focuses on how our thoughts, beliefs, and attitudes affect our feelings and behaviors. By identifying and reframing negative or unhelpful thought patterns (cognitive distortions), CBT helps you develop practical, actionable coping strategies to manage stress, anxiety, depression, and other emotional challenges."
    },
    {
        question: "How do I verify a therapist's BABCP accreditation?",
        answer: "All therapists at EasyMed are fully accredited by the British Association for Behavioural and Cognitive Psychotherapies (BABCP), which is the gold standard for CBT practice in the UK. You can verify any practitioner's active registry status directly by searching their full name on the official BABCP Register (https://www.babcp.com/Register). We display our therapists' full names and registration details on their profiles for complete transparency."
    },
    {
        question: "What is the difference between online and in-person sessions?",
        answer: "Online sessions are conducted via secure, encrypted video calls, offering maximum flexibility and comfort from your own home. In-person sessions take place at our clinical offices in London, Birmingham, and Manchester, providing a structured, face-to-face therapeutic space. Both formats follow identical evidence-based CBT protocols and have been shown in clinical trials to be equally effective."
    },
    {
        question: "Are the self-assessments (PHQ-9 and GAD-7) confidential?",
        answer: "Yes, completely. Our online self-assessments (PHQ-9 for depression and GAD-7 for anxiety) are 100% confidential and run entirely on the client side. We do not store or collect your clinical scores or questionnaire answers on our servers. You can print the resulting report or save it as a PDF directly from your browser to share with your GP or therapist."
    },
    {
        question: "Where are my CBT Thought Records stored?",
        answer: "To prioritize your privacy, your interactive CBT Thought Records are saved locally in your web browser's storage (localStorage). They are never transmitted, stored, or processed on our backend database servers. This means your private emotional logs remain entirely under your control on your physical device. If you clear your browser cache, the logs will be removed."
    },
    {
        question: "What is your session fee structure?",
        answer: "EasyMed works on a transparent, commercially ethical flat-fee structure of £85 per standard 50-minute session. There are no registration admin fees, referral markups, or hidden commission percentages. The fee goes directly to supporting your accredited therapist and maintaining our interactive mental health resources."
    },
    {
        question: "How do I book a free 15-minute consultation?",
        answer: "You can book a free initial telephone consultation by clicking the 'Book Consultation' button in the navigation header or on any therapist's profile card. Select your preferred date and time, fill out your contact details, and a member of our clinical intake coordinator team (or your selected therapist) will call you at the requested slot."
    },
    {
        question: "Who should I contact in a mental health crisis?",
        answer: (
            <span>
                Our screening tools and directories are not emergency services. If you are experiencing a severe mental health crisis or thoughts of self-harm, please seek immediate help. You can call the NHS crisis line at <strong>111</strong>, contact your local GP, call the Samaritans at <strong>116 123</strong> (24/7 free hotline), or attend the nearest Accident & Emergency (A&E) department.
            </span>
        )
    }
];

export default function FAQsPage() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <section className="view-section active">
            <div className="section-title-wrap">
                <h2 className="section-title">Frequently Asked Questions</h2>
                <p className="section-subtitle">
                    Find immediate answers to common questions regarding our clinical standards, session bookings, and data privacy.
                </p>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {faqData.map((item, index) => {
                    const isOpen = activeIndex === index;
                    return (
                        <div 
                            key={index} 
                            className="glass-panel" 
                            style={{ 
                                padding: '1.5rem', 
                                cursor: 'pointer', 
                                transition: 'all 0.3s ease',
                                borderLeft: isOpen ? '4px solid var(--primary)' : '1px solid var(--border)'
                            }}
                            onClick={() => toggleAccordion(index)}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <HelpCircle size={20} color={isOpen ? 'var(--primary)' : 'var(--text-muted)'} style={{ flexShrink: 0 }} />
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>
                                        {item.question}
                                    </h3>
                                </div>
                                <div>
                                    {isOpen ? <ChevronUp size={18} color="var(--primary)" /> : <ChevronDown size={18} color="var(--text-muted)" />}
                                </div>
                            </div>
                            
                            {/* Animated collapse content */}
                            <div 
                                style={{ 
                                    maxHeight: isOpen ? '300px' : '0', 
                                    overflow: 'hidden', 
                                    transition: 'max-height 0.3s ease-in-out, opacity 0.3s ease-in-out',
                                    opacity: isOpen ? 1 : 0,
                                    marginTop: isOpen ? '1rem' : '0',
                                    paddingLeft: '2rem',
                                    color: 'var(--text-muted)',
                                    fontSize: '0.95rem',
                                    lineHeight: 1.6
                                }}
                            >
                                {item.answer}
                            </div>
                        </div>
                    );
                })}

                {/* Emergency Notice */}
                <div className="glass-panel" style={{ padding: '2rem', marginTop: '2.5rem', borderLeft: '4px solid var(--score-severe)', background: 'rgba(239, 68, 68, 0.05)' }}>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                        <AlertTriangle size={24} color="var(--score-severe)" style={{ flexShrink: 0 }} />
                        <div>
                            <h4 style={{ marginBottom: '0.5rem', color: 'var(--score-severe)', fontWeight: 700 }}>Crisis Support Notice</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                EasyMed CBT Services is an outpatient service and does not offer emergency psychiatric crisis management. If you feel you are unable to keep yourself safe, please contact <strong>NHS 111</strong> immediately, or dial <strong>999</strong> for emergency services.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
