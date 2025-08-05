"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Notifications() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          <li>Project X delayed</li>
          <li>New leads assigned</li>
        </ul>
      </CardContent>
    </Card>
  );
}
