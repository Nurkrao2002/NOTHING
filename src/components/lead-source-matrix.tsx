"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function LeadSourceMatrix() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Lead Source Matrix</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Heatmap component would go here */}
        <div className="flex items-center justify-center h-full">
          <p>Lead Source Matrix Heatmap</p>
        </div>
      </CardContent>
    </Card>
  );
}
