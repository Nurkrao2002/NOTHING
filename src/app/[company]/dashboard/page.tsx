"use client";

import { useState } from "react";
import { DashboardHeader } from "@/components/dashboard-header";
import { CompanyOverview } from "@/components/company-overview";
import { SubscriptionStatus } from "@/components/subscription-status";
import { UserActivity } from "@/components/user-activity";
import { TeamManagementPanel } from "@/components/team-management-panel";
import { CustomizationHub } from "@/components/customization-hub";
import { CompanyQuickActions } from "@/components/company-quick-actions";
import { WidgetLibrary } from "@/components/widget-library";

export default function CompanyAdminDashboardPage() {
  const [showWidgetLibrary, setShowWidgetLibrary] = useState(false);
  const [widgets, setWidgets] = useState([
    "Company Overview",
    "Subscription Status",
    "User Activity",
    "Team Management Panel",
    "Customization Hub",
    "Company Quick Actions",
  ]);
  const [logo, setLogo] = useState<string | undefined>(undefined);

  const handleAddWidget = (widget: string) => {
    setWidgets([...widgets, widget]);
  };

  return (
    <>
      <DashboardHeader
        title="Company Admin Dashboard"
        description="An overview of your company."
        onCustomizeClick={() => setShowWidgetLibrary(!showWidgetLibrary)}
        isDataLive={true}
        onAutoRefreshChange={(value) => console.log(value)}
        logo={logo}
        onExportClick={() => console.log("Exporting PDF...")}
      />
      <main className="flex-1 space-y-6 p-4 sm:px-6 lg:px-8">
        {showWidgetLibrary ? (
          <WidgetLibrary onAddWidget={handleAddWidget} />
        ) : (
          <>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {widgets.includes("Company Overview") && <CompanyOverview />}
              {widgets.includes("Subscription Status") && <SubscriptionStatus />}
              {widgets.includes("User Activity") && <UserActivity />}
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {widgets.includes("Customization Hub") && <CustomizationHub />}
              {widgets.includes("Company Quick Actions") && <CompanyQuickActions />}
            </div>
            {widgets.includes("Team Management Panel") && <TeamManagementPanel />}
          </>
        )}
      </main>
    </>
  );
}
