import { useState } from 'react'
import PostPage from '../../components/PostPage'

const cat = { label: 'Health', path: '/health', icon: '🩺', accent: '#3b82f6' }

export default function MapCalcPage() {
    const [sbp, setSbp] = useState('')
    const [dbp, setDbp] = useState('')
    const [result, setResult] = useState(null)
    const [error, setError] = useState('')

    const calculateMAP = () => {
        const s = parseFloat(sbp)
        const d = parseFloat(dbp)

        if (isNaN(s) || isNaN(d) || s <= 0 || d <= 0 || s < d) {
            setError('Please enter valid SBP and DBP values (SBP must be > DBP).')
            setResult(null)
            return
        }

        const map = d + (s - d) / 3
        let category = ''

        if (map < 70) category = 'Low MAP - May indicate poor perfusion'
        else if (map >= 70 && map <= 100) category = 'Normal MAP'
        else category = 'High MAP - May indicate hypertension risk'

        setError('')
        setResult({ map: map.toFixed(2), category })
    }

    return (
        <PostPage title="Mean Arterial Pressure (MAP)" category={cat}>
            <div className="calc-page fade-in">
                <div className="calc-card">
                    <div className="calc-card__header">
                        <h1>MAP Calculator</h1>
                        <p>Calculate Mean Arterial Pressure from blood pressure readings</p>
                    </div>
                    <div className="calc-card__body">
                        <div className="calc-field-row">
                            <div className="calc-field">
                                <label>Systolic (SBP)</label>
                                <input
                                    type="number"
                                    value={sbp}
                                    onChange={(e) => setSbp(e.target.value)}
                                    placeholder="mmHg"
                                />
                            </div>
                            <div className="calc-field">
                                <label>Diastolic (DBP)</label>
                                <input
                                    type="number"
                                    value={dbp}
                                    onChange={(e) => setDbp(e.target.value)}
                                    placeholder="mmHg"
                                />
                            </div>
                        </div>

                        <button className="btn-calc" onClick={calculateMAP}>
                            Calculate MAP
                        </button>

                        {error && <div className="calc-result error fade-in">{error}</div>}
                        {result && !error && (
                            <div className="calc-result fade-in">
                                <span>MAP: <strong style={{ fontSize: '1.4rem' }}>{result.map} mmHg</strong></span>
                                <br />
                                <span className="text-muted" style={{ fontSize: '0.9rem', marginTop: '4px' }}>{result.category}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </PostPage>
    )
}
