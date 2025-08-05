"use client";

import { useState, useEffect, Suspense, useMemo, useCallback } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { DashboardHeader } from "@/components/dashboard-header";
import { FinancialStats } from "@/components/financial-stats";
import { RevenueProfitTrend } from "@/components/revenue-profit-trend";
import { ExpenseBreakdown } from "@/components/expense-breakdown";
import { WeeklyCashFlow } from "@/components/weekly-cash-flow";
import { KeyRatios } from "@/components/key-ratios";
import { AccountsTable } from "@/components/accounts-table";
import { PeriodPicker } from "@/components/period-picker";
import type { DateRange } from "react-day-picker";
import { ProfitabilityAnalysis } from "@/components/profitability-analysis";
import { useFinancialData } from "@/context/financial-data-context";
import { getStatsForPeriod, getChartDataForPeriod } from "@/lib/financial-aggregator";
import type { FinancialRecord } from "@/context/financial-data-context";
import { formatISO, parseISO } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/context/auth-context";

export type Period = "D" | "W" | "M" | "YTD" | "MAX" | "CUSTOM";


function FinanceDashboardContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { data: allData } = useFinancialData();
  const { user } = useAuth();

  const [stats, setStats] = useState<any>(null);
  const [chartData, setChartData] = useState<FinancialRecord[]>([]);

  const period = (searchParams.get('period') as Period) || 'D';
  
  const dateRange = useMemo(() => {
    const fromParam = searchParams.get('from');
    const toParam = searchParams.get('to');
    if (period === 'CUSTOM' && fromParam) {
      return {
        from: parseISO(fromParam),
        to: toParam ? parseISO(toParam) : undefined
      };
    }
    return undefined;
  }, [period, searchParams]);
  
  useEffect(() => {
    if (user && !['Company Admin', 'CEO', 'Finance Team'].includes(user.role)) {
        router.push(`/${user.company.slug}/dashboard`);
    }
  }, [user, router]);

  useEffect(() => {
    if (allData.length > 0) {
      const newStats = getStatsForPeriod(allData, period, dateRange);
      const newChartData = getChartDataForPeriod(allData, period, dateRange);
      setStats(newStats);
      setChartData(newChartData);
    }
  }, [allData, period, dateRange]);


  const handlePeriodChange = useCallback((newPeriod: Period) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('period', newPeriod);
    if (newPeriod !== 'CUSTOM') {
      params.delete('from');
      params.delete('to');
    }
    router.push(`${pathname}?${params.toString()}`);
  }, [pathname, router, searchParams]);

  const handleDateRangeChange = useCallback((newDateRange: DateRange | undefined) => {
    const params = new URLSearchParams(searchParams.toString());
    if (newDateRange?.from) {
      params.set('period', 'CUSTOM');
      params.set('from', formatISO(newDateRange.from, { representation: 'date' }));
      if (newDateRange.to) {
        params.set('to', formatISO(newDateRange.to, { representation: 'date' }));
      } else {
        params.delete('to');
      }
      router.push(`${pathname}?${params.toString()}`);
    }
  }, [pathname, router, searchParams]);

   if (!stats || !user || !['Company Admin', 'CEO', 'Finance Team'].includes(user.role)) {
    return <Loading />
  }

  return (
    <>
      <DashboardHeader 
        title="Financial Dashboard"
        description="Comprehensive financial metrics and performance indicators"
      >
        <PeriodPicker 
          period={period} 
          onPeriodChange={handlePeriodChange}
          dateRange={dateRange}
          onDateRangeChange={handleDateRangeChange}
        />
      </DashboardHeader>
      <main className="flex-1 space-y-6 p-4 sm:px-6 lg:px-8">
        <FinancialStats stats={stats} />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
            <div className="lg:col-span-3">
                <RevenueProfitTrend data={chartData} />
            </div>
            <div className="lg:col-span-2">
                <ExpenseBreakdown data={chartData} />
            </div>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="grid grid-cols-1 gap-6 lg:col-span-2">
                <ProfitabilityAnalysis data={chartData} />
                <WeeklyCashFlow data={chartData} />
            </div>
            <div className="grid grid-cols-1 gap-6 lg:col-span-1">
                {(user.role === 'Company Admin' || user.role === 'CEO') && <KeyRatios data={stats} />}
                <AccountsTable type="Receivable" />
                <AccountsTable type="Payable" />
            </div>
        </div>
      </main>
    </>
  );
}

export default function FinancePage() {
  return (
    <Suspense fallback={<Loading />}>
      <FinanceDashboardContent />
    </Suspense>
  )
}

function Loading() {
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
