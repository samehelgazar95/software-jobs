import supabaseClient from '@/lib/supabase';

export async function getJobs(token) {
  const supabase = await supabaseClient(token);

  const { data, error } = await supabase.from('jobs').select('*');

  if (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }

  return data;
}
