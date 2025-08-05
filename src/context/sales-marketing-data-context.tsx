"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface SalesMarketingRecord {
  leadGenDate: Date;
  leadSource: string;
  leadCount: number;
  campaignName: string;
  leadId: string;
  conversionDate: Date;
  convertedToCustomer: boolean;
  customerId?: string;
  opportunityId: string;
  dealStage: string;
  dealValue: number;
  probability: number;
  expectedCloseDate: Date;
  campaignCostName: string;
  campaignCostDate: Date;
  costType: string;
  campaignCostAmount: number;
  revenueAttributionCustomerId: string;
  revenueSource: string;
  attributedRevenue: number;
}

interface SalesMarketingDataContextType {
  data: SalesMarketingRecord[];
  addSalesMarketingRecord: (record: SalesMarketingRecord) => void;
}

const SalesMarketingDataContext = createContext<SalesMarketingDataContextType | undefined>(undefined);

export const SalesMarketingDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<SalesMarketingRecord[]>([]);

  const addSalesMarketingRecord = (record: SalesMarketingRecord) => {
    setData(prevData => [...prevData, record]);
  };

  return (
    <SalesMarketingDataContext.Provider value={{ data, addSalesMarketingRecord }}>
      {children}
    </SalesMarketingDataContext.Provider>
  );
};

export const useSalesMarketingData = () => {
  const context = useContext(SalesMarketingDataContext);
  if (context === undefined) {
    throw new Error('useSalesMarketingData must be used within a SalesMarketingDataProvider');
  }
  return context;
};
