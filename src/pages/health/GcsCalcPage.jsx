import { useState } from 'react'
import PostPage from '../../components/PostPage'

const cat = { label: 'Health', path: '/health', icon: '🩺', accent: '#3b82f6' }

export default function GcsCalcPage() {
    const [eye, setEye] = useState(4)
    const [verbal, setVerbal] = useState(5)
    const [motor, setMotor] = useState(6)
    const [result, setResult] = useState(null)

    const calculateGCS = () => {
        const totalGCS = eye + verbal + motor
        let category = ''

        if (totalGCS >= 13) category = 'Mild Brain Injury'
        else if (totalGCS >= 9) category = 'Moderate Brain Injury'
        else category = 'Severe Brain Injury'

        setResult({ score: totalGCS, category })
    }

    return (
        <PostPage title="Glasgow Coma Scale (GCS) Calculator" category={cat}>
            <div className="calc-page fade-in">
                <div className="calc-card">
                    <div className="calc-card__header">
                        <h1>GCS Calculator</h1>
                        <p>Calculate the Glasgow Coma Scale score</p>
                    </div>
                    <div className="calc-card__body">

                        <div className="calc-field">
                            <label>Eye Opening Response</label>
                            <select value={eye} onChange={(e) => setEye(parseInt(e.target.value))}>
                                <option value={4}>Spontaneous (4)</option>
                                <option value={3}>To Speech (3)</option>
                                <option value={2}>To Pain (2)</option>
                                <option value={1}>None (1)</option>
                            </select>
                        </div>

                        <div className="calc-field" style={{ marginTop: '8px' }}>
                            <label>Verbal Response</label>
                            <select value={verbal} onChange={(e) => setVerbal(parseInt(e.target.value))}>
                                <option value={5}>Oriented (5)</option>
                                <option value={4}>Confused (4)</option>
                                <option value={3}>Inappropriate Words (3)</option>
                                <option value={2}>Incomprehensible Sounds (2)</option>
                                <option value={1}>None (1)</option>
                            </select>
                        </div>

                        <div className="calc-field" style={{ marginTop: '8px' }}>
                            <label>Motor Response</label>
                            <select value={motor} onChange={(e) => setMotor(parseInt(e.target.value))}>
                                <option value={6}>Obeys Commands (6)</option>
                                <option value={5}>Localizes Pain (5)</option>
                                <option value={4}>Withdraws from Pain (4)</option>
                                <option value={3}>Abnormal Flexion (Decorticate) (3)</option>
                                <option value={2}>Abnormal Extension (Decerebrate) (2)</option>
                                <option value={1}>None (1)</option>
                            </select>
                        </div>

                        <button className="btn-calc" onClick={calculateGCS} style={{ marginTop: '12px' }}>
                            Calculate GCS
                        </button>

                        {result && (
                            <div className={`calc-result ${result.score <= 8 ? 'error' : ''} fade-in`} style={{ flexDirection: 'column', gap: '4px' }}>
                                <span>
                                    Total Score: <strong style={{ fontSize: '1.4rem' }}>{result.score}</strong>
                                </span>
                                <span className="text-muted" style={{ fontSize: '0.9rem' }}>{result.category}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </PostPage>
    )
}
