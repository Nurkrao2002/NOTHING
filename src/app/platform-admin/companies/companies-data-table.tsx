"use client";

import * as React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAuth } from "@/context/auth-context";
import { mockUsers } from "@/lib/mock-users";
import { Badge } from "@/components/ui/badge";

type Company = {
  id: string;
  name: string;
  domain: string;
  slug: string;
  subscription: {
    plan: string;
    status: string;
  };
};

export function CompaniesDataTable() {
  const { user } = useAuth();

  const companies = React.useMemo(() => {
    const companyMap = new Map<string, Company>();
    mockUsers.forEach(u => {
        if (u.company.id !== 'platform') {
            if (!companyMap.has(u.company.id)) {
                companyMap.set(u.company.id, {
                    ...u.company,
                    // In a real app, this would come from the company document
                    subscription: { plan: 'free', status: 'active' }
                });
            }
        }
    });
    return Array.from(companyMap.values());
  }, []);

  const columns: ColumnDef<Company>[] = React.useMemo(() => {
    const baseColumns: ColumnDef<Company>[] = [
      { accessorKey: "name", header: "Company Name" },
      { accessorKey: "domain", header: "Domain" },
      {
        accessorKey: "subscription.status",
        header: "Status",
        cell: ({ row }) => <Badge>{row.original.subscription.status}</Badge>
      },
    ];

    if (user?.role === 'Super Admin') {
      return [
        ...baseColumns,
        {
            accessorKey: "subscription.plan",
            header: "Plan",
            cell: ({ row }) => <Badge variant="secondary">{row.original.subscription.plan}</Badge>
        },
      ];
    }

    return baseColumns;
  }, [user]);

  const table = useReactTable({
    data: companies,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
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
                No companies found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
