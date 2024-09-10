/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import JobsFilters from '@/components/jobs/JobsFilters';
import AvailableJobs from '@/components/jobs/AvailableJobs';
import { getJobs } from '@/api/jobsApi';
import useFetch from '@/hooks/useFetch';
import { useUser } from '@clerk/clerk-react';
import Loader from '@/components/Loader';
import Error from '@/components/Error';

export default function Jobs() {
  const [filterTitle, setFilterTitle] = useState('');
  const [filterSearchQuery, setFilterSearchQuery] = useState('');
  const [filterCompanyId, setFilterCompanyId] = useState('');
  const [filterCountry, setFilterCountry] = useState('');
  const [filterCity, setFilterCity] = useState('');
  const { isLoaded } = useUser();
  const {
    fn: fnJobs,
    data: dataJobs,
    loading: loadingJobs,
    error: errorJobs,
  } = useFetch(getJobs, {
    filterTitle,
    filterSearchQuery,
    filterCompanyId,
    filterCountry,
    filterCity,
  });

  useEffect(() => {
    if (isLoaded) fnJobs();
  }, [
    isLoaded,
    filterTitle,
    filterSearchQuery,
    filterCompanyId,
    filterCountry,
    filterCity,
  ]);

  console.log('dataJobs: ', dataJobs);

  if (loadingJobs) {
    return <Loader />;
  }

  if (errorJobs) {
    return <Error>{errorJobs}</Error>;
  }

  return (
    <div>
      <JobsFilters
        setFilterTitle={setFilterTitle}
        setFilterSearchQuery={setFilterSearchQuery}
        setFilterCompanyId={setFilterCompanyId}
        setFilterCountry={setFilterCountry}
        setFilterCity={setFilterCity}
      />
      <p>{dataJobs?.length ? dataJobs[0]?.title : 'No Jobs'}</p>
      {/* {dataJobs.length ? (
        <AvailableJobs dataJobs={dataJobs} />
      ) : (
        <h2 className="bg-red-300 w-3/4 text-center font-semibold text-xl py-4 mx-auto text-slate-800 rounded-xl">
          No available jobs for{' '}
          <span className="text-black underline underline-offset-4 decoration-4 decoration-green-500">
            {filterValue}
          </span>{' '}
          role.
        </h2>
      )} */}
    </div>
  );
}
