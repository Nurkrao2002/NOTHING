"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "@/components/stat-card";

export function MarketingOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Marketing Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          <StatCard title="Lead Generation (monthly)" value="1,234" />
          <StatCard title="Conversion Rate" value="2.5%" />
        </div>
      </CardContent>
    </Card>
  );
}
