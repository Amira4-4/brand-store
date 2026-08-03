import Hero from "../components/Hero/Hero";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import CategoryCard from "../components/CategoryCard/CategoryCard";
import { placeholderImage } from "../utils/images";
import "./Home.css";

// Suggested real-photo searches noted per card for easy replacement later.
const MAIN_CATEGORIES = [
  {
    title: "الأخمرة",
    blurb: "شيفون، ديجيتال، وكريب بألوان هادئة تناسب إطلالتك اليومية.",
    to: "/hijabs",
    image: placeholderImage("home-hijab", 700, 900), // hint: "elegant hijab fabric neutral"
  },
  {
    title: "النقاب",
    blurb: "تشكيلة واسعة: الكامل، التندا، الأفغاني، المقوى، والمطاطي.",
    to: "/niqabs",
    image: placeholderImage("home-niqab", 700, 900), // hint: "modest black fabric elegant"
  },
  {
    title: "سترة العروسة",
    blurb: "إطلالة عروس هادئة وفاخرة بألوان بيضاء وكريمية ناعمة.",
    to: "/bride",
    image: placeholderImage("home-bride", 700, 900), // hint: "white bridal modest fashion"
  },
];

export default function Home() {
  return (
    <div>
      <Hero />

      <section className="container py-5">
        <SectionTitle
          eyebrow="تسوقي حسب القسم"
          title="مجموعاتنا"
          subtitle="كل قطعة صُممت لتجمع بين الستر الكامل والأناقة الهادئة، بخامات مختارة بعناية."
        />
        <div className="row g-4">
          {MAIN_CATEGORIES.map((cat) => (
            <div className="col-12 col-md-4" key={cat.to}>
              <CategoryCard {...cat} />
            </div>
          ))}
        </div>
      </section>

      <section className="home-values py-5">
        <div className="container">
          <SectionTitle title="لماذا حُرّة؟" />
          <div className="row g-4 text-center">
            {[
              { title: "خامات فاخرة", desc: "نختار أقمشة مريحة وعالية الجودة تدوم طويلاً." },
              { title: "تصاميم هادئة", desc: "ألوان وقصّات تعكس البساطة والرقي دون تكلف." },
              { title: "ستر كامل بثقة", desc: "كل قطعة مصممة لتمنحك حرية الحركة مع الحشمة التامة." },
            ].map((v) => (
              <div className="col-12 col-md-4" key={v.title}>
                <div className="home-values__item fade-in-up">
                  <h4 className="brand-font">{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
