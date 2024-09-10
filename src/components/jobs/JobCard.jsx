/* eslint-disable react/prop-types */
import { daysSince, numberWithCommas } from '@/lib/utils';
import { Bookmark } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

/*
title, createdAt, description, country, city,requirements: technicalQualifications,
isOPen: available, work_mode: workMode,min-experience, max-experience, salary: averageSalary,
currency, job_type: jobType, level, recruiter_id, company_id

companyName, bookmarked, applied, industry
*/

export function JobCard({ job, onJobClick }) {
  return (
    <li
      className="border-solid border-slate-200 border-2 rounded-md mb-4 hover:border-slate-300 hover:shadow-lg hover:bg-slate-50 transition-all duration-300"
      onClick={onJobClick}
    >
      <NavLink className="block p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="flex flex-col">
            <h3 className="text-lg font-semibold text-slate-800">
              {job?.companyName}
            </h3>
            <p className="text-sm text-slate-600">
              {job?.location?.city}, {job?.location?.country}
            </p>
          </span>
          <span className="flex gap-2 items-center text-slate-500">
            <p className="text-sm">{daysSince(new Date(job?.createdAt))}d</p>
            {job?.bookmarked ? (
              <Bookmark
                size={20}
                fill="rgb(34, 197, 94)"
                className="text-green-500"
              />
            ) : (
              <Bookmark size={20} />
            )}
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
          <h2 className="text-xl font-bold text-slate-900 lg:flex-1">
            {job?.level} {job?.title}
          </h2>
          <div className="flex gap-2 lg:flex-row lg:gap-2 lg:ml-4 lg:mt-0">
            <p className="text-sm font-medium text-slate-600">
              {job?.workMode}
            </p>
            <p className="text-sm font-medium text-slate-600">{job?.jobType}</p>
          </div>
        </div>

        <div className="mb-2">
          <p className="text-md font-semibold text-slate-800">
            Average Salary: {numberWithCommas(job?.averageSalary)}{' '}
            {job?.currency}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-700 truncate">
            Description: {job?.description}
          </p>
        </div>
      </NavLink>
    </li>
  );
}
