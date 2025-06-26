"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import TypingText from "@/components/ui/typing-text";
export default function HeroText() {
    const isMobile = useIsMobile();
    return (
        <div className="flex gap-4 flex-col w-[55%] lg:w-3/5 items-center h-full justify-center text-center z-20 p-4 md:p-8">
            <TypingText
                className="text-xl md:text-4xl h-10 lg:h-20 px-6 py-2 font-bold leading-tight text-foreground"
                text={[
                    "All chats, one space.",
                    "Chat smarter, not harder.",
                    "Real-time. Cross-platform. Yours.",
                ]}
                speed={50}
                pause={2500}
                loop={true}
            />
            <p className="p-2 text-base md:text-xl text-foreground">
                {!isMobile
                    ? "Tired of switching between apps to stay in touch? Our multi-platform chat hub brings your Messenger, Telegram, and more together — so you can follow conversations, reply in real time, and stay in control."
                    : "Bring Messenger, Telegram & more together — reply fast, stay in control."}
            </p>
        </div>
    );
}
