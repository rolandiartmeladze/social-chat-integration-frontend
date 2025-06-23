"use client";

import { useAuth } from "../auth/useAuth/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Home from "@/components/HomePage/HomePage";

export default function IndexPage() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (isAuthenticated) 
      { router.push("/dashboard") } 
    else { router.push("/") }
  }, [isAuthenticated, router])

  return (
    <div className="w-full h-full flex overflow-hidden">
      <Home />
    </div>
  );
}