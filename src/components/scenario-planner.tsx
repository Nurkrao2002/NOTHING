"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export function ScenarioPlanner() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Scenario Planner</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="revenue-growth">Revenue Growth</Label>
            <Slider id="revenue-growth" defaultValue={[10]} max={100} step={1} />
          </div>
          <div>
            <Label htmlFor="churn">Churn</Label>
            <Slider id="churn" defaultValue={[2]} max={10} step={0.1} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
