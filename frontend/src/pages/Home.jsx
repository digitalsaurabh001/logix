import React from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2, Zap, ShieldCheck, BadgePercent, FileCheck, Users,
  ArrowRight, Smartphone, CreditCard, FileSignature, Wallet, ClipboardCheck,
  TrendingUp, Building2, HeartHandshake, Globe2, ChevronRight,
} from "lucide-react";

const HERO_IMG = "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=900&q=70";
const ABOUT_IMG = "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=70";

const HERO_FEATURES = [
  "Fast Approvals — funds within 24 hours",
  "Affordable Rates with no hidden charges",
  "Minimal Documentation, digital onboarding",
  "High Approval Rate even with limited credit history",
];

const PRODUCTS = [
  {
    icon: Wallet,
    title: "Pay Day Loan",
    desc: "Short-tenure unsecured loan to bridge a temporary cash-flow gap until your next pay cycle.",
    range: "₹5,000 – ₹1,00,000",
    tenure: "7 days – 12 months",
  },
  {
    icon: Building2,
    title: "Business Loan",
    desc: "Working capital and growth funding for self-employed professionals, shopkeepers and small businesses.",
    range: "₹5,000 – ₹1,00,000",
    tenure: "Up to 12 months",
  },
  {
    icon: TrendingUp,
    title: "Loan Against Property",
    desc: "Secured loan against residential or commercial property for personal or business needs.",
    range: "₹1,00,000 – ₹25,00,000",
    tenure: "As per agreement",
  },
  {
    icon: CreditCard,
    title: "EMI Loan",
    desc: "Short-tenure loan repayable in equated monthly instalments for personal financial needs.",
    range: "₹25,000 – ₹5,00,000",
    tenure: "Up to 6 months",
  },
];

const STEPS = [
  { icon: Smartphone, t: "Apply Online", d: "Submit your application online with basic details. Approval in seconds." },
  { icon: FileCheck, t: "Verify Documents", d: "We verify your identity, PAN and Aadhaar through secure digital channels." },
  { icon: FileSignature, t: "Sign Digitally", d: "Review the Key Fact Statement and sign the loan agreement digitally." },
  { icon: Zap, t: "Get Disbursal", d: "Funds are credited to your registered bank account within 24 hours." },
];

const WHY = [
  { icon: Zap, t: "Swift Approvals", d: "Streamlined application and approval — get funds when you need them most." },
  { icon: BadgePercent, t: "Transparent Pricing", d: "No hidden fees. Every rate and charge is disclosed in your Key Fact Statement." },
  { icon: ShieldCheck, t: "RBI Compliant", d: "We operate strictly under the regulatory framework of the Reserve Bank of India." },
  { icon: ClipboardCheck, t: "Minimal Paperwork", d: "100% digital onboarding with PAN/Aadhaar based eKYC." },
  { icon: Users, t: "High Acceptance", d: "Your credit score is one factor — we look at your overall financial standing." },
  { icon: HeartHandshake, t: "Customer First", d: "Dignified, courteous service — including during recovery, as per our Fair Practices Code." },
];

