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

  // State to control header visibility
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (searchParams.get('sign-in')) {
      setShowSignInOverlay(true);
    }
  }, [searchParams]);

  // Handle scrolling for header visibility
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Hide header when scrolling down
      setIsVisible(false);
    } else {
      // Show header when scrolling up
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const handleLayoutClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignInOverlay(false);
      setShowSignUpOverlay(false);
      setSearchParams({});
    }
  };

  return (
    <header
      className={`transition-transform duration-300 w-full sticky top-0 z-50 bg-white shadow-md mb-6`}
    >
      <nav className="container mx-auto flex justify-between items-center px-4 sm:px-10 py-6">
        <Link to="/" className="w-full sm:w-auto">
          <h2 className="text-center sm:text-left text-3xl font-extrabold underline decoration-4 decoration-green-500 hover:text-green-500 text-slate-700 whitespace-nowrap">
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
          showSignUpOverlay={showSignUpOverlay}
          handleLayoutClick={handleLayoutClick}
        />
      </nav>
    </header>
  );
}

//   return (
//     <header className="sticky top-0 z-50 bg-white shadow-md mb-6">
//       <nav className="container mx-auto flex justify-between items-center px-4 sm:px-10 py-6">
//         <Link to="/" className="w-full sm:w-auto">
//           <h2 className="text-center sm:text-left text-3xl font-extrabold underline decoration-4 decoration-green-500 hover:text-green-500 text-slate-700 whitespace-nowrap">
//             Software Jobs
//           </h2>
//         </Link>

//         <div>
//           <SignedOut>
//             <SignInUpBtns
//               setShowSignInOverlay={setShowSignInOverlay}
//               setShowSignUpOverlay={setShowSignUpOverlay}
//             />
//           </SignedOut>

//           <SignedIn>
//             <div className="flex justify-center items-center gap-4">
//               {user?.unsafeMetadata?.role === 'recruiter' ? (
//                 <RecruiterBtns />
//               ) : user?.unsafeMetadata?.role === 'candidate' ? (
//                 <CandidateBtns />
//               ) : null}
//               <ProfileBtn />
//             </div>
//           </SignedIn>
//         </div>

//         <SignInUpClerk
//           showSignInOverlay={showSignInOverlay}
//           showSignUpOverlay={showSignUpOverlay}
//           handleLayoutClick={handleLayoutClick}
//         />
//       </nav>
//     </header>
//   );
// }
