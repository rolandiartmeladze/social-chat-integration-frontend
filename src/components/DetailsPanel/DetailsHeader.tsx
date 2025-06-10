"use client";
import { Icons } from "../icons";

export default function DetailsHeader() {
    return (
        <div className="flex items-center justify-between w-full p-4 h-16 border-b gap-11">
            <div className="flex gap-7">
                <samp className="text-lg font-bold underline">Details</samp>
                <samp className="flex gap-3"><Icons.stars className="size-6" />  <span>Copilote</span></samp>
            </div>
            <samp><Icons.panelRight className="size-4" /></samp>
        </div>
    );
}
