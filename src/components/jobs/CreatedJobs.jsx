import { getMyJobs } from '@/api/jobsApi';
import useFetch from '@/hooks/useFetch';
import { useUser } from '@clerk/clerk-react';
import JobCard from '@/components/jobs/JobCard';
import { useEffect } from 'react';
import Loader from '../Loader';

export default function CreatedJobs() {
  const { user } = useUser();

  const {
    loading: loadingCreatedJobs,
    data: createdJobs,
    fn: fnCreatedJobs,
  } = useFetch(getMyJobs, {
    recruiter_id: user.id,
  });

  useEffect(() => {
    fnCreatedJobs();
  }, []);

  return (
    <div>
      {loadingCreatedJobs ? (
        <Loader />
      ) : (
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {createdJobs?.length ? (
            createdJobs.map((job) => {
              return (
                <JobCard
                  key={job.id}
                  job={job}
                  onJobAction={fnCreatedJobs}
                  isMyJob
                />
              );
            })
          ) : (
            <div>No Jobs Found 😢</div>
          )}
        </div>
      )}
    </div>
  );
}
