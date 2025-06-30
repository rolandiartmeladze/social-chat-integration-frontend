import { Card } from "@/components/ui/card";

interface CardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

export default function StatsCard({ icon, value, label }: CardProps) {
  return (
    <Card className="bg-secondary text-foreground shadow-lg rounded-xl p-4 flex flex-row items-center gap-4">
      <div className="text-foreground">{icon}</div>
      <div className="w-auto">
        <h2 className="text-muted-foreground text-sm uppercase tracking-wide">{label}</h2>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </Card>
  );
}
