"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { providers } from "@/config/loginProvidrs";


interface Props {
    onClick: (provider: string) => void;
}

export default function SocialLoginButtons({ onClick }: Props) {
    return (
        <div className="flex gap-4 md:gap-2 flex-wrap justify-center items-start">
            {providers.map(({ name, icon, bgColor, textColor = "text-white", hoverColor }) => (
                <Button asChild
                    key={name}
                    onClick={() => onClick(name.toLowerCase())}
                    variant="outline"
                    size="lg"
                    className={`w-12 px-2 cursor-pointer flex items-center justify-center md:justify-start gap-2 ${bgColor} ${textColor} ${hoverColor ?? ""}`}
                >
                    <Image src={icon} alt={name} className="size-8" />
                </Button>
            ))}
        </div>
    );
}
