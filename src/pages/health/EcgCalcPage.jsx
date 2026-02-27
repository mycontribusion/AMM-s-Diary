import { useState } from 'react'
import PostPage from '../../components/PostPage'

const cat = { label: 'Health', path: '/health', icon: '🩺', accent: '#3b82f6' }

export default function EcgCalcPage() {
  const [wave, setWave] = useState('pWave')
  const [measurementType, setMeasurementType] = useState('none')
  const [valueType, setValueType] = useState('none')
  const [value, setValue] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const interpretECG = () => {
    let numericalValue = parseFloat(value)

    if (isNaN(numericalValue)) {
      setError('Please enter a valid numerical value.')
      setResult(null)
      return
    }

    if (valueType === 'smallSquares') {
      if (measurementType === 'duration') numericalValue *= 0.04
      if (measurementType === 'voltage') numericalValue *= 0.1
    } else if (valueType === 'largeSquares') {
      if (measurementType === 'duration') numericalValue *= 0.20
      if (measurementType === 'voltage') numericalValue *= 0.5
    }

    let interpretation = ''
    let isNormal = false

    if (measurementType === 'duration') {
      if (wave === 'pWave') {
        isNormal = numericalValue >= 0.08 && numericalValue <= 0.12
        interpretation = `P Wave Duration: ${isNormal ? 'Normal (0.08 - 0.12 sec)' : 'Abnormal'}`
      } else if (wave === 'qrsWave') {
        isNormal = numericalValue >= 0.06 && numericalValue <= 0.10
        interpretation = `QRS Duration: ${isNormal ? 'Normal (0.06 - 0.10 sec)' : 'Abnormal'}`
      } else if (wave === 'qtInterval') {
        isNormal = numericalValue >= 0.36 && numericalValue <= 0.44
        interpretation = `QT Interval: ${isNormal ? 'Normal (0.36 - 0.44 sec)' : 'Abnormal'}`
      } else {
        interpretation = `No duration criteria available for selected wave.`
      }
    } else if (measurementType === 'voltage') {
      if (wave === 'pWave') {
        isNormal = numericalValue >= 0.1 && numericalValue <= 0.3
        interpretation = `P Wave Amplitude: ${isNormal ? 'Normal (0.1 - 0.3 mV)' : 'Abnormal'}`
      } else if (wave === 'qrsWave') {
        isNormal = numericalValue >= 0.5 && numericalValue <= 2.0
        interpretation = `QRS Amplitude: ${isNormal ? 'Normal (0.5 - 2.0 mV)' : 'Abnormal'}`
      } else if (wave === 'tWave') {
        isNormal = numericalValue >= 0.1 && numericalValue <= 0.3
        interpretation = `T Wave Amplitude: ${isNormal ? 'Normal (0.1 - 0.3 mV)' : 'Abnormal'}`
      } else {
        interpretation = `No voltage criteria available for selected wave.`
      }
    } else {
      setError('Please select a measurement type.')
      setResult(null)
      return
    }

    setError('')
    setResult({ text: interpretation, isNormal })
  }

  return (
    <PostPage title="ECG Wave Interpretation" category={cat}>
      <div className="calc-page fade-in">
        <div className="calc-card">
          <div className="calc-card__header">
            <h1>ECG Wave Interpretation</h1>
            <p>Select a wave and enter value to check if it's normal</p>
          </div>
          <div className="calc-card__body">

            <div className="calc-field">
              <label>Select Wave</label>
              <select value={wave} onChange={(e) => setWave(e.target.value)}>
                <option value="pWave">P Wave</option>
                <option value="qrsWave">QRS Complex</option>
                <option value="tWave">T Wave</option>
                <option value="prInterval">PR Interval</option>
                <option value="stSegment">ST Segment</option>
                <option value="qtInterval">QT Interval</option>
              </select>
            </div>

            <div className="calc-field" style={{ marginTop: '8px' }}>
              <label>Select Measurement</label>
              <select value={measurementType} onChange={(e) => {
                setMeasurementType(e.target.value)
                setValueType('none')
              }}>
                <option value="none">Select</option>
                <option value="duration">Duration</option>
                <option value="voltage">Amplitude</option>
              </select>
            </div>

            {measurementType !== 'none' && (
              <div className="calc-field-row" style={{ marginTop: '16px' }}>
                <div className="calc-field">
                  <label>Select Unit</label>
                  <select value={valueType} onChange={(e) => setValueType(e.target.value)}>
                    <option value="none">Select</option>
                    {measurementType === 'duration' ? (
                      <>
                        <option value="seconds">Seconds</option>
                        <option value="smallSquares">Small Squares</option>
                        <option value="largeSquares">Large Squares</option>
                      </>
                    ) : (
                      <>
                        <option value="millivolts">Millivolts</option>
                        <option value="smallSquares">Small Squares</option>
                        <option value="largeSquares">Large Squares</option>
                      </>
                    )}
                  </select>
                </div>

                <div className="calc-field">
                  <label>Enter Value</label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="e.g. 1.2"
                  />
                </div>
              </div>
            )}

            <button className="btn-calc" onClick={interpretECG} style={{ marginTop: '16px' }}>
              Interpret ECG
            </button>

            {error && <div className="calc-result error fade-in">{error}</div>}
            {result && !error && (
              <div className={`calc-result ${!result.isNormal ? 'error' : ''} fade-in`}>
                <span style={{ fontSize: '1.1rem' }}>{result.text}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </PostPage>
  )
}
