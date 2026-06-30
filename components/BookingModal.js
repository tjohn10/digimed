"use client";

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import { X } from 'lucide-react';

const therapists = [
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
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        date: '',
        time: ''
    });

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
        // Remove booking query param
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

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Format date nicely
        const dateObj = new Date(formData.date);
        const options = { weekday: 'long', month: 'long', day: 'numeric' };
        const formattedDate = dateObj.toLocaleDateString('en-GB', options);

        // Redirect to booking success state via search params
        const params = new URLSearchParams();
        params.set('success', 'true');
        params.set('therapist', therapistName);
        params.set('date', formattedDate);
        params.set('time', formData.time);
        params.set('phone', formData.phone);
        
        router.push(`${pathname}?${params.toString()}`);
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
                                <option value="09:00 - 09:15">09:00 - 09:15</option>
                                <option value="10:30 - 10:45">10:30 - 10:45</option>
                                <option value="12:00 - 12:15">12:00 - 12:15</option>
                                <option value="14:15 - 14:30">14:15 - 14:30</option>
                                <option value="16:00 - 16:15">16:00 - 16:15</option>
                                <option value="17:30 - 17:45">17:30 - 17:45</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="button" className="btn btn-secondary" onClick={handleClose}>Cancel</button>
                        <button type="submit" className="btn btn-primary">Submit Booking</button>
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
