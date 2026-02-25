import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, CreditCard, CheckCircle, ArrowLeft, ChevronRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import { Button } from "../components/ui/button";

type CheckoutStep = "address" | "payment" | "review" | "success";

interface Address {
  fullName: string;
  phone: string;
  alternatePhone: string;
  house: string;
  area: string;
  landmark: string;
  city: string;
  pincode: string;
  type: "home" | "work";
  saveAddress: boolean;
}

interface PaymentMethod {
  type: "upi" | "card" | "netbanking" | "cod" | "wallet";
}

export default function Checkout() {
  const navigate = useNavigate();
  const { state: cartState, clearCart } = useCart();
  const currentUser = localStorage.getItem("currentUser");

  if (!currentUser) {
    navigate("/login");
    return null;
  }

  const [step, setStep] = useState<CheckoutStep>("address");
  const [orderId, setOrderId] = useState("");

  // Address Form
  const [address, setAddress] = useState<Address>({
    fullName: "",
    phone: "",
    alternatePhone: "",
    house: "",
    area: "",
    landmark: "",
    city: "",
    pincode: "",
    type: "home",
    saveAddress: false,
  });
  const [addressError, setAddressError] = useState("");

  // Payment Method
  const [paymentMethod, setPaymentMethod] = useState<"upi" | "card" | "netbanking" | "cod" | "wallet">("upi");

  // Calculate totals
  const subtotal = cartState.totalPrice;
  const deliveryFee = subtotal > 500 ? 0 : 50;
  const tax = Math.round((subtotal) * 0.05);
  const total = subtotal + deliveryFee + tax;

  const validateAddress = () => {
    if (
      !address.fullName ||
      !address.phone ||
      !address.house ||
      !address.area ||
      !address.city ||
      !address.pincode
    ) {
      setAddressError("Please fill in all required fields");
      return false;
    }
    if (!/^\d{10}$/.test(address.phone)) {
      setAddressError("Please enter a valid 10-digit phone number");
      return false;
    }
    if (!/^\d{6}$/.test(address.pincode)) {
      setAddressError("Please enter a valid 6-digit pincode");
      return false;
    }
    return true;
  };

  const handleAddressNext = () => {
    if (validateAddress()) {
      setAddressError("");
      setStep("payment");
    }
  };

  const handlePaymentNext = () => {
    setStep("review");
  };

  const handlePlaceOrder = () => {
    // Generate order ID
    const newOrderId = `KM${Date.now()}`;
    setOrderId(newOrderId);

    // Clear cart
    clearCart();

    // Go to success screen
    setStep("success");
  };

  const handleBackHome = () => {
    navigate("/products");
  };

  // Progress Indicator
  const steps: { id: CheckoutStep; label: string; icon: React.ReactNode }[] = [
    { id: "address", label: "Address", icon: <MapPin className="w-5 h-5" /> },
    { id: "payment", label: "Payment", icon: <CreditCard className="w-5 h-5" /> },
    { id: "review", label: "Review", icon: <CheckCircle className="w-5 h-5" /> },
  ];

  const currentStepIndex = steps.findIndex((s) => s.id === step);

  if (step === "success") {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="max-w-md mx-auto text-center px-4 py-16">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-100 animate-bounce">
                <CheckCircle className="w-12 h-12 text-green-primary" />
              </div>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>

            <div className="bg-white rounded-xl p-6 mb-6 border border-gray-200">
              <p className="text-gray-600 mb-2 text-sm">Your Order ID</p>
              <p className="text-2xl font-bold text-green-primary mb-4">{orderId}</p>
              <p className="text-gray-600 text-sm">
                Your order has been placed successfully. You will receive a confirmation email shortly.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
              <p className="text-blue-900 text-sm font-medium">
                📦 Estimated Delivery: 2-3 days
              </p>
              <p className="text-blue-700 text-xs mt-2">
                Track your order in the Order History section
              </p>
            </div>

            <Button
              onClick={handleBackHome}
              className="w-full bg-green-primary hover:bg-green-dark text-white py-3 text-lg font-semibold mb-3"
            >
              Continue Shopping
            </Button>

            <button
              onClick={() => navigate("/orders")}
              className="w-full px-4 py-3 border border-green-primary text-green-primary font-semibold rounded-xl hover:bg-green-50 transition-colors"
            >
              View Order History
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <button
            onClick={() => navigate("/cart")}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-green-primary mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Cart
          </button>

          <h1 className="text-4xl font-bold text-gray-900 mb-8">Checkout</h1>

          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex items-center gap-4">
              {steps.map((s, index) => (
                <React.Fragment key={s.id}>
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-full font-bold transition-all ${
                      step === s.id
                        ? "bg-green-primary text-white shadow-lg"
                        : index < currentStepIndex
                          ? "bg-green-100 text-green-primary"
                          : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {index < currentStepIndex ? "✓" : index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`flex-1 h-1 ${
                        index < currentStepIndex ? "bg-green-primary" : "bg-gray-200"
                      }`}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-sm font-medium text-gray-600">
              {steps.map((s) => (
                <span key={s.id}>{s.label}</span>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Step 1: Address */}
              {step === "address" && (
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Delivery Address</h2>

                  {addressError && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                      <p className="text-red-700 text-sm font-medium">{addressError}</p>
                    </div>
                  )}

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={address.fullName}
                        onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-primary/30"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          value={address.phone}
                          onChange={(e) => setAddress({ ...address, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-primary/30"
                          placeholder="10 digit mobile number"
                          maxLength={10}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Alternate Phone
                        </label>
                        <input
                          type="tel"
                          value={address.alternatePhone}
                          onChange={(e) => setAddress({ ...address, alternatePhone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-primary/30"
                          placeholder="Optional"
                          maxLength={10}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        House/Flat No. *
                      </label>
                      <input
                        type="text"
                        value={address.house}
                        onChange={(e) => setAddress({ ...address, house: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-primary/30"
                        placeholder="Enter house/flat number"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Area/Street *
                      </label>
                      <input
                        type="text"
                        value={address.area}
                        onChange={(e) => setAddress({ ...address, area: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-primary/30"
                        placeholder="Enter area/street name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Landmark
                      </label>
                      <input
                        type="text"
                        value={address.landmark}
                        onChange={(e) => setAddress({ ...address, landmark: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-primary/30"
                        placeholder="e.g. Near park, next to temple"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          value={address.city}
                          onChange={(e) => setAddress({ ...address, city: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-primary/30"
                          placeholder="Enter your city"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Pincode *
                        </label>
                        <input
                          type="text"
                          value={address.pincode}
                          onChange={(e) => setAddress({ ...address, pincode: e.target.value.replace(/\D/g, "").slice(0, 6) })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-primary/30"
                          placeholder="6-digit pincode"
                          maxLength={6}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Address Type
                      </label>
                      <div className="flex gap-4">
                        {["home", "work"].map((type) => (
                          <label key={type} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="addressType"
                              value={type}
                              checked={address.type === type}
                              onChange={() => setAddress({ ...address, type: type as "home" | "work" })}
                              className="w-4 h-4 accent-green-primary"
                            />
                            <span className="text-gray-700 capitalize">{type}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={address.saveAddress}
                        onChange={(e) => setAddress({ ...address, saveAddress: e.target.checked })}
                        className="w-4 h-4 accent-green-primary"
                      />
                      <span className="text-sm text-gray-700">Save this address for future orders</span>
                    </label>
                  </div>

                  <Button
                    onClick={handleAddressNext}
                    className="w-full mt-8 bg-green-primary hover:bg-green-dark text-white py-3 text-lg font-semibold flex items-center justify-center gap-2"
                  >
                    Continue to Payment <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              )}

              {/* Step 2: Payment */}
              {step === "payment" && (
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Method</h2>

                  <div className="space-y-3 mb-8">
                    {[
                      { id: "upi", label: "UPI", desc: "Google Pay, PhonePe, Paytm" },
                      { id: "card", label: "Credit/Debit Card", desc: "Visa, Mastercard, RuPay" },
                      { id: "netbanking", label: "Net Banking", desc: "All major banks" },
                      { id: "wallet", label: "Wallet", desc: "Paytm, Mobikwik, Amazon Pay" },
                      { id: "cod", label: "Cash on Delivery", desc: "Pay when you receive" },
                    ].map((method) => (
                      <label
                        key={method.id}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          paymentMethod === method.id
                            ? "border-green-primary bg-green-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <input
                            type="radio"
                            name="payment"
                            value={method.id}
                            checked={paymentMethod === method.id}
                            onChange={(e) => setPaymentMethod(e.target.value as any)}
                            className="w-5 h-5 mt-0.5 accent-green-primary"
                          />
                          <div>
                            <p className="font-semibold text-gray-900">{method.label}</p>
                            <p className="text-sm text-gray-600">{method.desc}</p>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
                    <p className="text-blue-900 text-sm">
                      🔒 Your payment is secured with industry-standard encryption
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      onClick={() => setStep("address")}
                      variant="outline"
                      className="flex-1 border-gray-300 text-gray-900 hover:bg-gray-50"
                    >
                      Back
                    </Button>
                    <Button
                      onClick={handlePaymentNext}
                      className="flex-1 bg-green-primary hover:bg-green-dark text-white py-3 text-lg font-semibold flex items-center justify-center gap-2"
                    >
                      Review Order <ChevronRight className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Review */}
              {step === "review" && (
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Review Your Order</h2>

                  {/* Address Summary */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Delivery Address</h3>
                    <p className="text-gray-700 text-sm">{address.fullName}</p>
                    <p className="text-gray-700 text-sm">
                      {address.house}, {address.area}
                    </p>
                    <p className="text-gray-700 text-sm">
                      {address.city} - {address.pincode}
                    </p>
                    <p className="text-gray-700 text-sm">Phone: {address.phone}</p>
                  </div>

                  {/* Payment Summary */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-8">
                    <h3 className="font-semibold text-gray-900 mb-2">Payment Method</h3>
                    <p className="text-gray-700 text-sm capitalize">
                      {paymentMethod === "upi" && "UPI"}
                      {paymentMethod === "card" && "Credit/Debit Card"}
                      {paymentMethod === "netbanking" && "Net Banking"}
                      {paymentMethod === "wallet" && "Wallet"}
                      {paymentMethod === "cod" && "Cash on Delivery"}
                    </p>
                  </div>

                  {/* Items Summary */}
                  <div className="mb-8">
                    <h3 className="font-semibold text-gray-900 mb-4">Items ({cartState.items.length})</h3>
                    <div className="space-y-3">
                      {cartState.items.map((item) => (
                        <div key={item.productId} className="flex justify-between text-sm">
                          <span className="text-gray-700">{item.product.title} × {item.quantity}</span>
                          <span className="font-semibold text-gray-900">
                            ₹{(item.product.price * item.quantity).toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      onClick={() => setStep("payment")}
                      variant="outline"
                      className="flex-1 border-gray-300 text-gray-900 hover:bg-gray-50"
                    >
                      Back
                    </Button>
                    <Button
                      onClick={handlePlaceOrder}
                      className="flex-1 bg-green-primary hover:bg-green-dark text-white py-3 text-lg font-semibold"
                    >
                      Place Order
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 sticky top-24">
                <h3 className="font-bold text-gray-900 mb-4">Order Summary</h3>

                <div className="space-y-3 mb-6 pb-6 border-b">
                  <div className="flex justify-between text-gray-700 text-sm">
                    <span>Subtotal</span>
                    <span className="font-semibold">₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-700 text-sm">
                    <span>Delivery Fee</span>
                    <span className="font-semibold">
                      {deliveryFee === 0 ? <span className="text-green-600">FREE</span> : `₹${deliveryFee}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-700 text-sm">
                    <span>Tax (5%)</span>
                    <span className="font-semibold">₹{tax.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex justify-between mb-6">
                  <span className="font-bold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-green-primary">₹{total.toLocaleString()}</span>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-xs text-blue-900">
                    ✓ Your order is secure and your payment is protected
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
