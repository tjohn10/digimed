"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Printer, RefreshCw, Clipboard, CheckCircle, AlertCircle } from 'lucide-react';

interface LikertOption {
  text: string;
  score: number;
}

// Items 1-12 & 19 share this 7-point "how many of the past 28 days" scale
const daysScale: LikertOption[] = [
  { text: "No days", score: 0 },
  { text: "1-5 days", score: 1 },
  { text: "6-12 days", score: 2 },
  { text: "13-15 days", score: 3 },
  { text: "16-22 days", score: 4 },
  { text: "23-27 days", score: 5 },
  { text: "Every day", score: 6 },
];

// Item 20's proportion-of-times scale
const proportionScale: LikertOption[] = [
  { text: "None of the times", score: 0 },
  { text: "A few of the times", score: 1 },
  { text: "Less than half the times", score: 2 },
  { text: "Half of the times", score: 3 },
  { text: "More than half the times", score: 4 },
  { text: "Most of the times", score: 5 },
  { text: "Every time", score: 6 },
];

// Items 21 & 22-28 use a 0-6 scale anchored by only 4 verbal labels
const anchorLabels = ["Not at all", "Slightly", "Moderately", "Markedly"];

const restraintQuestions: string[] = [
  "Have you been deliberately trying to limit the amount of food you eat to influence your shape or weight (whether or not you have succeeded)?",
  "Have you gone for long periods of time (8 waking hours or more) without eating anything at all in order to influence your shape or weight?",
  "Have you tried to exclude from your diet any foods that you like in order to influence your shape or weight (whether or not you have succeeded)?",
  "Have you tried to follow definite rules regarding your eating (for example, a calorie limit) in order to influence your shape or weight (whether or not you have succeeded)?",
  "Have you had a definite desire to have an empty stomach with the aim of influencing your shape or weight?",
  "Have you had a definite desire to have a totally flat stomach?",
  "Has thinking about food, eating or calories made it very difficult to concentrate on things you are interested in (for example, working, following a conversation, or reading)?",
  "Has thinking about shape or weight made it very difficult to concentrate on things you are interested in (for example, working, following a conversation, or reading)?",
  "Have you had a definite fear of losing control over eating?",
  "Have you had a definite fear that you might gain weight?",
  "Have you felt fat?",
  "Have you had a strong desire to lose weight?",
];

interface BehavioralItem {
  key: number;
  unit: string;
  question: string;
}

const behavioralItems: BehavioralItem[] = [
  { key: 13, unit: "times", question: "Over the past 28 days, how many times have you eaten what other people would regard as an unusually large amount of food (given the circumstances)?" },
  { key: 14, unit: "times", question: "On how many of these times did you have a sense of having lost control over your eating (at the time you were eating)?" },
  { key: 15, unit: "days", question: "Over the past 28 days, on how many DAYS have such episodes of overeating occurred (i.e. you have eaten an unusually large amount of food and have had a sense of loss of control at the time)?" },
  { key: 16, unit: "times", question: "Over the past 28 days, how many times have you made yourself sick (vomit) as a means of controlling your shape or weight?" },
  { key: 17, unit: "times", question: "Over the past 28 days, how many times have you taken laxatives as a means of controlling your shape or weight?" },
  { key: 18, unit: "times", question: "Over the past 28 days, how many times have you exercised in a “driven” or “compulsive” way as a means of controlling your weight, shape or amount of fat, or to burn off calories?" },
];

const selfEvalQuestions: { key: number; question: string }[] = [
  { key: 22, question: "Has your weight influenced how you think about (judge) yourself as a person?" },
  { key: 23, question: "Has your shape influenced how you think about (judge) yourself as a person?" },
  { key: 24, question: "How much would it have upset you if you had been asked to weigh yourself once a week (no more, or less, often) for the next four weeks?" },
  { key: 25, question: "How dissatisfied have you been with your weight?" },
  { key: 26, question: "How dissatisfied have you been with your shape?" },
  { key: 27, question: "How uncomfortable have you felt seeing your body (for example, seeing your shape in the mirror, in a shop window reflection, while undressing or taking a bath or shower)?" },
  { key: 28, question: "How uncomfortable have you felt about others seeing your shape or figure (for example, in communal changing rooms, when swimming, or wearing tight clothes)?" },
];

