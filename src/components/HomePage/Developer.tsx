"use client";

import Link from "next/link";
import { UserAvatar } from "../UserAvatar/avatar";

export default function Developer() {
  return (
    <div className="flex items-center gap-1 m-1 md:gap-4 p-1 md:m-2 rounded-md hover:bg-muted transition-colors">
      <UserAvatar
        src="https://avatars.githubusercontent.com/u/13499054?v=4"
        alt="Roland Artmeladze Avatar"
        className="size-8 lg:size-12 border-2"
      />
      <div>
        <Link
          href="https://github.com/rolandiartmeladze"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:underline focus:outline-none focus:ring-2 focus:ring-ring rounded"
        >
          <h2 className="text-sm md:text-lg font-semibold">Roland Artmeladze</h2>
        </Link>
        <p className="text-xs md:text-md text-muted-foreground">Full-Stack Developer</p>
      </div>
    </div>
  );
}
