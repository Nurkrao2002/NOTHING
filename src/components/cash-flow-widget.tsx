"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from "recharts";

const netCashPositionData = [
  { name: 'Inflows', value: 100000 },
  { name: 'Outflows', value: 80000 },
];

export function CashFlowWidget() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cash Flow</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold mb-2">Net Cash Position</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={netCashPositionData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Burn Rate</h3>
            <div className="flex items-center justify-center h-full">
              <p className="text-4xl font-bold">$20,000/month</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
