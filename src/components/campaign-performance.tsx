"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const marketingRoiData = [
  { name: 'Campaign A', value: 5 },
  { name: 'Campaign B', value: 3 },
  { name: 'Campaign C', value: 2 },
];

export function CampaignPerformance() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Campaign Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold mb-2">Marketing ROI by Campaign</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={marketingRoiData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">CPL vs. Target</h3>
            <div className="flex items-center justify-center h-full">
              <p className="text-4xl font-bold text-green-600">$50 / $60</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
