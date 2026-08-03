import { useSearchParams } from "react-router-dom";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import ProductCard from "../components/ProductCard/ProductCard";
import { allProducts } from "../data/products";

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = (searchParams.get("q") || "").trim().toLowerCase();

  const results = query
    ? allProducts.filter((p) =>
        [p.name, p.fabric, p.pattern, p.description, p.subcategoryName]
          .filter(Boolean)
          .some((field) => field.toLowerCase().includes(query))
      )
    : [];

  return (
    <div className="container py-5">
      <SectionTitle
        eyebrow="نتائج البحث"
        title={query ? `نتائج البحث عن: "${query}"` : "ابحثي عن منتج"}
      />

      {query && results.length === 0 && (
        <p className="text-center py-4">لم يتم العثور على منتجات مطابقة لبحثكِ.</p>
      )}

      <div className="row g-4">
        {results.map((product) => (
          <div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
