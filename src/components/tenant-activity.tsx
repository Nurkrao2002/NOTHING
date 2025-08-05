"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { StatCard } from "@/components/stat-card";
import { Users } from "lucide-react";

const newSignupsData = [
  { name: 'Mon', value: 5 },
  { name: 'Tue', value: 7 },
  { name: 'Wed', value: 3 },
  { name: 'Thu', value: 8 },
  { name: 'Fri', value: 6 },
  { name: 'Sat', value: 10 },
  { name: 'Sun', value: 12 },
];

export function TenantActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tenant Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold mb-2">New Signups</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={newSignupsData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <StatCard title="Active Users" value="1,234" icon={Users} />
        </div>
      </CardContent>
    </Card>
  );
}
