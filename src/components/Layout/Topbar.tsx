import { Button } from "../ui/button";
import { Icons } from "../icons";
import Link from "next/link";

export default function Topbar() {
    return (
        <nav className="bg-background p-4 flex justify-between">
            <ul className="flex">
                <li>
                    <a href="#" className="text-white hover:text-gray-300">Home</a>
                </li>
            </ul>
            <Button
                asChild
                variant="secondary"
                size="lg"
                className="rounded-[5px] py-5 px-4 flex gap-6 items-center justify-center"
            >
                <Link href="/staffChat">
                    <Icons.chat /> <samp>Staff Chat</samp>
                </Link>
            </Button>
        </nav>
    );
};
