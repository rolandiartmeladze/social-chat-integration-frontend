import { Button } from "../ui/button";
import { Icons } from "../icons";
import Link from "next/link";
import TopBarLogo from "../TopBarLogo/TopBarLogo";

export default function Topbar() {
    return (
        <nav className="bg-background pt-2 px-4 flex justify-between">
        <TopBarLogo />
            <Button
                asChild
                variant="secondary"
                size="lg"
                className="rounded-sm bg-muted text-foreground py-5 px-4 mt-3 flex gap-6 items-center justify-center"
            >
                <Link href="/">
                    <Icons.chat /> <samp className="text-base font-bold">Staff Chat</samp>
                </Link>
            </Button>
        </nav>
    );
};
