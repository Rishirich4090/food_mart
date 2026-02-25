import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart, User, LogOut, MapPin, Clock, Heart, Settings } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { useCart } from "../context/CartContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<{ email: string; name: string } | null>(null);
  const location = useLocation();
  const { state: cartState } = useCart();

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem("currentUser");
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    setIsProfileOpen(false);
    setIsMenuOpen(false);
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
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
          <div className="hidden md:flex items-center gap-4">
            {currentUser ? (
              <>
                {/* Cart Icon */}
                <Link to="/cart" className="relative">
                  <button className="p-2 hover:bg-green-pale rounded-lg transition-colors relative group">
                    <ShoppingCart className="w-6 h-6 text-green-primary" />
                    {cartState.totalItems > 0 && (
                      <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-bounce group-hover:animate-none">
                        {cartState.totalItems}
                      </span>
                    )}
                  </button>
                </Link>

                {/* Profile Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center gap-2 px-3 py-2 hover:bg-green-pale rounded-lg transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-green-primary text-white flex items-center justify-center font-bold text-sm">
                      {currentUser.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-sm font-medium text-gray-900 hidden lg:inline">
                      {currentUser.name.split(" ")[0]}
                    </span>
                  </button>

                  {/* Profile Dropdown Menu */}
                  {isProfileOpen && (
                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-semibold text-gray-900">{currentUser.name}</p>
                        <p className="text-xs text-gray-600">{currentUser.email}</p>
                      </div>

                      <Link to="/profile" onClick={() => setIsProfileOpen(false)}>
                        <button className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center gap-3 text-gray-900 text-sm">
                          <User className="w-4 h-4" />
                          My Profile
                        </button>
                      </Link>

                      <Link to="/addresses" onClick={() => setIsProfileOpen(false)}>
                        <button className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center gap-3 text-gray-900 text-sm">
                          <MapPin className="w-4 h-4" />
                          Delivery Address
                        </button>
                      </Link>

                      <Link to="/orders" onClick={() => setIsProfileOpen(false)}>
                        <button className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center gap-3 text-gray-900 text-sm">
                          <Clock className="w-4 h-4" />
                          Order History
                        </button>
                      </Link>

                      <Link to="/favorites" onClick={() => setIsProfileOpen(false)}>
                        <button className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center gap-3 text-gray-900 text-sm">
                          <Heart className="w-4 h-4" />
                          Favorites
                        </button>
                      </Link>

                      <Link to="/settings" onClick={() => setIsProfileOpen(false)}>
                        <button className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center gap-3 text-gray-900 text-sm">
                          <Settings className="w-4 h-4" />
                          Settings
                        </button>
                      </Link>

                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center gap-3 text-red-600 text-sm border-t border-gray-100 mt-2 pt-2"
                      >
                        <LogOut className="w-4 h-4" />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button
                    variant="outline"
                    className="border-green-primary text-green-primary hover:bg-green-pale hover:scale-105 transition-transform"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/sign-up">
                  <Button className="bg-green-primary hover:bg-green-dark text-white hover:scale-105 transition-transform">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
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
                {currentUser ? (
                  <>
                    <div className="px-3 py-2 bg-green-pale rounded-lg">
                      <p className="text-sm font-semibold text-gray-900">{currentUser.name}</p>
                      <p className="text-xs text-gray-600">{currentUser.email}</p>
                    </div>

                    <Link to="/cart" onClick={() => setIsMenuOpen(false)}>
                      <Button className="bg-green-primary hover:bg-green-dark text-white w-full flex items-center justify-center gap-2">
                        <ShoppingCart className="w-4 h-4" />
                        Cart {cartState.totalItems > 0 && `(${cartState.totalItems})`}
                      </Button>
                    </Link>

                    <Link to="/profile" onClick={() => setIsMenuOpen(false)}>
                      <button className="w-full px-3 py-2 text-sm font-medium text-gray-700 hover:bg-green-pale rounded-lg transition-colors">
                        My Profile
                      </button>
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="w-full px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors border border-red-200"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                      <Button
                        variant="outline"
                        className="border-green-primary text-green-primary hover:bg-green-pale w-full hover:scale-105 transition-transform"
                      >
                        Login
                      </Button>
                    </Link>
                    <Link to="/sign-up" onClick={() => setIsMenuOpen(false)}>
                      <Button
                        className="bg-green-primary hover:bg-green-dark text-white w-full hover:scale-105 transition-transform"
                      >
                        Sign Up
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
