"use client";

import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const { user } = useAuth();

  const goToMessages = () => {
    window.location.href = "/user/messages";
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center text-white px-4"
      style={{
        background:
          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">
        Welcome, {user?.displayName || "User"}
      </h1>
      <p className="mb-8 max-w-md text-center text-lg drop-shadow-md">
        აქ შეგიძლიათ გადახვიდეთ თქვენს მესიჯებზე და მართოთ თქვენი კომუნიკაცია.
      </p>
      <Button size="lg" variant="outline" onClick={goToMessages}>
        Go to Messages
      </Button>
    </div>
  );
}
