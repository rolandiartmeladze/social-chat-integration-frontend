"use client";

import Image from "next/image";
import logo from "@/../public/logo-1.png"
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

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
      <div>
        <form className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            className="w-full outline-none"
          />
          <Input
            type="password"
            placeholder="Password"
            className="w-full outline-none"
          />
          <Button
            type="submit"
            variant="default"
            className="w-full cursor-pointer bg-background"
            >
            Sign In
          </Button>
        </form>
      </div>

      <div className="flex space-x-4">
        <Button
          variant="outline"
          size="icon"
          onClick={handleGoogleSignIn}
          aria-label="Sign in with Google"
          className="cursor-pointer"
        >
          <Icons.google className="size-6" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={handleFacebookSignIn}
          aria-label="Sign in with Facebook"
          className="cursor-pointer"
        >
          <Icons.facebook className="size-6" />
        </Button>
      </div>
    </div>
  );
}
