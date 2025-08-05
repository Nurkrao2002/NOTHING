"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const widgets = [
  "Company Overview",
  "Subscription Status",
  "User Activity",
  "Team Management Panel",
  "Customization Hub",
  "Company Quick Actions",
  "Financial Health",
  "Membership Trends",
  "Competitive Position",
  "Executive Summary",
  "Scenario Planner",
  "Executive Quick Actions",
  "Cash Flow",
  "Accounts Management",
  "Profitability",
  "Expense Breakdown",
  "Forecasting Tool",
  "Finance Quick Actions",
  "Lead Pipeline",
  "Campaign Performance",
  "Revenue Impact",
  "Lead Source Matrix",
  "Campaign Builder",
  "Sales Quick Actions",
  "Project Health",
  "Service Delivery",
  "Resource Efficiency",
  "Project Tracker",
  "Capacity Planner",
  "Operations Quick Actions",
  "Operational Highlights",
  "Marketing Overview",
  "Notifications",
  "Task List",
  "Team Calendar",
  "User Quick Actions",
];

export function WidgetLibrary({ onAddWidget }: { onAddWidget: (widget: string) => void }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Widget Library</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          {widgets.map((widget) => (
            <Button key={widget} variant="outline" onClick={() => onAddWidget(widget)}>
              {widget}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
