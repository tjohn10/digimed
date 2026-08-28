"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, Printer, Shield, CheckCircle2, AlertTriangle, 
  Send, FileText, User, Phone, Mail, Calendar, MapPin, HeartHandshake, Lock
} from 'lucide-react';

export default function ClientSelfReferralPage() {
  // Form State
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [presentingIssue, setPresentingIssue] = useState('');
  const [previousCounselling, setPreviousCounselling] = useState('');
  const [phone, setPhone] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');
  const [email, setEmail] = useState('');
  const [bestTimeToContact, setBestTimeToContact] = useState('');
  const [preferredMethod, setPreferredMethod] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');
  const [upcomingAppointments, setUpcomingAppointments] = useState('');
  const [riskHistory, setRiskHistory] = useState('');
  const [gpDetails, setGpDetails] = useState('');
  const [gpConsent, setGpConsent] = useState<'YES' | 'NO' | null>(null);
  const [signature, setSignature] = useState('');
  const [signDate, setSignDate] = useState(new Date().toISOString().split('T')[0]);
  const [agreementConfirmed, setAgreementConfirmed] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [leadId, setLeadId] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !phone.trim() || !gpConsent || !signature.trim()) {
      alert("Please fill in all required fields marked with an asterisk (*).");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const payload = {
        fullName: fullName.trim(),
        dob,
        address: address.trim(),
        phone: phone.trim(),
        emergencyContact: emergencyContact.trim(),
        email: email.trim(),
        bestTimeToContact: bestTimeToContact.trim(),
        preferredMethod,
        presentingIssue: presentingIssue.trim(),
        previousCounselling: previousCounselling.trim(),
        medicalHistory: medicalHistory.trim(),
        upcomingAppointments: upcomingAppointments.trim(),
        riskHistory: riskHistory.trim(),
        gpDetails: gpDetails.trim(),
        gpConsent,
        signature: signature.trim(),
        signDate,
        agreementConfirmed
      };

      const response = await fetch('/api/referral', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit referral form. Please try again.');
      }

      setLeadId(data.leadId || null);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: any) {
      setSubmitError(err.message || 'An error occurred submitting your referral form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="view-section active" style={{ maxWidth: '1100px', margin: '2rem auto', padding: '0 1.5rem', width: '100%' }}>
      
      {/* Top Navigation & Print Controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }} className="no-print">
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Link href="/assessments" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.65rem 1.25rem' }}>
            <ArrowLeft size={16} />
            Assessments Hub
          </Link>
          <Link href="/assessments/counselling-agreement" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.65rem 1.25rem' }}>
            <FileText size={16} color="var(--primary)" />
            Online Counselling Agreement
          </Link>
        </div>

        <button className="btn btn-primary" onClick={() => window.print()} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.65rem 1.5rem' }}>
          <Printer size={16} />
          Print / Save Form (PDF)
        </button>
      </div>

      <div className="glass-panel responsive-panel" style={{ border: '1px solid var(--border)', background: 'var(--bg-card)', borderRadius: '20px', padding: '3.5rem 3rem' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', borderBottom: '2px solid var(--border)', paddingBottom: '2.5rem', marginBottom: '2.5rem' }}>
          <div style={{ display: 'inline-flex', padding: '0.45rem 1.1rem', borderRadius: '50px', background: 'rgba(255, 120, 36, 0.1)', color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '1.2px' }}>
            Ontime Therapy Services
          </div>
          <h1 style={{ fontSize: '2.6rem', fontWeight: 800, margin: '0 0 0.75rem', fontFamily: 'var(--font-heading)', color: 'var(--text-main)', lineHeight: 1.2 }}>
            Client Self‑Referral Form
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '720px', margin: '0 auto', lineHeight: 1.6 }}>
            Please complete and submit this confidential registration form. You may also email this directly to{' '}
            <a href="mailto:contact@ontimetherapy.com" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>
              contact@ontimetherapy.com
            </a>. I aim to contact you within <strong>48 hours</strong> of receipt.
          </p>
        </div>

        {/* Confidentiality & Emergency Notice */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '1.5rem', marginBottom: '3rem' }} className="form-alert-grid">
          <div style={{ padding: '1.25rem 1.5rem', background: 'rgba(6, 182, 212, 0.05)', border: '1px solid rgba(6, 182, 212, 0.2)', borderRadius: '12px', display: 'flex', gap: '1rem', alignItems: 'start' }}>
            <Lock size={22} color="var(--secondary)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h4 style={{ fontSize: '0.98rem', fontWeight: 700, margin: '0 0 0.25rem', color: 'var(--text-main)' }}>Strict Confidentiality &amp; GDPR</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5, margin: 0 }}>
                All information submitted is protected under UK/Jersey data laws, stored on encrypted drives, and handled in accordance with the ACCPH &amp; NMC ethical standards.
              </p>
            </div>
          </div>

          <div style={{ padding: '1.25rem 1.5rem', background: 'rgba(239, 68, 68, 0.04)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '12px', display: 'flex', gap: '1rem', alignItems: 'start' }}>
            <AlertTriangle size={22} color="#ef4444" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h4 style={{ fontSize: '0.98rem', fontWeight: 700, margin: '0 0 0.25rem', color: '#ef4444' }}>Crisis Support Notice</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5, margin: 0 }}>
                Outpatient counselling is not for acute crisis. In an emergency, dial <strong>999</strong> or phone the Samaritans at <strong>116 123</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Main Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Section 1: Personal Information */}
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <User size={18} color="var(--primary)" /> 1. Personal Details
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '1.25rem' }} className="form-two-col">
                <div>
                  <label htmlFor="ref-name" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                    Your Full Name *
                  </label>
                  <input 
                    id="ref-name"
                    type="text" 
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Eleanor Vance"
                    style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-panel)', color: 'var(--text-main)', outline: 'none', fontSize: '0.95rem' }}
                  />
                </div>
                <div>
                  <label htmlFor="ref-dob" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                    Date of Birth (DOB) *
                  </label>
                  <input 
                    id="ref-dob"
                    type="date" 
                    required
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-panel)', color: 'var(--text-main)', outline: 'none', fontSize: '0.95rem' }}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="ref-address" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                  Full Residential Address *
                </label>
                <textarea 
                  id="ref-address"
                  rows={2}
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Street address, City/Town, Postcode..."
                  style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-panel)', color: 'var(--text-main)', outline: 'none', fontSize: '0.95rem', resize: 'vertical' }}
                />
              </div>
            </div>
          </div>

          {/* Section 2: Contact Information & Preferences */}
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Phone size={18} color="var(--primary)" /> 2. Contact Details &amp; Communication Preferences
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }} className="form-three-col">
                <div>
                  <label htmlFor="ref-phone" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                    Phone Number *
                  </label>
                  <input 
                    id="ref-phone"
                    type="tel" 
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 07497 208249"
                    style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-panel)', color: 'var(--text-main)', outline: 'none', fontSize: '0.95rem' }}
                  />
                </div>

                <div>
                  <label htmlFor="ref-emergency" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                    Emergency Contact Number *
                  </label>
                  <input 
                    id="ref-emergency"
                    type="tel" 
                    required
                    value={emergencyContact}
                    onChange={(e) => setEmergencyContact(e.target.value)}
                    placeholder="Name & contact telephone"
                    style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-panel)', color: 'var(--text-main)', outline: 'none', fontSize: '0.95rem' }}
                  />
                </div>

                <div>
                  <label htmlFor="ref-email" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                    Email Address *
                  </label>
                  <input 
                    id="ref-email"
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. eleanor@example.com"
                    style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-panel)', color: 'var(--text-main)', outline: 'none', fontSize: '0.95rem' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="form-two-col">
                <div>
                  <label htmlFor="ref-time" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                    Best Time to Contact You
                  </label>
                  <input 
                    id="ref-time"
                    type="text" 
                    value={bestTimeToContact}
                    onChange={(e) => setBestTimeToContact(e.target.value)}
                    placeholder="e.g. Mornings 9-12, Weekdays after 5pm"
                    style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-panel)', color: 'var(--text-main)', outline: 'none', fontSize: '0.95rem' }}
                  />
                </div>

                <div>
                  <label htmlFor="ref-method" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                    Preferred Communication Method *
                  </label>
                  <select 
                    id="ref-method"
                    required
                    value={preferredMethod}
                    onChange={(e) => setPreferredMethod(e.target.value)}
                    style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-panel)', color: 'var(--text-main)', outline: 'none', fontSize: '0.95rem' }}
                  >
                    <option value="">-- Select Preferred Method --</option>
                    <option value="Zoom Webcam (Video)">Zoom Webcam (Video)</option>
                    <option value="Zoom Audio Only">Zoom Audio Only</option>
                    <option value="Online Chat Room (Encrypted)">Online Chat Room (Encrypted)</option>
                    <option value="Email Counselling">Email Counselling</option>
                    <option value="Phone Consultation">Phone Consultation</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Reasons for Counselling */}
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <HeartHandshake size={18} color="var(--primary)" /> 3. Therapeutic Focus &amp; History
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label htmlFor="ref-issues" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                  What would you like to address in counselling? *
                </label>
                <textarea 
                  id="ref-issues"
                  rows={4}
                  required
                  value={presentingIssue}
                  onChange={(e) => setPresentingIssue(e.target.value)}
                  placeholder="Please describe your current concerns, emotional distress, relationship challenges, eating difficulties, or personal goals for therapy..."
                  style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-panel)', color: 'var(--text-main)', outline: 'none', fontSize: '0.95rem', resize: 'vertical' }}
                />
              </div>

              <div>
                <label htmlFor="ref-prev" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                  Previous Counselling Experience
                </label>
                <textarea 
                  id="ref-prev"
                  rows={2}
                  value={previousCounselling}
                  onChange={(e) => setPreviousCounselling(e.target.value)}
                  placeholder="Have you attended counselling or psychotherapy in the past? What approaches did you find helpful or unhelpful?"
                  style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-panel)', color: 'var(--text-main)', outline: 'none', fontSize: '0.95rem', resize: 'vertical' }}
                />
              </div>
            </div>
          </div>

          {/* Section 4: Clinical History & Safeguarding Indicators */}
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Shield size={18} color="var(--primary)" /> 4. Medical, Psychiatric &amp; Safety Indicators
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label htmlFor="ref-med" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                  Medical or Psychiatric History
                </label>
                <textarea 
                  id="ref-med"
                  rows={2}
                  value={medicalHistory}
                  onChange={(e) => setMedicalHistory(e.target.value)}
                  placeholder="Any diagnosed medical conditions, mental health diagnoses, current prescribed psychiatric medications, or hospitalizations..."
                  style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-panel)', color: 'var(--text-main)', outline: 'none', fontSize: '0.95rem', resize: 'vertical' }}
                />
              </div>

              <div>
                <label htmlFor="ref-appts" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                  Upcoming Medical or Psychiatric Appointments
                </label>
                <input 
                  id="ref-appts"
                  type="text" 
                  value={upcomingAppointments}
                  onChange={(e) => setUpcomingAppointments(e.target.value)}
                  placeholder="e.g. GP medication review next month, outpatient psychiatric assessment scheduled"
                  style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-panel)', color: 'var(--text-main)', outline: 'none', fontSize: '0.95rem' }}
                />
              </div>

              <div>
                <label htmlFor="ref-risk" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                  History of Self‑Harm, Overdose, or Violence
                </label>
                <textarea 
                  id="ref-risk"
                  rows={2}
                  value={riskHistory}
                  onChange={(e) => setRiskHistory(e.target.value)}
                  placeholder="Please state if you have past or active experiences with self-harm, overdose, or violent incidents..."
                  style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-panel)', color: 'var(--text-main)', outline: 'none', fontSize: '0.95rem', resize: 'vertical' }}
                />
              </div>
            </div>
          </div>

          {/* Section 5: GP Details & Consent */}
          <div style={{ padding: '1.5rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '14px', border: '1px solid var(--border)' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>
              5. General Practitioner (GP) Details &amp; Consent
            </h3>

            <div style={{ marginBottom: '1.25rem' }}>
              <label htmlFor="ref-gp" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                GP Details (Doctor's Name, Surgery Name, Practice Address, Phone) *
              </label>
              <textarea 
                id="ref-gp"
                rows={2}
                required
                value={gpDetails}
                onChange={(e) => setGpDetails(e.target.value)}
                placeholder="Dr. [Name], Medical Practice, Full Address, Practice Telephone..."
                style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-panel)', color: 'var(--text-main)', outline: 'none', fontSize: '0.95rem', resize: 'vertical' }}
              />
            </div>

            <div>
              <span style={{ display: 'block', fontSize: '0.92rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-main)' }}>
                Consent to contact GP: *
              </span>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                Your GP will only be contacted for care coordination or if significant safety/safeguarding risks arise.
              </p>
              <div style={{ display: 'flex', gap: '2.5rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer', fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)' }}>
                  <input 
                    type="radio" 
                    name="gp-consent-radio-self" 
                    checked={gpConsent === 'YES'}
                    onChange={() => setGpConsent('YES')}
                    style={{ accentColor: 'var(--primary)', width: '18px', height: '18px' }}
                  />
                  YES
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer', fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)' }}>
                  <input 
                    type="radio" 
                    name="gp-consent-radio-self" 
                    checked={gpConsent === 'NO'}
                    onChange={() => setGpConsent('NO')}
                    style={{ accentColor: 'var(--primary)', width: '18px', height: '18px' }}
                  />
                  NO
                </label>
              </div>
            </div>
          </div>

          {/* Section 6: Agreement & Electronic Signature */}
          <div style={{ padding: '1.75rem', background: 'rgba(255, 120, 36, 0.03)', borderRadius: '14px', border: '1px solid rgba(255, 120, 36, 0.2)' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>
              6. Declaration &amp; Electronic Signature
            </h3>

            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'flex', gap: '0.75rem', cursor: 'pointer', fontSize: '0.92rem', alignItems: 'start', lineHeight: 1.5, color: 'var(--text-main)' }}>
                <input 
                  type="checkbox"
                  required
                  checked={agreementConfirmed}
                  onChange={(e) => setAgreementConfirmed(e.target.checked)}
                  style={{ accentColor: 'var(--primary)', width: '18px', height: '18px', marginTop: '0.15rem', flexShrink: 0 }}
                />
                <span>
                  I confirm that the information provided on this form is correct and I have reviewed the{' '}
                  <Link href="/assessments/counselling-agreement" target="_blank" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'underline' }}>
                    Online Counselling Agreement
                  </Link>. I understand the confidentiality terms, session conditions, and cancellation policies of Ontime Therapy Services.
                </span>
              </label>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '1.25rem' }} className="form-two-col">
              <div>
                <label htmlFor="ref-sig" style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.35rem', color: 'var(--text-main)' }}>
                  Electronic Signature (type your full name) *
                </label>
                <input 
                  id="ref-sig"
                  type="text" 
                  required
                  value={signature}
                  onChange={(e) => setSignature(e.target.value)}
                  placeholder="e.g. /Eleanor Vance/"
                  style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-panel)', color: 'var(--text-main)', fontFamily: 'cursive', fontSize: '1.15rem', outline: 'none' }}
                />
              </div>

              <div>
                <label htmlFor="ref-date" style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.35rem', color: 'var(--text-main)' }}>
                  Date *
                </label>
                <input 
                  id="ref-date"
                  type="date" 
                  required
                  value={signDate}
                  onChange={(e) => setSignDate(e.target.value)}
                  style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg-panel)', color: 'var(--text-main)', outline: 'none', fontSize: '0.95rem' }}
                />
              </div>
            </div>
          </div>

          {submitError && (
            <div style={{ padding: '1rem', background: 'rgba(239, 68, 68, 0.08)', border: '1px solid #ef4444', borderRadius: '12px', color: '#ef4444', textAlign: 'center', fontSize: '0.92rem', fontWeight: 600 }}>
              ⚠ {submitError}
            </div>
          )}

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '1.25rem', marginTop: '1rem', flexWrap: 'wrap' }} className="no-print">
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={isSubmitting}
              style={{ flex: 1.5, padding: '0.95rem 2rem', fontSize: '1.05rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', borderRadius: '12px', opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin" style={{ width: '20px', height: '20px' }} viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" style={{ opacity: 0.25 }} />
                    <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" style={{ opacity: 0.75 }} />
                  </svg>
                  Submitting Referral...
                </>
              ) : (
                <>
                  <Send size={18} /> Submit Confidential Referral
                </>
              )}
            </button>
            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={() => window.print()}
              disabled={isSubmitting}
              style={{ flex: 1, padding: '0.95rem 1.75rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', borderRadius: '12px' }}
            >
              <Printer size={18} /> Print / Save Form (PDF)
            </button>
          </div>

          {isSubmitted && (
            <div style={{ padding: '1.5rem', background: 'rgba(16, 185, 129, 0.1)', border: '2px solid #10b981', borderRadius: '14px', color: 'var(--text-main)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ color: '#10b981', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.35rem', fontWeight: 800 }}>
                <CheckCircle2 size={28} /> Self-Referral Submitted Successfully
              </div>
              {leadId && (
                <div style={{ padding: '0.5rem 1rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  Intake Reference ID: <strong style={{ color: 'var(--text-main)' }}>{leadId}</strong>
                </div>
              )}
              <p style={{ margin: 0, fontSize: '0.98rem', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '650px' }}>
                Thank you, <strong>{fullName}</strong>. Your confidential referral has been securely dispatched to our clinical team and a confirmation email has been sent to <strong>{email}</strong>. Mr Anotida Macdonald aims to respond within <strong>48 hours</strong>.
              </p>
            </div>
          )}

        </form>

      </div>

      <style jsx global>{`
        @media print {
          body {
            background: #ffffff !important;
            color: #000000 !important;
          }
          header, footer, .no-print, .btn, button {
            display: none !important;
          }
          .glass-panel {
            border: none !important;
            box-shadow: none !important;
            background: transparent !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          input, select, textarea {
            border: none !important;
            border-bottom: 1px solid #000000 !important;
            background: transparent !important;
            color: #000000 !important;
            border-radius: 0 !important;
            padding: 0.25rem 0 !important;
            font-size: 0.95rem !important;
          }
        }
        @media (max-width: 900px) {
          .form-alert-grid,
          .form-two-col,
          .form-three-col {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
        }
      `}</style>

    </section>
  );
}
