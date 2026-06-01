import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X as XIcon, Phone } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/loan-products", label: "Loan Products" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/contact", label: "Contact Us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  useEffect(() => { setOpen(false); }, [loc.pathname]);

  return (
    <header data-testid="site-header" className="sticky top-0 z-50 bg-white border-b border-[#e6e9f0]">
      {/* Top contact bar */}
      <div className="hidden md:block bg-[#0f2855] text-white text-xs">
        <div className="container-x flex items-center justify-between py-2">
          <div data-testid="top-contact">
            <Phone size={11} className="inline-block mr-1.5 -mt-0.5" />
            Customer Care: <strong className="text-[#F58220]">879624245</strong>
            <span className="mx-3 opacity-40">|</span>
            Email: info@logixfinance&amp;investment.com
          </div>
          <div data-testid="top-grievance">
            <Link to="/policies/grievance-redressal" className="text-white hover:text-[#F58220]">Grievance Redressal</Link>
            <span className="mx-3 opacity-40">|</span>
            <Link to="/policies/regulatory-disclosures" className="text-white hover:text-[#F58220]">Disclosures</Link>
          </div>
        </div>
      </div>

      {/* Main brand row */}
      <div className="container-x flex items-center justify-between h-[78px]">
        <Link to="/" className="flex items-center gap-3" data-testid="brand-logo-link" style={{ textDecoration: "none" }}>
          <span className="inline-flex items-center justify-center w-11 h-11 rounded-lg text-white font-bold text-xl"
            style={{ background: "linear-gradient(135deg, #133e8a 0%, #1e57c9 100%)", fontFamily: "Poppins" }}>
            L
          </span>
          <div style={{ lineHeight: 1.2 }}>
            <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: 17, color: "#133e8a" }}>
              Logix Finance &amp; Investment
            </div>
            <div style={{ fontSize: 11, color: "#5b6479", fontWeight: 500, letterSpacing: "0.04em" }}>
              PRIVATE LIMITED · NBFC REGISTERED WITH RBI
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" data-testid="primary-nav">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              data-testid={`nav-${n.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-semibold rounded-md transition-colors ${
                  isActive ? "text-[#F58220]" : "text-[#2b2f3a] hover:text-[#133e8a]"
                }`
              }
              style={{ fontFamily: "Poppins" }}
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/loan-products" data-testid="header-apply-btn" className="btn btn-accent">
            Apply Now
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 -mr-2 text-[#133e8a]"
          data-testid="mobile-menu-toggle"
          aria-label="Menu"
        >
          {open ? <XIcon size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[#e6e9f0] bg-white" data-testid="mobile-menu">
          <div className="container-x py-3 flex flex-col">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                data-testid={`mobile-nav-${n.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={({ isActive }) =>
                  `py-3 text-sm font-semibold border-b border-[#e6e9f0]/70 last:border-0 ${
                    isActive ? "text-[#F58220]" : "text-[#2b2f3a]"
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <Link to="/loan-products" data-testid="mobile-apply-btn" className="btn btn-accent w-full justify-center mt-3 mb-2">
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
