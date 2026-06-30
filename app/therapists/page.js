"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Search, MapPin, Clock, RotateCcw, Frown } from 'lucide-react';

const initialTherapists = [
    {
        id: "sarah-jenkins",
        name: "Dr. Sarah Jenkins",
        title: "Clinical Lead & Psychologist",
        specialties: ["depression", "anxiety", "ocd", "stress"],
        formats: ["online", "inperson"],
        location: "london",
        price: 85,
        avatar: "/images/therapist_1.png",
        bio: "Specializes in Cognitive Behavioral Therapy for clinical depression and panic disorders. Over 12 years of experience within national mental health systems."
    },
    {
        id: "michael-patel",
        name: "Dr. Michael Patel",
        title: "Consultant Psychotherapist",
        specialties: ["depression", "anxiety", "ptsd"],
        formats: ["online"],
        location: "manchester",
        price: 85,
        avatar: "/images/therapist_2.png",
        bio: "Dedicated to utilizing evidence-based CBT and trauma-informed methodologies to help clients manage generalized anxiety disorder and traumatic stress."
    },
    {
        id: "clare-adams",
        name: "Clare Adams",
        title: "Senior CBT Therapist",
        specialties: ["anxiety", "ocd", "stress"],
        formats: ["online", "inperson"],
        location: "birmingham",
        price: 85,
        avatar: "/images/therapist_3.png",
        bio: "Specialist in treating Obsessive-Compulsive Disorder (OCD) and social phobia. Committed to a collaborative, solution-oriented approach with clients."
    },
    {
        id: "elena-rostova",
        name: "Dr. Elena Rostova",
        title: "Clinical Psychologist",
        specialties: ["depression", "anxiety", "ptsd"],
        formats: ["online", "inperson"],
        location: "london",
        price: 85,
        avatar: "/images/therapist_4.png",
        bio: "Expertise in emotional dysregulation, anxiety, and post-traumatic stress disorder. Integrates standard CBT with mindfulness-based approaches."
    },
    {
        id: "marcus-vance",
        name: "Marcus Vance",
        title: "Specialist EMDR & CBT Therapist",
        specialties: ["ptsd", "stress", "anxiety"],
        formats: ["online"],
        location: "manchester",
        price: 85,
        avatar: "/images/therapist_4.png",
        bio: "Focuses on career burnout, executive stress management, and complex PTSD. Employs brief, structured behavioral experiments."
    },
    {
        id: "sofia-aljamil",
        name: "Sofia Al-Jamil",
        title: "Family & Couples CBT Specialist",
        specialties: ["couples", "depression", "anxiety"],
        formats: ["online", "inperson"],
        location: "birmingham",
        price: 85,
        avatar: "/images/therapist_1.png",
        bio: "Specializes in systemic Cognitive Behavioral Therapy and relationship dynamics. Guides couples and individuals through depression coping skills."
    }
];

