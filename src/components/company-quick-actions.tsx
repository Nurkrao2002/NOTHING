"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function CompanyQuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2">
          <Button>Add User</Button>
          <Button variant="secondary">Upgrade Plan</Button>
          <Button variant="outline">Export Company Data</Button>
        </div>
      </CardContent>
    </Card>
  );
}
