import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Bookmark, Menu } from 'lucide-react';
import { useState } from 'react';

export default function CandidateBtns() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* Burger Menu for Mobile */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="block md:hidden p-2"
      >
        <Menu size={30} />
      </button>

      {/* Full Menu for larger screens */}
      <div
        className={`md:flex gap-4 ${menuOpen ? 'block' : 'hidden'} md:block`}
      >
        <Link to="/jobs">
          <Button
            variant="outline"
            className="rounded font-medium text-sm md:text-base"
          >
            Available Jobs
          </Button>
        </Link>
        <Link to="/bookmarks">
          <Button
            variant="outline"
            className="rounded font-medium text-sm md:text-base"
          >
            <Bookmark size={16} className="mr-1" /> My Bookmarks
          </Button>
        </Link>
        <Link to="/applications">
          <Button
            variant="outline"
            className="rounded font-medium text-sm md:text-base"
          >
            My Applications
          </Button>
        </Link>
      </div>
    </div>
  );
}
