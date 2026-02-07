import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Leaf,
  Truck,
  Shield,
  Clock,
  Users,
  Star,
  CheckCircle,
  ChefHat,
  ShoppingCart,
  Apple,
  Smartphone,
  ArrowRight,
  MapPin,
  Mail,
  Phone,
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
                <Button className="h-12 px-6 bg-green-primary hover:bg-green-dark text-white rounded-lg font-semibold text-base">
                  Start Your Daily Meal
                </Button>
                <Button
                  variant="outline"
                  className="h-12 px-6 border-green-primary text-green-primary hover:bg-green-pale rounded-lg font-semibold text-base"
                >
                  Explore Grocery
                </Button>
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

      {/* How It Works Section */}
      <section id="how-it-works" className="w-full py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-dark mb-4">
              How Khana Mart Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple steps to get fresh food and groceries delivered to your doorstep
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
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
        </div>
      </section>

      {/* Tiffin Subscription Section */}
      <section id="tiffin" className="w-full py-16 md:py-24 bg-green-pale">
        <div className="container mx-auto px-4">
          {/* Tiffin Image Showcase */}
          <div className="mb-12 md:mb-16">
            <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/280453/pexels-photo-280453.jpeg"
                alt="Fresh tiffin meal box with delicious prepared food"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-dark mb-4">
              Daily Tiffin Subscriptions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Never worry about daily meals. Fresh, nutritious tiffins delivered every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                name: "Daily",
                price: "₹80",
                period: "per day",
                meals: "Lunch + Dinner",
                features: [
                  "Fresh prepared daily",
                  "2 meal options",
                  "Rotating menu",
                  "Flexible schedule",
                  "No long contracts",
                ],
                icon: "📅",
              },
              {
                name: "Weekly",
                price: "₹490",
                period: "per week",
                meals: "Lunch + Dinner",
                features: [
                  "7 days fresh meals",
                  "Customizable menu",
                  "5% savings",
                  "Priority delivery",
                  "Flexible pause",
                ],
                icon: "📆",
                popular: true,
              },
              {
                name: "Monthly",
                price: "₹1,890",
                period: "per month",
                meals: "Lunch + Dinner",
                features: [
                  "30 days coverage",
                  "Maximum savings",
                  "Menu planning included",
                  "Fastest delivery slot",
                  "Dedicated support",
                ],
                icon: "📊",
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`rounded-xl p-8 transition-transform hover:scale-105 ${
                  plan.popular
                    ? "bg-green-primary text-white shadow-lg scale-105"
                    : "bg-white text-gray-900 shadow"
                }`}
              >
                <div className="text-4xl mb-4">{plan.icon}</div>
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? "text-white" : ""}`}>
                  {plan.name}
                </h3>
                <div className={`mb-4 ${plan.popular ? "text-green-pale" : "text-green-primary"}`}>
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-sm ml-2">{plan.period}</span>
                </div>
                <p className={`text-sm mb-6 ${plan.popular ? "text-green-pale" : "text-gray-600"}`}>
                  {plan.meals}
                </p>
                <ul
                  className={`space-y-3 mb-8 text-sm ${
                    plan.popular ? "text-green-pale" : "text-gray-600"
                  }`}
                >
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle
                        className={`w-4 h-4 flex-shrink-0 ${
                          plan.popular ? "text-green-pale" : "text-green-primary"
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full h-11 font-semibold rounded-lg ${
                    plan.popular
                      ? "bg-white text-green-primary hover:bg-green-pale"
                      : "bg-green-primary hover:bg-green-dark text-white"
                  }`}
                >
                  View Tiffin Plans
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">
              ✨ All plans include nutrition information and hygiene assurance
            </p>
          </div>
        </div>
      </section>

      {/* Grocery Ordering Section */}
      <section id="grocery" className="w-full py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left - Image */}
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/33975355/pexels-photo-33975355.jpeg"
                alt="Fresh vegetables and fruits on grocery store shelves"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right - Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-green-dark">
                Fresh Groceries On Demand
              </h2>
              <p className="text-lg text-gray-600">
                Sourced directly from verified suppliers. Fresh vegetables, daily essentials, and organic products delivered with care.
              </p>

              <div className="space-y-4">
                {[
                  { icon: "🥦", title: "Fresh Vegetables", desc: "Sourced daily from verified farms" },
                  { icon: "🥕", title: "Daily Essentials", desc: "Pantry staples always available" },
                  { icon: "🍎", title: "Organic Options", desc: "Chemical-free certified products" },
                  { icon: "🛒", title: "Smart Cart", desc: "One-time or recurring orders" },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <span className="text-4xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <h4 className="font-semibold text-green-dark">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="h-12 px-6 bg-green-primary hover:bg-green-dark text-white rounded-lg font-semibold text-base">
                Order Groceries Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Khana Mart Section */}
      <section className="w-full py-16 md:py-24 bg-green-pale">
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
                  className="bg-white rounded-xl p-8 shadow hover:shadow-lg transition-shadow"
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

      {/* Quality & Operations Transparency */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-dark mb-4">
              Quality & Operations Transparency
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe in transparency. Here's how we maintain our standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏭",
                title: "Central Kitchen Model",
                description:
                  "All food prepared in one certified, climate-controlled central kitchen with proper facilities",
              },
              {
                icon: "✅",
                title: "Vendor Quality Checks",
                description:
                  "Regular audits and inspections of all suppliers and vendors for consistency",
              },
              {
                icon: "🛡️",
                title: "Food Safety Standards",
                description:
                  "FSSAI certified with daily testing and hygiene protocols at every step",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-green-pale rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold text-green-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

      {/* Partner With Us Section */}
      <section id="partner" className="w-full py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-dark mb-4">
              Partner With Khana Mart
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Growing together. Join us in our mission to bring fresh food to every table
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "Home Chefs",
                description: "Share your culinary skills with the community",
                icon: "👨‍🍳",
              },
              {
                title: "Grocery Vendors",
                description: "Expand your reach with our growing network",
                icon: "🚜",
              },
              {
                title: "Delivery Partners",
                description: "Flexible work with competitive compensation",
                icon: "🚴",
              },
            ].map((partner, index) => (
              <div
                key={index}
                className="bg-green-pale rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4 flex justify-center">{partner.icon}</div>
                <h3 className="text-xl font-semibold text-green-dark mb-3">
                  {partner.title}
                </h3>
                <p className="text-gray-600 mb-6">{partner.description}</p>
                <Button className="bg-green-primary hover:bg-green-dark text-white rounded-lg font-semibold">
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Promotion Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-green-primary to-green-dark text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left - Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Download Our App</h2>
              <p className="text-lg text-green-pale">
                Order on the go, track deliveries, manage subscriptions, and get exclusive app-only offers
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-pale" />
                  <span>Easy ordering from anywhere</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-pale" />
                  <span>Real-time delivery tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-pale" />
                  <span>Exclusive app-only discounts</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-pale" />
                  <span>Push notifications for offers</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="h-12 px-6 bg-white text-green-primary hover:bg-green-pale rounded-lg font-semibold flex items-center justify-center gap-2">
                  <Apple className="w-5 h-5" />
                  App Store
                </Button>
                <Button className="h-12 px-6 bg-white text-green-primary hover:bg-green-pale rounded-lg font-semibold flex items-center justify-center gap-2">
                  <Smartphone className="w-5 h-5" />
                  Play Store
                </Button>
              </div>
            </div>

            {/* Right - App Preview */}
            <div className="relative h-96 flex items-center justify-center">
              <div className="text-7xl animate-bounce">📱</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="w-full py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-green-dark mb-6">
              About Khana Mart
            </h2>

            <div className="space-y-6 text-lg text-gray-600 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-green-dark mb-3">Our Mission</h3>
                <p>
                  To simplify daily food operations while maintaining exceptional quality, consistency, and reliability for every household.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-green-dark mb-3">Our Vision</h3>
                <p>
                  A centralized technology platform that removes the burden of daily meal planning, making fresh, healthy food accessible to everyone.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-green-dark mb-3">Our Values</h3>
                <ul className="space-y-2 text-left inline-block">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-primary flex-shrink-0" />
                    Freshness - Farm to table in hours, not days
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-primary flex-shrink-0" />
                    Trust - Transparent operations and quality assurance
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-primary flex-shrink-0" />
                    Reliability - On-time, every time
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-primary flex-shrink-0" />
                    Smart Operations - Technology-driven efficiency
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Support Section */}
      <section id="contact" className="w-full py-16 md:py-24 bg-green-pale">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-dark mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600">
              Have questions? We're here to help
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 shadow">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-green-dark mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-green-pale rounded-lg focus:outline-none focus:ring-2 focus:ring-green-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-green-dark mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-green-pale rounded-lg focus:outline-none focus:ring-2 focus:ring-green-primary"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-green-dark mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-green-pale rounded-lg focus:outline-none focus:ring-2 focus:ring-green-primary"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-green-dark mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-green-pale rounded-lg focus:outline-none focus:ring-2 focus:ring-green-primary"
                    placeholder="Your message..."
                  />
                </div>
                <Button className="w-full h-11 bg-green-primary hover:bg-green-dark text-white font-semibold rounded-lg">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-pale flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-green-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-dark mb-1">Address</h4>
                    <p className="text-gray-600 text-sm">
                      123 Food Street, Tech City, TC 12345
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-pale flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-green-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-dark mb-1">Email</h4>
                    <a
                      href="mailto:hello@khanamart.com"
                      className="text-green-primary hover:text-green-dark text-sm"
                    >
                      hello@khanamart.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-pale flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-dark mb-1">Phone</h4>
                    <a
                      href="tel:+1234567890"
                      className="text-green-primary hover:text-green-dark text-sm"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-pale flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-green-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-dark mb-1">Support Hours</h4>
                    <p className="text-gray-600 text-sm">
                      Monday - Sunday: 8 AM - 10 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
