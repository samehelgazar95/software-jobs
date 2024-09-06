import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PenBox } from 'lucide-react';

export default function RecruiterBtns() {
  return (
    <div className="flex gap-4">
      <Link to="/jobs">
        <Button variant="outline" className="rounded font-bold text-lg">
          Available Jobs
        </Button>
      </Link>
      <Link to="/post-job">
        <Button variant="outline" className="rounded font-bold text-lg">
          <PenBox size={20} className="mr-2" />
          Post a Job
        </Button>
      </Link>
      <Link to="/my-jobs">
        <Button variant="outline" className="rounded font-bold text-lg">
          My Jobs
        </Button>
      </Link>
    </div>
  );
}
