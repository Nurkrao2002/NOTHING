"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";
import { DashboardHeader } from "@/components/dashboard-header";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { OperationsDataEntryForm } from "@/components/operations-data-entry-form";
import { OperationsDataProvider } from "@/context/operations-data-context";
import { ProjectHealth } from "@/components/project-health";
import { ServiceDelivery } from "@/components/service-delivery";
import { ResourceEfficiency } from "@/components/resource-efficiency";
import { ProjectTracker } from "@/components/project-tracker";
import { CapacityPlanner } from "@/components/capacity-planner";
import { OperationsQuickActions } from "@/components/operations-quick-actions";
import { WidgetLibrary } from "@/components/widget-library";

function OperationsDashboard() {
  const { user } = useAuth();
  const router = useRouter();
  const [showDataEntry, setShowDataEntry] = useState(false);
  const [showWidgetLibrary, setShowWidgetLibrary] = useState(false);
  const [widgets, setWidgets] = useState([
    "Project Health",
    "Service Delivery",
    "Resource Efficiency",
    "Project Tracker",
    "Capacity Planner",
    "Operations Quick Actions",
  ]);

  const handleAddWidget = (widget: string) => {
    setWidgets([...widgets, widget]);
  };

  useEffect(() => {
    if (user && !['Company Admin', 'CEO', 'Operations Team'].includes(user.role)) {
        router.push(`/${user.company.slug}/dashboard`);
    }
  }, [user, router]);

  if (!user || !['Company Admin', 'CEO', 'Operations Team'].includes(user.role)) {
    return (
        <div className="flex h-screen items-center justify-center">
            <p>Loading or Access Denied...</p>
        </div>
    );
  }

  return (
    <>
      <DashboardHeader
        title="Operations Dashboard"
        onCustomizeClick={() => setShowWidgetLibrary(!showWidgetLibrary)}
        isDataLive={true}
        onAutoRefreshChange={(value) => console.log(value)}
        onExportClick={() => console.log("Exporting PDF...")}
      >
        <Button onClick={() => setShowDataEntry(!showDataEntry)}>
          <Plus className="mr-2 h-4 w-4" />
          {showDataEntry ? "Hide Form" : "Add Operations Data"}
        </Button>
      </DashboardHeader>
      <main className="flex-1 space-y-6 p-4 sm:px-6 lg:px-8">
        {showWidgetLibrary ? (
          <WidgetLibrary onAddWidget={handleAddWidget} />
        ) : showDataEntry ? (
          <OperationsDataEntryForm />
        ) : (
          <>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {widgets.includes("Project Health") && <ProjectHealth />}
              {widgets.includes("Service Delivery") && <ServiceDelivery />}
              {widgets.includes("Resource Efficiency") && <ResourceEfficiency />}
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {widgets.includes("Project Tracker") && <ProjectTracker />}
              {widgets.includes("Capacity Planner") && <CapacityPlanner />}
              {widgets.includes("Operations Quick Actions") && <OperationsQuickActions />}
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default function OperationsPage() {
  return (
    <OperationsDataProvider>
      <OperationsDashboard />
    </OperationsDataProvider>
  )
}
