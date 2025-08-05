"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "@/components/stat-card";

export function CompanyOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Company Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-3">
          <StatCard title="Total Revenue (YTD)" value="$1,234,567" />
          <StatCard title="Active Members" value="1,234" />
          <StatCard title="Team Utilization" value="85%" />
        </div>
      </CardContent>
    </Card>
  );
}
