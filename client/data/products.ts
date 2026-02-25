export type ProductType = "grocery" | "tiffin" | "combo";
export type ProductCategory = 
  | "best_price" 
  | "fresh" 
  | "vegetables" 
  | "fruits" 
  | "dairy" 
  | "drinks" 
  | "snacks" 
  | "kitchen_essentials" 
  | "breakfast" 
  | "lunch" 
  | "dinner" 
  | "weekly_plan" 
  | "monthly_plan";

export type FoodType = "veg" | "non_veg" | "egg";

export interface Product {
  id: string;
  type: ProductType;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  currency: string;
  image: string;
  category: ProductCategory;
  foodType: FoodType;
  rating: number;
  reviews: number;
  badge?: "fresh" | "best_seller" | "trending" | "new";
  inStock: boolean;
  sameDay: boolean;
  subscriptionAvailable?: boolean;
  
  // Tiffin specific
  mealType?: "breakfast" | "lunch" | "dinner" | "both";
  meals?: string[];
  period?: "daily" | "weekly" | "monthly";
  servings?: number;
  features?: string[];
}

export const products: Product[] = [
  // Tiffin - Daily Plans
  {
    id: "tiffin_1",
    type: "tiffin",
    title: "Daily Lunch + Dinner",
    description: "Fresh homemade meals delivered daily. Premium quality ingredients with 0% preservatives.",
    price: 80,
    originalPrice: 100,
    currency: "₹",
    image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "lunch",
    foodType: "veg",
    rating: 4.8,
    reviews: 2341,
    badge: "best_seller",
    inStock: true,
    sameDay: true,
    subscriptionAvailable: true,
    mealType: "both",
    meals: ["Lunch", "Dinner"],
    period: "daily",
    servings: 2,
    features: ["Fresh Daily", "Home Delivered", "No Preservatives", "Customizable Menu"],
  },
  {
    id: "tiffin_2",
    type: "tiffin",
    title: "Weekly Plan - Veg",
    description: "5 days of fresh vegetarian meals. Choose any 5 days of the week.",
    price: 490,
    originalPrice: 600,
    currency: "₹",
    image: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "weekly_plan",
    foodType: "veg",
    rating: 4.7,
    reviews: 1823,
    badge: "trending",
    inStock: true,
    sameDay: true,
    subscriptionAvailable: true,
    mealType: "both",
    meals: ["Lunch", "Dinner"],
    period: "weekly",
    servings: 10,
    features: ["Flexible Days", "Customizable", "Zero Oil", "Nutritionist Approved"],
  },
  {
    id: "tiffin_3",
    type: "tiffin",
    title: "Monthly Plan - Premium",
    description: "30 days of premium mixed meals with variety. Breakfast, Lunch & Dinner included.",
    price: 1890,
    originalPrice: 2400,
    currency: "₹",
    image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "monthly_plan",
    foodType: "veg",
    rating: 4.9,
    reviews: 3450,
    inStock: true,
    sameDay: true,
    subscriptionAvailable: true,
    mealType: "breakfast",
    meals: ["Breakfast", "Lunch", "Dinner"],
    period: "monthly",
    servings: 30,
    features: ["All Meals Included", "Premium Menu", "Free Consultations", "Diet Customization"],
  },

  // Grocery - Vegetables
  {
    id: "veg_1",
    type: "grocery",
    title: "Fresh Tomatoes",
    description: "Farm-fresh, ripe tomatoes. Best for cooking and salads.",
    price: 45,
    originalPrice: 60,
    currency: "₹",
    image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "vegetables",
    foodType: "veg",
    rating: 4.6,
    reviews: 892,
    badge: "fresh",
    inStock: true,
    sameDay: true,
  },
  {
    id: "veg_2",
    type: "grocery",
    title: "Organic Spinach Bunch",
    description: "Certified organic, pesticide-free spinach. Rich in iron and nutrients.",
    price: 35,
    originalPrice: 50,
    currency: "₹",
    image: "https://images.pexels.com/photos/5676744/pexels-photo-5676744.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "vegetables",
    foodType: "veg",
    rating: 4.7,
    reviews: 654,
    badge: "fresh",
    inStock: true,
    sameDay: true,
  },
  {
    id: "veg_3",
    type: "grocery",
    title: "Bell Peppers (Pack of 3)",
    description: "Colorful bell peppers - Red, Yellow, Green. Crunchy and sweet.",
    price: 89,
    originalPrice: 120,
    currency: "₹",
    image: "https://images.pexels.com/photos/3407788/pexels-photo-3407788.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "vegetables",
    foodType: "veg",
    rating: 4.5,
    reviews: 421,
    inStock: true,
    sameDay: true,
  },

  // Grocery - Fruits
  {
    id: "fruit_1",
    type: "grocery",
    title: "Fresh Apples (1kg)",
    description: "Premium red apples from Kashmir. Sweet and juicy. High in fiber.",
    price: 120,
    originalPrice: 160,
    currency: "₹",
    image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "fruits",
    foodType: "veg",
    rating: 4.8,
    reviews: 1203,
    badge: "fresh",
    inStock: true,
    sameDay: true,
  },
  {
    id: "fruit_2",
    type: "grocery",
    title: "Bananas (1 Dozen)",
    description: "Ripe yellow bananas. Perfect for breakfast and snacking.",
    price: 35,
    originalPrice: 50,
    currency: "₹",
    image: "https://images.pexels.com/photos/131579/pexels-photo-131579.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "fruits",
    foodType: "veg",
    rating: 4.4,
    reviews: 567,
    inStock: true,
    sameDay: true,
  },
  {
    id: "fruit_3",
    type: "grocery",
    title: "Oranges (1kg)",
    description: "Fresh citrus oranges. Rich in Vitamin C. Perfect juice oranges.",
    price: 65,
    originalPrice: 90,
    currency: "₹",
    image: "https://images.pexels.com/photos/161559/background-bitter-orange-bright-340578.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "fruits",
    foodType: "veg",
    rating: 4.6,
    reviews: 734,
    inStock: true,
    sameDay: true,
  },

  // Grocery - Dairy
  {
    id: "dairy_1",
    type: "grocery",
    title: "Fresh Milk (1L)",
    description: "Farm-fresh, cold milk. Delivered daily. 100% pure.",
    price: 55,
    originalPrice: 70,
    currency: "₹",
    image: "https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "dairy",
    foodType: "veg",
    rating: 4.7,
    reviews: 2103,
    badge: "best_seller",
    inStock: true,
    sameDay: true,
  },
  {
    id: "dairy_2",
    type: "grocery",
    title: "Greek Yogurt (500g)",
    description: "Creamy Greek yogurt. High in protein. No added sugar.",
    price: 89,
    originalPrice: 120,
    currency: "₹",
    image: "https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "dairy",
    foodType: "veg",
    rating: 4.6,
    reviews: 845,
    inStock: true,
    sameDay: true,
  },
  {
    id: "dairy_3",
    type: "grocery",
    title: "Paneer (250g)",
    description: "Fresh cottage cheese. Perfect for curries and snacks.",
    price: 120,
    originalPrice: 150,
    currency: "₹",
    image: "https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "dairy",
    foodType: "veg",
    rating: 4.8,
    reviews: 1567,
    badge: "fresh",
    inStock: true,
    sameDay: true,
  },

  // Grocery - Drinks
  {
    id: "drink_1",
    type: "grocery",
    title: "Fresh Orange Juice (1L)",
    description: "Freshly squeezed orange juice. No preservatives. Cold pressed.",
    price: 89,
    originalPrice: 120,
    currency: "₹",
    image: "https://images.pexels.com/photos/96381/pexels-photo-96381.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "drinks",
    foodType: "veg",
    rating: 4.5,
    reviews: 456,
    inStock: true,
    sameDay: true,
  },
  {
    id: "drink_2",
    type: "grocery",
    title: "Almond Milk (1L)",
    description: "Plant-based milk alternative. Rich and creamy. Calcium fortified.",
    price: 125,
    originalPrice: 160,
    currency: "₹",
    image: "https://images.pexels.com/photos/96381/pexels-photo-96381.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "drinks",
    foodType: "veg",
    rating: 4.4,
    reviews: 623,
    inStock: true,
    sameDay: true,
  },

  // Grocery - Snacks
  {
    id: "snack_1",
    type: "grocery",
    title: "Roasted Almonds (250g)",
    description: "Premium roasted almonds. No oil added. Great source of protein.",
    price: 199,
    originalPrice: 250,
    currency: "₹",
    image: "https://images.pexels.com/photos/5649845/pexels-photo-5649845.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "snacks",
    foodType: "veg",
    rating: 4.7,
    reviews: 1234,
    badge: "best_seller",
    inStock: true,
    sameDay: true,
  },
  {
    id: "snack_2",
    type: "grocery",
    title: "Cashews (200g)",
    description: "Whole cashews. Lightly salted. Premium quality.",
    price: 299,
    originalPrice: 350,
    currency: "₹",
    image: "https://images.pexels.com/photos/5649845/pexels-photo-5649845.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "snacks",
    foodType: "veg",
    rating: 4.8,
    reviews: 987,
    inStock: true,
    sameDay: true,
  },

  // Grocery - Kitchen Essentials
  {
    id: "essential_1",
    type: "grocery",
    title: "Extra Virgin Olive Oil (500ml)",
    description: "Cold-pressed olive oil. Best for salads and cooking.",
    price: 450,
    originalPrice: 600,
    currency: "₹",
    image: "https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "kitchen_essentials",
    foodType: "veg",
    rating: 4.6,
    reviews: 567,
    inStock: true,
    sameDay: true,
  },
  {
    id: "essential_2",
    type: "grocery",
    title: "Sea Salt (250g)",
    description: "Natural sea salt. Unrefined and mineral-rich.",
    price: 89,
    originalPrice: 120,
    currency: "₹",
    image: "https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "kitchen_essentials",
    foodType: "veg",
    rating: 4.5,
    reviews: 234,
    inStock: true,
    sameDay: true,
  },

  // Combos
  {
    id: "combo_1",
    type: "combo",
    title: "Healthy Breakfast Bundle",
    description: "Everything you need for a healthy breakfast. Includes milk, yogurt, and oats.",
    price: 299,
    originalPrice: 420,
    currency: "₹",
    image: "https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "breakfast",
    foodType: "veg",
    rating: 4.7,
    reviews: 678,
    badge: "trending",
    inStock: true,
    sameDay: true,
  },
];

export const categories = [
  { id: "best_price", label: "Best Price", icon: "🏷️" },
  { id: "fresh", label: "Fresh", icon: "🌿" },
  { id: "grocery", label: "Grocery", icon: "🛒" },
  { id: "kitchen_essentials", label: "Kitchen", icon: "🔪" },
  { id: "fruits", label: "Fruits", icon: "🍎" },
  { id: "vegetables", label: "Vegetables", icon: "🥦" },
  { id: "drinks", label: "Drinks", icon: "🥤" },
  { id: "snacks", label: "Snacks", icon: "🥜" },
  { id: "dairy", label: "Dairy", icon: "🥛" },
  { id: "combos", label: "Combos", icon: "📦" },
  { id: "tiffin", label: "Tiffin", icon: "🍱" },
  { id: "breakfast", label: "Breakfast", icon: "🌅" },
  { id: "lunch", label: "Lunch", icon: "🍽️" },
  { id: "dinner", label: "Dinner", icon: "🌙" },
  { id: "weekly_plan", label: "Weekly Plan", icon: "📅" },
  { id: "monthly_plan", label: "Monthly Plan", icon: "📊" },
];
