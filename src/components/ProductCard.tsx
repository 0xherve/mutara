"use client";

import Link from "next/link";
import type { Product } from "@/data/products";

type ProductCardProps = {
    product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="group relative">
            <span
                className={`absolute right-4 top-4 z-10 rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${
                    product.inStock
                        ? "bg-green-100 text-green-800 ring-green-600/20"
                        : "bg-gray-100 text-gray-700 ring-gray-600/20"
                }`}
            >
                {product.inStock ? "In stock" : "Out of stock"}
            </span>
            <img
                alt={product.name}
                src={product.image}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
            />
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <Link href={`/products/${product.id}`}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.name}
                        </Link>
                    </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">${product.price.toFixed(2)}/<span className="mt-1 text-sm text-gray-500">{product.unit} </span></p>
            </div>
        </div>
    );
}


