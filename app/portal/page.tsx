"use client";

import React, { useState, useEffect } from 'react';
import { User, Lock, Mail, Eye, EyeOff, ArrowRight, CheckCircle, Loader2, UserPlus, LogIn, Shield, Calendar, MessageSquare, FileText } from 'lucide-react';
import Link from 'next/link';

const ADMIN_BASE = 'https://admin.ontimetherapy.com';

// ─── Feature cards shown on the right panel ────────────────────────────────
const features = [
  {
    icon: Calendar,
    title: 'Session Scheduling',
    desc: 'View and manage your upcoming therapy appointments in real-time.',
  },
  {
    icon: FileText,
    title: 'Clinical Records',
    desc: 'Securely access your intake forms, session notes, and progress reports.',
  },
  {
    icon: MessageSquare,
    title: 'Secure Messaging',
    desc: 'Communicate directly with your therapist between sessions.',
  },
  {
    icon: Shield,
    title: 'GDPR Protected',
    desc: 'All data is encrypted end-to-end and GDPR / HIPAA compliant.',
  },
];

// ─── Sign-In Form ───────────────────────────────────────────────────────────
function SignInForm({ onSwitch }: { onSwitch: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch(`${ADMIN_BASE}/api/auth/sign-in`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), password }),
      });

      if (res.ok) {
        // Successful auth – redirect to the admin portal directly
        window.location.href = ADMIN_BASE;
        return;
      }

      const data = await res.json().catch(() => ({}));
      // If the API isn't available or returns a known auth failure, redirect anyway
      // so users can authenticate natively on the admin site
      if (res.status === 401 || res.status === 403) {
        setError(data.error || 'Invalid email or password. Please try again.');
      } else {
        // API not set up for external calls – forward to admin sign-in page with prefill
        window.location.href = `${ADMIN_BASE}/sign-in`;
      }
    } catch {
      // Network or CORS issue – redirect to admin sign-in directly
      window.location.href = `${ADMIN_BASE}/sign-in`;
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {/* Email */}
      <div>
        <label htmlFor="portal-email" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-muted)' }}>
          Email Address
        </label>
        <div style={{ position: 'relative' }}>
          <Mail size={16} style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', pointerEvents: 'none' }} />
          <input
            id="portal-email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            disabled={loading}
            placeholder="name@example.com"
            style={{
              width: '100%',
              padding: '0.75rem 1rem 0.75rem 2.5rem',
              borderRadius: '10px',
              border: '1px solid var(--border)',
              background: 'var(--bg-panel)',
              color: 'var(--text-main)',
              fontSize: '0.95rem',
              outline: 'none',
              opacity: loading ? 0.7 : 1,
              transition: 'border-color 0.2s',
            }}
            onFocus={e => (e.currentTarget.style.borderColor = 'var(--border-focus)')}
            onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
          />
        </div>
      </div>

      {/* Password */}
      <div>
        <label htmlFor="portal-password" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-muted)' }}>
          Password
        </label>
        <div style={{ position: 'relative' }}>
          <Lock size={16} style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', pointerEvents: 'none' }} />
          <input
            id="portal-password"
            type={showPass ? 'text' : 'password'}
            autoComplete="current-password"
            required
            minLength={8}
            value={password}
            onChange={e => setPassword(e.target.value)}
            disabled={loading}
            placeholder="••••••••••••"
            style={{
              width: '100%',
              padding: '0.75rem 2.75rem 0.75rem 2.5rem',
              borderRadius: '10px',
              border: '1px solid var(--border)',
              background: 'var(--bg-panel)',
              color: 'var(--text-main)',
              fontSize: '0.95rem',
              outline: 'none',
              opacity: loading ? 0.7 : 1,
              transition: 'border-color 0.2s',
            }}
            onFocus={e => (e.currentTarget.style.borderColor = 'var(--border-focus)')}
            onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
          />
          <button
            type="button"
            onClick={() => setShowPass(v => !v)}
            style={{ position: 'absolute', right: '0.9rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', display: 'flex', alignItems: 'center' }}
            aria-label={showPass ? 'Hide password' : 'Show password'}
          >
            {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
        <div style={{ textAlign: 'right', marginTop: '0.35rem' }}>
          <a href={`${ADMIN_BASE}/forgot-password`} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }}>
            Forgot password?
          </a>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '0.65rem 1rem', fontSize: '0.85rem', color: '#ef4444', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          {error}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        id="portal-signin-btn"
        disabled={loading}
        className="btn btn-primary"
        style={{ width: '100%', padding: '0.85rem', fontSize: '1rem', fontWeight: 700, borderRadius: '10px', justifyContent: 'center', gap: '0.5rem', opacity: loading ? 0.75 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
      >
        {loading ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Signing in…
          </>
        ) : (
          <>
            <LogIn size={18} /> Sign In to Patient Portal
          </>
        )}
      </button>

      <p style={{ textAlign: 'center', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
        Don't have an account?{' '}
        <button type="button" onClick={onSwitch} style={{ background: 'none', border: 'none', color: 'var(--primary)', fontWeight: 700, cursor: 'pointer', fontSize: '0.875rem' }}>
          Create one free
        </button>
      </p>
    </form>
  );
}

// ─── Sign-Up Form ───────────────────────────────────────────────────────────
function SignUpForm({ onSwitch }: { onSwitch: () => void }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${ADMIN_BASE}/api/auth/sign-up`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), password }),
      });

      if (res.ok) {
        setSuccess(true);
        // Auto redirect to admin portal after a short delay
        setTimeout(() => { window.location.href = ADMIN_BASE; }, 2500);
        return;
      }

      const data = await res.json().catch(() => ({}));
      if (res.status === 409) {
        setError('An account with this email already exists. Please sign in.');
      } else if (data.error) {
        setError(data.error);
      } else {
        // API not accepting external sign-ups – redirect to admin sign-up page
        window.location.href = `${ADMIN_BASE}/sign-up`;
      }
    } catch {
      // Network or CORS issue – redirect to admin sign-up directly
      window.location.href = `${ADMIN_BASE}/sign-up`;
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', animation: 'fadeIn 0.3s ease' }}>
        <div style={{ background: 'rgba(255,120,36,0.1)', borderRadius: '50%', padding: '1rem', display: 'inline-flex', color: 'var(--primary)' }}>
          <CheckCircle size={48} />
        </div>
        <h3 style={{ fontSize: '1.4rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>Account Created!</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '320px' }}>
          Your patient account has been created. Redirecting you to the portal now…
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          <Loader2 size={14} className="animate-spin" /> Redirecting…
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {/* Full Name */}
      <div>
        <label htmlFor="signup-name" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-muted)' }}>
          Full Name
        </label>
        <div style={{ position: 'relative' }}>
          <User size={16} style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', pointerEvents: 'none' }} />
          <input
            id="signup-name"
            type="text"
            required
            value={name}
            onChange={e => setName(e.target.value)}
            disabled={loading}
            placeholder="Full Name"
            style={{
              width: '100%',
              padding: '0.75rem 1rem 0.75rem 2.5rem',
              borderRadius: '10px',
              border: '1px solid var(--border)',
              background: 'var(--bg-panel)',
              color: 'var(--text-main)',
              fontSize: '0.95rem',
              outline: 'none',
              opacity: loading ? 0.7 : 1,
            }}
            onFocus={e => (e.currentTarget.style.borderColor = 'var(--border-focus)')}
            onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="signup-email" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-muted)' }}>
          Email Address
        </label>
        <div style={{ position: 'relative' }}>
          <Mail size={16} style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', pointerEvents: 'none' }} />
          <input
            id="signup-email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            disabled={loading}
            placeholder="name@example.com"
            style={{
              width: '100%',
              padding: '0.75rem 1rem 0.75rem 2.5rem',
              borderRadius: '10px',
              border: '1px solid var(--border)',
              background: 'var(--bg-panel)',
              color: 'var(--text-main)',
              fontSize: '0.95rem',
              outline: 'none',
              opacity: loading ? 0.7 : 1,
            }}
            onFocus={e => (e.currentTarget.style.borderColor = 'var(--border-focus)')}
            onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
          />
        </div>
      </div>

      {/* Password */}
      <div>
        <label htmlFor="signup-password" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-muted)' }}>
          Password <span style={{ fontSize: '0.78rem', fontWeight: 400, color: 'var(--text-muted)' }}>(min 8 characters)</span>
        </label>
        <div style={{ position: 'relative' }}>
          <Lock size={16} style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', pointerEvents: 'none' }} />
          <input
            id="signup-password"
            type={showPass ? 'text' : 'password'}
            autoComplete="new-password"
            required
            minLength={8}
            value={password}
            onChange={e => setPassword(e.target.value)}
            disabled={loading}
            placeholder="••••••••••••"
            style={{
              width: '100%',
              padding: '0.75rem 2.75rem 0.75rem 2.5rem',
              borderRadius: '10px',
              border: '1px solid var(--border)',
              background: 'var(--bg-panel)',
              color: 'var(--text-main)',
              fontSize: '0.95rem',
              outline: 'none',
              opacity: loading ? 0.7 : 1,
            }}
            onFocus={e => (e.currentTarget.style.borderColor = 'var(--border-focus)')}
            onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
          />
          <button
            type="button"
            onClick={() => setShowPass(v => !v)}
            style={{ position: 'absolute', right: '0.9rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', display: 'flex', alignItems: 'center' }}
            aria-label={showPass ? 'Hide password' : 'Show password'}
          >
            {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '0.65rem 1rem', fontSize: '0.85rem', color: '#ef4444' }}>
          {error}
        </div>
      )}

      {/* Consent note */}
      <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
        By creating an account you agree to OTT Psychotherapy's privacy policy and data management terms. Your data is GDPR protected and never sold.
      </p>

      {/* Submit */}
      <button
        type="submit"
        id="portal-signup-btn"
        disabled={loading}
        className="btn btn-primary"
        style={{ width: '100%', padding: '0.85rem', fontSize: '1rem', fontWeight: 700, borderRadius: '10px', justifyContent: 'center', gap: '0.5rem', opacity: loading ? 0.75 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
      >
        {loading ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Creating Account…
          </>
        ) : (
          <>
            <UserPlus size={18} /> Create Patient Account
          </>
        )}
      </button>

      <p style={{ textAlign: 'center', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
        Already have an account?{' '}
        <button type="button" onClick={onSwitch} style={{ background: 'none', border: 'none', color: 'var(--primary)', fontWeight: 700, cursor: 'pointer', fontSize: '0.875rem' }}>
          Sign in
        </button>
      </p>
    </form>
  );
}

// ─── Main Page ──────────────────────────────────────────────────────────────
export default function PortalPage() {
  const [tab, setTab] = useState<'signin' | 'signup'>('signin');

  return (
    <section className="view-section active" style={{ maxWidth: '1100px', margin: '2rem auto' }}>
      {/* Page header */}
      <div className="section-title-wrap" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '0.75rem' }}>
          Secure Patient Access
        </span>
        <h1 className="section-title" style={{ fontSize: '2.5rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
          Patient Portal
        </h1>
        <p className="section-subtitle" style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
          Sign in or create a patient account to access your therapy workspace, appointments, and clinical records.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>

        {/* ── Left: Auth Card ── */}
        <div className="glass-panel" style={{ padding: '2.5rem', border: '1px solid var(--border)', background: 'var(--bg-card)' }}>

          {/* Tab switcher */}
          <div style={{ display: 'flex', gap: '0', marginBottom: '2rem', background: 'var(--bg-panel)', borderRadius: '12px', padding: '4px', border: '1px solid var(--border)' }}>
            {(['signin', 'signup'] as const).map(t => (
              <button
                key={t}
                id={t === 'signin' ? 'portal-tab-signin' : 'portal-tab-signup'}
                type="button"
                onClick={() => setTab(t)}
                style={{
                  flex: 1,
                  padding: '0.6rem',
                  borderRadius: '9px',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  fontFamily: 'var(--font-body)',
                  transition: 'all 0.2s ease',
                  background: tab === t ? 'var(--primary)' : 'transparent',
                  color: tab === t ? '#fff' : 'var(--text-muted)',
                  boxShadow: tab === t ? '0 2px 8px var(--primary-glow)' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                }}
              >
                {t === 'signin' ? <><LogIn size={15} /> Sign In</> : <><UserPlus size={15} /> Register</>}
              </button>
            ))}
          </div>

          {/* Form */}
          <div style={{ animation: 'fadeIn 0.25s ease' }} key={tab}>
            {tab === 'signin'
              ? <SignInForm onSwitch={() => setTab('signup')} />
              : <SignUpForm onSwitch={() => setTab('signin')} />
            }
          </div>

          {/* Divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', margin: '1.5rem 0' }}>
            <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>OR</span>
            <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
          </div>

          {/* Direct portal link */}
          <a
            href={ADMIN_BASE}
            target="_blank"
            rel="noopener noreferrer"
            id="portal-direct-link"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '0.75rem',
              borderRadius: '10px',
              border: '1px solid var(--border)',
              color: 'var(--text-muted)',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: 600,
              transition: 'all 0.2s ease',
              background: 'transparent',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--primary)'; (e.currentTarget as HTMLElement).style.color = 'var(--primary)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'; }}
          >
            Open Portal Directly <ArrowRight size={15} />
          </a>
        </div>

        {/* ── Right: Info Panel ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

          {/* What is the portal */}
          <div style={{ marginBottom: '0.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-heading)', marginBottom: '0.75rem' }}>
              Your Secure Therapy Workspace
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>
              The OTT Patient Portal — powered by the OnTime Therapy Admin Platform — gives you a private, encrypted workspace to manage every aspect of your care from one place.
            </p>
          </div>

          {/* Feature cards */}
          {features.map((f, i) => (
            <div
              key={i}
              className="glass-panel"
              style={{ padding: '1.25rem 1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start', border: '1px solid var(--border)', borderRadius: '14px', transition: 'all 0.25s ease' }}
            >
              <div style={{ background: 'rgba(255,120,36,0.1)', borderRadius: '10px', padding: '0.6rem', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <f.icon size={20} color="var(--primary)" />
              </div>
              <div>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: '0.2rem' }}>{f.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>{f.desc}</p>
              </div>
            </div>
          ))}

          {/* CTA to FAQ */}
          <div style={{ marginTop: '0.5rem', padding: '1.25rem 1.5rem', background: 'rgba(255,120,36,0.05)', border: '1px solid rgba(255,120,36,0.15)', borderRadius: '12px' }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: 0 }}>
              Have questions about the patient portal?{' '}
              <Link href="/faq#patient-portal" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'none' }}>
                Read our Portal FAQ →
              </Link>
            </p>
          </div>
        </div>

      </div>

      {/* Responsive styles */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .portal-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
