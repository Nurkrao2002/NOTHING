"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function TenantOnboardingWidget() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tenant Onboarding</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="company-name">Company Name</Label>
            <Input id="company-name" />
          </div>
          <div>
            <Label htmlFor="admin-email">Admin Email</Label>
            <Input id="admin-email" type="email" />
          </div>
          <div>
            <Label htmlFor="plan-assignment">Plan Assignment</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a plan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="free">Free</SelectItem>
                <SelectItem value="trial">Trial</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="enterprise">Enterprise</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button>Onboard Tenant</Button>
        </div>
      </CardContent>
    </Card>
  );
}
