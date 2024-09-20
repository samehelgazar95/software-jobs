/* eslint-disable react/prop-types */
import { deleteJob, saveJob } from '@/api/jobsApi';
import useFetch from '@/hooks/useFetch';
import {
  capitalizeWords,
  capitalizeFirstLetter,
  daysSince,
  numberWithCommas,
} from '@/lib/utils';
import { useUser } from '@clerk/clerk-react';
import { Bookmark, MapPinIcon, Trash2Icon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

export default function JobCard({
  job,
  savedInit = false,
  onJobAction = () => {},
  isMyJob = false,
  onClick,
}) {
  const { user } = useUser();
  const [saved, setSaved] = useState(savedInit);
  const { loading: loadingDeleteJob, fn: fnDeleteJob } = useFetch(deleteJob, {
    job_id: job.id,
  });
  const {
    fn: fnSavedJob,
    data: savedJob,
    loading: loadingSavedJob,
  } = useFetch(saveJob, { alreadySaved: saved });
  const {
    city,
    company: { name: companyName, logo_url: companyLogo },
    country,
    created_at,
    currency,
    description,
    id,
    job_type,
    level,
    salary,
    title,
    work_mode,
  } = job;

  const handleSaveJob = async () => {
    await fnSavedJob({
      user_id: user.id,
      job_id: job.id,
    });
    onJobAction();
  };

  const handleDeleteJob = async () => {
    await fnDeleteJob();
    onJobAction();
  };

  useEffect(() => {
    if (savedJob !== undefined) setSaved(savedJob?.length > 0);
  }, [savedJob]);

  return (
    <li
      className="border border-slate-200 rounded-lg p-4 mb-4 hover:shadow-lg hover:border-slate-300 hover:bg-slate-50 transition-shadow transition-colors duration-300"
      onClick={onClick}
    >
      {/* Job Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-1">
            {capitalizeWords(companyName)}
          </h3>
          <p className="text-sm text-slate-600 flex items-center gap-1">
            <MapPinIcon size={15} className="text-slate-500" />
            {capitalizeWords(city)}, {capitalizeWords(country)}
          </p>
        </div>
        {/* Bookmark / Trash Icon */}
        <div className="flex gap-2 items-center">
          <p className="text-xs text-slate-500">
            {daysSince(new Date(created_at))}d ago
          </p>

          {isMyJob ? (
            <Button
              variant="ghost"
              className="hover:text-red-500 transition duration-200"
              onClick={handleDeleteJob}
            >
              <Trash2Icon size={20} />
            </Button>
          ) : (
            <Button
              variant="ghost"
              className={`hover:text-green-500 transition duration-200 ${
                saved && 'text-green-500'
              }`}
              onClick={handleSaveJob}
              disabled={loadingSavedJob}
            >
              {saved ? (
                <Bookmark
                  size={20}
                  fill="rgb(34, 197, 94)"
                  stroke="rgb(34, 197, 94)"
                />
              ) : (
                <Bookmark size={20} />
              )}
            </Button>
          )}
        </div>
      </div>

      {/* Job Title and Type */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-slate-900 lg:flex-1 mb-2 lg:mb-0">
          {capitalizeWords(level)} {capitalizeWords(title)}
        </h2>
        <div className="flex flex-wrap gap-2 text-sm font-medium text-slate-600">
          <span className="bg-slate-100 px-2 py-1 rounded-lg">
            {capitalizeWords(work_mode)}
          </span>
          <span className="bg-slate-100 px-2 py-1 rounded-lg">
            {capitalizeWords(job_type)}
          </span>
        </div>
      </div>

      {/* Salary */}
      <div className="pt-2">
        <p className="text-md font-semibold text-slate-800">
          Average Salary: {numberWithCommas(salary)} {currency.toUpperCase()}
        </p>
      </div>

      {/* Job Description and Details Link */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-700 line-clamp-2 w-3/4">
          Description: {capitalizeFirstLetter(description)}
        </p>
        <Link to={`/job/${id}`}>
          <Button
            variant="ghost"
            className="text-slate-700 hover:text-green-600 text-lg transition duration-200 underline decoration-2 decoration-green-500 hover:decoration-green-600"
          >
            More Details
          </Button>
        </Link>
      </div>
    </li>
  );
}
