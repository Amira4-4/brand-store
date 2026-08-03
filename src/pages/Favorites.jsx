import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import ProductCard from "../components/ProductCard/ProductCard";
import { useFavorites } from "../hooks/useFavorites";
import { allProducts } from "../data/products";

export default function Favorites() {
  const { favoriteIds } = useFavorites();
  const favoriteProducts = allProducts.filter((p) => favoriteIds.includes(p.id));

  if (favoriteProducts.length === 0) {
    return (
      <div className="container py-5 text-center">
        <SectionTitle title="المفضلة" />
        <p className="mb-4">لم تُضيفي أي منتج إلى المفضلة بعد.</p>
        <Link to="/hijabs" className="btn-brand">تصفحي منتجاتنا</Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <SectionTitle title="المفضلة" />
      <div className="row g-4">
        {favoriteProducts.map((product) => (
          <div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
