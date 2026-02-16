import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User, Phone, Check, X } from "lucide-react";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Password strength calculation
  const calculatePasswordStrength = (pwd: string) => {
    let strength = 0;
    if (!pwd) return { score: 0, label: "", color: "" };

    if (pwd.length >= 8) strength += 1;
    if (pwd.length >= 12) strength += 1;
    if (/[A-Z]/.test(pwd)) strength += 1;
    if (/[0-9]/.test(pwd)) strength += 1;
    if (/[^A-Za-z0-9]/.test(pwd)) strength += 1;

    const scores = [
      { score: 0, label: "", color: "bg-red-500" },
      { score: 1, label: "Weak", color: "bg-red-500" },
      { score: 2, label: "Fair", color: "bg-yellow-500" },
      { score: 3, label: "Good", color: "bg-blue-500" },
      { score: 4, label: "Strong", color: "bg-green-500" },
      { score: 5, label: "Very Strong", color: "bg-green-600" },
    ];

    return scores[Math.min(strength, 5)];
  };

  const passwordStrength = calculatePasswordStrength(formData.password);

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError("Name is required");
      return false;
    }
    if (formData.name.trim().length < 2) {
      setError("Name must be at least 2 characters");
      return false;
    }
    if (!formData.email) {
      setError("Email is required");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Please enter a valid email");
      return false;
    }
    if (!formData.phone) {
      setError("Phone number is required");
      return false;
    }
    if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      setError("Please enter a valid 10-digit phone number");
      return false;
    }
    if (!formData.password) {
      setError("Password is required");
      return false;
    }
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters");
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return false;
    }
    return true;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Auto-format phone number
    if (name === "phone") {
      const cleaned = value.replace(/\D/g, "");
      const formatted =
        cleaned.length <= 3
          ? cleaned
          : cleaned.length <= 6
            ? `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`
            : `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
      setFormData({ ...formData, [name]: formatted });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) return;

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);
      console.log(formData);
    }, 1500);
  };

  if (success) {
    return (
      <div className="min-h-screen flex bg-white">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 sm:px-8 md:px-12 py-12 animate-fadeInLeft">
          <div className="w-full max-w-sm">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-50 border-2 border-green-200 mb-6 animate-bounce">
                <Check className="w-10 h-10 text-green-primary" />
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                Account Created! 🎉
              </h2>
              <p className="text-gray-600 mb-8">
                Your Khana Mart account is ready. Healthy meals are waiting for you!
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Email verification:</span> Check
                    your inbox for a verification link
                  </p>
                </div>

                <Link
                  to="/login"
                  className="w-full inline-block py-3 px-4 bg-gradient-to-r from-green-primary to-green-dark text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:scale-105 active:scale-95"
                >
                  Proceed to Login
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-green-100 via-blue-50 to-green-50 items-center justify-center p-8 relative overflow-hidden animate-fadeInRight">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />

          <div className="relative z-10 flex flex-col items-center justify-center space-y-8">
            <div className="text-center max-w-xs">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Welcome to Khana Mart
              </h2>
              <p className="text-gray-600 text-sm">
                Start your journey towards healthy, fresh meals delivered daily
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-white overflow-hidden">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-8 md:px-12 py-12 animate-fadeInLeft">
        <div className="w-full max-w-sm mx-auto lg:mx-0">
          {/* Logo & Header */}
          <div className="mb-8 md:mb-10">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-green-primary to-green-dark mb-4">
              <span className="text-xl font-bold text-white">KM</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Let's get started
            </h1>
            <p className="text-gray-600 text-sm md:text-base">
              Create your Khana Mart account in minutes
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl animate-shake flex items-center gap-3">
                <X className="w-5 h-5 text-red-600 flex-shrink-0" />
                <p className="text-sm text-red-600 font-medium">{error}</p>
              </div>
            )}

            {/* Name Field */}
            <div className="relative group">
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-primary pointer-events-none transition-all group-focus-within:scale-110" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 placeholder-gray-500 transition-all focus:outline-none focus:ring-2 focus:ring-green-primary/30 focus:border-green-primary focus:bg-white hover:border-green-primary/50"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="relative group">
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-primary pointer-events-none transition-all group-focus-within:scale-110" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 placeholder-gray-500 transition-all focus:outline-none focus:ring-2 focus:ring-green-primary/30 focus:border-green-primary focus:bg-white hover:border-green-primary/50"
                />
              </div>
            </div>

            {/* Phone Field */}
            <div className="relative group">
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-primary pointer-events-none transition-all group-focus-within:scale-110" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="123-456-7890"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 placeholder-gray-500 transition-all focus:outline-none focus:ring-2 focus:ring-green-primary/30 focus:border-green-primary focus:bg-white hover:border-green-primary/50"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="relative group">
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Password
              </label>
              <div className="relative mb-2">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-primary pointer-events-none transition-all group-focus-within:scale-110" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 placeholder-gray-500 transition-all focus:outline-none focus:ring-2 focus:ring-green-primary/30 focus:border-green-primary focus:bg-white hover:border-green-primary/50"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-green-primary transition-colors hover:scale-110"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>

              {/* Password Strength Indicator */}
              {formData.password && (
                <div className="space-y-2">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className={`h-1 flex-1 rounded-full transition-colors ${
                          i <= passwordStrength.score
                            ? passwordStrength.color
                            : "bg-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <p className={`text-xs font-semibold ${
                    passwordStrength.score <= 2 ? "text-red-600" : passwordStrength.score === 3 ? "text-blue-600" : "text-green-600"
                  }`}>
                    Password strength: {passwordStrength.label}
                  </p>
                </div>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="relative group">
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-primary pointer-events-none transition-all group-focus-within:scale-110" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 placeholder-gray-500 transition-all focus:outline-none focus:ring-2 focus:ring-green-primary/30 focus:border-green-primary focus:bg-white hover:border-green-primary/50"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-green-primary transition-colors hover:scale-110"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 bg-gradient-to-r from-green-primary to-green-dark text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-green-primary/30 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 mt-6"
            >
              {isLoading ? (
                <span className="inline-flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Creating Account...
                </span>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-gray-600 font-medium text-center text-sm">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-green-primary hover:text-green-dark font-semibold transition-colors"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-green-100 via-blue-50 to-green-50 items-center justify-center p-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center space-y-8 animate-fadeInRight">
          {/* Floating Image Container */}
          <div className="relative w-80 h-80 animate-float">
            <img
              src="https://images.pexels.com/photos/5971975/pexels-photo-5971975.jpeg"
              alt="Fresh lunch box with healthy meals"
              className="w-full h-full object-cover rounded-3xl shadow-2xl"
            />

            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-8 bg-white rounded-2xl shadow-xl p-4 animate-float animation-delay-1000">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-primary/10 flex items-center justify-center">
                  <User className="w-5 h-5 text-green-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-900">Easy Setup</p>
                  <p className="text-xs text-gray-600">Takes 2 minutes</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-8 bg-white rounded-2xl shadow-xl p-4 animate-float animation-delay-500">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-primary/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-900">Verified</p>
                  <p className="text-xs text-gray-600">100% safe & secure</p>
                </div>
              </div>
            </div>
          </div>

          {/* Description Text */}
          <div className="text-center max-w-xs">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Join Our Community
            </h2>
            <p className="text-gray-600 text-sm">
              Be part of thousands of happy customers enjoying fresh, healthy meals
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.5s;
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeInLeft {
          animation: fadeInLeft 0.7s ease-out;
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeInRight {
          animation: fadeInRight 0.7s ease-out 0.2s backwards;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animation-delay-500 {
          animation-delay: 0.5s !important;
        }
        .animation-delay-1000 {
          animation-delay: 1s !important;
        }
        .animation-delay-2000 {
          animation-delay: 2s !important;
        }
      `}</style>
    </div>
  );
}
