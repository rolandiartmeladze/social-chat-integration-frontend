import { Button } from "@/components/ui/button";

export default function Home() {
  const SignIn = () => {
    window.location.href = `/auth/sign-in`;}
  return (
      <main className="flex flex-col">
        <h1>
          <Button onClick={SignIn}>
            Go Auth Page
          </Button>
        </h1>
      </main>
  );
}
