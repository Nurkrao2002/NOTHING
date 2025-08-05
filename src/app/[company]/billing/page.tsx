"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function BillingPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user && user.role !== "Company Admin") {
        router.push(`/${user.company.slug}/dashboard`);
    }
  }, [user, router]);

  const subscription = {
    plan: "free",
    status: "active",
  };

  if (!user || user.role !== "Company Admin") {
    return (
        <div className="flex h-screen items-center justify-center">
            <p>Loading or Access Denied...</p>
        </div>
    );
  }

  return (
    <div className="p-4 md:p-8">
      <Card>
        <CardHeader>
          <CardTitle>Subscription & Billing</CardTitle>
          <CardDescription>View your current subscription plan and status.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="flex items-center justify-between rounded-lg border p-4">
                <div>
                    <h3 className="text-lg font-semibold">Current Plan</h3>
                    <p className="text-2xl font-bold capitalize">{subscription.plan}</p>
                </div>
                <Badge variant={subscription.status === 'active' ? 'default' : 'destructive'}>
                    {subscription.status}
                </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
                This is a sample billing page. In the future, you will be able to upgrade your plan and manage your billing details here.
            </p>
        </CardContent>
      </Card>
    </div>
  );
}
