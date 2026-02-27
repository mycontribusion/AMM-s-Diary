import { useState } from 'react'
import PostPage from '../../components/PostPage'

const cat = { label: 'Health', path: '/health', icon: '🩺', accent: '#3b82f6' }

export default function AgeCalcPage() {
    const [age, setAge] = useState('')
    const [unit, setUnit] = useState('years')
    const [result, setResult] = useState(null)
    const [error, setError] = useState('')

    const estimateWeight = () => {
        const ageNum = parseFloat(age)
        if (isNaN(ageNum) || ageNum <= 0) {
            setError('Please enter a valid age > 0.')
            setResult(null)
            return
        }

        let weight
        if (unit === 'days') {
            weight = (ageNum * 0.02) + 3 // Approximation for neonates
        } else if (unit === 'months') {
            weight = (ageNum * 0.5) + 4 // Approximation for infants
        } else if (unit === 'years') {
            if (ageNum >= 1 && ageNum <= 5) {
                weight = (2 * ageNum) + 8
            } else if (ageNum >= 6 && ageNum <= 12) {
                weight = (3 * ageNum) + 7
            } else if (ageNum >= 13 && ageNum <= 18) {
                weight = (3.5 * ageNum) + 5
            } else {
                setError('Estimation not available for this age range (> 18 years).')
                setResult(null)
                return
            }
        }

        setError('')
        setResult(`${weight.toFixed(2)} kg`)
    }

    return (
        <PostPage title="Pediatrics Weight Calculator" category={cat}>
            <div className="calc-page fade-in">
                <div className="calc-card">
                    <div className="calc-card__header">
                        <h1>Pediatrics Weight Calculator</h1>
                        <p>For quick estimation of weight in management of pediatrics age group</p>
                    </div>

                    <div className="calc-card__body">
                        <div className="calc-field-row">
                            <div className="calc-field">
                                <label>Age Format</label>
                                <select value={unit} onChange={(e) => setUnit(e.target.value)}>
                                    <option value="days">Days</option>
                                    <option value="months">Months</option>
                                    <option value="years">Years</option>
                                </select>
                            </div>

                            <div className="calc-field">
                                <label>Enter Age</label>
                                <input
                                    type="number"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    placeholder={`Age in ${unit}`}
                                    onKeyDown={(e) => e.key === 'Enter' && estimateWeight()}
                                />
                            </div>
                        </div>

                        <button className="btn-calc" onClick={estimateWeight}>
                            Estimate Weight
                        </button>

                        {error && (
                            <div className="calc-result error fade-in">{error}</div>
                        )}

                        {result && !error && (
                            <div className="calc-result fade-in">
                                Estimated Weight:<br />
                                <span style={{ fontSize: '1.4rem', fontWeight: 800 }}>{result}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </PostPage>
    )
}
