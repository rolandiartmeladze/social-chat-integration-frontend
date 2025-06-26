import HeroSection from "./HeroSection";
import AuthShell from "../Auth/authShell";

export default function Home() {
    return (
        <div className="w-full min-h-screen flex flex-col pb-8 lg:pb-0 lg:flex-row lg:min-h-full overflow-y-auto lg:overflow-hidden rounded-2xl">
            <div className="order-1 lg:order-2 w-full lg:w-[65%] min-h-[300px] lg:h-full flex items-center justify-center relative bg-home rounded-none lg:rounded-r-2xl">
                <HeroSection />
            </div>

            <div className="order-2 lg:order-1 w-full lg:w-[35%] flex items-center justify-center p-6 bg-secondary-background lg:bg-bg-secondary-background rounded-none lg:rounded-l-2xl">
                <AuthShell />
            </div>
        </div>
    );
}