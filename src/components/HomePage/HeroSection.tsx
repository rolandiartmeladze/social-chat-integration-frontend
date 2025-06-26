
import SocialIcons from './SocialIcons';
import PersonCarousel from './PersonCarousel';
import HeroText from './HeroText';
import Developer from './Developer';

export default function HeroSection() {
  return (
    <div className="flex flex-col items-end justify-between w-full h-full bg-home relative overflow-hidden">
      <PersonCarousel />
      <HeroText />
      <Developer />
      <SocialIcons />
    </div>
  );
}   