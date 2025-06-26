"use client";

import { useAuth } from "@/app/auth/useAuth/useAuth";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();
  if (!isAuthenticated) router.push("/");

  return (
      <div className="max-w-xl text-center space-y-6 p-8 rounded-2xl shadow-xl border border-border bg-secondary-foreground">
        <h1 className="text-4xl font-bold text-foreground">
          მოგესალმები, {user?.name || "მომხმარებელო"} 👋
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed">
          აქ შეგიძლიათ გადახვიდეთ თქვენს მესიჯებზე და მართოთ თქვენი კომუნიკაცია ერთ სივრცეში.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Button asChild onClick={() => router.push("/user/messages")} size="lg">
            📩 გადადი მესიჯებზე
          </Button>
          <Button asChild
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
  );
}
