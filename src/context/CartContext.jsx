import { createContext, useEffect, useMemo, useState } from "react";

export const CartContext = createContext(null);

const STORAGE_KEY = "hurra_cart";

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  function addToCart(product, color) {
    setItems((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id && item.color === color
      );
      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.color === color
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...prev, { ...product, color, qty: 1 }];
    });
  }

  function removeFromCart(id, color) {
    setItems((prev) => prev.filter((item) => !(item.id === id && item.color === color)));
  }

  function updateQty(id, color, qty) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id && item.color === color
          ? { ...item, qty: Math.max(1, qty) }
          : item
      )
    );
  }

  function clearCart() {
    setItems([]);
  }

  const totalItems = useMemo(() => items.reduce((sum, i) => sum + i.qty, 0), [items]);
  const totalPrice = useMemo(
    () => items.reduce((sum, i) => sum + i.qty * i.price, 0),
    [items]
  );

  const value = {
    items,
    addToCart,
    removeFromCart,
    updateQty,
    clearCart,
    totalItems,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
