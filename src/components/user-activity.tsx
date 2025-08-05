"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const dataEntryComplianceData = [
  { name: 'Finance', value: 100 },
  { name: 'Sales & Marketing', value: 80 },
  { name: 'Operations', value: 90 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

export function UserActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold mb-2">Logins</h3>
            {/* Heatmap component would go here */}
            <div className="flex items-center justify-center h-full">
              <p>Logins Heatmap</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Data Entry Compliance</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={dataEntryComplianceData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {dataEntryComplianceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
