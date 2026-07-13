"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { Shield, CheckCircle, Calendar as CalendarIcon, Clock, AlertCircle } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  therapyType?: string;
  diagnosis?: string;
  diagnosisOther?: string;
  method?: string;
  payment?: string;
  preferredDate?: string;
  preferredTime?: string;
  consent?: string;
}

function BookForm() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get('service') || '';

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [therapyType, setTherapyType] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [diagnosisOther, setDiagnosisOther] = useState('');
  const [method, setMethod] = useState('');
  const [payment, setPayment] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [consent, setConsent] = useState(false);
  const [sharingConsent, setSharingConsent] = useState('No');

  // Scheduling State
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Form Submission States
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [leadId, setLeadId] = useState<string | null>(null);

  // Dynamic calendar dates based on current date
  const [currentDateInfo, setCurrentDateInfo] = useState<{
    year: number;
    monthIndex: number;
    monthName: string;
    days: number[];
  }>({
    year: 2026,
    monthIndex: 6,
    monthName: 'July',
    days: []
  });

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const monthIndex = today.getMonth(); // 0-indexed
    const monthName = today.toLocaleString('default', { month: 'long' });
    const currentDay = today.getDate();

    // Get last day of the current month
    const lastDay = new Date(year, monthIndex + 1, 0).getDate();

    // Create array of days from currentDay to lastDay
    const days = [];
    for (let d = currentDay; d <= lastDay; d++) {
      days.push(d);
    }

    setCurrentDateInfo({
      year,
      monthIndex,
      monthName,
      days
    });
  }, []);

  // Sync service dropdown with query parameters
  useEffect(() => {
    if (initialService) {
      const serviceMapping: Record<string, string> = {
        'individual-cbt': 'Individual CBT',
        'child-cbt': 'Child CBT',
        'adolescent-therapy': 'Adolescent Therapy',
        'couples-therapy': 'Couples Therapy',
        'family-therapy': 'Family Therapy',
        'eating-disorder-support': 'Eating Disorder Support',
        'trauma-support': 'Trauma Support',
        'parenting-support': 'Parenting Support',
        'staff-support': 'Staff Support'
      };
      if (serviceMapping[initialService]) {
        setTherapyType(serviceMapping[initialService]);
      }
    }
  }, [initialService]);

  const timeSlots = ["10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM", "06:00 PM"];

  // Client Side Validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!name.trim()) newErrors.name = "Name is required.";
    else if (name.trim().length < 2) newErrors.name = "Name must be at least 2 characters.";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) newErrors.email = "Email is required.";
    else if (!emailRegex.test(email)) newErrors.email = "Please enter a valid email address.";

    // Loose check for UK or general formats
    const phoneRegex = /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$|^0[1-9]\d{8,9}$|^(\+44\s?1\d{2,3}|\(?01\d{2,3}\)?)\s?\d{3,4}\s?\d{3,4}$/;
    if (!phone) newErrors.phone = "Phone number is required.";
    else if (phone.length < 9) newErrors.phone = "Please enter a valid telephone number.";

    if (!therapyType) newErrors.therapyType = "Please select a therapy type.";
    if (!diagnosis) newErrors.diagnosis = "Please select an indicator category.";
    if (diagnosis === "Other" && !diagnosisOther.trim()) {
      newErrors.diagnosisOther = "Please describe your clinical indicators.";
    }

    if (!method) newErrors.method = "Preferred consultation method is required.";
    if (!payment) newErrors.payment = "Payment funding choice is required.";
    
    if (!selectedDate) newErrors.preferredDate = "Please choose a preferred date.";
    if (!selectedTime) newErrors.preferredTime = "Please choose a preferred slot.";

    if (!consent) newErrors.consent = "You must consent to proceed.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    // Format preferredDate as YYYY-MM-DD
    const formattedDate = `${currentDateInfo.year}-${String(currentDateInfo.monthIndex + 1).padStart(2, '0')}-${String(selectedDate).padStart(2, '0')}`;

    try {
      const sharingConsentText = `Sharing Consent: ${sharingConsent}`;
      const combinedInfo = additionalInfo.trim() 
        ? `${sharingConsentText}\n\n${additionalInfo.trim()}` 
        : sharingConsentText;

      const payload = {
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        therapyType,
        diagnosis,
        diagnosisOther: diagnosis === 'Other' ? diagnosisOther.trim() : undefined,
        method,
        payment,
        preferredDate: formattedDate,
        preferredTime: selectedTime,
        additionalInfo: combinedInfo,
        consent,
        sharingConsent
      };

      const response = await fetch('/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit the intake form. Please try again.');
      }

      setLeadId(data.leadId);
      setIsSubmitted(true);
      // Scroll to top to see success state
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: any) {
      setSubmitError(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="view-section active" style={{ maxWidth: '780px', margin: '2rem auto' }}>
      
      {/* Title */}
      <div className="section-title-wrap" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '0.75rem' }}>Appointment Request</span>
        <h1 className="section-title" style={{ fontSize: '2.5rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>Confidential Clinical Intake</h1>
        <p className="section-subtitle" style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
          Begin your clinical therapy matching process. All submitted data is fully encrypted, GDPR compliant, and treated with absolute clinical confidentiality.
        </p>
      </div>

      {isSubmitted ? (
        /* Success Confirmation Banner */
        <div className="glass-panel responsive-panel" style={{ border: '2px solid var(--primary)', borderRadius: '16px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', background: 'rgba(255, 120, 36, 0.03)', animation: 'fadeIn 0.4s ease' }}>
          <div style={{ padding: '1rem', background: 'rgba(255, 120, 36, 0.08)', borderRadius: '50%', color: 'var(--primary)', display: 'inline-flex' }}>
            <CheckCircle size={48} />
          </div>
          <div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, margin: '0 0 0.5rem', fontFamily: 'var(--font-heading)' }}>Request Received Successfully</h2>
            <p style={{ color: 'var(--text-main)', fontWeight: 600, fontSize: '1.1rem', margin: '0 0 1rem' }}>
              We aim to respond to every request within 24 hrs.
            </p>
            {leadId && (
              <div style={{ margin: '0.5rem 0 1.5rem', padding: '0.75rem 1.25rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px', border: '1px solid var(--border)', fontSize: '0.9rem', color: 'var(--text-muted)', display: 'inline-block' }}>
                Intake Reference ID: <strong style={{ color: 'var(--text-main)' }}>{leadId}</strong>
              </div>
            )}
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '520px', margin: '0 auto' }}>
              Thank you for trusting OTT Psychotherapy. A clinical practitioner will contact you at your preferred time on <strong>{phone}</strong> or email you at <strong>{email}</strong> to arrange your initial consultation details.
            </p>
          </div>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
            <Link href="/" className="btn btn-primary" style={{ padding: '0.75rem 2rem' }}>Return Home</Link>
            <Link href="/services" className="btn btn-secondary" style={{ padding: '0.75rem 2rem' }}>Our Services</Link>
          </div>
        </div>
      ) : (
        /* Intake Form */
        <form onSubmit={handleSubmit} className="glass-panel responsive-panel" style={{ border: '1px solid var(--border)', background: 'var(--bg-card)', display: 'flex', flexDirection: 'column', gap: '2rem' }} noValidate>
          
          {/* Privacy Disclaimer */}
          <div style={{ display: 'flex', gap: '0.85rem', background: 'rgba(6, 182, 212, 0.05)', border: '1px solid var(--border)', borderRadius: '10px', padding: '1rem', alignItems: 'center' }}>
            <Shield size={20} color="var(--secondary)" style={{ flexShrink: 0 }} />
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.4 }}>
              <strong>HIPAA & GDPR Compliance:</strong> All intake forms are processed through TLS-encrypted connections. Your diagnostic indicators and records are never saved in shared marketing registers.
            </p>
          </div>

          {/* Section 1: Contact Information */}
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>1. Contact Information</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Name */}
              <div>
                <label htmlFor="form-name" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.4rem' }}>Full Name *</label>
                <input 
                  id="form-name"
                  type="text" 
                  value={name} 
                  disabled={isSubmitting}
                  onChange={(e) => { setName(e.target.value); if (errors.name) setErrors({...errors, name: undefined}); }}
                  placeholder="e.g. John Doe"
                  style={{ 
                    width: '100%', 
                    padding: '0.75rem 1rem', 
                    borderRadius: '8px', 
                    border: errors.name ? '1.5px solid #ef4444' : '1px solid var(--border)', 
                    background: 'var(--bg-panel)',
                    color: 'var(--text-main)',
                    outline: 'none',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                />
                {errors.name && <span style={{ color: '#ef4444', fontSize: '0.8rem', display: 'block', marginTop: '0.25rem' }}>{errors.name}</span>}
              </div>

              {/* Email & Phone Row */}
              <div className="booking-row-grid">
                <div>
                  <label htmlFor="form-email" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.4rem' }}>Email Address *</label>
                  <input 
                    id="form-email"
                    type="email" 
                    value={email} 
                    disabled={isSubmitting}
                    onChange={(e) => { setEmail(e.target.value); if (errors.email) setErrors({...errors, email: undefined}); }}
                    placeholder="e.g. john@example.com"
                    style={{ 
                      width: '100%', 
                      padding: '0.75rem 1rem', 
                      borderRadius: '8px', 
                      border: errors.email ? '1.5px solid #ef4444' : '1px solid var(--border)', 
                      background: 'var(--bg-panel)',
                      color: 'var(--text-main)',
                      outline: 'none',
                      opacity: isSubmitting ? 0.7 : 1
                    }}
                  />
                  {errors.email && <span style={{ color: '#ef4444', fontSize: '0.8rem', display: 'block', marginTop: '0.25rem' }}>{errors.email}</span>}
                </div>

                <div>
                  <label htmlFor="form-phone" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.4rem' }}>Phone Number *</label>
                  <input 
                    id="form-phone"
                    type="tel" 
                    value={phone} 
                    disabled={isSubmitting}
                    onChange={(e) => { setPhone(e.target.value); if (errors.phone) setErrors({...errors, phone: undefined}); }}
                    placeholder="e.g. 07497 208249"
                    style={{ 
                      width: '100%', 
                      padding: '0.75rem 1rem', 
                      borderRadius: '8px', 
                      border: errors.phone ? '1.5px solid #ef4444' : '1px solid var(--border)', 
                      background: 'var(--bg-panel)',
                      color: 'var(--text-main)',
                      outline: 'none',
                      opacity: isSubmitting ? 0.7 : 1
                    }}
                  />
                  {errors.phone && <span style={{ color: '#ef4444', fontSize: '0.8rem', display: 'block', marginTop: '0.25rem' }}>{errors.phone}</span>}
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Clinical Details */}
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>2. Clinical Requirements</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              
              {/* Therapy Required */}
              <div>
                <label htmlFor="form-therapy" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.4rem' }}>Therapy Required *</label>
                <select 
                  id="form-therapy"
                  value={therapyType}
                  disabled={isSubmitting}
                  onChange={(e) => { setTherapyType(e.target.value); if (errors.therapyType) setErrors({...errors, therapyType: undefined}); }}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    border: errors.therapyType ? '1.5px solid #ef4444' : '1px solid var(--border)',
                    background: 'var(--bg-panel)',
                    color: 'var(--text-main)',
                    outline: 'none',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                >
                  <option value="">-- Select Therapy Type --</option>
                  <option value="Individual CBT">Individual CBT</option>
                  <option value="Child CBT">Child CBT</option>
                  <option value="Adolescent Therapy">Adolescent Therapy</option>
                  <option value="Couples Therapy">Couples Therapy</option>
                  <option value="Family Therapy">Family Therapy</option>
                  <option value="Eating Disorder Support">Eating Disorder Support</option>
                  <option value="Trauma Support">Trauma Support</option>
                  <option value="Parenting Support">Parenting Support</option>
                  <option value="Staff Support">Staff Support</option>
                  <option value="Other">Other</option>
                </select>
                {errors.therapyType && <span style={{ color: '#ef4444', fontSize: '0.8rem', display: 'block', marginTop: '0.25rem' }}>{errors.therapyType}</span>}
              </div>

              {/* Diagnosis Indicator */}
              <div>
                <label htmlFor="form-diagnosis" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.4rem' }}>Primary Clinical Indicator / Diagnosis *</label>
                <select 
                  id="form-diagnosis"
                  value={diagnosis}
                  disabled={isSubmitting}
                  onChange={(e) => { setDiagnosis(e.target.value); if (errors.diagnosis) setErrors({...errors, diagnosis: undefined}); }}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    border: errors.diagnosis ? '1.5px solid #ef4444' : '1px solid var(--border)',
                    background: 'var(--bg-panel)',
                    color: 'var(--text-main)',
                    outline: 'none',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                >
                  <option value="">-- Select Category --</option>
                  <option value="Anxiety">Anxiety / Panic / Obsessive Thinking</option>
                  <option value="Depression">Depression / Low Self-Esteem</option>
                  <option value="Eating Disorder">Eating Disorder (AN, BN, ARFID, OSFED)</option>
                  <option value="Trauma">Trauma / Sudden Loss / Abuse</option>
                  <option value="Relationship">Relationship / Family Conflict</option>
                  <option value="Burnout">Professional Burnout / Stress</option>
                  <option value="None">None / Unsure</option>
                  <option value="Other">Other (Please describe below)</option>
                </select>
                {errors.diagnosis && <span style={{ color: '#ef4444', fontSize: '0.8rem', display: 'block', marginTop: '0.25rem' }}>{errors.diagnosis}</span>}
              </div>

              {/* Conditional "Other" field */}
              {diagnosis === "Other" && (
                <div style={{ animation: 'fadeIn 0.2s ease' }}>
                  <label htmlFor="form-diagnosis-other" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.4rem' }}>Describe Diagnosis / Indicators *</label>
                  <textarea 
                    id="form-diagnosis-other"
                    value={diagnosisOther}
                    disabled={isSubmitting}
                    onChange={(e) => { setDiagnosisOther(e.target.value); if (errors.diagnosisOther) setErrors({...errors, diagnosisOther: undefined}); }}
                    placeholder="Briefly explain your symptoms or diagnoses..."
                    rows={3}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      border: errors.diagnosisOther ? '1.5px solid #ef4444' : '1px solid var(--border)',
                      background: 'var(--bg-panel)',
                      color: 'var(--text-main)',
                      outline: 'none',
                      resize: 'vertical',
                      opacity: isSubmitting ? 0.7 : 1
                    }}
                  />
                  {errors.diagnosisOther && <span style={{ color: '#ef4444', fontSize: '0.8rem', display: 'block', marginTop: '0.25rem' }}>{errors.diagnosisOther}</span>}
                </div>
              )}
            </div>
          </div>

          {/* Section 3: Consultation Preferences */}
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>3. Consultation Preferences</h3>
            
            <div className="booking-row-grid">
              {/* Method */}
              <div>
                <span style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.6rem' }}>Preferred Consultation Method *</span>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: isSubmitting ? 'not-allowed' : 'pointer', fontSize: '0.95rem' }}>
                    <input 
                      type="radio" 
                      name="consultation-method" 
                      value="Online" 
                      disabled={isSubmitting}
                      checked={method === 'Online'} 
                      onChange={() => { setMethod('Online'); if (errors.method) setErrors({...errors, method: undefined}); }} 
                      style={{ accentColor: 'var(--primary)', width: '16px', height: '16px' }}
                    />
                    Online Video
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: isSubmitting ? 'not-allowed' : 'pointer', fontSize: '0.95rem' }}>
                    <input 
                      type="radio" 
                      name="consultation-method" 
                      value="In-Person" 
                      disabled={isSubmitting}
                      checked={method === 'In-Person'} 
                      onChange={() => { setMethod('In-Person'); if (errors.method) setErrors({...errors, method: undefined}); }} 
                      style={{ accentColor: 'var(--primary)', width: '16px', height: '16px' }}
                    />
                    In-Person (Jersey island / Staffordshire)
                  </label>
                </div>
                {errors.method && <span style={{ color: '#ef4444', fontSize: '0.8rem', display: 'block', marginTop: '0.4rem' }}>{errors.method}</span>}
              </div>

              {/* Payment */}
              <div>
                <span style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.6rem' }}>Session Funding Method *</span>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: isSubmitting ? 'not-allowed' : 'pointer', fontSize: '0.95rem' }}>
                    <input 
                      type="radio" 
                      name="payment-funding" 
                      value="Self-funded" 
                      disabled={isSubmitting}
                      checked={payment === 'Self-funded'} 
                      onChange={() => { setPayment('Self-funded'); if (errors.payment) setErrors({...errors, payment: undefined}); }} 
                      style={{ accentColor: 'var(--primary)', width: '16px', height: '16px' }}
                    />
                    Self-funded
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: isSubmitting ? 'not-allowed' : 'pointer', fontSize: '0.95rem' }}>
                    <input 
                      type="radio" 
                      name="payment-funding" 
                      value="Government funded" 
                      disabled={isSubmitting}
                      checked={payment === 'Government funded'} 
                      onChange={() => { setPayment('Government funded'); if (errors.payment) setErrors({...errors, payment: undefined}); }} 
                      style={{ accentColor: 'var(--primary)', width: '16px', height: '16px' }}
                    />
                    Government / Insurance Funded
                  </label>
                </div>
                {errors.payment && <span style={{ color: '#ef4444', fontSize: '0.8rem', display: 'block', marginTop: '0.4rem' }}>{errors.payment}</span>}
              </div>
            </div>
          </div>

          {/* Section 4: Calendar Booking Grid */}
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CalendarIcon size={18} color="var(--primary)" />
              4. Preferred Date & Time Slot
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Date grid selection */}
              <div>
                <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                  Select a Date in {currentDateInfo.monthName} {currentDateInfo.year}: *
                </span>
                {currentDateInfo.days.length === 0 ? (
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', padding: '1rem', textAlign: 'center' }}>
                    Loading available dates...
                  </div>
                ) : (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.5rem' }}>
                    {currentDateInfo.days.map((day) => {
                      const isSelected = selectedDate === day;
                      return (
                        <button 
                          key={day}
                          type="button"
                          disabled={isSubmitting}
                          onClick={() => { setSelectedDate(day); if (errors.preferredDate) setErrors({...errors, preferredDate: undefined}); }}
                          style={{
                            padding: '0.6rem',
                            borderRadius: '8px',
                            border: isSelected ? '1.5px solid var(--primary)' : '1px solid var(--border)',
                            background: isSelected ? 'var(--primary)' : 'var(--bg-panel)',
                            color: isSelected ? '#ffffff' : 'var(--text-main)',
                            cursor: isSubmitting ? 'not-allowed' : 'pointer',
                            fontWeight: isSelected ? 700 : 500,
                            fontSize: '0.85rem',
                            transition: 'all 0.15s',
                            opacity: isSubmitting ? 0.6 : 1
                          }}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                )}
                {errors.preferredDate && <span style={{ color: '#ef4444', fontSize: '0.8rem', display: 'block', marginTop: '0.4rem' }}>{errors.preferredDate}</span>}
              </div>

              {/* Time Slot selection */}
              <div>
                <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Select a Preferred Time Slot: *</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {timeSlots.map((slot) => {
                    const isSelected = selectedTime === slot;
                    return (
                      <button 
                        key={slot}
                        type="button"
                        disabled={isSubmitting}
                        onClick={() => { setSelectedTime(slot); if (errors.preferredTime) setErrors({...errors, preferredTime: undefined}); }}
                        style={{
                          padding: '0.5rem 1rem',
                          borderRadius: '8px',
                          border: isSelected ? '1.5px solid var(--primary)' : '1px solid var(--border)',
                          background: isSelected ? 'var(--primary)' : 'var(--bg-panel)',
                          color: isSelected ? '#ffffff' : 'var(--text-main)',
                          cursor: isSubmitting ? 'not-allowed' : 'pointer',
                          fontWeight: isSelected ? 700 : 500,
                          fontSize: '0.85rem',
                          transition: 'all 0.15s',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          opacity: isSubmitting ? 0.6 : 1
                        }}
                      >
                        <Clock size={12} />
                        {slot}
                      </button>
                    );
                  })}
                </div>
                {errors.preferredTime && <span style={{ color: '#ef4444', fontSize: '0.8rem', display: 'block', marginTop: '0.4rem' }}>{errors.preferredTime}</span>}
              </div>
            </div>
          </div>

          {/* Section 5: Additional Info & Consent */}
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>5. Clinical Safeguards & Consent</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Sharing Consent */}
              <div>
                <span style={{ display: 'block', fontSize: '0.9rem', fontWeight: 650, marginBottom: '0.6rem', color: 'var(--text-main)' }}>
                  I consent to Ontime Therapy sharing relevant information with other professionals involved in my care. *
                </span>
                <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '0.5rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: isSubmitting ? 'not-allowed' : 'pointer', fontSize: '0.95rem', color: 'var(--text-main)' }}>
                    <input 
                      type="radio" 
                      name="sharing-consent" 
                      value="Yes" 
                      disabled={isSubmitting}
                      checked={sharingConsent === 'Yes'} 
                      onChange={() => setSharingConsent('Yes')} 
                      style={{ accentColor: 'var(--primary)', width: '16px', height: '16px' }}
                    />
                    Yes
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: isSubmitting ? 'not-allowed' : 'pointer', fontSize: '0.95rem', color: 'var(--text-main)' }}>
                    <input 
                      type="radio" 
                      name="sharing-consent" 
                      value="No" 
                      disabled={isSubmitting}
                      checked={sharingConsent === 'No'} 
                      onChange={() => setSharingConsent('No')} 
                      style={{ accentColor: 'var(--primary)', width: '16px', height: '16px' }}
                    />
                    No
                  </label>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <label htmlFor="form-info" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.4rem' }}>Additional Context (Optional)</label>
                <textarea 
                  id="form-info"
                  value={additionalInfo}
                  disabled={isSubmitting}
                  onChange={(e) => setAdditionalInfo(e.target.value)}
                  placeholder="Specify any relevant symptoms, clinical histories, or scheduling requests..."
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid var(--border)',
                    background: 'var(--bg-panel)',
                    color: 'var(--text-main)',
                    outline: 'none',
                    resize: 'vertical',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                />
              </div>

              {/* Consent check */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ display: 'flex', gap: '0.75rem', cursor: isSubmitting ? 'not-allowed' : 'pointer', fontSize: '0.85rem', alignItems: 'start', lineHeight: 1.5, color: 'var(--text-main)' }}>
                  <input 
                    type="checkbox" 
                    checked={consent}
                    disabled={isSubmitting}
                    onChange={(e) => { setConsent(e.target.checked); if (errors.consent) setErrors({...errors, consent: undefined}); }}
                    style={{ accentColor: 'var(--primary)', width: '16px', height: '16px', marginTop: '0.15rem', flexShrink: 0 }}
                  />
                  <span>
                    I confirm that the information on this form is correct and can be used to handle my enquiry by phone, text or email in accordance with the DATA Management policy.
                  </span>
                </label>
                {errors.consent && <span style={{ color: '#ef4444', fontSize: '0.8rem', display: 'block' }}>{errors.consent}</span>}
              </div>
            </div>
          </div>

          {/* Error Warning Banners if global or submission errors exist */}
          {Object.keys(errors).length > 0 && (
            <div style={{ display: 'flex', gap: '0.5rem', background: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '8px', padding: '0.75rem 1rem', alignItems: 'center', color: '#ef4444' }}>
              <AlertCircle size={18} style={{ flexShrink: 0 }} />
              <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Please correct the highlighted validation errors before submitting.</span>
            </div>
          )}

          {submitError && (
            <div style={{ display: 'flex', gap: '0.5rem', background: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '8px', padding: '0.75rem 1rem', alignItems: 'center', color: '#ef4444' }}>
              <AlertCircle size={18} style={{ flexShrink: 0 }} />
              <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{submitError}</span>
            </div>
          )}

          {/* Submit Action */}
          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={isSubmitting}
            style={{ 
              padding: '0.9rem', 
              width: '100%', 
              fontSize: '1.05rem', 
              fontWeight: 700, 
              borderRadius: '10px',
              opacity: isSubmitting ? 0.7 : 1,
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin" style={{ width: '20px', height: '20px' }} viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" style={{ opacity: 0.25 }} />
                  <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" style={{ opacity: 0.75 }} />
                </svg>
                Submitting Form...
              </>
            ) : "Submit Secure Intake Form"}
          </button>

        </form>
      )}

    </section>
  );
}

export default function BookPage() {
  return (
    <Suspense fallback={
      <div style={{ textAlign: 'center', padding: '5rem 2rem', color: 'var(--text-muted)' }}>
        Loading secure booking details...
      </div>
    }>
      <BookForm />
    </Suspense>
  );
}
