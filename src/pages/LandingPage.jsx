import JobsList from '@/components/jobs/JobsList';
import Hero from '@/components/landing_page/Hero';
import { MarqueeDemo } from '@/components/landing_page/Marquee';

export default function LandingPage() {
  return (
    <div>
      <Hero />
      <MarqueeDemo />
      <JobsList />
    </div>
  );
}
