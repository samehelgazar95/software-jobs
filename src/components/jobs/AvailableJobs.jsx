import { useState } from 'react';
import { JobCard } from './JobCard';
import JobDetails from './JobDetails';

export default function AvailableJobs({ dataJobs }) {
  const [jobIndex, setJobIndex] = useState(0);

  const onBookmarkClickHandler = (id) => {
    dataJobs.map((job) => {
      job.id == id ? { ...job, bookmarked: !job.bookmarked } : job;
    });
    console.log(dataJobs[id]);
  };

  return (
    <section className="grid md:grid-cols-3 gap-2 px-4 xl:container mx-auto">
      <div className="md:col-span-1">
        <ul className="p-4 bg-white rounded-lg">
          {dataJobs.map((job, idx) => (
            <JobCard
              key={job.id}
              job={job}
              onJobClick={() => setJobIndex(idx)}
            />
          ))}
        </ul>
      </div>
      <section className="md:col-span-2 hidden md:block bg-white rounded-lg p-4 ">
        <JobDetails
          job={dataJobs[jobIndex]}
          onBookmarkClick={onBookmarkClickHandler}
        />
      </section>
    </section>
  );
}
