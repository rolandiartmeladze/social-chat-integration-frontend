"use client";

import { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";

import facebookIcon from "@/../public/Facebook_icon.png";
import telegramIcon from "@/../public/Telegram_icon.png";
import watsappIcon from "@/../public/WhatsApp_icon.png";
import instagramIcon from "@/../public/Instagram_icon.png";
import messengerIcon from "@/../public/Messenger_icon.png";
import googleIcon from "@/../public/Google_icon.svg";

export default function SocialIcons() {
  const icons = [
    { src: facebookIcon, alt: "Facebook", top: "125%", left: "4%" },
    { src: telegramIcon, alt: "Telegram", top: "85%", left: "9%" },
    { src: watsappIcon, alt: "WhatsApp", top: "50%", left: "16%" },
    { src: instagramIcon, alt: "Instagram", top: "32%", left: "24%" },
    { src: messengerIcon, alt: "Messenger", top: "40%", left: "33%" },
    { src: googleIcon, alt: "Google", top: "65%", left: "40%" }
  ];

  const controls = useAnimationControls();

  useEffect(() => {
    const runSequentialAnimation = async () => {
      while (true) {
        for (let i = 0; i < icons.length; i++) {
          controls.start((index) =>
            index === i
              ? {
                scale: [1, 1.1, 1],
                transition: { duration: 1, ease: "easeInOut" },
              }
              : {}
          );
          await new Promise((resolve) => setTimeout(resolve, 1000)); // 1s delay
        }
      }
    };
    runSequentialAnimation();
  }, [controls]);

  return (
    <div className="absolute w-full h-4/12">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          custom={index}
          animate={controls}
          className="absolute size-8 lg:size-13"
          style={{
            top: icon.top,
            left: icon.left,
          }}
        >
          <Image
            src={icon.src}
            alt={icon.alt}
            fill
            className="object-contain"
          />
        </motion.div>
      ))}
    </div>
  );
}
