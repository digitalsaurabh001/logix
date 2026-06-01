import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Target, HeartHandshake, Award, ArrowRight, CheckCircle2 } from "lucide-react";
import { X } from "../components/common/Placeholder";

const ABOUT_IMG = "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=900&q=70";

const VALUES = [
  { icon: ShieldCheck, t: "Transparency", d: "Clear disclosure of all rates, fees and charges — before you sign." },
  { icon: HeartHandshake, t: "Customer Dignity", d: "Respectful, courteous service at every stage of the relationship." },
  { icon: Award, t: "Compliance", d: "Strict adherence to RBI directions and the Fair Practices Code." },
  { icon: Target, t: "Responsibility", d: "Loans matched to assessed repayment capacity — not the maximum we can lend." },
];

export default function About() {
  return (
    <main id="main-content" data-testid="about-page">
      {/* HERO */}
      <section className="hero-bg">
        <div className="container-x py-14 md:py-20">
          <div className="text-xs uppercase tracking-[0.18em] text-[#F58220] font-semibold mb-3">
            <Link to="/" className="text-white/80 hover:text-[#F58220]">Home</Link>
            <span className="mx-2 opacity-50">/</span>
            About Us
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white max-w-3xl" style={{ fontFamily: "Poppins" }}>
            About Logix Finance &amp; Investment
          </h1>
          <p className="mt-4 text-[#cfd6e6] max-w-2xl">
            A Non-Banking Financial Company (NBFC) committed to simple, transparent and
            responsible lending across India.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="section">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <img src={ABOUT_IMG} alt="Indian office team meeting" className="w-full rounded-xl shadow-md"
                style={{ maxHeight: 460, objectFit: "cover" }} />
            </div>
            <div className="lg:col-span-6">
              <div className="eyebrow">Who We Are</div>
              <h2 className="section-title mt-2">A Trusted NBFC Built for India</h2>
              <p className="mt-5 text-[#5b6479] leading-relaxed">
                Logix Finance &amp; Investment Private Limited is a Non-Banking Financial
                Company registered with the Reserve Bank of India. The Company is
                engaged in providing simple, transparent and responsible credit to
                individuals, self-employed professionals, traders, shopkeepers and
                small businesses across India.
              </p>
              <p className="text-[#5b6479] leading-relaxed">
                Our lending operations are conducted primarily through digital
                platforms in compliance with the Reserve Bank of India's directions
                for Non-Banking Financial Companies, including the Master Direction –
                Reserve Bank of India (Non-Banking Financial Companies – Responsible
                Business Conduct) Directions, 2025.
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  "RBI Registered NBFC",
                  "Board-approved Fair Practices Code",
                  "Transparent Key Fact Statement before every loan",
                  "3-day Free Look / Cooling-Off Period",
                ].map((x) => (
                  <li key={x} className="flex items-start gap-3 text-[15px] text-[#2b2f3a]">
                    <CheckCircle2 size={18} className="text-[#F58220] mt-0.5 shrink-0" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="section section-light">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-feature">
              <div className="icon-circle accent">
                <Target size={26} />
              </div>
              <h3 className="text-xl font-bold mt-5 text-[#133e8a]" style={{ fontFamily: "Poppins" }}>Our Vision</h3>
              <p className="text-[#5b6479] mt-3 leading-relaxed">
                To make formal credit simple, fair and accessible to every Indian
                household and small business — without compromising on compliance,
                transparency or customer dignity.
              </p>
            </div>
            <div className="card-feature">
              <div className="icon-circle">
                <Award size={26} />
              </div>
              <h3 className="text-xl font-bold mt-5 text-[#133e8a]" style={{ fontFamily: "Poppins" }}>Our Mission</h3>
              <ul className="text-[#5b6479] mt-3 leading-relaxed space-y-2 text-[14.5px]">
                <li>• Provide transparent loan terms through written sanction letters and KFS.</li>
                <li>• Adopt responsible lending based on assessed repayment capacity.</li>
                <li>• Maintain ethical, lawful and fair recovery practices.</li>
                <li>• Ensure complete compliance with RBI directions.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="eyebrow">Core Values</div>
            <h2 className="section-title mt-2">What We Stand For</h2>
            <p className="section-sub mx-auto">
              Four commitments that guide every loan we sanction and every customer interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v) => (
              <div key={v.t} className="card-feature">
                <div className="icon-circle">
                  <v.icon size={26} />
                </div>
                <h3 className="text-lg font-bold mt-5 text-[#133e8a]" style={{ fontFamily: "Poppins" }}>{v.t}</h3>
                <p className="text-sm text-[#5b6479] mt-2 leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY INFO */}
      <section className="section section-light">
        <div className="container-x">
          <div className="eyebrow">Statutory Identity</div>
          <h2 className="section-title mt-2 mb-8">Company Information</h2>

          <div className="card-soft p-0 overflow-hidden">
            <table className="gov-table" style={{ margin: 0 }}>
              <tbody>
                <tr><td style={{ width: "35%" }}><strong>Legal Entity Name</strong></td><td>Logix Finance &amp; Investment Private Limited</td></tr>
                <tr><td><strong>Corporate Identity Number (CIN)</strong></td><td><X /></td></tr>
                <tr><td><strong>RBI Certificate of Registration No.</strong></td><td><X /></td></tr>
                <tr><td><strong>Category of Registration</strong></td><td><X>NBFC – Non-Deposit Taking</X></td></tr>
                <tr><td><strong>GSTIN</strong></td><td><X /></td></tr>
                <tr><td><strong>Registered Office</strong></td><td><X />, <X />, <X /> – <X />, India</td></tr>
                <tr><td><strong>Corporate Office</strong></td><td><X />, <X />, <X /> – <X />, India</td></tr>
                <tr><td><strong>Customer Care</strong></td><td>879624245</td></tr>
                <tr><td><strong>Email</strong></td><td>info@logixfinance&amp;investment.com</td></tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8">
            <Link to="/policies/regulatory-disclosures" className="btn btn-primary">
              View All Regulatory Disclosures <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
