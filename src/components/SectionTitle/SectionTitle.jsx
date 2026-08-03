import "./SectionTitle.css";

export default function SectionTitle({ eyebrow, title, subtitle, align = "center" }) {
  return (
    <div className={`section-heading text-${align}`}>
      {eyebrow && <p className="section-subtitle">{eyebrow}</p>}
      <h2 className="section-title brand-font">{title}</h2>
      <div className="ornament-divider">
        <span className="line"></span>
        <span></span>
        <span className="line"></span>
      </div>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </div>
  );
}
