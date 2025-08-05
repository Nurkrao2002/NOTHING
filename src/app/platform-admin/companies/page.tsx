"use client";

import { DashboardHeader } from "@/components/dashboard-header";
import { CompaniesDataTable } from "./companies-data-table";

export default function PlatformAdminCompaniesPage() {
  return (
    <>
      <DashboardHeader
        title="Manage Companies"
        description="View and manage all tenant companies on the platform."
      />
      <main className="flex-1 space-y-6 p-4 sm:px-6 lg:px-8">
        <CompaniesDataTable />
      </main>
    </>
  );
}
