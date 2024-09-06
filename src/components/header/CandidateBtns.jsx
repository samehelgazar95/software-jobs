import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Bookmark } from 'lucide-react';

export default function CandidateBtns() {
  return (
    <div className="flex justify-center items-center gap-4">
      <Link to="/jobs">
        <Button variant="outline" className="rounded-full font-bold text-lg">
          Available Jobs
        </Button>
      </Link>
      <Link to="/bookmarks">
        <Button variant="outline" className="rounded-full font-bold text-lg">
          <Bookmark /> My Bookmarks
        </Button>
      </Link>
      <Link to="/applications">
        <Button variant="outline" className="rounded-full font-bold text-lg">
          My Applications
        </Button>
      </Link>
    </div>
  );
}
