"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useAuth } from "@/context/auth-context";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Save } from "lucide-react";
import { Input as ShadcnInput } from "@/components/ui/input"

const operationalDataEntrySchema = z.object({
  period: z.string().min(1, "Period is required. e.g., 2025-08"),
  utilizationRate: z.coerce.number().min(0).max(100),
  projectCompletionRate: z.coerce.number().min(0).max(100),
  serviceDeliveryTime: z.coerce.number().min(0),
  revenuePerEmployee: z.coerce.number().min(0),
  employeeUtilizationRate: z.coerce.number().min(0).max(100),
});

type OperationalDataEntryFormValues = z.infer<typeof operationalDataEntrySchema>;

const defaultValues: Partial<OperationalDataEntryFormValues> = {
  period: "",
  utilizationRate: "" as any,
  projectCompletionRate: "" as any,
  serviceDeliveryTime: "" as any,
  revenuePerEmployee: "" as any,
  employeeUtilizationRate: "" as any,
};

export function OperationalDataEntryForm() {
  const { toast } = useToast();
  const { user } = useAuth();
  const form = useForm<OperationalDataEntryFormValues>({
    resolver: zodResolver(operationalDataEntrySchema),
    defaultValues,
  });

  const onSubmit = (data: OperationalDataEntryFormValues) => {
    // In a real app, you would save this data to your backend
    console.log(data);
    toast({
      title: "Data Saved (Demo)",
      description: "Operational metrics have been successfully saved.",
    });
    form.reset(defaultValues);
  };

    const handleNumericChange = (e: React.ChangeEvent<HTMLInputElement>, field: any) => {
    const value = e.target.value;
    if (value === '' || value === '-') {
      field.onChange(value);
    } else {
      const num = Number(value);
      if (!isNaN(num)) {
        field.onChange(num);
      }
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Record Operational Metrics</CardTitle>
            <CardDescription>
                Fill out the form below to add operational data for a specific period.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="period"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Period (YYYY-MM)</FormLabel>
                  <FormControl>
                    <ShadcnInput placeholder="e.g., 2025-08" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormField control={form.control} name="utilizationRate" render={({ field }) => ( <FormItem> <FormLabel>Utilization Rate (%)</FormLabel> <FormControl> <Input type="text" inputMode="decimal" {...field} onChange={e => handleNumericChange(e, field)} value={field.value ?? ''} /> </FormControl> <FormMessage /> </FormItem> )} />
              <FormField control={form.control} name="projectCompletionRate" render={({ field }) => ( <FormItem> <FormLabel>Project Completion Rate (%)</FormLabel> <FormControl> <Input type="text" inputMode="decimal" {...field} onChange={e => handleNumericChange(e, field)} value={field.value ?? ''} /> </FormControl> <FormMessage /> </FormItem> )} />
              <FormField control={form.control} name="serviceDeliveryTime" render={({ field }) => ( <FormItem> <FormLabel>Service Delivery Time (h)</FormLabel> <FormControl> <Input type="text" inputMode="decimal" {...field} onChange={e => handleNumericChange(e, field)} value={field.value ?? ''} /> </FormControl> <FormMessage /> </FormItem> )} />
              <FormField control={form.control} name="revenuePerEmployee" render={({ field }) => ( <FormItem> <FormLabel>Revenue Per Employee ($)</FormLabel> <FormControl> <Input type="text" inputMode="decimal" {...field} onChange={e => handleNumericChange(e, field)} value={field.value ?? ''} /> </FormControl> <FormMessage /> </FormItem> )} />
              <FormField control={form.control} name="employeeUtilizationRate" render={({ field }) => ( <FormItem> <FormLabel>Employee Utilization Rate (%)</FormLabel> <FormControl> <Input type="text" inputMode="decimal" {...field} onChange={e => handleNumericChange(e, field)} value={field.value ?? ''} /> </FormControl> <FormMessage /> </FormItem> )} />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end border-t pt-6">
            <Button type="submit" size="lg">
                <Save className="mr-2 h-4 w-4" />
                Save Operational Data
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
