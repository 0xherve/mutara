"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

export default function EditProductPage() {
  const supabase = createSupabaseBrowserClient();
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const id = params.id;

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.from("products").select("*").eq("id", id).maybeSingle();
      if (data) {
        setName(data.name ?? "");
        setDescription(data.description ?? "");
        setPrice(data.price_cents ? (data.price_cents / 100).toFixed(2) : "");
      }
    })();
  }, [id]);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      let image_url: string | undefined;
      if (file) {
        const filePath = `products/${Date.now()}_${file.name}`;
        const { error: uploadError } = await supabase.storage.from("product-images").upload(filePath, file, {
          cacheControl: "3600",
          upsert: false,
        });
        if (uploadError) throw uploadError;
        const { data } = supabase.storage.from("product-images").getPublicUrl(filePath);
        image_url = data.publicUrl;
      }
      const update: any = {
        name,
        description,
        price_cents: Math.round(parseFloat(price) * 100),
      };
      if (image_url) update.image_url = image_url;
      const { error } = await supabase.from("products").update(update).eq("id", id);
      if (error) throw error;
      router.push("/admin");
    } catch (err: any) {
      alert(err.message || "Failed to save product");
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete() {
    if (!confirm("Delete this product?")) return;
    setLoading(true);
    const { error } = await supabase.from("products").delete().eq("id", id);
    setLoading(false);
    if (error) return alert(error.message);
    router.push("/admin");
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Edit Product</h1>
      <form onSubmit={handleSave} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="price">Price (USD)</Label>
          <Input id="price" type="number" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="desc">Description</Label>
          <Textarea id="desc" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="image">Replace Image</Label>
          <Input id="image" type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
        </div>
        <div className="flex items-center gap-3">
          <Button type="submit" disabled={loading}>{loading ? "Saving..." : "Save"}</Button>
          <Button type="button" variant="outline" onClick={() => router.push("/admin")}>Cancel</Button>
          <Button type="button" variant="destructive" onClick={handleDelete} disabled={loading}>Delete</Button>
        </div>
      </form>
    </div>
  );
}


