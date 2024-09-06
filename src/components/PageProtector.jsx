import { useUser } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';

export default function PageProtector({ children }) {
  const { isSignedIn, isLoaded } = useUser();

  if (isLoaded && !isSignedIn) {
    return <Navigate to="/?sign-in=true" />;
  }

  // Check onboarding stratus (candidate or recruiter)

  return children;
}
