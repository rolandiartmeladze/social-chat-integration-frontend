import Image from 'next/image';
import person from '@/../public/bg_persone.png';
import SocialIcons from './SocialIcons';

export default function HeroSection() {
  return (
<div className="flex flex-col md:flex-cols w-full h-full items-end justify-between relative bg-home overflow-hidden">
  <div className="absolute md:w-1/2 h-[300px] left-0 md:h-full flex items-center justify-start -bottom-15">
    <Image
      src={person}
      alt="Hero Illustration"
      width={500}
      height={500}
      className="object-contain z-10"
    />
  </div>
  <div className="flex flex-col w-3/5 items-center h-full justify-center text-center space-y-6 z-20 p-4 md:p-8">
    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
      All Your Chats. One Powerful Space.
    </h1>
    <p className="text-lg md:text-xl text-foreground">
    Tired of switching between apps to stay in touch? <br />
    Our multi-platform chat hub brings your Messenger, Telegram, and more together — so you can follow conversations, reply in real time, and stay in control.
  </p>
    </div>
    <SocialIcons />
  </div>
);
}   