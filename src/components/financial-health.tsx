"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, BarChart, Bar } from "recharts";

const revenueVsTargetData = [
  { name: 'Jan', actual: 4000, target: 3800 },
  { name: 'Feb', actual: 3000, target: 3200 },
  { name: 'Mar', actual: 2000, target: 2200 },
  { name: 'Apr', actual: 2780, target: 2600 },
  { name: 'May', actual: 1890, target: 1900 },
  { name: 'Jun', actual: 2390, target: 2400 },
];

const profitMarginsData = [
  { name: 'Jan', gross: 60, net: 20, ebitda: 30 },
  { name: 'Feb', gross: 55, net: 18, ebitda: 28 },
  { name: 'Mar', gross: 50, net: 15, ebitda: 25 },
  { name: 'Apr', gross: 58, net: 22, ebitda: 32 },
  { name: 'May', gross: 62, net: 25, ebitda: 35 },
  { name: 'Jun', gross: 65, net: 28, ebitda: 38 },
];

export function FinancialHealth() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Financial Health</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold mb-2">Revenue vs. Target</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={revenueVsTargetData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Line type="monotone" dataKey="actual" stroke="#8884d8" />
                <Line type="monotone" dataKey="target" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Profit Margins</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={profitMarginsData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="gross" stackId="a" fill="#8884d8" />
                <Bar dataKey="net" stackId="a" fill="#82ca9d" />
                <Bar dataKey="ebitda" stackId="a" fill="#ffc658" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
