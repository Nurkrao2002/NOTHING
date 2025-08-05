"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function AutoRefreshDropdown({
  onValueChange,
}: {
  onValueChange: (value: string) => void;
}) {
  return (
    <Select onValueChange={onValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Auto-Refresh" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1">1 min</SelectItem>
        <SelectItem value="5">5 min</SelectItem>
        <SelectItem value="30">30 min</SelectItem>
      </SelectContent>
    </Select>
  );
}
