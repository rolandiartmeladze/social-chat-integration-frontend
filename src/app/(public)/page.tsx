"use client";

import AuthSAuthShell from "@/app//auth/sign-in/page";
import { useAuth } from "../auth/useAuth/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function IndexPage() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (isAuthenticated) 
      { router.push("/dashboard") } 
    else { router.push("/") }
  }, [isAuthenticated])

  return (
    <div>
      <AuthSAuthShell />
    </div>
  );
}