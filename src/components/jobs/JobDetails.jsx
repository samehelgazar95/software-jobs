/* eslint-disable react/prop-types */
import { Bookmark } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { numberWithCommas } from '@/lib/utils';
import { useUser } from '@clerk/clerk-react';

export default function JobDetails({ job, onBookmarkClick }) {
  const { user } = useUser();

  const handleBookmarkClick = () => {
    onBookmarkClick(job?.id);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg border-2 border-solid border-slate-200  sticky top-4">
      <div className="flex flex-col lg:flex-row lg:justify-between mb-6">
        <div className="flex flex-col mb-4 lg:mb-0">
          <h3 className="text-2xl font-semibold text-slate-800 mb-2">
            {job?.companyName}
          </h3>
          <h2 className="text-xl font-bold text-slate-900 mb-2">
            {job?.level} {job?.title}
          </h2>
          <p className="text-sm text-slate-600">{job?.location?.city}</p>
        </div>

        <div className="flex items-center gap-4">
          {user?.unsafeMetadata?.role === 'candidate' && (
            <>
              <Button
                variant="ghost"
                className="text-slate-500 hover:text-green-500"
                onClick={handleBookmarkClick}
              >
                {job?.bookmarked ? (
                  <Bookmark
                    fill="rgb(34, 197, 94)"
                    className="text-green-500"
                  />
                ) : (
                  <Bookmark />
                )}
              </Button>
              <Link
                to="/"
                className={`${
                  job?.applied
                    ? 'bg-orange-500'
                    : 'bg-green-500 hover:bg-green-600 transition-colors'
                } text-white p-2 rounded font-semibold`}
              >
                {job?.applied ? 'Applied for it' : 'Apply on employer site'}
              </Link>
            </>
          )}
          {user?.unsafeMetadata?.role === 'recruiter' && (
            <span
              className={`p-2 rounded font-medium ${
                job.available ? 'bg-green-400' : 'bg-red-400'
              }`}
            >
              Status: {job?.available ? 'Open' : 'Closed'}
            </span>
          )}
        </div>
      </div>

      <div className="text-sm text-slate-700 flex gap-6 mb-6">
        <div className="font-semibold space-y-1">
          <p>Location: </p>
          <p>Industry: </p>
          <p>Work Mode: </p>
          <p>Experience: </p>
          <p>Issuing Date: </p>
          <p>Average Salary: </p>
        </div>
        <div className="space-y-1">
          <p>
            {job?.location?.country}, {job?.location?.city}
          </p>
          <p>{job?.industry}</p>
          <p>{job?.workMode}</p>
          <p>
            {job?.experience?.min} - {job?.experience?.max} years
          </p>
          <p>
            {new Intl.DateTimeFormat('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }).format(new Date(job?.createdAt))}
          </p>
          <p>
            {numberWithCommas(job?.averageSalary)} {job?.currency}
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-slate-800 mb-2">
            Job Description:
          </h3>
          <p className="text-sm text-slate-700">{job?.description}</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-slate-800 mb-2">
            Technical Qualifications:
          </h3>
          <ul className="list-disc pl-5 text-sm text-slate-700">
            {job?.technicalQualifications.map((qualification) => (
              <li key={qualification}>{qualification}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
