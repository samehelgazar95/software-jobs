import { useUser } from '@clerk/clerk-react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function JobListingPage() {
  const { user, isSignedIn } = useUser();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  console.log(user, isSignedIn, pathname);

  useEffect(() => {
    if (user !== undefined && isSignedIn && pathname === '/jobs') {
      navigate('/jobs');
    }
  }, [user, pathname, isSignedIn, navigate]);

  return <div>jobs</div>;
}
