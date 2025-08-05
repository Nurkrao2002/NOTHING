"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function TaskList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Task List</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="task1" />
            <Label htmlFor="task1">Complete project report</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="task2" />
            <Label htmlFor="task2">Follow up with new leads</Label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
