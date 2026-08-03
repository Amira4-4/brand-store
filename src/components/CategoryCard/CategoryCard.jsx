import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./CategoryCard.css";

export default function CategoryCard({ title, blurb, image, to }) {
  const revealRef = useScrollReveal();

  return (
    <Link to={to} className="category-card reveal">
      <div ref={revealRef} className="category-card__inner">
        <div className="category-card__image-wrap">
          <img src={image} alt={title} loading="lazy" />
        </div>
        <div className="category-card__content">
          <h3 className="category-card__title brand-font">{title}</h3>
          {blurb && <p className="category-card__blurb">{blurb}</p>}
          <span className="category-card__link">
            تسوقي الآن <FaArrowLeft />
          </span>
        </div>
      </div>
    </Link>
  );
}
