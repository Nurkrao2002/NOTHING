"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "@/components/stat-card";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { DollarSign } from "lucide-react";

const avgRevenuePerClientData = [
  { name: 'Jan', value: 5000 },
  { name: 'Feb', value: 5200 },
  { name: 'Mar', value: 5500 },
  { name: 'Apr', value: 5800 },
  { name: 'May', value: 6000 },
  { name: 'Jun', value: 6200 },
];

export function RevenueImpact() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue Impact</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          <StatCard title="Pipeline Value" value="$1,234,567" icon={DollarSign} />
          <div>
            <h3 className="text-lg font-semibold mb-2">Avg. Revenue per Client</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={avgRevenuePerClientData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
