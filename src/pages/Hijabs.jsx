import { useState, useMemo } from "react";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import CategoryTabs from "../components/CategoryTabs/CategoryTabs";
import ProductCard from "../components/ProductCard/ProductCard";
import { hijabCategories } from "../data/categories";
import { hijabProducts } from "../data/products";

export default function Hijabs() {
  const [activeSlug, setActiveSlug] = useState("all");

  const filtered = useMemo(() => {
    if (activeSlug === "all") return hijabProducts;
    return hijabProducts.filter((p) => p.subcategory === activeSlug);
  }, [activeSlug]);

  return (
    <div className="container py-5">
      <SectionTitle
        eyebrow="قسم الأخمرة"
        title="الأخمرة"
        subtitle="تشكيلة متنوعة من الأخمرة الفاخرة: الشيفون المشجر، الشيفون السادة، الديجيتال، والكريب."
      />

      <CategoryTabs tabs={hijabCategories} activeSlug={activeSlug} onChange={setActiveSlug} />

      <div className="row g-4">
        {filtered.map((product) => (
          <div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center py-5">لا توجد منتجات في هذا التصنيف حالياً.</p>
      )}
    </div>
  );
}
