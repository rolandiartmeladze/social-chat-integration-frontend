"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import TypingText from "@/components/ui/typing-text";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export default function HeroText() {
    const isMobile = useIsMobile();
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShow(true);
        }, 500);

        return () => clearTimeout(timeout);
    }, []);
    return (
        <div className="flex gap-4 flex-col w-[55%] lg:w-3/5 items-center h-full justify-center text-center z-20 p-4 md:p-8">
            <TypingText
                className="text-lg md:text-4xl h-10 lg:h-20 px-0 md:px-6 py-2 font-bold leading-tight text-foreground"
                text={[
                    "All chats, one space.",
                    "Chat smarter, not harder.",
                    "Real-time. Cross-platform. Yours.",
                ]}
                speed={50}
                pause={2500}
                loop={true}
            />
            {
                show && (
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="p-2 text-base md:text-xl text-foreground"
                    >
                        {isMobile
                            ? "Bring Messenger, Telegram & more together — reply fast, stay in control."
                            : "Tired of switching between apps to stay in touch? Our multi-platform chat hub brings your Messenger, Telegram, and more together — so you can follow conversations, reply in real time, and stay in control."}
                    </motion.p>
                )}
        </div>
    );
}
