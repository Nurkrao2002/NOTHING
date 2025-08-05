"use client";

import { HeartHandshake, Smile, Star, UserMinus, UserPlus, UserX, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "@/components/stat-card";

export type MembershipMetricsData = {
  totalMembers: number;
  newMembers: number;
  membersLost: number;
  retentionRate: number;
  churnRate: number;
  csat: number;
  nps: number;
};

export function MembershipMetrics({ data }: { data: MembershipMetricsData }) {
    if (!data) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Membership Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>No membership data available.</p>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">Membership Metrics</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <StatCard title="Total Members" value={data.totalMembers.toLocaleString()} icon={Users} />
                <StatCard title="New Members Gained" value={data.newMembers.toLocaleString()} icon={UserPlus} />
                <StatCard title="Members Lost" value={data.membersLost.toLocaleString()} icon={UserMinus} />
                <StatCard title="Retention Rate" value={`${data.retentionRate}%`} icon={HeartHandshake} />
                <StatCard title="Churn Rate" value={`${data.churnRate}%`} icon={UserX} />
                <StatCard title="Client Satisfaction (CSAT)" value={`${data.csat}%`} icon={Smile} />
                <StatCard title="Net Promoter Score (NPS)" value={data.nps} icon={Star} />
            </CardContent>
        </Card>
    )
}
