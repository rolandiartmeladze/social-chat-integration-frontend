"use client";

import Image from "next/image";
import logo from "@/../public/logo-1.png"
import {
  GoogleLoginButton,
  FacebookLoginButton,
} from "react-social-login-buttons";

export default function AuthShell() {
  const handleGoogleSignIn = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google`;
  };
  const handleFacebookSignIn = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/facebook`;
  };

  return (
    <div className="bg-secondary-foreground text-foreground rounded-2xl shadow-xl p-10 max-w-md w-full flex flex-col items-center text-center space-y-6">
      <Image
        src={logo}
        alt="Logo"
        width={60}
        height={60}
        className="rounded-full"
      />
      <h1 className="text-2xl font-semibold text-foreground">მოგესალმებით!</h1>
      <p className="text-foreground text-base">
        სისტემაში შესასვლელად გამოიყენეთ თქვენი Google ან facebook ანგარიში.
      </p>
      <GoogleLoginButton onClick={handleGoogleSignIn} className="flex !w-auto " />
      <FacebookLoginButton onClick={handleFacebookSignIn} className="flex !w-auto " />
    </div>
  );
}
