import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, User, ShoppingBag, Zap, Check } from "lucide-react";
import { X } from "../components/common/Placeholder";

const PRODUCTS = [
  {
    icon: User,
    title: "Personal Loan",
    purpose: "For weddings, education, travel, medical emergencies or home improvement.",
    amount: <X />,
    tenure: <X />,
    rate: <X />,
    apr: <X />,
    fee: <X />,
    eligibility: [
      "Indian resident, 21–60 years",
      "Salaried or self-employed with stable income",
      "Valid PAN and Aadhaar",
      "Active bank account",
    ],
    docs: ["PAN card", "Aadhaar card", "Latest bank statements", "Latest income proof (salary slip / ITR)", "Address proof"],
  },
  {
    icon: Briefcase,
    title: "Business Loan",
    purpose: "Working capital and growth funding for self-employed professionals, shopkeepers, traders and small enterprises.",
    amount: <X />,
    tenure: <X />,
    rate: <X />,
    apr: <X />,
    fee: <X />,
    eligibility: [
      "Business vintage: <X /> months minimum",
      "Indian resident proprietor / partner / director",
      "Active current account",
      "Filed ITR or audited statements",
    ],
    docs: ["Business registration / GST", "PAN of entity & promoter", "Latest 12 months bank statements", "ITRs and financials", "Address proof"],
  },
  {
    icon: ShoppingBag,
    title: "Consumer / EMI Finance",
    purpose: "Spread the cost of appliances, electronics and durables across easy EMIs at the point of purchase.",
    amount: <X />,
    tenure: <X />,
    rate: <X />,
    apr: <X />,
    fee: <X />,
    eligibility: [
      "Indian resident, 21+",
      "Valid KYC documents",
      "Minimum monthly income: ₹<X />",
      "Active bank account or UPI",
    ],
    docs: ["PAN card", "Aadhaar card", "Bank account / UPI", "Address proof"],
  },
  {
    icon: Zap,
    title: "Short-Term Loan",
    purpose: "A small, short-tenure loan to bridge a temporary cash-flow gap with clear repayment.",
    amount: <X />,
    tenure: <X />,
    rate: <X />,
    apr: <X />,
    fee: <X />,
    eligibility: [
      "Indian resident, 21+",
      "Active bank account",
      "Valid PAN and Aadhaar",
      "Steady source of income",
    ],
    docs: ["PAN card", "Aadhaar card", "Latest bank statements", "Address proof"],
  },
];

export default function LoanProducts() {
  return (
    <main data-testid="loan-products-page">
      {/* HERO */}
      <section className="border-b border-[#E5E3DB]">
        <div className="container-x pt-16 md:pt-20 pb-16">
          <div className="overline text-[#B85C38]">Loan products</div>
          <h1 className="font-display font-light text-5xl sm:text-6xl lg:text-7xl tracking-[-0.025em] leading-[0.98] mt-4 text-[#1A2421] max-w-4xl">
            Four products. <em className="italic">One standard</em> of clarity.
          </h1>
          <p className="mt-8 max-w-2xl text-[15px] md:text-base leading-relaxed text-[#1A2421]/75">
            All loan products are governed by our Interest Rate Policy, Fair Practices
            Code and the regulatory framework of the Reserve Bank of India. The Annual
            Percentage Rate (APR) and all fees are disclosed in the Key Fact Statement
            before you sign.
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="container-x py-16 md:py-20 space-y-12">
        {PRODUCTS.map((p, i) => (
          <article
            key={p.title}
            data-testid={`product-${i}`}
            className="bg-white border border-[#E5E3DB] rounded-sm p-8 md:p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left: Title + purpose */}
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3">
                  <span className="w-11 h-11 grid place-items-center bg-[#F3F1EC] border border-[#E5E3DB] rounded-sm">
                    <p.icon size={18} className="text-[#B85C38]" />
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#64746C]">
                    Product 0{i + 1}
                  </span>
                </div>
                <h2 className="font-display font-light text-4xl md:text-5xl mt-6 text-[#1A2421] tracking-tight leading-[1.05]">
                  {p.title}
                </h2>
                <p className="mt-5 text-[15px] text-[#1A2421]/75 leading-relaxed max-w-md">
                  {p.purpose}
                </p>

                <Link to="/contact" className="btn-primary mt-8" data-testid={`product-apply-${i}`}>
                  Check Eligibility <ArrowRight size={14} />
                </Link>
              </div>

              {/* Right: Specs + Eligibility + Docs */}
              <div className="lg:col-span-7 lg:border-l lg:border-[#E5E3DB] lg:pl-10">
                <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                  {[
                    ["Loan Amount", <span key="amt">₹{p.amount}</span>],
                    ["Tenure", <span key="ten">{p.tenure} months</span>],
                    ["Interest Rate", <span key="rt">{p.rate}% p.a.</span>],
                    ["Representative APR", <span key="apr">{p.apr}%</span>],
                    ["Processing Fee", <span key="pf">{p.fee}% + GST</span>],
                    ["Disbursal", <span key="ds">Within <X>xx</X> hours</span>],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <div className="text-[10px] uppercase tracking-[0.22em] text-[#64746C]">{k}</div>
                      <div className="mt-1.5 text-[#1A2421] text-[15px]">{v}</div>
                    </div>
                  ))}
                </div>

                <div className="rule my-8" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="overline text-[#B85C38] mb-3">Eligibility</div>
                    <ul className="space-y-2">
                      {p.eligibility.map((e, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-[14px] text-[#1A2421]/85">
                          <Check size={14} className="text-[#B85C38] mt-1 shrink-0" />
                          <span>{e}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="overline text-[#B85C38] mb-3">Documents</div>
                    <ul className="space-y-2">
                      {p.docs.map((d, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-[14px] text-[#1A2421]/85">
                          <Check size={14} className="text-[#B85C38] mt-1 shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* DISCLOSURE BAR */}
      <section className="bg-[#F3F1EC] border-y border-[#E5E3DB]">
        <div className="container-x py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="overline text-[#B85C38] mb-2">Cooling-off period</div>
              <p className="text-sm text-[#1A2421]/85 leading-relaxed">
                You may exit the loan within <X>xx</X> days of disbursal by repaying
                principal and proportionate APR — without any prepayment penalty.
              </p>
            </div>
            <div>
              <div className="overline text-[#B85C38] mb-2">Key Fact Statement</div>
              <p className="text-sm text-[#1A2421]/85 leading-relaxed">
                Every borrower receives a written KFS before execution disclosing the
                APR, EMI, all fees and rights — in English and a regional language where
                applicable.
              </p>
            </div>
            <div>
              <div className="overline text-[#B85C38] mb-2">Responsible lending</div>
              <p className="text-sm text-[#1A2421]/85 leading-relaxed">
                Loans are sanctioned based on assessed repayment capacity. Refer to our
                Interest Rate Policy & Fair Practices Code for details.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/policies/rates-fees-charges" className="btn-outline">
              Rates, Fees & Charges
            </Link>
            <Link to="/policies/interest-rate-policy" className="btn-outline">
              Interest Rate Policy
            </Link>
            <Link to="/policies/fair-practices-code" className="btn-outline">
              Fair Practices Code
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
