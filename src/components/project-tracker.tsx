"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ProjectTracker() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Tracker</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Kanban board component would go here */}
        <div className="flex items-center justify-center h-full">
          <p>Kanban Board</p>
        </div>
      </CardContent>
    </Card>
  );
}
