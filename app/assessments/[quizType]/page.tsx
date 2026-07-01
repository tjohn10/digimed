"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Printer, RefreshCw } from 'lucide-react';

interface QuizOption {
    text: string;
    score: number;
}

interface Interpretation {
    severity: string;
    class: string;
    color: string;
    explanation: string;
    recommendation: string;
}

interface Questionnaire {
    title: string;
    maxScore: number;
    questions: string[];
    options: QuizOption[];
    interpret: (score: number) => Interpretation;
}

const questionnaires: Record<string, Questionnaire> = {
    phq9: {
        title: 'PHQ-9 Depression Screener',
        maxScore: 27,
        questions: [
            "Little interest or pleasure in doing things?",
            "Feeling down, depressed, or hopeless?",
            "Trouble falling or staying asleep, or sleeping too much?",
            "Feeling tired or having little energy?",
            "Poor appetite or overeating?",
            "Feeling bad about yourself — or that you are a failure or have let yourself or your family down?",
            "Trouble concentrating on things, such as reading the newspaper or watching television?",
            "Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual?",
            "Thoughts that you would be better off dead or of hurting yourself in some way?"
        ],
        options: [
            { text: "Not at all", score: 0 },
            { text: "Several days", score: 1 },
            { text: "More than half the days", score: 2 },
            { text: "Nearly every day", score: 3 }
        ],
        interpret: function(score: number): Interpretation {
            if (score <= 4) return {
                severity: "Minimal Depression",
                class: "score-minimal",
                color: "#10b981",
                explanation: "Your score indicates minimal to no depressive symptoms. This is typical for individuals experiencing normal variations in mood.",
                recommendation: "Maintain your well-being by practicing healthy routines, including physical activity, adequate sleep, and mindfulness. Feel free to retake this self-assessment as needed."
            };
            if (score <= 9) return {
                severity: "Mild Depression",
                class: "score-mild",
                color: "#84cc16",
                explanation: "Your score indicates mild depressive symptoms. You may occasionally feel low or have minor difficulty managing everyday work or domestic tasks.",
                recommendation: "Consider standard self-help strategies, lifestyle reviews, and reading CBT resources. If these feelings persist or worsen, speaking with a CBT practitioner can provide early support."
            };
            if (score <= 14) return {
                severity: "Moderate Depression",
                class: "score-moderate",
                color: "#eab308",
                explanation: "Your score indicates moderate depressive symptoms. You are likely experiencing significant distress, such as trouble concentrating, low energy, or feelings of failure.",
                recommendation: "We recommend scheduling a free consultation with an accredited CBT therapist. Cognitive Behavioral Therapy is highly effective at identifying and shifting negative core beliefs at this stage."
            };
            if (score <= 19) return {
                severity: "Moderately Severe Depression",
                class: "score-moderately-severe",
                color: "#f97316",
                explanation: "Your score indicates moderately severe depressive symptoms. Daily activities, relationships, and work performance are likely being significantly disrupted.",
                recommendation: "We strongly advise connecting with a healthcare professional or booking an assessment with one of our BABCP accredited therapists to formulate a structured clinical treatment plan."
            };
            return {
                severity: "Severe Depression",
                class: "score-severe",
                color: "#ef4444",
                explanation: "Your score indicates severe depressive symptoms. You are likely experiencing intense emotional distress, severe exhaustion, and substantial difficulty functioning in almost all settings.",
                recommendation: "Please schedule an assessment with a medical practitioner (e.g. your GP) and a qualified CBT psychotherapist. Note: If you are experiencing thoughts of self-harm, please reach out to emergency services or call Samaritans at 116 123 immediately."
            };
        }
    },
    gad7: {
        title: 'GAD-7 Anxiety Screener',
        maxScore: 21,
        questions: [
            "Feeling nervous, anxious, or on edge?",
            "Not being able to stop or control worrying?",
            "Worrying too much about different things?",
            "Trouble relaxing?",
            "Being so restless that it is hard to sit still?",
            "Becoming easily annoyed or irritable?",
            "Feeling afraid, as if something awful might happen?"
        ],
        options: [
            { text: "Not at all", score: 0 },
            { text: "Several days", score: 1 },
            { text: "More than half the days", score: 2 },
            { text: "Nearly every day", score: 3 }
        ],
        interpret: function(score: number): Interpretation {
            if (score <= 4) return {
                severity: "Minimal Anxiety",
                class: "score-minimal",
                color: "#10b981",
                explanation: "Your score indicates minimal to no generalized anxiety. Your level of worry is within the normal range of daily stressors.",
                recommendation: "Continue standard self-care practices. Stress management tools like our digital Thought Records can help you maintain this balance during challenging situations."
            };
            if (score <= 9) return {
                severity: "Mild Anxiety",
                class: "score-mild",
                color: "#84cc16",
                explanation: "Your score indicates mild anxiety symptoms. You may feel occasionally tense, restless, or find yourself overthinking certain outcomes.",
                recommendation: "Practicing progressive muscle relaxation, deep breathing exercises, and journaling can help reduce tension. Accessing early CBT materials is recommended."
            };
            if (score <= 14) return {
                severity: "Moderate Anxiety",
                class: "score-moderate",
                color: "#eab308",
                explanation: "Your score indicates moderate anxiety symptoms. Worrying, physical tension, and irritability may be interfering with your sleep and focus.",
                recommendation: "Cognitive Behavioral Therapy (CBT) is the gold standard for moderate anxiety. Consider booking a free 15-minute consultation to discuss worry management techniques with a therapist."
            };
            return {
                severity: "Severe Anxiety",
                class: "score-severe",
                color: "#ef4444",
                explanation: "Your score indicates severe anxiety symptoms. Constant worries, fear of worst-case scenarios, and physical panic signs may feel overwhelming.",
                recommendation: "We strongly recommend contacting a clinical mental health practitioner. Structured CBT sessions (online or in-person) can provide you with step-by-step tools to break the cycle of anxiety and avoidance."
            };
        }
    }
};

