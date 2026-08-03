import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaSearch, FaHeart, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
import { useCart } from "../../hooks/useCart";
import { useFavorites } from "../../hooks/useFavorites";
import "./Navbar.css";

const NAV_LINKS = [
  { to: "/", label: "الرئيسية" },
  { to: "/hijabs", label: "الأخمرة" },
  { to: "/niqabs", label: "النقاب" },
  { to: "/bride", label: "سترة العروسة" },
  { to: "/about", label: "من نحن" },
  { to: "/contact", label: "تواصل معنا" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { totalItems } = useCart();
  const { favoriteIds } = useFavorites();

  function handleSearchSubmit(e) {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setSearchOpen(false);
      setMenuOpen(false);
    }
  }

  return (
    <nav className="site-navbar">
      <div className="site-navbar__container">
        {/* Brand logo */}
        <NavLink to="/" className="site-navbar__brand brand-font" onClick={() => setMenuOpen(false)}>
          حُرّة
        </NavLink>

        {/* Desktop links */}
        <ul className="site-navbar__links d-none d-lg-flex">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  "site-navbar__link" + (isActive ? " is-active" : "")
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Actions: search, favorites, cart */}
        <div className="site-navbar__actions">
          <button
            type="button"
            className="site-navbar__icon-btn"
            aria-label="بحث"
            onClick={() => setSearchOpen((s) => !s)}
          >
            <FaSearch />
          </button>

          <NavLink to="/favorites" className="site-navbar__icon-btn" aria-label="المفضلة">
            <FaHeart />
            {favoriteIds.length > 0 && (
              <span className="site-navbar__badge">{favoriteIds.length}</span>
            )}
          </NavLink>

          <NavLink to="/cart" className="site-navbar__icon-btn" aria-label="السلة">
            <FaShoppingBag />
            {totalItems > 0 && <span className="site-navbar__badge">{totalItems}</span>}
          </NavLink>

          <button
            type="button"
            className="site-navbar__icon-btn d-lg-none"
            aria-label="القائمة"
            onClick={() => setMenuOpen((m) => !m)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Search bar dropdown */}
      {searchOpen && (
        <form className="site-navbar__search fade-in-up" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="ابحثي عن منتج... (خمار، نقاب، عروسة)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <button type="submit" className="btn-brand">بحث</button>
        </form>
      )}

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="site-navbar__mobile-menu fade-in-up d-lg-none">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  "site-navbar__link" + (isActive ? " is-active" : "")
                }
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
