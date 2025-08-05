"use client";

import { Activity, BadgeDollarSign, CheckCircle, Clock, UserCog } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "@/components/stat-card";

export type OperationalMetricsData = {
    utilizationRate: number;
    projectCompletionRate: number;
    serviceDeliveryTime: number;
    revenuePerEmployee: number;
    employeeUtilizationRate: number;
};

export function OperationalMetrics({ data }: { data: OperationalMetricsData }) {
    if (!data) {
        return <div>No operational data available.</div>;
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">Operational Metrics</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <StatCard title="Utilization Rate" value={`${data.utilizationRate}%`} icon={Activity} />
                <StatCard title="Project Completion Rate" value={`${data.projectCompletionRate}%`} icon={CheckCircle} />
                <StatCard title="Service Delivery Time" value={`${data.serviceDeliveryTime}h`} icon={Clock} />
                <StatCard title="Revenue Per Employee" value={`$${data.revenuePerEmployee.toLocaleString()}`} icon={BadgeDollarSign} />
                <StatCard title="Employee Utilization Rate" value={`${data.employeeUtilizationRate}%`} icon={UserCog} />
            </CardContent>
        </Card>
    )
}
