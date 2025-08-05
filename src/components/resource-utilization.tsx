"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

const apiCallsData = [
  { name: '12am', value: 1000 },
  { name: '3am', value: 800 },
  { name: '6am', value: 1200 },
  { name: '9am', value: 2000 },
  { name: '12pm', value: 2500 },
  { name: '3pm', value: 2200 },
  { name: '6pm', value: 1800 },
  { name: '9pm', value: 1500 },
];

export function ResourceUtilization() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Resource Utilization</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold mb-2">Storage Usage</h3>
            <div className="flex items-center justify-center h-full">
              <p className="text-4xl font-bold">75%</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">API Calls</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={apiCallsData}>
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
