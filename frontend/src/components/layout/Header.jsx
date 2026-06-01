import React from "react";
import { Link, NavLink } from "react-router-dom";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/loan-products", label: "Loan Products" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/contact", label: "Contact Us" },
];

export default function Header() {
  return (
    <header data-testid="site-header">
      {/* Top utility bar */}
      <div className="gov-top">
        <div className="gov-container flex items-center justify-between py-1.5">
          <div data-testid="top-skip">
            <a href="#main-content" className="mr-3">Skip to main content</a>
            <a href="#sitemap" className="mr-3">Sitemap</a>
          </div>
          <div data-testid="top-tools">
            <a href="#a-minus" className="mr-2" title="Decrease font size">A-</a>
            <a href="#a-normal" className="mr-2" title="Normal font size">A</a>
            <a href="#a-plus" className="mr-3" title="Increase font size">A+</a>
            <span className="text-gray-500">|</span>
            <a href="#lang-en" className="mx-2">English</a>
            <a href="#lang-hi">हिन्दी</a>
          </div>
        </div>
      </div>

      {/* Tricolour strip */}
      <div className="tricolour" aria-hidden="true">
        <span className="saffron" />
        <span className="white" />
        <span className="green" />
      </div>

      {/* Brand row */}
      <div className="gov-brand">
        <div className="gov-container flex flex-wrap items-center gap-4">
          {/* Logo block */}
          <Link to="/" data-testid="brand-logo-link" className="flex items-center gap-3" style={{ textDecoration: "none" }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/240px-Emblem_of_India.svg.png"
              alt="Emblem"
              width="48"
              height="58"
              style={{ display: "block" }}
            />
            <div style={{ lineHeight: 1.25 }}>
              <div style={{ fontSize: 18, fontWeight: "bold", color: "#0B3D91" }}>
                LOGIX FINANCE & INVESTMENT PRIVATE LIMITED
              </div>
              <div style={{ fontSize: 12, color: "#444" }}>
                Registered as a Non-Banking Financial Company with the Reserve Bank of India
              </div>
              <div style={{ fontSize: 11, color: "#666", marginTop: 2 }}>
                CIN: <span className="ph">xxxxxxxx</span> &nbsp;|&nbsp; RBI Reg. No.: <span className="ph">xxxxxxxx</span>
              </div>
            </div>
          </Link>

          <div className="ml-auto hidden md:flex items-center gap-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Flag_of_India.svg/200px-Flag_of_India.svg.png"
              alt="Flag of India"
              width="44"
              height="29"
              style={{ border: "1px solid #ccc" }}
            />
            <div style={{ fontSize: 11, color: "#444", textAlign: "right", lineHeight: 1.3 }}>
              Serving customers across India<br />
              under RBI regulatory framework
            </div>
          </div>
        </div>
      </div>

      {/* Primary navigation */}
      <nav className="gov-nav" data-testid="primary-nav">
        <div className="gov-container flex flex-wrap">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              data-testid={`nav-${n.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={({ isActive }) => (isActive ? "active" : "")}
              end={n.to === "/"}
            >
              {n.label}
            </NavLink>
          ))}
          <NavLink
            to="/policies/regulatory-disclosures"
            data-testid="nav-disclosures"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Disclosures
          </NavLink>
          <NavLink
            to="/policies/grievance-redressal"
            data-testid="nav-grievance"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Grievance Redressal
          </NavLink>
        </div>
      </nav>

      {/* Marquee notice */}
      <div className="gov-container py-2">
        <div className="gov-marquee" data-testid="notice-marquee">
          <span className="label">NOTICE</span>
          <div className="scroll">
            <span>
              Beware of fraudsters — Logix Finance & Investment Pvt Ltd never asks for any upfront fee, security deposit or OTP. &nbsp; • &nbsp;
              Customer Care: 879624245 &nbsp; • &nbsp;
              Grievance Email: grievance@logixfinance&amp;investment.com &nbsp; • &nbsp;
              For complaints unresolved beyond 30 days, you may approach the RBI Ombudsman at cms.rbi.org.in
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
