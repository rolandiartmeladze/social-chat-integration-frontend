import { Icons } from "@/components/icons";
import StatsCard from "./StatsCard";

export default function SocialStatsCard({ label, className }: { label: string, className?: string }) {
  return (
    <div className={`flex w-full flex-col ${className}`}>
      <h1 className="text-2xl font-bold text-foreground py-1">{label}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <StatsCard icon={<Icons.userAvatar className="size-7" />} value="9,556" label="Total Conversations" />
        <StatsCard icon={<Icons.chart className="size-7" />} value="74,595" label="Unread Messages" />
        <StatsCard icon={<Icons.active className="size-7" />} value="196" label="Active Users" />
      </div>
    </div>
  );
}
