import SectionTitle from "../components/SectionTitle/SectionTitle";

export default function InfoPage({ title, children }) {
  return (
    <div className="container py-5">
      <SectionTitle title={title} />
      <div style={{ maxWidth: 780, margin: "0 auto", lineHeight: 2, opacity: 0.85 }}>
        {children}
      </div>
    </div>
  );
}
