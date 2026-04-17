import { useState, useEffect } from 'react'
import { supabase } from './lib/supabase'
import { getProgress, getReflections, getExercises, markSectionDone, saveReflection, markExerciseDone, getProfile, upsertProfile } from './lib/db'
import { MODULES } from './data/modules'
import Login from './components/Login'
import Home from './components/Home'
import ModuleView from './components/ModuleView'
import Completion from './components/Completion'
import Diploma from './components/Diploma'

export default function App() {
  const [session, setSession] = useState(null)
  const [profile, setProfile] = useState(null)
  const [view, setView] = useState('home') // 'home' | 'module' | 'completion'
  const [activeModule, setActiveModule] = useState(null)
  const [progress, setProgress] = useState([]) // [{module_id, section_id}]
  const [reflections, setReflections] = useState({}) // {key: content}
  const [exercises, setExercises] = useState([]) // [exercise_key]
  const [showDiploma, setShowDiploma] = useState(false)
  const [loading, setLoading] = useState(true)

  // Auth listener
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
    return () => subscription.unsubscribe()
  }, [])

  // Load user data when session changes
  useEffect(() => {
    if (!session) {
      setLoading(false)
      return
    }
    const userId = session.user.id
    Promise.all([getProfile(userId), getProgress(userId), getReflections(userId), getExercises(userId)])
      .then(([prof, prog, refs, exs]) => {
        setProfile(prof)
        setProgress(prog)
        const refMap = {}
        refs.forEach(r => { refMap[r.reflection_key] = r.content })
        setReflections(refMap)
        setExercises(exs.map(e => e.exercise_key))
      })
      .finally(() => setLoading(false))
  }, [session])

  const handleLogin = async (name, org) => {
    const userId = session.user.id
    await upsertProfile(userId, name, org)
    setProfile({ name, organisation: org })
  }

  const isSectionDone = (moduleId, sectionId) =>
    progress.some(p => p.module_id === moduleId && p.section_id === sectionId)

  const handleSectionDone = async (moduleId, sectionId) => {
    if (isSectionDone(moduleId, sectionId)) return
    const userId = session.user.id
    await markSectionDone(userId, moduleId, sectionId)
    setProgress(prev => [...prev, { module_id: moduleId, section_id: sectionId }])
  }

  const handleSaveReflection = async (key, content) => {
    const userId = session.user.id
    await saveReflection(userId, key, content)
    setReflections(prev => ({ ...prev, [key]: content }))
  }

  const handleExerciseDone = async (key) => {
    if (exercises.includes(key)) return
    const userId = session.user.id
    await markExerciseDone(userId, key)
    setExercises(prev => [...prev, key])
  }

  const getModuleProgress = (moduleId) => {
    const mod = MODULES.find(m => m.id === moduleId)
    if (!mod) return 0
    const total = mod.sections.length
    const done = mod.sections.filter(s => isSectionDone(moduleId, s.id)).length
    return total > 0 ? Math.round((done / total) * 100) : 0
  }

  const allModulesDone = MODULES.every(m => getModuleProgress(m.id) === 100)

  const openModule = (mod) => {
    setActiveModule(mod)
    setView('module')
    window.scrollTo(0, 0)
  }

  const goHome = () => {
    setView('home')
    setActiveModule(null)
    window.scrollTo(0, 0)
  }

  const goCompletion = () => {
    setView('completion')
    window.scrollTo(0, 0)
  }

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner" />
      </div>
    )
  }

  if (!session) {
    return <Login onLogin={(name, org) => handleLogin(name, org)} supabase={supabase} />
  }

  if (!profile) {
    return <Login onLogin={handleLogin} supabase={supabase} profileOnly />
  }

  return (
    <div className="app">
      {showDiploma && (
        <Diploma
          name={profile?.name}
          org={profile?.organisation}
          onClose={() => setShowDiploma(false)}
        />
      )}

      {view === 'home' && (
        <Home
          profile={profile}
          modules={MODULES}
          getModuleProgress={getModuleProgress}
          allModulesDone={allModulesDone}
          onOpenModule={openModule}
          onOpenDiploma={() => setShowDiploma(true)}
          onCompletion={goCompletion}
        />
      )}

      {view === 'module' && activeModule && (
        <ModuleView
          module={activeModule}
          isSectionDone={isSectionDone}
          onSectionDone={handleSectionDone}
          reflections={reflections}
          onSaveReflection={handleSaveReflection}
          exercises={exercises}
          onExerciseDone={handleExerciseDone}
          onBack={goHome}
          modules={MODULES}
          onOpenModule={openModule}
        />
      )}

      {view === 'completion' && (
        <Completion
          profile={profile}
          onHome={goHome}
          onDiploma={() => setShowDiploma(true)}
        />
      )}
    </div>
  )
}
