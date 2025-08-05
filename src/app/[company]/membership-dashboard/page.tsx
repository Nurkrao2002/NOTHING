"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";
import { DashboardHeader } from "@/components/dashboard-header";
import { MembershipMetrics } from "@/components/membership-metrics";
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { MembershipDataEntryForm } from "@/components/membership-data-entry-form";
import { MembershipDataProvider, useMembershipData } from "@/context/membership-data-context";
import { useFinancialData } from "@/context/financial-data-context";
import { getMembershipStats } from "@/lib/membership-aggregator";

function MembershipDashboard() {
  const { user } = useAuth();
  const router = useRouter();
  const [showDataEntry, setShowDataEntry] = useState(false);
  const { data: membershipData } = useMembershipData();
  const { data: financialData } = useFinancialData();
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    if (membershipData && financialData) {
      const newStats = getMembershipStats(membershipData, financialData);
      setStats(newStats);
    }
  }, [membershipData, financialData]);

  useEffect(() => {
    if (user && !['Company Admin', 'CEO', 'Finance Team'].includes(user.role)) {
        router.push(`/${user.company.slug}/dashboard`);
    }
  }, [user, router]);

  if (!user || !['Company Admin', 'CEO', 'Finance Team'].includes(user.role)) {
    return (
        <div className="flex h-screen items-center justify-center">
            <p>Loading or Access Denied...</p>
        </div>
    );
  }

  const chartData = [
      { month: 'Jan', totalMembers: 1000, newMembers: 50, membersLost: 10 },
      { month: 'Feb', totalMembers: 1040, newMembers: 60, membersLost: 20 },
      { month: 'Mar', totalMembers: 1080, newMembers: 70, membersLost: 30 },
      { month: 'Apr', totalMembers: 1120, newMembers: 80, membersLost: 40 },
      { month: 'May', totalMembers: 1160, newMembers: 90, membersLost: 50 },
      { month: 'Jun', totalMembers: 1200, newMembers: 100, membersLost: 60 },
  ]

  return (
    <>
      <DashboardHeader
        title="Membership Dashboard"
        description="Key metrics and analytics for customer membership."
      >
        <Button onClick={() => setShowDataEntry(!showDataEntry)}>
          <Plus className="mr-2 h-4 w-4" />
          {showDataEntry ? "Hide Form" : "Add Membership Data"}
        </Button>
      </DashboardHeader>
      <main className="flex-1 space-y-6 p-4 sm:px-6 lg:px-8">
        {showDataEntry ? (
          <MembershipDataEntryForm />
        ) : (
          <>
            <MembershipMetrics data={stats} />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <div className="col-span-4">
                    <h3 className="text-lg font-semibold mb-4">Total Members Trend</h3>
                    <ResponsiveContainer width="100%" height={350}>
                        <LineChart data={chartData}>
                            <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                            <Line type="monotone" dataKey="totalMembers" stroke="var(--color-chart-1)" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="col-span-3">
                    <h3 className="text-lg font-semibold mb-4">New vs. Lost Members</h3>
                    <ResponsiveContainer width="100%" height={350}>
                        <BarChart data={chartData}>
                            <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                            <Bar dataKey="newMembers" fill="var(--color-chart-2)" radius={[4, 4, 0, 0]} />
                            <Bar dataKey="membersLost" fill="var(--color-chart-3)" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default function MembershipDashboardPage() {
  return (
    <MembershipDataProvider>
      <MembershipDashboard />
    </MembershipDataProvider>
  )
}
