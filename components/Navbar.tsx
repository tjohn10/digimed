"use client";

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';

function NavbarContent() {
    const pathname = usePathname();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');
    const [learnMoreOpen, setLearnMoreOpen] = useState(false);
    const [usefulInfoOpen, setUsefulInfoOpen] = useState(false);

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

    return (
        <header>
            <div className="nav-container">
                <Link href="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
                    <div style={{ background: '#ffffff', padding: '4px 10px', borderRadius: '8px', display: 'flex', alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.03)' }}>
                        <img src="/images/logo.jpg" alt="Ontime Therapy Logo" style={{ height: '38px', objectFit: 'contain' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '1.2rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--text-main)', lineHeight: 1.1 }}>OTT Ontime Therapy</span>
                        <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--primary)', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Heal. Balance. Thrive.</span>
                    </div>
                </Link>
                
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

                    <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Navigation Menu" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
                    <li>
                        <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/services" className={`nav-link ${pathname === '/services' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
                            Our Services
                        </Link>
                    </li>
                    <li>
                        <Link href="/faq" className={`nav-link ${pathname === '/faq' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
                            FAQ & Policies
                        </Link>
                    </li>
                    
                    {/* Dropdown CTA "Useful Info" */}
                    <li 
                        className="nav-dropdown-wrapper" 
                        style={{ position: 'relative' }}
                        onMouseEnter={() => setUsefulInfoOpen(true)}
                        onMouseLeave={() => setUsefulInfoOpen(false)}
                    >
                        <button 
                            className="nav-link" 
                            onClick={() => setUsefulInfoOpen(!usefulInfoOpen)}
                            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: 500, fontSize: '0.95rem', width: '100%', textAlign: 'left' }}
                        >
                            Useful Info <ChevronDown size={14} style={{ transform: usefulInfoOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                        </button>
                        {usefulInfoOpen && (
                            <ul 
                                className="nav-dropdown" 
                                style={{ 
                                    position: 'absolute', 
                                    top: '100%', 
                                    left: '0', 
                                    background: 'var(--bg-card)', 
                                    border: '1px solid var(--border)', 
                                    borderRadius: '12px', 
                                    padding: '0.5rem 0', 
                                    listStyle: 'none', 
                                    minWidth: '200px', 
                                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
                                    zIndex: 10,
                                    margin: 0
                                }}
                            >
                                <li>
                                    <Link href="/useful-information" className="nav-link dropdown-item" style={{ padding: '0.6rem 1.25rem', display: 'block', textDecoration: 'none', fontSize: '0.9rem' }} onClick={() => { setUsefulInfoOpen(false); setIsOpen(false); }}>
                                        Useful Info Hub
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/useful-information/self-guided" className="nav-link dropdown-item" style={{ padding: '0.6rem 1.25rem', display: 'block', textDecoration: 'none', fontSize: '0.9rem' }} onClick={() => { setUsefulInfoOpen(false); setIsOpen(false); }}>
                                        Self Guided Support
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/useful-information/parental-support" className="nav-link dropdown-item" style={{ padding: '0.6rem 1.25rem', display: 'block', textDecoration: 'none', fontSize: '0.9rem' }} onClick={() => { setUsefulInfoOpen(false); setIsOpen(false); }}>
                                        Parental Support
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/useful-information/crisis-advice" className="nav-link dropdown-item" style={{ padding: '0.6rem 1.25rem', display: 'block', textDecoration: 'none', fontSize: '0.9rem', color: '#ef4444' }} onClick={() => { setUsefulInfoOpen(false); setIsOpen(false); }}>
                                        Crisis Advice
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    
                    {/* Dropdown CTA "Learn More" */}
                    <li 
                        className="nav-dropdown-wrapper" 
                        style={{ position: 'relative' }}
                        onMouseEnter={() => setLearnMoreOpen(true)}
                        onMouseLeave={() => setLearnMoreOpen(false)}
                    >
                        <button 
                            className="nav-link" 
                            onClick={() => setLearnMoreOpen(!learnMoreOpen)}
                            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: 500, fontSize: '0.95rem', width: '100%', textAlign: 'left' }}
                        >
                            Learn More <ChevronDown size={14} style={{ transform: learnMoreOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                        </button>
                        {learnMoreOpen && (
                            <ul 
                                className="nav-dropdown" 
                                style={{ 
                                    position: 'absolute', 
                                    top: '100%', 
                                    left: '0', 
                                    background: 'var(--bg-card)', 
                                    border: '1px solid var(--border)', 
                                    borderRadius: '12px', 
                                    padding: '0.5rem 0', 
                                    listStyle: 'none', 
                                    minWidth: '200px', 
                                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
                                    zIndex: 10,
                                    margin: 0
                                }}
                            >
                                <li>
                                    <Link href="/about" className="nav-link dropdown-item" style={{ padding: '0.6rem 1.25rem', display: 'block', textDecoration: 'none', fontSize: '0.9rem' }} onClick={() => { setLearnMoreOpen(false); setIsOpen(false); }}>
                                        Meet Your Therapist
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/approach" className="nav-link dropdown-item" style={{ padding: '0.6rem 1.25rem', display: 'block', textDecoration: 'none', fontSize: '0.9rem' }} onClick={() => { setLearnMoreOpen(false); setIsOpen(false); }}>
                                        Our Approach
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/assessments" className="nav-link dropdown-item" style={{ padding: '0.6rem 1.25rem', display: 'block', textDecoration: 'none', fontSize: '0.9rem' }} onClick={() => { setLearnMoreOpen(false); setIsOpen(false); }}>
                                        Self-Assessments
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/cbt-tools" className="nav-link dropdown-item" style={{ padding: '0.6rem 1.25rem', display: 'block', textDecoration: 'none', fontSize: '0.9rem' }} onClick={() => { setLearnMoreOpen(false); setIsOpen(false); }}>
                                        CBT Thought Record
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>

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
                    
                    {/* Get Therapy CTA Hook */}
                    <li>
                        <button className="nav-link nav-cta btn" onClick={openBooking} style={{ border: 'none', width: 'auto', display: 'inline-flex', padding: '0.6rem 1.25rem', borderRadius: '10px' }}>
                            Get Therapy
                        </button>
                    </li>
                </ul>
            </div>
            {/* Custom overrides for responsiveness */}
            <style jsx global>{`
                @media (max-width: 768px) {
                    .desktop-theme-toggle {
                        display: none !important;
                    }
                    .mobile-menu-btn {
                        display: block !important;
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
