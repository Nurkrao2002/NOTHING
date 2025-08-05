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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Textarea } from "./ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const formSchema = z.object({
  // Membership Changes
  membershipChangeDate: z.date(),
  newMembers: z.number(),
  lostMembers: z.number(),
  reasonForLoss: z.string(),

  // Customer Feedback
  surveyDate: z.date(),
  customerId: z.string(),
  csatScore: z.number(),
  npsScore: z.number(),
  comments: z.string().optional(),
})

export function MembershipDataEntryForm() {
  const { user } = useAuth()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  const renderForm = () => {
    if (!user) return null;

    const showMembershipChanges = user.role === "Finance Team" || user.role === "Company Admin" || user.role === "CEO";
    const showCustomerFeedback = user.role === "Sales & Marketing" || user.role === "Company Admin" || user.role === "CEO";

    return (
      <Tabs defaultValue="membership-changes">
        <TabsList>
          {showMembershipChanges && <TabsTrigger value="membership-changes">Membership Changes</TabsTrigger>}
          {showCustomerFeedback && <TabsTrigger value="customer-feedback">Customer Feedback</TabsTrigger>}
        </TabsList>
        {showMembershipChanges && (
          <TabsContent value="membership-changes">
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Membership Changes</h2>
              <FormField
                control={form.control}
                name="membershipChangeDate"
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
                name="newMembers"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Members</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lostMembers"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Lost Members</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="reasonForLoss"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Reason for Loss</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a reason" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="price">Price</SelectItem>
                        <SelectItem value="service">Service</SelectItem>
                        <SelectItem value="competition">Competition</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </TabsContent>
        )}
        {showCustomerFeedback && (
          <TabsContent value="customer-feedback">
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Customer Feedback</h2>
              <FormField
                control={form.control}
                name="surveyDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Survey Date</FormLabel>
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
                name="customerId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Customer ID</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="csatScore"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CSAT Score (1-5)</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="npsScore"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>NPS Score (0-10)</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="comments"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Comments</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </TabsContent>
        )}
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
