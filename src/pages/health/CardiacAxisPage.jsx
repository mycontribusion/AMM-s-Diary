import { useState } from 'react'
import PostPage from '../../components/PostPage'

const cat = { label: 'Health', path: '/health', icon: '🩺', accent: '#3b82f6' }

export default function CardiacAxisPage() {
    const [lead1, setLead1] = useState('positive')
    const [leadAvf, setLeadAvf] = useState('positive')
    const [result, setResult] = useState(null)

    const interpretAxis = () => {
        let interpretation = 'Normal Axis (0° to +90°).'
        let equiphasicLead = ''

        if (lead1 === 'positive' && leadAvf === 'positive') {
            interpretation = 'Normal Axis (0° to +90°).'
            equiphasicLead = 'Lead aVL'
        } else if (lead1 === 'positive' && leadAvf === 'negative') {
            interpretation = 'Left Axis Deviation (-30° to -90°).'
            equiphasicLead = 'Lead II'
        } else if (lead1 === 'negative' && leadAvf === 'positive') {
            interpretation = 'Right Axis Deviation (+90° to +180°).'
            equiphasicLead = 'Lead III'
        } else if (lead1 === 'negative' && leadAvf === 'negative') {
            interpretation = 'Extreme Axis Deviation (-90° to ±180°).'
            equiphasicLead = 'Lead aVR'
        }

        setResult({ interpretation, equiphasicLead })
    }

    return (
        <PostPage title="Cardiac Axis Interpreter (Grant Method)" category={cat}>
            <div className="calc-page fade-in">
                <div className="calc-card">
                    <div className="calc-card__header">
                        <h1>Cardiac Axis Interpreter</h1>
                        <p>Determine electrical axis using the quadrant / Grant method</p>
                    </div>
                    <div className="calc-card__body">

                        <div className="calc-field-row">
                            <div className="calc-field">
                                <label>Lead I QRS Polarity</label>
                                <select value={lead1} onChange={(e) => setLead1(e.target.value)}>
                                    <option value="positive">Positive (+)</option>
                                    <option value="negative">Negative (-)</option>
                                </select>
                            </div>

                            <div className="calc-field">
                                <label>Lead aVF QRS Polarity</label>
                                <select value={leadAvf} onChange={(e) => setLeadAvf(e.target.value)}>
                                    <option value="positive">Positive (+)</option>
                                    <option value="negative">Negative (-)</option>
                                </select>
                            </div>
                        </div>

                        <button className="btn-calc" onClick={interpretAxis} style={{ marginTop: '12px' }}>
                            Interpret Axis
                        </button>

                        {result && (
                            <div className="calc-result fade-in" style={{ flexDirection: 'column', gap: '8px', padding: '24px' }}>
                                <span style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>{result.interpretation}</span>
                                <span style={{ fontSize: '0.9rem' }}>Equiphasic Lead: <strong>{result.equiphasicLead}</strong></span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </PostPage>
    )
}
