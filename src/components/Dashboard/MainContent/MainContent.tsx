import RecentActivity from "./RecentActivity/RecentActivity";
import SocialStatsCard from "./SocialStatsCard/SocialStatsCard";

export default function MainContetn() {
    return (
        <main className="col-start-2 h-full bg-secondary/20 p-6 overflow-hidden">
            <div className="flex flex-col gap-3 h-full min-h-0">
                <SocialStatsCard label="Social Chat Integrations" />
                <RecentActivity className="flex-1 min-h-0 overflow-y-auto" />
            </div>
        </main>
    )
}