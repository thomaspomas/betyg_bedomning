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
  const { error } = await supabase.rpc('mark_course_section_done', {
    p_module_id: moduleId,
    p_section_id: sectionId,
  })
  if (error) throw error
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
  const { error } = await supabase.rpc('save_course_reflection', {
    p_reflection_key: key,
    p_content: content,
  })
  if (error) throw error
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
  const { error } = await supabase.rpc('mark_course_exercise_done', {
    p_exercise_key: key,
  })
  if (error) throw error
}
