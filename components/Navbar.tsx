"use client";

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, Sun, Moon, ChevronDown, UserCircle, LogIn } from 'lucide-react';

function NavbarContent() {
    const pathname = usePathname();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');
    const [infoOpen, setInfoOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    // Set initial theme on mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('ontime_theme') as 'light' | 'dark' | null;
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.setAttribute('data-theme', savedTheme);
        } else {
            const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const initialTheme = systemPrefersDark ? 'dark' : 'light';
            setTheme(initialTheme);
            document.documentElement.setAttribute('data-theme', initialTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('ontime_theme', newTheme);
    };

    const openBooking = () => {
        router.push('/book');
        setIsOpen(false);
    };

    const closeAll = () => {
        setInfoOpen(false);
        setIsOpen(false);
    };

    return (
        <header>
            <div className="nav-container">
                {/* Logo */}
                <Link href="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
                    <div style={{ background: 'inherit', padding: '4px 10px', borderRadius: '8px', display: 'flex', alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.03)' }}>
                        <img src="/images/logo1.png" alt="Ontime Therapy Logo" style={{ height: '65px', objectFit: 'contain' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '1.2rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--text-main)', lineHeight: 1.1 }}>OTT Ontime Therapy</span>
                        <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--primary)', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Heal. Balance. Thrive.</span>
                    </div>
                </Link>

                {/* Mobile controls */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {/* Mobile Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="mobile-menu-btn"
                        style={{ display: 'none', marginRight: '0.5rem', background: 'none', border: 'none', cursor: 'pointer' }}
                        aria-label="Toggle Theme"
                    >
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>

                    {/* Mobile portal icon */}
                    <Link
                        href="/portal"
                        className="mobile-menu-btn"
                        id="mobile-portal-btn"
                        aria-label="Patient Portal"
                        style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--primary)', alignItems: 'center' }}
                        onClick={closeAll}
                    >
                        <UserCircle size={22} />
                    </Link>

                    <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Navigation Menu" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
                    {/* Home */}
                    <li>
                        <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`} onClick={closeAll}>
                            Home
                        </Link>
                    </li>

                    {/* Our Services */}
                    <li>
                        <Link href="/services" className={`nav-link ${pathname === '/services' ? 'active' : ''}`} onClick={closeAll}>
                            Our Services
                        </Link>
                    </li>

                    {/* FAQ & Policies */}
                    <li>
                        <Link href="/faq" className={`nav-link ${pathname === '/faq' ? 'active' : ''}`} onClick={closeAll}>
                            FAQ & Policies
                        </Link>
                    </li>

                    {/* Merged "Explore" dropdown (was Useful Info + Learn More) */}
                    <li
                        className="nav-dropdown-wrapper"
                        style={{ position: 'relative' }}
                        onMouseEnter={() => setInfoOpen(true)}
                        onMouseLeave={() => setInfoOpen(false)}
                    >
                        <button
                            className="nav-link"
                            onClick={() => setInfoOpen(!infoOpen)}
                            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: 500, fontSize: '0.95rem', width: '100%', textAlign: 'left' }}
                        >
                            Explore <ChevronDown size={14} style={{ transform: infoOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                        </button>

                        {infoOpen && (
                            <ul
                                className="nav-dropdown"
                                style={{
                                    position: 'absolute',
                                    top: '100%',
                                    left: '0',
                                    background: 'var(--bg-card)',
                                    border: '1px solid var(--border)',
                                    borderRadius: '14px',
                                    padding: '0.5rem 0',
                                    listStyle: 'none',
                                    minWidth: '220px',
                                    boxShadow: '0 16px 40px -8px rgba(0,0,0,0.2)',
                                    zIndex: 10,
                                    margin: 0,
                                }}
                            >
                                {/* ── Useful Info section ── */}
                                <li>
                                    <span style={{ padding: '0.45rem 1.25rem 0.2rem', display: 'block', fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                                        Useful Info
                                    </span>
                                </li>
                                <li>
                                    <Link href="/useful-information" className="nav-link dropdown-item" style={{ padding: '0.55rem 1.25rem', display: 'block', textDecoration: 'none', fontSize: '0.9rem' }} onClick={closeAll}>
                                        Info Hub
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/useful-information/self-guided" className="nav-link dropdown-item" style={{ padding: '0.55rem 1.25rem', display: 'block', textDecoration: 'none', fontSize: '0.9rem' }} onClick={closeAll}>
                                        Self-Guided Support
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/useful-information/parental-support" className="nav-link dropdown-item" style={{ padding: '0.55rem 1.25rem', display: 'block', textDecoration: 'none', fontSize: '0.9rem' }} onClick={closeAll}>
                                        Parental Support
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/useful-information/crisis-advice" className="nav-link dropdown-item" style={{ padding: '0.55rem 1.25rem', display: 'block', textDecoration: 'none', fontSize: '0.9rem', color: '#ef4444' }} onClick={closeAll}>
                                        Crisis Advice
                                    </Link>
                                </li>

                                {/* Divider */}
                                <li aria-hidden="true" style={{ margin: '0.4rem 1rem', height: '1px', background: 'var(--border)' }} />

                                {/* ── Learn More section ── */}
                                <li>
                                    <span style={{ padding: '0.35rem 1.25rem 0.2rem', display: 'block', fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                                        Learn More
                                    </span>
                                </li>
                                <li>
                                    <Link href="/about" className="nav-link dropdown-item" style={{ padding: '0.55rem 1.25rem', display: 'block', textDecoration: 'none', fontSize: '0.9rem' }} onClick={closeAll}>
                                        Meet Your Therapist
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/approach" className="nav-link dropdown-item" style={{ padding: '0.55rem 1.25rem', display: 'block', textDecoration: 'none', fontSize: '0.9rem' }} onClick={closeAll}>
                                        Our Approach
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/assessments" className="nav-link dropdown-item" style={{ padding: '0.55rem 1.25rem', display: 'block', textDecoration: 'none', fontSize: '0.9rem' }} onClick={closeAll}>
                                        Self-Assessments
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/cbt-tools" className="nav-link dropdown-item" style={{ padding: '0.55rem 1.25rem', display: 'block', textDecoration: 'none', fontSize: '0.9rem' }} onClick={closeAll}>
                                        CBT Thought Record
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    {/* Desktop theme toggle */}
                    <li className="desktop-theme-toggle">
                        <button
                            onClick={toggleTheme}
                            className="nav-link"
                            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.5rem' }}
                            aria-label="Toggle Theme"
                        >
                            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                        </button>
                    </li>

                    {/* ── Patient Portal button (header) ── */}
                    <li>
                        <Link
                            href="/portal"
                            id="nav-portal-btn"
                            onClick={closeAll}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.4rem',
                                padding: '0.6rem 1.1rem',
                                borderRadius: '10px',
                                border: '1px solid var(--border)',
                                color: 'var(--text-main)',
                                textDecoration: 'none',
                                fontWeight: 600,
                                fontSize: '0.9rem',
                                fontFamily: 'var(--font-body)',
                                background: pathname === '/portal' ? 'rgba(255,120,36,0.08)' : 'transparent',
                                borderColor: pathname === '/portal' ? 'var(--primary)' : 'var(--border)',
                                transition: 'all 0.2s ease',
                                whiteSpace: 'nowrap',
                            }}
                            onMouseEnter={e => {
                                (e.currentTarget as HTMLElement).style.borderColor = 'var(--primary)';
                                (e.currentTarget as HTMLElement).style.color = 'var(--primary)';
                            }}
                            onMouseLeave={e => {
                                if (pathname !== '/portal') {
                                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                                    (e.currentTarget as HTMLElement).style.color = 'var(--text-main)';
                                }
                            }}
                        >
                            <LogIn size={15} />
                            Patient Login
                        </Link>
                    </li>

                    {/* Get Therapy CTA */}
                    <li>
                        <button className="nav-link nav-cta btn" onClick={openBooking} style={{ border: 'none', width: 'auto', display: 'inline-flex', padding: '0.6rem 1.25rem', borderRadius: '10px' }}>
                            Get Therapy
                        </button>
                    </li>
                </ul>
            </div>

            {/* Responsive overrides */}
            <style>{`
                @media (max-width: 768px) {
                    .desktop-theme-toggle {
                        display: none !important;
                    }
                    .mobile-menu-btn {
                        display: flex !important;
                    }
                    .mobile-portal-btn {
                        display: flex !important;
                    }
                    #nav-portal-btn {
                        width: 100%;
                        justify-content: flex-start;
                    }
                    .nav-dropdown {
                        position: static !important;
                        box-shadow: none !important;
                        background: rgba(255, 255, 255, 0.02) !important;
                        border: none !important;
                        padding-left: 1rem !important;
                    }
                }
            `}</style>
        </header>
    );
}

export default function Navbar() {
    return (
        <Suspense fallback={<header><div className="nav-container"><div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><div style={{ background: '#ffffff', padding: '4px 10px', borderRadius: '8px', display: 'flex', alignItems: 'center' }}><img src="/images/logo.jpg" alt="Ontime Therapy Logo" style={{ height: '36px', objectFit: 'contain' }} /></div><span style={{ fontSize: '1.2rem', fontWeight: 800 }}>OTT Ontime Therapy</span></div></div></header>}>
            <NavbarContent />
        </Suspense>
    );
}
