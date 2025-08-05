"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const userRoleData = [
  { tenantName: 'Tenant A', admins: 2, executives: 5, teamMembers: 20 },
  { tenantName: 'Tenant B', admins: 1, executives: 3, teamMembers: 10 },
  { tenantName: 'Tenant C', admins: 1, executives: 1, teamMembers: 5 },
];

export function UserRoleMatrix() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Role Matrix</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tenant Name</TableHead>
              <TableHead>Admins</TableHead>
              <TableHead>Executives</TableHead>
              <TableHead>Team Members</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {userRoleData.map((row) => (
              <TableRow key={row.tenantName}>
                <TableCell>{row.tenantName}</TableCell>
                <TableCell>{row.admins}</TableCell>
                <TableCell>{row.executives}</TableCell>
                <TableCell>{row.teamMembers}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
