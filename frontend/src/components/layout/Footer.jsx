import React from "react";
import { Link } from "react-router-dom";

const MAIN = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/loan-products", label: "Loan Products" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/contact", label: "Contact Us" },
];

const POLICIES = [
  { to: "/policies/fair-practices-code", label: "Fair Practices Code" },
  { to: "/policies/interest-rate-policy", label: "Interest Rate Policy" },
  { to: "/policies/grievance-redressal", label: "Grievance Redressal" },
  { to: "/policies/privacy-policy", label: "Privacy Policy" },
  { to: "/policies/kyc-aml-policy", label: "KYC & AML Policy" },
  { to: "/policies/rates-fees-charges", label: "Rates, Fees & Charges" },
  { to: "/policies/terms-conditions", label: "Terms & Conditions" },
  { to: "/policies/refund-cancellation", label: "Refund & Cancellation" },
  { to: "/policies/disclaimer", label: "Disclaimer" },
  { to: "/policies/regulatory-disclosures", label: "Regulatory Disclosures" },
];

const REG_LINKS = [
  { href: "https://www.rbi.org.in", label: "Reserve Bank of India (RBI)" },
  { href: "https://cms.rbi.org.in", label: "RBI Complaint Management System" },
  { href: "https://sachet.rbi.org.in", label: "RBI Sachet" },
  { href: "https://www.mca.gov.in", label: "Ministry of Corporate Affairs" },
  { href: "https://cybercrime.gov.in", label: "Cyber Crime Reporting" },
];

export default function Footer() {
  return (
    <footer className="gov-footer mt-10" data-testid="site-footer">
      {/* Tricolour reverse */}
      <div className="tricolour" aria-hidden="true">
        <span className="green" />
        <span className="white" />
        <span className="saffron" />
      </div>

      <div className="gov-container py-7">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h3 style={{ color: "#fff", fontSize: 13, marginBottom: 8 }}>QUICK LINKS</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {MAIN.map((m) => (
                <li key={m.to} style={{ marginBottom: 4 }}>
                  <Link to={m.to} data-testid={`footer-${m.label.toLowerCase().replace(/\s+/g, "-")}`}>
                    » {m.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 style={{ color: "#fff", fontSize: 13, marginBottom: 8 }}>POLICIES</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {POLICIES.slice(0, 5).map((p) => (
                <li key={p.to} style={{ marginBottom: 4 }}>
                  <Link to={p.to}>» {p.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 style={{ color: "#fff", fontSize: 13, marginBottom: 8 }}>LEGAL</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {POLICIES.slice(5).map((p) => (
                <li key={p.to} style={{ marginBottom: 4 }}>
                  <Link to={p.to}>» {p.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 style={{ color: "#fff", fontSize: 13, marginBottom: 8 }}>REGULATOR LINKS</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {REG_LINKS.map((l) => (
                <li key={l.href} style={{ marginBottom: 4 }}>
                  <a href={l.href} target="_blank" rel="noreferrer">» {l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr style={{ borderColor: "rgba(255,255,255,0.2)", margin: "20px 0 14px 0" }} />

        <div className="md:flex md:items-start md:justify-between" style={{ fontSize: 12 }}>
          <div style={{ lineHeight: 1.7 }}>
            <strong style={{ color: "#fff" }}>Registered Office:</strong>{" "}
            <span className="ph">xxxxxxxx</span>, <span className="ph">xxxxxxxx</span>, <span className="ph">xxxxxxxx</span> – <span className="ph">xxxxxxxx</span>, India<br />
            <strong style={{ color: "#fff" }}>Customer Care:</strong> 879624245 &nbsp;|&nbsp;
            <strong style={{ color: "#fff" }}>Email:</strong> info@logixfinance&amp;investment.com<br />
            <strong style={{ color: "#fff" }}>Grievance:</strong> grievance@logixfinance&amp;investment.com &nbsp;|&nbsp; 10:30 AM – 6:30 PM
          </div>
          <div className="mt-4 md:mt-0 md:text-right" style={{ lineHeight: 1.7 }}>
            <div>CIN: <span className="ph">xxxxxxxx</span></div>
            <div>RBI Reg. No.: <span className="ph">xxxxxxxx</span></div>
            <div>GSTIN: <span className="ph">xxxxxxxx</span></div>
          </div>
        </div>

        <hr style={{ borderColor: "rgba(255,255,255,0.2)", margin: "14px 0" }} />

        <div className="md:flex md:items-center md:justify-between" style={{ fontSize: 11, color: "#cdd6e8" }}>
          <div>
            © <span className="ph">20xx</span> Logix Finance &amp; Investment Private Limited. All rights reserved.
          </div>
          <div className="mt-2 md:mt-0">
            Last Updated: <span className="ph">DD MMM YYYY</span> &nbsp;|&nbsp;
            Best viewed in Chrome / Firefox / Edge at 1024×768 resolution
          </div>
        </div>
      </div>
    </footer>
  );
}
