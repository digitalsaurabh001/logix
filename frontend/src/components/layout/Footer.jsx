import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { X } from "../common/Placeholder";

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

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="bg-[#0f2855] text-[#cfd6e6] mt-20">
      <div className="container-x py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand block */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-lg text-white font-bold text-xl"
                style={{ background: "linear-gradient(135deg, #1e57c9 0%, #F58220 100%)", fontFamily: "Poppins" }}>
                L
              </span>
              <div className="leading-tight">
                <div style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: 16, color: "#fff" }}>
                  Logix Finance &amp; Investment
                </div>
                <div style={{ fontSize: 11, color: "#9aa6c2", letterSpacing: "0.06em" }}>PRIVATE LIMITED</div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-[#a8b3cc] max-w-sm">
              A Non-Banking Financial Company (NBFC) registered with the Reserve Bank of
              India. Offering simple, transparent and responsible credit across India.
            </p>

            <ul className="mt-6 space-y-3 text-[13px] text-[#cfd6e6]">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 text-[#F58220] shrink-0" />
                <span><X /> Road, <X />, <X /> – <X />, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-[#F58220]" />
                <span>879624245</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-[#F58220]" />
                <span>info@logixfinance&amp;investment.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={15} className="text-[#F58220]" />
                <span>10:30 AM – 6:30 PM (Mon – Sat)</span>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div className="md:col-span-2">
            <h3 className="text-white text-sm font-semibold tracking-wide mb-4" style={{ fontFamily: "Poppins" }}>QUICK LINKS</h3>
            <ul className="space-y-2.5">
              {MAIN.map((m) => (
                <li key={m.to}>
                  <Link
                    to={m.to}
                    data-testid={`footer-${m.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-[13px] text-[#a8b3cc] hover:text-[#F58220] no-underline"
                  >
                    {m.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies col 1 */}
          <div className="md:col-span-3">
            <h3 className="text-white text-sm font-semibold tracking-wide mb-4" style={{ fontFamily: "Poppins" }}>POLICIES</h3>
            <ul className="space-y-2.5">
              {POLICIES.slice(0, 5).map((p) => (
                <li key={p.to}>
                  <Link to={p.to} data-testid={`footer-policy-${p.to.split("/").pop()}`}
                    className="text-[13px] text-[#a8b3cc] hover:text-[#F58220] no-underline">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies col 2 */}
          <div className="md:col-span-3">
            <h3 className="text-white text-sm font-semibold tracking-wide mb-4" style={{ fontFamily: "Poppins" }}>LEGAL</h3>
            <ul className="space-y-2.5">
              {POLICIES.slice(5).map((p) => (
                <li key={p.to}>
                  <Link to={p.to} data-testid={`footer-policy-${p.to.split("/").pop()}`}
                    className="text-[13px] text-[#a8b3cc] hover:text-[#F58220] no-underline">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="my-8 border-white/10" />

        <div className="md:flex md:items-center md:justify-between gap-6 text-xs text-[#9aa6c2]">
          <div>
            <strong className="text-white">CIN:</strong> <X />
            <span className="mx-3 opacity-50">|</span>
            <strong className="text-white">RBI Reg. No.:</strong> <X />
            <span className="mx-3 opacity-50">|</span>
            <strong className="text-white">GSTIN:</strong> <X />
          </div>
          <div className="mt-3 md:mt-0">
            © <X>20xx</X> Logix Finance &amp; Investment Pvt Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
