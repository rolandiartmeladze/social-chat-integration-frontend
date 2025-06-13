"use client";

import { useAuth } from "@/app/auth/useAuth/useAuth";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      console.log("ავტორიზებული:", user);
    }
  }, [user, loading]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-background text-muted-foreground text-lg">
        იტვირთება...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-background text-muted-foreground text-lg">
        მომხმარებელი არ არის ავტორიზებული.
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-xl text-center space-y-6 p-8 rounded-2xl shadow-xl border border-border bg-card">
        <h1 className="text-4xl font-bold text-foreground">
          მოგესალმები, {user?.displayName || user?._json?.name || "მომხმარებელო"} 👋        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed">
          აქ შეგიძლიათ გადახვიდეთ თქვენს მესიჯებზე და მართოთ თქვენი კომუნიკაცია ერთ სივრცეში.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Button onClick={() => router.push("/user/messages")} size="lg">
            📩 გადადი მესიჯებზე
          </Button>
          <Button
            onClick={() =>
              router.push(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/logout`)
            }
            size="lg"
            variant="outline"
            className="border-muted-foreground text-muted-foreground hover:text-foreground"
          >
            🚪 გამოსვლა
          </Button>
        </div>
      </div>
    </div>
  );
}
