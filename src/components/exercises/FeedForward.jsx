import { useState } from 'react'
import { FF_QUESTIONS } from '../../data/exercises'

export default function FeedForward({ exerciseKey, exercises, onExerciseDone }) {
  const [answers, setAnswers] = useState({})

  const handleSelect = (qIdx, opt) => {
    if (answers[qIdx] !== undefined) return
    const next = { ...answers, [qIdx]: opt }
    setAnswers(next)
    if (Object.keys(next).length === FF_QUESTIONS.length) {
      onExerciseDone(exerciseKey)
    }
  }

  return (
    <div className="exercise-card">
      <h3>Omvandla feedback till feed-forward</h3>
      <p style={{ marginBottom: '1.25rem', fontSize: '.9rem', color: 'var(--muted)' }}>
        Här ser du exempel på feedback som lärare gett. Välj det svar som bäst omvandlar det till konkret feed-forward.
      </p>
      {FF_QUESTIONS.map((q, qIdx) => (
        <div key={qIdx} style={{ marginBottom: '1.5rem' }}>
          <p style={{ fontSize: '.85rem', color: 'var(--muted)', marginBottom: '.25rem' }}>
            Originalfeedback:
          </p>
          <div className="ff-original">{q.original}</div>
          <p style={{ fontSize: '.85rem', color: 'var(--muted)', marginBottom: '.5rem' }}>
            Vilket alternativ är bäst feed-forward?
          </p>
          <div className="ff-options">
            {q.options.map((opt, oIdx) => {
              const answered = answers[qIdx] !== undefined
              let cls = 'ff-option'
              if (answered) {
                if (opt === answers[qIdx]) cls += opt.correct ? ' correct' : ' wrong'
                else if (opt.correct) cls += ' correct'
              }
              return (
                <button
                  key={oIdx}
                  className={cls}
                  onClick={() => handleSelect(qIdx, opt)}
                  disabled={answered}
                >
                  {opt.text}
                </button>
              )
            })}
          </div>
          {answers[qIdx] && (
            <div className={`quiz-feedback ${answers[qIdx].correct ? 'ok' : 'bad'}`} style={{ marginTop: '.5rem' }}>
              {answers[qIdx].correct
                ? 'Rätt! Det är konkret, handlingsorienterat och pekar framåt.'
                : 'Det alternativet är antingen för vagt eller ger inte studenten något konkret att arbeta med.'}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
