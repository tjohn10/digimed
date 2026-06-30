"use client";

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import { X, Check } from 'lucide-react';

function BookingSuccessModalContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    
    const successVal = searchParams.get('success');
    const [isOpen, setIsOpen] = useState(false);
    
    const therapist = searchParams.get('therapist') || 'General Intake Team';
    const date = searchParams.get('date') || '';
    const time = searchParams.get('time') || '';
    const phone = searchParams.get('phone') || '';

    useEffect(() => {
        if (successVal === 'true') {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, [successVal]);

    const handleClose = () => {
        setIsOpen(false);
        router.push('/');
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay active" id="booking-success-modal">
            <div className="glass-panel modal-container">
                <button className="modal-close" onClick={handleClose} aria-label="Close Confirmation Dialog">
                    <X size={20} />
                </button>
                <div className="success-box">
                    <div className="success-icon">
                        <Check size={32} color="#10b981" strokeWidth={3} />
                    </div>
                    <h3>Consultation Requested!</h3>
                    <p>Your 15-minute phone assessment has been scheduled. A practitioner will dial your number at the requested time.</p>
                    
                    <div className="success-summary">
                        <div className="success-row">
                            <span>Therapist:</span>
                            <span>{therapist}</span>
                        </div>
                        <div className="success-row">
                            <span>Date:</span>
                            <span>{date}</span>
                        </div>
                        <div className="success-row">
                            <span>Time Slot:</span>
                            <span>{time}</span>
                        </div>
                        <div className="success-row">
                            <span>Contact phone:</span>
                            <span>{phone}</span>
                        </div>
                    </div>

                    <button className="btn btn-primary" style={{ width: '100%' }} onClick={handleClose}>
                        Return to Homepage
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function BookingSuccessModal() {
    return (
        <Suspense fallback={null}>
            <BookingSuccessModalContent />
        </Suspense>
    );
}