// Official EDE-Q 6.0 subscale composition. Items 8 and 26 contribute to both
// Shape Concern and Weight Concern, per the published scoring key.
const subscalesDefinition = [
  { name: "Restraint", keys: [1, 2, 3, 4, 5] },
  { name: "Eating Concern", keys: [7, 9, 19, 20, 21] },
  { name: "Shape Concern", keys: [6, 8, 10, 11, 23, 26, 27, 28] },
  { name: "Weight Concern", keys: [8, 12, 22, 24, 25, 26] },
];

const likertKeys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
const behavioralKeys = [13, 14, 15, 16, 17, 18];

interface GlobalInterpretation {
  severity: string;
  color: string;
  explanation: string;
  recommendation: string;
}

function interpretGlobalScore(score: number): GlobalInterpretation {
  if (score < 1.5) return {
    severity: "Minimal Indicators",
    color: "#10b981",
    explanation: "Your overall score falls within the range typically seen in the general population, with limited preoccupation with eating, shape, or weight over the past 28 days.",
    recommendation: "Continue supporting a balanced relationship with food and body image. You can retake this assessment at any time if your thoughts or behaviors around eating change."
  };
  if (score < 2.5) return {
    severity: "Mild Indicators",
    color: "#84cc16",
    explanation: "Your overall score suggests mild dietary restraint or body image concern. You may notice some preoccupation with food, shape, or weight, without it being consistently dominant.",
    recommendation: "Early psychoeducation can be helpful here. We recommend reviewing CBT-E informed resources or arranging an initial consultation with an eating disorder specialist."
  };
  if (score < 3.5) return {
    severity: "Moderate Indicators",
    color: "#eab308",
    explanation: "Your overall score indicates moderate eating disorder psychopathology. Restraint, shape/weight over-evaluation, or eating concerns appear to be meaningfully affecting your day-to-day wellbeing.",
    recommendation: "We recommend booking a consultation with a CBT-E practitioner. Enhanced Cognitive Behavioural Therapy is the leading evidence-based pathway for addressing these difficulties."
  };
  return {
    severity: "Significant Indicators",
    color: "#ef4444",
    explanation: "Your overall score falls within a range associated with clinically significant eating disorder psychopathology, including possible restraint, shape/weight preoccupation, and eating-related distress.",
    recommendation: "Please schedule an assessment with a specialist eating disorder practitioner and your GP as soon as possible for a comprehensive medical and psychological review."
  };
}

