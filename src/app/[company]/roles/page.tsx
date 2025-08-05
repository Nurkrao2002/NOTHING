"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/auth-context";
import { mockUsers } from "@/lib/mock-users";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MockUser } from "@/lib/mock-users";
import { useRouter } from "next/navigation";

export default function RoleManagementPage() {
  const { user } = useAuth();
  const [users, setUsers] = useState<MockUser[]>([]);
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    if (user && user.role !== "Company Admin") {
        router.push(`/${user.company.slug}/dashboard`);
    }
  }, [user, router]);

  useEffect(() => {
    if (user) {
      const companyUsers = mockUsers.filter(u => u.company.id === user.company.id);
      setUsers(companyUsers);
    }
  }, [user]);

  const handleRoleChange = (uid: string, newRole: string) => {
    setUsers(users.map(u => u.uid === uid ? { ...u, role: newRole } : u));
    toast({
      title: "Success (Demo)",
      description: "User role updated successfully.",
    });
  };

  if (!user || user.role !== "Company Admin") {
    return (
        <div className="flex h-screen items-center justify-center">
            <p>Loading or Access Denied...</p>
        </div>
    );
  }

  return (
    <div className="p-4 md:p-8">
      <Card>
        <CardHeader>
          <CardTitle>User Role Management</CardTitle>
          <CardDescription>Manage user roles for your company.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                <TableHead>Email</TableHead>
                <TableHead className="w-[200px]">Role</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((u) => (
                <TableRow key={u.uid}>
                  <TableCell className="font-medium">{u.email}</TableCell>
                  <TableCell>
                    <Select
                      value={u.role}
                      onValueChange={(newRole) => handleRoleChange(u.uid, newRole)}
                      disabled={u.uid === user.uid}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Company Admin">Company Admin</SelectItem>
                        <SelectItem value="CEO">CEO</SelectItem>
                        <SelectItem value="Finance Team">Finance Team</SelectItem>
                        <SelectItem value="Sales & Marketing">Sales & Marketing</SelectItem>
                        <SelectItem value="Operations Team">Operations Team</SelectItem>
                        <SelectItem value="Basic User">Basic User</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
