"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useParams, useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";
import {
  DollarSign,
  ClipboardPlus,
  FileBarChart2,
  LogOut,
  ChevronDown,
  Users,
  Shield,
  Bell,
  Building,
  History,
  Menu,
  CreditCard,
  TrendingUp,
  Activity,
  Landmark,
  Lightbulb,
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
import { FinancialDataProvider } from "@/context/financial-data-context";
import { MockUser } from "@/lib/mock-users";
import { mockDataByCompany } from "@/lib/mock-data";

const navItems = {
  DASHBOARDS: [
    { href: "/financial-dashboard", icon: DollarSign, label: "Financial Dashboard", roles: ["Company Admin", "CEO", "Finance Team"] },
    { href: "/membership-dashboard", icon: Users, label: "Membership Dashboard", roles: ["Company Admin", "CEO", "Finance Team"] },
    { href: "/sales-marketing", icon: TrendingUp, label: "Sales & Marketing", roles: ["Company Admin", "CEO", "Sales & Marketing"] },
    { href: "/operations", icon: Activity, label: "Operations", roles: ["Company Admin", "CEO", "Operations Team"] },
    { href: "/recent-activity", icon: History, label: "Recent Activity", roles: ["Company Admin", "CEO", "Finance Team", "Sales & Marketing"] },
  ],
  "DATA & REPORTS": [
      { href: "/data-entry", icon: ClipboardPlus, label: "Data Entry", roles: ["Company Admin", "Finance Team", "Sales & Marketing", "Operations Team"] },
      { href: "/reports", icon: FileBarChart2, label: "Reports", roles: ["Company Admin", "CEO", "Finance Team", "Sales & Marketing"] },
      { href: "/finance", icon: Landmark, label: "Finance", roles: ["Company Admin", "CEO", "Finance Team"] },
      { href: "/industry-insights", icon: Lightbulb, label: "Industry Insights", roles: ["Company Admin", "CEO"] },
  ],
  ADMINISTRATION: [
      { href: "/roles", icon: Shield, label: "Role Management", roles: ["Company Admin"] },
      { href: "/users", icon: Users, label: "User Management", roles: ["Company Admin", "Operations Team"] },
      { href: "/billing", icon: CreditCard, label: "Billing", roles: ["Company Admin"] },
  ]
};

function Header({ companyName, user, onMenuClick }: { companyName: string, user: MockUser, onMenuClick: () => void }) {
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
              <span>{companyName}</span>
            </h1>
        </div>

        <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5"/>
                <span className="absolute top-1 right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 justify-center text-white text-[10px] items-center">3</span>
                </span>
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

function SidebarContentComponent({ companySlug, user, pathname }: { companySlug: string, user: MockUser, pathname: string }) {
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
              <h1 className="font-bold text-lg font-headline">CEO Dashboard</h1>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {Object.entries(filteredNavItems).map(([label, items]) => (
                <React.Fragment key={label}>
                  <SidebarLabel>{label}</SidebarLabel>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.href}>
                      <Link href={`/${companySlug}${item.href}`}>
                        <SidebarMenuButton
                          isActive={pathname.endsWith(item.href)}
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


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const params = useParams();
  const companySlug = params.company as string;
  const router = useRouter();
  const { user } = useAuth();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const isMobile = useIsMobile();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setIsLoading(false);
    } else {
      router.push("/login");
    }
  }, [user, router]);

  useEffect(() => {
    if (user) {
        const companyData = mockDataByCompany[user.company.id];
        if (companyData && companyData.colorScheme) {
            const style = document.createElement('style');
            style.innerHTML = `
                :root {
                    --theme-primary: ${companyData.colorScheme.primary};
                    --theme-secondary: ${companyData.colorScheme.secondary};
                    --color-chart-1: ${companyData.colorScheme.chart1};
                    --color-chart-2: ${companyData.colorScheme.chart2};
                    --color-chart-3: ${companyData.colorScheme.chart3};
                    --color-chart-4: ${companyData.colorScheme.chart4};
                    --color-chart-5: ${companyData.colorScheme.chart5};
                }
            `;
            document.head.appendChild(style);
            return () => {
                document.head.removeChild(style);
            }
        }
    }
  }, [user]);

  if (isLoading) {
    return (
        <div className="flex h-screen items-center justify-center">
            <p>Loading...</p>
        </div>
    );
  }

  return (
    <FinancialDataProvider>
        <div className="flex min-h-screen">
            {isMobile ? (
                <Sheet open={isMobileSidebarOpen} onOpenChange={setIsMobileSidebarOpen}>
                    <SheetContent side="left" className="w-64 p-0 flex flex-col bg-card">
                        <SidebarContentComponent companySlug={companySlug} user={user} pathname={pathname} />
                    </SheetContent>
                </Sheet>
            ) : (
                <aside className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col md:border-r bg-card">
                    <SidebarContentComponent companySlug={companySlug} user={user} pathname={pathname} />
                </aside>
            )}
            <div className="flex flex-1 flex-col md:ml-64">
              <Header companyName={user.company.name} user={user} onMenuClick={() => setIsMobileSidebarOpen(true)} />
              <SidebarInset>
                  {children}
              </SidebarInset>
            </div>
        </div>
    </FinancialDataProvider>
  );
}
