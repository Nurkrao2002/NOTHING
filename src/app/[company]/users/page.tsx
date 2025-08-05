"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";
import { UsersDataTable } from "@/components/users-data-table";
import { userList } from "@/lib/mock-data";

export default function UsersPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user && !['Company Admin', 'Operations Team'].includes(user.role)) {
        router.push(`/${user.company.slug}/dashboard`);
    }
  }, [user, router]);

  if (!user || !['Company Admin', 'Operations Team'].includes(user.role)) {
    return (
        <div className="flex h-screen items-center justify-center">
            <p>Loading or Access Denied...</p>
        </div>
    );
  }

  // In a real app, you would fetch this data from an API
  const users = userList;

  return <UsersDataTable initialUsers={users} />;
}
