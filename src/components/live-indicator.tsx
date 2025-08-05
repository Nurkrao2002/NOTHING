"use client";

import { cn } from "@/lib/utils";

export function LiveIndicator({ isLive }: { isLive: boolean }) {
  return (
    <div className="flex items-center space-x-2">
      <span
        className={cn(
          "h-3 w-3 rounded-full",
          isLive ? "bg-green-500" : "bg-red-500"
        )}
      />
      <span>{isLive ? "Live" : "Stale"}</span>
    </div>
  );
}
