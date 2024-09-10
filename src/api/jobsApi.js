import supabaseClient from '@/lib/supabase';

export async function getJobs(
  token,
  { filterTitle, filterSearchQuery, filterCompanyId, filterCountry, filterCity }
) {
  const supabase = await supabaseClient(token);

  let query = supabase.from('jobs').select('*');

  if (filterTitle) query = query.eq('title', filterTitle.toLowerCase());
  if (filterCompanyId) query = query.eq('company_id', filterCompanyId);
  if (filterCountry) query = query.eq('country', filterCountry);
  if (filterCity) query = query.eq('city', filterCity);
  if (filterSearchQuery)
    query = query.ilike('title', `%${filterSearchQuery.toLowerCase()}%`);

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }

  return data;
}
