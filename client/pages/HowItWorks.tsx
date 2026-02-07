import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

export default function HowItWorks() {
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
              How Khana Mart Works
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Simple, transparent, and straightforward process to get fresh food delivered to your doorstep
            </p>
          </div>
        </div>
      </section>

      {/* Main Process Steps */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 mb-12">
            {[
              {
                step: 1,
                title: "Choose Service",
                description: "Select between Tiffin subscription or Grocery ordering based on your needs",
                icon: "🛍️",
              },
              {
                step: 2,
                title: "Customize",
                description: "Pick your preferred meals, items, quantities, and delivery schedule",
                icon: "🎯",
              },
              {
                step: 3,
                title: "Fresh Preparation",
                description: "Our kitchen prepares everything with the highest hygiene and quality standards",
                icon: "👨‍🍳",
              },
              {
                step: 4,
                title: "Timely Delivery",
                description: "Receive your fresh items at your scheduled time, always on time",
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
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="w-full py-16 md:py-24 bg-green-pale">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-green-dark mb-12 text-center">
            Step-by-Step Breakdown
          </h2>

          <div className="space-y-8 max-w-4xl mx-auto">
            {[
              {
                step: 1,
                title: "Sign Up & Create Account",
                description: "Download our app or visit our website. Sign up with your email and phone number. Provide your delivery address and set your preferences.",
                icon: "📱",
              },
              {
                step: 2,
                title: "Browse & Select",
                description: "Browse through our tiffin plans or grocery items. For tiffin, choose your plan (Daily/Weekly/Monthly). For groceries, add items to your cart.",
                icon: "🔍",
              },
              {
                step: 3,
                title: "Customize Your Order",
                description: "Select meal preferences, dietary restrictions, or specific grocery items. Choose your preferred delivery time slot. Set up recurring deliveries if needed.",
                icon: "⚙️",
              },
              {
                step: 4,
                title: "Secure Payment",
                description: "Choose your payment method (UPI, Card, Wallet, etc.). Complete payment with our secure payment gateway. Instant payment confirmation.",
                icon: "💳",
              },
              {
                step: 5,
                title: "Order Confirmation",
                description: "Receive order confirmation via email and SMS. View order details in your dashboard. Track your order in real-time.",
                icon: "✅",
              },
              {
                step: 6,
                title: "Preparation",
                description: "Our kitchen team prepares your items with utmost care. Fresh ingredients used, hygiene standards maintained. Quality check done on every item.",
                icon: "🍳",
              },
              {
                step: 7,
                title: "Timely Delivery",
                description: "Your order is dispatched to our delivery partner. Real-time tracking available in your app. Delivery within the scheduled time slot.",
                icon: "🚚",
              },
              {
                step: 8,
                title: "Enjoy & Feedback",
                description: "Receive and enjoy your fresh items! Share your feedback and rate your experience. Help us improve our service.",
                icon: "😋",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-6 md:gap-8">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-primary text-white font-bold text-2xl">
                    {item.step}
                  </div>
                </div>
                <div className="flex-grow bg-white rounded-xl p-6 md:p-8 shadow hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-green-dark mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Visualization */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-green-dark mb-12 text-center">
            From Order to Delivery
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-green-primary to-green-dark" />

              <div className="space-y-8">
                {[
                  { time: "Immediately", label: "Order Placed", desc: "Your order is confirmed" },
                  { time: "5-10 mins", label: "Sent to Kitchen", desc: "Order sent to our kitchen team" },
                  {
                    time: "30-45 mins",
                    label: "Preparation",
                    desc: "Fresh food is prepared with care",
                  },
                  {
                    time: "50-60 mins",
                    label: "Quality Check",
                    desc: "Every item is inspected and packed",
                  },
                  {
                    time: "1-2 hours",
                    label: "Out for Delivery",
                    desc: "Your order is on the way to you",
                  },
                  { time: "15-30 mins", label: "Delivered", desc: "Fresh items at your doorstep!" },
                ].map((phase, index) => (
                  <div key={index} className="flex gap-6 md:gap-8 relative">
                    <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-green-primary text-white font-bold text-lg md:hidden">
                      {index + 1}
                    </div>
                    <div className="hidden md:flex flex-shrink-0 items-center justify-center w-16 h-16 rounded-full bg-green-primary text-white font-bold text-lg relative z-10">
                      {index + 1}
                    </div>
                    <div className="flex-grow pb-8">
                      <div className="bg-green-pale rounded-xl p-6">
                        <p className="text-sm font-semibold text-green-primary mb-1">
                          {phase.time}
                        </p>
                        <h4 className="text-xl font-bold text-green-dark mb-2">{phase.label}</h4>
                        <p className="text-gray-600">{phase.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-16 md:py-24 bg-green-pale">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-green-dark mb-12 text-center">
            Why Our Process Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "⚡",
                title: "Lightning Fast",
                desc: "From order to delivery in under 2 hours for tiffin",
              },
              {
                icon: "🔒",
                title: "Secure & Safe",
                desc: "Food safety certified with hygiene protocols at every step",
              },
              {
                icon: "📱",
                title: "Easy Tracking",
                desc: "Real-time order tracking directly from your mobile app",
              },
              {
                icon: "💪",
                title: "Reliable Service",
                desc: "99.5% on-time delivery rate with professional delivery partners",
              },
              {
                icon: "🎯",
                title: "Accurate Orders",
                desc: "Quality control checks ensure you get exactly what you ordered",
              },
              {
                icon: "💰",
                title: "Great Value",
                desc: "Competitive pricing with frequent discounts and offers",
              },
              {
                icon: "🌱",
                title: "Eco-Friendly",
                desc: "Sustainable packaging and minimal food wastage",
              },
              {
                icon: "😊",
                title: "Customer First",
                desc: "24/7 support team ready to help with any issues",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-3 flex justify-center">{benefit.icon}</div>
                <h4 className="font-semibold text-green-dark mb-2">{benefit.title}</h4>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
