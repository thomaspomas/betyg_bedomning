import { useState } from 'react'

export default function Quiz({ quiz, exerciseKey, exercises, onExerciseDone }) {
  const [selected, setSelected] = useState(null)
  const answered = selected !== null
  const alreadyDone = exercises.includes(exerciseKey)

  const handleSelect = (opt) => {
    if (answered) return
    setSelected(opt)
    if (opt.correct) onExerciseDone(exerciseKey)
  }

  return (
    <div className="exercise-card">
      <h3>{quiz.question}</h3>
      <div className="quiz-options">
        {quiz.options.map((opt, i) => {
          let cls = 'quiz-option'
          if (answered) {
            if (opt === selected) cls += opt.correct ? ' correct' : ' wrong'
            else if (opt.correct) cls += ' correct'
          }
          return (
            <button key={i} className={cls} onClick={() => handleSelect(opt)} disabled={answered}>
              {opt.text}
            </button>
          )
        })}
      </div>
      {answered && (
        <div className={`quiz-feedback ${selected.correct ? 'ok' : 'bad'}`}>
          {selected.correct ? quiz.feedbackCorrect : quiz.feedbackWrong}
        </div>
      )}
      {!answered && alreadyDone && (
        <p style={{ fontSize: '.85rem', color: 'var(--muted)', marginTop: '.5rem' }}>Du har svarat på denna quiz tidigare.</p>
      )}
    </div>
  )
}
