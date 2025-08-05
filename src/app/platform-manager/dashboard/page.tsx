"use client";

import { useState } from "react";
import { DashboardHeader } from "@/components/dashboard-header";
import { TenantActivity } from "@/components/tenant-activity";
import { SupportTickets } from "@/components/support-tickets";
import { ResourceUtilization } from "@/components/resource-utilization";
import { TenantOnboardingWidget } from "@/components/tenant-onboarding-widget";
import { UserRoleMatrix } from "@/components/user-role-matrix";
import { AlertsPanel } from "@/components/alerts-panel";
import { WidgetLibrary } from "@/components/widget-library";

export default function PlatformManagerDashboardPage() {
  const [showWidgetLibrary, setShowWidgetLibrary] = useState(false);
  const [widgets, setWidgets] = useState([
    "Tenant Activity",
    "Support Tickets",
    "Resource Utilization",
    "Tenant Onboarding Widget",
    "User Role Matrix",
    "Alerts Panel",
  ]);

  const handleAddWidget = (widget: string) => {
    setWidgets([...widgets, widget]);
  };

  return (
    <>
      <DashboardHeader
        title="Platform Manager Dashboard"
        description="An overview of the platform's tenants."
        onCustomizeClick={() => setShowWidgetLibrary(!showWidgetLibrary)}
        isDataLive={true}
        onAutoRefreshChange={(value) => console.log(value)}
        onExportClick={() => console.log("Exporting PDF...")}
      />
      <main className="flex-1 space-y-6 p-4 sm:px-6 lg:px-8">
        {showWidgetLibrary ? (
          <WidgetLibrary onAddWidget={handleAddWidget} />
        ) : (
          <>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {widgets.includes("Tenant Activity") && <TenantActivity />}
              {widgets.includes("Support Tickets") && <SupportTickets />}
              {widgets.includes("Resource Utilization") && <ResourceUtilization />}
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {widgets.includes("Tenant Onboarding Widget") && <TenantOnboardingWidget />}
              {widgets.includes("User Role Matrix") && <UserRoleMatrix />}
              {widgets.includes("Alerts Panel") && <AlertsPanel />}
            </div>
          </>
        )}
      </main>
    </>
  );
}
