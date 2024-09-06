/* eslint-disable react/prop-types */
import { useUser } from '@clerk/clerk-react';
import { Navigate, useLocation } from 'react-router-dom';

export default function PageProtector({ children }) {
  const { user, isSignedIn, isLoaded } = useUser();
  const { pathname } = useLocation();

  if (isLoaded && !isSignedIn) {
    return <Navigate to="/?sign-in=true" />;
  }

  // Check onboarding status (candidate or recruiter)
  if (
    user !== undefined &&
    !user?.unsafeMetadata?.role &&
    pathname !== '/onboarding'
  )
    return <Navigate to="/onboarding" />;

  console.log(user?.unsafeMetadata?.role);
  console.log(pathname);

  return children;
}
