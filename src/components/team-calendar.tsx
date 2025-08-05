"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";

export function TeamCalendar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Calendar</CardTitle>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="range"
          numberOfMonths={1}
        />
      </CardContent>
    </Card>
  );
}
