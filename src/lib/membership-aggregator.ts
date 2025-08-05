import { MembershipRecord } from "@/context/membership-data-context";
import { FinancialRecord } from "@/context/financial-data-context";

export type MembershipStats = {
  totalMembers: number;
  churnRate: number;
  retentionRate: number;
  clv: number;
};

export const getMembershipStats = (
  membershipRecords: MembershipRecord[],
  financialRecords: FinancialRecord[]
): MembershipStats => {
  if (membershipRecords.length === 0) {
    return {
      totalMembers: 0,
      churnRate: 0,
      retentionRate: 0,
      clv: 0,
    };
  }

  const totalNewMembers = membershipRecords.reduce((acc, rec) => acc + rec.newMembers, 0);
  const totalLostMembers = membershipRecords.reduce((acc, rec) => acc + rec.lostMembers, 0);
  const previousTotalMembers = 1000; // This should come from a reliable source
  const totalMembers = previousTotalMembers + totalNewMembers - totalLostMembers;

  const churnRate = previousTotalMembers > 0 ? (totalLostMembers / previousTotalMembers) * 100 : 0;
  const retentionRate = 100 - churnRate;

  const totalRevenue = financialRecords.reduce((acc, rec) => acc + rec.revenue, 0);
  const totalCustomers = new Set(financialRecords.map(rec => rec.customerId)).size;
  const averageRevenuePerCustomer = totalCustomers > 0 ? totalRevenue / totalCustomers : 0;
  const grossMargin = financialRecords.reduce((acc, rec) => acc + (rec.revenue - rec.cogs), 0) / totalRevenue;

  const clv = churnRate > 0 ? (averageRevenuePerCustomer * grossMargin) / (churnRate / 100) : 0;

  return {
    totalMembers,
    churnRate,
    retentionRate,
    clv,
  };
};
