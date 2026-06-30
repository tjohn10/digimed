"use client";

import React, { useState, useEffect } from 'react';
import { PenTool, Info, Trash2, BookOpen } from 'lucide-react';
import ThoughtDetailsModal from '@/components/ThoughtDetailsModal';

interface CBTThoughtRecord {
    id: string;
    date: string;
    situation: string;
    thought: string;
    distortions: string[];
    rational: string;
    moodPre: number;
    moodPost: number;
}

interface DistortionItem {
    value: string;
    label: string;
}

const cognitiveDistortionsList: DistortionItem[] = [
    { value: "All-or-Nothing", label: "All-or-Nothing" },
    { value: "Catastrophizing", label: "Catastrophizing" },
    { value: "Mind Reading", label: "Mind Reading" },
    { value: "Emotional Reasoning", label: "Emotional Reasoning" },
    { value: "Overgeneralization", label: "Overgeneralization" },
    { value: "Personalization", label: "Personalization" }
];

export default function CBTToolsDashboard() {
    const [records, setRecords] = useState<CBTThoughtRecord[]>([]);
    const [isMounted, setIsMounted] = useState(false);
    
    // Form fields state
    const [situation, setSituation] = useState('');
    const [thought, setThought] = useState('');
    const [rational, setRational] = useState('');
    const [moodPre, setMoodPre] = useState(80);
    const [moodPost, setMoodPost] = useState(30);
    const [distortions, setDistortions] = useState<string[]>([]);

    // Modal state
    const [selectedRecord, setSelectedRecord] = useState<CBTThoughtRecord | null>(null);
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);

    // Initial load
    useEffect(() => {
        setIsMounted(true);
        const saved = localStorage.getItem('easymed_thought_records');
        if (saved) {
            try {
                setRecords(JSON.parse(saved));
            } catch (e) {
                setRecords([]);
            }
        }
    }, []);

    const handleCheckboxChange = (value: string, checked: boolean) => {
        if (checked) {
            setDistortions(prev => [...prev, value]);
        } else {
            setDistortions(prev => prev.filter(item => item !== value));
        }
    };

    const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const newRecord: CBTThoughtRecord = {
            id: Date.now().toString(),
            date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
            situation,
            thought,
            distortions,
            rational,
            moodPre,
            moodPost
        };
        
        const updated = [newRecord, ...records];
        setRecords(updated);
        localStorage.setItem('easymed_thought_records', JSON.stringify(updated));
        
        // Reset form fields
        setSituation('');
        setThought('');
        setRational('');
        setMoodPre(80);
        setMoodPost(30);
        setDistortions([]);
        
        const formEl = document.getElementById('thought-record-form-el') as HTMLFormElement | null;
        if (formEl) formEl.reset();

        alert("CBT Thought Record saved successfully! Check the journal log.");
    };

    const handleDelete = (id: string, e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        if (confirm("Are you sure you want to permanently delete this thought record?")) {
            const updated = records.filter(r => r.id !== id);
            setRecords(updated);
            localStorage.setItem('easymed_thought_records', JSON.stringify(updated));
        }
    };

    const handleOpenRecord = (record: CBTThoughtRecord) => {
        setSelectedRecord(record);
        setIsDetailsOpen(true);
    };

    return (
        <section className="view-section active">
            <div className="section-title-wrap">
                <h2 className="section-title">Interactive Cognitive Tools</h2>
                <p className="section-subtitle">
                    Cognitive Behavioral Therapy places heavy focus on daily exercises to restructure thought patterns. Use this worksheet to document challenging thoughts in real-time.
                </p>
            </div>

            <div className="cbt-dashboard-layout">
                {/* Form to Add Thought Record */}
                <div className="glass-panel thought-record-form">
                    <div className="cbt-tool-header">
                        <PenTool size={28} color="var(--primary)" />
                        <h2>CBT Thought Record</h2>
                    </div>

                    <div className="cbt-info-tip">
                        <Info size={20} color="#38bdf8" style={{ flexShrink: 0 }} />
                        <div>
                            Identify automatic patterns when you notice a sudden drop in your mood. Complete the steps below to reframe them.
                        </div>
                    </div>

                    <form id="thought-record-form-el" onSubmit={handleSave}>
                        <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                            <label htmlFor="cbt-situation">1. What was the situation? (Trigger)</label>
                            <textarea 
                                id="cbt-situation" 
                                className="input-textarea" 
                                placeholder="e.g. Received a critical review on a project report from my team leader." 
                                value={situation}
                                onChange={(e) => setSituation(e.target.value)}
                                required
                            ></textarea>
                        </div>

                        <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                            <label htmlFor="cbt-thought">2. What automatic negative thoughts arose?</label>
                            <textarea 
                                id="cbt-thought" 
                                className="input-textarea" 
                                placeholder="e.g. I am bad at my job, I will get fired, they think I am useless." 
                                value={thought}
                                onChange={(e) => setThought(e.target.value)}
                                required
                            ></textarea>
                        </div>

                        <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                            <label>3. Identify Cognitive Distortions (Select all that apply)</label>
                            <div className="checkbox-group" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginTop: '0.5rem' }}>
                                {cognitiveDistortionsList.map(item => (
                                    <label key={item.value} className="checkbox-label">
                                        <input 
                                            type="checkbox" 
                                            name="distortion" 
                                            value={item.value} 
                                            className="checkbox-control"
                                            onChange={(e) => handleCheckboxChange(item.value, e.target.checked)}
                                        /> 
                                        {item.label}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                            <label htmlFor="cbt-rational">4. Alternative / Balanced Perspective (Rational Challenge)</label>
                            <textarea 
                                id="cbt-rational" 
                                className="input-textarea" 
                                placeholder="e.g. Critical feedback is meant to improve the project, not dismiss me. I have delivered many successful projects in the past." 
                                value={rational}
                                onChange={(e) => setRational(e.target.value)}
                                required
                            ></textarea>
                        </div>

                        <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                            <label>5. Rate Distress Intensity (Before vs. After Reframing)</label>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem' }}>
                                <div className="slider-container">
                                    <span style={{ fontSize: '0.85rem', width: '60px', color: 'var(--text-muted)' }}>Initial:</span>
                                    <input 
                                        type="range" 
                                        className="input-range" 
                                        min="0" 
                                        max="100" 
                                        value={moodPre} 
                                        onChange={(e) => setMoodPre(parseInt(e.target.value))}
                                    />
                                    <span className="range-val">{moodPre}%</span>
                                </div>
                                <div className="slider-container">
                                    <span style={{ fontSize: '0.85rem', width: '60px', color: 'var(--text-muted)' }}>Balanced:</span>
                                    <input 
                                        type="range" 
                                        className="input-range" 
                                        min="0" 
                                        max="100" 
                                        value={moodPost} 
                                        onChange={(e) => setMoodPost(parseInt(e.target.value))}
                                    />
                                    <span className="range-val" style={{ color: 'var(--secondary)' }}>{moodPost}%</span>
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                            Save Thought Record
                        </button>
                    </form>
                </div>

                {/* Saved Thought Log List */}
                <div className="glass-panel thought-log-container">
                    <div className="thought-log-header">
                        <h3>Your Saved Thought Logs</h3>
                        <span id="thought-log-count">
                            {isMounted ? `${records.length} Record${records.length !== 1 ? 's' : ''}` : '0 Records'}
                        </span>
                    </div>

                    <div className="thought-log-list">
                        {!isMounted || records.length === 0 ? (
                            <div className="thought-log-empty">
                                <BookOpen size={48} style={{ marginBottom: '1rem', opacity: 0.4 }} />
                                <p>No thought logs recorded yet. Start by filling out the record form to build your mental health journal.</p>
                            </div>
                        ) : (
                            records.map(record => (
                                <div 
                                    key={record.id} 
                                    className="log-item"
                                    onClick={() => handleOpenRecord(record)}
                                >
                                    <div className="log-item-header">
                                        <span className="log-item-date">{record.date}</span>
                                        <button 
                                            className="log-item-delete" 
                                            onClick={(e) => handleDelete(record.id, e)} 
                                            title="Delete thought log"
                                        >
                                            <Trash2 size={14} />
                                        </button>
                                    </div>
                                    <div className="log-item-situation">{record.situation}</div>
                                    <div className="log-item-thought">"{record.thought}"</div>
                                    <div className="log-item-footer">
                                        <div className="distortion-tag-list">
                                            {record.distortions.map(dist => (
                                                <span key={dist} className="distortion-tag">{dist}</span>
                                            ))}
                                        </div>
                                        <div className="mood-badge-wrap">
                                            <div className="mood-badge mood-badge-pre">
                                                <span className="mood-badge-dot"></span>
                                                <span>Before:</span> <span>{record.moodPre}%</span>
                                            </div>
                                            <div className="mood-badge mood-badge-post">
                                                <span className="mood-badge-dot"></span>
                                                <span>After:</span> <span>{record.moodPost}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>

            {/* Detailed Thought Details Modal */}
            <ThoughtDetailsModal 
                isOpen={isDetailsOpen}
                onClose={() => setIsDetailsOpen(false)}
                record={selectedRecord}
            />
        </section>
    );
}
