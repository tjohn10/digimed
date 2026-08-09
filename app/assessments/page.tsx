import Link from 'next/link';
import { Activity, ShieldAlert, AlertCircle, BookOpen, Clipboard, Apple, FileText, UserCheck, Scale } from 'lucide-react';

export default function AssessmentsHub() {
  return (
    <div className="assessments-hub" style={{ maxWidth: '1280px', margin: '0 auto', width: '100%', padding: '0 1rem' }}>
      <div className="section-title-wrap" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '0.75rem' }}>Clinical Screeners</span>
        <h1 className="section-title" style={{ fontSize: '2.75rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>Free Confidential Self-Assessments</h1>
        <p className="section-subtitle" style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
          Screening questionnaires can help identify trends in your thoughts, emotions, and behaviors. Select one of our clinical-standard screening tests below to get immediate insights and recommendations.
        </p>
      </div>
      
      <div className="assessment-selector-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        <Link href="/assessments/phq9" className="glass-panel selection-card" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="icon">
            <Activity size={32} color="var(--primary)" />
          </div>
          <h3>PHQ-9 Depression Screener</h3>
          <p>
            A 9-question patient health questionnaire mapping to DSM-5 criteria. Measures severity of depressive symptoms and emotional distress over the past 2 weeks.
          </p>
          <button className="btn btn-primary" style={{ marginTop: 'auto' }}>Start PHQ-9 Screener</button>
        </Link>

        <Link href="/assessments/gad7" className="glass-panel selection-card" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="icon">
            <ShieldAlert size={32} color="var(--primary)" />
          </div>
          <h3>GAD-7 Anxiety Screener</h3>
          <p>
            A 7-question clinical tool measuring generalized anxiety symptoms. Ideal for gauging worries, tension, and nervous behaviors over the past 2 weeks.
          </p>
          <button className="btn btn-primary" style={{ marginTop: 'auto' }}>Start GAD-7 Screener</button>
        </Link>

        <Link href="/assessments/edq" className="glass-panel selection-card" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="icon">
            <Apple size={32} color="var(--primary)" />
          </div>
          <h3>EDQ Eating Disorder Screener</h3>
          <p>
            A 10-question specialist screener based on CBT-E frameworks. Evaluates food restriction, body image preoccupation, and compensatory eating behaviors.
          </p>
          <button className="btn btn-primary" style={{ marginTop: 'auto' }}>Start EDQ Screener</button>
        </Link>

        <Link href="/assessments/rcads" className="glass-panel selection-card" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="icon">
            <Clipboard size={32} color="var(--primary)" />
          </div>
          <h3>RCADS Anxiety &amp; Depression</h3>
          <p>
            Revised Children's Anxiety and Depression Scale. A 47-question clinical screening tool with youth and parent/carer versions.
          </p>
          <button className="btn btn-primary" style={{ marginTop: 'auto' }}>Start RCADS Screener</button>
        </Link>

        <Link href="/assessments/edeq" className="glass-panel selection-card" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="icon">
            <Scale size={32} color="var(--primary)" />
          </div>
          <h3>EDE-Q 6.0 Full Assessment</h3>
          <p>
            The official 28-item Eating Disorder Examination Questionnaire. Measures restraint, eating concern, shape concern, and weight concern over the past 28 days.
          </p>
          <button className="btn btn-primary" style={{ marginTop: 'auto' }}>Start EDE-Q 6.0 Assessment</button>
        </Link>
      </div>

      {/* Policy Consent Documents section */}
      <div className="section-title-wrap" style={{ marginTop: '5rem', textAlign: 'center', marginBottom: '3rem' }}>
        <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '0.75rem' }}>Client Agreements &amp; Intake</span>
        <h2 className="section-title" style={{ fontSize: '2.5rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>Clinical Consent &amp; Safeguarding Documents</h2>
        <p className="section-subtitle" style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
          Please review, complete, and print/save our client consent forms, online counselling agreement, and data confidentiality policies before your scheduled sessions.
        </p>
      </div>

      <div className="assessment-selector-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
        <Link href="/self-referral" className="glass-panel selection-card" style={{ textDecoration: 'none', color: 'inherit', borderLeft: '4px solid var(--primary)', background: 'var(--bg-panel-hover)' }}>
          <div className="icon" style={{ background: 'rgba(255, 120, 36, 0.12)' }}>
            <UserCheck size={32} color="var(--primary)" />
          </div>
          <h3>Client Self-Referral Form</h3>
          <p>
            Standalone client registration and triage form. Submit your contact details, goals, medical history, and GP details directly to the clinician.
          </p>
          <button className="btn btn-primary" style={{ marginTop: 'auto' }}>Fill Self-Referral Form</button>
        </Link>

        <Link href="/assessments/counselling-agreement" className="glass-panel selection-card" style={{ textDecoration: 'none', color: 'inherit', borderLeft: '4px solid var(--primary)' }}>
          <div className="icon">
            <FileText size={32} color="var(--primary)" />
          </div>
          <h3>Online Counselling Agreement</h3>
          <p>
            Official practice agreement detailing Person-Centred therapy terms, online chat/Zoom/email modalities, ACCPH/NMC ethical codes, and safety protocols.
          </p>
          <button className="btn btn-secondary" style={{ marginTop: 'auto', color: 'var(--primary)', borderColor: 'var(--primary)' }}>View Agreement Policy</button>
        </Link>

        <Link href="/assessments/consent-form" className="glass-panel selection-card" style={{ textDecoration: 'none', color: 'inherit', borderLeft: '4px solid var(--secondary)' }}>
          <div className="icon">
            <Activity size={32} color="var(--secondary)" />
          </div>
          <h3>Client Consent Form</h3>
          <p>
            Consent to share routine clinical information with healthcare agencies and understanding of UK/Jersey safeguarding frameworks.
          </p>
          <button className="btn btn-secondary" style={{ marginTop: 'auto', color: 'var(--secondary)', borderColor: 'var(--secondary)' }}>Fill &amp; Sign Consent</button>
        </Link>

        <Link href="/assessments/confidentiality-policy" className="glass-panel selection-card" style={{ textDecoration: 'none', color: 'inherit', borderLeft: '4px solid var(--secondary)' }}>
          <div className="icon">
            <BookOpen size={32} color="var(--secondary)" />
          </div>
          <h3>Confidentiality &amp; Consent Policy</h3>
          <p>
            Combined policy overview detailing data protection rights, parent/carer involvement, and clinical confidentiality limits under UK &amp; Jersey laws.
          </p>
          <button className="btn btn-secondary" style={{ marginTop: 'auto', color: 'var(--secondary)', borderColor: 'var(--secondary)' }}>Fill &amp; Sign Policy</button>
        </Link>
      </div>

      <div className="glass-panel" style={{ padding: '2rem 2.5rem', marginTop: '3rem', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
          <AlertCircle size={26} color="#06b6d4" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <h4 style={{ marginBottom: '0.5rem', fontSize: '1.1rem', fontWeight: 700 }}>Important Medical Disclaimer</h4>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
              These assessments are self-report screening questionnaires and do not constitute a formal psychiatric diagnosis. Scores are intended to act as an indication of symptoms and can serve as a useful starting point for discussions with a general practitioner, psychiatrist, or qualified CBT therapist.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
