import { useState } from "react";
import { FaHeart, FaRegHeart, FaShoppingBag } from "react-icons/fa";
import { useCart } from "../../hooks/useCart";
import { useFavorites } from "../../hooks/useFavorites";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./ProductCard.css";

/**
 * A single product card.
 * `product.hasBrandBadge` (used for niqab products) renders a small
 * embroidered-style "حُرّة" tag over the image corner — a CSS stand-in
 * for real embroidered product photography. See src/utils/images.js.
 */
export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] ?? "");
  const [justAdded, setJustAdded] = useState(false);
  const revealRef = useScrollReveal();

  const favorite = isFavorite(product.id);

  function handleAddToCart() {
    addToCart(product, selectedColor);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1600);
  }

  return (
    <div ref={revealRef} className="product-card reveal h-100">
      <div className="product-card__image-wrap">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="product-card__image"
        />

        {product.hasBrandBadge && (
          <span className="product-card__brand-badge brand-font" title="شعار حُرّة المطرز">
            حُرّة
          </span>
        )}

        <button
          type="button"
          className={`product-card__fav-btn ${favorite ? "is-active" : ""}`}
          onClick={() => toggleFavorite(product.id)}
          aria-label="إضافة إلى المفضلة"
        >
          {favorite ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>

      <div className="product-card__body">
        <h3 className="product-card__name">{product.name}</h3>

        {product.fabric && (
          <p className="product-card__meta">
            <span className="text-gold">القماش:</span> {product.fabric}
          </p>
        )}
        {product.pattern && (
          <p className="product-card__meta">
            <span className="text-gold">النقشة:</span> {product.pattern}
          </p>
        )}
        {product.description && (
          <p className="product-card__desc">{product.description}</p>
        )}

        {product.colors?.length > 0 && (
          <div className="product-card__colors">
            <span className="product-card__meta text-gold">الألوان:</span>
            <div className="product-card__color-list">
              {product.colors.map((color) => (
                <button
                  key={color}
                  type="button"
                  className={`product-card__color-chip ${
                    selectedColor === color ? "is-selected" : ""
                  }`}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="product-card__footer">
          <span className="product-card__price">{product.price} ج.م</span>
          <button
            type="button"
            className={`btn-brand product-card__add-btn ${justAdded ? "is-added" : ""}`}
            onClick={handleAddToCart}
          >
            <FaShoppingBag />
            {justAdded ? "أُضيف ✓" : "أضف إلى السلة"}
          </button>
        </div>
      </div>
    </div>
  );
}
