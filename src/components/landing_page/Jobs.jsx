import { jobs } from '../../lib/data';
import { JobCard } from '../JobCard';
import JobDetails from '../JobDetails';

export default function Jobs() {
  return (
    <section className="grid md:grid-cols-3 gap-2 px-4 xl:container mx-auto">
      <div className="md:col-span-1">
        <ul className="p-4 bg-white rounded-lg">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </ul>
      </div>
      <section className="md:col-span-2 hidden md:block bg-white rounded-lg p-4 ">
        <JobDetails job={jobs[0]} />
      </section>
    </section>
  );
}
