import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container py-5 text-center">
      <h1 className="brand-font" style={{ fontSize: "4rem", color: "var(--color-warm-brown)" }}>
        حُرّة
      </h1>
      <h2 className="mb-3">عذراً، الصفحة غير موجودة</h2>
      <p className="mb-4" style={{ opacity: 0.75 }}>
        يبدو أن الصفحة التي تبحثين عنها غير متاحة أو تم نقلها.
      </p>
      <Link to="/" className="btn-brand">العودة إلى الرئيسية</Link>
    </div>
  );
}
