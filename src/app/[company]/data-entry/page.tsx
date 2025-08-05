"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";
import { DashboardHeader } from "@/components/dashboard-header";
import { DataEntryForm } from "@/components/data-entry-form";
import { MembershipDataEntryForm } from "@/components/membership-data-entry-form";
import { OperationalDataEntryForm } from "@/components/operational-data-entry-form";
import { SalesMarketingDataEntryForm } from "@/components/sales-marketing-data-entry-form";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Upload } from "lucide-react";

export default function DataEntryPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user && !['Company Admin', 'Finance Team', 'Sales & Marketing', 'Operations Team'].includes(user.role)) {
        router.push(`/${user.company.slug}/dashboard`);
    }
  }, [user, router]);

  if (!user || !['Company Admin', 'Finance Team', 'Sales & Marketing', 'Operations Team'].includes(user.role)) {
    return (
        <div className="flex h-screen items-center justify-center">
            <p>Loading or Access Denied...</p>
        </div>
    );
  }

  return (
    <>
      <DashboardHeader
        title="Data Entry"
        description="Input financial, membership, sales & marketing, and operational metrics."
      >
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" />
            Import CSV
          </Button>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Download Template
          </Button>
        </div>
      </DashboardHeader>
      <main className="flex-1 p-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Tabs defaultValue="financials">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="financials">Financials</TabsTrigger>
              <TabsTrigger value="membership">Membership</TabsTrigger>
              <TabsTrigger value="sales-marketing">Sales & Marketing</TabsTrigger>
              <TabsTrigger value="operations">Operations</TabsTrigger>
            </TabsList>
            <TabsContent value="financials">
              <DataEntryForm />
            </TabsContent>
            <TabsContent value="membership">
              <MembershipDataEntryForm />
            </TabsContent>
            <TabsContent value="sales-marketing">
                <SalesMarketingDataEntryForm />
            </TabsContent>
            <TabsContent value="operations">
                <OperationalDataEntryForm />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </>
  );
}
