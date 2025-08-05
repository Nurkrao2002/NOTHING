"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

const ebitdaMarginData = [
  { name: 'Jan', value: 20 },
  { name: 'Feb', value: 22 },
  { name: 'Mar', value: 25 },
  { name: 'Apr', value: 28 },
  { name: 'May', value: 30 },
  { name: 'Jun', value: 32 },
];

export function ProfitabilityWidget() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Profitability</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold mb-2">EBITDA Margin</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={ebitdaMarginData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">SGR</h3>
            <div className="flex items-center justify-center h-full">
              <p className="text-4xl font-bold text-green-600">15%</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
