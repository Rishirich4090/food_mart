import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Tiffin Plans", href: "/tiffin-plans" },
    { label: "Grocery", href: "/grocery" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

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
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-all duration-200 relative ${
                  isActive(link.href)
                    ? "text-green-primary font-bold"
                    : "text-gray-700 hover:text-green-primary"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-primary" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/grocery">
              <Button
                variant="outline"
                className="border-green-primary text-green-primary hover:bg-green-pale hover:scale-105 transition-transform"
              >
                Order Groceries
              </Button>
            </Link>
            <Link to="/tiffin-plans">
              <Button className="bg-green-primary hover:bg-green-dark text-white hover:scale-105 transition-transform">
                Subscribe Tiffin
              </Button>
            </Link>
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
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive(link.href)
                      ? "bg-green-primary text-white font-bold"
                      : "text-gray-700 hover:bg-green-pale"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-green-pale">
                <Link to="/grocery" onClick={() => setIsMenuOpen(false)}>
                  <Button
                    variant="outline"
                    className="border-green-primary text-green-primary hover:bg-green-pale w-full hover:scale-105 transition-transform"
                  >
                    Order Groceries
                  </Button>
                </Link>
                <Link to="/tiffin-plans" onClick={() => setIsMenuOpen(false)}>
                  <Button
                    className="bg-green-primary hover:bg-green-dark text-white w-full hover:scale-105 transition-transform"
                  >
                    Subscribe Tiffin
                  </Button>
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
