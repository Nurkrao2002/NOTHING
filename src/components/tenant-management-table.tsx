"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const tenantsData = [
  { name: 'Tenant A', plan: 'Enterprise', users: 100, lastActive: '2 hours ago' },
  { name: 'Tenant B', plan: 'Pro', users: 50, lastActive: '1 day ago' },
  { name: 'Tenant C', plan: 'Free', users: 10, lastActive: '3 days ago' },
];

export function TenantManagementTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tenant Management</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Company Name</TableHead>
              <TableHead>Plan</TableHead>
              <TableHead>Users</TableHead>
              <TableHead>Last Active</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tenantsData.map((tenant) => (
              <TableRow key={tenant.name}>
                <TableCell>{tenant.name}</TableCell>
                <TableCell>{tenant.plan}</TableCell>
                <TableCell>{tenant.users}</TableCell>
                <TableCell>{tenant.lastActive}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm" className="mr-2">Suspend</Button>
                  <Button variant="destructive" size="sm">Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
