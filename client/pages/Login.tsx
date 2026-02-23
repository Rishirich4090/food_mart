import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, Chrome, Phone, Copy, Check } from "lucide-react";

// Dummy users database
const DUMMY_USERS = [
  { email: "demo@khanamart.com", password: "Demo@123", name: "Demo User" },
  { email: "test@khanamart.com", password: "Test@123", name: "Test User" },
  { email: "user@example.com", password: "User@123", name: "Example User" },
];

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const validateForm = () => {
    if (!email) {
      setError("Email is required");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email");
      return false;
    }
    if (!password) {
      setError("Password is required");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) return;

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      // Check against dummy users
      const user = DUMMY_USERS.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        // Store user in localStorage
        localStorage.setItem(
          "currentUser",
          JSON.stringify({ email: user.email, name: user.name })
        );
        setSuccess(true);
        setError("");
        // Redirect after showing success
        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        setError("Invalid email or password. Please check your credentials.");
      }

      setIsLoading(false);
    }, 1000);
  };

  const handleCopyCredential = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  if (success) {
    return (
      <div className="min-h-screen flex bg-white overflow-hidden">
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-8 md:px-12 py-12">
          <div className="w-full max-w-sm mx-auto lg:mx-0">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-primary/10 mb-6 animate-bounce">
                <Check className="w-10 h-10 text-green-primary" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Login Successful!
              </h2>
              <p className="text-gray-600 mb-8">
                Welcome back. Redirecting you to home...
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-100 via-green-50 to-blue-50" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-white overflow-hidden">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-8 md:px-12 py-12 animate-fadeInLeft">
        <div className="w-full max-w-sm mx-auto lg:mx-0">
          {/* Logo & Header */}
          <div className="mb-8 md:mb-12">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-green-primary to-green-dark mb-4">
              <span className="text-xl font-bold text-white">KM</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-600 text-sm md:text-base">
              Welcome back. Please enter your details
            </p>
          </div>

          {/* Demo Credentials Section */}
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
            <p className="text-xs font-semibold text-blue-900 mb-3">
              Demo Credentials for Testing:
            </p>
            <div className="space-y-2">
              {DUMMY_USERS.map((user, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 bg-white rounded-lg border border-blue-100 group hover:border-blue-300 transition-all"
                >
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-gray-900 truncate">
                      {user.email}
                    </p>
                    <p className="text-xs text-gray-500">
                      {user.password}
                    </p>
                  </div>
                  <div className="flex gap-1 ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      type="button"
                      onClick={() => handleCopyCredential(user.email, `email-${index}`)}
                      className="p-1 rounded hover:bg-gray-100 transition-colors"
                      title="Copy email"
                    >
                      {copied === `email-${index}` ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4 text-gray-500" />
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleCopyCredential(user.password, `pass-${index}`)}
                      className="p-1 rounded hover:bg-gray-100 transition-colors"
                      title="Copy password"
                    >
                      {copied === `pass-${index}` ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4 text-gray-500" />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Card */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl animate-shake">
                <p className="text-sm text-red-600 font-medium">{error}</p>
              </div>
            )}

            {/* Email Field */}
            <div className="relative group">
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-primary pointer-events-none transition-all group-focus-within:scale-110" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 placeholder-gray-500 transition-all focus:outline-none focus:ring-2 focus:ring-green-primary/30 focus:border-green-primary focus:bg-white hover:border-green-primary/50"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="relative group">
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-primary pointer-events-none transition-all group-focus-within:scale-110" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
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
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-5 h-5 rounded-lg border border-gray-200 bg-gray-50 text-green-primary cursor-pointer accent-green-primary transition-all group-hover:border-green-primary"
                />
                <span className="text-sm text-gray-700 font-medium">Remember me</span>
              </label>
              <Link
                to="/forgot-password"
                className="text-sm font-medium text-green-primary hover:text-green-dark transition-colors hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 bg-gradient-to-r from-green-primary to-green-dark text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-green-primary/30 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 mt-4"
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
                  Logging in...
                </span>
              ) : (
                "Login"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-600 font-medium">
                Or Continue With
              </span>
            </div>
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-900 font-semibold transition-all hover:shadow-md hover:border-green-primary/30 group hover:scale-105 active:scale-95"
            >
              <Chrome className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
              <span>Google</span>
            </button>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-900 font-semibold transition-all hover:shadow-md hover:border-green-primary/30 group hover:scale-105 active:scale-95"
            >
              <Phone className="w-5 h-5 text-green-primary group-hover:scale-110 transition-transform" />
              <span>Phone OTP</span>
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-gray-600 font-medium text-center text-sm">
              Don't have an account?{" "}
              <Link
                to="/sign-up"
                className="text-green-primary hover:text-green-dark font-semibold transition-colors"
              >
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-100 via-green-50 to-blue-50 items-center justify-center p-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />

        {/* Main Image */}
        <div className="relative z-10 flex flex-col items-center justify-center space-y-8 animate-fadeInRight">
          {/* Floating Image Container */}
          <div className="relative w-80 h-80 animate-float">
            <img
              src="https://images.pexels.com/photos/12725446/pexels-photo-12725446.jpeg"
              alt="Delivery person with food box"
              className="w-full h-full object-cover rounded-3xl shadow-2xl"
            />
            
            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-8 bg-white rounded-2xl shadow-xl p-4 animate-float animation-delay-1000">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-primary/10 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-green-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-900">Secure</p>
                  <p className="text-xs text-gray-600">Bank-level security</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-8 bg-white rounded-2xl shadow-xl p-4 animate-float animation-delay-500">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-green-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-900">Email</p>
                  <p className="text-xs text-gray-600">Verified & verified</p>
                </div>
              </div>
            </div>
          </div>

          {/* Description Text */}
          <div className="text-center max-w-xs">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Fresh Meals, Secure Access
            </h2>
            <p className="text-gray-600 text-sm">
              Join thousands of users enjoying fresh, healthy meals delivered to your doorstep
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
