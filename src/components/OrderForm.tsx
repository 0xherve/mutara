"use client";

import { useState } from "react";
import { useForm, type Resolver } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const phoneRegex = /^(\+?\d{7,15}|0\d{9,14})$/;

export const orderSchema = z.object({
    itemId: z.string().min(1),
    itemName: z.string().min(1),
    quantity: z.coerce.number().int().min(1).max(99),
    customerName: z.string().min(2, "Please enter your full name"),
    phone: z.string().regex(phoneRegex, "Enter a valid phone number"),
    address: z.string().min(5, "Please enter a full delivery address"),
    notes: z.string().optional(),
    preferredTime: z.enum(["ASAP", "Morning 8-12", "Afternoon 12-4", "Evening 4-8"]).default("ASAP"),
});

export type OrderFormValues = z.infer<typeof orderSchema>;

type OrderFormProps = {
    defaultValues: Pick<OrderFormValues, "itemId" | "itemName"> & Partial<OrderFormValues>;
};

export function OrderForm({ defaultValues }: OrderFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const form = useForm<OrderFormValues>({
        resolver: zodResolver(orderSchema) as Resolver<OrderFormValues, any, OrderFormValues>,
        defaultValues: {
            itemId: defaultValues.itemId,
            itemName: defaultValues.itemName,
            quantity: 1,
            customerName: "",
            phone: "",
            address: "",
            notes: "",
            preferredTime: "ASAP",
        },
    });

    const onSubmit = async (values: OrderFormValues) => {
        try {
            setIsSubmitting(true);
            const res = await fetch("/api/order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...values, timestamp: new Date().toISOString() }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data?.error || "Order failed");
            toast.success("Order placed! We will contact you shortly.");
            form.reset({ ...form.getValues(), quantity: 1, notes: "" });
        } catch (err: any) {
            toast.error(err?.message || "Something went wrong");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="itemName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Item</FormLabel>
                                <FormControl>
                                    <Input {...field} readOnly />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="quantity"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Quantity</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        min={1}
                                        max={99}
                                        value={field.value ?? 1}
                                        onChange={(e) => field.onChange(Number(e.currentTarget.value))}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="customerName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Your Name</FormLabel>
                            <FormControl>
                                <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g. +12065551234" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="preferredTime"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Preferred Delivery Time</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a time" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="ASAP">ASAP</SelectItem>
                                        <SelectItem value="Morning 8-12">Morning 8-12</SelectItem>
                                        <SelectItem value="Afternoon 12-4">Afternoon 12-4</SelectItem>
                                        <SelectItem value="Evening 4-8">Evening 4-8</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Delivery Address</FormLabel>
                            <FormControl>
                                <input className="p-2 rounded-md border border-gray-300" placeholder="Street, City, Notes for courier" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Special Instructions (optional)</FormLabel>
                            <FormControl>
                                <Textarea placeholder="e.g. Leave with security" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? "Placing order..." : "Place Order"}
                </Button>
            </form>
        </Form>
    );
}


