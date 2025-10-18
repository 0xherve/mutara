export type NutritionInfo = {
    calories?: number;
    protein?: string;
    carbs?: string;
    fat?: string;
};

export type Product = {
    id: string; // slug
    name: string;
    description: string;
    price: number; // numeric price
    unit: string;
    category: string;
    source: string;
    image: string;
    inStock: boolean;
    nutritionInfo?: NutritionInfo;
    benefits?: string[];
};

export const slugify = (text: string) =>
    text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");

export const products: Product[] = [
    {
        id: slugify("Apples"),
        name: "Apples",
        description:
            "Crisp, sweet, and locally sourced red apples perfect for snacking or baking",
        price: 3.99,
        unit: "lb",
        category: "Fruits",
        source: "Local Orchards, Washington",
        image: "/products/apple.webp",
        inStock: true,
        benefits: ["Rich in fiber", "High in Vitamin C", "Fresh picked"],
    },
    {
        id: slugify("Bananas"),
        name: "Bananas",
        description:
            "Fresh yellow bananas, perfect ripeness for immediate consumption",
        price: 2.49,
        unit: "lb",
        category: "Fruits",
        source: "Tropical Farms, Ecuador",
        image: "/products/banana.webp",
        inStock: true,
        benefits: ["Potassium-rich", "Natural energy", "No pesticides"],
    },
    {
        id: slugify("Milk"),
        name: "Milk",
        description: "Fresh whole milk from grass-fed cows",
        price: 4.99,
        unit: "gallon",
        category: "Dairy",
        source: "Happy Valley Dairy, Local",
        image: "/products/apple.webp",
        inStock: false,
        benefits: ["Hormone-free", "Grass-fed cows", "Fresh daily"],
    },
    {
        id: slugify("Bread"),
        name: "Bread",
        description: "Artisan whole wheat bread, baked fresh daily",
        price: 2.99,
        unit: "loaf",
        category: "Bakery",
        source: "Corner Bakery, Local",
        image: "/products/banana.webp",
        inStock: true,
        benefits: ["No preservatives", "Whole grain", "Baked daily"],
    },
    {
        id: slugify("Eggs"),
        name: "Eggs",
        description: "Free-range organic eggs from local farms",
        price: 5.49,
        unit: "dozen",
        category: "Dairy & Eggs",
        source: "Sunrise Farm, Local",
        image: "/products/apple.webp",
        inStock: false,
        benefits: ["Free-range", "Organic feed", "Rich in protein"],
    },
    {
        id: slugify("Chicken Breast"),
        name: "Chicken Breast",
        description: "Fresh, boneless, skinless chicken breast",
        price: 8.99,
        unit: "lb",
        category: "Meat & Poultry",
        source: "Premium Poultry, Local",
        image: "/products/banana.webp",
        inStock: true,
        benefits: ["Antibiotic-free", "Lean protein", "Fresh never frozen"],
    },
    {
        id: slugify("Rice"),
        name: "Rice",
        description: "Premium long-grain white rice",
        price: 12.99,
        unit: "5lb bag",
        category: "Grains & Staples",
        source: "Golden Harvest, Thailand",
        image: "/products/apple.webp",
        inStock: true,
        benefits: ["Non-GMO", "Aged for flavor", "Easy to cook"],
    },
    {
        id: slugify("Tomatoes"),
        name: "Tomatoes",
        description: "Vine-ripened red tomatoes, sweet and juicy",
        price: 3.49,
        unit: "lb",
        category: "Vegetables",
        source: "Greenhouse Fresh, Local",
        image: "/products/banana.webp",
        inStock: true,
        benefits: ["Vine-ripened", "Rich in lycopene", "No chemicals"],
    },
    {
        id: slugify("Cheese"),
        name: "Cheese",
        description: "Sharp cheddar cheese, aged to perfection",
        price: 6.99,
        unit: "pack",
        category: "Dairy",
        source: "Artisan Cheese Co.",
        image: "/products/apple.webp",
        inStock: true,
        benefits: ["Real milk", "No fillers", "Rich flavor"],
    },
    {
        id: slugify("Yogurt"),
        name: "Yogurt",
        description: "Greek yogurt with live cultures, various flavors",
        price: 4.49,
        unit: "pack",
        category: "Dairy",
        source: "Dairy Delight, Local",
        image: "/products/banana.webp",
        inStock: true,
        benefits: ["Probiotic", "High protein", "Low sugar"],
    },
];

export const categories = Array.from(new Set(products.map((p) => p.category)));

export function getProductById(id: string): Product | undefined {
    return products.find((p) => p.id === id);
}

export function getProductsByCategory(category?: string): Product[] {
    if (!category || category.toLowerCase() === "all") return products;
    return products.filter((p) => p.category.toLowerCase() === category.toLowerCase());
}


