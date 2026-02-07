import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function TiffinPlans() {
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
              Daily Tiffin Subscriptions
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Never worry about daily meals again. Fresh, nutritious tiffins prepared with care and delivered on time, every single day.
            </p>
          </div>
        </div>
      </section>

      {/* Tiffin Image Showcase */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/25020308/pexels-photo-25020308.jpeg"
              alt="Beautiful tiffin meal setup with traditional Indian food"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* Tiffin Plans */}
      <section className="w-full py-16 md:py-24 bg-green-pale">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-dark mb-4">
              Choose Your Plan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Flexible subscription options tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  Subscribe Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Rotation */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-dark mb-4">
              Weekly Menu Rotation
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Never get bored with our diverse, nutritionally balanced menus
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(
              (day, index) => (
                <div
                  key={index}
                  className="bg-green-pale rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-semibold text-green-dark mb-4">{day}</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>🍛 Butter Chicken</p>
                    <p>🍚 Basmati Rice</p>
                    <p>🥗 Fresh Salad</p>
                    <p>🍞 Wheat Roti</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Nutrition Info */}
      <section className="w-full py-16 md:py-24 bg-green-pale">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-dark mb-4">
              Nutritional Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every meal is carefully planned by nutrition experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: "💪", title: "High Protein", desc: "25-30g per meal" },
              { icon: "🥬", title: "Balanced Carbs", desc: "Complex carbohydrates" },
              { icon: "🥑", title: "Healthy Fats", desc: "Omega-3 rich oils" },
              { icon: "✨", title: "No Preservatives", desc: "100% fresh ingredients" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 text-center shadow hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4 flex justify-center">{item.icon}</div>
                <h4 className="font-semibold text-green-dark mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-dark mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Can I pause or cancel my subscription?",
                a: "Yes, you can pause or cancel anytime without penalty. We want you to enjoy our service!",
              },
              {
                q: "How fresh are the tiffins?",
                a: "All meals are prepared the same day and delivered within 2-4 hours, ensuring maximum freshness.",
              },
              {
                q: "Do you offer customized menus?",
                a: "Weekly and Monthly plans include customization options. You can specify dietary preferences and restrictions.",
              },
              {
                q: "What if I have allergies?",
                a: "Please inform us about allergies during registration. We take them very seriously and prepare meals accordingly.",
              },
            ].map((item, index) => (
              <details
                key={index}
                className="border border-green-pale rounded-lg p-4 hover:bg-green-pale transition-colors cursor-pointer"
              >
                <summary className="font-semibold text-green-dark">{item.q}</summary>
                <p className="text-gray-600 mt-3">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
