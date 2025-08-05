"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line } from "recharts";

const openVsResolvedData = [
  { name: 'Low', open: 10, resolved: 20 },
  { name: 'Medium', open: 5, resolved: 15 },
  { name: 'High', open: 2, resolved: 5 },
];

const avgResolutionTimeData = [
  { name: 'Jan', value: 24 },
  { name: 'Feb', value: 20 },
  { name: 'Mar', value: 18 },
  { name: 'Apr', value: 16 },
  { name: 'May', value: 14 },
  { name: 'Jun', value: 12 },
];

export function SupportTickets() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Support Tickets</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold mb-2">Open vs. Resolved</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={openVsResolvedData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="open" fill="#8884d8" />
                <Bar dataKey="resolved" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Avg. Resolution Time</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={avgResolutionTimeData}>
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
