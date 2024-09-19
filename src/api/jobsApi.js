import supabaseClient from '@/lib/supabase';

export async function getJobs(token, { searchQuery, company_id, country }) {
  const supabase = await supabaseClient(token);

  let query = supabase
    .from('jobs')
    .select('*, company: companies(name, logo_url), saved: saved_jobs(id)');

  if (searchQuery)
    query = query.ilike('title', `%${searchQuery.toLowerCase()}%`);
  if (country) query = query.eq('country', country.toLowerCase());
  if (company_id) query = query.eq('company_id', company_id);

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }

  return data;
}

// - Add / Remove Saved Job
export async function saveJob(token, { alreadySaved }, saveData) {
  const supabase = await supabaseClient(token);

  if (alreadySaved) {
    // If the job is already saved, remove it
    const { data, error: deleteError } = await supabase
      .from('saved_jobs')
      .delete()
      .eq('job_id', saveData.job_id);

    if (deleteError) {
      console.error('Error removing saved job:', deleteError);
      return data;
    }

    return data;
  } else {
    // If the job is not saved, add it to saved jobs
    const { data, error: insertError } = await supabase
      .from('saved_jobs')
      .insert([saveData])
      .select();

    if (insertError) {
      console.error('Error saving job:', insertError);
      return data;
    }

    return data;
  }
}

// Read single job
export async function getSingleJob(token, { job_id }) {
  const supabase = await supabaseClient(token);
  let query = supabase
    .from('jobs')
    .select(
      '*, company: companies(name,logo_url), applications: applications(*)'
    )
    .eq('id', job_id)
    .single();

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching Job:', error);
    return error;
  }

  return data;
}

// - job isOpen toggle - (recruiter_id = auth.uid())
export async function updateHiringStatus(token, { job_id }, is_open) {
  const supabase = await supabaseClient(token);
  const { data, error } = await supabase
    .from('jobs')
    .update({ is_open })
    .eq('id', job_id)
    .select();

  if (error) {
    console.error('Error Updating Hiring Status:', error);
    return null;
  }

  return data;
}

// Delete job
export async function deleteJob(token, { job_id }) {
  const supabase = await supabaseClient(token);

  const { data, error: deleteError } = await supabase
    .from('jobs')
    .delete()
    .eq('id', job_id)
    .select();

  if (deleteError) {
    console.error('Error deleting job:', deleteError);
    return data;
  }

  return data;
}

// - post job
export async function addNewJob(token, _, jobData) {
  const supabase = await supabaseClient(token);

  const { data, error } = await supabase
    .from('jobs')
    .insert([jobData])
    .select();

  if (error) {
    console.error(error);
    throw new Error('Error Creating Job');
  }

  return data;
}

// Read Saved Jobs
export async function getSavedJobs(token) {
  const supabase = await supabaseClient(token);
  const { data, error } = await supabase
    .from('saved_jobs')
    .select('*, job: jobs(*, company: companies(name,logo_url))');

  if (error) {
    console.error('Error fetching Saved Jobs:', error);
    return null;
  }

  return data;
}

// get my created jobs
export async function getMyJobs(token, { recruiter_id }) {
  const supabase = await supabaseClient(token);

  const { data, error } = await supabase
    .from('jobs')
    .select('*, company: companies(name,logo_url)')
    .eq('recruiter_id', recruiter_id);

  if (error) {
    console.error('Error fetching Jobs:', error);
    return null;
  }

  return data;
}
