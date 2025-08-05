"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function FinanceQuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2">
          <Button>Upload Bank Statement</Button>
          <Button variant="secondary">Run Payroll</Button>
          <Button variant="outline">Generate Financial Report</Button>
        </div>
      </CardContent>
    </Card>
  );
}
