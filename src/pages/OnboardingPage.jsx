import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/clerk-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function OnboardingPage() {
  const { user, isLoaded, isSignedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.unsafeMetadata?.role) {
      navigate('/jobs');
    }
  }, [user]);

  if (!isLoaded) return <h2>Loading</h2>;

  const handleSelectingRole = async (role) => {
    await user
      .update({
        unsafeMetadata: { role },
      })
      .then(() => {
        // navigate(role === 'recruiter' ? '/recruiter' : '/candidate');
        navigate('/jobs');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="inset-0 z-10 fixed flex justify-center items-center bg-black bg-opacity-50">
      <div>
        <div className="flex gap-4 flex-col justify-center items-center bg-slate-400 h-40 w-80 rounded">
          <p className="font-semibold">Choose your type</p>
          <div className="flex gap-4">
            <Button onClick={() => handleSelectingRole('candidate')}>
              Candidate
            </Button>
            <Button onClick={() => handleSelectingRole('recruiter')}>
              Recruiter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
