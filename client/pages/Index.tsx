import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Leaf,
  Truck,
  Shield,
  Clock,
  Users,
  Star,
  CheckCircle,
  ChefHat,
  Apple,
  Smartphone,
  ArrowRight,
} from "lucide-react";

export default function Index() {
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-dark leading-tight">
                Fresh Food Daily, Delivered To You
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                Your one-stop platform for trusted tiffin subscriptions and organic groceries. Experience freshness, consistency, and convenience every single day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/tiffin-plans">
                  <Button className="h-12 px-6 bg-green-primary hover:bg-green-dark text-white rounded-lg font-semibold text-base w-full sm:w-auto">
                    Start Your Daily Meal
                  </Button>
                </Link>
                <Link to="/grocery">
                  <Button
                    variant="outline"
                    className="h-12 px-6 border-green-primary text-green-primary hover:bg-green-pale rounded-lg font-semibold text-base w-full sm:w-auto"
                  >
                    Explore Grocery
                  </Button>
                </Link>
              </div>
              <div className="flex gap-6 pt-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-primary" />
                  <span>Fresh Daily</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-primary" />
                  <span>On-Time Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-primary" />
                  <span>Hygienic</span>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/12737912/pexels-photo-12737912.jpeg"
                alt="Fresh tiffin meal with rajma curry, basmati rice, and vegetables"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Preview Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-dark mb-4">
              How Khana Mart Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple steps to get fresh food and groceries delivered to your doorstep
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 mb-8">
            {[
              {
                step: 1,
                title: "Choose Service",
                description: "Select Tiffin subscription or Grocery ordering",
                icon: "🛍️",
              },
              {
                step: 2,
                title: "Customize",
                description: "Pick your meals, items, and delivery schedule",
                icon: "🎯",
              },
              {
                step: 3,
                title: "Fresh Preparation",
                description: "Our kitchen prepares with highest hygiene standards",
                icon: "👨‍🍳",
              },
              {
                step: 4,
                title: "Timely Delivery",
                description: "Receive fresh items at your scheduled time",
                icon: "📦",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-green-pale rounded-xl p-6 md:p-8 h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-green-primary text-white flex items-center justify-center font-bold text-xl mb-4">
                    {item.step}
                  </div>
                  <div className="text-5xl mb-3">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-green-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:flex absolute -right-2 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-green-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/how-it-works">
              <Button className="bg-green-primary hover:bg-green-dark text-white rounded-lg font-semibold">
                View Full Process
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-16 md:py-24 bg-green-pale">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-dark mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need for fresh food and groceries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Tiffin Plans Card */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-primary to-green-dark flex items-center justify-center">
                <div className="text-6xl">🍱</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-green-dark mb-3">
                  Daily Tiffin Subscriptions
                </h3>
                <p className="text-gray-600 mb-4">
                  Never worry about daily meals. Fresh, nutritious tiffins prepared with care and delivered on time, every single day.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-primary" />
                    Flexible Plans (Daily, Weekly, Monthly)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-primary" />
                    Nutritionally Balanced Meals
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-primary" />
                    No Long-Term Contracts
                  </li>
                </ul>
                <Link to="/tiffin-plans">
                  <Button className="w-full bg-green-primary hover:bg-green-dark text-white rounded-lg font-semibold">
                    View Plans
                  </Button>
                </Link>
              </div>
            </div>

            {/* Grocery Card */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-light to-green-primary flex items-center justify-center">
                <div className="text-6xl">🥦</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-green-dark mb-3">
                  Fresh Grocery Orders
                </h3>
                <p className="text-gray-600 mb-4">
                  Sourced directly from verified suppliers. Fresh vegetables, daily essentials, and organic products delivered with care.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-primary" />
                    One-Time & Recurring Orders
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-primary" />
                    Fresh & Organic Products
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-primary" />
                    Fast Same-Day Delivery
                  </li>
                </ul>
                <Link to="/grocery">
                  <Button className="w-full bg-green-primary hover:bg-green-dark text-white rounded-lg font-semibold">
                    Order Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Khana Mart Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-dark mb-4">
              Why Choose Khana Mart
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to freshness, quality, and your satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Leaf,
                title: "Fresh & Hygienic",
                description:
                  "Central kitchen with strict food safety standards and hygienic preparation",
              },
              {
                icon: Shield,
                title: "Centralized Control",
                description:
                  "Every meal prepared under our supervision ensuring consistency and quality",
              },
              {
                icon: ChefHat,
                title: "Consistent Taste",
                description:
                  "Expert chefs prepare all meals with care and precision every single day",
              },
              {
                icon: Truck,
                title: "On-Time Delivery",
                description:
                  "Reliable delivery partners ensure your meals arrive fresh and on schedule",
              },
              {
                icon: Users,
                title: "Affordable Pricing",
                description:
                  "Quality food at competitive prices accessible to everyone in the community",
              },
              {
                icon: Clock,
                title: "Flexible Schedule",
                description:
                  "Pause, resume, or modify your subscription anytime without penalties",
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-green-pale rounded-xl p-8 shadow hover:shadow-lg transition-shadow"
                >
                  <Icon className="w-12 h-12 text-green-primary mb-4" />
                  <h3 className="text-xl font-semibold text-green-dark mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-green-primary to-green-dark text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left - Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Download Our App
              </h2>
              <p className="text-lg text-green-pale">
                Order on the go, track deliveries in real-time, manage your subscriptions, and get exclusive app-only offers and discounts.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-pale" />
                  <span>Easy and quick ordering from anywhere</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-pale" />
                  <span>Real-time delivery tracking with live updates</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-pale" />
                  <span>Exclusive app-only discounts and offers</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-pale" />
                  <span>Push notifications for new deals and orders</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-pale" />
                  <span>Save favorite orders and meal preferences</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="h-12 px-6 bg-white text-green-primary hover:bg-green-pale rounded-lg font-semibold flex items-center justify-center gap-2 w-full sm:w-auto">
                    <Apple className="w-5 h-5" />
                    App Store
                  </Button>
                </a>
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="h-12 px-6 bg-white text-green-primary hover:bg-green-pale rounded-lg font-semibold flex items-center justify-center gap-2 w-full sm:w-auto">
                    <Smartphone className="w-5 h-5" />
                    Play Store
                  </Button>
                </a>
              </div>
            </div>

            {/* Right - Phone Mockup with App Screens */}
            <div className="relative h-96 md:h-full min-h-96 flex items-center justify-center">
              {/* Phone Frame */}
              <div className="relative w-64 h-96 rounded-3xl border-8 border-white shadow-2xl bg-black overflow-hidden">
                {/* Screen Content - Alternating between services */}
                <div className="w-full h-full bg-gradient-to-b from-green-pale to-white flex flex-col items-center justify-center p-4">
                  <div className="text-center space-y-4">
                    <div className="text-6xl animate-bounce mb-4">📱</div>
                    <div className="text-2xl font-bold text-green-dark">Khana Mart</div>
                    <div className="text-5xl mb-4">🍱</div>
                    <div className="font-semibold text-green-dark">Fresh Tiffin & Groceries</div>
                    <div className="text-sm text-gray-600 mt-4">Order & Track in Real-Time</div>
                  </div>

                  {/* App Preview Cards */}
                  <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white flex flex-col items-center justify-center p-4">
                    <div className="text-5xl mb-3">🥗</div>
                    <div className="font-bold text-green-dark text-sm text-center">
                      Fresh Groceries
                    </div>
                    <div className="text-xs text-gray-600 mt-2 text-center">
                      One-time or recurring orders
                    </div>
                  </div>
                </div>

                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl" />
              </div>

              {/* Floating Service Cards */}
              <div className="absolute top-4 -left-12 w-32 bg-white rounded-lg p-4 shadow-lg transform -rotate-12 hover:rotate-0 transition-transform">
                <div className="text-4xl mb-2 text-center">🍱</div>
                <p className="text-xs font-semibold text-green-dark text-center">
                  Daily Tiffin
                </p>
                <p className="text-xs text-gray-600 text-center">
                  Fresh meals delivered
                </p>
              </div>

              <div className="absolute bottom-4 -right-12 w-32 bg-white rounded-lg p-4 shadow-lg transform rotate-12 hover:rotate-0 transition-transform">
                <div className="text-4xl mb-2 text-center">🥦</div>
                <p className="text-xs font-semibold text-green-dark text-center">
                  Fresh Groceries
                </p>
                <p className="text-xs text-gray-600 text-center">
                  Best quality items
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 md:py-24 bg-green-pale">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-dark mb-4">
              Love From Our Customers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real stories from people enjoying fresh food daily
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Priya Singh",
                role: "Working Professional",
                avatar: "👩‍💼",
                rating: 5,
                text: "Finally, I don't have to worry about my daily meals! Fresh, tasty, and delivered on time. Best decision ever!",
                image: "🍛",
              },
              {
                name: "Rajesh Kumar",
                role: "Family of 4",
                avatar: "👨‍👩‍👧‍👦",
                rating: 5,
                text: "The consistency is amazing. My family loves the variety in menu. Great value for money!",
                image: "🥘",
              },
              {
                name: "Sneha Patel",
                role: "Fitness Enthusiast",
                avatar: "💪",
                rating: 5,
                text: "Quality groceries at my doorstep. I trust their hygiene standards completely. Highly recommended!",
                image: "🥗",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-primary flex items-center justify-center text-xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-dark">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="text-right text-3xl">{testimonial.image}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-green-primary to-green-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-green-pale mb-8 max-w-2xl mx-auto">
            Join thousands of customers enjoying fresh food delivered to their door
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/tiffin-plans">
              <Button className="h-12 px-8 bg-white text-green-primary hover:bg-green-pale font-semibold rounded-lg">
                Subscribe Tiffin
              </Button>
            </Link>
            <Link to="/grocery">
              <Button className="h-12 px-8 bg-white text-green-primary hover:bg-green-pale font-semibold rounded-lg">
                Order Groceries
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
