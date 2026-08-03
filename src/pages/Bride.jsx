import SectionTitle from "../components/SectionTitle/SectionTitle";
import ProductCard from "../components/ProductCard/ProductCard";
import { brideProducts } from "../data/products";
import "./Bride.css";

export default function Bride() {
  return (
    <div className="bride-page">
      <div className="bride-page__hero">
        <div className="container text-center">
          <p className="section-subtitle fade-in-up">لحظة استثنائية تستحق كل رقة</p>
          <h1 className="brand-font bride-page__title fade-in-up">سترة العروسة</h1>
          <p className="bride-page__desc fade-in-up">
            تشكيلة هادئة وفاخرة من الخُمر والنقاب والبونيات، بألوان بيضاء وكريمية
            ولمسات تطريز ناعمة، لعروس تحتفل بيومها دون أن تتخلى عن الستر والبساطة.
          </p>
        </div>
        {/* Minimal Islamic floral ornament */}
        <div className="bride-page__ornament" aria-hidden="true">
          <svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 30 Q 40 5, 70 30 T 130 30 T 190 30"
              stroke="var(--color-gold)"
              strokeWidth="1.4"
              fill="none"
              opacity="0.6"
            />
            <circle cx="70" cy="30" r="3" fill="var(--color-gold)" opacity="0.7" />
            <circle cx="130" cy="30" r="3" fill="var(--color-gold)" opacity="0.7" />
          </svg>
        </div>
      </div>

      <div className="container pb-5">
        <SectionTitle title="تشكيلة العروسة" />
        <div className="row g-4">
          {brideProducts.map((product) => (
            <div className="col-12 col-sm-6 col-lg-4" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
