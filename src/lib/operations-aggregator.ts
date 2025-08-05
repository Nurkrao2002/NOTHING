import { OperationsRecord } from "@/context/operations-data-context";
import { FinancialRecord } from "@/context/financial-data-context";

export type OperationsStats = {
  utilizationRate: number;
  projectCompletionRate: number;
  serviceDeliveryTime: number;
  revenuePerEmployee: number;
};

export const getOperationsStats = (
  operationsRecords: OperationsRecord[],
  financialRecords: FinancialRecord[]
): OperationsStats => {
  if (operationsRecords.length === 0) {
    return {
      utilizationRate: 0,
      projectCompletionRate: 0,
      serviceDeliveryTime: 0,
      revenuePerEmployee: 0,
    };
  }

  const totalBillableHours = operationsRecords.reduce((acc, rec) => acc + rec.billableHours, 0);
  const totalNonBillableHours = operationsRecords.reduce((acc, rec) => acc + rec.nonBillableHours, 0);
  const totalHours = totalBillableHours + totalNonBillableHours;

  const completedProjects = operationsRecords.filter(rec => rec.status === "completed").length;
  const totalProjects = new Set(operationsRecords.map(rec => rec.projectId)).size;

  const totalServiceDeliveryTime = operationsRecords.reduce((acc, rec) => {
    const startTime = new Date(rec.startTime).getTime();
    const endTime = new Date(rec.endTime).getTime();
    return acc + (endTime - startTime);
  }, 0);
  const averageServiceDeliveryTime = totalServiceDeliveryTime / operationsRecords.length;

  const totalRevenue = financialRecords.reduce((acc, rec) => acc + rec.revenue, 0);
  const totalEmployees = operationsRecords.reduce((acc, rec) => acc + rec.employeeCount, 0);

  const utilizationRate = totalHours > 0 ? (totalBillableHours / totalHours) * 100 : 0;
  const projectCompletionRate = totalProjects > 0 ? (completedProjects / totalProjects) * 100 : 0;
  const revenuePerEmployee = totalEmployees > 0 ? totalRevenue / totalEmployees : 0;

  return {
    utilizationRate,
    projectCompletionRate,
    serviceDeliveryTime: averageServiceDeliveryTime,
    revenuePerEmployee,
  };
};
