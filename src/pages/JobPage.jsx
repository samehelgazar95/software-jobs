import { useEffect } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { useParams } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import { Briefcase, DoorClosed, DoorOpen, MapPinIcon } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
// import { ApplyJobDrawer } from '@/components/apply-job';
// import ApplicationCard from '@/components/application-card';
import useFetch from '@/hooks/useFetch';
import { getSingleJob, updateHiringStatus } from '@/api/jobsApi';
import Loader from '@/components/Loader';
import {
  numberWithCommas,
  capitalizeWords,
  capitalizeFirstLetter,
} from '@/lib/utils';

export default function JobPage() {
  const { id } = useParams();
  const { isLoaded, user } = useUser();

  const {
    loading: loadingJob,
    data: job,
    fn: fnJob,
  } = useFetch(getSingleJob, {
    job_id: id,
  });

  useEffect(() => {
    if (isLoaded) fnJob();
  }, [isLoaded]);

  const { loading: loadingHiringStatus, fn: fnHiringStatus } = useFetch(
    updateHiringStatus,
    {
      job_id: id,
    }
  );

  const handleStatusChange = (value) => {
    const is_open = value === 'open';
    fnHiringStatus(is_open).then(() => fnJob());
  };

  const formattedDate = (() => {
    try {
      const date = new Date(job?.created_at);
      if (isNaN(date)) throw new Error('Invalid Date');
      return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(date);
    } catch (error) {
      console.error('Error formatting date:', error);
      return 'Unknown date'; // Return a default message for invalid dates
    }
  })();

  if (!isLoaded || loadingJob) return <Loader />;

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white shadow-lg rounded-lg border-2 border-solid border-slate-200 sticky top-4">
      {/* Job Title and Company Section */}
      <div className="flex flex-col-reverse gap-6 md:flex-row justify-between items-center mb-6">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-1">
            {capitalizeFirstLetter(job?.level)} {capitalizeWords(job?.title)}
          </h2>
          <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-2">
            {capitalizeFirstLetter(job?.company?.name)}
          </h3>
          <p className="text-sm md:text-base text-slate-600 flex items-center">
            <MapPinIcon className="mr-1" /> {capitalizeFirstLetter(job?.city)},{' '}
            {capitalizeFirstLetter(job?.country)}
          </p>
        </div>
        <img
          src={job?.company?.logo_url}
          className="h-16 w-16 md:h-20 md:w-20 object-contain"
          alt={job?.title}
        />
      </div>

      {/* Job Status and Applications Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <span
            className={`p-2 rounded-md font-medium text-white ${
              job?.is_open ? 'bg-green-500' : 'bg-red-500'
            }`}
          >
            {capitalizeWords(
              job?.is_open ? 'open for applications' : 'hiring closed'
            )}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm md:text-base text-slate-600">
          <Briefcase className="mr-1" />
          {job?.applications?.length} Applicants
        </div>
      </div>

      {/* Hiring Status Selector (Only for Recruiter) */}
      {job?.recruiter_id === user?.id && (
        <div className="mb-6 w-full md:w-1/3">
          <Select onValueChange={handleStatusChange}>
            <SelectTrigger className="w-full">
              <SelectValue
                placeholder={
                  'Hiring Status ' +
                  capitalizeFirstLetter(
                    job?.is_open ? '( Open )' : '( Closed )'
                  )
                }
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="open">Open</SelectItem>
              <SelectItem value="closed">Closed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      {/* Job Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-1">
          <p className="font-semibold text-slate-700">Work Mode:</p>
          <p className="text-slate-600">
            {capitalizeFirstLetter(job?.work_mode)}
          </p>
        </div>
        <div className="space-y-1">
          <p className="font-semibold text-slate-700">Experience Required:</p>
          <p className="text-slate-600">
            {job?.min_experience} - {job?.max_experience} years
          </p>
        </div>
        <div className="space-y-1">
          <p className="font-semibold text-slate-700">Issuing Date:</p>
          <p className="text-slate-600">{formattedDate}</p>
        </div>
        <div className="space-y-1">
          <p className="font-semibold text-slate-700">Average Salary:</p>
          <p className="text-slate-600">
            {job?.salary && numberWithCommas(job?.salary)}{' '}
            {capitalizeFirstLetter(job?.currency)}
          </p>
        </div>
      </div>

      {/* Job Description Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-800 mb-2">
          Job Description
        </h2>
        <p className="text-slate-600">{capitalizeWords(job?.description)}</p>
      </div>

      {/* Technical Qualifications Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-800 mb-2">
          Technical Qualifications
        </h2>
        <ul className="list-disc pl-5 text-sm text-slate-700">
          {job?.requirements &&
            job?.requirements
              .split(', ')
              .map((require) => (
                <li key={require}>{capitalizeWords(require)}</li>
              ))}
        </ul>
      </div>

      {/* Applications Section (for Recruiters) */}
      {job?.recruiter_id === user?.id && job?.applications?.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">
            Applications
          </h2>
          {/* Render application cards here */}
          {/* {job?.applications.map((application) => (
            <ApplicationCard key={application.id} application={application} />
          ))} */}
        </div>
      )}

      {/* Loader for Hiring Status Update */}
      {loadingHiringStatus && <Loader />}
    </div>
  );
}
