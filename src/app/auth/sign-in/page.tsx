"use client";
import GoogleButton from 'react-google-button';
import { Button } from '@/components/ui/button';

export default function SignIn() {
  const handleSignIn = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google`;
  };

  const handleLogOut = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/logout`;
  };

  return (
    <div className="flex flex-col gap-6 h-screen justify-center items-center">
      <GoogleButton onClick={handleSignIn} />
      <Button onClick={handleLogOut}>Log Out</Button>
    </div>
  );
}
