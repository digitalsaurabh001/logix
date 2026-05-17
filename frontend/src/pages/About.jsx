import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Compass, HandHeart, ShieldCheck, Target } from "lucide-react";
import { X } from "../components/common/Placeholder";

const ABOUT_IMG =
  "https://static.prod-images.emergentagent.com/jobs/6dc6f6ad-591a-49d3-bbd1-f3910b642e2e/images/e08b24ae7987cb29c81e2b675f88a1bb2ea9ada17820bc1fe264f0fc7d62fcd3.png";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Transparency",
    body: "Every fee, every charge, every right — disclosed in writing before you sign.",
  },
  {
    icon: HandHeart,
    title: "Dignity",
    body: "Courteous communication and dignified recovery practices, always.",
  },
  {
    icon: Target,
    title: "Suitability",
    body: "Loans matched to the borrower's actual repayment capacity — not the maximum we can lend.",
  },
  {
    icon: Compass,
    title: "Accountability",
    body: "A clear grievance mechanism, with escalation to the RBI Ombudsman if needed.",
  },
];

const LEADERS = [
  { name: <X />, role: "Founder & Director", bio: "Experience: <X /> years" },
  { name: <X />, role: "Director", bio: "Experience: <X /> years" },
  { name: <X />, role: "Director", bio: "Experience: <X /> years" },
];

export default function About() {
  return (
    <main data-testid="about-page">
      {/* HERO */}
      <section className="border-b border-[#E5E3DB]">
        <div className="container-x pt-16 md:pt-20 pb-16 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <div className="overline text-[#B85C38]">About us</div>
              <h1 className="font-display font-light text-5xl sm:text-6xl lg:text-7xl tracking-[-0.025em] leading-[0.98] text-[#1A2421] mt-4">
                A finance company,
                <br />
                <em className="italic font-light">made for India.</em>
              </h1>
              <p className="mt-8 max-w-xl text-[15px] md:text-base leading-relaxed text-[#1A2421]/75">
                Logix Finance and Investment is a <X>NBFC / lending entity</X> registered
                with the Reserve Bank of India under <X>CIN xxxxxxxx · RBI Reg xxxxxxxx</X>.
                We provide responsible credit to individuals, small businesses and
                households across India.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="aspect-[5/6] bg-[#F3F1EC] border border-[#E5E3DB] rounded-sm overflow-hidden">
                <img src={ABOUT_IMG} alt="Architectural interlocking arches" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION / MISSION */}
      <section className="container-x py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6 border-l border-[#E5E3DB] pl-8">
            <div className="overline text-[#B85C38]">Our Vision</div>
            <h2 className="font-display text-3xl md:text-4xl font-light mt-3 text-[#1A2421] leading-tight">
              To make credit simple, fair and accessible — without compromising on
              compliance or dignity.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-[#1A2421]/75">
              We see formal credit as a tool for upward mobility for Indian households
              and small businesses — and we want our customers to leave each loan
              cycle better off than they began it.
            </p>
          </div>
          <div className="lg:col-span-6 border-l border-[#E5E3DB] pl-8">
            <div className="overline text-[#B85C38]">Our Mission</div>
            <h2 className="font-display text-3xl md:text-4xl font-light mt-3 text-[#1A2421] leading-tight">
              Responsible lending. Transparent terms. Customer-first service.
            </h2>
            <ul className="mt-5 space-y-2 text-[15px] text-[#1A2421]/80">
              <li>— Disclose every cost in a Key Fact Statement before signing.</li>
              <li>— Match products to actual repayment capacity.</li>
              <li>— Resolve grievances within published timelines.</li>
              <li>— Use customer data only with consent and for the stated purpose.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-white border-y border-[#E5E3DB]">
        <div className="container-x py-20 md:py-24">
          <div className="overline text-[#B85C38]">Core values</div>
          <h2 className="font-display font-light text-4xl md:text-5xl tracking-tight mt-3 text-[#1A2421] leading-tight max-w-3xl">
            Four commitments. Every loan. Every customer.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5E3DB] mt-12 border border-[#E5E3DB] rounded-sm overflow-hidden">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-white p-8">
                <v.icon size={20} className="text-[#B85C38]" />
                <h3 className="font-display text-2xl mt-6 font-medium text-[#1A2421]">{v.title}</h3>
                <p className="text-sm leading-relaxed text-[#1A2421]/70 mt-3">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="container-x py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-7">
            <div className="overline text-[#B85C38]">Leadership</div>
            <h2 className="font-display font-light text-4xl md:text-5xl tracking-tight mt-3 text-[#1A2421] leading-tight">
              The people behind the policy.
            </h2>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <p className="text-[15px] text-[#1A2421]/75 leading-relaxed">
              Our Board and senior management bring decades of combined experience in
              banking, NBFC operations, technology and risk management.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LEADERS.map((l, i) => (
            <div key={i} className="card-flat p-8" data-testid={`leader-${i}`}>
              <div className="aspect-[4/5] bg-[#F3F1EC] border border-[#E5E3DB] rounded-sm grid place-items-center">
                <span className="font-display text-6xl text-[#1A2421]/30">L</span>
              </div>
              <h3 className="font-display text-2xl mt-6 font-medium text-[#1A2421]">{l.name}</h3>
              <div className="text-xs uppercase tracking-[0.18em] text-[#B85C38] mt-1">{l.role}</div>
              <p className="text-sm leading-relaxed text-[#1A2421]/70 mt-4">
                <X>Brief professional background and prior experience to be added here. xxxxxxxx xxxxxxxx xxxxxxxx xxxxxxxx.</X>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPANY SNAPSHOT */}
      <section className="bg-[#1A2421] text-[#F9F8F6]">
        <div className="container-x py-20 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <div className="overline text-[#B85C38]">Company snapshot</div>
              <h2 className="font-display font-light text-4xl md:text-5xl mt-3 leading-tight">
                Identity, registered.
              </h2>
              <p className="mt-5 text-[#E5E3DB]/75 text-[15px] leading-relaxed">
                Verifiable details for partners, regulators and customers.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                ["Legal Entity", <X key="le" />],
                ["CIN", <X key="cin" />],
                ["RBI Registration", <X key="rbi" />],
                ["Category", <X key="cat">NBFC / LSP</X>],
                ["GSTIN", <X key="gst" />],
                ["Registered Office", <X key="ro" />],
                ["Corporate Office", <X key="co" />],
                ["Statutory Auditor", <X key="sa" />],
              ].map(([k, v]) => (
                <div key={k} className="pb-5 border-b border-[#E5E3DB]/15">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-[#E5E3DB]/50">{k}</div>
                  <div className="mt-2 text-[#F9F8F6]">{v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14">
            <Link to="/policies/regulatory-disclosures" className="inline-flex items-center gap-2 text-[#B85C38] hover:text-[#F9F8F6] transition-colors text-sm">
              View all regulatory disclosures <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
