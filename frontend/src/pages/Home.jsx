import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Scale,
  Wallet,
  FileText,
  Clock,
  Lock,
  Quote,
} from "lucide-react";
import { X } from "../components/common/Placeholder";

const HERO_IMG =
  "https://static.prod-images.emergentagent.com/jobs/6dc6f6ad-591a-49d3-bbd1-f3910b642e2e/images/318c8759b80541b7c2973698ba2aabfdbd4dd90edd4f82a9ec55a2e84ac59d3d.png";

const TRUST_IMG =
  "https://static.prod-images.emergentagent.com/jobs/6dc6f6ad-591a-49d3-bbd1-f3910b642e2e/images/ad2825225d641c440e278ece62c854e8d54a236b0d9ad95fbbdffeed1dbf8b59.png";

const PRODUCTS = [
  {
    title: "Personal Loan",
    desc: "For weddings, education, travel, medical needs and home improvement.",
    tag: "Individuals",
  },
  {
    title: "Business Loan",
    desc: "Working capital and growth funding for self-employed professionals, shopkeepers, traders and small enterprises.",
    tag: "MSME",
  },
  {
    title: "Consumer / EMI Finance",
    desc: "Spread the cost of appliances, electronics and durables across easy EMIs.",
    tag: "Retail",
  },
  {
    title: "Short-Term Loan",
    desc: "A small, short-tenure loan to bridge temporary cash-flow gaps with clear repayment.",
    tag: "Bridge",
  },
];

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "RBI Compliant",
    body: "We operate under the regulatory framework prescribed by the Reserve Bank of India.",
  },
  {
    icon: Scale,
    title: "Fair Practices Code",
    body: "Transparent terms, written communication and dignified recovery — always.",
  },
  {
    icon: Wallet,
    title: "Transparent Pricing",
    body: "Every fee, charge and APR is disclosed in the Key Fact Statement, before you sign.",
  },
  {
    icon: Lock,
    title: "Data Protection",
    body: "Need-based data collection. Encrypted storage. Clear consent. Your control.",
  },
];

