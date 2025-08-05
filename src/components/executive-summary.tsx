"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ExecutiveSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Executive Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <p>AI-Generated Insights: "Revenue up 12% MoM; churn risk in Segment X."</p>
      </CardContent>
    </Card>
  );
}
