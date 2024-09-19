import { useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import { getSavedJobs } from '@/api/jobsApi';
import JobCard from '@/components/jobs/JobCard';
import Loader from '@/components/Loader';
import useFetch from '@/hooks/useFetch';

export default function BookmarksPage() {
  const { isLoaded } = useUser();

  const {
    loading: loadingSavedJobs,
    data: savedJobs,
    fn: fnSavedJobs,
  } = useFetch(getSavedJobs);

  useEffect(() => {
    if (isLoaded) {
      fnSavedJobs();
    }
  }, [isLoaded]);

  if (!isLoaded || loadingSavedJobs) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-8 lg:px-10">
      <h1 className="font-bold text-4xl sm:text-6xl text-center pb-2 text-slate-700">
        Saved Jobs
      </h1>

      {loadingSavedJobs === false && (
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {savedJobs?.length ? (
            savedJobs?.map((saved) => {
              return (
                <JobCard
                  key={saved.id}
                  job={saved?.job}
                  onJobAction={fnSavedJobs}
                  savedInit={true}
                />
              );
            })
          ) : (
            <div>No Saved Jobs 👀</div>
          )}
        </div>
      )}
    </div>
  );
}
