"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function OperationsQuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2">
          <Button>Log Hours</Button>
          <Button variant="secondary">Add Project</Button>
          <Button variant="outline">Optimize Schedule</Button>
        </div>
      </CardContent>
    </Card>
  );
}
