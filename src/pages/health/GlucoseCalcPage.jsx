import { useState } from 'react'
import PostPage from '../../components/PostPage'

const cat = { label: 'Health', path: '/health', icon: '🩺', accent: '#3b82f6' }

export default function GlucoseCalcPage() {
    const [glucose, setGlucose] = useState('')
    const [unit, setUnit] = useState('mmol')
    const [type, setType] = useState('fasting')
    const [result, setResult] = useState(null)
    const [error, setError] = useState('')

    const convertGlucose = () => {
        const value = parseFloat(glucose)

        if (isNaN(value) || value <= 0) {
            setError('Please enter a valid glucose level.')
            setResult(null)
            return
        }

        let convertedValue = value
        let convertedUnit = unit

        if (unit === 'mmol') {
            convertedValue = value * 18.0182
            convertedUnit = 'mg/dL'
        } else {
            convertedValue = value / 18.0182
            convertedUnit = 'mmol/L'
        }

        let category = ''
        if (unit === 'mg') {
            if (type === 'fasting') {
                if (value < 70) category = 'Low - Hypoglycemia'
                else if (value >= 70 && value < 100) category = 'Normal'
                else if (value >= 100 && value < 126) category = 'Impaired Fasting Glucose - Prediabetes'
                else category = 'Diabetes'
            } else {
                if (value < 140) category = 'Normal'
                else if (value >= 140 && value < 200) category = 'Impaired Glucose Tolerance - Prediabetes'
                else category = 'Diabetes'
            }
        } else {
            if (type === 'fasting') {
                if (value < 3.9) category = 'Low - Hypoglycemia'
                else if (value >= 3.9 && value < 5.6) category = 'Normal'
                else if (value >= 5.6 && value < 7.0) category = 'Impaired Fasting Glucose - Prediabetes'
                else category = 'Diabetes'
            } else {
                if (value < 7.8) category = 'Normal'
                else if (value >= 7.8 && value < 11.1) category = 'Impaired Glucose Tolerance - Prediabetes'
                else category = 'Diabetes'
            }
        }

        setError('')
        setResult({ value: convertedValue.toFixed(2), unit: convertedUnit, category })
    }

    return (
        <PostPage title="Glucose Level Converter" category={cat}>
            <div className="calc-page fade-in">
                <div className="calc-card">
                    <div className="calc-card__header">
                        <h1>Glucose Converter</h1>
                        <p>Convert blood sugar between mmol/L and mg/dL</p>
                    </div>
                    <div className="calc-card__body">
                        <div className="calc-field-row">
                            <div className="calc-field">
                                <label>Glucose Level</label>
                                <input
                                    type="number"
                                    step="0.1"
                                    value={glucose}
                                    onChange={(e) => setGlucose(e.target.value)}
                                    placeholder="Enter value"
                                />
                            </div>
                            <div className="calc-field">
                                <label>Current Unit</label>
                                <select value={unit} onChange={(e) => setUnit(e.target.value)}>
                                    <option value="mmol">mmol/L</option>
                                    <option value="mg">mg/dL</option>
                                </select>
                            </div>
                        </div>

                        <div className="calc-field" style={{ marginTop: '8px' }}>
                            <label>Test Type</label>
                            <select value={type} onChange={(e) => setType(e.target.value)}>
                                <option value="fasting">Fasting Blood Glucose</option>
                                <option value="random">Random Blood Sugar</option>
                            </select>
                        </div>

                        <button className="btn-calc" onClick={convertGlucose} style={{ marginTop: '12px' }}>
                            Convert & Check
                        </button>

                        {error && <div className="calc-result error fade-in">{error}</div>}
                        {result && !error && (
                            <div className="calc-result fade-in" style={{ flexDirection: 'column', gap: '4px' }}>
                                <span>
                                    Converted: <strong style={{ fontSize: '1.4rem' }}>{result.value}</strong> {result.unit}
                                </span>
                                <span className="text-muted" style={{ fontSize: '0.9rem' }}>({result.category})</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </PostPage>
    )
}
