"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FunnelChart, Funnel, Tooltip, LabelList, ResponsiveContainer, LineChart, Line, XAxis, YAxis } from "recharts";

const leadVolumeData = [
  { name: 'Website', value: 500 },
  { name: 'Social Media', value: 300 },
  { name: 'Referral', value: 200 },
  { name: 'Event', value: 100 },
  { name: 'Paid Ads', value: 50 },
];

const conversionRateData = [
  { name: 'Jan', value: 2 },
  { name: 'Feb', value: 2.5 },
  { name: 'Mar', value: 2.2 },
  { name: 'Apr', value: 2.8 },
  { name: 'May', value: 3 },
  { name: 'Jun', value: 2.7 },
];

export function LeadPipeline() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Lead Pipeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold mb-2">Lead Volume by Source</h3>
            <ResponsiveContainer width="100%" height={200}>
              <FunnelChart>
                <Tooltip />
                <Funnel dataKey="value" nameKey="name" isAnimationActive>
                  <LabelList position="right" fill="#fff" stroke="none" dataKey="name" />
                </Funnel>
              </FunnelChart>
            </ResponsiveContainer>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Conversion Rate Trend</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={conversionRateData}>
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
