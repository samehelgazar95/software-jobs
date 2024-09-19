import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import PageProtector from './components/PageProtector';
import AppLayout from './pages/AppLayout';
import ErrorPage from './pages/ErrorPage';
import LandingPage from './pages/LandingPage';
import OnboardingPage from './pages/OnboardingPage';
import JobsPage from './pages/JobsPage';
import JobPage from './pages/JobPage';
import PostJobPage from './pages/recruiter/PostJobPage';
import MyJobsPage from './pages/MyJobsPage';
import BookmarksPage from './pages/candidate/BookmarksPage';

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
              <JobsPage />
            </PageProtector>
          ),
        },
        {
          path: '/job/:id',
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
              <BookmarksPage />
            </PageProtector>
          ),
        },
        {
          path: '/applications',
          element: (
            <PageProtector>
              <MyJobsPage />
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
