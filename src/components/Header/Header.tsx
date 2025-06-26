"use client";

import { Button } from "../ui/button";
import { Icons } from "../icons";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png";
import TopBarLogo from "../TopBarLogo/TopBarLogo";
import { useAuth } from "@/app/auth/useAuth/useAuth";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Topbar() {
    const { user } = useAuth();
    const pathname = usePathname();

    const publicLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Support", href: "/support" },
        { name: "Contact", href: "/contact", variant: "default" },
    ];

    return (
        <nav className="bg-background pt-2 px-4 flex justify-between items-center">
            <div className="flex items-center gap-2 p-2">
                <Image src={logo} alt="ChatHub Logo" width={50} height={50} className="rounded-full" />
                <span className="text-lg font-bold text-foreground">ChatHub.io</span>
            </div>

            <div className="flex gap-4 items-center">
                {!user ? (
                    publicLinks.map(({ name, href }) => {
                        const isActive = pathname === href;
                        const isContact = name === "Contact";
                        return (
                            <Button
                                key={name}
                                asChild
                                size="lg"
                                variant={isActive ? "secondary" : "outline"}
                                className={cn(
                                    "rounded-sm text-base font-bold text-foreground decoration-primary border-b",
                                    isActive && !isContact && "underline underline-offset-4  border-0",
                                    isContact && !isActive && "bg-primary text-foreground hover:bg-muted",
                                    isContact && isActive && "underline underline-offset-4 decoration-primary"
                                )}
                            >
                                <Link href={href}>{name}</Link>
                            </Button>
                        );
                    })
                ) : (
                    <>
                        <TopBarLogo />

                        <Button
                            asChild
                            variant="secondary"
                            size="lg"
                            className="rounded-sm bg-muted text-foreground py-5 px-4 mt-0 flex gap-2 items-center justify-center"
                        >
                            <Link href="/">
                                <Icons.chat />
                                <span className="text-base font-bold">Staff Chat</span>
                            </Link>
                        </Button>
                    </>
                )}
            </div>
        </nav>
    );
}
