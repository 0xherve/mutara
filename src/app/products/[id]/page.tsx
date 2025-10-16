import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, getProductById } from "@/data/products";
import ProductPageClient from "./ProductPageClient";

type Params = { params: { id: string } };

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }: Params): Metadata {
  const product = getProductById(params.id);
  if (!product) return { title: "Product Not Found" };
  const title = `${product.name} - Fresh Grocery Delivery`;
  const description = product.description;
  const url = `https://example.com/products/${product.id}`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [{ url: product.image }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [product.image],
    },
  };
}

export default function ProductDetailPage({ params }: Params) {
  const product = getProductById(params.id);
  if (!product) return notFound();

  return <ProductPageClient productId={params.id} />;
}
