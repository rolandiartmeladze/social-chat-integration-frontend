"use client";

import { useEffect } from "react";
import GoogleButton from "react-google-button";
import { Button } from "@/components/ui/button";

export default function SignIn() {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== process.env.NEXT_PUBLIC_FRONTEND_URL) return;

      if (event.data === "authenticated") {
        console.log("✅ Authenticated!");
        window.location.href = "/user/messages";
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  const handleSignIn = () => {
    const authWindow = window.open(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google`,
      "googleOAuthPopup",
      "width=500,height=600"
    );

    if (!authWindow) {
      alert("გთხოვთ, დაუშვათ popup ფანჯრები ბრაუზერში.");
    }
  };

  const handleLogOut = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/logout`;
  };

  return (
    <div className="flex flex-col gap-6 h-screen justify-center items-center">
      <GoogleButton onClick={handleSignIn} />
      <Button onClick={handleLogOut}>
        Log Out
      </Button>
    </div>
  );
}
