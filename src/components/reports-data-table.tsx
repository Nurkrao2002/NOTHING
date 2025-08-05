

"use client";

import * as React from "react";
import { Calendar as CalendarIcon, Download, FileText, MoreHorizontal } from "lucide-react";
import { addDays, format } from "date-fns";
import type { DateRange } from "react-day-picker";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useToast } from "@/hooks/use-toast";
import { DashboardHeader } from "./dashboard-header";
import { Input } from "./ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Report = {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  lastGenerated: Date;
};

// By appending 'T00:00:00Z', we ensure these dates are parsed as UTC, avoiding timezone issues between server and client.
const availableReports: Report[] = [
  { id: 'rep_01', title: 'Financial Summary', description: 'Revenue, Profit, EBITDA, and Margins.', icon: FileText, lastGenerated: new Date('2025-07-01T00:00:00Z') },
  { id: 'rep_02', title: 'Customer Metrics', description: 'CLV, CAC, and Retention analysis.', icon: FileText, lastGenerated: new Date('2025-07-15T00:00:00Z') },
  { id: 'rep_03', title: 'Cash Flow Statement', description: 'Detailed cash inflow and outflow.', icon: FileText, lastGenerated: new Date('2025-06-30T00:00:00Z') },
  { id: 'rep_04', title: 'AR/AP Aging Report', description: 'Breakdown of outstanding receivables and payables.', icon: FileText, lastGenerated: new Date('2025-07-20T00:00:00Z') },
  { id: 'rep_05', title: 'Profitability Analysis', description: 'Deep dive into profit margins and SGR.', icon: FileText, lastGenerated: new Date('2025-07-18T00:00:00Z') },
  { id: 'rep_06', title: 'Burn Rate Report', description: 'Monthly cash burn and runway.', icon: FileText, lastGenerated: new Date('2025-05-31T00:00:00Z') },
];

export function ReportsDataTable() {
  const { toast } = useToast();
  const [date, setDate] = React.useState<DateRange | undefined>(undefined);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);

  React.useEffect(() => {
    setDate({
      from: addDays(new Date(), -30),
      to: new Date(),
    });
  }, []);

  const handleExport = (reportTitle: string, format: "PDF" | "CSV" | "XLSX") => {
    toast({
      title: `Generating ${format} Report...`,
      description: `Your "${reportTitle}" report for the selected period is being generated.`,
    });
  };

  const columns: ColumnDef<Report>[] = [
    {
      accessorKey: "title",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Report Title
          </Button>
        );
      },
      cell: ({ row }) => {
        const report = row.original;
        return (
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-2 rounded-lg">
              <report.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="font-medium">{report.title}</div>
              <div className="text-sm text-muted-foreground">{report.description}</div>
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: "lastGenerated",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Last Generated
          </Button>
        );
      },
      cell: ({ row }) => format(row.getValue("lastGenerated"), "LLL dd, yyyy"),
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const report = row.original;
        return (
          <div className="text-right">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleExport(report.title, "PDF")}>
                  <Download className="mr-2 h-4 w-4" /> Download PDF
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleExport(report.title, "CSV")}>
                 <Download className="mr-2 h-4 w-4" /> Download CSV
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleExport(report.title, "XLSX")}>
                  <Download className="mr-2 h-4 w-4" /> Download XLSX
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        );
      },
    },
  ];

  const table = useReactTable({
    data: availableReports,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  return (
    <>
      <DashboardHeader
        title="Reports"
        description="Generate and download financial reports for sharing and documentation."
      />
      <main className="flex-1 p-4 sm:px-6 lg:px-8 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Report Generation</CardTitle>
            <CardDescription>Select a period and generate reports from the list below.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button id="date" variant={"outline"} className={cn("w-full sm:w-[300px] justify-start text-left font-normal", !date && "text-muted-foreground")}>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date?.from ? (date.to ? (<>{format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}</>) : (format(date.from, "LLL dd, y"))) : (<span>Pick a date</span>)}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar initialFocus mode="range" defaultMonth={date?.from} selected={date} onSelect={setDate} numberOfMonths={2} />
              </PopoverContent>
            </Popover>
             <Input
                placeholder="Filter reports by name..."
                value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
                onChange={(event) => table.getColumn("title")?.setFilterValue(event.target.value)}
                className="w-full sm:w-[300px]"
             />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={columns.length} className="h-24 text-center">
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </>
  );
}

    