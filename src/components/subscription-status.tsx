"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function SubscriptionStatus() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Subscription Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Plan Type</h3>
            <Badge>Enterprise</Badge>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Next Billing Date</h3>
            <p>July 1, 2024</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
