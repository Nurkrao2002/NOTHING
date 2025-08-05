"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function ForecastingTool() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Forecasting Tool</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="project-revenue">Project Revenue</Label>
            <Input id="project-revenue" type="number" />
          </div>
          <div>
            <Label htmlFor="project-expenses">Project Expenses</Label>
            <Input id="project-expenses" type="number" />
          </div>
          <Button>Forecast</Button>
        </div>
      </CardContent>
    </Card>
  );
}
