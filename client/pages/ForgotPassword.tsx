import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowLeft, Check, AlertCircle } from "lucide-react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [step, setStep] = useState<"email" | "otp" | "reset" | "success">("email");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [resetPassword, setResetPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-pale flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <Link
          to="/login"
          className="inline-flex items-center gap-2 text-green-primary hover:text-green-dark font-semibold mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Login
        </Link>

        {/* Email Step */}
        {step === "email" && (
          <>
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-green-pale mb-4">
                <Mail className="w-8 h-8 text-green-primary" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Reset Password
              </h1>
              <p className="text-gray-600">
                Enter your email and we'll send you a reset link
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 p-8">
              <form onSubmit={handleEmailSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <p className="text-sm text-red-600 font-medium">{error}</p>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-primary pointer-events-none" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                      }}
                      placeholder="you@example.com"
                      className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 placeholder-gray-500 transition-all focus:outline-none focus:ring-2 focus:ring-green-primary/30 focus:border-green-primary focus:bg-white"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 px-4 bg-gradient-to-r from-green-primary to-green-dark text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isLoading ? "Sending..." : "Send Reset Link"}
                </button>
              </form>
            </div>
          </>
        )}

        {/* OTP Step */}
        {step === "otp" && (
          <>
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-green-pale mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Verify OTP
              </h1>
              <p className="text-gray-600">
                Enter the 6-digit code sent to {email}
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 p-8">
              <form onSubmit={handleOtpSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
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
                      className="w-12 h-12 text-center text-2xl font-bold rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-900 transition-all focus:outline-none focus:ring-2 focus:ring-green-primary/30 focus:border-green-primary focus:bg-white"
                    />
                  ))}
                </div>

                <div>
                  <button
                    type="button"
                    className="text-sm text-green-primary hover:text-green-dark font-semibold transition-colors"
                  >
                    Didn't receive code? Resend
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 px-4 bg-gradient-to-r from-green-primary to-green-dark text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isLoading ? "Verifying..." : "Verify OTP"}
                </button>
              </form>
            </div>
          </>
        )}

        {/* Reset Password Step */}
        {step === "reset" && (
          <>
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-green-pale mb-4">
                <span className="text-2xl">🔐</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Create New Password
              </h1>
              <p className="text-gray-600">
                Enter your new password below
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 p-8">
              <form onSubmit={handleResetSubmit} className="space-y-5">
                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <p className="text-sm text-red-600 font-medium">{error}</p>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    New Password
                  </label>
                  <input
                    type="password"
                    value={resetPassword}
                    onChange={(e) => {
                      setResetPassword(e.target.value);
                      setError("");
                    }}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 placeholder-gray-500 transition-all focus:outline-none focus:ring-2 focus:ring-green-primary/30 focus:border-green-primary focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      setError("");
                    }}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 placeholder-gray-500 transition-all focus:outline-none focus:ring-2 focus:ring-green-primary/30 focus:border-green-primary focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 px-4 bg-gradient-to-r from-green-primary to-green-dark text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 mt-2"
                >
                  {isLoading ? "Updating..." : "Update Password"}
                </button>
              </form>
            </div>
          </>
        )}

        {/* Success Step */}
        {step === "success" && (
          <>
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-50 border-2 border-green-200 mb-4 animate-bounce">
                <Check className="w-10 h-10 text-green-primary" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Password Reset! ✨
              </h1>
              <p className="text-gray-600">
                Your password has been successfully updated
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 p-8">
              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                  <p className="text-sm text-gray-700">
                    You can now login with your new password
                  </p>
                </div>

                <Link
                  to="/login"
                  className="w-full block py-3 px-4 bg-gradient-to-r from-green-primary to-green-dark text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:scale-105 active:scale-95 text-center"
                >
                  Back to Login
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
