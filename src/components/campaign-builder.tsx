"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function CampaignBuilder() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Campaign Builder</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="budget">Budget</Label>
            <Input id="budget" type="number" />
          </div>
          <div>
            <Label htmlFor="target-audience">Target Audience</Label>
            <Input id="target-audience" />
          </div>
          <div>
            <Label htmlFor="duration">Duration</Label>
            <Input id="duration" />
          </div>
          <Button>Simulate ROI</Button>
        </div>
      </CardContent>
    </Card>
  );
}
