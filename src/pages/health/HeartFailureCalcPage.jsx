import { useState } from 'react'
import PostPage from '../../components/PostPage'

const cat = { label: 'Health', path: '/health', icon: '🩺', accent: '#3b82f6' }

const majorCriteriaList = [
    { id: 'pnd', label: 'Paroxysmal Nocturnal Dyspnea' },
    { id: 'jvd', label: 'Jugular Venous Distension' },
    { id: 'rales', label: 'Pulmonary Rales' },
    { id: 'cardiomegaly', label: 'Cardiomegaly' },
    { id: 'pulmonaryEdema', label: 'Acute Pulmonary Edema' },
    { id: 's3', label: 'S3 Gallop' },
    { id: 'venousPressure', label: 'Increased Venous Pressure' },
    { id: 'circulation', label: 'Circulation Time > 25 sec' },
    { id: 'weightLoss', label: 'Weight Loss > 4.5 kg in 5 days (in response to treatment)' }
]

const minorCriteriaList = [
    { id: 'ankleEdema', label: 'Bilateral Ankle Edema' },
    { id: 'nocturnalCough', label: 'Nocturnal Cough' },
    { id: 'dyspnea', label: 'Dyspnea on Exertion' },
    { id: 'hepatomegaly', label: 'Hepatomegaly' },
    { id: 'pleuralEffusion', label: 'Pleural Effusion' },
    { id: 'tachycardia', label: 'Heart Rate > 120 bpm' }
]

export default function HeartFailureCalcPage() {
    const [checkedItems, setCheckedItems] = useState({})
    const [result, setResult] = useState(null)

    const handleToggle = (id) => {
        setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }))
    }

    const calculateHeartFailure = () => {
        const majorCount = majorCriteriaList.filter(c => checkedItems[c.id]).length
        const minorCount = minorCriteriaList.filter(c => checkedItems[c.id]).length

        let diagnosis = 'No heart failure'
        let isPositive = false

        if (majorCount >= 2) {
            diagnosis = 'Heart Failure Present'
            isPositive = true
        } else if (majorCount === 1 && minorCount >= 2) {
            diagnosis = 'Possible Heart Failure'
            isPositive = true
        }

        setResult({ diagnosis, isPositive })
    }

    return (
        <PostPage title="Framingham Heart Failure Criteria Calculator" category={cat}>
            <div className="calc-page fade-in">
                <div className="calc-card">
                    <div className="calc-card__header">
                        <h1>Heart Failure Criteria</h1>
                        <p>Select the symptoms and conditions present</p>
                    </div>
                    <div className="calc-card__body">

                        <div className="calc-checkbox-section-title">Major Criteria</div>
                        <div className="calc-checkbox-group">
                            {majorCriteriaList.map(c => (
                                <label key={c.id} className="calc-checkbox">
                                    <input
                                        type="checkbox"
                                        checked={!!checkedItems[c.id]}
                                        onChange={() => handleToggle(c.id)}
                                    />
                                    <span>{c.label}</span>
                                </label>
                            ))}
                        </div>

                        <div className="calc-checkbox-section-title" style={{ marginTop: '12px' }}>Minor Criteria</div>
                        <div className="calc-checkbox-group">
                            {minorCriteriaList.map(c => (
                                <label key={c.id} className="calc-checkbox">
                                    <input
                                        type="checkbox"
                                        checked={!!checkedItems[c.id]}
                                        onChange={() => handleToggle(c.id)}
                                    />
                                    <span>{c.label}</span>
                                </label>
                            ))}
                        </div>

                        <button className="btn-calc" onClick={calculateHeartFailure} style={{ marginTop: '20px' }}>
                            Check Heart Failure
                        </button>

                        {result && (
                            <div className={`calc-result ${!result.isPositive ? 'error' : ''} fade-in`}>
                                <span style={{ fontSize: '1.2rem' }}>{result.diagnosis}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </PostPage>
    )
}
