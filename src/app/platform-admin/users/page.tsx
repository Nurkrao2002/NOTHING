"use client";

import { DashboardHeader } from "@/components/dashboard-header";
import { PlatformUsersDataTable } from "./platform-users-data-table";

export default function PlatformAdminUsersPage() {
  return (
    <>
      <DashboardHeader
        title="Manage Admin Users"
        description="View and manage all platform-level admin users."
      />
      <main className="flex-1 space-y-6 p-4 sm:px-6 lg:px-8">
        <PlatformUsersDataTable />
      </main>
    </>
  );
}
