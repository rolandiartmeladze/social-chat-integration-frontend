"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
export default function Home() {
  const SignIn = () => {
    window.location.href = `/auth/sign-in`;
  };

  const Messages = () => {
    window.location.href = `/auth/sign-in`;
  };

  const {user} = useAuth();

  return (
    <main className="flex flex-col h-screen justify-center items-center">
      {!user ? 
        <Button variant="secondary" onClick={SignIn}>
          Go Auth Page
        </Button>
        :  
        <>
        <h1>
          Welcome {user.displayName}
        </h1>
        <Button variant="outline" onClick={Messages}>
          Go Messages page
        </Button>       
        </>     

        }
    </main>
  );
}
