"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function SalesQuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2">
          <Button>Add Lead</Button>
          <Button variant="secondary">Launch Campaign</Button>
          <Button variant="outline">Export Sales Forecast</Button>
        </div>
      </CardContent>
    </Card>
  );
}
