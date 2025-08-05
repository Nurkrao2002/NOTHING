"use client";

import { CircleDollarSign, Crosshair, Database, GitCompareArrows, Lightbulb, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "@/components/stat-card";

export type SalesMarketingMetricsData = {
  leadGeneration: number;
  conversionRate: number;
  salesPipelineValue: number;
  avgRevenuePerClient: number;
  marketingRoi: number;
  costPerLead: number;
};

export function SalesMarketingMetrics({ data }: { data: SalesMarketingMetricsData }) {
    if (!data) {
        return <div>No sales & marketing data available.</div>;
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">Sales & Marketing Metrics</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <StatCard title="Lead Generation" value={data.leadGeneration.toLocaleString()} icon={Lightbulb} />
                <StatCard title="Conversion Rates" value={`${data.conversionRate}%`} icon={GitCompareArrows} />
                <StatCard title="Sales Pipeline Value" value={`$${data.salesPipelineValue.toLocaleString()}`} icon={Database} />
                <StatCard title="Average Revenue per Client" value={`$${data.avgRevenuePerClient.toLocaleString()}`} icon={CircleDollarSign} />
                <StatCard title="Marketing ROI" value={`${data.marketingRoi}x`} icon={Target} />
                <StatCard title="Cost Per Lead (CPL)" value={`$${data.costPerLead}`} icon={Crosshair} />
            </CardContent>
        </Card>
    )
}
