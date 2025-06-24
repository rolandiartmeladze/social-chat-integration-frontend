import facebookIcon from "@/../public/Facebook_icon.png";
import telegramIcon from "@/../public/Telegram_icon.png";
import watsappIcon from "@/../public/WhatsApp_icon.png";
import instagramIcon from "@/../public/Instagram_icon.png";
import messengerIcon from "@/../public/Messenger_icon.png";
import googleIcon from "@/../public/Google_icon.svg";
import Image from "next/image";
export default function SocialIcons() {
    const icons = [
        { src: facebookIcon, alt: "Facebook", top: "125%", left: "4%" },
        { src: telegramIcon, alt: "Telegram", top: "85%", left: "9%" },
        { src: watsappIcon, alt: "WhatsApp", top: "50%", left: "16%" },
        { src: instagramIcon, alt: "Instagram", top: "32%", left: "24%" },
        { src: messengerIcon, alt: "Messenger", top: "40%", left: "33%" },
        { src: googleIcon, alt: "Google", top: "65%", left: "40%" }
    ];
    return (
    <div className="absolute w-full h-4/12">
      {icons.map((icon, index) => (
        <Image
          key={index}
          src={icon.src}
          alt={icon.alt}
          className="absolute size-13"
          style={{
            top: icon.top,
            left: icon.left,
          }}
        />
      ))}
    </div>
    )
};