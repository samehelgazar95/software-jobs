import { jobsData } from '@/lib/data';
import JobCard from './JobCard';

export default function JobsList() {
  const handleClick = () => {
    console.log('Job clicked');
  };

  return (
    <div>
      <h1 className="font-bold text-4xl sm:text-6xl text-center mb-4 mt-6 text-slate-700">
        Recent Jobs
      </h1>
      <ul className="container mx-auto mt-8 grid md:grid-cols-2 gap-4">
        {jobsData.map((job) => (
          <JobCard key={job.id} job={job} onClick={handleClick} />
        ))}
      </ul>
    </div>
  );
}
