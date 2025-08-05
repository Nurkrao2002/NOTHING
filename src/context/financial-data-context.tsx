
"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { subDays, subHours } from 'date-fns';

export interface FinancialRecord {
  period: Date;
  revenue: number;
  grossProfit: number;
  netIncome: number;
  expenses: number;
  cashFlow: number;
  ebitda: number;
  customerLtv: number;
  customerCac: number;
  cogs: number;
  operatingExpenses: number;
  interest: number;
  taxes: number;
  depreciation: number;
  shareholdersEquity: number;
  dividendsPaid: number;
}

interface FinancialDataContextType {
  data: FinancialRecord[];
  addFinancialRecord: (record: FinancialRecord) => void;
}

const FinancialDataContext = createContext<FinancialDataContextType | undefined>(undefined);

// Helper to generate more realistic recent data
const generateRecentData = () => {
    const data: FinancialRecord[] = [];
    const now = new Date();
    for (let i = 0; i < 48; i++) { // Last 48 hours
        const period = subHours(now, i);
        const revenue = 680000 / 30 / 24 + Math.random() * 5000;
        const expenses = 515000 / 30 / 24 + Math.random() * 3000;
        const netIncome = revenue - expenses;
        const grossProfit = revenue * (0.65 + (Math.random() - 0.5) * 0.1);

        data.push({
            period,
            revenue: Math.round(revenue),
            expenses: Math.round(expenses),
            netIncome: Math.round(netIncome),
            grossProfit: Math.round(grossProfit),
            ebitda: Math.round(netIncome * 1.2),
            cashFlow: Math.round(netIncome * 1.1),
            customerLtv: 45300 + Math.random() * 500,
            customerCac: 2870 + Math.random() * 100,
            cogs: 0,
            operatingExpenses: 0,
            interest: 0,
            taxes: 0,
            depreciation: 0,
            shareholdersEquity: 0,
            dividendsPaid: 0,
        });
    }

    for (let i = 2; i < 90; i++) { // Last 90 days
        const period = subDays(now, i);
        const revenue = 680000 / 30 + Math.random() * 20000 - 10000;
        const expenses = 515000 / 30 + Math.random() * 15000 - 7500;
        const netIncome = revenue - expenses;
        const grossProfit = revenue * (0.65 + (Math.random() - 0.5) * 0.1);

        data.push({
            period,
            revenue: Math.round(revenue),
            expenses: Math.round(expenses),
            netIncome: Math.round(netIncome),
            grossProfit: Math.round(grossProfit),
            ebitda: Math.round(netIncome * 1.2),
            cashFlow: Math.round(netIncome * 1.1),
            customerLtv: 45300 + Math.random() * 500,
            customerCac: 2870 + Math.random() * 100,
            cogs: 0,
            operatingExpenses: 0,
            interest: 0,
            taxes: 0,
            depreciation: 0,
            shareholdersEquity: 0,
            dividendsPaid: 0,
        });
    }
    return data;
}

const generateYearData = (year: number, baseRevenue: number, growthFactor: number) => {
    const data: FinancialRecord[] = [];
    for (let month = 0; month < 12; month++) {
        const revenue = baseRevenue * (1 + (growthFactor * month) / 12) * (1 + (Math.random() - 0.5) * 0.1);
        const expenses = revenue * (0.75 - (Math.random() * 0.1));
        const netIncome = revenue - expenses;
        const grossProfit = revenue * (0.45 + (Math.random() - 0.5) * 0.1);
        data.push({
            period: new Date(year, month, 28),
            revenue: Math.round(revenue),
            expenses: Math.round(expenses),
            netIncome: Math.round(netIncome),
            grossProfit: Math.round(grossProfit),
            ebitda: Math.round(netIncome * 1.3),
            cashFlow: Math.round(netIncome * 1.15),
            customerLtv: 42000 + (year-2022) * 500,
            customerCac: 3000 - (year-2022) * 50,
            cogs: 0,
            operatingExpenses: 0,
            interest: 0,
            taxes: 0,
            depreciation: 0,
            shareholdersEquity: 0,
            dividendsPaid: 0,
        });
    }
    return data;
}

export const initialData: FinancialRecord[] = [
    // Pre-seed with some realistic monthly data
    ...generateYearData(2022, 400000, 0.1),
    ...generateYearData(2023, 450000, 0.12),
    ...generateYearData(2024, 550000, 0.15),
    ...generateRecentData()
].sort((a, b) => b.period.getTime() - a.period.getTime());

export const FinancialDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<FinancialRecord[]>(initialData);

  const addFinancialRecord = (record: FinancialRecord) => {
    setData(prevData => [...prevData, record].sort((a, b) => b.period.getTime() - a.period.getTime()));
  };

  return (
    <FinancialDataContext.Provider value={{ data, addFinancialRecord }}>
      {children}
    </FinancialDataContext.Provider>
  );
};

export const useFinancialData = () => {
  const context = useContext(FinancialDataContext);
  if (context === undefined) {
    throw new Error('useFinancialData must be used within a FinancialDataProvider');
  }
  return context;
};
