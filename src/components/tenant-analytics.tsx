"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const revenueByTenantData = [
  { name: 'Tenant A', value: 10000 },
  { name: 'Tenant B', value: 8000 },
  { name: 'Tenant C', value: 7000 },
  { name: 'Tenant D', value: 6000 },
  { name: 'Tenant E', value: 5000 },
  { name: 'Tenant F', value: 4000 },
  { name: 'Tenant G', value: 3000 },
  { name: 'Tenant H', value: 2000 },
  { name: 'Tenant I', value: 1000 },
  { name: 'Tenant J', value: 500 },
];

const subscriptionPlanData = [
  { name: 'Free', value: 10 },
  { name: 'Trial', value: 5 },
  { name: 'Paid', value: 20 },
  { name: 'Enterprise', value: 2 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export function TenantAnalytics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tenant Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold mb-2">Revenue by Tenant</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueByTenantData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Subscription Plan Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={subscriptionPlanData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {subscriptionPlanData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
