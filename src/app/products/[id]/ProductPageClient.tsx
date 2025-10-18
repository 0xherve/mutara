"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { products, getProductById } from "@/data/products";
import { OrderForm } from "@/components/OrderForm";
import { ProductCard } from "@/components/ProductCard";
import Navbar from "@/components/Navbar";

type Props = {
  productId: string;
};

export default async function ProductPageClient({ productId }: Props) {
  const product = getProductById(productId);
  if (!product) return null;

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="mx-auto max-w-6xl px-4 py-8">
        <nav className="text-sm text-muted-foreground mb-4">
          <Link href="/" className="hover:underline">Home</Link> <span>/</span>{" "}
          <Link href="/products" className="hover:underline">Products</Link> <span>/</span>{" "}
          <span className="text-foreground">{product.name}</span>
        </nav>
        <div className="flex items-center justify-between mb-4">
          <Button variant="ghost" asChild>
            <Link href="/products">← Back to Catalog</Link>
          </Button>
          <ShareButton />
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="h-full">
            <div className="w-full h-full min-h-80 md:min-h-[420px] rounded-lg bg-muted bg-cover bg-center smooth-transition" style={{ backgroundImage: `url(${product.image})` }} />
          </div>
          <div className="space-y-3 h-full">
            <div className="flex items-center gap-3">
              <Badge>{product.category}</Badge>
              <Badge variant="secondary">{product.inStock ? "In Stock" : "Out of Stock"}</Badge>
            </div>
            <h1 className="text-3xl font-semibold">{product.name}</h1>
            <div className="text-xl">
              <span className="font-medium">${product.price.toFixed(2)}</span>
              <span className="text-muted-foreground"> / {product.unit}</span>
            </div>
            <p className="text-muted-foreground">{product.description}</p>
            <div className="text-sm">
              <span className="font-medium">Source:</span> {product.source}
            </div>
            {product.benefits && (
              <div className="flex flex-wrap gap-2 pt-2">
                {product.benefits.map((b) => (
                  <Badge key={b} variant="outline">{b}</Badge>
                ))}
              </div>
            )}
            <Separator className="my-4" />
            <OrderForm defaultValues={{ itemId: product.id, itemName: product.name }} />
          </div>
        </div>
        {related.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((r) => (
                <ProductCard key={r.id} product={r} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ShareButton() {
  return (
    <Button
      variant="outline"
      onClick={async () => {
        const url = typeof window !== "undefined" ? window.location.href : "";
        try {
          await navigator.clipboard.writeText(url);
          // dynamic import to avoid server refs
          const { toast } = await import("sonner");
          toast.success("Link copied to clipboard");
        } catch {
          const { toast } = await import("sonner");
          toast.error("Failed to copy link");
        }
      }}
    >
      Share
    </Button>
  );
}
