import { useUser } from '@clerk/clerk-react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

export default function PageProtector({ children }) {
  const { user, isSignedIn, isLoaded } = useUser();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  if (isLoaded && !isSignedIn && isSignedIn !== undefined)
    return <Navigate to="/?sign-in=true" />;

  if (
    user !== undefined &&
    !user?.unsafeMetadata?.role &&
    pathname !== '/onboarding'
  )
    return <Navigate to="/onboarding" />;

  return children;
}
