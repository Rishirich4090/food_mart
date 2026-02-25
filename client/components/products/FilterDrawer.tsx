import React, { useState } from "react";
import { X } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";

export interface FilterOptions {
  foodTypes: string[];
  priceRange: [number, number];
  rating: number | null;
  availability: string[];
  mealType?: string[];
}

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilters: (filters: FilterOptions) => void;
  showMealType?: boolean;
}

const priceRanges = [
  { label: "₹0–99", value: [0, 99] },
  { label: "₹100–299", value: [100, 299] },
  { label: "₹300–499", value: [300, 499] },
  { label: "₹500+", value: [500, 10000] },
];

const ratingOptions = [
  { label: "4★ & above", value: 4 },
  { label: "3★ & above", value: 3 },
];

const availabilityOptions = [
  { label: "In Stock", value: "in_stock" },
  { label: "Subscription Available", value: "subscription" },
  { label: "Same Day Delivery", value: "same_day" },
];

const mealTypeOptions = [
  { label: "Breakfast", value: "breakfast" },
  { label: "Lunch", value: "lunch" },
  { label: "Dinner", value: "dinner" },
];

export const FilterDrawer: React.FC<FilterDrawerProps> = ({
  isOpen,
  onClose,
  onApplyFilters,
  showMealType = false,
}) => {
  const [foodTypes, setFoodTypes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [rating, setRating] = useState<number | null>(null);
  const [availability, setAvailability] = useState<string[]>([]);
  const [mealType, setMealType] = useState<string[]>([]);

  const handleResetFilters = () => {
    setFoodTypes([]);
    setPriceRange([0, 10000]);
    setRating(null);
    setAvailability([]);
    setMealType([]);
  };

  const handleApplyFilters = () => {
    onApplyFilters({
      foodTypes,
      priceRange,
      rating,
      availability,
      mealType: showMealType ? mealType : undefined,
    });
    onClose();
  };

  const toggleFoodType = (type: string) => {
    setFoodTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const toggleAvailability = (option: string) => {
    setAvailability((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
    );
  };

  const toggleMealType = (type: string) => {
    setMealType((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const togglePriceRange = (range: [number, number]) => {
    if (priceRange[0] === range[0] && priceRange[1] === range[1]) {
      setPriceRange([0, 10000]);
    } else {
      setPriceRange(range);
    }
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed left-0 top-0 bottom-0 w-80 bg-white shadow-2xl transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } overflow-y-auto`}
      >
        <div className="p-6 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Filters</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Filters Content */}
          <div className="flex-1 space-y-6 mb-6">
            {/* Food Type */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 text-sm">🥦 Food Type</h3>
              <div className="space-y-2">
                {["veg", "non_veg", "egg"].map((type) => (
                  <label key={type} className="flex items-center gap-3 cursor-pointer">
                    <Checkbox
                      checked={foodTypes.includes(type)}
                      onCheckedChange={() => toggleFoodType(type)}
                    />
                    <span className="text-sm text-gray-700 capitalize">
                      {type === "non_veg" ? "Non-Vegetarian" : type.charAt(0).toUpperCase() + type.slice(1)}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 text-sm">💰 Price Range</h3>
              
              {/* Price Slider */}
              <div className="mb-4">
                <input
                  type="range"
                  min="0"
                  max="10000"
                  step="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-primary"
                />
                <div className="flex justify-between mt-2 text-xs text-gray-600">
                  <span>₹{priceRange[0]}</span>
                  <span>₹{priceRange[1]}</span>
                </div>
              </div>

              {/* Quick Chips */}
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.label}
                    onClick={() => togglePriceRange(range.value as [number, number])}
                    className={`w-full px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      priceRange[0] === range.value[0] && priceRange[1] === range.value[1]
                        ? "bg-green-primary text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Rating */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 text-sm">⭐ Rating</h3>
              <div className="space-y-2">
                {ratingOptions.map((option) => (
                  <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                    <Checkbox
                      checked={rating === option.value}
                      onCheckedChange={() =>
                        setRating(rating === option.value ? null : option.value)
                      }
                    />
                    <span className="text-sm text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 text-sm">📦 Availability</h3>
              <div className="space-y-2">
                {availabilityOptions.map((option) => (
                  <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                    <Checkbox
                      checked={availability.includes(option.value)}
                      onCheckedChange={() => toggleAvailability(option.value)}
                    />
                    <span className="text-sm text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Meal Type (Conditional) */}
            {showMealType && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 text-sm">🍱 Meal Type</h3>
                <div className="space-y-2">
                  {mealTypeOptions.map((option) => (
                    <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                      <Checkbox
                        checked={mealType.includes(option.value)}
                        onCheckedChange={() => toggleMealType(option.value)}
                      />
                      <span className="text-sm text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer Buttons - Sticky */}
          <div className="border-t pt-4 space-y-3">
            <Button
              variant="outline"
              onClick={handleResetFilters}
              className="w-full border-gray-300 text-gray-900 hover:bg-gray-50"
            >
              Reset
            </Button>
            <Button
              onClick={handleApplyFilters}
              className="w-full bg-green-primary hover:bg-green-dark text-white font-semibold"
            >
              Apply Filters
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
