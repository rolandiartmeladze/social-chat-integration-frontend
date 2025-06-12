"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Icons } from "../icons";

type Props = {
  src?: string;
  alt?: string;
  className?: string;
};

export function UserAvatar({ src, alt, className }: Props) {
  const [error, setError] = useState(false);

  return (
    <Avatar className={`${className || ""}`}>
      {!error && !!src?.trim() ? (
        <AvatarImage
          src={src}
          alt={alt}
          onError={() => setError(true)}
        />
      ) : (
        <AvatarFallback>
          <Icons.userAvatar />
        </AvatarFallback>
      )}
    </Avatar>
  );
}
