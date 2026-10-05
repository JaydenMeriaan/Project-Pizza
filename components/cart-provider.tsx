'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

type CartContextType = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  updateQuantity: (id: string, delta: number) => void;
  removeItem: (id: string) => void;
  itemCount: number;
  subtotal: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const raw = window.localStorage.getItem('project-pizza-cart');
    if (raw) {
      try {
        setItems(JSON.parse(raw));
      } catch {
        window.localStorage.removeItem('project-pizza-cart');
      }
    }
  }, []);

  useEffect(() => {
    if (items.length > 0) {
      window.localStorage.setItem('project-pizza-cart', JSON.stringify(items));
    } else {
      window.localStorage.removeItem('project-pizza-cart');
    }
  }, [items]);

  const addItem = (item: CartItem) => {
    setItems((current) => {
      const existing = current.find((entry) => entry.id === item.id);
      if (existing) {
        return current.map((entry) =>
          entry.id === item.id ? { ...entry, quantity: entry.quantity + item.quantity } : entry,
        );
      }
      return [...current, item];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems((current) =>
      current
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeItem = (id: string) => {
    setItems((current) => current.filter((item) => item.id !== id));
  };

  const itemCount = useMemo(() => items.reduce((sum, item) => sum + item.quantity, 0), [items]);
  const subtotal = useMemo(() => items.reduce((sum, item) => sum + item.price * item.quantity, 0), [items]);

  return <CartContext.Provider value={{ items, addItem, updateQuantity, removeItem, itemCount, subtotal }}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}
