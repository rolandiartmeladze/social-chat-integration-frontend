"use client";
import GoogleButton from 'react-google-button';
import { Button } from '@/components/ui/button';

export default function SignIn() {
    const BackendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    const handleGoogleLogin = () => {
    window.location.href = `${BackendUrl}/auth/google`;
  };
      const handleLogOut = () => {
    window.location.href = `${BackendUrl}/auth/logout`;
  };


  return (
        <div className="flex flex-col gap-6 h-screen justify-center items-center">
          <GoogleButton onClick={handleGoogleLogin} />
          <Button onClick={handleLogOut} >
            Log Out
          </Button>
        </div>
  );
}