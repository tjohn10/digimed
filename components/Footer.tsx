"use client";

import Link from 'next/link';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ marginTop: 'auto', borderTop: '1px solid var(--border)', background: 'var(--bg-dark)', padding: '4.5rem 2rem 2.5rem' }}>
      <div className="footer-container">
        
        {/* Branding & Governing Body */}
        <div className="footer-brand" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <Link href="/" className="footer-logo" style={{ textDecoration: 'none', display: 'inline-flex' }}>
            <div style={{ background: '#ffffff', padding: '4px 8px', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
              <img src="/images/logo.jpg" alt="Ontime Therapy Logo" style={{ height: '32px', objectFit: 'contain' }} />
            </div>
          </Link>
          <p className="footer-desc" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, maxWidth: '300px', margin: 0 }}>
            Accredited psychological and CBT services providing goal-oriented Cognitive Behavioral Therapy and specialist eating disorder treatments.
          </p>
          <div style={{ marginTop: '0.75rem' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase' }}>GOVERNING BODY</p>
            <div style={{ background: '#ffffff', padding: '6px 12px', borderRadius: '8px', display: 'inline-block', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.02)' }}>
              <img src="/images/accph-member.jpg" alt="ACCPH Member Logo" style={{ height: '36px', objectFit: 'contain', display: 'block' }} />
            </div>
          </div>
          <div style={{ marginTop: '0.5rem' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.75rem', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase' }}>Follow Us</p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a 
                href="https://www.instagram.com/ontimetherapyservice?igsh=MXMxMXViNXBtNGlrcQ==" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-icon-link"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  textDecoration: 'none'
                }}
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.facebook.com/photo/?fbid=122100079833383447&set=a.122100079845383447" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="social-icon-link"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  textDecoration: 'none'
                }}
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Quick Links */}
        <div className="footer-column" style={{ display: 'flex', flexDirection: 'column' }}>
          <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text-main)' }}>Quick Links</h4>
          <ul className="footer-links" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <li><Link href="/" className="footer-link" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Home</Link></li>
            <li><Link href="/about" className="footer-link" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Meet Your Therapist</Link></li>
            <li><Link href="/services" className="footer-link" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Our Services</Link></li>
            <li><Link href="/approach" className="footer-link" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Our Approach</Link></li>
            <li><Link href="/faq" className="footer-link" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>FAQ & Policies</Link></li>
            <li><Link href="/useful-information" className="footer-link" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Useful Info Hub</Link></li>
            <li><Link href="/useful-information/self-guided" className="footer-link" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Self Guided Support</Link></li>
            <li><Link href="/useful-information/parental-support" className="footer-link" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>Parental Support</Link></li>
            <li><Link href="/useful-information/crisis-advice" className="footer-link" style={{ color: '#ef4444', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>Crisis Advice</Link></li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div className="footer-column" style={{ display: 'flex', flexDirection: 'column' }}>
          <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text-main)' }}>Opening Hours</h4>
          <ul className="footer-links" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            <li style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Mon - Fri:</span>
              <span style={{ fontWeight: 500, color: 'var(--text-main)' }}>8:00 AM - 8:00 PM</span>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Saturday:</span>
              <span style={{ fontWeight: 500, color: 'var(--text-main)' }}>9:00 AM - 4:00 PM</span>
            </li>
            <li style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Sunday:</span>
              <span style={{ color: 'var(--primary)' }}>Closed</span>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-column" style={{ display: 'flex', flexDirection: 'column' }}>
          <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text-main)' }}>Contact Details</h4>
          <ul className="footer-links" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            <li style={{ wordBreak: 'break-all' }}>
              <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.2rem', textTransform: 'uppercase' }}>Email</span>
              <a href="mailto:contact@ontimetherapy.com" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }}>contact@ontimetherapy.com</a>
            </li>
            <li>
              <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.2rem', textTransform: 'uppercase' }}>Phone</span>
              <a href="tel:+447497208249" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 600 }}>+44 7497 208249</a>
            </li>
            <li>
              <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.2rem', textTransform: 'uppercase' }}>Location</span>
              <span style={{ color: 'var(--text-main)', fontWeight: 500 }}>Jersey island, Staffordshire, online uk</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom" style={{ maxWidth: '1280px', margin: '3.5rem auto 0', paddingTop: '2rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
        <div>© 2026 OTT Psychotherapy (Ontime Therapy) Ltd. All rights reserved.</div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <Link href="/faq" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Cancellation Policy</Link>
          <Link href="/faq" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Safeguarding Policy</Link>
        </div>
      </div>
      
    </footer>
  );
}
