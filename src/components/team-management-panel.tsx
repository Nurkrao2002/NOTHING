"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const teamData = [
  { name: 'John Doe', role: 'Finance Team', department: 'Finance', lastLogin: '2 hours ago' },
  { name: 'Jane Smith', role: 'Sales & Marketing', department: 'Sales', lastLogin: '1 day ago' },
  { name: 'Peter Jones', role: 'Operations Team', department: 'Operations', lastLogin: '3 days ago' },
];

export function TeamManagementPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Management</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Last Login</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {teamData.map((member) => (
              <TableRow key={member.name}>
                <TableCell>{member.name}</TableCell>
                <TableCell>{member.role}</TableCell>
                <TableCell>{member.department}</TableCell>
                <TableCell>{member.lastLogin}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm" className="mr-2">Edit</Button>
                  <Button variant="destructive" size="sm">Deactivate</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
