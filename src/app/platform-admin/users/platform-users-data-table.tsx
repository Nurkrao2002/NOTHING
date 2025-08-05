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
import { mockUsers, MockUser } from "@/lib/mock-users";

export function PlatformUsersDataTable() {
  const { user } = useAuth();

  const platformAdmins = React.useMemo(() => {
    return mockUsers.filter(u => u.company.id === 'platform');
  }, []);

  const columns: ColumnDef<MockUser>[] = [
      { accessorKey: "email", header: "Email" },
      { accessorKey: "role", header: "Role" },
  ];

  const table = useReactTable({
    data: platformAdmins,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (user?.role !== 'Super Admin') {
    return <div>Access Denied. You must be a Super Admin to view this page.</div>
  }

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
                No platform admins found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
