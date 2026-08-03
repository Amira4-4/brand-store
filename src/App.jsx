import { CartProvider } from "./context/CartContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import AppRouter from "./router/AppRouter";

export default function App() {
  return (
    <CartProvider>
      <FavoritesProvider>
        <AppRouter />
      </FavoritesProvider>
    </CartProvider>
  );
}
