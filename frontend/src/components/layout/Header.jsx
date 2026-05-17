import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X as XIcon } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/loan-products", label: "Loan Products" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/contact", label: "Contact Us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [loc.pathname]);

  return (
    <header
      data-testid="site-header"
      className={`sticky top-0 z-50 w-full bg-[#F9F8F6]/85 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "border-b border-[#E5E3DB]" : "border-b border-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link
          to="/"
          data-testid="brand-logo-link"
          className="flex items-center gap-3 group"
        >
          <span className="grid place-items-center w-9 h-9 border border-[#1A2421] rounded-sm">
            <span className="font-display text-lg leading-none text-[#1A2421]">L</span>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[19px] tracking-tight text-[#1A2421]">
              Logix Finance
            </span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#64746C] mt-1">
              & Investment
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              data-testid={`nav-${n.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={({ isActive }) =>
                `text-[13px] tracking-wide transition-colors duration-200 ${
                  isActive
                    ? "text-[#B85C38]"
                    : "text-[#1A2421] hover:text-[#B85C38]"
                }`
              }
              end={n.to === "/"}
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/loan-products" data-testid="header-apply-btn" className="btn-primary text-xs px-5 py-2.5">
            Check Eligibility
          </Link>
        </div>

        <button
          data-testid="mobile-menu-toggle"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 -mr-2 text-[#1A2421]"
          aria-label="Toggle menu"
        >
          {open ? <XIcon size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div data-testid="mobile-menu" className="lg:hidden border-t border-[#E5E3DB] bg-[#F9F8F6]">
          <div className="container-x py-4 flex flex-col">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                data-testid={`mobile-nav-${n.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={({ isActive }) =>
                  `py-3 text-sm border-b border-[#E5E3DB]/60 last:border-0 ${
                    isActive ? "text-[#B85C38]" : "text-[#1A2421]"
                  }`
                }
                end={n.to === "/"}
              >
                {n.label}
              </NavLink>
            ))}
            <Link
              to="/loan-products"
              data-testid="mobile-apply-btn"
              className="btn-primary mt-4 justify-center"
            >
              Check Eligibility
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
