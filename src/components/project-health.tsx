"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis } from "recharts";

const completionRateData = [
  { name: 'On Time', value: 80 },
  { name: 'Delayed', value: 15 },
  { name: 'At Risk', value: 5 },
];

const COLORS = ['#0088FE', '#FFBB28', '#FF8042'];

const utilizationRateData = [
  { name: 'Team A', value: 80 },
  { name: 'Team B', value: 90 },
  { name: 'Team C', value: 70 },
];

export function ProjectHealth() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Health</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold mb-2">Completion Rate</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={completionRateData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {completionRateData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Utilization Rate by Team</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={utilizationRateData}>
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
