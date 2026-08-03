import { FaWhatsapp, FaFacebookF, FaInstagram, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__container">
        <div className="site-footer__col">
          <h3 className="brand-font site-footer__brand">حُرّة</h3>
          <p className="site-footer__slogan">دليلكِ إلى الستر والأناقة.</p>
          <div className="site-footer__social">
            <a href="https://wa.me/201000000000" target="_blank" rel="noopener noreferrer" aria-label="واتساب">
              <FaWhatsapp />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="فيسبوك">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="انستغرام">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="site-footer__col">
          <h4>روابط مهمة</h4>
          <ul>
            <li><Link to="/about">من نحن</Link></li>
            <li><Link to="/privacy">سياسة الخصوصية</Link></li>
            <li><Link to="/shipping">الشحن والتوصيل</Link></li>
            <li><Link to="/returns">الاستبدال والاسترجاع</Link></li>
          </ul>
        </div>

        <div className="site-footer__col">
          <h4>تسوقي</h4>
          <ul>
            <li><Link to="/hijabs">الأخمرة</Link></li>
            <li><Link to="/niqabs">النقاب</Link></li>
            <li><Link to="/bride">سترة العروسة</Link></li>
            <li><Link to="/contact">تواصل معنا</Link></li>
          </ul>
        </div>

        <div className="site-footer__col">
          <h4>تواصلي معنا</h4>
          <ul className="site-footer__contact">
            <li><FaEnvelope /> support@hurra-store.com</li>
            <li><FaMapMarkerAlt /> القاهرة، مصر</li>
          </ul>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>© {year} حُرّة. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
}
