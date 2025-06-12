"use client";

import { useAuth } from "@/app/auth/useAuth/useAuth";
import  Dashboard  from "@/components/Dashboard/Dashboard"
import Topbar from "@/components/Layout/Topbar";
import AuthshShall from "@/app/auth/sign-in/page"
export default function Home() {


  const { user } = useAuth();
console.log(user?.name)
  return (
    <div className="flex flex-col h-screen justify-start items-center px-4 text-center bg-background ">
      {!user ? (
        <>
          <div className="w-full flex flex-col justify-start">
           <Topbar />
          </div>
          <AuthshShall />
        </>
      ) : (
        <>
          <Dashboard /> 
        </>
      )}
    </div>
  );
}
