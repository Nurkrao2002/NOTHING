"use client";

import { useState } from "react";
import { DashboardHeader } from "@/components/dashboard-header";
import { PlatformHealth } from "@/components/platform-health";
import { TenantAnalytics } from "@/components/tenant-analytics";
import { BillingUsage } from "@/components/billing-usage";
import { SystemAlerts } from "@/components/system-alerts";
import { TenantManagementTable } from "@/components/tenant-management-table";
import { PlatformSettingsPanel } from "@/components/platform-settings-panel";
import { QuickActions } from "@/components/quick-actions";
import { WidgetLibrary } from "@/components/widget-library";

export default function PlatformAdminDashboardPage() {
  const [showWidgetLibrary, setShowWidgetLibrary] = useState(false);
  const [widgets, setWidgets] = useState([
    "Platform Health",
    "Tenant Analytics",
    "Billing & Usage",
    "System Alerts",
    "Tenant Management Table",
    "Platform Settings Panel",
    "Quick Actions",
  ]);

  const handleAddWidget = (widget: string) => {
    setWidgets([...widgets, widget]);
  };

  return (
    <>
      <DashboardHeader
        title="Platform Dashboard"
        description="An overview of the entire platform."
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
              {widgets.includes("Platform Health") && <PlatformHealth />}
              {widgets.includes("Tenant Analytics") && <TenantAnalytics />}
              {widgets.includes("Billing & Usage") && <BillingUsage />}
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {widgets.includes("System Alerts") && <SystemAlerts />}
              {widgets.includes("Platform Settings Panel") && <PlatformSettingsPanel />}
              {widgets.includes("Quick Actions") && <QuickActions />}
            </div>
            {widgets.includes("Tenant Management Table") && <TenantManagementTable />}
          </>
        )}
      </main>
    </>
  );
}
