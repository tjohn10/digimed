"use client";

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import React, { useState, useEffect, Suspense } from 'react';
import { X } from 'lucide-react';

interface TherapistInfo {
    id: string;
    name: string;
}

interface FormDataState {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    date: string;
    time: string;
}

const therapists: TherapistInfo[] = [
    { id: "sarah-jenkins", name: "Dr. Sarah Jenkins" },
    { id: "michael-patel", name: "Dr. Michael Patel" },
    { id: "clare-adams", name: "Clare Adams" },
    { id: "elena-rostova", name: "Dr. Elena Rostova" },
    { id: "marcus-vance", name: "Marcus Vance" },
    { id: "sofia-aljamil", name: "Sofia Al-Jamil" }
];

function BookingModalContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    
    const bookingVal = searchParams.get('booking');
    const [isOpen, setIsOpen] = useState(false);
    const [therapistName, setTherapistName] = useState('');
    const [formData, setFormData] = useState<FormDataState>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        date: '',
        time: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    useEffect(() => {
        if (bookingVal) {
            setIsOpen(true);
            const therapist = therapists.find(t => t.id === bookingVal);
            if (therapist) {
                setTherapistName(therapist.name);
            } else {
                setTherapistName('General Intake Team');
            }

            // Set default date to tomorrow
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            setFormData(prev => ({
                ...prev,
                date: tomorrow.toISOString().split('T')[0]
            }));
        } else {
            setIsOpen(false);
        }
    }, [bookingVal]);

    const handleClose = () => {
        setIsOpen(false);
        router.push(pathname);
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            date: '',
            time: ''
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError(null);

        try {
            const response = await fetch('/api/consultation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    phone: formData.phone,
                    date: formData.date,
                    time: formData.time,
                    therapistName: therapistName
                }),
            });

            if (!response.ok) {
                const data = await response.json().catch(() => ({}));
                throw new Error(data.error || 'Failed to submit consultation request. Please try again.');
            }

            const dateObj = new Date(formData.date);
            const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' };
            const formattedDate = dateObj.toLocaleDateString('en-GB', options);

            const params = new URLSearchParams();
            params.set('success', 'true');
            params.set('therapist', therapistName);
            params.set('date', formattedDate);
            params.set('time', formData.time);
            params.set('phone', formData.phone);
            
            router.push(`${pathname}?${params.toString()}`);
        } catch (err: any) {
            setSubmitError(err.message || 'An unexpected error occurred.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    const tomorrowStr = new Date();
    tomorrowStr.setDate(tomorrowStr.getDate() + 1);
    const minDateStr = tomorrowStr.toISOString().split('T')[0];

    return (
        <div className="modal-overlay active" id="booking-modal">
            <div className="glass-panel modal-container">
                <button className="modal-close" onClick={handleClose} aria-label="Close Booking Dialog">
                    <X size={20} />
                </button>
                <h3 className="modal-title">Book Free Consultation</h3>
                <p className="modal-desc">
                    Request a free 15-minute phone consultation with <strong>{therapistName}</strong>. They will call you at the selected time.
                </p>

                <form id="booking-form" onSubmit={handleSubmit}>
                    <div className="form-grid">
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input 
                                type="text" 
                                id="firstName" 
                                className="input-text" 
                                value={formData.firstName}
                                onChange={handleChange}
                                required 
                                placeholder="e.g. Alex"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input 
                                type="text" 
                                id="lastName" 
                                className="input-text" 
                                value={formData.lastName}
                                onChange={handleChange}
                                required 
                                placeholder="e.g. Smith"
                            />
                        </div>
                        <div className="form-group form-full">
                            <label htmlFor="email">Email Address</label>
                            <input 
                                type="email" 
                                id="email" 
                                className="input-text" 
                                value={formData.email}
                                onChange={handleChange}
                                required 
                                placeholder="e.g. alex@example.com"
                            />
                        </div>
                        <div className="form-group form-full">
                            <label htmlFor="phone">Telephone Number</label>
                            <input 
                                type="tel" 
                                id="phone" 
                                className="input-text" 
                                value={formData.phone}
                                onChange={handleChange}
                                required 
                                placeholder="e.g. +44 7123 456789"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="date">Preferred Date</label>
                            <input 
                                type="date" 
                                id="date" 
                                className="input-text" 
                                value={formData.date}
                                onChange={handleChange}
                                min={minDateStr}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="time">Preferred Time</label>
                            <select 
                                id="time" 
                                className="select-control" 
                                value={formData.time}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select slot...</option>
                                <option value="10:00 - 10:15">10:00 - 10:15</option>
                                <option value="12:00 - 12:15">12:00 - 12:15</option>
                                <option value="14:00 - 14:15">14:00 - 14:15</option>
                                <option value="16:00 - 16:15">16:00 - 16:15</option>
                                <option value="18:00 - 18:15">18:00 - 18:15</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-actions" style={{ flexDirection: 'column', gap: '1rem', alignItems: 'stretch' }}>
                        {submitError && (
                            <div style={{ color: '#ef4444', fontSize: '0.85rem', marginBottom: '0.5rem', textAlign: 'center' }}>
                                {submitError}
                            </div>
                        )}
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                            <button type="button" className="btn btn-secondary" onClick={handleClose} disabled={isSubmitting}>Cancel</button>
                            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                                {isSubmitting ? 'Submitting...' : 'Submit Booking'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default function BookingModal() {
    return (
        <Suspense fallback={null}>
            <BookingModalContent />
        </Suspense>
    );
}
