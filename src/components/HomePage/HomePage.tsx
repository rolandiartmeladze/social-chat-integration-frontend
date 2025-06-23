import SignIn from "@/app/auth/sign-in/page";
import HeroSection from "./HeroSection";

export default function Home() {
    return (
        <div className="w-full h-full flex overflow-hidden rounded-2xl bg-home">
            <div className="hidden w-[60%] h-full lg:flex items-center justify-start px-11 rounded-l-2xl">
                <HeroSection />
            </div>

            <div className="w-full h-full flex items-center justify-center p-4 rounded-r-2xl lg:w-[40%]">
                <SignIn />
            </div>
        </div>
    );
}