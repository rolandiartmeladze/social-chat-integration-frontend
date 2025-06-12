"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import  Dashboard  from "@/components/Dashboard/Dashboard"
export default function Home() {
  const SignIn = () => {
    window.location.href = `/auth/sign-in`;
  };


  const { user } = useAuth();

  return (
    <main className="flex flex-col h-screen justify-center items-center px-4 text-center bg-gray-50">
      {!user ? (
        <>
          <div className="max-w-xl mb-8">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">
              მოგესალმებით ჩვენს პლატფორმაზე
            </h1>
            <p className="text-gray-600 text-lg">
              აქ შეგიძლიათ დაამატოთ თქვენი ბიზნეს მესენჯერი პლატფორმები და მიიღოთ, გაგზავნოთ შეტყობინებები ერთი სივრციდან რეალურ დროში.
            </p>
          </div>
          <Button variant="default" size="lg" onClick={SignIn}>
            Google-ით ავტორიზაცია
          </Button>
        </>
      ) : (
        <>
          <Dashboard /> 
        </>
      )}
    </main>
  );
}
