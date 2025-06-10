import { Badge } from "@heroui/badge";
import Image from "next/image";
import logo1 from "../../../public/logo-1.png";
import logo2 from "../../../public/logo-2.png";
import logo3 from "../../../public/logo-3.png";

export default function TopBarLogo() {
    return (
        <main>
            <ul className="flex gap-5 px-6 p-2">
                <li className="h-10 bg-background relative">
                    <Badge content="25" className="!-top-2 !-right-2 bg-[#A50000]">
                        <div className="flex gap-2 items-center w-28 bg-accent p-1 border rounded-xl">
                            <Image width={40} height={40} src={logo1} alt="logo-1" />
                            <span className="font-black text-2xl">AIG</span>
                        </div>
                    </Badge>
                </li>
                <li className="relative">
                    <Badge content="115" className="!-top-2 !-right-2 bg-[#A50000]">
                        <div className="flex items-center justify-center w-12 h-12">
                            <Image width={40} height={40} src={logo2} alt="logo-2" />
                        </div>
                    </Badge>
                </li>
                <li className="relative">
                    <Badge content="29" className="!-top-2 !-right-2 bg-[#A50000]">
                        <div className="flex items-center justify-center w-12 h-12">
                            <Image width={40} height={40} src={logo3} alt="logo-3" />
                        </div>
                    </Badge>
                </li>
            </ul>
        </main>
    );
}
