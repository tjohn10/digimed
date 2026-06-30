import { X } from 'lucide-react';

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

interface ThoughtDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    record: CBTThoughtRecord | null;
}

export default function ThoughtDetailsModal({ isOpen, onClose, record }: ThoughtDetailsModalProps) {
    if (!isOpen || !record) return null;

    return (
        <div className="modal-overlay active" id="thought-details-modal">
            <div className="glass-panel modal-container" style={{ maxWidth: '600px' }}>
                <button className="modal-close" onClick={onClose} aria-label="Close View Details Dialog">
                    <X size={20} />
                </button>
                <h3 className="modal-title" style={{ marginBottom: '1.5rem' }}>CBT Journal Entry Details</h3>
                
                <div className="view-thought-details">
                    <div className="detail-section">
                        <div className="detail-label">Triggering Situation</div>
                        <div className="detail-value">{record.situation}</div>
                    </div>

                    <div className="detail-section">
                        <div className="detail-label">Automatic Negative Thought</div>
                        <div className="detail-value">"{record.thought}"</div>
                    </div>

                    <div className="detail-section">
                        <div className="detail-label">Identified Cognitive Distortions</div>
                        <div className="distortion-tag-list" style={{ marginTop: '0.4rem' }}>
                            {record.distortions.length === 0 ? (
                                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>None identified</span>
                            ) : (
                                record.distortions.map(dist => (
                                    <span key={dist} className="distortion-tag">{dist}</span>
                                ))
                            )}
                        </div>
                    </div>

                    <div className="detail-section">
                        <div className="detail-label">Alternative Balanced Thinking</div>
                        <div className="detail-value">{record.rational}</div>
                    </div>

                    <div className="detail-section">
                        <div className="detail-label">Distress Level Comparison</div>
                        <div className="detail-mood-grid">
                            <div>
                                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block' }}>Before Reframing</span>
                                <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--score-severe)' }}>{record.moodPre}%</span>
                            </div>
                            <div>
                                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block' }}>After Reframing</span>
                                <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>{record.moodPost}%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-actions" style={{ marginTop: '2rem' }}>
                    <button className="btn btn-secondary" onClick={onClose}>Close Details</button>
                </div>
            </div>
        </div>
    );
}
