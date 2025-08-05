
import { DashboardHeader } from "@/components/dashboard-header";
import { PeriodPicker } from "@/components/period-picker";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      <DashboardHeader 
        title="Financial Dashboard"
        description="Comprehensive financial metrics and performance indicators"
      >
        <div className="flex items-center gap-2 bg-card p-1 rounded-lg border h-[44px] w-[420px]">
            <Skeleton className="h-9 w-full" />
        </div>
      </DashboardHeader>
      <main className="flex-1 space-y-6 p-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
            {[...Array(7)].map((_, i) => <Skeleton key={i} className="h-[98px] rounded-lg" />)}
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
            <Skeleton className="lg:col-span-3 h-[282px] rounded-lg" />
            <Skeleton className="lg:col-span-2 h-[282px] rounded-lg" />
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="grid grid-cols-1 gap-6 lg:col-span-2">
                <Skeleton className="h-[262px] rounded-lg" />
                <Skeleton className="h-[262px] rounded-lg" />
            </div>
            <div className="grid grid-cols-1 gap-6 lg:col-span-1">
                <Skeleton className="h-[212px] rounded-lg" />
                <Skeleton className="h-[218px] rounded-lg" />
                <Skeleton className="h-[218px] rounded-lg" />
            </div>
        </div>
      </main>
    </>
  )
}
