"use client";

import { useState } from "react";
import { DashboardHeader } from "@/components/dashboard-header";
import { FinancialHealth } from "@/components/financial-health";
import { MembershipTrends } from "@/components/membership-trends";
import { CompetitivePosition } from "@/components/competitive-position";
import { ExecutiveSummary } from "@/components/executive-summary";
import { ScenarioPlanner } from "@/components/scenario-planner";
import { ExecutiveQuickActions } from "@/components/executive-quick-actions";
import { WidgetLibrary } from "@/components/widget-library";

export default function ExecutiveDashboardPage() {
  const [showWidgetLibrary, setShowWidgetLibrary] = useState(false);
  const [widgets, setWidgets] = useState([
    "Financial Health",
    "Membership Trends",
    "Competitive Position",
    "Executive Summary",
    "Scenario Planner",
    "Executive Quick Actions",
  ]);

  const handleAddWidget = (widget: string) => {
    setWidgets([...widgets, widget]);
  };

  return (
    <>
      <DashboardHeader
        title="Executive Dashboard"
        description="Strategic insights for your company."
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
              {widgets.includes("Financial Health") && <FinancialHealth />}
              {widgets.includes("Membership Trends") && <MembershipTrends />}
              {widgets.includes("Competitive Position") && <CompetitivePosition />}
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {widgets.includes("Executive Summary") && <ExecutiveSummary />}
              {widgets.includes("Scenario Planner") && <ScenarioPlanner />}
              {widgets.includes("Executive Quick Actions") && <ExecutiveQuickActions />}
            </div>
          </>
        )}
      </main>
    </>
  );
}
