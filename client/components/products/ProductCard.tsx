import React, { useState } from "react";
import { Product } from "../../data/products";
import { useCart } from "../../context/CartContext";
import { Button } from "../ui/button";
import { Star, ShoppingCart } from "lucide-react";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem, getCartItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const cartItem = getCartItem(product.id);
  const cartQuantity = cartItem?.quantity || 0;

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsAdding(true);

    // Simulate adding to cart
    setTimeout(() => {
      addItem(product, quantity);
      toast.success(`${product.title} added to cart!`, {
        description: `Quantity: ${quantity}`,
      });
      setQuantity(1);
      setIsAdding(false);
    }, 300);
  };

  const getBadgeColor = (badge?: string) => {
    switch (badge) {
      case "fresh":
        return "bg-green-100 text-green-700";
      case "best_seller":
        return "bg-orange-100 text-orange-700";
      case "trending":
        return "bg-red-100 text-red-700";
      case "new":
        return "bg-blue-100 text-blue-700";
      default:
        return "";
    }
  };

  const getBadgeLabel = (badge?: string) => {
    switch (badge) {
      case "fresh":
        return "🌿 Fresh";
      case "best_seller":
        return "⭐ Best Seller";
      case "trending":
        return "🔥 Trending";
      case "new":
        return "✨ New";
      default:
        return "";
    }
  };

  const foodTypeLabel = {
    veg: "🌱 Vegetarian",
    non_veg: "🍗 Non-Veg",
    egg: "🥚 Egg",
  };

  return (
    <div className="group h-full flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-100 aspect-square">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 right-3 flex flex-wrap gap-2">
          {product.badge && (
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getBadgeColor(product.badge)}`}>
              {getBadgeLabel(product.badge)}
            </span>
          )}

          {discount > 0 && (
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-500 text-white ml-auto">
              -{discount}%
            </span>
          )}
        </div>

        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          {cartQuantity > 0 && (
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-green-primary text-white flex items-center justify-center text-sm font-bold animate-bounce">
              {cartQuantity}
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-4 flex flex-col">
        {/* Title */}
        <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2 group-hover:text-green-primary transition-colors">
          {product.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-gray-600 mb-3 line-clamp-2 flex-shrink-0">
          {product.description}
        </p>

        {/* Food Type */}
        <span className="text-xs font-medium text-gray-700 mb-3">
          {foodTypeLabel[product.foodType]}
        </span>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
              />
            ))}
          </div>
          <span className="text-xs text-gray-600">
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Pricing */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg font-bold text-gray-900">
            {product.currency}{product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              {product.currency}{product.originalPrice}
            </span>
          )}
        </div>

        {/* CTA Section */}
        {product.type === "tiffin" ? (
          <button className="w-full py-2 px-4 bg-green-primary text-white font-semibold rounded-lg hover:bg-green-dark transition-colors">
            View Plan
          </button>
        ) : (
          <div className="space-y-2">
            {/* Quantity Selector */}
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-2 py-1 text-gray-700 hover:bg-white rounded transition-colors"
              >
                −
              </button>
              <span className="flex-1 text-center font-semibold text-sm">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-2 py-1 text-gray-700 hover:bg-white rounded transition-colors"
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <Button
              onClick={handleAddToCart}
              disabled={isAdding || !product.inStock}
              className="w-full bg-green-primary hover:bg-green-dark text-white font-semibold rounded-lg group/btn transition-all"
            >
              {!product.inStock ? (
                "Out of Stock"
              ) : isAdding ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Adding...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </span>
              )}
            </Button>
          </div>
        )}

        {/* Stock Status */}
        {!product.inStock && (
          <p className="text-xs text-red-600 font-medium text-center mt-2">
            Currently out of stock
          </p>
        )}
      </div>
    </div>
  );
};