export default function Home() {
  return (
    <div data-testid="home-page">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-x pt-16 md:pt-24 pb-16 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-8">
                <span className="badge-trust" data-testid="hero-trust-badge">
                  <ShieldCheck size={11} /> RBI Registered NBFC
                </span>
                <span className="text-xs text-[#64746C]">Built for India · Audit-ready</span>
              </div>

              <h1 className="font-display font-light text-5xl sm:text-6xl lg:text-7xl xl:text-[88px] tracking-[-0.025em] leading-[0.95] text-[#1A2421]">
                Lending,
                <br />
                <span className="italic font-light text-[#1A2421]/85">re-imagined</span> with
                <br />
                clarity.
              </h1>

              <p className="mt-8 max-w-xl text-[15px] md:text-base leading-relaxed text-[#1A2421]/75">
                Logix Finance and Investment offers simple, transparent and responsible
                credit across India — personal, business, consumer and short-term loans
                with every cost disclosed up-front in a Key Fact Statement.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link to="/loan-products" data-testid="hero-cta-primary" className="btn-primary">
                  Check Your Eligibility <ArrowRight size={15} />
                </Link>
                <Link to="/how-it-works" data-testid="hero-cta-secondary" className="btn-outline">
                  How It Works
                </Link>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-8 max-w-lg">
                <div>
                  <div className="font-display text-3xl md:text-4xl text-[#1A2421]">
                    <X>xx</X>+
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-[#64746C] mt-1">
                    Cities served
                  </div>
                </div>
                <div>
                  <div className="font-display text-3xl md:text-4xl text-[#1A2421]">
                    ₹<X>xx</X>Cr+
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-[#64746C] mt-1">
                    Disbursed
                  </div>
                </div>
                <div>
                  <div className="font-display text-3xl md:text-4xl text-[#1A2421]">
                    <X>xx</X>%
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-[#64746C] mt-1">
                    Customer NPS
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] bg-[#F3F1EC] border border-[#E5E3DB] rounded-sm overflow-hidden">
                <img
                  src={HERO_IMG}
                  alt="Modern corporate finance environment"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2421]/30 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#F9F8F6]/90 backdrop-blur-sm border border-[#E5E3DB] rounded-sm">
                  <div className="overline text-[#B85C38]">Promise</div>
                  <p className="mt-2 font-display text-xl md:text-2xl leading-snug text-[#1A2421]">
                    “Borrow responsibly. Live confidently.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="border-y border-[#E5E3DB] bg-white">
        <div className="container-x py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#E5E3DB]">
            {PILLARS.map((p, i) => (
              <div key={p.title} className="p-6 md:p-8 first:pt-6 md:first:pl-0 md:last:pr-0">
                <p.icon size={20} className="text-[#B85C38]" />
                <h3 className="font-display text-xl mt-5 text-[#1A2421] font-medium">{p.title}</h3>
                <p className="text-sm leading-relaxed text-[#1A2421]/70 mt-2">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="container-x py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-5">
            <div className="overline text-[#B85C38]">What we offer</div>
            <h2 className="font-display font-light text-4xl md:text-5xl tracking-tight mt-3 leading-[1.05] text-[#1A2421]">
              A loan for the
              <br />
              <em className="italic font-light">moment that matters.</em>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-[15px] leading-relaxed text-[#1A2421]/75">
              From a child's tuition to a new oven for the bakery — credit, properly
              priced and properly explained, can move a life forward. Our four loan
              products are designed for the realities of Indian households and small
              businesses.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E5E3DB] border border-[#E5E3DB] rounded-sm overflow-hidden">
          {PRODUCTS.map((p, i) => (
            <Link
              to="/loan-products"
              key={p.title}
              data-testid={`product-card-${i}`}
              className="group bg-white p-8 md:p-10 transition-colors hover:bg-[#F3F1EC]"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#64746C]">
                  0{i + 1} · {p.tag}
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-[#1A2421] group-hover:text-[#B85C38] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </div>
              <h3 className="font-display text-3xl md:text-4xl text-[#1A2421] mt-8 font-light tracking-tight">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#1A2421]/70 max-w-md">
                {p.desc}
              </p>
              <div className="mt-8 flex flex-wrap gap-4 text-xs text-[#64746C]">
                <span>Amount <span className="text-[#1A2421] font-medium">₹<X /> – ₹<X /></span></span>
                <span>Tenure <span className="text-[#1A2421] font-medium"><X /> months</span></span>
                <span>APR <span className="text-[#1A2421] font-medium"><X />%</span></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SPLIT — Trust */}
      <section className="bg-[#1A2421] text-[#F9F8F6]">
        <div className="container-x py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="aspect-square bg-[#2A3632] border border-[#E5E3DB]/10 rounded-sm overflow-hidden">
                <img
                  src={TRUST_IMG}
                  alt="Balanced stones — symbol of stability"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>
            <div className="lg:col-span-6 lg:pl-8">
              <div className="overline text-[#B85C38]">Why Logix</div>
              <h2 className="font-display font-light text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.02] mt-3">
                Balance, by design.
              </h2>
              <p className="mt-6 text-[#E5E3DB]/80 text-[15px] leading-relaxed max-w-lg">
                Every product, every page and every process here is built to a single
                standard: that of the Reserve Bank of India. We disclose what others
                don't, charge what we say we will, and treat borrowers with the dignity
                the regulator demands of us.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 max-w-lg">
                {[
                  { k: "RBI Registration", v: <X /> },
                  { k: "CIN", v: <X /> },
                  { k: "Founded", v: <X>20xx</X> },
                  { k: "Headquartered", v: <X /> },
                ].map((row) => (
                  <div key={row.k}>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[#E5E3DB]/50">
                      {row.k}
                    </div>
                    <div className="mt-1 text-[#F9F8F6]">{row.v}</div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link to="/about" className="inline-flex items-center gap-2 text-[#B85C38] hover:text-[#F9F8F6] transition-colors text-sm">
                  More about us <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS preview */}
      <section className="container-x py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-7">
            <div className="overline text-[#B85C38]">Process</div>
            <h2 className="font-display font-light text-4xl md:text-5xl tracking-tight mt-3 leading-[1.05] text-[#1A2421]">
              Seven small steps.
              <br />
              <em className="italic font-light">One transparent journey.</em>
            </h2>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <p className="text-[15px] leading-relaxed text-[#1A2421]/75">
              From basic details to disbursal, you'll always know what's happening, what
              it costs and what you can do — including your right to a cooling-off exit.
            </p>
          </div>
        </div>

        <ol className="relative max-w-3xl">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-[#E5E3DB]" />
          {[
            ["Apply Online", "Basic details and the loan amount you need."],
            ["Identity & KYC", "PAN, Aadhaar and the digital KYC essentials."],
            ["Credit Assessment", "We check your eligibility and repayment capacity."],
            ["Key Fact Statement", "Every rate, fee, EMI and right — disclosed up-front."],
            ["Accept & e-Sign", "Sign the agreement digitally. No paperwork queues."],
            ["Disbursal", "Funds transferred directly to your bank account."],
            ["Repayment", "Scheduled EMIs. Prepay anytime as per policy."],
          ].map(([t, d], i) => (
            <li key={t} className="flex gap-6 py-5 first:pt-2 border-b border-[#E5E3DB] last:border-0">
              <div className="z-10 shrink-0 w-10 h-10 grid place-items-center bg-[#F9F8F6] border border-[#E5E3DB] rounded-sm">
                <span className="font-mono text-[12px] text-[#1A2421]">0{i + 1}</span>
              </div>
              <div>
                <h4 className="font-display text-xl text-[#1A2421] font-medium">{t}</h4>
                <p className="text-sm text-[#1A2421]/70 mt-1">{d}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12">
          <Link to="/how-it-works" className="btn-outline" data-testid="home-howitworks-cta">
            Detailed process <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* QUOTE */}
      <section className="bg-[#F3F1EC] border-y border-[#E5E3DB]">
        <div className="container-narrow py-20 md:py-28 text-center">
          <Quote size={26} className="text-[#B85C38] mx-auto" />
          <blockquote className="font-display text-3xl md:text-5xl leading-[1.15] tracking-tight text-[#1A2421] mt-6 font-light">
            “We believe credit is a relationship, not a transaction.
            <br className="hidden md:block" />
            And every relationship starts with telling the
            <em className="italic"> truth, plainly.</em>”
          </blockquote>
          <div className="mt-8 text-xs uppercase tracking-[0.22em] text-[#64746C]">
            <X /> — Founder, Logix Finance and Investment
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="container-x py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <h2 className="font-display font-light text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.02] text-[#1A2421]">
              Have a question?
              <br />
              <em className="italic">We will answer it.</em>
            </h2>
            <p className="mt-6 text-[15px] text-[#1A2421]/75 max-w-xl">
              Reach our customer service team or our designated Grievance Redressal
              Officer. We respond within published timelines and escalate where
              required, including to the RBI Ombudsman.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="card-flat p-8">
              <div className="flex items-start gap-4">
                <Clock size={20} className="text-[#B85C38] mt-1" />
                <div>
                  <div className="overline text-[#64746C]">Working hours</div>
                  <div className="mt-1 text-[#1A2421] text-sm">
                    <X>Mon–Sat · 10:00 AM – 6:00 PM</X>
                  </div>
                </div>
              </div>
              <div className="rule my-6" />
              <div className="flex items-start gap-4">
                <FileText size={20} className="text-[#B85C38] mt-1" />
                <div>
                  <div className="overline text-[#64746C]">Grievance Officer</div>
                  <div className="mt-1 text-[#1A2421] text-sm">
                    <X /> · +91 <X />
                  </div>
                </div>
              </div>
              <Link to="/contact" className="btn-primary mt-8 w-full justify-center" data-testid="home-contact-cta">
                Contact Us <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
