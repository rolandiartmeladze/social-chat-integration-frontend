"use client";
import GoogleButton from 'react-google-button';
export default function SignIn() {
    const BackendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    const handleGoogleLogin = () => {
    window.location.href = `${BackendUrl}/auth/google`;
  };

  return (
        <div className="flex flex-col gap-6 h-screen justify-center items-center">
          <GoogleButton onClick={handleGoogleLogin} />
        </div>
  );
}