export default function Home() {
  return (
    <main id="main-content" data-testid="home-page">
      {/* HERO */}
      <section className="hero-bg">
        <div className="container-x py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="eyebrow text-[#F58220] mb-3">RBI-Registered NBFC</div>
              <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold leading-[1.1] text-white" style={{ fontFamily: "Poppins" }}>
                Short Term Instant Loans &amp; Flexible Credit Lines
              </h1>
              <p className="mt-5 text-lg text-[#cfd6e6] max-w-xl">
                Your value extends beyond your credit score. Simple, transparent and
                responsible credit for individuals, professionals and small businesses
                across India.
              </p>

              <ul className="mt-7 space-y-2.5">
                {HERO_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[15px] text-white/95">
                    <CheckCircle2 size={20} className="text-[#F58220] mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/loan-products" data-testid="hero-cta-primary" className="btn btn-accent">
                  Apply Now <ArrowRight size={16} />
                </Link>
                <Link to="/about" data-testid="hero-cta-secondary" className="btn btn-outline-white">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <img
                  src={HERO_IMG}
                  alt="Indian professional with tablet"
                  className="w-full rounded-xl object-cover"
                  style={{ aspectRatio: "4/5", maxHeight: 540 }}
                />
                <div className="absolute -bottom-5 -left-5 bg-white text-[#133e8a] rounded-xl p-4 shadow-lg hidden md:block">
                  <div className="text-3xl font-extrabold" style={{ fontFamily: "Poppins" }}>24 Hrs</div>
                  <div className="text-xs uppercase tracking-wide font-semibold text-[#5b6479]">Quick Disbursal</div>
                </div>
                <div className="absolute -top-5 -right-5 bg-[#F58220] text-white rounded-xl p-4 shadow-lg hidden md:block">
                  <div className="text-3xl font-extrabold" style={{ fontFamily: "Poppins" }}>100%</div>
                  <div className="text-xs uppercase tracking-wide font-semibold">Digital</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS strip */}
      <section className="bg-white border-b border-[#e6e9f0]">
        <div className="container-x py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { n: "1500+", l: "Customers Empowered" },
              { n: "₹40Cr+", l: "Loans Disbursed" },
              { n: "10+", l: "Cities Covered" },
              { n: "99%", l: "Customer Satisfaction" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="stat-num text-[#133e8a]">{s.n}</div>
                <div className="stat-label">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section section-light">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="eyebrow">Simple Process</div>
            <h2 className="section-title mt-2">Fast, Simple, and Stress-Free Loans</h2>
            <p className="section-sub mx-auto">
              Get the funds you need in four easy steps — fully digital, fully transparent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {STEPS.map((s, i) => (
              <div key={s.t} data-testid={`step-${i}`} className="card-feature text-center relative">
                <div className="absolute -top-3 -right-3 w-9 h-9 bg-[#F58220] text-white rounded-full grid place-items-center font-bold text-sm"
                  style={{ fontFamily: "Poppins" }}>
                  {i + 1}
                </div>
                <div className="icon-circle mx-auto">
                  <s.icon size={28} />
                </div>
                <h3 className="text-lg font-bold mt-5 text-[#133e8a]" style={{ fontFamily: "Poppins" }}>{s.t}</h3>
                <p className="text-sm text-[#5b6479] mt-2 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOAN PRODUCTS */}
      <section className="section">
        <div className="container-x">
          <div className="md:flex md:items-end md:justify-between mb-10">
            <div>
              <div className="eyebrow">What We Offer</div>
              <h2 className="section-title mt-2">Our Loan Products</h2>
              <p className="section-sub">
                Tailored credit solutions for individuals, professionals and small businesses.
              </p>
            </div>
            <Link to="/loan-products" className="btn btn-outline mt-5 md:mt-0">
              View All <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PRODUCTS.map((p, i) => (
              <Link to="/loan-products" key={p.title} data-testid={`product-card-${i}`} className="card-feature no-underline group">
                <div className="icon-circle accent">
                  <p.icon size={26} />
                </div>
                <h3 className="text-lg font-bold mt-5 text-[#133e8a]" style={{ fontFamily: "Poppins" }}>{p.title}</h3>
                <p className="text-sm text-[#5b6479] mt-2 leading-relaxed">{p.desc}</p>

                <div className="mt-5 pt-4 border-t border-[#e6e9f0] text-xs space-y-1.5">
                  <div className="flex justify-between"><span className="text-[#5b6479]">Amount</span><span className="font-semibold text-[#133e8a]">{p.range}</span></div>
                  <div className="flex justify-between"><span className="text-[#5b6479]">Tenure</span><span className="font-semibold text-[#133e8a]">{p.tenure}</span></div>
                </div>

                <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#F58220] group-hover:gap-2 transition-all">
                  Know More <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT split */}
      <section className="section section-light">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <img
                src={ABOUT_IMG}
                alt="Business professionals at office"
                className="w-full rounded-xl shadow-md"
                style={{ maxHeight: 460, objectFit: "cover" }}
              />
            </div>
            <div className="lg:col-span-6">
              <div className="eyebrow">About Us</div>
              <h2 className="section-title mt-2">
                Empowering Your Financial Future
              </h2>
              <p className="mt-5 text-[#5b6479] leading-relaxed">
                Logix Finance &amp; Investment Private Limited is a Non-Banking Financial
                Company (NBFC) registered with the Reserve Bank of India. We specialise
                in delivering innovative, flexible and accessible financial solutions
                designed to meet the diverse needs of individuals, professionals and
                small businesses across India.
              </p>
              <p className="text-[#5b6479] leading-relaxed">
                With a strong focus on customer satisfaction, transparency and ethical
                practices, we aim to be your preferred financial partner — whether it
                is for personal aspirations, business growth, or emergency funding.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <ShieldCheck size={20} className="text-[#F58220] mt-1" />
                  <div>
                    <div className="font-semibold text-[#133e8a]" style={{ fontFamily: "Poppins" }}>RBI Compliant</div>
                    <div className="text-xs text-[#5b6479]">Registered NBFC</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe2 size={20} className="text-[#F58220] mt-1" />
                  <div>
                    <div className="font-semibold text-[#133e8a]" style={{ fontFamily: "Poppins" }}>Pan India</div>
                    <div className="text-xs text-[#5b6479]">Across cities</div>
                  </div>
                </div>
              </div>

              <Link to="/about" className="btn btn-primary mt-8">
                Learn More About Us <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="eyebrow">Why Choose Us</div>
            <h2 className="section-title mt-2">Why Choose Logix Finance?</h2>
            <p className="section-sub mx-auto">
              Experience the difference with our customer-centric approach and innovative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY.map((w) => (
              <div key={w.t} className="card-feature">
                <div className="icon-circle">
                  <w.icon size={26} />
                </div>
                <h3 className="text-lg font-bold mt-5 text-[#133e8a]" style={{ fontFamily: "Poppins" }}>{w.t}</h3>
                <p className="text-sm text-[#5b6479] mt-2 leading-relaxed">{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="hero-bg">
        <div className="container-x py-14 md:py-16">
          <div className="md:flex items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "Poppins" }}>
                Get Started Today
              </h2>
              <p className="mt-3 text-[#cfd6e6] max-w-xl">
                Apply online in just a few clicks or speak with our loan experts to
                explore the right option for you.
              </p>
            </div>
            <div className="mt-6 md:mt-0 flex flex-wrap gap-3">
              <Link to="/loan-products" className="btn btn-accent" data-testid="home-cta-apply">
                Apply Online <ArrowRight size={15} />
              </Link>
              <Link to="/contact" className="btn btn-outline-white" data-testid="home-cta-contact">
                Speak with Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
