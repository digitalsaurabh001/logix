import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, FileSignature, FileText, IndianRupee, KeyRound, ScrollText, ShieldCheck, UserCheck } from "lucide-react";
import { X } from "../components/common/Placeholder";

const STEPS = [
  { icon: FileText, t: "Apply Online", d: "Tell us the loan amount you need and share basic personal/business details. The application takes a few minutes." },
  { icon: UserCheck, t: "Identity & KYC", d: "Verify your identity using PAN and Aadhaar. Where required, we may complete additional video KYC as per RBI norms." },
  { icon: ShieldCheck, t: "Credit Assessment", d: "We assess your eligibility, repayment capacity and risk profile using your declared and bureau-reported information." },
  { icon: ScrollText, t: "Key Fact Statement (KFS)", d: "You receive a written KFS — APR, EMI schedule, all fees and your rights including the cooling-off period — before signing." },
  { icon: FileSignature, t: "Accept & e-Sign Agreement", d: "If you're comfortable with the terms, you accept and e-sign the loan agreement. A copy is shared on your registered email." },
  { icon: IndianRupee, t: "Loan Disbursal", d: "Funds are transferred directly to your bank account, typically within <X>xx</X> hours of successful execution." },
  { icon: KeyRound, t: "Repayment", d: "Repay through scheduled EMIs as per the agreement. You may prepay as per the prepayment policy. Recovery, if needed, follows the Fair Practices Code." },
];

export default function HowItWorks() {
  return (
    <main data-testid="how-it-works-page">
      {/* HERO */}
      <section className="border-b border-[#E5E3DB]">
        <div className="container-x pt-16 md:pt-20 pb-16 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <div className="overline text-[#B85C38]">How it works</div>
              <h1 className="font-display font-light text-5xl sm:text-6xl lg:text-7xl tracking-[-0.025em] leading-[0.98] mt-4 text-[#1A2421]">
                From application to disbursal,
                <br />
                <em className="italic font-light">always transparent.</em>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-[15px] text-[#1A2421]/75 leading-relaxed">
                A seven-step process designed for clarity, speed and your control —
                including a written Key Fact Statement and a cooling-off right that lets
                you exit the loan at minimal cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="container-x py-20 md:py-24">
        <div className="relative max-w-4xl mx-auto">
          {/* vertical line */}
          <div className="absolute left-[22px] md:left-[28px] top-2 bottom-2 w-px bg-[#E5E3DB]" />

          <ol className="space-y-12">
            {STEPS.map((s, i) => (
              <li key={s.t} data-testid={`step-${i}`} className="flex gap-6 md:gap-10 group">
                <div className="z-10 shrink-0 w-12 h-12 md:w-14 md:h-14 grid place-items-center bg-white border border-[#E5E3DB] rounded-sm transition-colors group-hover:border-[#B85C38]">
                  <s.icon size={18} className="text-[#1A2421] group-hover:text-[#B85C38] transition-colors" />
                </div>
                <div className="flex-1 pb-1">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="font-mono text-xs text-[#64746C]">0{i + 1}</span>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-[#64746C]">
                      {i === 6 ? "Ongoing" : `Step ${i + 1} of 7`}
                    </span>
                  </div>
                  <h3 className="font-display font-medium text-2xl md:text-3xl text-[#1A2421] tracking-tight">{s.t}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#1A2421]/75 max-w-2xl">
                    {s.d}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* COOLING OFF & KFS callouts */}
      <section className="bg-white border-y border-[#E5E3DB]">
        <div className="container-x py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E5E3DB] border border-[#E5E3DB] rounded-sm overflow-hidden">
            <div className="bg-white p-10">
              <div className="overline text-[#B85C38]">Right to exit</div>
              <h3 className="font-display text-3xl mt-3 text-[#1A2421] font-light tracking-tight">
                Cooling-off period of <X>xx</X> days.
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-[#1A2421]/75">
                Even after disbursal, you may exit the loan within the cooling-off
                window by repaying the principal and proportionate APR — without any
                prepayment penalty.
              </p>
            </div>
            <div className="bg-white p-10">
              <div className="overline text-[#B85C38]">Right to know</div>
              <h3 className="font-display text-3xl mt-3 text-[#1A2421] font-light tracking-tight">
                A written Key Fact Statement, every time.
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-[#1A2421]/75">
                APR, EMI schedule, processing fee, penal charges, prepayment terms and
                your grievance escalation path — disclosed before you sign. No surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-20 md:py-24 text-center">
        <h2 className="font-display font-light text-4xl md:text-5xl text-[#1A2421] tracking-tight leading-[1.05] max-w-3xl mx-auto">
          Ready when you are.
        </h2>
        <p className="mt-5 text-[15px] text-[#1A2421]/75 max-w-xl mx-auto">
          Start with a simple eligibility check. No paperwork. No commitment.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link to="/loan-products" className="btn-primary" data-testid="hiw-cta-products">
            See Loan Products <ArrowRight size={14} />
          </Link>
          <Link to="/contact" className="btn-outline" data-testid="hiw-cta-contact">
            Talk to Us
          </Link>
        </div>
      </section>
    </main>
  );
}
