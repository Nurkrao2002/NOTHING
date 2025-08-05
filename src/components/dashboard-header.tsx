import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { LiveIndicator } from "./live-indicator";
import { AutoRefreshDropdown } from "./auto-refresh-dropdown";
import Image from "next/image";
import { ExportButton } from "./export-button";
import { ThemeToggle } from "./theme-toggle";

interface DashboardHeaderProps {
  title: string;
  description?: string;
  children?: ReactNode;
  onCustomizeClick?: () => void;
  isDataLive?: boolean;
  onAutoRefreshChange?: (value: string) => void;
  logo?: string;
  onExportClick?: () => void;
}

export function DashboardHeader({ title, description, children, onCustomizeClick, isDataLive, onAutoRefreshChange, logo, onExportClick }: DashboardHeaderProps) {
  return (
    <div className="flex items-start justify-between border-b bg-card px-4 py-6 sm:px-6 lg:px-8">
      <div className="flex items-center space-x-4">
        {logo && <Image src={logo} alt="Company Logo" width={40} height={40} />}
        <div>
          <h1 className="font-headline text-2xl font-bold text-foreground md:text-3xl">
              {title}
          </h1>
          {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <ThemeToggle />
        {isDataLive !== undefined && <LiveIndicator isLive={isDataLive} />}
        {onAutoRefreshChange && <AutoRefreshDropdown onValueChange={onAutoRefreshChange} />}
        {onExportClick && <ExportButton onClick={onExportClick} />}
        {children}
        {onCustomizeClick && (
          <Button variant="outline" size="icon" onClick={onCustomizeClick}>
            <Settings className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
