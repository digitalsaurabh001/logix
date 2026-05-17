import React, { useState } from "react";
import { Building2, Mail, MapPin, Phone, Clock, ShieldAlert, Send } from "lucide-react";
import { X } from "../components/common/Placeholder";

const SUBJECTS = ["General enquiry", "Personal Loan", "Business Loan", "Consumer / EMI Finance", "Short-Term Loan", "Grievance / Complaint", "Other"];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
    subject: SUBJECTS[0],
    message: "",
    consent: false,
  });
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <main data-testid="contact-page">
      {/* HERO */}
      <section className="border-b border-[#E5E3DB]">
        <div className="container-x pt-16 md:pt-20 pb-16">
          <div className="overline text-[#B85C38]">Contact us</div>
          <h1 className="font-display font-light text-5xl sm:text-6xl lg:text-7xl tracking-[-0.025em] leading-[0.98] mt-4 text-[#1A2421] max-w-3xl">
            We'd love to <em className="italic">hear from you.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-[15px] md:text-base leading-relaxed text-[#1A2421]/75">
            For product enquiries, application help, repayment support or grievance
            redressal — our team is available during working hours. For escalations,
            please refer to the Grievance Redressal Mechanism.
          </p>
        </div>
      </section>

      {/* DETAILS GRID */}
      <section className="container-x py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: contact cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="card-flat p-8">
              <Building2 size={20} className="text-[#B85C38]" />
              <div className="overline text-[#64746C] mt-5">Registered Office</div>
              <p className="mt-2 text-[#1A2421] text-[15px] leading-relaxed">
                <X /> Road, <X />,<br />
                <X /> – <X />,<br />
                <X /> State, India.
              </p>
            </div>

            <div className="card-flat p-8">
              <MapPin size={20} className="text-[#B85C38]" />
              <div className="overline text-[#64746C] mt-5">Corporate / Operations Office</div>
              <p className="mt-2 text-[#1A2421] text-[15px] leading-relaxed">
                <X /> Road, <X />,<br />
                <X /> – <X />,<br />
                <X /> State, India.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="card-flat p-7">
                <Phone size={18} className="text-[#B85C38]" />
                <div className="overline text-[#64746C] mt-4">Customer Care</div>
                <p className="mt-2 text-[#1A2421] text-[15px]">+91 <X /></p>
              </div>
              <div className="card-flat p-7">
                <Mail size={18} className="text-[#B85C38]" />
                <div className="overline text-[#64746C] mt-4">Email</div>
                <p className="mt-2 text-[#1A2421] text-[15px] break-all"><X />@<X />.in</p>
              </div>
            </div>

            <div className="card-flat p-8 bg-[#F3F1EC]">
              <ShieldAlert size={20} className="text-[#B85C38]" />
              <div className="overline text-[#64746C] mt-5">Grievance Redressal Officer</div>
              <p className="mt-3 text-[#1A2421] text-[15px] leading-relaxed">
                Name: <X /><br />
                Phone: +91 <X /><br />
                Email: <X />@<X />.in
              </p>
              <p className="mt-3 text-xs text-[#1A2421]/70">
                Unresolved complaints may be escalated as per our Grievance Redressal
                Mechanism, including to the RBI Ombudsman.
              </p>
            </div>

            <div className="card-flat p-7">
              <Clock size={18} className="text-[#B85C38]" />
              <div className="overline text-[#64746C] mt-4">Working Hours</div>
              <p className="mt-2 text-[#1A2421] text-[15px]"><X>Mon–Sat · 10:00 AM – 6:00 PM (IST)</X></p>
              <p className="text-xs text-[#1A2421]/60 mt-1">Closed on national holidays.</p>
            </div>
          </div>

          {/* Right: enquiry form */}
          <div className="lg:col-span-7">
            <div className="card-flat p-8 md:p-10">
              <div className="overline text-[#B85C38]">Enquiry form</div>
              <h2 className="font-display text-3xl md:text-4xl font-light mt-3 text-[#1A2421] tracking-tight">
                Tell us how we can help.
              </h2>
              <p className="mt-3 text-sm text-[#1A2421]/70">
                Our team will respond within <X>xx</X> business hours.
              </p>

              <form onSubmit={onSubmit} className="mt-8 space-y-5" data-testid="enquiry-form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field id="name" label="Full Name" type="text" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
                  <Field id="mobile" label="Mobile Number" type="tel" value={form.mobile} onChange={(v) => setForm({ ...form, mobile: v })} required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field id="email" label="Email Address" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
                  <Field id="city" label="City" type="text" value={form.city} onChange={(v) => setForm({ ...form, city: v })} required />
                </div>

                <div>
                  <label htmlFor="subject" className="overline text-[#64746C] block mb-2">Subject</label>
                  <select
                    id="subject"
                    data-testid="enquiry-subject"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full bg-white border border-[#E5E3DB] rounded-sm px-4 py-3 text-[15px] text-[#1A2421] focus:outline-none focus:border-[#1A2421] transition-colors"
                  >
                    {SUBJECTS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="overline text-[#64746C] block mb-2">Message</label>
                  <textarea
                    id="message"
                    data-testid="enquiry-message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    className="w-full bg-white border border-[#E5E3DB] rounded-sm px-4 py-3 text-[15px] text-[#1A2421] focus:outline-none focus:border-[#1A2421] transition-colors resize-none"
                    placeholder="Tell us a bit about your enquiry…"
                  />
                </div>

                <label className="flex items-start gap-3 text-xs text-[#1A2421]/75 cursor-pointer" data-testid="enquiry-consent-label">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                    required
                    data-testid="enquiry-consent"
                    className="mt-0.5 accent-[#1A2421]"
                  />
                  <span>
                    I consent to Logix Finance and Investment contacting me regarding this
                    enquiry. I have read the <a href="/policies/privacy-policy" className="text-[#B85C38] underline underline-offset-2">Privacy Policy</a> and <a href="/policies/terms-conditions" className="text-[#B85C38] underline underline-offset-2">Terms & Conditions</a>.
                  </span>
                </label>

                <button type="submit" data-testid="enquiry-submit" disabled={!form.consent} className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed">
                  Submit Enquiry <Send size={14} />
                </button>

                {sent && (
                  <div className="text-sm text-[#1A2421] bg-[#B85C38]/10 border border-[#B85C38]/30 rounded-sm px-4 py-3 mt-2" data-testid="enquiry-success">
                    Thank you. Your enquiry has been received. We will respond within working hours.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="container-x pb-20">
        <div className="overline text-[#B85C38] mb-4">Find us</div>
        <div className="aspect-[21/9] w-full bg-[#F3F1EC] border border-[#E5E3DB] rounded-sm grid place-items-center text-center" data-testid="map-placeholder">
          <div>
            <MapPin size={28} className="text-[#B85C38] mx-auto" />
            <p className="mt-4 font-display text-2xl text-[#1A2421] font-light">Embedded Google Map</p>
            <p className="mt-1 text-sm text-[#64746C]">
              Map for <X /> office to be embedded here.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function Field({ id, label, type, value, onChange, required }) {
  return (
    <div>
      <label htmlFor={id} className="overline text-[#64746C] block mb-2">
        {label}
      </label>
      <input
        id={id}
        data-testid={`enquiry-${id}`}
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white border border-[#E5E3DB] rounded-sm px-4 py-3 text-[15px] text-[#1A2421] focus:outline-none focus:border-[#1A2421] transition-colors"
      />
    </div>
  );
}
