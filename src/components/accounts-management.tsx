"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const agingReceivablesData = [
  { range: '0-30 days', amount: '$50,000' },
  { range: '31-60 days', amount: '$20,000' },
  { range: '60+ days', amount: '$5,000' },
];

export function AccountsManagement() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Accounts Management</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold mb-2">Aging Receivables</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Range</TableHead>
                  <TableHead>Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {agingReceivablesData.map((row) => (
                  <TableRow key={row.range}>
                    <TableCell>{row.range}</TableCell>
                    <TableCell>{row.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Payables Due (7 days)</h3>
            <div className="flex items-center justify-center h-full">
              <p className="text-4xl font-bold">$15,000</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
