"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  BookOpen, Brain, Activity, Heart, ShieldAlert, Sparkles, Smile, Info, 
  Lock, MessageSquare, CheckCircle, Compass, FlameKindling, Zap
} from 'lucide-react';

type TabType = 'conditions' | 'coping' | 'prep' | 'specialisms';

export default function SelfGuidedSupport() {
  const [activeTab, setActiveTab] = useState<TabType>('conditions');

  return (
    <section className="view-section active" style={{ maxWidth: '1360px', margin: '2rem auto', width: '100%', padding: '0 1rem' }}>
      {/* Page Title */}
      <div className="section-title-wrap" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '0.75rem' }}>Self Guided Support</span>
        <h1 className="section-title" style={{ fontSize: '2.75rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>Self-Guided Mental Health Support</h1>
        <p className="section-subtitle" style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
          Explore evidence-based clinical insights, self-help exercises, and preparation guides designed to build emotional resilience.
        </p>
      </div>

      {/* Interactive Tabs */}
      <div className="tabs-container" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
        <button 
          onClick={() => setActiveTab('conditions')}
          className={`tab-btn ${activeTab === 'conditions' ? 'active' : ''}`}
          style={{
            padding: '0.75rem 1.5rem',
            borderRadius: '50px',
            border: '1px solid var(--border)',
            background: activeTab === 'conditions' ? 'var(--primary)' : 'rgba(255, 255, 255, 0.02)',
            color: activeTab === 'conditions' ? '#ffffff' : 'var(--text-muted)',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.25s ease'
          }}
        >
          Understanding Conditions
        </button>
        <button 
          onClick={() => setActiveTab('coping')}
          className={`tab-btn ${activeTab === 'coping' ? 'active' : ''}`}
          style={{
            padding: '0.75rem 1.5rem',
            borderRadius: '50px',
            border: '1px solid var(--border)',
            background: activeTab === 'coping' ? 'var(--primary)' : 'rgba(255, 255, 255, 0.02)',
            color: activeTab === 'coping' ? '#ffffff' : 'var(--text-muted)',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.25s ease'
          }}
        >
          Coping & Self-Help
        </button>
        <button 
          onClick={() => setActiveTab('prep')}
          className={`tab-btn ${activeTab === 'prep' ? 'active' : ''}`}
          style={{
            padding: '0.75rem 1.5rem',
            borderRadius: '50px',
            border: '1px solid var(--border)',
            background: activeTab === 'prep' ? 'var(--primary)' : 'rgba(255, 255, 255, 0.02)',
            color: activeTab === 'prep' ? '#ffffff' : 'var(--text-muted)',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.25s ease'
          }}
        >
          Preparing for Therapy
        </button>
        <button 
          onClick={() => setActiveTab('specialisms')}
          className={`tab-btn ${activeTab === 'specialisms' ? 'active' : ''}`}
          style={{
            padding: '0.75rem 1.5rem',
            borderRadius: '50px',
            border: '1px solid var(--border)',
            background: activeTab === 'specialisms' ? 'var(--primary)' : 'rgba(255, 255, 255, 0.02)',
            color: activeTab === 'specialisms' ? '#ffffff' : 'var(--text-muted)',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.25s ease'
          }}
        >
          Therapy Specialisms
        </button>
      </div>

      {/* Tab Content Area */}
      <div className="tab-content" style={{ minHeight: '400px' }}>
        
        {/* Tab 1: Understanding Mental Health Conditions */}
        {activeTab === 'conditions' && (
          <div style={{ animation: 'fadeIn 0.3s ease' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--text-main)', textAlign: 'center' }}>
              Understanding Mental Health Conditions
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
              Evidence-based clinical information to support understanding and decision-making for clients, referrers, and families.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="conditions-grid">
              
              <div className="glass-panel" style={{ padding: '2rem', border: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <Brain size={22} color="var(--primary)" />
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, fontFamily: 'var(--font-heading)' }}>Anxiety Disorders</h3>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                  Anxiety may present as excessive worry, physical tension, avoidance behaviours, and physiological symptoms such as palpitations or breathlessness. Panic attacks involve sudden, intense fear accompanied by physical symptoms. Treatment may include CBT, exposure-based interventions, and lifestyle adjustments.
                </p>
              </div>

              <div className="glass-panel" style={{ padding: '2rem', border: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <Activity size={22} color="var(--primary)" />
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, fontFamily: 'var(--font-heading)' }}>Depression</h3>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                  Depression involves persistent low mood, loss of interest, sleep disturbance, appetite changes, reduced concentration, and feelings of hopelessness. Treatment pathways include psychological therapy, medication, and lifestyle interventions.
                </p>
              </div>

              <div className="glass-panel" style={{ padding: '2rem', border: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <Heart size={22} color="var(--primary)" />
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, fontFamily: 'var(--font-heading)' }}>Eating Disorders</h3>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                  Eating disorders include anorexia nervosa, bulimia nervosa, binge eating disorder, and ARFID. Early signs may include food avoidance, rigid rules around eating, weight changes, excessive exercise, and preoccupation with body image. NICE recommends CBT-E as a first-line intervention.
                </p>
              </div>

              <div className="glass-panel" style={{ padding: '2rem', border: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <ShieldAlert size={22} color="var(--primary)" style={{ stroke: 'rgba(239, 68, 68, 0.8)' }} />
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, fontFamily: 'var(--font-heading)' }}>Self-Harm</h3>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                  Self-harm may be used as a coping mechanism for emotional distress. It requires sensitive assessment of intent, risk, and underlying factors. Support includes safety planning, emotion regulation skills, and therapeutic intervention.
                </p>
              </div>

              <div className="glass-panel" style={{ padding: '2rem', border: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <Sparkles size={22} color="var(--primary)" />
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, fontFamily: 'var(--font-heading)' }}>Trauma and PTSD</h3>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                  Trauma responses may include flashbacks, nightmares, hypervigilance, avoidance, and emotional dysregulation. PTSD may develop following exposure to traumatic events. Trauma-informed therapy focuses on stabilisation, processing, and integration.
                </p>
              </div>

              <div className="glass-panel" style={{ padding: '2rem', border: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <Smile size={22} color="var(--primary)" />
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, fontFamily: 'var(--font-heading)' }}>Neurodiversity</h3>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                  Conditions such as autism and ADHD may affect communication, sensory processing, attention, and emotional regulation. Support includes psychoeducation, environmental adjustments, and tailored therapeutic approaches.
                </p>
              </div>

              <div className="glass-panel" style={{ padding: '2rem', border: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <Compass size={22} color="var(--primary)" />
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, fontFamily: 'var(--font-heading)' }}>Attachment and Relational Difficulties</h3>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                  Attachment patterns influence emotional regulation, relationships, and interpersonal functioning. Therapy may explore early experiences, relational patterns, and strategies for healthier connections.
                </p>
              </div>

              <div className="glass-panel" style={{ padding: '2rem', border: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <FlameKindling size={22} color="var(--primary)" style={{ stroke: 'rgba(239, 68, 68, 0.8)' }} />
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, fontFamily: 'var(--font-heading)' }}>Psychosis</h3>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                  Psychosis involves hallucinations, delusions, disorganised thinking, and significant changes in behaviour. Early intervention is essential. Treatment may include medication, psychological therapy, and multi-agency support.
                </p>
              </div>

            </div>
          </div>
        )}

        {/* Tab 2: Self-Help Tools and Coping Strategies */}
        {activeTab === 'coping' && (
          <div style={{ animation: 'fadeIn 0.3s ease' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--text-main)', textAlign: 'center' }}>
              Self-Help Tools & Coping Strategies
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
              Evidence-based strategies drawn from CBT, DBT, and trauma-informed care to support your mental wellbeing between sessions.
            </p>

            {/* Dynamic Interactive Call to Action */}
            <div className="glass-panel" style={{ padding: '2rem', marginBottom: '3rem', borderLeft: '4px solid var(--secondary)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
              <div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.25rem', color: 'var(--text-main)' }}>Try Our Free Interactive Digital Tools</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
                  Take clinical-grade screenings or record and challenge thoughts in real-time.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link href="/assessments" className="btn btn-secondary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>
                  Self-Assessments
                </Link>
                <Link href="/cbt-tools" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>
                  CBT Thought Record
                </Link>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="coping-grid">
              
              <div className="glass-card" style={{ padding: '2rem', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>Grounding Techniques</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                  Used to manage acute distress, reduce dissociation, and anchor attention back to the present physical moment. Focus on sensory inputs (such as the 5-4-3-2-1 technique: notice 5 things you see, 4 you feel, 3 you hear, 2 you smell, 1 you taste).
                </p>
              </div>

              <div className="glass-card" style={{ padding: '2rem', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>Breathing Exercises</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                  Regulate autonomic nervous system arousal, soothe panic triggers, and reduce physiological symptoms of anxiety. Try &quot;box breathing&quot; (inhale for 4 seconds, hold for 4, exhale for 4, hold for 4) to restore biological calm.
                </p>
              </div>

              <div className="glass-card" style={{ padding: '2rem', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>Managing Panic Attacks</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                  Includes controlled diaphragmatic breathing, cognitive reframing (reminding yourself that panic is uncomfortable but not dangerous), and sensory grounding to ride out the intense physical peak.
                </p>
              </div>

              <div className="glass-card" style={{ padding: '2rem', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>Emotion Regulation</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                  Skills drawn from CBT and Dialectical Behaviour Therapy (DBT) to identify, validate, and moderate intense emotional waves, helping to slow impulsivity and support mental stability.
                </p>
              </div>

              <div className="glass-card" style={{ padding: '2rem', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>Sleep Hygiene</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                  Establish consistent schedules, limit screen light exposure, restrict caffeine, and optimize your bedroom environment to build positive associations that support restorative sleep cycles.
                </p>
              </div>

              <div className="glass-card" style={{ padding: '2rem', border: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>Healthy Routines</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                  Structuring daily habits with balanced nutrition, moderate movement, social connection, and structured sleep schedules to form a baseline biological foundation for mental health.
                </p>
              </div>

            </div>
          </div>
        )}

        {/* Tab 3: Preparing for Therapy */}
        {activeTab === 'prep' && (
          <div style={{ animation: 'fadeIn 0.3s ease' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--text-main)', textAlign: 'center' }}>
              Preparing for Therapy
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem', lineHeight: 1.6 }}>
              Clear guidance to help you feel informed, confident, and prepared when beginning your therapy journey.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', maxWidth: '800px', margin: '0 auto' }}>
              
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <div style={{ flexShrink: 0, width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'var(--primary)' }}>
                  1
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>What to Expect</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    Your first session typically includes a structured clinical assessment, exploration of presenting difficulties, discussion of goals and expectations, risk assessment and safeguarding considerations, and collaborative agreement of therapeutic boundaries.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <div style={{ flexShrink: 0, width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'var(--primary)' }}>
                  2
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>How Therapy Works</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    Ontime Therapy uses evidence-based, collaborative, and paced clinical approaches, including integrative psychotherapy, trauma-informed practices, relational techniques, and Specialist Supportive Clinical Management (SSCM) or CBT-E for eating disorders.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <div style={{ flexShrink: 0, width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'var(--primary)' }}>
                  3
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>Confidentiality</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    All clinical sessions are strictly confidential. The only exceptions occur where there is a clear, imminent risk of harm to yourself or others, or safeguarding concerns requiring statutory reporting under UK law.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <div style={{ flexShrink: 0, width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'var(--primary)' }}>
                  4
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>Discussing Difficult Topics</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    Therapy provides a safe, non-judgemental space to explore sensitive issues. You are in control, and you will never be pressured to disclose more than you feel ready to share.
                  </p>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab 4: Therapy Specialisms at Ontime Therapy */}
        {activeTab === 'specialisms' && (
          <div style={{ animation: 'fadeIn 0.3s ease' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--text-main)', textAlign: 'center' }}>
              Therapy Specialisms at Ontime Therapy
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem', lineHeight: 1.6 }}>
              Our senior practitioners hold specialized certifications and extensive clinical experience in targeted treatment pathways.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="specialisms-grid">
              
              <div className="glass-panel" style={{ padding: '2rem', display: 'flex', gap: '1.25rem', alignItems: 'start' }}>
                <div style={{ padding: '0.6rem', borderRadius: '8px', background: 'rgba(255, 120, 36, 0.08)', color: 'var(--primary)', flexShrink: 0 }}>
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>CBT-E for Eating Disorders</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                    Enhanced Cognitive Behavioural Therapy (CBT-E) is a highly specialized, evidence-based treatment specifically designed to address eating disorders. It focuses on eating disorder psychopathology (e.g., body image distress, rigid eating rules, dietary restrictions) rather than just weight.
                  </p>
                </div>
              </div>

              <div className="glass-panel" style={{ padding: '2rem', display: 'flex', gap: '1.25rem', alignItems: 'start' }}>
                <div style={{ padding: '0.6rem', borderRadius: '8px', background: 'rgba(255, 120, 36, 0.08)', color: 'var(--primary)', flexShrink: 0 }}>
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>Integrative Psychotherapy</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                    A holistic approach that blends elements from different therapeutic models (such as CBT, humanistic, and psychodynamic) to suit each client’s unique needs, personality, and recovery goals.
                  </p>
                </div>
              </div>

              <div className="glass-panel" style={{ padding: '2rem', display: 'flex', gap: '1.25rem', alignItems: 'start' }}>
                <div style={{ padding: '0.6rem', borderRadius: '8px', background: 'rgba(255, 120, 36, 0.08)', color: 'var(--primary)', flexShrink: 0 }}>
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>Trauma-Informed Practice</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                    Prioritizes emotional safety, empowerment, trust, and choice. Focuses on stabilization, trauma processing, and cognitive-emotional integration while avoiding re-traumatization.
                  </p>
                </div>
              </div>

              <div className="glass-panel" style={{ padding: '2rem', display: 'flex', gap: '1.25rem', alignItems: 'start' }}>
                <div style={{ padding: '0.6rem', borderRadius: '8px', background: 'rgba(255, 120, 36, 0.08)', color: 'var(--primary)', flexShrink: 0 }}>
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>Attachment-Based Therapy</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                    Explores how early childhood bonds and experiences shape adult relational patterns, self-esteem, and capacity for emotional regulation, building pathways to healthier connections.
                  </p>
                </div>
              </div>

              <div className="glass-panel specialisms-wide-card" style={{ padding: '2rem', display: 'flex', gap: '1.25rem', alignItems: 'start', gridColumn: 'span 2' }}>
                <div style={{ padding: '0.6rem', borderRadius: '8px', background: 'rgba(255, 120, 36, 0.08)', color: 'var(--primary)', flexShrink: 0 }}>
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>Systemic and Relational Approaches</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                    Addresses difficulties not just within the individual, but within the context of relationships, family units, and broader social networks, fostering relational understanding and communication.
                  </p>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>

      {/* Return to Hub */}
      <div style={{ textAlign: 'center', marginTop: '5rem', marginBottom: '2rem' }}>
        <Link href="/useful-information" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          ← Back to Resource Hub
        </Link>
      </div>

      {/* Responsive adjustments CSS */}
      <style jsx>{`
        @media (max-width: 900px) {
          .conditions-grid,
          .specialisms-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .specialisms-wide-card {
            grid-column: span 1 !important;
          }
        }
        @media (max-width: 768px) {
          .coping-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}
