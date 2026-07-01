"use client";

import React from 'react';
import { Target, Users, BookOpen, BrainCircuit, Activity, HeartHandshake } from 'lucide-react';
import Link from 'next/link';

export default function ApproachPage() {
  return (
    <section className="view-section active" style={{ maxWidth: '900px', margin: '2rem auto' }}>
      
      {/* Title */}
      <div className="section-title-wrap" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '0.75rem' }}>Our Philosophy</span>
        <h1 className="section-title" style={{ fontSize: '2.75rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>Our Therapeutic Approach</h1>
        <p className="section-subtitle" style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
          Discover the principles behind Cognitive Behavioural Therapy (CBT) and how we construct individualized, evidence-based paths to emotional wellness.
        </p>
      </div>

      {/* Main explanation layout */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        
        {/* Core definition */}
        <div className="approach-intro-grid">
          <div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.25rem', fontFamily: 'var(--font-heading)', lineHeight: 1.3 }}>
              What is Cognitive Behavioural Therapy (CBT)?
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1rem' }}>
              Cognitive Behavioural Therapy (CBT) is a highly structured, evidence-based psychological treatment. It operates on a simple, powerful premise: <strong>our thoughts, emotions, physical sensations, and actions are deeply interconnected</strong>.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7 }}>
              When we experience distress, we often fall into cyclical, unhelpful patterns of thinking (cognitive distortions) and behavior (avoidance, safety checks). CBT helps you identify, dismantle, and reconstruct these patterns into balanced, adaptive responses.
            </p>
          </div>
          
          <div className="glass-panel" style={{ padding: '2rem', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ padding: '0.5rem', background: 'rgba(255, 120, 36, 0.08)', borderRadius: '8px', display: 'inline-flex', alignSelf: 'start' }}>
              <BrainCircuit size={24} color="var(--primary)" />
            </div>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0 }}>The Interconnected Cycle</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
              A single event triggers a **thought** (&quot;I can't handle this&quot;), which dictates an **emotion** (panic), activates a **physical sensation** (chest tightness), and results in a **behavior** (avoidance). CBT gives you the tools to intervene and break this chain at any point.
            </p>
          </div>
        </div>

        {/* Why CBT works */}
        <div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '2rem', fontFamily: 'var(--font-heading)', textAlign: 'center' }}>
            Why CBT Works
          </h2>
          
          <div className="approach-three-grid">
            <div className="glass-panel" style={{ padding: '2rem', border: '1px solid var(--border)', textAlign: 'center' }}>
              <div style={{ margin: '0 auto 1.25rem', width: '50px', height: '50px', background: 'rgba(6, 182, 212, 0.08)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Activity size={24} color="var(--secondary)" />
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>Evidence-Based</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>
                CBT is supported by decades of rigorous clinical trial data. It is globally recognized as the gold standard of psychotherapy for anxiety, depression, trauma, and eating disorders.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '2rem', border: '1px solid var(--border)', textAlign: 'center' }}>
              <div style={{ margin: '0 auto 1.25rem', width: '50px', height: '50px', background: 'rgba(6, 182, 212, 0.08)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Target size={24} color="var(--secondary)" />
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>Goal-Focused</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>
                We do not just talk about the past. Together we identify tangible, active goals for recovery and measure your symptoms over time using clinical screeners.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '2rem', border: '1px solid var(--border)', textAlign: 'center' }}>
              <div style={{ margin: '0 auto 1.25rem', width: '50px', height: '50px', background: 'rgba(6, 182, 212, 0.08)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <BookOpen size={24} color="var(--secondary)" />
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>Skills for Life</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>
                CBT aims to make you &quot;your own therapist.&quot; You will learn practical worksheets, cognitive challenging skills, and behavioral habits that serve you long after therapy ends.
              </p>
            </div>
          </div>
        </div>

        {/* Practice Principles */}
        <div className="glass-panel" style={{ padding: '3rem', border: '1px solid var(--border)', background: 'var(--bg-card)' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', textAlign: 'center', color: 'var(--text-main)' }}>
            Our Clinical Partnership Principles
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'start' }}>
              <div style={{ padding: '0.5rem', borderRadius: '8px', background: 'rgba(255, 120, 36, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Users size={20} color="var(--primary)" />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 0.25rem' }}>Collaborative Empathetic Dialogue</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                  We work as co-investigators. You are the expert on your life, and I am the expert on the psychological tools. Together, we analyze, experiment, and decide which methods support your recovery.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'start' }}>
              <div style={{ padding: '0.5rem', borderRadius: '8px', background: 'rgba(255, 120, 36, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <HeartHandshake size={20} color="var(--primary)" />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 0.25rem' }}>Strict Individualized Treatments</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                  No two clients are identical. Your therapy structure is meticulously formatted to fit your diagnosis, personal history, lifestyle factors, and specific pace of emotional healing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Block */}
        <div style={{ textAlign: 'center', marginTop: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-heading)', margin: 0 }}>Ready to begin your healing journey?</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '500px', margin: 0 }}>
            Get matched directly with a senior mental health practitioner for online or in-person therapy.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/book" className="btn btn-primary" style={{ padding: '0.8rem 2rem' }}>
              Get Therapy
            </Link>
            <Link href="/services" className="btn btn-secondary" style={{ padding: '0.8rem 2rem' }}>
              View Our Services
            </Link>
          </div>
        </div>

      </div>
      
    </section>
  );
}
