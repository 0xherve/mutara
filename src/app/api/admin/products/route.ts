import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function GET() {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase.from("products").select("*").order("created_at", { ascending: false });
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ products: data });
}

export async function POST(request: Request) {
  const supabase = createSupabaseServerClient();
  const body = await request.json();
  const { name, description, price_cents, image_url, sku } = body ?? {};
  const { data: inserted, error } = await supabase
    .from("products")
    .insert({ name, description, price_cents, image_url, sku })
    .select("*")
    .single();
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ product: inserted }, { status: 201 });
}


