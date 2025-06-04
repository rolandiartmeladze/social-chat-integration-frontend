import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Icons } from "../icons";

type Props = {
  src?: string;
  alt: string;
};

export function UserAvatar({ src, alt }: Props) {
  const [error, setError] = useState(false);

  return (
    <Avatar className="mr-3 size-9">
      {!error && src && src !== "" ? (
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
