import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PenBox, LogIn, Bookmark } from 'lucide-react';
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignUp,
  UserButton,
  useUser,
} from '@clerk/clerk-react';

export default function Header() {
  const { user, isSignedIn, isLoaded } = useUser();
  // const [showSignInOverlay, setShowSignInOverlay] = useState(false);
  const [showSignUpOverlay, setShowSignUpOverlay] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get('sign-in') == true) {
      setShowSignInOverlay(true);
    }
  }, [searchParams]);

  const handleLayoutClick = (e) => {
    if (e.target === e.currentTarget) {
      // setShowSignInOverlay(false);
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
            <div className="flex gap-2">
              {/* <Button
                variant="outline"
                onClick={() => setShowSignInOverlay(true)}
              >
                <LogIn className="mr-2" />
                Sign In
              </Button> */}

              <Button
                variant="outline"
                onClick={() => setShowSignUpOverlay(true)}
              >
                Sign Up
              </Button>
            </div>
          </SignedOut>

          <SignedIn>
            <div className="flex justify-center items-center gap-4">
              <div className="flex gap-4">
                <Link to="/post-job">
                  <Button
                    variant="outline"
                    className="rounded-full font-bold text-lg"
                  >
                    <PenBox size={20} className="mr-2" />
                    Post a Job
                  </Button>
                </Link>
                <Link to="/my-jobs">
                  <Button
                    variant="outline"
                    className="rounded-full font-bold text-lg"
                  >
                    My Jobs
                  </Button>
                </Link>
              </div>

              {/* <div className="flex justify-center items-center gap-4">
                <Link>
                  <Button
                    variant="outline"
                    className="rounded-full font-bold text-lg"
                  >
                    <Bookmark /> My Bookmarks
                  </Button>
                </Link>
                <Link>
                  <Button
                    variant="outline"
                    className="rounded-full font-bold text-lg"
                  >
                    My Applications
                  </Button>
                </Link>
              </div> */}

              <UserButton
                aft
                appearance={{
                  elements: {
                    avatarBox: 'w-10 h-10',
                  },
                }}
              ></UserButton>
            </div>
          </SignedIn>
        </div>

        {/* {showSignInOverlay && (
          <div
            className="inset-0 z-10 fixed flex justify-center items-center bg-black bg-opacity-50"
            onClick={(e) => handleLayoutClick(e)}
          >
            <SignIn
              signUpForceRedirectUrl="/onboarding"
              fallbackRedirectUrl="/onboarding"
            />
          </div>
        )} */}

        {showSignUpOverlay && (
          <div
            className="inset-0 z-10 fixed flex justify-center items-center bg-black bg-opacity-50"
            onClick={(e) => handleLayoutClick(e)}
          >
            <SignUp
              signUpForceRedirectUrl="/onboarding"
              fallbackRedirectUrl="/onboarding"
            />
          </div>
        )}
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
