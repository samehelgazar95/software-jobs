import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import AppLayout from './pages/AppLayout';
import ErrorPage from './pages/ErrorPage';
import JobListingPage from './pages/JobListingPage';
import LandingPage from './pages/LandingPage';
import JobPage from './pages/JobPage';
import PostJobPage from './pages/PostJobPage';
import SavedJobsPage from './pages/SavedJobsPage';
import MyJobsPage from './pages/MyJobsPage';
import OnboardingPage from './pages/OnboardingPage';
import ApplicationsPage from './pages/ApplicationsPage';
import PageProtector from './components/PageProtector';

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

export default function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <LandingPage />,
        },
        {
          path: '/onboarding',
          element: (
            <PageProtector>
              <OnboardingPage />
            </PageProtector>
          ),
        },
        {
          path: '/jobs',
          element: (
            <PageProtector>
              <JobListingPage />
            </PageProtector>
          ),
        },
        {
          path: '/job/:jobId',
          element: (
            <PageProtector>
              <JobPage />
            </PageProtector>
          ),
        },
        {
          path: '/post-job',
          element: (
            <PageProtector>
              <PostJobPage />
            </PageProtector>
          ),
        },
        {
          path: '/my-jobs',
          element: (
            <PageProtector>
              <MyJobsPage />
            </PageProtector>
          ),
        },
        {
          path: '/bookmarks',
          element: (
            <PageProtector>
              <SavedJobsPage />
            </PageProtector>
          ),
        },
        {
          path: '/applications',
          element: (
            <PageProtector>
              <ApplicationsPage />
            </PageProtector>
          ),
        },
      ],
    },
  ]);

  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    </ClerkProvider>
  );
}
