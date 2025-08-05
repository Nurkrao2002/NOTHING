"use client";

import { useState } from "react";
import { DashboardHeader } from "@/components/dashboard-header";
import { OperationalHighlights } from "@/components/operational-highlights";
import { MarketingOverview } from "@/components/marketing-overview";
import { Notifications } from "@/components/notifications";
import { TaskList } from "@/components/task-list";
import { TeamCalendar } from "@/components/team-calendar";
import { UserQuickActions } from "@/components/user-quick-actions";
import { WidgetLibrary } from "@/components/widget-library";

export default function BasicUserDashboardPage() {
  const [showWidgetLibrary, setShowWidgetLibrary] = useState(false);
  const [widgets, setWidgets] = useState([
    "Operational Highlights",
    "Marketing Overview",
    "Notifications",
    "Task List",
    "Team Calendar",
    "User Quick Actions",
  ]);

  const handleAddWidget = (widget: string) => {
    setWidgets([...widgets, widget]);
  };

  return (
    <>
      <DashboardHeader
        title="User Dashboard"
        description="Your personal dashboard."
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
              {widgets.includes("Operational Highlights") && <OperationalHighlights />}
              {widgets.includes("Marketing Overview") && <MarketingOverview />}
              {widgets.includes("Notifications") && <Notifications />}
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {widgets.includes("Task List") && <TaskList />}
              {widgets.includes("Team Calendar") && <TeamCalendar />}
              {widgets.includes("User Quick Actions") && <UserQuickActions />}
            </div>
          </>
        )}
      </main>
    </>
  );
}
