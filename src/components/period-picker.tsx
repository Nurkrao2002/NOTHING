

"use client"

import { format } from "date-fns"
import { Calendar as CalendarIcon, Check } from "lucide-react"
import type { DateRange } from "react-day-picker"
import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Period } from "@/app/[company]/financial-dashboard/page"
import { Separator } from "./ui/separator"

interface PeriodPickerProps {
    period: Period;
    onPeriodChange: (period: Period) => void;
    dateRange: DateRange | undefined;
    onDateRangeChange: (dateRange: DateRange | undefined) => void;
    className?: string
}

export function PeriodPicker({
    period,
    onPeriodChange,
    dateRange,
    onDateRangeChange,
    className
}: PeriodPickerProps) {
  const [popoverOpen, setPopoverOpen] = React.useState(false);
  const [localDateRange, setLocalDateRange] = React.useState<DateRange | undefined>(dateRange);

  React.useEffect(() => {
    setLocalDateRange(dateRange);
  }, [dateRange]);

  const handleApplyDateRange = () => {
    onDateRangeChange(localDateRange);
    setPopoverOpen(false);
  }

  const handlePeriodChange = (value: string) => {
    const newPeriod = value as Period;
    if (newPeriod !== 'CUSTOM') {
      onPeriodChange(newPeriod);
    }
  }

  return (
    <div className={cn("flex items-center gap-2 bg-card p-1 rounded-lg border", className)}>
        <Tabs value={period} onValueChange={handlePeriodChange} className="relative">
            <TabsList className="grid h-9 grid-cols-5 bg-transparent p-0">
                <TabsTrigger value="D" className="text-xs">Daily</TabsTrigger>
                <TabsTrigger value="W" className="text-xs">Weekly</TabsTrigger>
                <TabsTrigger value="M" className="text-xs">Monthly</TabsTrigger>
                <TabsTrigger value="YTD" className="text-xs">YTD</TabsTrigger>
                <TabsTrigger value="MAX" className="text-xs">Max</TabsTrigger>
            </TabsList>
        </Tabs>
        <Separator orientation="vertical" className="h-6" />
        <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
            <PopoverTrigger asChild>
            <Button
                id="date"
                variant={"ghost"}
                size={period === 'CUSTOM' && dateRange ? "default" : "icon"}
                className={cn(
                "justify-start text-left font-normal h-9 transition-all duration-200",
                period === 'CUSTOM' && dateRange ? "w-[260px]" : "w-9",
                "bg-transparent hover:bg-secondary",
                !dateRange && "text-muted-foreground",
                period === 'CUSTOM' && "text-primary ring-2 ring-primary"
                )}
            >
                <CalendarIcon className="h-4 w-4" />
                {period === 'CUSTOM' && dateRange?.from && (
                    <span className="ml-2">
                        {dateRange.to ? (
                            <>
                            {format(dateRange.from, "LLL dd, y")} -{" "}
                            {format(dateRange.to, "LLL dd, y")}
                            </>
                        ) : (
                            format(dateRange.from, "LLL dd, y")
                        )}
                    </span>
                )}
            </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={localDateRange?.from}
                  selected={localDateRange}
                  onSelect={setLocalDateRange}
                  numberOfMonths={2}
              />
              <div className="p-2 border-t flex justify-end bg-secondary">
                <Button onClick={handleApplyDateRange} size="sm">
                  <Check className="h-4 w-4 mr-2" />
                  Apply
                </Button>
              </div>
            </PopoverContent>
        </Popover>
    </div>
  )
}
