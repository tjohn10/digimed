"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Printer, RefreshCw, Clipboard, CheckCircle, AlertCircle } from 'lucide-react';

const childQuestions = [
  "I worry about things",
  "I feel sad or empty",
  "When I have a problem, I get a funny feeling in my stomach",
  "I worry when I think I have done poorly at something",
  "I would feel afraid of being on my own at home",
  "Nothing is much fun anymore",
  "I feel scared when I have to take a test",
  "I feel worried when I think someone is angry with me",
  "I worry about being away from my parent",
  "I am bothered by bad or silly thoughts or pictures in my mind",
  "I have trouble sleeping",
  "I worry that I will do badly at my school work",
  "I worry that something awful will happen to someone in my family",
  "I suddenly feel as if I can't breathe when there is no reason for this",
  "I have problems with my appetite",
  "I have to keep checking that I have done things right (like the switch is off, or the door is locked)",
  "I feel scared if I have to sleep on my own",
  "I have trouble going to school in the mornings because I feel nervous or afraid",
  "I have no energy for things",
  "I worry I might look foolish",
  "I am tired a lot",
  "I worry that bad things will happen to me",
  "I can't seem to get bad or silly thoughts out of my head",
  "When I have a problem, my heart beats really fast",
  "I cannot think clearly",
  "I suddenly start to tremble or shake when there is no reason for this",
  "I worry that something bad will happen to me",
  "When I have a problem, I feel shaky",
  "I feel worthless",
  "I worry about making mistakes",
  "I have to think of special thoughts (like numbers or words) to stop bad things from happening",
  "I worry what other people think of me",
  "I am afraid of being in crowded places (like shopping centers, the movies, buses, busy playgrounds)",
  "All of a sudden I feel really scared for no reason at all",
  "I worry about what is going to happen",
  "I suddenly become dizzy or faint when there is no reason for this",
  "I think about death",
  "I feel afraid if I have to talk in front of my class",
  "My heart suddenly starts to beat too quickly for no reason",
  "I feel like I don't want to move",
  "I worry that I will suddenly get a scared feeling when there is nothing to be afraid of",
  "I have to do some things over and over again (like washing my hands, cleaning or putting things in a certain order)",
  "I feel afraid that I will make a fool of myself in front of people",
  "I have to do some things in just the right way to stop bad things from happening",
  "I worry when I go to bed at night",
  "I would feel scared if I had to stay away from home overnight",
  "I feel restless"
];

const parentQuestions = [
  "My child worries about things",
  "My child feels sad or empty",
  "When my child has a problem, he/she gets a funny feeling in his/her stomach",
  "My child worries when he/she thinks he/she has done poorly at something",
  "My child feels afraid of being alone at home",
  "Nothing is much fun for my child anymore",
  "My child feels scared when taking a test",
  "My child worries when he/she thinks someone is angry with him/her",
  "My child worries about being away from me",
  "My child is bothered by bad or silly thoughts or pictures in his/her mind",
  "My child has trouble sleeping",
  "My child worries about doing badly at school work",
  "My child worries that something awful will happen to someone in the family",
  "My child suddenly feels as if he/she can't breathe when there is no reason for this",
  "My child has problems with his/her appetite",
  "My child has to keep checking that he/she has done things right (like the switch is off, or the door is locked)",
  "My child feels scared to sleep on his/her own",
  "My child has trouble going to school in the mornings because of feeling nervous or afraid",
  "My child has no energy for things",
  "My child worries about looking foolish",
  "My child is tired a lot",
  "My child worries that bad things will happen to him/her",
  "My child can't seem to get bad or silly thoughts out of his/her head",
  "When my child has a problem, his/her heart beats really fast",
  "My child cannot think clearly",
  "My child suddenly starts to tremble or shake when there is no reason for this",
  "My child worries that something bad will happen to him/her",
  "When my child has a problem, he/she feels shaky",
  "My child feels worthless",
  "My child worries about making mistakes",
  "My child has to think of special thoughts (like numbers or words) to stop bad things from happening",
  "My child worries what other people think of him/her",
  "My child is afraid of being in crowded places (like shopping centers, the movies, buses, busy playgrounds)",
  "All of a sudden my child will feel really scared for no reason at all",
  "My child worries about what is going to happen",
  "My child suddenly becomes dizzy or faint when there is no reason for this",
  "My child thinks about death",
  "My child feels afraid if he/she have to talk in front of the class",
  "My child's heart suddenly starts to beat too quickly for no reason",
  "My child feels like he/she doesn't want to move",
  "My child worries that he/she will suddenly get a scared feeling when there is nothing to be afraid of",
  "My child has to do some things over and over again (like washing hands, cleaning, or putting things in a certain order)",
  "My child feels afraid that he/she will make a fool of him/herself in front of people",
  "My child has to do some things in just the right way to stop bad things from happening",
  "My child worries when in bed at night",
  "My child would feel scared if he/she had to stay away from home overnight",
  "My child feels restless"
];

