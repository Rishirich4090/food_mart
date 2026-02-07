import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Users, Target, Heart } from "lucide-react";

export default function About() {
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
              About Khana Mart
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Simplifying daily food operations while maintaining quality, consistency, and reliability for every household
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Target,
                title: "Our Mission",
                desc: "To simplify daily food operations while maintaining exceptional quality, consistency, and reliability for every household. We believe fresh, healthy food should be accessible, affordable, and hassle-free.",
              },
              {
                icon: Heart,
                title: "Our Vision",
                desc: "A centralized technology platform that removes the burden of daily meal planning, making fresh, nutritious food a standard part of every household's routine, not a luxury.",
              },
              {
                icon: Users,
                title: "Our Values",
                desc: "Freshness, Trust, Reliability, and Smart Operations. We're committed to transparency, sustainability, and building a community where quality food and operational excellence are never compromised.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-green-pale rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
                >
                  <Icon className="w-16 h-16 text-green-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-dark mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-16 md:py-24 bg-green-pale">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-green-dark mb-12 text-center">
            Our Story
          </h2>

          <div className="space-y-8 text-gray-600 text-lg leading-relaxed">
            <p>
              Khana Mart was founded with a simple observation: millions of people spend hours every week planning,
              shopping for, and preparing meals, often struggling with inconsistent quality, time constraints, and
              reliability issues.
            </p>

            <p>
              Our founders—a team of food entrepreneurs, technology experts, and logistics specialists—came together
              to solve this problem. They saw an opportunity to create a centralized, technology-enabled food platform
              that could deliver fresh, consistent, and affordable meals directly to homes.
            </p>

            <p>
              Starting from a single kitchen in 2022, Khana Mart has grown to serve thousands of families across the
              city. We've built partnerships with trusted suppliers, invested in state-of-the-art logistics, and
              maintained rigorous quality standards at every step.
            </p>

            <p>
              Today, Khana Mart is more than just a food delivery service—we're a movement toward simpler, healthier,
              and more reliable daily food solutions. Every meal we deliver is backed by our commitment to freshness,
              quality, and trust.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Deep Dive */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-green-dark mb-12 text-center">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: "🌱",
                title: "Freshness",
                points: [
                  "Farm-to-table in hours, not days",
                  "No preservatives or artificial additives",
                  "Seasonal ingredients prioritized",
                  "Quality checked at every stage",
                ],
              },
              {
                icon: "🤝",
                title: "Trust",
                points: [
                  "Transparent operations and sourcing",
                  "Hygiene certifications and audits",
                  "Honest pricing with no hidden charges",
                  "Customer feedback valued and acted upon",
                ],
              },
              {
                icon: "⏰",
                title: "Reliability",
                points: [
                  "99.5% on-time delivery rate",
                  "Consistent quality every single day",
                  "Flexible plans that adapt to you",
                  "24/7 customer support available",
                ],
              },
              {
                icon: "🚀",
                title: "Smart Operations",
                points: [
                  "Technology-driven efficiency",
                  "Data-informed decision making",
                  "Continuous improvement mindset",
                  "Scalable and sustainable growth",
                ],
              },
            ].map((value, index) => (
              <div key={index} className="bg-green-pale rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">{value.icon}</div>
                  <h3 className="text-2xl font-bold text-green-dark">{value.title}</h3>
                </div>
                <ul className="space-y-3">
                  {value.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-primary flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="w-full py-16 md:py-24 bg-green-pale">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-green-dark mb-12 text-center">
            Meet Our Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Rahul Sharma",
                role: "Co-Founder & CEO",
                bio: "10+ years in food tech and logistics. Passionate about solving real problems.",
                icon: "👨‍💼",
              },
              {
                name: "Priya Patel",
                role: "Co-Founder & COO",
                bio: "Expert in kitchen operations and food safety. Ensures quality at every step.",
                icon: "👩‍💼",
              },
              {
                name: "Arjun Kumar",
                role: "Co-Founder & CTO",
                bio: "Tech visionary building scalable solutions for modern food delivery.",
                icon: "👨‍💻",
              },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center shadow hover:shadow-lg transition-shadow">
                <div className="text-6xl mb-4 flex justify-center">{member.icon}</div>
                <h4 className="text-xl font-bold text-green-dark mb-1">{member.name}</h4>
                <p className="text-green-primary font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our team is supported by experienced professionals in kitchen management, logistics, customer service,
              and technology. Together, we're committed to making fresh food delivery a standard, not a luxury.
            </p>
          </div>
        </div>
      </section>

      {/* Key Milestones */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-green-dark mb-12 text-center">
            Our Journey
          </h2>

          <div className="space-y-6">
            {[
              { year: "2022", title: "Founded", desc: "Khana Mart launched with a single kitchen" },
              { year: "Q2 2022", title: "First 1000 Orders", desc: "Reached 1000+ monthly orders milestone" },
              {
                year: "Q4 2022",
                title: "Multi-location",
                desc: "Expanded to 3 kitchen locations across the city",
              },
              { year: "2023", title: "Grocery Launch", desc: "Introduced fresh grocery ordering service" },
              { year: "Q2 2023", title: "App Launch", desc: "Mobile app launched for iOS and Android" },
              {
                year: "Q4 2023",
                title: "10K+ Customers",
                desc: "Crossed 10,000+ active customer milestone",
              },
              { year: "2024", title: "Expansion Plans", desc: "Planning expansion to neighboring cities" },
            ].map((milestone, index) => (
              <div key={index} className="flex gap-6 md:gap-8 pb-8 md:pb-12 border-b border-green-pale last:border-b-0">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-primary to-green-dark flex items-center justify-center">
                    <span className="text-white font-bold text-lg text-center">{milestone.year}</span>
                  </div>
                </div>
                <div className="flex-grow flex items-center">
                  <div>
                    <h4 className="text-2xl font-bold text-green-dark mb-2">{milestone.title}</h4>
                    <p className="text-gray-600 text-lg">{milestone.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="w-full py-16 md:py-24 bg-green-pale">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-green-dark mb-12 text-center">
            Commitment to Sustainability
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: "♻️",
                title: "Eco-Friendly Packaging",
                desc: "100% compostable and recyclable packaging materials. Minimal plastic, maximum care for the planet.",
              },
              {
                icon: "🌍",
                title: "Zero Waste Goal",
                desc: "We aim to eliminate food wastage through smart inventory management and donation programs.",
              },
              {
                icon: "🚴",
                title: "Green Delivery",
                desc: "Incentivizing bicycle deliveries and electric vehicles for our logistics fleet.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 text-center shadow hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4 flex justify-center">{item.icon}</div>
                <h4 className="text-xl font-bold text-green-dark mb-3">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
