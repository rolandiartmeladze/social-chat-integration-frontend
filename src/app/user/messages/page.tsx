import InstagramChat from '@/component/instagramChat/instagram-chat';
import MessengerChat from '../../../component/messangerChat/messenger-chat';
export default function MessagesPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      MessagesPage
<div className="flex flex-rows-2 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <MessengerChat />
      <InstagramChat />
      </div>
    </div>
  );
}
