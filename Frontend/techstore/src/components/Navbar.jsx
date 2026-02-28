import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data/constants";
import "./navbar.css"
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      

      <div className="navbar-root">
        <header className={`nav-header ${scrolled ? "scrolled" : "top"}`}>
          <div className="accent-corner" />
          <div className="nav-inner">

            {/* Logo */}
            <a href="#" className="logo">
              nex<span>tech</span>.
            </a>

            {/* Divider */}
            <div className="nav-divider" />

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="hamburger md:hidden"
              aria-label="Toggle menu"
            >
              <span style={{ width: menuOpen ? "22px" : undefined, transform: menuOpen ? "translateY(5.5px) rotate(45deg)" : undefined }} />
              <span style={{ opacity: menuOpen ? 0 : undefined, width: menuOpen ? "0" : undefined }} />
              <span style={{ width: menuOpen ? "22px" : undefined, transform: menuOpen ? "translateY(-5.5px) rotate(-45deg)" : undefined }} />
            </button>

            {/* Desktop nav links */}
            <nav className="desktop-nav ml-24">
              {NAV_LINKS.map((link) => (
                <a key={link} href="#" className="nav-link">
                  {link}
                </a>
              ))}
            </nav>

            {/* Search */}
            <div className="search-wrapper">
              <div className="search-box">
                <input
                  className="search-input"
                  placeholder="Search for products..."
                />
                <button className="search-btn" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                  </svg>
                  Search
                </button>
              </div>
            </div>

          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="mobile-menu">
              {NAV_LINKS.map((link) => (
                <a key={link} href="#" className="mobile-link">
                  {link}
                </a>
              ))}
              <div className="mobile-search">
                <input placeholder="Search for products..." />
                <button type="button">Search</button>
              </div>
            </div>
          )}
        </header>
      </div>
    </>
  );
}