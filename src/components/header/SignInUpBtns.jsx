import { LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SignInUpBtns({
  setShowSignInOverlay,
  setShowSignUpOverlay,
}) {
  return (
    <div className="flex gap-2">
      <Button variant="outline" onClick={() => setShowSignInOverlay(true)}>
        <LogIn className="mr-2" />
        Sign In
      </Button>

      <Button variant="outline" onClick={() => setShowSignUpOverlay(true)}>
        Sign Up
      </Button>
    </div>
  );
}
