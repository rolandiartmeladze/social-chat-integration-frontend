"use client";

import { useIsMobile } from "@/hooks/use-mobile";

export default function HeroText() {
    const isMobile = useIsMobile();
    return (
        <div className="flex flex-col w-[55%] lg:w-3/5 items-center h-full justify-center text-center z-20 p-4 md:p-8">
            <h1 className="text-xl md:text-4xl font-bold leading-tight text-foreground">
                {!isMobile ? "All Your Chats. One Powerful Space." : "One Hub. All Your Chats."}
            </h1>
            <p className="p-2 text-base md:text-xl text-foreground">
                {!isMobile
                    ? "Tired of switching between apps to stay in touch? Our multi-platform chat hub brings your Messenger, Telegram, and more together — so you can follow conversations, reply in real time, and stay in control."
                    : "Bring Messenger, Telegram & more together — reply fast, stay in control."}
            </p>
        </div>
    );
}
