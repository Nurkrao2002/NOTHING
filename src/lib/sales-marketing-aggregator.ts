import { SalesMarketingRecord } from "@/context/sales-marketing-data-context";

export type SalesMarketingStats = {
  conversionRate: number;
  marketingRoi: number;
  costPerLead: number;
  averageRevenuePerClient: number;
};

export const getSalesMarketingStats = (records: SalesMarketingRecord[]): SalesMarketingStats => {
  if (records.length === 0) {
    return {
      conversionRate: 0,
      marketingRoi: 0,
      costPerLead: 0,
      averageRevenuePerClient: 0,
    };
  }

  const totalLeads = records.reduce((acc, rec) => acc + rec.leadCount, 0);
  const convertedLeads = records.filter(rec => rec.convertedToCustomer).length;
  const totalCampaignCost = records.reduce((acc, rec) => acc + rec.campaignCostAmount, 0);
  const totalAttributedRevenue = records.reduce((acc, rec) => acc + rec.attributedRevenue, 0);
  const totalCustomers = new Set(records.map(rec => rec.customerId)).size;

  const conversionRate = totalLeads > 0 ? (convertedLeads / totalLeads) * 100 : 0;
  const marketingRoi = totalCampaignCost > 0 ? (totalAttributedRevenue - totalCampaignCost) / totalCampaignCost : 0;
  const costPerLead = totalLeads > 0 ? totalCampaignCost / totalLeads : 0;
  const averageRevenuePerClient = totalCustomers > 0 ? totalAttributedRevenue / totalCustomers : 0;

  return {
    conversionRate,
    marketingRoi,
    costPerLead,
    averageRevenuePerClient,
  };
};
