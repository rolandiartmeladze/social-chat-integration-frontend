import React, { useState, useEffect } from "react";

interface TypingTextProps {
  text: string[];
  speed?: number;
  pause?: number;
  loop?: boolean;
  className?: string;
}

export default function TypingText({
  text,
  speed = 100,
  pause = 1500,
  loop = true,
  className = "",
}: TypingTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayedText.length < text[currentTextIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedText(text[currentTextIndex].slice(0, displayedText.length + 1));
        }, speed);
      } else {
        timeout = setTimeout(() => {
          setTyping(false);
        }, pause);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, speed / 2);
      } else {
        setTyping(true);
        setCurrentTextIndex((prev) => {
          const next = prev + 1;
          if (next >= text.length) {
            return loop ? 0 : prev;
          }
          return next;
        });
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, typing, currentTextIndex, text, speed, pause, loop]);

  return (
    <h1 className={`${className}`}>
      {displayedText}
    </h1>
  );
}
