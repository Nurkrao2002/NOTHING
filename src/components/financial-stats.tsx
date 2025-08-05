
import { AreaChart, BadgePercent, DollarSign, Target, TrendingUp, Wallet } from "lucide-react";
import { StatCard } from "@/components/stat-card";
import type { FinancialStats as FinancialStatsType } from "@/lib/financial-aggregator";

export function FinancialStats({ stats }: { stats: FinancialStatsType }) {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
            <StatCard title="Revenue" value={stats.revenue.value} change={stats.revenue.change} icon={DollarSign} />
            <StatCard title="Gross Margin" value={stats.grossMargin.value} change={stats.grossMargin.change} icon={TrendingUp} />
            <StatCard title="Net Margin" value={stats.netMargin.value} change={stats.netMargin.change} icon={TrendingUp} />
            <StatCard title="EBITDA" value={stats.ebitda.value} change={stats.ebitda.change} icon={AreaChart} />
            <StatCard title="Cash Flow" value={stats.cashFlow.value} change={stats.cashFlow.change} icon={Wallet} />
            <StatCard title="Customer LTV" value={stats.customerLtv.value} change={stats.customerLtv.change} icon={BadgePercent} />
            <StatCard title="Customer CAC" value={stats.customerCac.value} change={stats.customerCac.change} icon={Target} />
        </div>
    )
}
