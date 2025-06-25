"use client";

import SocialIcons from './SocialIcons';
import PersonCarousel from './PersonCarousel';

export default function HeroSection() {
  return (
    <div className="flex flex-col md:flex-cols w-full h-full items-end justify-between relative bg-home overflow-hidden">
      
      <PersonCarousel />

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