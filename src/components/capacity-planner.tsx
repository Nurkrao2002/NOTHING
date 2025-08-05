"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function CapacityPlanner() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Capacity Planner</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Gantt chart component would go here */}
        <div className="flex items-center justify-center h-full">
          <p>Gantt Chart</p>
        </div>
      </CardContent>
    </Card>
  );
}
