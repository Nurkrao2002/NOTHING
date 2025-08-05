"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface OperationsRecord {
  projectId: string;
  startDate: Date;
  plannedEndDate: Date;
  actualEndDate?: Date;
  status: string;
  projectValue: number;
  employeeId: string;
  timeTrackingDate: Date;
  billableHours: number;
  nonBillableHours: number;
  timeTrackingProjectId?: string;
  serviceId: string;
  customerId: string;
  startTime: string;
  endTime: string;
  deliveredOnTime: boolean;
  headcountDate: Date;
  department: string;
  employeeCount: number;
}

interface OperationsDataContextType {
  data: OperationsRecord[];
  addOperationsRecord: (record: OperationsRecord) => void;
}

const OperationsDataContext = createContext<OperationsDataContextType | undefined>(undefined);

export const OperationsDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<OperationsRecord[]>([]);

  const addOperationsRecord = (record: OperationsRecord) => {
    setData(prevData => [...prevData, record]);
  };

  return (
    <OperationsDataContext.Provider value={{ data, addOperationsRecord }}>
      {children}
    </OperationsDataContext.Provider>
  );
};

export const useOperationsData = () => {
  const context = useContext(OperationsDataContext);
  if (context === undefined) {
    throw new Error('useOperationsData must be used within a OperationsDataProvider');
  }
  return context;
};
