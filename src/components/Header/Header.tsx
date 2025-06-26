"use client";

import { Button } from "../ui/button";
import { Icons } from "../icons";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png";
import TopBarLogo from "../TopBarLogo/TopBarLogo";
import { useAuth } from "@/app/auth/useAuth/useAuth";
import PublicMenu from "./PublicMenu";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Topbar() {
    const { user } = useAuth();
    const isMobile = useIsMobile();
    return (
        <nav className="bg-background px-4 flex justify-between items-center">
            <div className="flex items-center gap-2 p-2">
                <Image src={logo} alt="ChatHub Logo" width={50} height={50} className="rounded-full" />
                <span className="text-lg font-bold text-foreground">ChatHub.io</span>
            </div>

            <div className="flex gap-4 items-center">
                {user ? (
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
                            </Link> </Button>
                    </>
                ) : (<>
                    {isMobile ? (<Icons.menu className="size-12 text-muted-foreground" />) : (<PublicMenu />)}
                </>)
                }
            </div>
        </nav>
    );
}
