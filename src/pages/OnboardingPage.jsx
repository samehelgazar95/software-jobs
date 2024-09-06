import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/clerk-react';
import { useState } from 'react';

export default function OnboardingPage() {
  const { user, isLoaded, isSignedIn } = useUser();

  return (
    <div className="inset-0 z-10 fixed flex justify-center items-center bg-black bg-opacity-50">
      <div>
        <div className="flex gap-4 flex-col justify-center items-center bg-slate-400 h-40 w-80 rounded">
          <p className="font-semibold">Choose your type</p>
          <div className="flex gap-4">
            <Button>Candidate</Button>
            <Button>Recruiter</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
