import { supabase } from './supabase'

// ---------- PROFILE ----------
export async function getProfile(userId) {
  const { data } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('id', userId)
    .single()
  return data
}

export async function upsertProfile(userId, name, organisation) {
  await supabase.from('user_profiles').upsert({ id: userId, name, organisation })
}

// ---------- PROGRESS ----------
export async function getProgress(userId) {
  const { data } = await supabase
    .from('user_progress')
    .select('module_id, section_id')
    .eq('user_id', userId)
  return data || []
}

export async function markSectionDone(userId, moduleId, sectionId) {
  await supabase.from('user_progress').upsert(
    { user_id: userId, module_id: moduleId, section_id: sectionId },
    { onConflict: 'user_id,module_id,section_id' }
  )
}

// ---------- REFLECTIONS ----------
export async function getReflections(userId) {
  const { data } = await supabase
    .from('user_reflections')
    .select('reflection_key, content')
    .eq('user_id', userId)
  return data || []
}

export async function saveReflection(userId, key, content) {
  await supabase.from('user_reflections').upsert(
    { user_id: userId, reflection_key: key, content, updated_at: new Date().toISOString() },
    { onConflict: 'user_id,reflection_key' }
  )
}

// ---------- EXERCISES ----------
export async function getExercises(userId) {
  const { data } = await supabase
    .from('user_exercises')
    .select('exercise_key')
    .eq('user_id', userId)
  return data || []
}

export async function markExerciseDone(userId, key) {
  await supabase.from('user_exercises').upsert(
    { user_id: userId, exercise_key: key },
    { onConflict: 'user_id,exercise_key' }
  )
}
