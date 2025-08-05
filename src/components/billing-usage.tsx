"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const churnedCompaniesData = [
  { name: 'Tenant K', reason: 'Price' },
  { name: 'Tenant L', reason: 'Service' },
  { name: 'Tenant M', reason: 'Competition' },
];

export function BillingUsage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Billing & Usage</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold mb-2">MRR/ARR</h3>
            <p className="text-4xl font-bold">$12,345 / $148,140</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Churned Companies</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Company Name</TableHead>
                  <TableHead>Reason</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {churnedCompaniesData.map((company) => (
                  <TableRow key={company.name}>
                    <TableCell>{company.name}</TableCell>
                    <TableCell>{company.reason}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
