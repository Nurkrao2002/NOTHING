"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "@/components/stat-card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { DollarSign } from "lucide-react";

const billableVsNonBillableData = [
  { name: 'Team A', billable: 800, nonBillable: 200 },
  { name: 'Team B', billable: 900, nonBillable: 100 },
  { name: 'Team C', billable: 700, nonBillable: 300 },
];

export function ResourceEfficiency() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Resource Efficiency</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          <StatCard title="Revenue per Employee" value="$123,456" icon={DollarSign} />
          <div>
            <h3 className="text-lg font-semibold mb-2">Billable vs. Non-Billable Hours</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={billableVsNonBillableData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="billable" stackId="a" fill="#8884d8" />
                <Bar dataKey="nonBillable" stackId="a" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
