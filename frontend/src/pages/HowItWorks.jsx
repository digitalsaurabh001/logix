import React from "react";
import { Link } from "react-router-dom";
import { Smartphone, UserCheck, ShieldCheck, FileText, FileSignature, Wallet, KeyRound, ArrowRight } from "lucide-react";

const STEPS = [
  { icon: Smartphone, t: "Apply Online", d: "Submit your loan application online with basic personal/business details and the amount you need. Application takes only a few minutes." },
  { icon: UserCheck, t: "Identity & KYC", d: "Verify your identity using PAN and Aadhaar. Where required, we may complete digital or video KYC as per RBI norms." },
  { icon: ShieldCheck, t: "Credit Assessment", d: "We assess your eligibility, repayment capacity and risk profile using your declared and bureau-reported information." },
  { icon: FileText, t: "Key Fact Statement", d: "You receive a written KFS — APR, EMI schedule, all fees and your rights including the cooling-off period — before signing." },
  { icon: FileSignature, t: "Accept & e-Sign", d: "If you are comfortable with the terms, you accept and e-sign the loan agreement. A copy is shared on your registered email." },
  { icon: Wallet, t: "Loan Disbursal", d: "Funds are transferred directly to your bank account, typically within 24 hours of successful execution." },
  { icon: KeyRound, t: "Repayment", d: "Repay through scheduled EMIs as per the agreement. Recovery, if required, follows the Fair Practices Code." },
];

export default function HowItWorks() {
  return (
    <main id="main-content" data-testid="how-it-works-page">
      {/* HERO */}
      <section className="hero-bg">
        <div className="container-x py-14 md:py-20">
          <div className="text-xs uppercase tracking-[0.18em] text-[#F58220] font-semibold mb-3">
            <Link to="/" className="text-white/80 hover:text-[#F58220]">Home</Link>
            <span className="mx-2 opacity-50">/</span>How It Works
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white max-w-3xl" style={{ fontFamily: "Poppins" }}>
            Simple and Hassle-Free Loan Process
          </h1>
          <p className="mt-4 text-[#cfd6e6] max-w-2xl">
            From application to disbursal — fully digital, fully transparent. Here's
            how it works.
          </p>
        </div>
      </section>

      {/* STEPS */}
      <section className="section">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {STEPS.map((s, i) => (
              <div key={s.t} data-testid={`step-${i}`} className="card-feature relative">
                <div className="absolute top-5 right-5 text-5xl font-extrabold text-[#f0f3f9]"
                  style={{ fontFamily: "Poppins" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="icon-circle">
                  <s.icon size={28} />
                </div>
                <h3 className="text-lg font-bold mt-5 text-[#133e8a]" style={{ fontFamily: "Poppins" }}>{s.t}</h3>
                <p className="text-sm text-[#5b6479] mt-2 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DUAL CALLOUTS */}
      <section className="section section-light">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-feature">
              <div className="eyebrow">Right to Exit</div>
              <h3 className="text-xl font-bold mt-3 text-[#133e8a]" style={{ fontFamily: "Poppins" }}>
                3-Day Free Look / Cooling-Off Period
              </h3>
              <p className="text-[#5b6479] mt-3 leading-relaxed">
                You may exit the loan within 3 days of disbursement by repaying the
                principal and applicable charges. No prepayment penalty is charged
                during this period.
              </p>
            </div>
            <div className="card-feature">
              <div className="eyebrow">Right to Know</div>
              <h3 className="text-xl font-bold mt-3 text-[#133e8a]" style={{ fontFamily: "Poppins" }}>
                Written Key Fact Statement
              </h3>
              <p className="text-[#5b6479] mt-3 leading-relaxed">
                APR, EMI schedule, processing fee, penal charges, prepayment terms and
                grievance escalation — disclosed in writing before you sign.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-x text-center">
          <h2 className="section-title">Ready to Apply?</h2>
          <p className="section-sub mx-auto">
            Start with a simple eligibility check. No paperwork. No commitment.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Link to="/loan-products" className="btn btn-primary" data-testid="hiw-cta-products">
              See Loan Products <ArrowRight size={14} />
            </Link>
            <Link to="/contact" className="btn btn-outline" data-testid="hiw-cta-contact">
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
