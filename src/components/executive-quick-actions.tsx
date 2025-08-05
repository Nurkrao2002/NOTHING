"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ExecutiveQuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2">
          <Button>View Full Report</Button>
          <Button variant="secondary">Schedule Board Meeting</Button>
          <Button variant="outline">Competitor Alerts</Button>
        </div>
      </CardContent>
    </Card>
  );
}
