import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowDown, ArrowUp, type LucideIcon } from "lucide-react";

interface DashboardCardProps {
  title: string;
  value: string;
  change: number;
  icon: LucideIcon;
}

export function DashboardCard({
  title,
  value,
  change,
  icon: Icon,
}: DashboardCardProps) {
  const isPositive = change >= 0;

  return (
    <Card className="shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        <p
          className={`mt-1 flex items-center gap-1 text-xs ${
            isPositive ? "text-emerald-500 dark:text-emerald-400" : "text-red-500 dark:text-red-400"
          }`}
        >
          {isPositive ? (
            <ArrowUp className="h-3 w-3" />
          ) : (
            <ArrowDown className="h-3 w-3" />
          )}
          {Math.abs(change)}% from last month
        </p>
      </CardContent>
    </Card>
  );
}

// Demo showing a full dashboard row
import { Users, DollarSign, Activity, TrendingUp } from "lucide-react";

export function DashboardCardDemo() {
  return (
    <div className="mx-auto grid w-full max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <DashboardCard title="Users" value="12,400" change={20} icon={Users} />
      <DashboardCard
        title="Revenue"
        value="$45,000"
        change={12}
        icon={DollarSign}
      />
      <DashboardCard
        title="AI Usage"
        value="5M tokens"
        change={-5}
        icon={Activity}
      />
      <DashboardCard title="Growth" value="+20%" change={8} icon={TrendingUp} />
    </div>
  );
}