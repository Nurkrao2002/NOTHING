import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FinancialRecord } from "@/context/financial-data-context";

type KeyRatiosProps = {
  data: Omit<FinancialRecord, 'period' | 'id'> & { count: number };
};

export function KeyRatios({ data }: KeyRatiosProps) {
  if (!data) {
    return (
      <Card className="h-full">
        <CardHeader className="pb-2">
          <CardTitle className="font-headline text-base">Key Ratios</CardTitle>
        </CardHeader>
        <CardContent>
          <p>No data available.</p>
        </CardContent>
      </Card>
    );
  }

  const roe = data.shareholdersEquity > 0 ? (data.netIncome / data.shareholdersEquity) * 100 : 0;
  const dividendPayoutRatio = data.netIncome > 0 ? data.dividendsPaid / data.netIncome : 0;
  const sgr = roe * (1 - dividendPayoutRatio);

  const ratios = [
    { label: "Current Ratio", value: "2.4" },
    { label: "Quick Ratio", value: "1.8" },
    { label: "Debt-to-Equity", value: "0.35" },
    { label: "ROI", value: "18.5%", color: "text-green-600" },
    { label: "ROE", value: `${roe.toFixed(1)}%`, color: "text-green-600" },
    { label: "SGR", value: `${sgr.toFixed(1)}%`, color: "text-green-600" },
    { label: "Gross Margin", value: `${((data.revenue - data.cogs) / data.revenue * 100).toFixed(1)}%`, color: "text-green-600" },
  ];

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="font-headline text-base">Key Ratios</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2.5">
          {ratios.map((ratio) => (
            <div key={ratio.label}>
              <div className="flex justify-between items-center text-sm">
                <p className="text-muted-foreground">{ratio.label}</p>
                <p className={`font-semibold ${ratio.color || 'text-foreground'}`}>{ratio.value}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
