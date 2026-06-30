"use client";

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, Activity, Sun, Moon } from 'lucide-react';

function NavbarContent() {
    const pathname = usePathname();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');

    const toggleMenu = () => setIsOpen(!isOpen);

    // Set initial theme on mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('easymed_theme') as 'light' | 'dark' | null;
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
        localStorage.setItem('easymed_theme', newTheme);
    };

    const openBooking = () => {
        router.push(`${pathname}?booking=general`);
        setIsOpen(false);
    };

    return (
        <header>
            <div className="nav-container">
                <Link href="/" className="logo">
                    <div className="logo-icon">
                        <Activity size={22} color="white" />
                    </div>
                    <div className="logo-text">Easy<span>Med</span></div>
                </Link>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {/* Mobile Theme Toggle */}
                    <button 
                        onClick={toggleTheme} 
                        className="mobile-menu-btn" 
                        style={{ display: 'none', marginRight: '0.5rem' }} 
                        aria-label="Toggle Theme"
                    >
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>

                    <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Navigation Menu">
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
                        <Link href="/assessments" className={`nav-link ${pathname.startsWith('/assessments') ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
                            Self-Assessments
                        </Link>
                    </li>
                    <li>
                        <Link href="/therapists" className={`nav-link ${pathname === '/therapists' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
                            Find a Therapist
                        </Link>
                    </li>
                    <li>
                        <Link href="/cbt-tools" className={`nav-link ${pathname === '/cbt-tools' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
                            CBT Thought Record
                        </Link>
                    </li>
                    <li>
                        <Link href="/faqs" className={`nav-link ${pathname === '/faqs' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
                            FAQs
                        </Link>
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
                    <li>
                        <button className="nav-link nav-cta btn" onClick={openBooking} style={{ border: 'none', width: 'auto', display: 'inline-flex' }}>
                            Book Consultation
                        </button>
                    </li>
                </ul>
            </div>
            {/* Custom media overrides in CSS for mobile menu buttons */}
            <style jsx global>{`
                @media (max-width: 768px) {
                    .desktop-theme-toggle {
                        display: none !important;
                    }
                    .mobile-menu-btn {
                        display: block !important;
                    }
                }
            `}</style>
        </header>
    );
}

export default function Navbar() {
    return (
        <Suspense fallback={<header><div className="nav-container"><div className="logo-text">Easy<span>Med</span></div></div></header>}>
            <NavbarContent />
        </Suspense>
    );
}
