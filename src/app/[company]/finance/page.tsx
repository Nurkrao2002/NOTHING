"use client";

import { useState } from "react";
import { DashboardHeader } from "@/components/dashboard-header";
import { Button } from "@/components/ui/button";
import { Download, Plus } from "lucide-react";
import { FinanceDataEntryForm } from "@/components/finance-data-entry-form";
import { useFinancialData } from "@/context/financial-data-context";
import { CashFlowWidget } from "@/components/cash-flow-widget";
import { AccountsManagement } from "@/components/accounts-management";
import { ProfitabilityWidget } from "@/components/profitability-widget";
import { ExpenseBreakdown } from "@/components/expense-breakdown";
import { ForecastingTool } from "@/components/forecasting-tool";
import { FinanceQuickActions } from "@/components/finance-quick-actions";
import { WidgetLibrary } from "@/components/widget-library";

export default function FinancePage() {
  const [showDataEntry, setShowDataEntry] = useState(false);
  const { data } = useFinancialData();
  const [showWidgetLibrary, setShowWidgetLibrary] = useState(false);
  const [widgets, setWidgets] = useState([
    "Cash Flow",
    "Accounts Management",
    "Profitability",
    "Expense Breakdown",
    "Forecasting Tool",
    "Finance Quick Actions",
  ]);

  const handleAddWidget = (widget: string) => {
    setWidgets([...widgets, widget]);
  };

  return (
    <>
      <DashboardHeader
        title="Finance Dashboard"
        description="Comprehensive financial metrics and performance indicators"
        onCustomizeClick={() => setShowWidgetLibrary(!showWidgetLibrary)}
        isDataLive={true}
        onAutoRefreshChange={(value) => console.log(value)}
        onExportClick={() => console.log("Exporting PDF...")}
      >
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
          <Button onClick={() => setShowDataEntry(!showDataEntry)}>
            <Plus className="mr-2 h-4 w-4" />
            {showDataEntry ? "Hide Form" : "Add Financial Data"}
          </Button>
        </div>
      </DashboardHeader>
      <main className="flex-1 space-y-6 p-4 sm:px-6 lg:px-8">
        {showWidgetLibrary ? (
          <WidgetLibrary onAddWidget={handleAddWidget} />
        ) : showDataEntry ? (
          <FinanceDataEntryForm />
        ) : (
          <>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {widgets.includes("Cash Flow") && <CashFlowWidget />}
              {widgets.includes("Accounts Management") && <AccountsManagement />}
              {widgets.includes("Profitability") && <ProfitabilityWidget />}
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {widgets.includes("Expense Breakdown") && <ExpenseBreakdown />}
              {widgets.includes("Forecasting Tool") && <ForecastingTool />}
            </div>
            {widgets.includes("Finance Quick Actions") && <FinanceQuickActions />}
          </>
        )}
      </main>
    </>
  );
}