export default function TherapistDirectory() {
    const [searchQuery, setSearchQuery] = useState('');
    const [specialty, setSpecialty] = useState('all');
    const [location, setLocation] = useState('all');
    const [onlineFormat, setOnlineFormat] = useState(true);
    const [inpersonFormat, setInpersonFormat] = useState(true);

    const handleReset = () => {
        setSearchQuery('');
        setSpecialty('all');
        setLocation('all');
        setOnlineFormat(true);
        setInpersonFormat(true);
    };

    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    const filteredTherapists = initialTherapists.filter(therapist => {
        // Name search
        if (searchQuery && !therapist.name.toLowerCase().includes(searchQuery.toLowerCase())) {
            return false;
        }
        
        // Specialty match
        if (specialty !== 'all' && !therapist.specialties.includes(specialty)) {
            return false;
        }
        
        // Location match
        if (location !== 'all' && therapist.location !== location) {
            return false;
        }
        
        // Format match
        const hasOnline = therapist.formats.includes('online');
        const hasInperson = therapist.formats.includes('inperson');
        
        if (onlineFormat && !inpersonFormat && !hasOnline) return false;
        if (inpersonFormat && !onlineFormat && !hasInperson) return false;
        if (!onlineFormat && !inpersonFormat) return false; // If nothing checked, display none
        
        return true;
    });

    return (
        <section className="view-section active">
            <div className="section-title-wrap">
                <h2 className="section-title">Our Accredited CBT Therapist Directory</h2>
                <p className="section-subtitle">
                    Filter and browse through our BABCP-accredited therapists. Every practitioner is qualified to support your therapy needs in-person or online.
                </p>
            </div>

            <div className="directory-layout">
                {/* Filters Sidebar */}
                <aside className="glass-panel filter-sidebar">
                    <h3>Filter Therapists</h3>
                    
                    <div className="filter-group">
                        <label className="filter-label" htmlFor="search-query">Search Name</label>
                        <input 
                            type="text" 
                            id="search-query" 
                            className="input-text" 
                            placeholder="e.g. Dr. Sarah" 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="filter-group">
                        <label className="filter-label" htmlFor="filter-specialty">Specialty Focus</label>
                        <select 
                            id="filter-specialty" 
                            className="select-control"
                            value={specialty}
                            onChange={(e) => setSpecialty(e.target.value)}
                        >
                            <option value="all">All Specialties</option>
                            <option value="depression">Depression</option>
                            <option value="anxiety">Anxiety / Panic</option>
                            <option value="ocd">OCD</option>
                            <option value="ptsd">PTSD / Trauma</option>
                            <option value="stress">Work Stress</option>
                            <option value="couples">Couples Therapy</option>
                        </select>
                    </div>

                    <div className="filter-group">
                        <label className="filter-label">Session Format</label>
                        <div className="checkbox-group">
                            <label className="checkbox-label">
                                <input 
                                    type="checkbox" 
                                    className="checkbox-control" 
                                    checked={onlineFormat}
                                    onChange={(e) => setOnlineFormat(e.target.checked)}
                                />
                                Online Video
                            </label>
                            <label className="checkbox-label">
                                <input 
                                    type="checkbox" 
                                    className="checkbox-control" 
                                    checked={inpersonFormat}
                                    onChange={(e) => setInpersonFormat(e.target.checked)}
                                />
                                In-Person Clinic
                            </label>
                        </div>
                    </div>

                    <div className="filter-group">
                        <label className="filter-label" htmlFor="filter-location">Clinic Location</label>
                        <select 
                            id="filter-location" 
                            className="select-control"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        >
                            <option value="all">Any Location</option>
                            <option value="london">London</option>
                            <option value="birmingham">Birmingham</option>
                            <option value="manchester">Manchester</option>
                        </select>
                    </div>

                    <button className="btn btn-secondary" style={{ width: '100%', marginTop: '1rem' }} onClick={handleReset}>
                        <RotateCcw size={16} style={{ marginRight: '0.4rem' }} />
                        Reset Filters
                    </button>
                </aside>

                {/* Therapist Cards List */}
                <div className="therapist-list-wrap">
                    {filteredTherapists.length === 0 ? (
                        <div className="glass-panel no-results">
                            <Frown size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                            <p>No therapists match your current search criteria. Try broadening your filter selections.</p>
                        </div>
                    ) : (
                        filteredTherapists.map(therapist => {
                            const formatsText = therapist.formats.map(f => f === 'online' ? 'Online' : 'In-Person').join(' & ');
                            const locationText = capitalize(therapist.location);
                            
                            return (
                                <div key={therapist.id} className="glass-panel therapist-card">
                                    <div className="therapist-avatar-wrap">
                                        <img 
                                            src={therapist.avatar} 
                                            alt={therapist.name} 
                                            className="therapist-avatar" 
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = 'data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%22100%22 height%3D%22100%22%3E%3Crect width%3D%22100%25%22 height%3D%22100%25%22 fill%3D%22%23162335%22%2F%3E%3Cpath d%3D%22M50 50a15 15 0 100-30 15 15 0 000 30zM20 85a30 30 0 0160 0%22 fill%3D%22none%22 stroke%3D%22%2310b981%22 stroke-width%3D%223%22%2F%3E%3C%2Fsvg%3E';
                                            }}
                                        />
                                        <div className="therapist-badge">BABCP ACCREDITED</div>
                                    </div>
                                    <div className="therapist-details">
                                        <div className="therapist-header">
                                            <div>
                                                <h3 className="therapist-name">{therapist.name}</h3>
                                                <p className="therapist-title">{therapist.title}</p>
                                            </div>
                                            <div className="therapist-price">£{therapist.price} <span>/ session</span></div>
                                        </div>
                                        <div className="therapist-tags">
                                            {therapist.specialties.map(spec => (
                                                <span key={spec} className="tag tag-specialty">{capitalize(spec)}</span>
                                            ))}
                                            <span className="tag">{formatsText}</span>
                                        </div>
                                        <p className="therapist-bio">{therapist.bio}</p>
                                        <div className="therapist-footer">
                                            <div className="therapist-meta-info">
                                                <div>
                                                    <MapPin size={16} />
                                                    {locationText} Clinic
                                                </div>
                                                <div>
                                                    <Clock size={16} />
                                                    Next opening: 24h
                                                </div>
                                            </div>
                                            <Link href={`/therapists?booking=${therapist.id}`} className="btn btn-primary">
                                                Request Consultation
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </section>
    );
}
