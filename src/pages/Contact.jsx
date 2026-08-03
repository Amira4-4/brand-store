import { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import SectionTitle from "../components/SectionTitle/SectionTitle";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <div className="container py-5">
      <SectionTitle eyebrow="نحن هنا من أجلكِ" title="تواصل معنا" />

      <div className="row g-5">
        <div className="col-12 col-lg-5">
          <ul className="list-unstyled d-flex flex-column gap-4">
            <li className="d-flex align-items-center gap-3">
              <FaWhatsapp size={22} color="var(--color-warm-brown)" />
              <span>واتساب: 201000000000+</span>
            </li>
            <li className="d-flex align-items-center gap-3">
              <FaEnvelope size={22} color="var(--color-warm-brown)" />
              <span>support@hurra-store.com</span>
            </li>
            <li className="d-flex align-items-center gap-3">
              <FaMapMarkerAlt size={22} color="var(--color-warm-brown)" />
              <span>القاهرة، مصر</span>
            </li>
          </ul>
        </div>

        <div className="col-12 col-lg-7">
          <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
            <input type="text" className="form-control" placeholder="الاسم الكامل" required />
            <input type="email" className="form-control" placeholder="البريد الإلكتروني" required />
            <textarea className="form-control" rows="5" placeholder="رسالتكِ..." required />
            <button type="submit" className="btn-brand align-self-start">
              إرسال الرسالة
            </button>
            {submitted && (
              <p className="fade-in-up" style={{ color: "#7a8f6d" }}>
                تم إرسال رسالتكِ بنجاح، سنتواصل معكِ قريباً. ✓
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
