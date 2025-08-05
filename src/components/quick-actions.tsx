"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2">
          <Button>Add New Tenant</Button>
          <Button variant="secondary">Generate Platform Report</Button>
          <Button variant="outline">Audit Logs</Button>
        </div>
      </CardContent>
    </Card>
  );
}
