"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

const churnRateData = [
  { name: 'Jan', value: 2 },
  { name: 'Feb', value: 2.5 },
  { name: 'Mar', value: 2.2 },
  { name: 'Apr', value: 2.8 },
  { name: 'May', value: 3 },
  { name: 'Jun', value: 2.7 },
];

export function MembershipTrends() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Membership Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold mb-2">Churn Rate</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={churnRateData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">CLV:CAC Ratio</h3>
            <div className="flex items-center justify-center h-full">
              <p className="text-4xl font-bold text-green-600">3.5</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
