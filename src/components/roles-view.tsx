"use client";

import { useState } from "react";
import { Check, Edit, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { allPermissions } from "@/lib/mock-data";
import { DashboardHeader } from "./dashboard-header";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";

type Roles = Record<string, string[]>;

export function RolesView({ initialRoles }: { initialRoles: Roles }) {
  const { toast } = useToast();
  const [roles, setRoles] = useState(initialRoles);
  const [editingRole, setEditingRole] = useState<{ name: string; permissions: string[] } | null>(null);

  const handleEdit = (roleName: string) => {
    setEditingRole({ name: roleName, permissions: roles[roleName] });
  };

  const handlePermissionChange = (permission: string, checked: boolean) => {
    if (!editingRole) return;

    let newPermissions: string[];
    if (checked) {
      newPermissions = [...editingRole.permissions, permission];
    } else {
      newPermissions = editingRole.permissions.filter((p) => p !== permission);
    }
    setEditingRole({ ...editingRole, permissions: newPermissions });
  };
  
  const handleSaveChanges = () => {
    if (!editingRole) return;
    setRoles(prev => ({...prev, [editingRole.name]: editingRole.permissions}));
    toast({ title: "Role Updated", description: `Permissions for ${editingRole.name} have been updated.` });
  }

  return (
    <>
      <DashboardHeader title="Role Management" />
      <main className="flex-1 p-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(roles).map(([roleName, permissions]) => (
            <Card key={roleName}>
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="space-y-1.5">
                  <CardTitle className="font-headline flex items-center gap-2">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                    {roleName}
                  </CardTitle>
                  <CardDescription>{permissions.length} permissions granted</CardDescription>
                </div>
                 <Dialog onOpenChange={(open) => !open && setEditingRole(null)}>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="icon" onClick={() => handleEdit(roleName)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  {editingRole && editingRole.name === roleName && (
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Edit Role: {roleName}</DialogTitle>
                        <DialogDescription>
                          Select the permissions for this role. Click save when you're done.
                        </DialogDescription>
                      </DialogHeader>
                      <Separator />
                      <div className="grid gap-4 py-4">
                        {allPermissions.map((permission) => (
                          <div key={permission} className="flex items-center space-x-2">
                             <Checkbox
                              id={`${roleName}-${permission}`}
                              checked={editingRole.permissions.includes(permission)}
                              onCheckedChange={(checked) => handlePermissionChange(permission, !!checked)}
                            />
                            <Label htmlFor={`${roleName}-${permission}`} className="font-normal">{permission}</Label>
                          </div>
                        ))}
                      </div>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button type="button" variant="outline">Cancel</Button>
                        </DialogClose>
                        <DialogClose asChild>
                          <Button type="button" onClick={handleSaveChanges}>Save changes</Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  )}
                 </Dialog>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {permissions.map((permission) => (
                    <li key={permission} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>{permission}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
}
