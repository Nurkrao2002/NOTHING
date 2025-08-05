"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "@/components/stat-card";

export function OperationalHighlights() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Operational Highlights</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          <StatCard title="Team Utilization" value="85%" />
          <StatCard title="Project Completion Rate" value="95%" />
        </div>
      </CardContent>
    </Card>
  );
}
