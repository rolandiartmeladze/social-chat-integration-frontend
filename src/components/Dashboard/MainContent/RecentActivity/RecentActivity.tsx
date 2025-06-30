import { Card } from "@/components/ui/card";
import ActivityHeader from "./Header/ActivityHeader";
import ActivityCard from "./ActivityCard/ActivityCard";

export default function RecentActivity({ className }: { className: string }) {
    return (
        <section className={`flex flex-col h-full ${className}`}>
            <Card className="h-full flex flex-col bg-background p-4 gap-2">
                <ActivityHeader />
                <ActivityCard />
            </Card>
        </section>
    );
}
