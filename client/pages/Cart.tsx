import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Trash2, Plus, Minus, ArrowLeft } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import { Button } from "../components/ui/button";

export default function Cart() {
  const navigate = useNavigate();
  const { state, updateQuantity, removeItem } = useCart();
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; discount: number } | null>(null);

  const currentUser = localStorage.getItem("currentUser");

  // Calculate prices
  const subtotal = state.totalPrice;
  const deliveryFee = subtotal > 500 ? 0 : 50;
  const discount = appliedCoupon ? (subtotal * appliedCoupon.discount) / 100 : 0;
  const tax = Math.round((subtotal - discount) * 0.05); // 5% tax
  const total = subtotal - discount + deliveryFee + tax;

  const handleApplyCoupon = () => {
    if (couponCode.toUpperCase() === "SAVE10") {
      setAppliedCoupon({ code: couponCode.toUpperCase(), discount: 10 });
    } else if (couponCode.toUpperCase() === "SAVE20") {
      setAppliedCoupon({ code: couponCode.toUpperCase(), discount: 20 });
    }
    setCouponCode("");
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
  };

  const handleCheckout = () => {
    if (!currentUser) {
      navigate("/login");
      return;
    }
    navigate("/checkout");
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <div className="mb-6 text-7xl">🛒</div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
              <p className="text-gray-600 mb-8 text-lg">
                Explore our products and add items to your cart
              </p>
              <Link to="/products">
                <Button className="bg-green-primary hover:bg-green-dark text-white px-8 py-3">
                  Continue Shopping
                </Button>
              </Link>
            </div>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <Link to="/products" className="inline-flex items-center gap-2 text-green-primary hover:text-green-dark mb-8">
            <ArrowLeft className="w-5 h-5" />
            Continue Shopping
          </Link>

          <h1 className="text-4xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {state.items.map((item) => (
                <div
                  key={item.productId}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex gap-6">
                    {/* Product Image */}
                    <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                      <img
                        src={item.product.image}
                        alt={item.product.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.product.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {item.product.description}
                      </p>

                      <div className="flex items-center justify-between">
                        {/* Quantity Stepper */}
                        <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.productId, Math.max(1, item.quantity - 1))
                            }
                            className="p-1 hover:bg-white rounded transition-colors"
                          >
                            <Minus className="w-4 h-4 text-gray-700" />
                          </button>
                          <span className="w-8 text-center font-semibold text-gray-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                            className="p-1 hover:bg-white rounded transition-colors"
                          >
                            <Plus className="w-4 h-4 text-gray-700" />
                          </button>
                        </div>

                        {/* Price & Remove */}
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900 mb-2">
                            ₹{(item.product.price * item.quantity).toLocaleString()}
                          </div>
                          <button
                            onClick={() => removeItem(item.productId)}
                            className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 text-sm font-medium"
                          >
                            <Trash2 className="w-4 h-4" />
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary - Sticky */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 sticky top-24 space-y-6">
                <h2 className="text-xl font-bold text-gray-900">Order Summary</h2>

                {/* Coupon Section */}
                <div className="border-b pb-6">
                  {appliedCoupon ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-green-900">
                          ✓ {appliedCoupon.code} applied
                        </p>
                        <p className="text-xs text-green-700">
                          Save {appliedCoupon.discount}%
                        </p>
                      </div>
                      <button
                        onClick={handleRemoveCoupon}
                        className="text-green-600 hover:text-green-700 font-medium text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Enter coupon code"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-primary/30"
                      />
                      <Button
                        onClick={handleApplyCoupon}
                        disabled={!couponCode}
                        className="bg-gray-200 text-gray-900 hover:bg-gray-300 px-4"
                      >
                        Apply
                      </Button>
                    </div>
                  )}
                  <p className="text-xs text-gray-600 mt-2">
                    Try codes: SAVE10, SAVE20
                  </p>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span className="font-semibold">₹{subtotal.toLocaleString()}</span>
                  </div>

                  {appliedCoupon && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount ({appliedCoupon.discount}%)</span>
                      <span className="font-semibold">-₹{Math.round(discount).toLocaleString()}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-gray-700">
                    <span>Delivery Fee</span>
                    <span className="font-semibold">
                      {deliveryFee === 0 ? (
                        <span className="text-green-600">FREE</span>
                      ) : (
                        `₹${deliveryFee}`
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between text-gray-700">
                    <span>Tax (5%)</span>
                    <span className="font-semibold">₹{tax.toLocaleString()}</span>
                  </div>

                  <div className="border-t pt-3 flex justify-between">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-2xl font-bold text-green-primary">
                      ₹{total.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Checkout Button */}
                <Button
                  onClick={handleCheckout}
                  className="w-full bg-green-primary hover:bg-green-dark text-white py-3 text-lg font-semibold rounded-xl"
                >
                  {currentUser ? "Proceed to Checkout" : "Login to Checkout"}
                </Button>

                {deliveryFee > 0 && (
                  <p className="text-xs text-center text-gray-600">
                    💚 Free delivery on orders above ₹500
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
