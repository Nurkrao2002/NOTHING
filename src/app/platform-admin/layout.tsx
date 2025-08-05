"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";
import {
  Users,
  Building,
  LayoutDashboard,
  LogOut,
  ChevronDown,
  Bell,
  Menu,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarLabel,
} from "@/components/ui/sidebar";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/icons";
import { MockUser } from "@/lib/mock-users";

const navItems = {
    ADMINISTRATION: [
        { href: "/platform-admin/dashboard", icon: LayoutDashboard, label: "Dashboard", roles: ["Super Admin", "Platform Manager"] },
        { href: "/platform-admin/companies", icon: Building, label: "Companies", roles: ["Super Admin", "Platform Manager"] },
        { href: "/platform-admin/users", icon: Users, label: "Admin Users", roles: ["Super Admin"] },
    ]
};

function Header({ user, onMenuClick }: { user: MockUser, onMenuClick: () => void }) {
    const router = useRouter();

    const handleSignOut = () => {
        sessionStorage.removeItem("user");
        router.push("/login");
    };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex h-16 items-center justify-between border-b bg-background px-4 md:ml-64">
        <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="md:hidden" onClick={onMenuClick}>
                <Menu className="h-5 w-5" />
            </Button>
            <h1 className="font-bold text-lg font-headline flex items-center gap-2">
              <Building className="h-5 w-5 text-muted-foreground"/>
              <span>Platform Administration</span>
            </h1>
        </div>

        <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5"/>
            </Button>
            <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 text-sm font-medium">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={`https://i.pravatar.cc/150?u=${user.uid}`} alt={user.email || ""} />
                  <AvatarFallback>{user.email?.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="hidden md:flex flex-col items-start">
                    <span className="font-semibold">{user.email}</span>
                </div>
                <ChevronDown className="h-4 w-4 hidden md:block" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 mt-2" align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut} className="text-destructive">
                      <LogOut className="mr-2 h-4 w-4"/>
                      Log out
                  </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
    </header>
  )
}

function SidebarContentComponent({ user, pathname }: { user: MockUser, pathname: string }) {
    const filteredNavItems = Object.entries(navItems).reduce((acc, [label, items]) => {
        const filteredItems = items.filter(item => item.roles.includes(user.role));
        if (filteredItems.length > 0) {
          acc[label] = filteredItems;
        }
        return acc;
      }, {} as typeof navItems);

    return (
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2">
              <Logo className="h-6 w-6 text-primary" />
              <h1 className="font-bold text-lg font-headline">Platform Admin</h1>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {Object.entries(filteredNavItems).map(([label, items]) => (
                <React.Fragment key={label}>
                  <SidebarLabel>{label}</SidebarLabel>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.href}>
                      <Link href={`${item.href}`}>
                        <SidebarMenuButton
                          isActive={pathname === item.href}
                          className="w-full"
                        >
                          <item.icon className="h-4 w-4" />
                          <span>{item.label}</span>
                        </SidebarMenuButton>
                      </Link>
                    </SidebarMenuItem>
                  ))}
                </React.Fragment>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
    )
}


export default function PlatformAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useAuth();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    console.log("PlatformAdminLayout: useEffect running. User:", user);
    if (!user || !['Super Admin', 'Platform Manager'].includes(user.role)) {
        console.log("PlatformAdminLayout: Redirecting to /login");
        router.push("/login");
    }
  }, [user, router]);


  if (!user) {
    console.log("PlatformAdminLayout: No user found, rendering loading state.");
    return (
        <div className="flex h-screen items-center justify-center">
            <p>Loading...</p>
        </div>
    );
  }

  return (
        <div className="flex min-h-screen">
            {isMobile ? (
                <Sheet open={isMobileSidebarOpen} onOpenChange={setIsMobileSidebarOpen}>
                    <SheetContent side="left" className="w-64 p-0 flex flex-col bg-card">
                        <SidebarContentComponent user={user} pathname={pathname} />
                    </SheetContent>
                </Sheet>
            ) : (
                <aside className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col md:border-r bg-card">
                    <SidebarContentComponent user={user} pathname={pathname} />
                </aside>
            )}
            <div className="flex flex-1 flex-col md:ml-64">
              <Header user={user} onMenuClick={() => setIsMobileSidebarOpen(true)} />
              <SidebarInset>
                  {children}
              </SidebarInset>
            </div>
        </div>
  );
}
