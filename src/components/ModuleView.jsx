import { useState } from 'react'
import Quiz from './exercises/Quiz'
import LRExercise from './exercises/LRExercise'
import MatrixSim from './exercises/MatrixSim'
import FeedForward from './exercises/FeedForward'
import GradeDecision from './exercises/GradeDecision'
import Planning from './exercises/Planning'
import CaseExercise from './exercises/CaseExercise'
import { QUIZ_1, QUIZ_2 } from '../data/exercises'

export default function ModuleView({
  module, isSectionDone, onSectionDone,
  reflections, onSaveReflection,
  exercises, onExerciseDone,
  onBack, modules, onOpenModule
}) {
  const [sectionIdx, setSectionIdx] = useState(0)
  const section = module.sections[sectionIdx]

  const goNext = () => {
    if (sectionIdx < module.sections.length - 1) {
      setSectionIdx(sectionIdx + 1)
      window.scrollTo(0, 0)
    }
  }
  const goPrev = () => {
    if (sectionIdx > 0) {
      setSectionIdx(sectionIdx - 1)
      window.scrollTo(0, 0)
    }
  }

  const markDone = () => onSectionDone(module.id, section.id)
  const sectionDone = isSectionDone(module.id, section.id)

  // Find next module
  const modIdx = modules.findIndex(m => m.id === module.id)
  const nextModule = modIdx < modules.length - 1 ? modules[modIdx + 1] : null

  const allSectionsDone = module.sections.every(s => isSectionDone(module.id, s.id))

  return (
    <div>
      <div className="app-header">
        <button className="module-back-btn" onClick={onBack} title="Tillbaka">←</button>
        <div className="logo" style={{ flex: 1, textAlign: 'center', fontSize: '.95rem' }}>
          Modul {module.id} – {module.title}
        </div>
        <div style={{ width: 40 }} />
      </div>

      <div className="module-page">
        {/* Section nav pills */}
        <div className="section-nav">
          {module.sections.map((s, i) => (
            <button
              key={s.id}
              className={`section-nav-btn${i === sectionIdx ? ' active' : ''}${isSectionDone(module.id, s.id) ? ' done' : ''}`}
              onClick={() => { setSectionIdx(i); window.scrollTo(0, 0) }}
            >
              {isSectionDone(module.id, s.id) ? '✓ ' : ''}{s.title}
            </button>
          ))}
        </div>

        {/* Section content */}
        <SectionContent
          section={section}
          moduleId={module.id}
          isSectionDone={sectionDone}
          onSectionDone={markDone}
          reflections={reflections}
          onSaveReflection={onSaveReflection}
          exercises={exercises}
          onExerciseDone={onExerciseDone}
        />

        {/* Footer navigation */}
        <div className="module-nav-footer">
          <button
            className="btn btn-ghost"
            onClick={goPrev}
            disabled={sectionIdx === 0}
            style={{ visibility: sectionIdx === 0 ? 'hidden' : 'visible' }}
          >
            ← Föregående
          </button>

          {sectionIdx < module.sections.length - 1 ? (
            <button className="btn btn-secondary" onClick={goNext}>
              Nästa avsnitt →
            </button>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '.5rem' }}>
              {allSectionsDone && nextModule && (
                <button className="btn btn-primary" onClick={() => { onOpenModule(nextModule) }}>
                  Nästa modul: {nextModule.title} →
                </button>
              )}
              {allSectionsDone && !nextModule && (
                <button className="btn btn-primary" onClick={onBack}>
                  🏆 Alla moduler klara – till startsidan
                </button>
              )}
              {!allSectionsDone && (
                <button className="btn btn-outline" onClick={onBack}>
                  Tillbaka till start
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function SectionContent({ section, moduleId, isSectionDone, onSectionDone, reflections, onSaveReflection, exercises, onExerciseDone }) {
  switch (section.type) {
    case 'theory':
      return <TheorySection section={section} isSectionDone={isSectionDone} onSectionDone={onSectionDone} />

    case 'reflection':
      return (
        <ReflectionSection
          section={section}
          value={reflections[section.key] || ''}
          onSave={onSaveReflection}
          isSectionDone={isSectionDone}
          onSectionDone={onSectionDone}
        />
      )

    case 'quiz1':
      return (
        <ExerciseSection title="Quiz" isSectionDone={isSectionDone} onSectionDone={onSectionDone}>
          <Quiz quiz={QUIZ_1} exerciseKey="quiz1" exercises={exercises} onExerciseDone={onExerciseDone} />
        </ExerciseSection>
      )

    case 'quiz2':
      return (
        <ExerciseSection title="Quiz" isSectionDone={isSectionDone} onSectionDone={onSectionDone}>
          <Quiz quiz={QUIZ_2} exerciseKey="quiz2" exercises={exercises} onExerciseDone={onExerciseDone} />
        </ExerciseSection>
      )

    case 'lr_exercise':
      return (
        <ExerciseSection title="Övning: Läranderesultat" isSectionDone={isSectionDone} onSectionDone={onSectionDone}>
          <LRExercise exerciseKey={`lr_ex_${moduleId}`} exercises={exercises} onExerciseDone={onExerciseDone} />
        </ExerciseSection>
      )

    case 'matrix_sim':
      return (
        <ExerciseSection title="Övning: Bedömningskriterier" isSectionDone={isSectionDone} onSectionDone={onSectionDone}>
          <MatrixSim exerciseKey={`matrix_sim_${moduleId}`} exercises={exercises} onExerciseDone={onExerciseDone} />
        </ExerciseSection>
      )

    case 'feedforward':
      return (
        <ExerciseSection title="Övning: Feed-forward" isSectionDone={isSectionDone} onSectionDone={onSectionDone}>
          <FeedForward exerciseKey={`ff_${moduleId}`} exercises={exercises} onExerciseDone={onExerciseDone} />
        </ExerciseSection>
      )

    case 'grade_decision':
      return (
        <ExerciseSection title="Övning: Betygsbeslut" isSectionDone={isSectionDone} onSectionDone={onSectionDone}>
          <GradeDecision exerciseKey={`grade_${moduleId}`} exercises={exercises} onExerciseDone={onExerciseDone} />
        </ExerciseSection>
      )

    case 'planning':
      return (
        <ExerciseSection title="Övning: Planera formativ bedömning" isSectionDone={isSectionDone} onSectionDone={onSectionDone}>
          <Planning exerciseKey={`planning_${moduleId}`} exercises={exercises} onExerciseDone={onExerciseDone} />
        </ExerciseSection>
      )

    case 'case':
      return (
        <ExerciseSection title="Fallstudie" isSectionDone={isSectionDone} onSectionDone={onSectionDone}>
          <CaseExercise exerciseKey={`case_${moduleId}`} exercises={exercises} onExerciseDone={onExerciseDone} />
        </ExerciseSection>
      )

    default:
      return (
        <div className="section-card">
          <p style={{ color: 'var(--muted)' }}>Innehåll för avsnitt: {section.title}</p>
          {!isSectionDone && (
            <button className="btn btn-secondary" style={{ marginTop: '1rem' }} onClick={onSectionDone}>
              Markera som klar
            </button>
          )}
        </div>
      )
  }
}

function TheorySection({ section, isSectionDone, onSectionDone }) {
  return (
    <div className="section-card">
      <h2 style={{ fontSize: '1.25rem', color: 'var(--teal-dark)', marginBottom: '1.25rem' }}>{section.title}</h2>
      <div
        className="theory-content"
        dangerouslySetInnerHTML={{ __html: section.html }}
      />
      <div className="section-done-btn">
        {isSectionDone ? (
          <span className="done-label">✓ Avsnittet är klart</span>
        ) : (
          <button className="btn btn-secondary" onClick={onSectionDone}>
            Markera som läst ✓
          </button>
        )}
      </div>
    </div>
  )
}

function ReflectionSection({ section, value, onSave, isSectionDone, onSectionDone }) {
  const [text, setText] = useState(value)
  const [saved, setSaved] = useState(false)

  const handleSave = async () => {
    await onSave(section.key, text)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
    if (!isSectionDone && text.trim()) onSectionDone()
  }

  return (
    <div className="reflection-box">
      <h3>💭 {section.title}</h3>
      <p style={{ color: 'var(--muted)', marginBottom: '1rem', fontSize: '.95rem' }}>{section.prompt}</p>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Skriv din reflektion här…"
      />
      <div className="reflection-save-row">
        <button className="btn btn-secondary" onClick={handleSave} disabled={!text.trim()}>
          Spara reflektion
        </button>
        {saved && <span className="saved-label">✓ Sparad</span>}
        {isSectionDone && !saved && <span className="saved-label">✓ Klar</span>}
      </div>
    </div>
  )
}

function ExerciseSection({ title, isSectionDone, onSectionDone, children }) {
  return (
    <div className="section-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
        <h2 style={{ fontSize: '1.15rem', color: 'var(--teal-dark)' }}>🔧 {title}</h2>
        {isSectionDone && <span className="done-label" style={{ background: 'var(--teal)', color: '#fff', padding: '.2rem .7rem', borderRadius: '20px', fontSize: '.8rem' }}>✓ Klar</span>}
      </div>
      {children}
      {!isSectionDone && (
        <div style={{ marginTop: '1.5rem' }}>
          <button className="btn btn-outline" onClick={onSectionDone}>
            Markera övning som klar
          </button>
        </div>
      )}
    </div>
  )
}
