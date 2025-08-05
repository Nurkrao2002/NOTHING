"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

const activeCompaniesData = [
  { name: 'Jan', value: 10 },
  { name: 'Feb', value: 12 },
  { name: 'Mar', value: 15 },
  { name: 'Apr', value: 20 },
  { name: 'May', value: 25 },
  { name: 'Jun', value: 30 },
];

export function PlatformHealth() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Platform Health</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold mb-2">Active Companies</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={activeCompaniesData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">System Uptime</h3>
            <div className="flex items-center justify-center h-full">
              <p className="text-4xl font-bold">99.9%</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">API Latency</h3>
            <div className="flex items-center justify-center h-full">
              <p className="text-4xl font-bold">120ms</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
