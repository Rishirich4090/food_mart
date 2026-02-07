import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function Grocery() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-green-pale via-white to-white"
          aria-hidden="true"
        />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-dark leading-tight mb-6">
              Fresh Groceries On Demand
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Sourced directly from verified suppliers. Fresh vegetables, daily essentials, and organic products delivered with care to your doorstep.
            </p>
          </div>
        </div>
      </section>

      {/* Grocery Image Showcase */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/33975355/pexels-photo-33975355.jpeg"
              alt="Fresh vegetables and fruits on grocery store shelves"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="w-full py-16 md:py-24 bg-green-pale">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-dark mb-4">
              Browse Our Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need for your daily cooking and groceries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { icon: "🥦", title: "Fresh Vegetables", desc: "Farm-fresh daily" },
              { icon: "🍎", title: "Fresh Fruits", desc: "Organic certified" },
              { icon: "🥛", title: "Dairy Products", desc: "Pure & pasteurized" },
              { icon: "🍚", title: "Grains & Cereals", desc: "Bulk quantities" },
              { icon: "🌶️", title: "Spices & Seasonings", desc: "Premium quality" },
              { icon: "🧈", title: "Oils & Condiments", desc: "All varieties" },
              { icon: "🥚", title: "Eggs & Proteins", desc: "Fresh daily" },
              { icon: "🧂", title: "Pantry Essentials", desc: "Complete range" },
            ].map((cat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow hover:shadow-lg hover:scale-105 transition-all cursor-pointer"
              >
                <div className="text-5xl mb-3 flex justify-center">{cat.icon}</div>
                <h4 className="font-semibold text-green-dark mb-1">{cat.title}</h4>
                <p className="text-sm text-gray-600 mb-4">{cat.desc}</p>
                <Button className="w-full h-9 bg-green-primary hover:bg-green-dark text-white text-sm rounded-lg">
                  Browse
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ordering Options */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-dark mb-4">
              Flexible Ordering Options
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose what works best for your lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: "🛒",
                title: "One-Time Orders",
                description: "Order what you need whenever you want. No commitments.",
                features: [
                  "Minimum order value: ₹299",
                  "Free delivery on orders above ₹499",
                  "Same-day delivery available",
                  "Order anytime, anywhere",
                ],
              },
              {
                icon: "📅",
                title: "Recurring Orders",
                description: "Set up weekly or monthly recurring deliveries for essentials.",
                features: [
                  "10% savings on recurring orders",
                  "Skip or modify anytime",
                  "Scheduled delivery dates",
                  "Auto-replenishment available",
                ],
              },
            ].map((option, index) => (
              <div
                key={index}
                className="bg-green-pale rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{option.icon}</div>
                <h3 className="text-2xl font-bold text-green-dark mb-2">{option.title}</h3>
                <p className="text-gray-600 mb-6">{option.description}</p>
                <ul className="space-y-3 mb-8">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full h-11 bg-green-primary hover:bg-green-dark text-white font-semibold rounded-lg">
                  Start Ordering
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="w-full py-16 md:py-24 bg-green-pale">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-dark mb-4">
              Quality Assurance
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We guarantee freshness and quality in every delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔍",
                title: "Strict Inspection",
                description: "Every item is carefully inspected before packaging for quality and freshness",
              },
              {
                icon: "📦",
                title: "Safe Packaging",
                description: "Items are packed in eco-friendly, food-safe packaging to maintain freshness",
              },
              {
                icon: "❄️",
                title: "Cold Chain",
                description: "Maintained cold chain ensures items remain fresh throughout delivery",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 text-center shadow hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4 flex justify-center">{item.icon}</div>
                <h4 className="font-semibold text-green-dark mb-3">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Delivery */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-dark mb-4">
              Simple Pricing & Fast Delivery
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-green-pale rounded-xl p-8">
              <h3 className="text-2xl font-bold text-green-dark mb-6">Delivery Charges</h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex justify-between items-center">
                  <span>Orders below ₹299</span>
                  <strong>₹49</strong>
                </div>
                <div className="border-t border-green-primary pt-4 flex justify-between items-center">
                  <span>Orders ₹299 - ₹499</span>
                  <strong>₹29</strong>
                </div>
                <div className="border-t border-green-primary pt-4 flex justify-between items-center">
                  <span>Orders above ₹499</span>
                  <strong className="text-green-primary">FREE</strong>
                </div>
              </div>
            </div>

            <div className="bg-green-pale rounded-xl p-8">
              <h3 className="text-2xl font-bold text-green-dark mb-6">Delivery Times</h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex justify-between items-center">
                  <span>Standard Delivery</span>
                  <strong>24-48 hours</strong>
                </div>
                <div className="border-t border-green-primary pt-4 flex justify-between items-center">
                  <span>Express Delivery</span>
                  <strong>6-12 hours</strong>
                </div>
                <div className="border-t border-green-primary pt-4 flex justify-between items-center">
                  <span>Same-Day Delivery</span>
                  <strong>3-6 hours*</strong>
                </div>
                <p className="text-xs text-gray-600 mt-4">*Available in select areas before 2 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-green-primary to-green-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Fresh Groceries Today?
          </h2>
          <p className="text-lg text-green-pale mb-8 max-w-2xl mx-auto">
            Join thousands of customers enjoying fresh, quality groceries delivered to their door
          </p>
          <Button className="h-12 px-8 bg-white text-green-primary hover:bg-green-pale font-semibold rounded-lg text-base">
            Order Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
