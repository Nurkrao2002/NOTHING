"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface MembershipRecord {
  membershipChangeDate: Date;
  newMembers: number;
  lostMembers: number;
  reasonForLoss: string;
  surveyDate: Date;
  customerId: string;
  csatScore: number;
  npsScore: number;
  comments?: string;
}

interface MembershipDataContextType {
  data: MembershipRecord[];
  addMembershipRecord: (record: MembershipRecord) => void;
}

const MembershipDataContext = createContext<MembershipDataContextType | undefined>(undefined);

export const MembershipDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<MembershipRecord[]>([]);

  const addMembershipRecord = (record: MembershipRecord) => {
    setData(prevData => [...prevData, record]);
  };

  return (
    <MembershipDataContext.Provider value={{ data, addMembershipRecord }}>
      {children}
    </MembershipDataContext.Provider>
  );
};

export const useMembershipData = () => {
  const context = useContext(MembershipDataContext);
  if (context === undefined) {
    throw new Error('useMembershipData must be used within a MembershipDataProvider');
  }
  return context;
};
