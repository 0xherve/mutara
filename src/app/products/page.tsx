"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
// removed unused Card and Badge imports
import { categories } from "@/data/products";
import ProductsGrid from "./ProductsGrid";
import Navbar from "@/components/Navbar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

export default function ProductsPage() {
  const [category, setCategory] = useState<string>("all");
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Fresh groceries delivered to your door
            </h1>
            <p className="text-muted-foreground text-lg">
              Shop local produce, dairy, meats, and more. Fast delivery, friendly service.
            </p>
            <div className="flex gap-3">
              <Button asChild>
                <Link href="#featured">View Featured</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#all-products">Browse All Products</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-green-100 to-green-200 h-64 md:h-80" />
        </section>

        <section id="all-products" className="mt-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">All Products</h2>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">Filter:</span>
              <div className="w-36">
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <ProductsGrid category={category} />
        </section>
      </div>
    </div>
  );
}
