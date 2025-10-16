import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {

  return (
    <div className="bg-gradient-to-br from-green-50 via-green-100 to-emerald-100 py-8 ">

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-screen px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-gradient-to-tr from-green-400/30 to-emerald-400/30 opacity-60 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        
        <div className="mx-auto max-w-3xl relative z-10">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-muted-foreground ring-1 ring-green-600/20 hover:ring-green-600/30 transition-all">
              Fresh groceries delivered daily.{' '}
              <Link href="/products" className="font-semibold text-green-400 hover:text-green-300">
                <span aria-hidden="true" className="absolute inset-0" />
                Browse now <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
              Fresh groceries delivered to your door
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-600 sm:text-md max-w-xl mx-auto">
              Shop local produce, dairy, meats, and more. Fast delivery, friendly service, 
              and the freshest ingredients for your family.
            </p>
            
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white ">
                <Link href="/products">
                  Browse Products
                </Link>
              </Button>
              <Link href="/products" className="text-sm/6 font-semibold text-gray-700 hover:text-green-600 transition-colors">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
