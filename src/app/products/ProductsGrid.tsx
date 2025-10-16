"use client";

import { useMemo, useState } from "react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { Separator } from "@/components/ui/separator";

type ProductsGridProps = {
  category?: string;
};

export default function ProductsGrid({ category }: ProductsGridProps) {
  const [internalCategory, setInternalCategory] = useState<string>("all");
  const effectiveCategory = category ?? internalCategory;
  const filtered = useMemo(
    () => (effectiveCategory === "all" ? products : products.filter((p) => p.category === effectiveCategory)),
    [effectiveCategory]
  );

  return (
    <>
      <Separator className="mb-6" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </>
  );
}
