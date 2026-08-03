import SectionTitle from "../components/SectionTitle/SectionTitle";
import { placeholderImage } from "../utils/images";

export default function About() {
  return (
    <div className="container py-5">
      <SectionTitle eyebrow="قصتنا" title="من نحن" />

      <div className="row align-items-center g-5">
        <div className="col-12 col-lg-6 fade-in-up">
          <img
            src={"/src/pages/about-image.jpg"}
            alt="عن حُرّة"
            style={{ borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-soft)" }}
          />
        </div>
        <div className="col-12 col-lg-6 fade-in-up">
          <p style={{ lineHeight: 2, opacity: 0.85 }}>
            وُلدت "حُرّة" من إيمان بسيط: أن الستر لا يعني التنازل عن الأناقة،
            وأن الحشمة يمكن أن تكون فاخرة وهادئة في آنٍ واحد.
          </p>
          <p style={{ lineHeight: 2, opacity: 0.85 }}>
            نحن نؤمن بأن كل امرأة تستحق أن تشعر بالثقة والراحة والجمال، لذلك
            نختار أقمشتنا بعناية فائقة، ونصمم كل قطعة لتُلامس روح البساطة
            المستوحاة من الفن الإسلامي الأصيل.
          </p>
          <p style={{ lineHeight: 2, opacity: 0.85 }}>
            من الأخمرة إلى النقاب وصولاً إلى سترة العروسة، نرافقكِ في كل
            مرحلة من رحلتكِ، بألوان هادئة وتصاميم لا تنتهي أناقتها.
          </p>
        </div>
      </div>
    </div>
  );
}
