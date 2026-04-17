import { useState } from 'react'
import { CASE_MOD4 } from '../../data/exercises'

export default function CaseExercise({ exerciseKey, exercises, onExerciseDone }) {
  const [chosen, setChosen] = useState(null)
  const c = CASE_MOD4

  const handle = (opt) => {
    if (chosen) return
    setChosen(opt)
    if (opt.correct) onExerciseDone(exerciseKey)
    else onExerciseDone(exerciseKey) // mark done regardless
  }

  return (
    <div className="exercise-card">
      <h3>Fallstudie: Primär vs. sekundär dokumentation</h3>
      <div className="ff-original" style={{ marginBottom: '1rem' }}>
        {c.scenario}
      </div>
      <p style={{ fontWeight: 600, marginBottom: '.75rem' }}>{c.question}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
        {c.options.map((opt, i) => {
          let cls = 'quiz-option'
          if (chosen) {
            if (opt === chosen) cls += opt.correct ? ' correct' : ' wrong'
            else if (opt.correct) cls += ' correct'
          }
          return (
            <button key={i} className={cls} onClick={() => handle(opt)} disabled={!!chosen}>
              {opt.text}
            </button>
          )
        })}
      </div>
      {chosen && (
        <div className={`quiz-feedback ${chosen.correct ? 'ok' : 'bad'}`} style={{ marginTop: '1rem' }}>
          {chosen.feedback}
        </div>
      )}
    </div>
  )
}
