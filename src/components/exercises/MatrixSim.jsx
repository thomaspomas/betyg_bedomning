import { useState } from 'react'
import { MATRIX_CRITERIA } from '../../data/exercises'

export default function MatrixSim({ exerciseKey, exercises, onExerciseDone }) {
  const [revealed, setRevealed] = useState({})

  const handleReveal = (i) => {
    setRevealed(prev => {
      const next = { ...prev, [i]: true }
      if (Object.keys(next).length === MATRIX_CRITERIA.length) {
        onExerciseDone(exerciseKey)
      }
      return next
    })
  }

  return (
    <div className="exercise-card">
      <h3>Bedöm bedömningskriterierna</h3>
      <p style={{ marginBottom: '1rem', fontSize: '.9rem', color: 'var(--muted)' }}>
        Klicka på varje kriterium för att se om det är välformulerat – och varför.
      </p>
      {MATRIX_CRITERIA.map((item, i) => (
        <div
          key={i}
          className={`matrix-item${revealed[i] ? (item.ok ? ' ok-revealed' : ' bad-revealed') : ''} ${revealed[i] ? 'revealed' : ''}`}
          onClick={() => !revealed[i] && handleReveal(i)}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '.5rem' }}>
            <span style={{ fontSize: '.9rem' }}>{item.text}</span>
            {!revealed[i] && (
              <span style={{ fontSize: '.75rem', color: 'var(--orange)', flexShrink: 0, fontWeight: 600 }}>Klicka</span>
            )}
            {revealed[i] && (
              <span style={{ fontSize: '.8rem', fontWeight: 700, flexShrink: 0 }}>
                {item.ok
                  ? <span style={{ color: 'var(--teal-dark)' }}>✓ Bra</span>
                  : <span style={{ color: '#e67e22' }}>⚠ Förbättra</span>}
              </span>
            )}
          </div>
          {revealed[i] && <div className="matrix-tip">{item.tip}</div>}
        </div>
      ))}
    </div>
  )
}
