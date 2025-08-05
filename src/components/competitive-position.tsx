"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line } from "recharts";

const marketShareData = [
  { name: 'Your Company', value: 40 },
  { name: 'Competitor A', value: 30 },
  { name: 'Competitor B', value: 20 },
  { name: 'Competitor C', value: 10 },
];

const npsBenchmarkData = [
  { name: 'Jan', yourCompany: 40, industryAvg: 35 },
  { name: 'Feb', yourCompany: 42, industryAvg: 36 },
  { name: 'Mar', yourCompany: 45, industryAvg: 37 },
  { name: 'Apr', yourCompany: 48, industryAvg: 38 },
  { name: 'May', yourCompany: 50, industryAvg: 39 },
  { name: 'Jun', yourCompany: 52, industryAvg: 40 },
];

export function CompetitivePosition() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Competitive Position</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold mb-2">Market Share</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={marketShareData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">NPS Benchmark</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={npsBenchmarkData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Line type="monotone" dataKey="yourCompany" stroke="#8884d8" />
                <Line type="monotone" dataKey="industryAvg" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
