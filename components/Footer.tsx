import Link from 'next/link';
import { Activity } from 'lucide-react';

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            <div className="logo-icon">
              <Activity size={20} color="white" />
            </div>
            <div>Easy<span>Med</span></div>
          </Link>
          <p className="footer-desc">
            Accredited psychological services providing gold-standard Cognitive Behavioral Therapy (CBT) online and in clinics across the UK.
          </p>
        </div>
        
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link href="/" className="footer-link">Home</Link></li>
            <li><Link href="/assessments" className="footer-link">Confidential Self-Assessments</Link></li>
            <li><Link href="/therapists" className="footer-link">Find a Therapist</Link></li>
            <li><Link href="/cbt-tools" className="footer-link">CBT Thought Record</Link></li>
            <li><Link href="/faqs" className="footer-link">FAQs</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Self-Assessments</h4>
          <ul className="footer-links">
            <li><Link href="/assessments/phq9" className="footer-link">PHQ-9 Depression Screener</Link></li>
            <li><Link href="/assessments/gad7" className="footer-link">GAD-7 Anxiety Screener</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Support</h4>
          <ul className="footer-links">
            <li><Link href="/?booking=general" className="footer-link">Request Consultation</Link></li>
            <li>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Email: <a href="mailto:info@easymed-cbt.co.uk" style={{ color: 'var(--primary)', textDecoration: 'none' }}>info@easymed-cbt.co.uk</a>
              </p>
            </li>
            <li>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Tel: +44 (0) 20 8012 3456
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div>© 2026 EasyMed Clinical Services Ltd. All rights reserved.</div>
        <div>Registered UK Provider | BABCP Accredited Practitioners</div>
      </div>
    </footer>
  );
}
