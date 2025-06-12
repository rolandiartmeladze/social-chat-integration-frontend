"use client";

import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const { user } = useAuth();

  const goToMessages = () => {
    window.location.href = "/user/messages";
  };
  const logout = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/logout`;
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center px-4"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <div className="text-center max-w-xl">
        <h1 className="text-4xl font-bold mb-4">
          Welcome, {user?.displayName || "User"}
        </h1>

        <p className="mb-8 text-lg text-[var(--muted-foreground)]">
          აქ შეგიძლიათ გადახვიდეთ თქვენს მესიჯებზე და მართოთ თქვენი კომუნიკაცია ერთ სივრცეში.
        </p>

        <Button
          size="lg"
          style={{
            backgroundColor: "var(--primary)",
            color: "var(--foreground)",
            border: "1px solid var(--border)",
          }}
          onClick={goToMessages}
        >
          გადადი მესიჯებზე
        </Button>
        <Button
          size="lg"
          style={{
            backgroundColor: "var(--primary)",
            color: "var(--foreground)",
            border: "1px solid var(--border)",
          }}
          onClick={logout}
        >
          სისტემიდან გამოსვლა
        </Button>
      </div>
    </div>
  );
}
