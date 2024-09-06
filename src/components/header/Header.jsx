import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SignedIn, SignedOut, useUser } from '@clerk/clerk-react';
import SignInUpBtns from './SignInUpBtns';
import SignInUpClerk from './SignInUpClerk';
import ProfileBtn from './ProfileBtn';
import RecruiterBtns from './RecruiterBtns';
import CandidateBtns from './CandidateBtns';

export default function Header() {
  const { user, isSignedIn, isLoaded } = useUser();
  const [searchParams, setSearchParams] = useSearchParams();
  const [showSignInOverlay, setShowSignInOverlay] = useState(false);
  const [showSignUpOverlay, setShowSignUpOverlay] = useState(false);

  useEffect(() => {
    if (searchParams.get('sign-in') == true) {
      setShowSignInOverlay(true);
    }
  }, [searchParams]);

  const handleLayoutClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignInOverlay(false);
      setShowSignUpOverlay(false);
      setSearchParams({});
    }
  };

  return (
    <header className="container mx-auto">
      <nav className=" flex justify-between items-center px-10 py-6">
        <Link to="/">
          <h2 className="cursor-pointer text-3xl font-extrabold underline decoration-4 decoration-green-500 hover:text-green-500 text-slate-700">
            Software Jobs
          </h2>
        </Link>

        <div>
          <SignedOut>
            <SignInUpBtns
              setShowSignInOverlay={setShowSignInOverlay}
              setShowSignUpOverlay={setShowSignUpOverlay}
            />
          </SignedOut>

          <SignedIn>
            <div className="flex justify-center items-center gap-4">
              {user?.unsafeMetadata?.role === 'recruiter' ? (
                <RecruiterBtns />
              ) : user?.unsafeMetadata?.role === 'candidate' ? (
                <CandidateBtns />
              ) : null}
              <ProfileBtn />
            </div>
          </SignedIn>
        </div>

        <SignInUpClerk
          showSignInOverlay={showSignInOverlay}
          setShowSignInOverlay={setShowSignInOverlay}
          showSignUpOverlay={showSignUpOverlay}
          setShowSignUpOverlay={setShowSignUpOverlay}
          handleLayoutClick={handleLayoutClick}
        />
      </nav>
    </header>
  );
}

/* 
<UserButton.MenuItems>
                  <UserButton.Link
                    label="My Jobs"
                    labelIcon={<Briefcase size={15} />}
                    href="/my-jobs"
                  />
                  <UserButton.Link
                    label="Saved Jobs"
                    labelIcon={<Heart size={15} />}
                    href="/saved-jobs"
                  />
                </UserButton.MenuItems>
                
                <div className="flex gap-6 justify-center">
          <Link to="/jobs">
            <Button
              variant="link"
              size="lg"
              className="p-0 text-lg font-semibold"
            >
              For Jobs Seekers
            </Button>
          </Link>
          <Link to="/post-job">
            <Button
              variant="link"
              size="lg"
              className="p-0 text-lg font-semibold"
            >
              For Employers
            </Button>
          </Link>
        </div>
*/