export default function EDEQQuestionnaire() {
  const [responses, setResponses] = useState<Record<number, number>>({});
  const [behavioral, setBehavioral] = useState<Record<number, string>>({});

  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [missedPeriods, setMissedPeriods] = useState<'yes' | 'no' | ''>('');
  const [numMissedPeriods, setNumMissedPeriods] = useState('');
  const [takingPill, setTakingPill] = useState<'yes' | 'no' | ''>('');

  const [missedQuestions, setMissedQuestions] = useState<number[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelect = (q: number, score: number) => {
    setResponses(prev => ({ ...prev, [q]: score }));
    if (missedQuestions.includes(q)) {
      setMissedQuestions(prev => prev.filter(x => x !== q));
    }
  };

  const handleBehavioralChange = (q: number, val: string) => {
    setBehavioral(prev => ({ ...prev, [q]: val }));
    if (missedQuestions.includes(q)) {
      setMissedQuestions(prev => prev.filter(x => x !== q));
    }
  };

  const calculateSubscaleScore = (keys: number[]) => {
    const total = keys.reduce((sum, key) => sum + (responses[key] ?? 0), 0);
    return total / keys.length;
  };

  const subscaleScores = subscalesDefinition.map(sub => ({
    ...sub,
    score: calculateSubscaleScore(sub.keys),
  }));

  const globalScore = subscaleScores.reduce((sum, s) => sum + s.score, 0) / subscaleScores.length;

  const weightVal = parseFloat(weight);
  const heightVal = parseFloat(height);
  const bmi = weightVal > 0 && heightVal > 0
    ? weightVal / ((heightVal / 100) * (heightVal / 100))
    : null;

  const behavioralValues = behavioralItems.reduce<Record<number, number>>((acc, item) => {
    acc[item.key] = Number(behavioral[item.key] || 0);
    return acc;
  }, {});

  const significantBehaviors = behavioralItems.filter(item => item.key !== 14 && behavioralValues[item.key] >= 4);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const unanswered: number[] = [];
    likertKeys.forEach(k => { if (responses[k] === undefined) unanswered.push(k); });
    behavioralKeys.forEach(k => { if (behavioral[k] === undefined || behavioral[k] === '') unanswered.push(k); });

    if (unanswered.length > 0) {
      unanswered.sort((a, b) => a - b);
      setMissedQuestions(unanswered);
      const firstMissedId = `question-container-${unanswered[0]}`;
      const element = document.getElementById(firstMissedId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitted(true);

    const payload = {
      assessmentType: "EDE-Q 6.0",
      responses,
      behavioral: behavioralValues,
      additionalInfo: {
        weight: weight || undefined,
        height: height || undefined,
        missedPeriods: missedPeriods || undefined,
        numMissedPeriods: numMissedPeriods || undefined,
        takingPill: takingPill || undefined,
      },
      scoring: {
        globalScore,
        subscales: subscaleScores,
      },
    };

    console.log("EDE-Q 6.0 Form Submitted successfully!", JSON.stringify(payload, null, 2));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetake = () => {
    setResponses({});
    setBehavioral({});
    setWeight('');
    setHeight('');
    setMissedPeriods('');
    setNumMissedPeriods('');
    setTakingPill('');
    setMissedQuestions([]);
    setIsSubmitted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderDaysScaleQuestion = (qNumber: number, text: string, options: LikertOption[]) => {
    const hasError = missedQuestions.includes(qNumber);
    const selected = responses[qNumber];
    return (
      <div
        key={qNumber}
        id={`question-container-${qNumber}`}
        className="edeq-question-card"
        style={{
          padding: '1.25rem 1.5rem',
          border: hasError ? '1.5px solid #ef4444' : '1px solid var(--border)',
          background: hasError ? 'rgba(239, 68, 68, 0.02)' : 'var(--bg-panel)',
          borderRadius: '12px',
          marginBottom: '1.25rem',
        }}
      >
        <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', marginBottom: '1rem' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, padding: '0.2rem 0.55rem', background: 'var(--border)', borderRadius: '4px', color: 'var(--text-muted)', flexShrink: 0 }}>
            {qNumber}
          </span>
          <p style={{ margin: 0, fontWeight: 600, color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: 1.5 }}>
            {text}
            {hasError && (
              <span style={{ color: '#ef4444', fontSize: '0.78rem', display: 'block', marginTop: '0.3rem', fontWeight: 700 }}>
                * Please select an option.
              </span>
            )}
          </p>
        </div>
        <div className="edeq-options-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.5rem' }}>
          {options.map(opt => {
            const isChecked = selected === opt.score;
            return (
              <button
                type="button"
                key={opt.score}
                onClick={() => handleSelect(qNumber, opt.score)}
                style={{
                  padding: '0.55rem 0.4rem',
                  borderRadius: '8px',
                  border: isChecked ? '1.5px solid var(--primary)' : '1px solid var(--border)',
                  background: isChecked ? 'var(--primary)' : 'var(--bg-card)',
                  color: isChecked ? '#ffffff' : 'var(--text-main)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                  lineHeight: 1.3,
                }}
              >
                {opt.text}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  const renderAnchorScaleQuestion = (qNumber: number, text: string) => {
    const hasError = missedQuestions.includes(qNumber);
    const selected = responses[qNumber];
    return (
      <div
        key={qNumber}
        id={`question-container-${qNumber}`}
        className="edeq-question-card"
        style={{
          padding: '1.25rem 1.5rem',
          border: hasError ? '1.5px solid #ef4444' : '1px solid var(--border)',
          background: hasError ? 'rgba(239, 68, 68, 0.02)' : 'var(--bg-panel)',
          borderRadius: '12px',
          marginBottom: '1.25rem',
        }}
      >
        <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', marginBottom: '1rem' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, padding: '0.2rem 0.55rem', background: 'var(--border)', borderRadius: '4px', color: 'var(--text-muted)', flexShrink: 0 }}>
            {qNumber}
          </span>
          <p style={{ margin: 0, fontWeight: 600, color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: 1.5 }}>
            {text}
            {hasError && (
              <span style={{ color: '#ef4444', fontSize: '0.78rem', display: 'block', marginTop: '0.3rem', fontWeight: 700 }}>
                * Please select an option.
              </span>
            )}
          </p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '0.4rem', padding: '0 0.1rem' }}>
          {anchorLabels.map(label => <span key={label}>{label}</span>)}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.5rem' }}>
          {[0, 1, 2, 3, 4, 5, 6].map(score => {
            const isChecked = selected === score;
            return (
              <button
                type="button"
                key={score}
                onClick={() => handleSelect(qNumber, score)}
                title={score === 0 ? "Not at all" : score <= 2 ? "Slightly" : score <= 4 ? "Moderately" : "Markedly"}
                style={{
                  padding: '0.6rem 0',
                  borderRadius: '8px',
                  border: isChecked ? '1.5px solid var(--primary)' : '1px solid var(--border)',
                  background: isChecked ? 'var(--primary)' : 'var(--bg-card)',
                  color: isChecked ? '#ffffff' : 'var(--text-main)',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                }}
              >
                {score}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  if (isSubmitted) {
    const interpretation = interpretGlobalScore(globalScore);
    const offsetVal = 283 - ((globalScore / 6) * 283);

    return (
      <section className="view-section active" style={{ maxWidth: '1280px', margin: '2rem auto', padding: '0 1.5rem', width: '100%' }}>
        <div className="glass-panel responsive-panel" style={{ border: '1px solid var(--border)', background: 'var(--bg-card)', borderRadius: '16px' }}>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '2px solid var(--border)', paddingBottom: '2rem', marginBottom: '2.5rem' }} className="edeq-results-header">
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(16, 185, 129, 0.08)', padding: '0.4rem 0.8rem', borderRadius: '20px', color: '#10b981', fontWeight: 700, fontSize: '0.8rem', marginBottom: '0.75rem', letterSpacing: '0.75px', textTransform: 'uppercase' }}>
                <CheckCircle size={14} />
                Assessment Completed
              </div>
              <h1 style={{ fontSize: '2.25rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--text-main)', margin: 0 }}>
                EDE-Q 6.0 Clinical Summary Report
              </h1>
            </div>

            <div className="no-print" style={{ display: 'flex', gap: '0.75rem' }}>
              <button className="btn btn-secondary" onClick={handleRetake} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <RefreshCw size={16} />
                Retake
              </button>
              <button className="btn btn-primary" onClick={() => window.print()} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <Printer size={16} />
                Print / Save PDF
              </button>
            </div>
          </div>

          {/* Total Score Dashboard Row */}
          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center', marginBottom: '3rem' }} className="results-score-row">
            <div className="results-gauge-container" style={{ flexShrink: 0 }}>
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
                <span className="gauge-num">{globalScore.toFixed(2)}</span>
                <span className="gauge-max">/6.00</span>
              </div>
            </div>

            <div>
              <span
                className="score-severity-tag"
                style={{ backgroundColor: `${interpretation.color}25`, color: interpretation.color, display: 'inline-block' }}
              >
                {interpretation.severity}
              </span>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6, margin: 0, maxWidth: '560px' }}>
                {interpretation.explanation}
              </p>
            </div>
          </div>

          <div className="results-content-box" style={{ marginBottom: '3rem' }}>
            <h4 style={{ color: interpretation.color }}>Recommended Action Plan</h4>
            <p>{interpretation.recommendation}</p>
          </div>

          {/* Subscales breakdown */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--text-main)' }}>
              EDE-Q Subscale Breakdown
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }} className="subscales-grid">
              {subscaleScores.map(sub => {
                const percentage = Math.round((sub.score / 6) * 100);
                return (
                  <div key={sub.name} style={{ background: 'var(--bg-panel)', border: '1px solid var(--border)', padding: '1.25rem 1.5rem', borderRadius: '8px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 650, fontSize: '0.92rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                      <span>{sub.name}</span>
                      <span>{sub.score.toFixed(2)} / 6.00</span>
                    </div>
                    <div style={{ width: '100%', height: '8px', background: 'var(--border)', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ width: `${percentage}%`, height: '100%', background: 'var(--primary)', borderRadius: '4px', transition: 'width 0.8s ease' }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Behavioral frequency summary */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--text-main)' }}>
              Behavioral Frequency (Past 28 Days)
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }} className="behavioral-grid">
              {behavioralItems.map(item => (
                <div key={item.key} style={{ background: 'var(--bg-panel)', border: '1px solid var(--border)', padding: '1.1rem 1.25rem', borderRadius: '8px' }}>
                  <span style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.35rem' }}>
                    {behavioralLabel(item.key)}
                  </span>
                  <strong style={{ fontSize: '1.4rem', color: 'var(--text-main)' }}>{behavioralValues[item.key]}</strong>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginLeft: '0.35rem' }}>{item.unit}</span>
                </div>
              ))}
            </div>

            {significantBehaviors.length > 0 && (
              <div style={{ display: 'flex', gap: '1rem', background: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '10px', padding: '1.25rem', alignItems: 'flex-start', marginTop: '1.5rem' }}>
                <AlertCircle size={22} color="#ef4444" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <span style={{ fontSize: '0.92rem', fontWeight: 700, color: '#ef4444', display: 'block' }}>
                    Frequent compensatory or binge-eating behaviors detected
                  </span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginTop: '0.2rem' }}>
                    You reported {significantBehaviors.map(b => behavioralLabel(b.key).toLowerCase()).join(', ')} at a frequency of 4 or more times over the past 28 days (roughly weekly or more). This frequency is clinically significant and we strongly recommend an in-person or clinical evaluation.
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Additional clinical info */}
          <div style={{ background: 'var(--bg-panel)', border: '1px solid var(--border)', padding: '1.5rem 2rem', borderRadius: '12px', marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: '0 0 1rem', color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Additional Clinical Information
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem', fontSize: '0.95rem' }} className="results-metadata-grid">
              <div>
                <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.85rem' }}>Weight:</span>
                <strong style={{ color: 'var(--text-main)' }}>{weight ? `${weight} kg` : "Not provided"}</strong>
              </div>
              <div>
                <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.85rem' }}>Height:</span>
                <strong style={{ color: 'var(--text-main)' }}>{height ? `${height} cm` : "Not provided"}</strong>
              </div>
              {bmi !== null && (
                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.85rem' }}>Estimated BMI:</span>
                  <strong style={{ color: 'var(--text-main)' }}>{bmi.toFixed(1)}</strong>
                </div>
              )}
              <div>
                <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.85rem' }}>Missed menstrual periods (past 3-4 months):</span>
                <strong style={{ color: 'var(--text-main)' }}>
                  {missedPeriods === 'yes' ? `Yes${numMissedPeriods ? ` (${numMissedPeriods})` : ''}` : missedPeriods === 'no' ? 'No' : 'Not answered / not applicable'}
                </strong>
              </div>
              <div>
                <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.85rem' }}>Currently taking the contraceptive pill:</span>
                <strong style={{ color: 'var(--text-main)' }}>
                  {takingPill === 'yes' ? 'Yes' : takingPill === 'no' ? 'No' : 'Not answered / not applicable'}
                </strong>
              </div>
            </div>
          </div>

          {/* Clinical Disclaimer */}
          <div style={{ display: 'flex', gap: '1rem', background: 'rgba(6, 182, 212, 0.05)', border: '1px solid rgba(6, 182, 212, 0.2)', borderRadius: '10px', padding: '1.25rem', marginBottom: '3rem' }}>
            <AlertCircle size={22} color="#06b6d4" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h4 style={{ margin: '0 0 0.25rem', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)' }}>Clinical Disclaimer</h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                The EDE-Q 6.0 is a self-report screening tool and does not, by itself, constitute a formal eating disorder diagnosis. Results should be reviewed collaboratively with a GP, psychiatrist, or specialist eating disorder practitioner.
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', borderTop: '1px solid var(--border)', paddingTop: '2rem' }} className="no-print">
            <Link href="/therapists" className="btn btn-primary" style={{ padding: '0.75rem 2.5rem' }}>
              Connect with a Therapist
            </Link>
            <button className="btn btn-secondary" onClick={handleRetake} style={{ padding: '0.75rem 2rem' }}>
              Retake Screener
            </button>
          </div>

        </div>

        <style jsx global>{`
          @media (max-width: 768px) {
            .edeq-options-grid { grid-template-columns: repeat(4, 1fr) !important; }
            .subscales-grid, .behavioral-grid, .results-metadata-grid { grid-template-columns: 1fr !important; gap: 1.25rem !important; }
            .results-score-row { flex-direction: column !important; text-align: center !important; gap: 1.5rem !important; }
            .edeq-results-header { flex-direction: column; gap: 1.25rem; }
          }
          @media print {
            body { background: #ffffff !important; color: #000000 !important; }
            header, footer, .no-print, .btn, button { display: none !important; }
            .glass-panel { border: none !important; box-shadow: none !important; background: transparent !important; padding: 0 !important; margin: 0 !important; }
            .subscales-grid, .behavioral-grid { grid-template-columns: 1fr 1fr !important; gap: 1rem !important; }
            .results-metadata-grid { grid-template-columns: 1fr 1fr !important; gap: 1rem !important; }
          }
        `}</style>
      </section>
    );
  }

  return (
    <section className="view-section active" style={{ maxWidth: '1280px', margin: '2rem auto', padding: '0 1.5rem', width: '100%' }}>

      <div className="no-print" style={{ marginBottom: '2rem' }}>
        <Link href="/assessments" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          <ArrowLeft size={16} />
          Back to Assessments
        </Link>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="glass-panel responsive-panel" style={{ border: '1px solid var(--border)', background: 'var(--bg-card)', borderRadius: '16px' }}>

          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255, 120, 36, 0.08)', padding: '0.4rem 0.8rem', borderRadius: '20px', color: 'var(--primary)', fontWeight: 700, fontSize: '0.85rem', marginBottom: '1rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
              <Clipboard size={16} />
              EDE-Q 6.0 Questionnaire
            </div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--text-main)', margin: '0 0 1rem' }}>
              Eating Disorder Examination Questionnaire
            </h1>
          </div>

          <div style={{ background: 'rgba(6, 182, 212, 0.04)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem' }}>
            <h4 style={{ margin: '0 0 0.5rem', color: 'var(--secondary)', fontWeight: 700, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <AlertCircle size={18} />
              Assessment Instructions
            </h4>
            <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
              The following questions are concerned with the past four weeks (28 days) only. Please read each question carefully and answer all the questions.
            </p>
          </div>

          {/* Section: Q1-12 */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '0 0 0.4rem', color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>
              Section 1 &mdash; Eating Habits &amp; Restraint
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
              On how many of the past 28 days...
            </p>
            {restraintQuestions.map((q, idx) => renderDaysScaleQuestion(idx + 1, q, daysScale))}
          </div>

          {/* Section: Q13-18 */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '0 0 0.4rem', color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>
              Section 2 &mdash; Binge Eating &amp; Compensatory Behaviors
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
              Please enter the appropriate number for each question. It is fine to enter 0 if this has not happened.
            </p>
            {behavioralItems.map(item => {
              const hasError = missedQuestions.includes(item.key);
              return (
                <div
                  key={item.key}
                  id={`question-container-${item.key}`}
                  style={{
                    padding: '1.25rem 1.5rem',
                    border: hasError ? '1.5px solid #ef4444' : '1px solid var(--border)',
                    background: hasError ? 'rgba(239, 68, 68, 0.02)' : 'var(--bg-panel)',
                    borderRadius: '12px',
                    marginBottom: '1.25rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1.5rem',
                    flexWrap: 'wrap',
                  }}
                >
                  <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', flex: 1, minWidth: '260px' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, padding: '0.2rem 0.55rem', background: 'var(--border)', borderRadius: '4px', color: 'var(--text-muted)', flexShrink: 0 }}>
                      {item.key}
                    </span>
                    <p style={{ margin: 0, fontWeight: 600, color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                      {item.question}
                      {item.key === 14 && (
                        <span style={{ display: 'block', color: 'var(--text-muted)', fontWeight: 500, fontSize: '0.82rem', marginTop: '0.3rem' }}>
                          (Out of the {behavioral[13] || '0'} times noted in question 13)
                        </span>
                      )}
                      {hasError && (
                        <span style={{ color: '#ef4444', fontSize: '0.78rem', display: 'block', marginTop: '0.3rem', fontWeight: 700 }}>
                          * Please enter a number (0 or more).
                        </span>
                      )}
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexShrink: 0 }}>
                    <input
                      type="number"
                      min="0"
                      inputMode="numeric"
                      className="input-text"
                      value={behavioral[item.key] ?? ''}
                      onChange={(e) => handleBehavioralChange(item.key, e.target.value)}
                      style={{ width: '90px', textAlign: 'center' }}
                      placeholder="0"
                    />
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600 }}>{item.unit}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Section: Q19-21 */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '0 0 0.4rem', color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>
              Section 3 &mdash; Eating in Secret &amp; Social Concern
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
              Do not count episodes of binge eating for questions 19-21.
            </p>
            {renderDaysScaleQuestion(19, "Over the past 28 days, on how many days have you eaten in secret (i.e., furtively)?", daysScale)}
            {renderDaysScaleQuestion(20, "On what proportion of the times that you have eaten have you felt guilty (felt that you've done wrong) because of its effect on your shape or weight?", proportionScale)}
            {renderAnchorScaleQuestion(21, "Over the past 28 days, how concerned have you been about other people seeing you eat?")}
          </div>

          {/* Section: Q22-28 */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '0 0 0.4rem', color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>
              Section 4 &mdash; Shape &amp; Weight Concern
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
              On how many over the past 28 days...
            </p>
            {selfEvalQuestions.map(q => renderAnchorScaleQuestion(q.key, q.question))}
          </div>

          {/* Section: Additional info */}
          <div className="metadata-card" style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '0 0 1.25rem', color: 'var(--text-main)', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
              Additional Information (Optional)
            </h3>
            <div className="metadata-fields-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
              <div>
                <label htmlFor="weight" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                  What is your weight at present? (best estimate, kg)
                </label>
                <input
                  type="number"
                  min="0"
                  id="weight"
                  className="input-text"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="e.g. 65"
                />
              </div>
              <div>
                <label htmlFor="height" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                  What is your height? (best estimate, cm)
                </label>
                <input
                  type="number"
                  min="0"
                  id="height"
                  className="input-text"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="e.g. 165"
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                  If female: Over the past 3-4 months have you missed any menstrual periods?
                </label>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <button type="button" onClick={() => setMissedPeriods('yes')} className="btn btn-secondary" style={{ background: missedPeriods === 'yes' ? 'var(--primary)' : undefined, color: missedPeriods === 'yes' ? '#fff' : undefined, flex: 1 }}>Yes</button>
                  <button type="button" onClick={() => setMissedPeriods('no')} className="btn btn-secondary" style={{ background: missedPeriods === 'no' ? 'var(--primary)' : undefined, color: missedPeriods === 'no' ? '#fff' : undefined, flex: 1 }}>No</button>
                </div>
              </div>
              {missedPeriods === 'yes' && (
                <div>
                  <label htmlFor="num-missed" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                    If so, how many?
                  </label>
                  <input
                    type="number"
                    min="0"
                    id="num-missed"
                    className="input-text"
                    value={numMissedPeriods}
                    onChange={(e) => setNumMissedPeriods(e.target.value)}
                    placeholder="e.g. 2"
                  />
                </div>
              )}
              <div>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                  Have you been taking the &ldquo;pill&rdquo;?
                </label>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <button type="button" onClick={() => setTakingPill('yes')} className="btn btn-secondary" style={{ background: takingPill === 'yes' ? 'var(--primary)' : undefined, color: takingPill === 'yes' ? '#fff' : undefined, flex: 1 }}>Yes</button>
                  <button type="button" onClick={() => setTakingPill('no')} className="btn btn-secondary" style={{ background: takingPill === 'no' ? 'var(--primary)' : undefined, color: takingPill === 'no' ? '#fff' : undefined, flex: 1 }}>No</button>
                </div>
              </div>
            </div>
          </div>

          {/* Validation warning banner */}
          {missedQuestions.length > 0 && (
            <div style={{ display: 'flex', gap: '1rem', background: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '10px', padding: '1.25rem', alignItems: 'center', marginBottom: '2rem' }}>
              <AlertCircle size={24} color="#ef4444" style={{ flexShrink: 0 }} />
              <div>
                <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ef4444', display: 'block' }}>
                  You have skipped {missedQuestions.length} question(s)
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginTop: '0.2rem' }}>
                  Please answer the highlighted question numbers: <strong>{missedQuestions.join(', ')}</strong>
                </span>
              </div>
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid var(--border)', paddingTop: '2rem', marginTop: '2rem' }} className="no-print">
            <button type="submit" className="btn btn-primary" style={{ padding: '0.85rem 3rem', fontSize: '1.05rem', fontWeight: 700 }}>
              Submit &amp; Calculate Score
            </button>
          </div>

        </div>
      </form>

      <style jsx global>{`
        @media (max-width: 768px) {
          .edeq-options-grid { grid-template-columns: repeat(4, 1fr) !important; }
          .metadata-fields-grid { grid-template-columns: 1fr !important; gap: 1.25rem !important; }
        }
      `}</style>
    </section>
  );
}

function behavioralLabel(key: number): string {
  switch (key) {
    case 13: return "Objective Overeating Episodes";
    case 14: return "...With Loss of Control";
    case 15: return "Binge Eating Days";
    case 16: return "Self-Induced Vomiting";
    case 17: return "Laxative Misuse";
    case 18: return "Driven / Compulsive Exercise";
    default: return "";
  }
}
