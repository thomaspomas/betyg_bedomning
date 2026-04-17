import { useState } from 'react'
import { PLANNING_OPTIONS } from '../../data/exercises'

export default function Planning({ exerciseKey, exercises, onExerciseDone }) {
  const [open, setOpen] = useState(null)

  const handleOpen = (i) => {
    const next = open === i ? null : i
    setOpen(next)
    if (next !== null) onExerciseDone(exerciseKey)
  }

  return (
    <div className="exercise-card">
      <h3>Planera formativ bedömning</h3>
      <p style={{ marginBottom: '1rem', fontSize: '.9rem', color: 'var(--muted)' }}>
        Välj ett alternativ för att se hur du kan implementera det i din kurs.
      </p>
      <div className="planning-grid">
        {PLANNING_OPTIONS.map((opt, i) => (
          <div key={i} className="planning-card">
            <div className="planning-card-head" onClick={() => handleOpen(i)}>
              <span>{opt.title}</span>
              <span>{open === i ? '▲' : '▼'}</span>
            </div>
            {open === i && (
              <div className="planning-card-body">
                <p style={{ marginBottom: '.75rem', color: 'var(--muted)', fontSize: '.88rem' }}>{opt.desc}</p>
                <strong style={{ fontSize: '.9rem' }}>Så här gör du:</strong>
                <div dangerouslySetInnerHTML={{ __html: opt.how }} style={{ marginTop: '.5rem' }} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
