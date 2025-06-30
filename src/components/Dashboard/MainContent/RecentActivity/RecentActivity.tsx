import { Card } from "@/components/ui/card";
import AddIntegrationButton from "../../AddIntegrationButton";
import ActivityHeader from "./ActivityHeader";

export default function RecentActivity({ className }: { className: string }) {
    return (
        <section className={`${className}`}>
            <Card className="h-full flex flex-col bg-background p-4">
                <div className="flex items-end justify-between mb-4">
                    <ActivityHeader />
                    <AddIntegrationButton className="bg-[var(--info)]" />
                </div>

                <div className="flex-1 overflow-y-auto space-y-2">
                    hear is content
                </div>
            </Card>
        </section>
    );
}
