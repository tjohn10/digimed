import Link from 'next/link';
import { Activity, ShieldAlert, AlertCircle, BookOpen, Clipboard } from 'lucide-react';

export default function AssessmentsHub() {
  return (
    <div className="assessments-hub">
      <div className="section-title-wrap">
        <h2 className="section-title">Free Confidential Self-Assessments</h2>
        <p className="section-subtitle">
          Screening questionnaires can help identify trends in your thoughts and behavior. Select one of our clinical-standard screening tests below to get immediate insights and recommendations.
        </p>
      </div>
      
      <div className="assessment-selector-grid">
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

        <Link href="/assessments/rcads" className="glass-panel selection-card" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="icon">
            <Clipboard size={32} color="var(--primary)" />
          </div>
          <h3>RCADS Anxiety & Depression</h3>
          <p>
            Revised Children's Anxiety and Depression Scale. A 47-question clinical screening tool with youth and parent/carer versions.
          </p>
          <button className="btn btn-primary" style={{ marginTop: 'auto' }}>Start RCADS Screener</button>
        </Link>
      </div>

      {/* Policy Consent Documents section */}
      <div className="section-title-wrap" style={{ marginTop: '4rem' }}>
        <h2 className="section-title">Clinical Consent & Safeguarding Documents</h2>
        <p className="section-subtitle">
          Please review, complete, and print/save our client consent and data confidentiality agreements before your first scheduled clinical session.
        </p>
      </div>

      <div className="assessment-selector-grid" style={{ marginBottom: '2rem' }}>
        <Link href="/assessments/consent-form" className="glass-panel selection-card" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="icon">
            <Activity size={32} color="var(--secondary)" />
          </div>
          <h3>Client Consent Form</h3>
          <p>
            Consent to share routine clinical information with healthcare agencies and understanding of UK/Jersey safeguarding frameworks.
          </p>
          <button className="btn btn-secondary" style={{ marginTop: 'auto', color: 'var(--secondary)', borderColor: 'var(--secondary)' }}>Fill & Sign Consent Form</button>
        </Link>

        <Link href="/assessments/confidentiality-policy" className="glass-panel selection-card" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="icon">
            <BookOpen size={32} color="var(--secondary)" />
          </div>
          <h3>Confidentiality & Consent Policy</h3>
          <p>
            Combined policy overview detailing data protection rights, parent/carer involvement, and clinical confidentiality limits under UK & Jersey laws.
          </p>
          <button className="btn btn-secondary" style={{ marginTop: 'auto', color: 'var(--secondary)', borderColor: 'var(--secondary)' }}>Fill & Sign Policy Document</button>
        </Link>
      </div>

      <div className="glass-panel" style={{ padding: '2rem', marginTop: '2rem' }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
          <AlertCircle size={24} color="#06b6d4" style={{ flexShrink: 0 }} />
          <div>
            <h4 style={{ marginBottom: '0.5rem' }}>Important Medical Disclaimer</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              These assessments are self-report screening questionnaires and do not constitute a formal psychiatric diagnosis. Scores are intended to act as an indication of symptoms and can serve as a useful starting point for discussions with a general practitioner, psychiatrist, or qualified CBT therapist.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
