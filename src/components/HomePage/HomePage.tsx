import HeroSection from "./HeroSection";
import AuthShell from "../Auth/authShell";

export default function Home() {
    return (
        <div className="w-full h-full flex overflow-hidden rounded-2xl">
            <div className="w-full h-full flex items-center justify-center p-4 rounded-l-2xl lg:w-[30%] bg-secondary-background lg:bg-transparent">
                <AuthShell />
            </div>
            <div className="hidden w-[70%] h-full lg:flex items-center justify-start rounded-l-2xl">
                <HeroSection />
            </div>
        </div>
    );
}