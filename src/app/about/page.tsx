import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-emerald-100">
      <Navbar />

      {/* Main Content */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
              About Mutara Grocery
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Your trusted local grocery store, bringing fresh produce and quality goods right to your doorstep.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded with a simple mission: to make fresh, quality groceries accessible to everyone in our community. 
                We believe that good food should be convenient, affordable, and delivered with a personal touch.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                What started as a small local business has grown into your neighborhood's most trusted grocery delivery service, 
                combining the warmth of a family-owned store with the convenience of modern technology.
              </p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-green-100 to-green-200 h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="h-16 w-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">M</span>
                </div>
                <p className="text-green-700 font-medium">Mutara Grocery</p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <CardTitle>Quality First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We carefully select only the freshest produce and highest quality products for our customers.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <CardTitle>Fast Delivery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Same-day delivery service ensures your groceries arrive fresh and on time, every time.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                  </div>
                  <CardTitle>Community Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Supporting local farmers and suppliers while serving our community with care and dedication.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Services Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="h-6 w-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <div className="h-2 w-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Fresh Produce</h3>
                    <p className="text-gray-600">Locally sourced fruits and vegetables delivered at peak freshness.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-6 w-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <div className="h-2 w-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Dairy & Meats</h3>
                    <p className="text-gray-600">Premium quality dairy products and fresh meats from trusted suppliers.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-6 w-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <div className="h-2 w-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Pantry Essentials</h3>
                    <p className="text-gray-600">All your household staples and everyday grocery needs.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="h-6 w-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <div className="h-2 w-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Same-Day Delivery</h3>
                    <p className="text-gray-600">Order by 2 PM and receive your groceries the same day.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-6 w-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <div className="h-2 w-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Personal Service</h3>
                    <p className="text-gray-600">Friendly, personalized customer service from our dedicated team.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-6 w-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <div className="h-2 w-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Easy Ordering</h3>
                    <p className="text-gray-600">Simple online ordering with secure payment and order tracking.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white/50 backdrop-blur-sm rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Experience the Difference?</h2>
            <p className="text-gray-600 mb-6">
              Join thousands of satisfied customers who trust Mutara Grocery for their daily shopping needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                <Link href="/products">
                  Start Shopping
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/">
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
