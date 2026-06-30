import Link from 'next/link';
import { ArrowRight, Clock, Shield, DollarSign, BookOpen } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <Shield size={16} />
            Clinical Excellence & Accredited Care
          </div>
          <h1>Your Journey to <span>Mental Wellness</span> Starts Here</h1>
          <p className="hero-desc">
            Reclaim control of your mind with evidence-based Cognitive Behavioral Therapy (CBT). Connect with BABCP-accredited specialists, take clinical-grade self-assessments, and work with interactive, digital mental tools built to support your daily wellness.
          </p>
          <div className="hero-actions">
            <Link href="/assessments" className="btn btn-primary">
              Take Free Assessment
              <ArrowRight size={18} />
            </Link>
            <Link href="/therapists" className="btn btn-secondary">
              Find a CBT Therapist
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-glass-blob"></div>
          <div className="glass-panel hero-card">
            <div className="hero-card-icon">
              <Clock size={30} color="var(--primary)" />
            </div>
            <h3>Zero Waiting Lists</h3>
            <p>Access specialized therapist sessions online or in-person with quick, direct matching in under 48 hours.</p>
            <Link href="/?booking=general" className="btn btn-secondary" style={{ width: '100%', padding: '0.6rem' }}>
              Free Phone Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Showcase */}
      <div className="stats-grid">
        <div className="glass-panel stat-card">
          <div className="stat-num">100%</div>
          <div className="stat-label">BABCP Accredited Therapists</div>
        </div>
        <div className="glass-panel stat-card">
          <div className="stat-num">15k+</div>
          <div className="stat-label">Consultations Provided</div>
        </div>
        <div className="glass-panel stat-card">
          <div className="stat-num">48h</div>
          <div className="stat-label">Average Connection Time</div>
        </div>
        <div className="glass-panel stat-card">
          <div className="stat-num">4.9/5</div>
          <div className="stat-label">Client Feedback Rating</div>
        </div>
      </div>

      {/* Core Pillars Section */}
      <div className="section-title-wrap">
        <h2 className="section-title">Why Choose EasyMed CBT?</h2>
        <p className="section-subtitle">
          We believe in transparent pricing, gold-standard clinical accreditation, and interactive tools that put your wellness back in your own hands.
        </p>
      </div>
      
      <div className="pillars-grid">
        <div className="glass-card pillar-card">
          <div className="pillar-icon">
            <Shield size={24} color="var(--secondary)" />
          </div>
          <h3>BABCP Gold-Standard</h3>
          <p>
            Unlike general counselor directories, every specialist in the EasyMed team holds full accreditation with the BABCP (British Association for Behavioural and Cognitive Psychotherapies), the highest UK standard for CBT.
          </p>
        </div>
        <div className="glass-card pillar-card">
          <div className="pillar-icon">
            <DollarSign size={24} color="var(--secondary)" />
          </div>
          <h3>Transparent Ethical Fees</h3>
          <p>
            We work on a flat session rate (£85 per session). This fee goes directly to supporting our practitioners, meaning no hidden administrative percentages or referral markups.
          </p>
        </div>
        <div className="glass-card pillar-card">
          <div className="pillar-icon">
            <BookOpen size={24} color="var(--secondary)" />
          </div>
          <h3>Interactive Digital Tools</h3>
          <p>
            Therapy shouldn't end when your session does. Access our interactive digital worksheets, self-assessments, and logs to challenge automatic thoughts and track your scores over time.
          </p>
        </div>
      </div>
    </>
  );
}
