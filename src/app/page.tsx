"use client";

import { useAuth } from "@/app/auth/useAuth/useAuth";
import Topbar from "@/components/Layout/Topbar";
import AuthshShall from "@/app/auth/sign-in/page"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();

  const { user, loading } = useAuth();
  useEffect(() => {
    if (!loading && user) {
      router.push("/dashboard");
    } else { router.push("/") }
  }, [user, loading]);
  return (
    <div className="flex flex-col h-screen justify-start items-center px-4 text-center bg-background ">
      <div className="w-full flex flex-col justify-start">
        <Topbar />
      </div>
      <AuthshShall />
    </div>
  );
}
