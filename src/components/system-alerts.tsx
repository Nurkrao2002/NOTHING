"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function SystemAlerts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>System Alerts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Failed Integrations</h3>
            <ul>
              <li>QuickBooks: Tenant A</li>
              <li>Stripe: Tenant C</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Security Events</h3>
            <Badge variant="destructive">5 failed login attempts</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
