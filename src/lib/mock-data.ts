export const userList = [
  {
    id: "usr_1",
    name: "Alice Johnson",
    email: "alice.j@techcorp.com",
    role: "Company Admin",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  },
  {
    id: "usr_2",
    name: "Bob Williams",
    email: "bob.w@techcorp.com",
    role: "Finance Team",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  },
  {
    id: "usr_3",
    name: "Charlie Brown",
    email: "charlie.b@techcorp.com",
    role: "Sales & Marketing",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  },
  {
    id: "usr_4",
    name: "Diana Prince",
    email: "diana.p@techcorp.com",
    role: "Operations Team",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
  },
  {
    id: "usr_5",
    name: "Ethan Hunt",
    email: "ethan.h@techcorp.com",
    role: "Basic User",
    avatar: "https://i.pravatar.cc/150?u=a092581f4e29026703d",
  },
  {
    id: "usr_6",
    name: "Frank Castle",
    email: "frank.c@techcorp.com",
    role: "CEO/Executive",
    avatar: "https://i.pravatar.cc/150?u=ceo",
  },
  {
    id: "usr_7",
    name: "Grace Lee",
    email: "grace.l@techcorp.com",
    role: "Platform Super Admin",
    avatar: "https://i.pravatar.cc/150?u=super",
  },
];

export const allPermissions = [
  "Manages tenant accounts",
  "Manages organization settings and users",
  "Access to all dashboards and reports",
  "Access to financial metrics",
  "Access to sales/marketing data",
  "Access to operational data",
  "Limited view-only access",
];

export const roles: Record<string, string[]> = {
  "Platform Super Admin": ["Manages tenant accounts"],
  "Company Admin": ["Manages organization settings and users"],
  "CEO/Executive": ["Access to all dashboards and reports"],
  "Finance Team": ["Access to financial metrics"],
  "Sales & Marketing": ["Access to sales/marketing data"],
  "Operations Team": ["Access to operational data"],
  "Basic User": ["Limited view-only access"],
};

const srisysData = {
    colorScheme: {
        primary: "#4F46E5",
        secondary: "#EC4899",
        chart1: "#10B981",
        chart2: "#F59E0B",
        chart3: "#3B82F6",
        chart4: "#EF4444",
        chart5: "#8B5CF6",
    },
    membershipMetrics: {
        totalMembers: 1234,
        newMembers: 56,
        membersLost: 12,
        retentionRate: 98.8,
        churnRate: 1.2,
        csat: 8.5,
        nps: 45,
    },
    salesMarketingMetrics: {
        leadGeneration: 1200,
        conversionRate: 5.2,
        salesPipelineValue: 1500000,
        avgRevenuePerClient: 1200,
        marketingRoi: 4.5,
        costPerLead: 50,
    },
    operationalMetrics: {
        utilizationRate: 85,
        projectCompletionRate: 98,
        serviceDeliveryTime: 48,
        revenuePerEmployee: 120000,
        employeeUtilizationRate: 92,
    },
    activityLog: {
        finance: [
            { user: "Bob Williams", action: "updated the financial report for Q2 2025.", timestamp: "2 hours ago" },
            { user: "System", action: "generated the monthly P&L statement.", timestamp: "5 days ago" },
        ],
        sales: [
            { user: "Charlie Brown", action: "exported the customer metrics report.", timestamp: "1 week ago" },
            { user: "Charlie Brown", action: "updated the sales pipeline.", timestamp: "2 weeks ago" },
        ],
        operations: [
            { user: "Diana Prince", action: "updated the project completion rate.", timestamp: "3 days ago" },
        ]
    }
};

const vedicData = {
    colorScheme: {
        primary: "#10B981",
        secondary: "#F59E0B",
        chart1: "#4F46E5",
        chart2: "#EC4899",
        chart3: "#3B82F6",
        chart4: "#EF4444",
        chart5: "#8B5CF6",
    },
    membershipMetrics: {
        totalMembers: 5678,
        newMembers: 123,
        membersLost: 45,
        retentionRate: 99.2,
        churnRate: 0.8,
        csat: 9.1,
        nps: 55,
    },
    salesMarketingMetrics: {
        leadGeneration: 2500,
        conversionRate: 4.8,
        salesPipelineValue: 2300000,
        avgRevenuePerClient: 1500,
        marketingRoi: 5.1,
        costPerLead: 45,
    },
    operationalMetrics: {
        utilizationRate: 91,
        projectCompletionRate: 99,
        serviceDeliveryTime: 36,
        revenuePerEmployee: 150000,
        employeeUtilizationRate: 95,
    },
    activityLog: {
        finance: [
            { user: "Bob Williams", action: "updated the financial report for Q2 2025.", timestamp: "2 hours ago" },
        ],
        sales: [
            { user: "Charlie Brown", action: "updated the sales pipeline.", timestamp: "2 weeks ago" },
        ],
        operations: [
            { user: "Diana Prince", action: "updated the project completion rate.", timestamp: "3 days ago" },
        ]
    }
};

const pigeonTechData = {
    colorScheme: {
        primary: "#0EA5E9",
        secondary: "#F472B6",
        chart1: "#10B981",
        chart2: "#F59E0B",
        chart3: "#3B82F6",
        chart4: "#EF4444",
        chart5: "#8B5CF6",
    },
    membershipMetrics: {
        totalMembers: 8765,
        newMembers: 234,
        membersLost: 67,
        retentionRate: 99.5,
        churnRate: 0.5,
        csat: 9.5,
        nps: 65,
    },
    salesMarketingMetrics: {
        leadGeneration: 3500,
        conversionRate: 6.1,
        salesPipelineValue: 3100000,
        avgRevenuePerClient: 1800,
        marketingRoi: 6.2,
        costPerLead: 40,
    },
    operationalMetrics: {
        utilizationRate: 95,
        projectCompletionRate: 100,
        serviceDeliveryTime: 24,
        revenuePerEmployee: 180000,
        employeeUtilizationRate: 98,
    },
    activityLog: {
        finance: [
            { user: "Bob Williams", action: "updated the financial report for Q2 2025.", timestamp: "2 hours ago" },
        ],
        sales: [
            { user: "Charlie Brown", action: "updated the sales pipeline.", timestamp: "2 weeks ago" },
        ],
        operations: [
            { user: "Diana Prince", action: "updated the project completion rate.", timestamp: "3 days ago" },
        ]
    }
};

export const mockDataByCompany: Record<string, any> = {
    srisys: srisysData,
    vedic: vedicData,
    "pigeon-tech": pigeonTechData,
};
