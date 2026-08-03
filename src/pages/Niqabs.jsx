import { useState, useMemo } from "react";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import CategoryTabs from "../components/CategoryTabs/CategoryTabs";
import ProductCard from "../components/ProductCard/ProductCard";
import { niqabCategories } from "../data/categories";
import { niqabProducts } from "../data/products";
import "./Niqabs.css";

export default function Niqabs() {
  const [activeSlug, setActiveSlug] = useState("all");

  const filtered = useMemo(() => {
    if (activeSlug === "all") return niqabProducts;
    return niqabProducts.filter((p) => p.subcategory === activeSlug);
  }, [activeSlug]);

  return (
    <div>
      <div className="container py-5">
        <SectionTitle
          eyebrow="أكبر أقسامنا"
          title="النقاب"
          subtitle="كل نقاب من حُرّة يحمل شعارنا المطرز بلمسة أنيقة، مع تشكيلة كاملة تناسب احتياجاتك اليومية."
        />

        {/* Category overview cards */}
        <div className="row g-4 mb-5">
          {niqabCategories.map((cat) => (
            <div className="col-12 col-sm-6 col-lg-4" key={cat.slug}>
              <button
                type="button"
                className={`niqab-overview-card ${activeSlug === cat.slug ? "is-active" : ""}`}
                onClick={() => setActiveSlug(cat.slug)}
              >
                <h4 className="brand-font">{cat.name}</h4>
                <p>{cat.blurb}</p>
              </button>
            </div>
          ))}
        </div>

        <CategoryTabs tabs={niqabCategories} activeSlug={activeSlug} onChange={setActiveSlug} />

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
    </div>
  );
}
