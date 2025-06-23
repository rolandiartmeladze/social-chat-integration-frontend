export default function HeroSection() {
  return (
    <div className="w-full text-left space-y-6">
     <h1 className="text-4xl md:text-3xl font-bold leading-tight">
        Welcome to Cross-Platform Chat
      </h1>
      <p className="text-lg md:text-xl text-white/90">
        Connect all your messaging platforms in one place. 
        Manage conversations, respond in real time, and stay organized — 
        whether it is Facebook, Telegram, or more.
        <br /><br />
        Our unified messenger app is currently in beta, and we are actively improving it. 
        Join now and be part of the journey!
      </p>
      <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-200 transition">
        Get Started
      </button>
    </div>
  );
}   