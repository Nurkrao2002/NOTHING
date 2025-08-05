"use client";

import { useAuth } from "@/context/auth-context";
import { mockDataByCompany } from "@/lib/mock-data";
import { DashboardHeader } from "@/components/dashboard-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function RecentActivityPage() {
  const { user } = useAuth();

  if (!user) {
    return (
        <div className="flex h-screen items-center justify-center">
            <p>Loading or Access Denied...</p>
        </div>
    );
  }

  const companyData = mockDataByCompany[user.company.id];
  let activityLog = [];

  if (user.role === 'Company Admin' || user.role === 'CEO') {
    activityLog = [
        ...companyData.activityLog.finance,
        ...companyData.activityLog.sales,
        ...companyData.activityLog.operations,
    ];
  } else if (user.role === 'Finance Team') {
    activityLog = companyData.activityLog.finance;
  } else if (user.role === 'Sales & Marketing') {
    activityLog = companyData.activityLog.sales;
  } else if (user.role === 'Operations Team') {
    activityLog = companyData.activityLog.operations;
  }

  return (
    <>
      <DashboardHeader 
        title="Recent Activity" 
        description="A log of recent actions and events within the dashboard." 
      />
      <main className="flex-1 p-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Activity Feed</CardTitle>
            <CardDescription>
              Here is what has happened recently in your organization.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {activityLog.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Avatar>
                    <AvatarImage src={`https://i.pravatar.cc/150?u=${item.user}`} alt={item.user} />
                    <AvatarFallback>
                      {item.user.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-sm">
                    <p>
                      <span className="font-semibold">{item.user}</span> {item.action}
                    </p>
                    <p className="text-xs text-muted-foreground">{item.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </>
  );
}
