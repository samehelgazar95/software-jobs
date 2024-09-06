import { UserButton } from '@clerk/clerk-react';

export default function ProfileBtn() {
  return (
    <UserButton
      aft
      appearance={{
        elements: {
          avatarBox: 'w-10 h-10',
        },
      }}
    ></UserButton>
  );
}
