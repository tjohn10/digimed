"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Menu, X, Activity } from 'lucide-react';
import { Suspense } from 'react';

function NavbarContent() {
    const pathname = usePathname();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const openBooking = () => {
        router.push(`${pathname}?booking=general`);
        setIsOpen(false);
    };

    return (
        <header>
            <div class="nav-container">
                <Link href="/" className="logo">
                    <div className="logo-icon">
                        <Activity size={22} color="white" />
                    </div>
                    <div className="logo-text">Easy<span>Med</span></div>
                </Link>
                
                <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Navigation Menu">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

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
                        <button className="nav-link nav-cta btn" onClick={openBooking} style={{ border: 'none', width: 'auto', display: 'inline-flex' }}>
                            Book Consultation
                        </button>
                    </li>
                </ul>
            </div>
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
