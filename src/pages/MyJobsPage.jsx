import { useUser } from '@clerk/clerk-react';
import CreatedApplications from '@/components/jobs/CreatedApplications';
import CreatedJobs from '@/components/jobs/CreatedJobs';
import Loader from '@/components/Loader';

export default function MyJobsPage() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-4xl sm:text-6xl text-center pb-4 text-slate-700">
        {user?.unsafeMetadata?.role === 'candidate'
          ? 'My Applications'
          : 'My Jobs'}
      </h1>
      {user?.unsafeMetadata?.role === 'candidate' ? (
        <CreatedApplications />
      ) : (
        <CreatedJobs />
      )}
    </div>
  );
}