// 1-based question indexes for subscales
const subscalesDefinition = [
  { name: "Separation Anxiety (SAD)", keys: [5, 9, 13, 17, 18, 22, 27, 46], max: 24 },
  { name: "Social Phobia (SoP)", keys: [4, 7, 8, 12, 20, 30, 32, 38, 43], max: 27 },
  { name: "Obsessive-Compulsive (OCD)", keys: [10, 16, 23, 31, 42, 44], max: 18 },
  { name: "Panic Disorder (PD)", keys: [3, 14, 24, 26, 28, 34, 36, 39, 41], max: 27 },
  { name: "Generalized Anxiety (GAD)", keys: [1, 35, 45, 47], max: 12 },
  { name: "Major Depression (MDD)", keys: [2, 6, 11, 15, 19, 21, 25, 29, 37, 40], max: 30 }
];

const scoringOptions = [
  { text: "Never", score: 0 },
  { text: "Sometimes", score: 1 },
  { text: "Often", score: 2 },
  { text: "Always", score: 3 }
];

export default function RCADSQuestionnaire() {
  const [assessmentMode, setAssessmentMode] = useState<'child' | 'parent'>('child');
  
  // Metadata fields
  const [childName, setChildName] = useState('');
  const [nhsId, setNhsId] = useState('');
  const [relationship, setRelationship] = useState('Parent');
  const [dateTime, setDateTime] = useState('');

  // Questionnaire responses state
  const [responses, setResponses] = useState<Record<number, number>>({});
  
  // Error state for missed questions
  const [missedQuestions, setMissedQuestions] = useState<number[]>([]);
  const [metadataError, setMetadataError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Set default datetime to current local format
    const localDate = new Date();
    const formatted = localDate.toISOString().slice(0, 16);
    setDateTime(formatted);
    
    // Reset responses when toggling modes
    setResponses({});
    setMissedQuestions([]);
    setMetadataError(false);
  }, [assessmentMode]);

  const questions = assessmentMode === 'child' ? childQuestions : parentQuestions;
  const instructions = assessmentMode === 'child' 
    ? "Please put a circle around the word that shows how often each of these things happens to you. There are no right or wrong answers."
    : "Please put a circle around the word that shows how often each of these things happens to your child. There are no right or wrong answers.";

  const handleSelectOption = (questionIndex: number, score: number) => {
    setResponses(prev => ({
      ...prev,
      [questionIndex]: score
    }));
    // Remove from missed list if answered
    if (missedQuestions.includes(questionIndex)) {
      setMissedQuestions(prev => prev.filter(q => q !== questionIndex));
    }
  };

  const calculateSubscaleScore = (keys: number[]) => {
    return keys.reduce((sum, key) => sum + (responses[key] || 0), 0);
  };

  const totalScore = Object.values(responses).reduce((sum, val) => sum + val, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate metadata
    if (!childName.trim() || !dateTime) {
      setMetadataError(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setMetadataError(false);

    // Validate questions
    const unanswered: number[] = [];
    for (let i = 1; i <= 47; i++) {
      if (responses[i] === undefined) {
        unanswered.push(i);
      }
    }

    if (unanswered.length > 0) {
      setMissedQuestions(unanswered);
      // Scroll to the first missed question
      const firstMissedId = `question-container-${unanswered[0]}`;
      const element = document.getElementById(firstMissedId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    // Submit Action & Console Log JSON payload
    setIsSubmitted(true);
    
    const subscaleMetrics = subscalesDefinition.map(sub => {
      const score = calculateSubscaleScore(sub.keys);
      return {
        subscaleName: sub.name,
        score: score,
        maxScore: sub.max,
        percentage: Math.round((score / sub.max) * 100)
      };
    });

    const payload = {
      assessmentType: "RCADS-47",
      mode: assessmentMode,
      metadata: {
        childName: childName.trim(),
        nhsId: nhsId.trim() || undefined,
        relationship: assessmentMode === 'parent' ? relationship : undefined,
        submissionDateTime: dateTime
      },
      responses: responses,
      scoring: {
        totalScore: totalScore,
        maxTotalScore: 141,
        subscales: subscaleMetrics
      }
    };

    console.log("RCADS Form Submitted successfully!", JSON.stringify(payload, null, 2));
  };

  const handleRetake = () => {
    setResponses({});
    setMissedQuestions([]);
    setIsSubmitted(false);
    setChildName('');
    setNhsId('');
    setRelationship('Parent');
    const localDate = new Date();
    setDateTime(localDate.toISOString().slice(0, 16));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="view-section active" style={{ maxWidth: '1280px', margin: '2rem auto', padding: '0 1.5rem', width: '100%' }}>
      
      {/* Back button */}
      <div className="no-print" style={{ marginBottom: '2rem' }}>
        <Link href="/assessments" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          <ArrowLeft size={16} />
          Back to Assessments
        </Link>
      </div>

      {/* Main Container */}
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div className="glass-panel responsive-panel" style={{ border: '1px solid var(--border)', background: 'var(--bg-card)', borderRadius: '16px' }}>
            
            {/* Header and Toggle */}
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255, 120, 36, 0.08)', padding: '0.4rem 0.8rem', borderRadius: '20px', color: 'var(--primary)', fontWeight: 700, fontSize: '0.85rem', marginBottom: '1rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
                <Clipboard size={16} />
                RCADS-47 Questionnaire
              </div>
              <h1 style={{ fontSize: '2.5rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--text-main)', margin: '0 0 1rem' }}>
                Children's Anxiety & Depression Scale
              </h1>
              
              {/* Tab Toggle */}
              <div style={{ display: 'inline-flex', background: 'var(--bg-panel)', padding: '0.35rem', borderRadius: '12px', border: '1px solid var(--border)', marginTop: '1rem' }} className="no-print">
                <button
                  type="button"
                  onClick={() => setAssessmentMode('child')}
                  style={{
                    padding: '0.6rem 1.5rem',
                    borderRadius: '8px',
                    border: 'none',
                    fontWeight: 700,
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    transition: 'all 0.2s',
                    background: assessmentMode === 'child' ? 'var(--primary)' : 'transparent',
                    color: assessmentMode === 'child' ? '#ffffff' : 'var(--text-muted)'
                  }}
                >
                  Child / Young Person
                </button>
                <button
                  type="button"
                  onClick={() => setAssessmentMode('parent')}
                  style={{
                    padding: '0.6rem 1.5rem',
                    borderRadius: '8px',
                    border: 'none',
                    fontWeight: 700,
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    transition: 'all 0.2s',
                    background: assessmentMode === 'parent' ? 'var(--primary)' : 'transparent',
                    color: assessmentMode === 'parent' ? '#ffffff' : 'var(--text-muted)'
                  }}
                >
                  Parent / Carer
                </button>
              </div>
            </div>

            {/* Clinical Instructions */}
            <div style={{ background: 'rgba(6, 182, 212, 0.04)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem' }}>
              <h4 style={{ margin: '0 0 0.5rem', color: 'var(--secondary)', fontWeight: 700, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <AlertCircle size={18} />
                Assessment Instructions
              </h4>
              <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                {instructions}
              </p>
            </div>

            {/* Metadata Fields Card */}
            <div className="metadata-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '0 0 1.25rem', color: 'var(--text-main)', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
                Demographic & NHS Information
              </h3>
              
              <div className="metadata-fields-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                <div>
                  <label htmlFor="child-name" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                    Child/Young Person's Name *
                  </label>
                  <input
                    type="text"
                    id="child-name"
                    className="input-text"
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                    placeholder="Enter full name"
                    style={{
                      borderColor: metadataError && !childName.trim() ? '#ef4444' : undefined,
                      borderWidth: metadataError && !childName.trim() ? '1.5px' : undefined
                    }}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="nhs-id" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                    NHS ID / Number (Optional)
                  </label>
                  <input
                    type="text"
                    id="nhs-id"
                    className="input-text"
                    value={nhsId}
                    onChange={(e) => setNhsId(e.target.value)}
                    placeholder="e.g. 123 456 7890"
                  />
                </div>

                {assessmentMode === 'parent' && (
                  <div>
                    <label htmlFor="relationship" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                      Relationship to Child *
                    </label>
                    <select
                      id="relationship"
                      className="select-control"
                      value={relationship}
                      onChange={(e) => setRelationship(e.target.value)}
                    >
                      <option value="Parent">Parent</option>
                      <option value="Carer">Carer</option>
                      <option value="Guardian">Guardian</option>
                      <option value="Other">Other Relative / Professional</option>
                    </select>
                  </div>
                )}

                <div>
                  <label htmlFor="date-time" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                    Assessment Date & Time *
                  </label>
                  <input
                    type="datetime-local"
                    id="date-time"
                    className="input-text"
                    value={dateTime}
                    onChange={(e) => setDateTime(e.target.value)}
                    style={{
                      borderColor: metadataError && !dateTime ? '#ef4444' : undefined,
                      borderWidth: metadataError && !dateTime ? '1.5px' : undefined
                    }}
                    required
                  />
                </div>
              </div>
              {metadataError && (!childName.trim() || !dateTime) && (
                <span style={{ color: '#ef4444', fontSize: '0.82rem', display: 'block', marginTop: '1rem', fontWeight: 600 }}>
                  Please complete the required demographic metadata fields before submitting.
                </span>
              )}
            </div>

            {/* Questions Form Grid */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0 0 1.5rem', color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>
                RCADS Diagnostic Matrix
              </h3>
              
              {/* Desktop Table View */}
              <div className="desktop-matrix-table" style={{ border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
                  <thead>
                    <tr style={{ background: 'var(--bg-panel)', borderBottom: '2px solid var(--border)', textAlign: 'left' }}>
                      <th style={{ padding: '1rem 1.25rem', width: '5%', fontWeight: 700 }}>#</th>
                      <th style={{ padding: '1rem 1.25rem', width: '50%', fontWeight: 700 }}>Symptom Statement</th>
                      {scoringOptions.map(opt => (
                        <th key={opt.text} style={{ padding: '1rem', width: '11.25%', textAlign: 'center', fontWeight: 700 }}>
                          {opt.text}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {questions.map((question, index) => {
                      const qNumber = index + 1;
                      const hasError = missedQuestions.includes(qNumber);
                      const selectedScore = responses[qNumber];
                      
                      return (
                        <tr 
                          key={qNumber} 
                          id={`question-container-${qNumber}`}
                          style={{ 
                            borderBottom: '1px solid var(--border)',
                            background: hasError ? 'rgba(239, 68, 68, 0.03)' : 'transparent',
                            transition: 'background-color 0.25s'
                          }}
                        >
                          <td style={{ padding: '1rem 1.25rem', fontWeight: 650, color: hasError ? '#ef4444' : 'var(--text-muted)' }}>
                            {qNumber}
                          </td>
                          <td style={{ padding: '1rem 1.25rem', color: 'var(--text-main)', fontWeight: 500 }}>
                            {question}
                            {hasError && (
                              <span style={{ color: '#ef4444', fontSize: '0.75rem', display: 'block', marginTop: '0.25rem', fontWeight: 600 }}>
                                * Answer is required.
                              </span>
                            )}
                          </td>
                          {scoringOptions.map(opt => {
                            const isChecked = selectedScore === opt.score;
                            return (
                              <td key={opt.text} style={{ padding: '1rem', textAlign: 'center' }}>
                                <label style={{ display: 'block', cursor: 'pointer', padding: '0.5rem 0' }}>
                                  <input
                                    type="radio"
                                    name={`question-radio-${qNumber}`}
                                    checked={isChecked}
                                    onChange={() => handleSelectOption(qNumber, opt.score)}
                                    style={{
                                      width: '18px',
                                      height: '18px',
                                      accentColor: 'var(--primary)',
                                      cursor: 'pointer'
                                    }}
                                  />
                                </label>
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Mobile Mobile-friendly Stacked view */}
              <div className="mobile-matrix-list" style={{ display: 'none', flexDirection: 'column', gap: '1.25rem' }}>
                {questions.map((question, index) => {
                  const qNumber = index + 1;
                  const hasError = missedQuestions.includes(qNumber);
                  const selectedScore = responses[qNumber];
                  
                  return (
                    <div 
                      key={qNumber}
                      id={`question-container-mob-${qNumber}`}
                      style={{
                        padding: '1.25rem',
                        border: hasError ? '1.5px solid #ef4444' : '1px solid var(--border)',
                        background: hasError ? 'rgba(239, 68, 68, 0.02)' : 'var(--bg-panel)',
                        borderRadius: '12px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.85rem'
                      }}
                    >
                      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                        <span style={{ fontSize: '0.85rem', fontWeight: 700, padding: '0.2rem 0.5rem', background: 'var(--border)', borderRadius: '4px', color: 'var(--text-muted)' }}>
                          {qNumber}
                        </span>
                        <p style={{ margin: 0, fontWeight: 600, color: 'var(--text-main)', fontSize: '0.95rem' }}>
                          {question}
                        </p>
                      </div>
                      
                      {hasError && (
                        <span style={{ color: '#ef4444', fontSize: '0.8rem', fontWeight: 600 }}>
                          * Please select an option.
                        </span>
                      )}

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
                        {scoringOptions.map(opt => {
                          const isChecked = selectedScore === opt.score;
                          return (
                            <button
                              type="button"
                              key={opt.text}
                              onClick={() => handleSelectOption(qNumber, opt.score)}
                              style={{
                                padding: '0.6rem',
                                borderRadius: '8px',
                                border: isChecked ? '1.5px solid var(--primary)' : '1px solid var(--border)',
                                background: isChecked ? 'var(--primary)' : 'var(--bg-card)',
                                color: isChecked ? '#ffffff' : 'var(--text-main)',
                                fontSize: '0.85rem',
                                fontWeight: 700,
                                cursor: 'pointer',
                                transition: 'all 0.15s'
                              }}
                            >
                              {opt.text}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
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

            {/* Form actions footer */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid var(--border)', paddingTop: '2rem', marginTop: '2rem' }} className="no-print">
              <button
                type="submit"
                className="btn btn-primary"
                style={{ padding: '0.85rem 3rem', fontSize: '1.05rem', fontWeight: 700 }}
              >
                Submit & Calculate Score
              </button>
            </div>

          </div>
        </form>
      ) : (
        /* Results Report Dashboard */
        <div className="glass-panel responsive-panel" style={{ border: '1px solid var(--border)', background: 'var(--bg-card)', borderRadius: '16px' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '2px solid var(--border)', paddingBottom: '2rem', marginBottom: '2.5rem' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(16, 185, 129, 0.08)', padding: '0.4rem 0.8rem', borderRadius: '20px', color: '#10b981', fontWeight: 700, fontSize: '0.8rem', marginBottom: '0.75rem', letterSpacing: '0.75px', textTransform: 'uppercase' }}>
                <CheckCircle size={14} />
                Assessment Completed
              </div>
              <h1 style={{ fontSize: '2.25rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--text-main)', margin: 0 }}>
                RCADS Clinical Summary Report
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

          {/* Demographic Metadata Summary Card */}
          <div style={{ background: 'var(--bg-panel)', border: '1px solid var(--border)', padding: '1.5rem 2rem', borderRadius: '12px', marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: '0 0 1rem', color: 'var(--text-main)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Subject Metadata Details
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem', fontSize: '0.95rem' }} className="results-metadata-grid">
              <div>
                <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.85rem' }}>Child/Young Person Name:</span>
                <strong style={{ color: 'var(--text-main)' }}>{childName}</strong>
              </div>
              <div>
                <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.85rem' }}>NHS Identifier:</span>
                <strong style={{ color: 'var(--text-main)' }}>{nhsId || "Not Provided"}</strong>
              </div>
              {assessmentMode === 'parent' && (
                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.85rem' }}>Relationship of Submitter:</span>
                  <strong style={{ color: 'var(--text-main)' }}>{relationship}</strong>
                </div>
              )}
              <div>
                <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.85rem' }}>Completed Timestamp:</span>
                <strong style={{ color: 'var(--text-main)' }}>{dateTime.replace('T', ' ')}</strong>
              </div>
            </div>
          </div>

          {/* Total Score Dashboard Row */}
          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center', marginBottom: '3rem' }} className="results-score-row">
            
            {/* Round Gauge */}
            <div style={{ flexShrink: 0, position: 'relative', width: '150px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-panel)', borderRadius: '50%', border: '4px solid var(--border)' }}>
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '2.75rem', fontWeight: 800, color: 'var(--primary)', display: 'block', lineHeight: 1 }}>
                  {totalScore}
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  out of 141
                </span>
              </div>
            </div>

            <div>
              <h2 style={{ margin: '0 0 0.5rem', fontSize: '1.75rem', fontWeight: 700, color: 'var(--text-main)' }}>
                Diagnostic Indication
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6, margin: 0, maxWidth: '560px' }}>
                {totalScore <= 35 && "Your score indicates symptoms within the typical clinical range. No active indications of clinical anxiety or depressive symptoms are detected."}
                {totalScore > 35 && totalScore <= 70 && "Your score suggests mild to moderate distress. Symptoms may occasionally interfere with daily school, family, or social settings. Connecting with a therapeutic counselor is recommended."}
                {totalScore > 70 && "Your score falls within the severe or clinical threshold. Structured clinical therapy courses (like cognitive behavioral therapy) under professional guidelines are strongly advised."}
              </p>
            </div>
          </div>

          {/* Subscales breakdown list */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--text-main)' }}>
              RCADS Clinical Subscale Performance
            </h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }} className="subscales-grid">
              {subscalesDefinition.map(sub => {
                const score = calculateSubscaleScore(sub.keys);
                const percentage = Math.round((score / sub.max) * 100);
                
                return (
                  <div 
                    key={sub.name}
                    style={{
                      background: 'var(--bg-panel)',
                      border: '1px solid var(--border)',
                      padding: '1.25rem 1.5rem',
                      borderRadius: '8px'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 650, fontSize: '0.92rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                      <span>{sub.name}</span>
                      <span>{score} / {sub.max}</span>
                    </div>
                    {/* Progress track */}
                    <div style={{ width: '100%', height: '8px', background: 'var(--border)', borderRadius: '4px', overflow: 'hidden' }}>
                      <div 
                        style={{
                          width: `${percentage}%`,
                          height: '100%',
                          background: 'var(--primary)',
                          borderRadius: '4px',
                          transition: 'width 0.8s ease'
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Medical Disclaimer */}
          <div style={{ display: 'flex', gap: '1rem', background: 'rgba(6, 182, 212, 0.05)', border: '1px solid rgba(6, 182, 212, 0.2)', borderRadius: '10px', padding: '1.25rem', marginBottom: '3rem' }}>
            <AlertCircle size={22} color="#06b6d4" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h4 style={{ margin: '0 0 0.25rem', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)' }}>Clinical Disclaimer</h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                This is a clinical screening tool. It does not replace a formal psychological or psychiatric diagnosis. Diagnostic results should be interpreted collaboratively with an accredited CBT specialist or medical practitioner.
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
      )}

      {/* Inline styles for responsive layout toggles and print stylesheets */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .desktop-matrix-table {
            display: none !important;
          }
          .mobile-matrix-list {
            display: flex !important;
          }
          .metadata-fields-grid, .subscales-grid, .results-metadata-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
          .results-score-row {
            flex-direction: column !important;
            text-align: center !important;
            gap: 1.5rem !important;
          }
        }
        @media print {
          body {
            background: #ffffff !important;
            color: #000000 !important;
          }
          header, footer, .no-print, .btn, button {
            display: none !important;
          }
          .glass-panel {
            border: none !important;
            box-shadow: none !important;
            background: transparent !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          .subscales-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 1rem !important;
          }
          .subscales-grid > div {
            border: 1px solid #000000 !important;
            background: transparent !important;
          }
          .results-metadata-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
