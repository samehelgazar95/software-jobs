import { SignIn, SignUp } from '@clerk/clerk-react';
import { useState } from 'react';

export default function SignInUpClerk({
  showSignInOverlay,
  setShowSignInOverlay,
  showSignUpOverlay,
  setShowSignUpOverlay,
  handleLayoutClick,
}) {
  return (
    <>
      {showSignInOverlay && (
        <div
          className="inset-0 z-10 fixed flex justify-center items-center bg-black bg-opacity-50"
          onClick={handleLayoutClick}
        >
          <SignIn
            signUpForceRedirectUrl="/jobs"
            fallbackRedirectUrl="/jobs"
            appearance={{
              elements: {
                footer: 'hidden',
              },
            }}
          />
        </div>
      )}

      {showSignUpOverlay && (
        <div
          className="inset-0 z-10 fixed flex justify-center items-center bg-black bg-opacity-50"
          onClick={handleLayoutClick}
        >
          <SignUp
            signUpForceRedirectUrl="/onboarding"
            fallbackRedirectUrl="/onboarding"
            appearance={{
              elements: {
                footer: 'hidden',
              },
            }}
          />
        </div>
      )}
    </>
  );
}
