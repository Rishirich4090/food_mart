import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Tiffin Plans", href: "#tiffin" },
    { label: "Grocery", href: "#grocery" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "About Us", href: "#about" },
    { label: "Partner With Us", href: "#partner" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-green-pale bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-green-primary to-green-dark flex items-center justify-center">
              <span className="text-white font-bold text-lg md:text-xl">🍃</span>
            </div>
            <span className="font-bold text-lg md:text-xl text-green-dark hidden sm:inline">
              Khana Mart
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-green-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              className="border-green-primary text-green-primary hover:bg-green-pale"
            >
              Order Groceries
            </Button>
            <Button className="bg-green-primary hover:bg-green-dark text-white">
              Subscribe Tiffin
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-green-pale rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-green-dark" />
            ) : (
              <Menu className="w-6 h-6 text-green-dark" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-green-pale">
            <div className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-green-pale rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-green-pale">
                <Button
                  variant="outline"
                  className="border-green-primary text-green-primary hover:bg-green-pale w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Order Groceries
                </Button>
                <Button
                  className="bg-green-primary hover:bg-green-dark text-white w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Subscribe Tiffin
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
