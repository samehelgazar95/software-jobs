import JobsFilters from '@/components/jobs/JobsFilters';
import Hero from '@/components/landing_page/Hero';
import AvailableJobs from '@/components/jobs/AvailableJobs';

export default function LandingPage() {
  return (
    <div>
      <Hero />

      <JobsFilters />

      <AvailableJobs />
    </div>
  );
}
