import React from "react";
import { Link } from "react-router-dom";
import { X } from "../common/Placeholder";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

const MAIN = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/loan-products", label: "Loan Products" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/contact", label: "Contact Us" },
];

const POLICIES_A = [
  { to: "/policies/interest-rate-policy", label: "Interest Rate Policy" },
  { to: "/policies/rates-fees-charges", label: "Rates, Fees & Charges" },
  { to: "/policies/fair-practices-code", label: "Fair Practices Code" },
  { to: "/policies/grievance-redressal", label: "Grievance Redressal" },
  { to: "/policies/kyc-aml-policy", label: "KYC & AML Policy" },
];
const POLICIES_B = [
  { to: "/policies/privacy-policy", label: "Privacy Policy" },
  { to: "/policies/terms-conditions", label: "Terms & Conditions" },
  { to: "/policies/refund-cancellation", label: "Refund & Cancellation" },
  { to: "/policies/disclaimer", label: "Disclaimer" },
  { to: "/policies/regulatory-disclosures", label: "Regulatory Disclosures" },
];

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="bg-[#1A2421] text-[#E5E3DB] mt-24">
      <div className="container-x py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand block */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="grid place-items-center w-10 h-10 border border-[#E5E3DB]/30 rounded-sm">
                <span className="font-display text-lg leading-none text-[#F9F8F6]">L</span>
              </span>
              <div className="leading-none">
                <div className="font-display text-xl text-[#F9F8F6]">Logix Finance</div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-[#E5E3DB]/60 mt-1">
                  & Investment
                </div>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-[#E5E3DB]/70 max-w-sm font-light">
              Simple, transparent and responsible lending across India. RBI compliant.
              Customer first. Built on trust.
            </p>

            <div className="mt-8 space-y-3 text-sm">
              <div className="flex items-start gap-3 text-[#E5E3DB]/80">
                <MapPin size={15} className="mt-0.5 shrink-0 text-[#B85C38]" />
                <span>
                  <X /> <X /> Road, <X />, <X /> – <X />, India
                </span>
              </div>
              <div className="flex items-center gap-3 text-[#E5E3DB]/80">
                <Phone size={15} className="text-[#B85C38]" />
                <span>+91 <X /></span>
              </div>
              <div className="flex items-center gap-3 text-[#E5E3DB]/80">
                <Mail size={15} className="text-[#B85C38]" />
                <span><X />@<X />.in</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <div className="overline text-[#E5E3DB]/60 mb-5">Explore</div>
            <ul className="space-y-3">
              {MAIN.map((m) => (
                <li key={m.to}>
                  <Link
                    to={m.to}
                    data-testid={`footer-${m.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm text-[#E5E3DB]/80 hover:text-[#B85C38] transition-colors"
                  >
                    {m.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies col A */}
          <div className="lg:col-span-3">
            <div className="overline text-[#E5E3DB]/60 mb-5">Regulatory</div>
            <ul className="space-y-3">
              {POLICIES_A.map((p) => (
                <li key={p.to}>
                  <Link to={p.to} className="text-sm text-[#E5E3DB]/80 hover:text-[#B85C38] transition-colors">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies col B */}
          <div className="lg:col-span-3">
            <div className="overline text-[#E5E3DB]/60 mb-5">Legal</div>
            <ul className="space-y-3">
              {POLICIES_B.map((p) => (
                <li key={p.to}>
                  <Link to={p.to} className="text-sm text-[#E5E3DB]/80 hover:text-[#B85C38] transition-colors">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rule bg-[#E5E3DB]/15 mt-16" />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 text-xs text-[#E5E3DB]/60">
          <div className="space-y-1">
            <div>
              <span className="text-[#E5E3DB]/40 uppercase tracking-[0.18em] text-[10px]">CIN</span>{" "}
              <X />
            </div>
            <div>
              <span className="text-[#E5E3DB]/40 uppercase tracking-[0.18em] text-[10px]">RBI Reg No.</span>{" "}
              <X />
            </div>
            <div>
              <span className="text-[#E5E3DB]/40 uppercase tracking-[0.18em] text-[10px]">GSTIN</span>{" "}
              <X />
            </div>
          </div>
          <div className="lg:text-center self-center">
            © <X>20xx</X> Logix Finance and Investment. All rights reserved.
          </div>
          <div className="lg:text-right self-center">
            <a
              href="#top"
              data-testid="back-to-top"
              className="inline-flex items-center gap-1 hover:text-[#B85C38] transition-colors"
            >
              Back to top <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
