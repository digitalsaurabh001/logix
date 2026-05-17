import React from "react";
import PolicyLayout from "../../components/common/PolicyLayout";
import { X } from "../../components/common/Placeholder";
import { Phone, Mail, ShieldAlert, ChevronRight } from "lucide-react";

const TOC = [
  { id: "principles", label: "Our Principles" },
  { id: "escalation", label: "3-Level Escalation Matrix" },
  { id: "level-1", label: "Level 1 — Customer Service" },
  { id: "level-2", label: "Level 2 — Grievance Officer" },
  { id: "level-3", label: "Level 3 — RBI Ombudsman" },
  { id: "modes", label: "Modes of Communication" },
];

export default function GrievanceRedressal() {
  return (
    <PolicyLayout
      title="Grievance Redressal Mechanism"
      intro="A clear, time-bound, three-level escalation matrix to ensure every customer concern is heard, acknowledged and resolved."
      toc={TOC}
    >
      <section id="principles">
        <h2>1. Our Principles</h2>
        <ul>
          <li>Every complaint will be acknowledged within <X>xx</X> working hours.</li>
          <li>Resolution will be attempted within <X>xx</X> working days of receipt.</li>
          <li>Escalation paths are published and a designated officer is identified at each level.</li>
          <li>No customer will be penalised for raising a grievance in good faith.</li>
        </ul>
      </section>

      <section id="escalation">
        <h2>2. 3-Level Escalation Matrix</h2>
        <div className="not-prose grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          {[
            { l: "Level 1", t: "Customer Service", body: "Reach our customer service team for all initial queries and complaints.", sla: "Resolved within xx business days" },
            { l: "Level 2", t: "Grievance Redressal Officer", body: "If unresolved or unsatisfactory, escalate to our Grievance Redressal Officer.", sla: "Resolved within xx business days" },
            { l: "Level 3", t: "RBI Ombudsman", body: "If still unresolved after 30 days, you may approach the RBI Ombudsman.", sla: "As per RBI guidelines" },
          ].map((s, i) => (
            <div key={s.l} className="bg-white border border-[#E5E3DB] rounded-sm p-6">
              <div className="text-[10px] uppercase tracking-[0.22em] text-[#B85C38]">{s.l}</div>
              <div className="font-display text-2xl mt-2 text-[#1A2421] font-medium">{s.t}</div>
              <p className="text-sm text-[#1A2421]/75 mt-3 leading-relaxed">{s.body}</p>
              <div className="mt-4 text-xs text-[#64746C] uppercase tracking-[0.14em]">{s.sla}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="level-1">
        <h2>3. Level 1 — Customer Service</h2>
        <p>
          For any query or complaint, please first contact our Customer Service team:
        </p>
        <ul>
          <li><strong>Phone:</strong> +91 <X /></li>
          <li><strong>Email:</strong> <X />@<X />.in</li>
          <li><strong>Hours:</strong> <X>Mon–Sat · 10:00 AM – 6:00 PM (IST)</X></li>
        </ul>
        <p>
          You will receive an acknowledgement reference number for tracking. Most
          queries are resolved at this level within published timelines.
        </p>
      </section>

      <section id="level-2">
        <h2>4. Level 2 — Grievance Redressal Officer</h2>
        <p>
          If your complaint is not resolved to your satisfaction at Level 1, or you do
          not receive a response within the published time, you may escalate to our
          designated Grievance Redressal Officer:
        </p>
        <ul>
          <li><strong>Name:</strong> <X /></li>
          <li><strong>Designation:</strong> Grievance Redressal Officer</li>
          <li><strong>Phone:</strong> +91 <X /></li>
          <li><strong>Email:</strong> <X />@<X />.in</li>
          <li><strong>Address:</strong> <X /></li>
        </ul>
      </section>

      <section id="level-3">
        <h2>5. Level 3 — RBI Ombudsman</h2>
        <p>
          If your complaint remains unresolved 30 days after escalation to the
          Grievance Redressal Officer, or if you are not satisfied with the response,
          you may approach the Reserve Bank of India under the Integrated Ombudsman
          Scheme:
        </p>
        <ul>
          <li>Online: <a href="https://cms.rbi.org.in" target="_blank" rel="noreferrer">https://cms.rbi.org.in</a></li>
          <li>Toll-free: 14448</li>
          <li>By post: Centralised Receipt and Processing Centre, Reserve Bank of India, 4th Floor, Sector 17, Chandigarh – 160017.</li>
        </ul>
      </section>

      <section id="modes">
        <h2>6. Modes of Communication</h2>
        <p>
          You may raise a grievance through any of the following modes — phone, email,
          our website's enquiry form, or written letter to our office address. Where
          you provide an email address or phone number, we will use it to update you on
          the status of your complaint.
        </p>
      </section>
    </PolicyLayout>
  );
}
