"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function PlatformSettingsPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Platform Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
            <Switch id="maintenance-mode" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="api-rate-limits">API Rate Limits</Label>
            <Switch id="api-rate-limits" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
