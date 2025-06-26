"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SocialLoginButtons from "./SocialLoginButtons";
import Link from "next/link";

export default function AuthShell() {

  const Url = ({ provider }: { provider: string }) =>
    (window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/${provider}`);

  return (
    <div className="w-full max-w-lg mx-auto p-3 space-y-6 rounded-2xl">
      <div className="text-center space-y-2">
        <h1 className="text-2xl md:text-2xl font-bold text-foreground">Welcome Back</h1>
        <p className="text-sm md:text-base text-muted-foreground">
          Continue with your social account to sync your chats.
        </p>
      </div>

<SocialLoginButtons onClick={(provider) => {
  window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/${provider}`;
}} />

      <div className="flex items-center gap-3">
        <hr className="flex-1 border-muted" />
        <span className="text-muted-foreground text-sm">or continue with email</span>
        <hr className="flex-1 border-muted" />
      </div>

      <form onSubmit={() => Url({ provider: "manual" })} className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-1 text-sm font-medium text-foreground">
            Email Address
          </label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="w-full"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block mb-1 text-sm font-medium text-foreground">
            Password
          </label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            className="w-full"
            required
          />
        </div>

        <Button asChild type="submit" size="lg" className="w-full font-semibold cursor-pointer">
          <Link href="/auth/sign-in">Sign In</Link>
        </Button>
      </form>

      <p className="text-center text-sm text-muted-foreground">
        Don’t have an account?{" "}
        <Link href="/auth/sign-up" className="text-blue-600 font-semibold hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
