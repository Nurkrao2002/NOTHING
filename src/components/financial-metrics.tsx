import { AreaChart, BadgePercent, Briefcase, Landmark, Receipt, Shuffle, TrendingUp, Wallet } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "@/components/stat-card";

export function FinancialMetrics() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">Financial Metrics</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <StatCard title="Revenue Tracking" value="$1.2M" change="+15% YTD" icon={TrendingUp} />
                <StatCard title="Profit Margins" value="25%" change="+2% (gross)" icon={BadgePercent} />
                <StatCard title="EBITDA" value="$300K" change="+8%" icon={Briefcase} />
                <StatCard title="Customer Lifetime Value (CLV)" value="$2,500" icon={Wallet} />
                <StatCard title="Customer Acquisition Cost (CAC)" value="$250" icon={Landmark} />
                <StatCard title="Cash Flow Insights" value="$50K" change="+20K" icon={Shuffle} />
                <StatCard title="Accounts Receivable/Payable" value="$100K / $60K" icon={Receipt} />
                <StatCard title="Sustainable Growth Rate (SGR)" value="12%" change="+1%" icon={AreaChart} />
            </CardContent>
        </Card>
    )
}
