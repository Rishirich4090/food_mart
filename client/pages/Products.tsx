import React, { useMemo, useState, useRef, useEffect } from "react";
import { Search, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ProductCard } from "../components/products/ProductCard";
import { FilterDrawer, FilterOptions } from "../components/products/FilterDrawer";
import { products, categories, Product } from "../data/products";
import { Button } from "../components/ui/button";

type SortOption = "relevance" | "price_low" | "price_high" | "rating" | "newest";

export default function Products() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("best_price");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>("relevance");
  const [filters, setFilters] = useState<FilterOptions>({
    foodTypes: [],
    priceRange: [0, 10000],
    rating: null,
    availability: [],
  });

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Filter products based on search, category, and filters
  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      // Search filter
      if (
        searchQuery &&
        !product.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !product.description.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      // Category filter
      if (activeCategory !== "best_price") {
        if (!product.category.includes(activeCategory)) {
          return false;
        }
      }

      // Food type filter
      if (filters.foodTypes.length > 0 && !filters.foodTypes.includes(product.foodType)) {
        return false;
      }

      // Price range filter
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false;
      }

      // Rating filter
      if (filters.rating && product.rating < filters.rating) {
        return false;
      }

      // Availability filters
      if (filters.availability.length > 0) {
        const hasRequired = filters.availability.every((avail) => {
          if (avail === "in_stock") return product.inStock;
          if (avail === "subscription") return product.subscriptionAvailable;
          if (avail === "same_day") return product.sameDay;
          return true;
        });
        if (!hasRequired) return false;
      }

      // Meal type filter
      if (filters.mealType && filters.mealType.length > 0) {
        if (!product.mealType || !filters.mealType.includes(product.mealType)) {
          return false;
        }
      }

      return true;
    });

    // Sorting
    switch (sortBy) {
      case "price_low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price_high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        result.sort((a, b) => b.id.localeCompare(a.id));
        break;
      default:
        break;
    }

    return result;
  }, [searchQuery, activeCategory, filters, sortBy]);

  const showMealTypeFilter = activeCategory.includes("breakfast") ||
    activeCategory.includes("lunch") ||
    activeCategory.includes("dinner") ||
    activeCategory === "tiffin";

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1">
        {/* Search & Top Controls */}
        <div className="sticky top-0 bg-white border-b border-gray-200 z-30 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            {/* Search Bar */}
            <div className="flex gap-4 mb-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search products, tiffins, groceries..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-primary/30 focus:border-green-primary transition-all"
                />
              </div>

              {/* Filter Button */}
              <Button
                onClick={() => setIsFilterOpen(true)}
                variant="outline"
                className="px-6 border-gray-300 hover:bg-gray-50"
              >
                <Filter className="w-5 h-5 mr-2" />
                Filter
              </Button>

              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-primary/30 bg-white font-medium text-gray-900"
              >
                <option value="relevance">Relevance</option>
                <option value="price_low">Price: Low to High</option>
                <option value="price_high">Price: High to Low</option>
                <option value="rating">Rating</option>
                <option value="newest">Newest</option>
              </select>
            </div>

            {/* Category Tabs - Horizontal Scroll */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>

              <div
                ref={scrollContainerRef}
                className="flex-1 overflow-x-auto scrollbar-hide scroll-smooth"
              >
                <div className="flex gap-2 pb-2 min-w-min">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition-all flex-shrink-0 ${
                        activeCategory === category.id
                          ? "bg-green-primary text-white shadow-md"
                          : "bg-white border border-gray-200 text-gray-700 hover:border-green-primary hover:text-green-primary"
                      }`}
                    >
                      {category.icon} {category.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => scroll("right")}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {filteredProducts.length > 0 ? (
            <>
              <div className="mb-6">
                <p className="text-sm text-gray-600">
                  Showing <span className="font-semibold text-gray-900">{filteredProducts.length}</span> products
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="mb-4 text-6xl">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search or filters to find what you're looking for
              </p>
              <Button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("best_price");
                  setFilters({
                    foodTypes: [],
                    priceRange: [0, 10000],
                    rating: null,
                    availability: [],
                  });
                  setSortBy("relevance");
                }}
                className="bg-green-primary hover:bg-green-dark text-white"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </main>

      {/* Filter Drawer */}
      <FilterDrawer
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onApplyFilters={setFilters}
        showMealType={showMealTypeFilter}
      />

      <Footer />
    </div>
  );
}
