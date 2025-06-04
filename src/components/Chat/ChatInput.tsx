"use client";

import { Icons } from "../icons";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function ChatInput() {
  return (
    <div className="flex w-full p-3 gap-2 items-center bg-secondary/60 border-t">
     <Icons.add />
      <Input className="border-none outline-none " placeholder="Write your message..." />
      <div className="flex gap-1 items-center">
        <Icons.smile /> 
        <Button className="bg-muted/60 hover:bg-muted cursor-pointer rounded-2xl" variant="secondary" size="sm">send</Button>
        </div>
    </div>
  );
}
