import { useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import useFetch from '@/hooks/useFetch';
import { getApplications } from '@/api/applicationApi';
import ApplicationCard from '@/components/jobs/ApplicationCard';
import Loader from '../Loader';

export default function CreatedApplications() {
  const { user } = useUser();

  const {
    loading: loadingApplications,
    data: applications,
    fn: fnApplications,
  } = useFetch(getApplications, {
    user_id: user.id,
  });

  useEffect(() => {
    fnApplications();
  }, []);

  if (loadingApplications) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col gap-2">
      {applications?.map((application) => {
        return (
          <ApplicationCard
            key={application.id}
            application={application}
            isCandidate={true}
          />
        );
      })}
    </div>
  );
}
