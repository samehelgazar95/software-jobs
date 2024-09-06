import Filters from '@/components/landing_page/Filters';
import Hero from '@/components/landing_page/Hero';
import Jobs from '@/components/landing_page/Jobs';

export default function LandingPage() {
  return (
    <div>
      <Hero />

      <Filters />

      <Jobs />
    </div>
  );
}
