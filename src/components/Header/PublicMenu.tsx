"use client";

import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function PublicMenu() {
    const pathname = usePathname();

    const publicLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Support", href: "/support" },
        { name: "Contact", href: "/contact", variant: "default" },
    ];

    return (
        <div className="flex gap-4 items-center">
            {publicLinks.map(({ name, href }) => {
                const isActive =
                    href !== "/"
                        ? pathname.startsWith(href)
                        : pathname === "/";

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
            }
        </div>
    )

}