interface QuizPageProps {
    params: {
        quizType: string;
    };
}

export default function QuizPage({ params }: QuizPageProps) {
    const router = useRouter();
    const quizKey = params.quizType;
    const quiz = questionnaires[quizKey];

    // Handle invalid keys
    if (!quiz) {
        return (
            <div className="glass-panel text-center" style={{ padding: '3rem', maxWidth: '600px', margin: '4rem auto' }}>
                <h2>Screener Not Found</h2>
                <p style={{ color: 'var(--text-muted)', margin: '1.5rem 0' }}>The requested self-assessment screener does not exist.</p>
                <Link href="/assessments" className="btn btn-primary">Return to Assessments Hub</Link>
            </div>
        );
    }

    const [currentIdx, setCurrentIdx] = useState(0);
    const [answers, setAnswers] = useState<(number | null)[]>([]);
    const [isFinished, setIsFinished] = useState(false);
    const [score, setScore] = useState(0);
    const [interpretation, setInterpretation] = useState<Interpretation | null>(null);

    useEffect(() => {
        setAnswers(Array(quiz.questions.length).fill(null));
        setCurrentIdx(0);
        setIsFinished(false);
    }, [quizKey]);

    const handleSelectOption = (points: number) => {
        const updatedAnswers = [...answers];
        updatedAnswers[currentIdx] = points;
        setAnswers(updatedAnswers);

        setTimeout(() => {
            if (currentIdx < quiz.questions.length - 1) {
                setCurrentIdx(currentIdx + 1);
            } else {
                const total = updatedAnswers.reduce((a, b) => (a || 0) + (b || 0), 0) as number;
                setScore(total);
                setInterpretation(quiz.interpret(total));
                setIsFinished(true);
            }
        }, 200);
    };

    const handlePrevious = () => {
        if (currentIdx > 0) {
            setCurrentIdx(currentIdx - 1);
        }
    };

    const handleExit = () => {
        if (confirm("Are you sure you want to exit the self-assessment? Your progress will not be saved.")) {
            router.push('/assessments');
        }
    };

    const handleRetake = () => {
        setAnswers(Array(quiz.questions.length).fill(null));
        setCurrentIdx(0);
        setIsFinished(false);
        setScore(0);
        setInterpretation(null);
    };

    if (isFinished && interpretation) {
        const offsetVal = 283 - ((score / quiz.maxScore) * 283);

        return (
            <section className="view-section active">
                <div className="glass-panel results-card">
                    <h2 className="section-title">{quiz.title} Results</h2>
                    <p className="section-subtitle" style={{ marginBottom: '2rem' }}>Ontime Therapy Clinical Assessment Summary</p>

                    <div className="results-gauge-container">
                        <svg className="gauge-svg" viewBox="0 0 200 120">
                            <path className="gauge-bg" d="M 20,110 A 80,80 0 0,1 180,110"></path>
                            <path 
                                className="gauge-value" 
                                d="M 20,110 A 80,80 0 0,1 180,110" 
                                stroke={interpretation.color} 
                                style={{ strokeDashoffset: offsetVal }}
                            ></path>
                        </svg>
                        <div className="gauge-text">
                            <span className="gauge-num">{score}</span>
                            <span className="gauge-max">/{quiz.maxScore}</span>
                        </div>
                    </div>

                    <div>
                        <span 
                            className="score-severity-tag" 
                            style={{ backgroundColor: `${interpretation.color}25`, color: interpretation.color }}
                        >
                            {interpretation.severity}
                        </span>
                    </div>

                    <div className="results-content-box">
                        <h4 style={{ color: interpretation.color }}>Clinical Interpretation: {interpretation.severity}</h4>
                        <p>{interpretation.explanation}</p>
                        
                        <div className="results-recommendation">
                            <h4 style={{ marginTop: '1rem' }}>Recommended Action Plan</h4>
                            <p>{interpretation.recommendation}</p>
                        </div>
                    </div>

                    <div className="results-actions">
                        <Link href="/therapists" className="btn btn-primary">
                            Connect with a Therapist
                            <ArrowRight size={18} />
                        </Link>
                        <button className="btn btn-secondary" onClick={() => window.print()}>
                            <Printer size={18} />
                            Print/Save PDF
                        </button>
                        <button className="btn btn-secondary" onClick={handleRetake}>
                            <RefreshCw size={18} />
                            Retake Test
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    const progressPercent = (currentIdx / quiz.questions.length) * 100;

    return (
        <section className="view-section active">
            <div className="glass-panel quiz-container">
                <div className="quiz-header">
                    <span className="quiz-title">{quiz.title}</span>
                    <span className="quiz-progress-text">Question {currentIdx + 1} of {quiz.questions.length}</span>
                </div>
                <div className="quiz-progress-bar">
                    <div className="quiz-progress-fill" style={{ width: `${progressPercent}%` }}></div>
                </div>
                
                <div className="question-box">
                    <p className="question-text">
                        Over the last 2 weeks, how often have you been bothered by: <strong>{quiz.questions[currentIdx]}</strong>
                    </p>
                    <div className="options-list">
                        {quiz.options.map((opt) => (
                            <button 
                                key={opt.score}
                                className={`option-btn ${answers[currentIdx] === opt.score ? 'selected' : ''}`}
                                onClick={() => handleSelectOption(opt.score)}
                            >
                                {opt.text}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="quiz-nav-btns">
                    <button 
                        className="btn btn-secondary" 
                        onClick={handlePrevious} 
                        disabled={currentIdx === 0}
                        style={{ opacity: currentIdx === 0 ? 0.5 : 1 }}
                    >
                        <ArrowLeft size={18} />
                        Back
                    </button>
                    <button className="btn btn-secondary" onClick={handleExit}>Cancel & Exit</button>
                </div>
            </div>
        </section>
    );
}
