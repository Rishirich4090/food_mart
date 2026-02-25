import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { Product } from "../data/products";

export interface CartItem {
  productId: string;
  product: Product;
  quantity: number;
  addedAt: number;
}

export interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

type CartAction =
  | { type: "ADD_ITEM"; payload: { product: Product; quantity: number } }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { productId: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "LOAD_FROM_STORAGE"; payload: CartState };

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const calculateTotals = (items: CartItem[]) => {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  return { totalItems, totalPrice };
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.items.find((item) => item.productId === action.payload.product.id);

      let newItems: CartItem[];
      if (existingItem) {
        newItems = state.items.map((item) =>
          item.productId === action.payload.product.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        newItems = [
          ...state.items,
          {
            productId: action.payload.product.id,
            product: action.payload.product,
            quantity: action.payload.quantity,
            addedAt: Date.now(),
          },
        ];
      }

      const { totalItems, totalPrice } = calculateTotals(newItems);
      return { items: newItems, totalItems, totalPrice };
    }

    case "REMOVE_ITEM": {
      const newItems = state.items.filter((item) => item.productId !== action.payload);
      const { totalItems, totalPrice } = calculateTotals(newItems);
      return { items: newItems, totalItems, totalPrice };
    }

    case "UPDATE_QUANTITY": {
      const newItems = state.items.map((item) =>
        item.productId === action.payload.productId
          ? { ...item, quantity: Math.max(0, action.payload.quantity) }
          : item
      );
      const filtered = newItems.filter((item) => item.quantity > 0);
      const { totalItems, totalPrice } = calculateTotals(filtered);
      return { items: filtered, totalItems, totalPrice };
    }

    case "CLEAR_CART": {
      return initialState;
    }

    case "LOAD_FROM_STORAGE": {
      return action.payload;
    }

    default:
      return state;
  }
};

interface CartContextType {
  state: CartState;
  addItem: (product: Product, quantity: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getCartItem: (productId: string) => CartItem | undefined;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState, (initial) => {
    // Load from localStorage on initialization
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : initial;
  });

  // Save to localStorage whenever state changes
  React.useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  const addItem = (product: Product, quantity: number) => {
    dispatch({ type: "ADD_ITEM", payload: { product, quantity } });
  };

  const removeItem = (productId: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: productId });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { productId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const getCartItem = (productId: string) => {
    return state.items.find((item) => item.productId === productId);
  };

  return (
    <CartContext.Provider value={{ state, addItem, removeItem, updateQuantity, clearCart, getCartItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};
