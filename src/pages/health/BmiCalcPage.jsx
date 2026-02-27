import { useState } from 'react'
import PostPage from '../../components/PostPage'

const cat = { label: 'Health', path: '/health', icon: '🩺', accent: '#3b82f6' }

export default function BmiCalcPage() {
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [result, setResult] = useState(null)
    const [error, setError] = useState('')

    const calculateBMI = () => {
        const w = parseFloat(weight)
        const h = parseFloat(height)

        if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
            setError('Please enter valid positive numbers for weight and height.')
            setResult(null)
            return
        }

        const bmi = w / (h * h)
        let category = ''

        if (bmi < 18.5) category = 'Underweight'
        else if (bmi >= 18.5 && bmi < 24.9) category = 'Normal weight'
        else if (bmi >= 25 && bmi < 29.9) category = 'Overweight'
        else category = 'Obese'

        setError('')
        setResult({ bmi: bmi.toFixed(2), category })
    }

    return (
        <PostPage title="Body Mass Index (BMI) Calculator" category={cat}>
            <div className="calc-page fade-in">
                <div className="calc-card">
                    <div className="calc-card__header">
                        <h1>BMI Calculator</h1>
                        <p>Calculate Body Mass Index from weight and height</p>
                    </div>
                    <div className="calc-card__body">
                        <div className="calc-field-row">
                            <div className="calc-field">
                                <label>Weight (kg)</label>
                                <input
                                    type="number"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                    placeholder="e.g. 70"
                                />
                            </div>
                            <div className="calc-field">
                                <label>Height (m)</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)}
                                    placeholder="e.g. 1.75"
                                />
                            </div>
                        </div>

                        <button className="btn-calc" onClick={calculateBMI}>
                            Calculate BMI
                        </button>

                        {error && <div className="calc-result error fade-in">{error}</div>}
                        {result && !error && (
                            <div className="calc-result fade-in">
                                <span>BMI: <strong style={{ fontSize: '1.4rem' }}>{result.bmi}</strong></span>
                                <br />
                                <span className="text-muted" style={{ marginTop: '4px' }}>{result.category}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </PostPage>
    )
}
