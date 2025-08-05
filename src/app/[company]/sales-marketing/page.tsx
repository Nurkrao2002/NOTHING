"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";
import { DashboardHeader } from "@/components/dashboard-header";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { SalesMarketingDataEntryForm } from "@/components/sales-marketing-data-entry-form";
import { SalesMarketingDataProvider } from "@/context/sales-marketing-data-context";
import { LeadPipeline } from "@/components/lead-pipeline";
import { CampaignPerformance } from "@/components/campaign-performance";
import { RevenueImpact } from "@/components/revenue-impact";
import { LeadSourceMatrix } from "@/components/lead-source-matrix";
import { CampaignBuilder } from "@/components/campaign-builder";
import { SalesQuickActions } from "@/components/sales-quick-actions";
import { WidgetLibrary } from "@/components/widget-library";

function SalesMarketingDashboard() {
  const { user } = useAuth();
  const router = useRouter();
  const [showDataEntry, setShowDataEntry] = useState(false);
  const [showWidgetLibrary, setShowWidgetLibrary] = useState(false);
  const [widgets, setWidgets] = useState([
    "Lead Pipeline",
    "Campaign Performance",
    "Revenue Impact",
    "Lead Source Matrix",
    "Campaign Builder",
    "Sales Quick Actions",
  ]);

  const handleAddWidget = (widget: string) => {
    setWidgets([...widgets, widget]);
  };

  useEffect(() => {
    if (user && !['Company Admin', 'CEO', 'Sales & Marketing'].includes(user.role)) {
        router.push(`/${user.company.slug}/dashboard`);
    }
  }, [user, router]);

  if (!user || !['Company Admin', 'CEO', 'Sales & Marketing'].includes(user.role)) {
    return (
        <div className="flex h-screen items-center justify-center">
            <p>Loading or Access Denied...</p>
        </div>
    );
  }

  return (
    <>
      <DashboardHeader
        title="Sales & Marketing Dashboard"
        description="Key metrics and analytics for sales and marketing performance."
        onCustomizeClick={() => setShowWidgetLibrary(!showWidgetLibrary)}
        isDataLive={true}
        onAutoRefreshChange={(value) => console.log(value)}
        onExportClick={() => console.log("Exporting PDF...")}
      >
        <Button onClick={() => setShowDataEntry(!showDataEntry)}>
          <Plus className="mr-2 h-4 w-4" />
          {showDataEntry ? "Hide Form" : "Add Sales & Marketing Data"}
        </Button>
      </DashboardHeader>
      <main className="flex-1 space-y-6 p-4 sm:px-6 lg:px-8">
        {showWidgetLibrary ? (
          <WidgetLibrary onAddWidget={handleAddWidget} />
        ) : showDataEntry ? (
          <SalesMarketingDataEntryForm />
        ) : (
          <>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {widgets.includes("Lead Pipeline") && <LeadPipeline />}
              {widgets.includes("Campaign Performance") && <CampaignPerformance />}
              {widgets.includes("Revenue Impact") && <RevenueImpact />}
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {widgets.includes("Lead Source Matrix") && <LeadSourceMatrix />}
              {widgets.includes("Campaign Builder") && <CampaignBuilder />}
              {widgets.includes("Sales Quick Actions") && <SalesQuickActions />}
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default function SalesMarketingDashboardPage() {
  return (
    <SalesMarketingDataProvider>
      <SalesMarketingDashboard />
    </SalesMarketingDataProvider>
  )
}
