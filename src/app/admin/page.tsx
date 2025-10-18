import { supabaseAdmin } from "@/lib/supabase/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/database";

export default async function AdminDashboardPage() {
  const { data: products } = await supabaseAdmin
    .from("products")
    .select("id,name,price_cents,image_url")
    .order("created_at", { ascending: false });

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Products</h1>
        <Button asChild>
          <Link href="/admin/products/new">New Product</Link>
        </Button>
      </div>

      <div className="space-y-3">
        {(products ?? []).map((product) => (
          <div key={product.id} className="flex items-center justify-between rounded border p-3">
            <div className="truncate">
              <div className="font-medium">{product.name}</div>
              <div className="text-sm text-muted-foreground">
                ${(product.price_cents / 100).toFixed(2)}
              </div>
            </div>
            <Button variant="outline" asChild>
              <Link href={`/admin/products/${product.id}`}>Edit</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}


