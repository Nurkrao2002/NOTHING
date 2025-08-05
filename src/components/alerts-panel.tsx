"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AlertsPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Alerts</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          <li>Tenant X nearing storage limit</li>
          <li>Low API usage for Tenant Y</li>
        </ul>
      </CardContent>
    </Card>
  );
}
