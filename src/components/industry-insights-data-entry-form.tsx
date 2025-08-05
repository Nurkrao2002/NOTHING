"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useAuth } from "@/context/auth-context"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const formSchema = z.object({
  // Market Data
  marketDataDate: z.date(),
  totalMarketSize: z.number(),
  companyRevenueShare: z.number(),
  competitorName: z.string(),

  // Pricing Trends
  pricingTrendsDate: z.date(),
  serviceProduct: z.string(),
  industryAveragePrice: z.number(),
  competitorPrice: z.number(),
})

export function IndustryInsightsDataEntryForm() {
  const { user } = useAuth()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  const renderForm = () => {
    if (!user) return null;

    const showForm = user.role === "Company Admin" || user.role === "CEO";

    if (!showForm) {
      return <p>You do not have permission to view this form.</p>;
    }

    return (
      <Tabs defaultValue="market-data">
        <TabsList>
          <TabsTrigger value="market-data">Market Data</TabsTrigger>
          <TabsTrigger value="pricing-trends">Pricing Trends</TabsTrigger>
        </TabsList>
        <TabsContent value="market-data">
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Market Data</h2>
            <FormField
              control={form.control}
              name="marketDataDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="totalMarketSize"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Total Market Size</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="companyRevenueShare"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Revenue Share</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="competitorName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Competitor Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </TabsContent>
        <TabsContent value="pricing-trends">
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Pricing Trends</h2>
            <FormField
              control={form.control}
              name="pricingTrendsDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="serviceProduct"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service/Product</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="industryAveragePrice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Industry Average Price</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="competitorPrice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Competitor Price</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </TabsContent>
      </Tabs>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {renderForm()}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
