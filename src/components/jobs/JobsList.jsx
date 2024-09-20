import { getJobs } from '@/api/jobsApi';
import useFetch from '@/hooks/useFetch';
import { useEffect } from 'react';

export default function JobsList() {
  const { loading: loadingJobs, data: jobs, fn: fnJobs } = useFetch(getJobs);

  useEffect(() => {
    fnJobs();
  }, []);

  console.log(jobs);

  return <div></div>;
}
