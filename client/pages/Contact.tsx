import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
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
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              We're here to help! Have questions? Want to partner with us? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Mail,
                title: "Email",
                value: "hello@khanamart.com",
                desc: "Send us an email anytime",
              },
              {
                icon: Phone,
                title: "Phone",
                value: "+1 (234) 567-890",
                desc: "Call us during business hours",
              },
              {
                icon: MapPin,
                title: "Address",
                value: "123 Food Street, Tech City",
                desc: "Visit our headquarters",
              },
              {
                icon: Clock,
                title: "Support Hours",
                value: "8 AM - 10 PM",
                desc: "Monday to Sunday",
              },
            ].map((contact, index) => {
              const Icon = contact.icon;
              return (
                <div
                  key={index}
                  className="bg-green-pale rounded-xl p-6 md:p-8 text-center hover:shadow-lg transition-shadow"
                >
                  <Icon className="w-12 h-12 text-green-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-dark mb-2">{contact.title}</h3>
                  <p className="font-semibold text-gray-800 mb-1">{contact.value}</p>
                  <p className="text-sm text-gray-600">{contact.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="w-full py-16 md:py-24 bg-green-pale">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-green-dark mb-6">
                Send us a Message
              </h2>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-green-dark mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-green-pale rounded-lg focus:outline-none focus:ring-2 focus:ring-green-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-green-dark mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-green-pale rounded-lg focus:outline-none focus:ring-2 focus:ring-green-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-green-dark mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (234) 567-8900"
                    className="w-full px-4 py-3 border border-green-pale rounded-lg focus:outline-none focus:ring-2 focus:ring-green-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-green-dark mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 border border-green-pale rounded-lg focus:outline-none focus:ring-2 focus:ring-green-primary">
                    <option>Select a subject</option>
                    <option>General Inquiry</option>
                    <option>Feedback</option>
                    <option>Partnership</option>
                    <option>Support</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-green-dark mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us more about your inquiry..."
                    className="w-full px-4 py-3 border border-green-pale rounded-lg focus:outline-none focus:ring-2 focus:ring-green-primary resize-none"
                  />
                </div>

                <Button className="w-full h-12 bg-green-primary hover:bg-green-dark text-white font-semibold rounded-lg flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Info Sections */}
            <div className="space-y-6">
              {/* Customer Support */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <MessageSquare className="w-8 h-8 text-green-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-green-dark mb-2">Customer Support</h3>
                    <p className="text-gray-600 mb-3">
                      Have an issue with your order? Our support team is here to help 24/7.
                    </p>
                    <Button className="bg-green-primary hover:bg-green-dark text-white rounded-lg">
                      Chat with Support
                    </Button>
                  </div>
                </div>
              </div>

              {/* Partnership */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-8 h-8 text-green-primary flex-shrink-0 mt-1 text-2xl">
                    🤝
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-green-dark mb-2">Partnership</h3>
                    <p className="text-gray-600 mb-3">
                      Interested in partnering with us? Let's explore opportunities together.
                    </p>
                    <Button className="bg-green-primary hover:bg-green-dark text-white rounded-lg">
                      Partner With Us
                    </Button>
                  </div>
                </div>
              </div>

              {/* Media & Press */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-8 h-8 text-green-primary flex-shrink-0 mt-1 text-2xl">
                    📰
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-green-dark mb-2">Media & Press</h3>
                    <p className="text-gray-600 mb-3">
                      Want to feature Khana Mart? Get press materials and connect with our team.
                    </p>
                    <Button className="bg-green-primary hover:bg-green-dark text-white rounded-lg">
                      Media Kit
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-green-dark mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "How do I track my order?",
                a: "You can track your order in real-time through our mobile app or website. You'll receive SMS updates at each stage of delivery.",
              },
              {
                q: "What if I'm not satisfied with my order?",
                a: "We offer a 100% satisfaction guarantee. If you're not happy, contact our support team immediately and we'll make it right.",
              },
              {
                q: "Can I modify my subscription anytime?",
                a: "Yes, you can pause, resume, or modify your subscription at any time without any penalties or additional charges.",
              },
              {
                q: "Do you deliver on holidays?",
                a: "Yes, we deliver on most holidays. Check our app for specific holiday schedules in your area.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit/debit cards, UPI, mobile wallets, and net banking. Payment is secure and encrypted.",
              },
              {
                q: "How can I refer Khana Mart to a friend?",
                a: "Share your referral code from the app. Your friend gets ₹100 discount on their first order, and you earn ₹100 credit.",
              },
            ].map((item, index) => (
              <details
                key={index}
                className="border border-green-pale rounded-lg p-5 hover:bg-green-pale transition-colors cursor-pointer group"
              >
                <summary className="font-semibold text-green-dark flex items-center justify-between">
                  {item.q}
                  <span className="text-green-primary group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="text-gray-600 mt-4 pl-0">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-16 md:py-24 bg-green-pale">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-green-dark mb-8 text-center">
            Our Locations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            {[
              {
                name: "Main Kitchen",
                address: "123 Food Street, Tech City, TC 12345",
                hours: "8 AM - 10 PM, 7 days",
              },
              {
                name: "North Branch",
                address: "456 Green Avenue, North Zone, TC 54321",
                hours: "8 AM - 10 PM, 7 days",
              },
              {
                name: "South Branch",
                address: "789 Fresh Lane, South Area, TC 67890",
                hours: "8 AM - 10 PM, 7 days",
              },
            ].map((location, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-3">📍</div>
                <h4 className="text-lg font-bold text-green-dark mb-2">{location.name}</h4>
                <p className="text-sm text-gray-600 mb-3">{location.address}</p>
                <p className="text-xs text-green-primary font-semibold">{location.hours}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-lg max-w-5xl mx-auto h-96">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.1234567890!2d72.8!3d19.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c99f99f99f99%3A0x1234567890abc!2sFood%20Street!5e0!3m2!1sen!2sin!4v1234567890"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
