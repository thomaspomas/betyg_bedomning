import { useState } from 'react'
import { GRADE_DECISION } from '../../data/exercises'

export default function GradeDecision({ exerciseKey, exercises, onExerciseDone }) {
  const [chosen, setChosen] = useState(null)
  const d = GRADE_DECISION

  const handle = (grade) => {
    if (chosen) return
    setChosen(grade)
    onExerciseDone(exerciseKey)
  }

  const gradeClass = (g) => g === 'VG' ? 'grade-vg' : g === 'G' ? 'grade-g' : 'grade-ig'

  let feedback = null
  if (chosen === 'IG') feedback = { ok: true, text: d.feedbackIG }
  else if (chosen === 'G') feedback = { ok: false, text: d.feedbackG }
  else if (chosen === 'VG') feedback = { ok: false, text: d.feedbackVG }

  return (
    <div className="exercise-card">
      <h3>Fatta betygsbeslut – {d.student}</h3>
      <p style={{ fontSize: '.9rem', color: 'var(--muted)', marginBottom: '1rem' }}>
        Kurs: <strong>{d.course}</strong>. Granska resultaten och fatta ett betygsbeslut.
      </p>
      <table className="grade-table">
        <thead>
          <tr>
            <th>Moment</th>
            <th>Kriterium</th>
            <th>Betyg</th>
            <th>Kommentar</th>
          </tr>
        </thead>
        <tbody>
          {d.moments.map((m, i) => (
            <tr key={i}>
              <td>{m.name}</td>
              <td style={{ fontSize: '.85rem' }}>{m.criterion}</td>
              <td className={gradeClass(m.grade)}>{m.grade}</td>
              <td style={{ fontSize: '.85rem' }}>{m.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{ marginBottom: '.75rem', fontWeight: 600 }}>Vilket kursbetyg ska {d.student} ha?</p>
      <div className="grade-btns">
        <button className="grade-btn ig" onClick={() => handle('IG')} disabled={!!chosen}>IG</button>
        <button className="grade-btn g"  onClick={() => handle('G')}  disabled={!!chosen}>G</button>
        <button className="grade-btn vg" onClick={() => handle('VG')} disabled={!!chosen}>VG</button>
      </div>
      {feedback && (
        <div className={`quiz-feedback ${feedback.ok ? 'ok' : 'bad'}`} style={{ marginTop: '1rem' }}>
          {feedback.text}
        </div>
      )}
    </div>
  )
}
