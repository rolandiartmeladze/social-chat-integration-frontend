"use client";

import GoogleButton from "react-google-button";
import Image from "next/image";
import logo from "@/../public/logo-1.png"

export default function AuthShell() {
  const handleSignIn = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl text-center space-y-6">
        <div className="flex justify-center">
          <Image src={logo} alt="Platform Logo" width={80} height={80} />
        </div>

        <h1 className="text-2xl font-bold text-gray-800">
          მოგესალმები ჩვენს პლატფორმაზე 
        </h1>

        <p className="text-gray-600">
          გთხოვთ გაიაროთ ავტორიზაცია Google-ით.
        </p>

        <GoogleButton onClick={handleSignIn} label="შესვლა Google-ით" />

        <p className="text-sm text-gray-400 pt-4">
          თქვენი მონაცემები დაცულია და გამოიყენება მხოლოდ ავტორიზაციისთვის.
        </p>
      </div>
    </div>
  );
}
