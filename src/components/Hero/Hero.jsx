import { Link } from "react-router-dom";
import { placeholderImage } from "../../utils/images";
import "./Hero.css";
import Image from "./Hero-Image.jpg"

// Suggested real-photo search: "modest islamic fashion woman beige hijab elegant"
const HERO_IMAGE = placeholderImage("hero-main", 900, 1100);

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__text fade-in-up">
          <p className="hero__eyebrow">أزياء الستر والأناقة</p>
          <h1 className="hero__title brand-font">حُرّة</h1>
          <p className="hero__slogan">دليلكِ إلى الستر والأناقة.</p>
          <p className="hero__desc">
            تشكيلة راقية من الأخمرة والنقاب وسترة العروسة، صُممت لتجمع بين
            الحشمة والفخامة والبساطة في آنٍ واحد.
          </p>
          <div className="hero__actions">
            <Link to="/hijabs" className="btn-brand">تسوقي الأخمرة</Link>
            <Link to="/niqabs" className="btn-outline-brand">تسوقي النقاب</Link>
          </div>
        </div>

        <div className="hero__image-wrap fade-in-up">
          <img src={Image } alt="أزياء إسلامية محتشمة أنيقة" />
          <div className="hero__image-accent" aria-hidden="true"></div>
        </div>
      </div>
    </section>
  );
}
