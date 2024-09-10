import { useEffect, useState } from 'react';
import JobsFilters from '@/components/jobs/JobsFilters';
import AvailableJobs from '@/components/jobs/AvailableJobs';
import { jobs } from '@/lib/data';
import { useSession } from '@clerk/clerk-react';
import { getJobs } from '@/api/jobsApi';

export default function Jobs() {
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [filterValue, setFilterValue] = useState('');
  const { session } = useSession();

  const fetchJobs = async () => {
    if (session) {
      console.log(session);
      const token = await session.getToken({
        template: 'supabase',
      });
      console.log(token);
      const data = await getJobs(token);
      console.log(data);
    } else {
      console.log('No session');
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [session]);

  return (
    <div>
      <JobsFilters
        setFilterValue={setFilterValue}
        setFilteredJobs={setFilteredJobs}
      />

      {filteredJobs.length > 0 ? (
        <AvailableJobs filteredJobs={filteredJobs} />
      ) : (
        <h2 className="bg-red-300 w-3/4 text-center font-semibold text-xl py-4 mx-auto text-slate-800 rounded-xl">
          No available jobs for{' '}
          <span className="text-black underline underline-offset-4 decoration-4 decoration-green-500">
            {filterValue}
          </span>{' '}
          role.
        </h2>
      )}
    </div>
  );
}
