import { useState } from 'react'
import { LR_ITEMS } from '../../data/exercises'

export default function LRExercise({ exerciseKey, exercises, onExerciseDone }) {
  const [revealed, setRevealed] = useState(false)
  const alreadyDone = exercises.includes(exerciseKey)

  const handleReveal = () => {
    setRevealed(true)
    onExerciseDone(exerciseKey)
  }

  return (
    <div className="exercise-card">
      <h3>Identifiera bedömningsbara läranderesultat</h3>
      <p style={{ marginBottom: '1rem', fontSize: '.9rem', color: 'var(--muted)' }}>
        Nedan ser du ett urval av formuleringar från kursplaner. Fundera på vilka som är <em>bedömningsbara läranderesultat</em> och vilka som är aktivitetsmål.
      </p>
      {LR_ITEMS.map((item, i) => (
        <div
          key={i}
          className={`lr-item${revealed ? (item.bedömbar ? ' bedömbar' : ' not-bedömbar') : ''}`}
        >
          <div className={`lr-dot${revealed ? (item.bedömbar ? ' bedömbar' : ' not-bedömbar') : ''}`} />
          <span style={{ fontSize: '.9rem' }}>{item.text}</span>
          {revealed && (
            <span style={{ marginLeft: 'auto', fontWeight: 700, fontSize: '.8rem', flexShrink: 0, paddingLeft: '.5rem' }}>
              {item.bedömbar
                ? <span style={{ color: 'var(--teal-dark)' }}>✓ Bedömningsbart</span>
                : <span style={{ color: 'var(--muted)' }}>Aktivitetsmål</span>}
            </span>
          )}
        </div>
      ))}
      {!revealed && (
        <button className="btn btn-secondary" style={{ marginTop: '1rem' }} onClick={handleReveal}>
          Visa svar
        </button>
      )}
      {revealed && (
        <div className="quiz-feedback ok" style={{ marginTop: '1rem' }}>
          De bedömningsbara läranderesultaten beskriver vad studenten ska <strong>kunna göra</strong> – de är observerbara och mätbara. Aktivitetsmål beskriver vad studenten ska göra under kursen, men kan inte direkt bedömas.
        </div>
      )}
    </div>
  )
}
