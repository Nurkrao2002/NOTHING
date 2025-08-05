"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

const avgDeliveryTimeData = [
  { name: 'Jan', value: 48 },
  { name: 'Feb', value: 46 },
  { name: 'Mar', value: 45 },
  { name: 'Apr', value: 44 },
  { name: 'May', value: 42 },
  { name: 'Jun', value: 40 },
];

export function ServiceDelivery() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Service Delivery</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold mb-2">SLA Compliance</h3>
            <div className="flex items-center justify-center h-full">
              <p className="text-4xl font-bold text-green-600">98%</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Avg. Delivery Time</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={avgDeliveryTimeData}>
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
