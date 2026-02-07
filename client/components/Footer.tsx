import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-green-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-green-primary flex items-center justify-center">
                <span className="text-xl">🍃</span>
              </div>
              <span className="font-bold text-lg">Khana Mart</span>
            </div>
            <p className="text-green-pale text-sm">
              Daily fresh food & convenience delivered to your doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-base mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-green-pale">
              <li>
                <a href="#tiffin" className="hover:text-white transition-colors">
                  Tiffin Plans
                </a>
              </li>
              <li>
                <a href="#grocery" className="hover:text-white transition-colors">
                  Grocery Orders
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#partner" className="hover:text-white transition-colors">
                  Become a Partner
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-base mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-green-pale">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-base mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-green-pale">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-base mb-4">Newsletter</h4>
            <p className="text-green-pale text-sm mb-4">
              Subscribe to get special offers and updates.
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 bg-green-primary text-white rounded-lg placeholder-green-pale focus:outline-none focus:ring-2 focus:ring-green-pale text-sm mb-2"
            />
            <button className="w-full px-3 py-2 bg-green-pale text-green-dark rounded-lg font-semibold hover:bg-white transition-colors text-sm">
              Subscribe
            </button>
          </div>
        </div>

        <div className="border-t border-green-primary pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Contact Info */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-green-pale">
                <MapPin className="w-5 h-5" />
                <span className="text-sm">123 Food Street, Tech City, TC 12345</span>
              </div>
              <div className="flex items-center gap-3 text-green-pale">
                <Mail className="w-5 h-5" />
                <a href="mailto:hello@khanamart.com" className="hover:text-white transition-colors text-sm">
                  hello@khanamart.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-green-pale">
                <Phone className="w-5 h-5" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors text-sm">
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            {/* FAQ Link */}
            <div className="flex items-center justify-center">
              <a
                href="#faq"
                className="text-green-pale hover:text-white transition-colors font-medium text-sm"
              >
                Frequently Asked Questions →
              </a>
            </div>

            {/* Social Media */}
            <div className="flex items-center justify-end gap-4">
              <a
                href="#"
                className="p-2 bg-green-primary rounded-lg hover:bg-green-pale hover:text-green-dark transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-green-primary rounded-lg hover:bg-green-pale hover:text-green-dark transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-green-primary rounded-lg hover:bg-green-pale hover:text-green-dark transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-green-primary rounded-lg hover:bg-green-pale hover:text-green-dark transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="border-t border-green-primary pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-green-pale text-sm">
              © 2024 Khana Mart. All rights reserved.
            </p>
            <p className="text-green-pale text-sm">
              Made with 🍃 for food lovers everywhere
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
