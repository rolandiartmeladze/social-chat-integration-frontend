"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GoogleLoginButton, FacebookLoginButton } from "react-social-login-buttons";


export default function AuthShell() {
  const Url = ({ provider }: { provider: string }) => window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/${provider}`;

  return (
    <div className="rounded-lg w-full mx-auto lg:max-w-xl p-6 flex gap-1 flex-col">
      <h1 className="text-4xl font-bold text-foreground">Welcome Back</h1>
      <p className="text-muted-foreground text-lg">
        continue with your social account to sync your Chats.
      </p>
      <div className="flex flex-col w-full">
        <GoogleLoginButton
          onClick={() => Url({ provider: "google" })}
          className="!bg-white !text-black !w-auto rounded-md px-4 py-2"
        />

        <FacebookLoginButton
          onClick={() => Url({ provider: "facebook" })}
          className="!bg-[#3b5998] !w-auto rounded-md px-4 py-2"
        />
      </div>
      <div className="space-y-2">
        <form className="space-y-4">
          <div className="w-full flex flex-col space-y-1">
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              className="w-full outline-none"
            />
          </div>
          <div className="w-full flex flex-col space-y-1">
            <label htmlFor="password" className="text-sm font-medium text-foreground">
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="Your Password"
              className="w-full outline-none"
            />
          </div>

          <Button
            type="submit"
            size={"lg"}
            onClick={() => Url({ provider: "manual" })}
            className="cursor-pointer text-lg hover:bg-background"
          >
            Sign In
          </Button>
        </form>
        <p>
         Don’t have an account? <a href="/auth/sign-up" className="text-blue-500">Sign Up</a>
        </p>
      </div>
    </div>
  );

} 