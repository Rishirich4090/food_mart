import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowLeft, Check, AlertCircle, Lock, Eye, EyeOff } from "lucide-react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [step, setStep] = useState<"email" | "otp" | "reset" | "success">("email");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [resetPassword, setResetPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateEmail = () => {
    if (!email) {
      setError("Email is required");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email");
      return false;
    }
    return true;
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!validateEmail()) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep("otp");
    }, 1000);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (otp.some((digit) => !digit)) {
      setError("Please enter the complete OTP");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep("reset");
    }, 1000);
  };

  const handleResetSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!resetPassword) {
      setError("Password is required");
      return;
    }
    if (resetPassword.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }
    if (resetPassword !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep("success");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex bg-white overflow-hidden">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-8 md:px-12 py-12 animate-fadeInLeft">
        <div className="w-full max-w-sm mx-auto lg:mx-0">
          {/* Back Button */}
          <Link
            to="/login"
            className="inline-flex items-center gap-2 text-green-primary hover:text-green-dark font-semibold mb-8 transition-colors hover:scale-110"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Login
          </Link>

          {/* Email Step */}
          {step === "email" && (
            <>
              <div className="mb-8 md:mb-12">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-red-100 mb-4">
                  <Lock className="w-6 h-6 text-red-600" />
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  Reset Password
                </h1>
                <p className="text-gray-600 text-sm md:text-base">
                  Enter your email and we'll send you a reset link
                </p>
              </div>

              <form onSubmit={handleEmailSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 animate-shake">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <p className="text-sm text-red-600 font-medium">{error}</p>
                  </div>
                )}

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
                      placeholder="you@example.com"
                      className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 placeholder-gray-500 transition-all focus:outline-none focus:ring-2 focus:ring-green-primary/30 focus:border-green-primary focus:bg-white hover:border-green-primary/50"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 px-4 bg-gradient-to-r from-green-primary to-green-dark text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-green-primary/30 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isLoading ? "Sending..." : "Send Reset Link"}
                </button>
              </form>
            </>
          )}

          {/* OTP Step */}
          {step === "otp" && (
            <>
              <div className="mb-8 md:mb-12">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-100 mb-4">
                  <span className="text-xl">📱</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  Verify OTP
                </h1>
                <p className="text-gray-600 text-sm md:text-base">
                  Enter the 6-digit code sent to {email}
                </p>
              </div>

              <form onSubmit={handleOtpSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 animate-shake">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <p className="text-sm text-red-600 font-medium">{error}</p>
                  </div>
                )}

                <div className="flex gap-3 justify-center">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      className="w-12 h-12 text-center text-2xl font-bold rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900 transition-all focus:outline-none focus:ring-2 focus:ring-green-primary/30 focus:border-green-primary focus:bg-white hover:border-green-primary/50"
                    />
                  ))}
                </div>

                <div>
                  <button
                    type="button"
                    className="text-sm text-green-primary hover:text-green-dark font-semibold transition-colors hover:underline"
                  >
                    Didn't receive code? Resend
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 px-4 bg-gradient-to-r from-green-primary to-green-dark text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-green-primary/30 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isLoading ? "Verifying..." : "Verify OTP"}
                </button>
              </form>
            </>
          )}

          {/* Reset Password Step */}
          {step === "reset" && (
            <>
              <div className="mb-8 md:mb-12">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-purple-100 mb-4">
                  <span className="text-xl">🔐</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  Create New Password
                </h1>
                <p className="text-gray-600 text-sm md:text-base">
                  Enter your new password below
                </p>
              </div>

              <form onSubmit={handleResetSubmit} className="space-y-5">
                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 animate-shake">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <p className="text-sm text-red-600 font-medium">{error}</p>
                  </div>
                )}

                <div className="relative group">
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    New Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-primary pointer-events-none transition-all group-focus-within:scale-110" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={resetPassword}
                      onChange={(e) => {
                        setResetPassword(e.target.value);
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

                <div className="relative group">
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-primary pointer-events-none transition-all group-focus-within:scale-110" />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                        setError("");
                      }}
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

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 px-4 bg-gradient-to-r from-green-primary to-green-dark text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-green-primary/30 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 mt-2"
                >
                  {isLoading ? "Updating..." : "Update Password"}
                </button>
              </form>
            </>
          )}

          {/* Success Step */}
          {step === "success" && (
            <>
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-50 border-2 border-green-200 mb-6 animate-bounce">
                  <Check className="w-10 h-10 text-green-primary" />
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                  Password Reset! ✨
                </h1>
                <p className="text-gray-600 text-sm md:text-base">
                  Your password has been successfully updated
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                  <p className="text-sm text-gray-700">
                    You can now login with your new password
                  </p>
                </div>

                <Link
                  to="/login"
                  className="w-full block py-3 px-4 bg-gradient-to-r from-green-primary to-green-dark text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-green-primary/30 hover:scale-105 active:scale-95 text-center"
                >
                  Back to Login
                </Link>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-purple-100 via-blue-50 to-purple-50 items-center justify-center p-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center space-y-8 animate-fadeInRight">
          {/* Floating Image Container */}
          <div className="relative w-80 h-80 animate-float">
            <img
              src="https://images.pexels.com/photos/35241090/pexels-photo-35241090.jpeg"
              alt="Fresh healthy salad bowl"
              className="w-full h-full object-cover rounded-3xl shadow-2xl"
            />

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-8 bg-white rounded-2xl shadow-xl p-4 animate-float animation-delay-1000">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-primary/10 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-green-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-900">Secure</p>
                  <p className="text-xs text-gray-600">Your data is safe</p>
                </div>
              </div>
            </div>
          </div>

          {/* Description Text */}
          <div className="text-center max-w-xs">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Secure Your Account
            </h2>
            <p className="text-gray-600 text-sm">
              We'll help you recover access to your Khana Mart account safely and securely
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
