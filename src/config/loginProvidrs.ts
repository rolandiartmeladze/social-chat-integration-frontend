import googleIcon from "@/../public/Google_icon.svg";
import facebookIcon from "@/../public/Facebook_icon.png";
import telegramIcon from "@/../public/Telegram_icon.png";

export const providers = [
  {
    name: "Google",
    icon: googleIcon,
    bgColor: "bg-foreground",
    textColor: "text-background",
    hoverColor: "hover:bg-secondary"
  },
  {
    name: "Facebook",
    icon: facebookIcon,
    bgColor: "bg-[#3b5998]",
    textColor: "text-white"
  },
  {
    name: "Telegram",
    icon: telegramIcon,
    bgColor: "bg-[#0088cc]",
    textColor: "text-white",
    hoverColor: "hover:bg-[#007bb5]"
  }
];
