import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Send, ShieldAlert, Building2 } from "lucide-react";
import { X } from "../components/common/Placeholder";

const SUBJECTS = [
  "General Enquiry",
  "Pay Day Loan",
  "Business Loan",
  "Loan Against Property (LAP)",
  "EMI Loan",
  "Grievance / Complaint",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "", mobile: "", email: "", city: "", subject: SUBJECTS[0], message: "", consent: false,
  });
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const submit = async (e) => {
    e.preventDefault();
    setStatus({ state: "sending", message: "Sending your enquiry..." });
    try {
      const res = await fetch("/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setStatus({ state: "success", message: data.message || "Your enquiry has been received." });
        setForm({ name: "", mobile: "", email: "", city: "", subject: SUBJECTS[0], message: "", consent: false });
      } else {
        const err = data.error || (data.errors && data.errors.join(" ")) || "We could not send your enquiry. Please call 879624245 or email us directly.";
        setStatus({ state: "error", message: err });
      }
    } catch (err) {
      setStatus({
        state: "error",
        message: "Network error — please call 879624245 or email info@logixfinance&investment.com.",
      });
    }
    setTimeout(() => setStatus((s) => (s.state === "success" ? { state: "idle", message: "" } : s)), 8000);
  };

  return (
    <main id="main-content" data-testid="contact-page">
      {/* HERO */}
      <section className="hero-bg">
        <div className="container-x py-14 md:py-20">
          <div className="text-xs uppercase tracking-[0.18em] text-[#F58220] font-semibold mb-3">
            <Link to="/" className="text-white/80 hover:text-[#F58220]">Home</Link>
            <span className="mx-2 opacity-50">/</span>Contact Us
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white max-w-3xl" style={{ fontFamily: "Poppins" }}>
            Get in Touch
          </h1>
          <p className="mt-4 text-[#cfd6e6] max-w-2xl">
            For product enquiries, application help, repayment support or grievance
            redressal — our team is here during working hours.
          </p>
        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section className="section">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="card-feature">
              <div className="icon-circle"><Phone size={24} /></div>
              <h3 className="text-base font-bold mt-4 text-[#133e8a]" style={{ fontFamily: "Poppins" }}>Phone</h3>
              <p className="text-sm text-[#5b6479] mt-1.5">879624245</p>
            </div>
            <div className="card-feature">
              <div className="icon-circle accent"><Mail size={24} /></div>
              <h3 className="text-base font-bold mt-4 text-[#133e8a]" style={{ fontFamily: "Poppins" }}>Email</h3>
              <p className="text-sm text-[#5b6479] mt-1.5 break-all">info@logixfinance&amp;investment.com</p>
            </div>
            <div className="card-feature">
              <div className="icon-circle"><Clock size={24} /></div>
              <h3 className="text-base font-bold mt-4 text-[#133e8a]" style={{ fontFamily: "Poppins" }}>Working Hours</h3>
              <p className="text-sm text-[#5b6479] mt-1.5">10:30 AM – 6:30 PM<br />Monday to Saturday</p>
            </div>
            <div className="card-feature">
              <div className="icon-circle accent"><ShieldAlert size={24} /></div>
              <h3 className="text-base font-bold mt-4 text-[#133e8a]" style={{ fontFamily: "Poppins" }}>Grievance</h3>
              <p className="text-sm text-[#5b6479] mt-1.5 break-all">grievance@logixfinance&amp;investment.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* OFFICES + FORM */}
      <section className="section section-light">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Offices */}
            <div className="lg:col-span-5 space-y-5">
              <div className="card-soft">
                <div className="flex items-center gap-3">
                  <Building2 size={20} className="text-[#F58220]" />
                  <h3 className="text-base font-bold text-[#133e8a]" style={{ fontFamily: "Poppins" }}>Registered Office</h3>
                </div>
                <p className="mt-3 text-sm text-[#5b6479] leading-relaxed mb-0">
                  <X />, <X />,<br /><X /> – <X />,<br /><X /> State, India.
                </p>
              </div>

              <div className="card-soft">
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-[#F58220]" />
                  <h3 className="text-base font-bold text-[#133e8a]" style={{ fontFamily: "Poppins" }}>Corporate Office</h3>
                </div>
                <p className="mt-3 text-sm text-[#5b6479] leading-relaxed mb-0">
                  <X />, <X />,<br /><X /> – <X />,<br /><X /> State, India.
                </p>
              </div>

              <div className="card-soft" style={{ background: "#fff7e9", borderColor: "#f4d3b3" }}>
                <div className="flex items-center gap-3">
                  <ShieldAlert size={20} className="text-[#8a5b00]" />
                  <h3 className="text-base font-bold text-[#8a5b00]" style={{ fontFamily: "Poppins" }}>Grievance Redressal Officer</h3>
                </div>
                <p className="mt-3 text-sm text-[#5b6479] leading-relaxed mb-0">
                  Name: <X /><br />
                  Phone: 879624245<br />
                  Email: grievance@logixfinance&amp;investment.com
                </p>
                <p className="text-xs text-[#5b6479] mt-3 mb-0">
                  For escalation procedure, see{" "}
                  <Link to="/policies/grievance-redressal">Grievance Redressal Mechanism</Link>.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="card-soft">
                <div className="eyebrow">Enquiry Form</div>
                <h2 className="text-2xl md:text-3xl font-bold mt-2 text-[#133e8a]" style={{ fontFamily: "Poppins" }}>
                  Tell Us How We Can Help
                </h2>
                <p className="text-sm text-[#5b6479] mt-2">Our team will respond within working hours.</p>

                <form onSubmit={submit} data-testid="enquiry-form" className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="field-label" htmlFor="name">Full Name *</label>
                      <input id="name" data-testid="enquiry-name" required type="text" className="field-input"
                        value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div>
                      <label className="field-label" htmlFor="mobile">Mobile Number *</label>
                      <input id="mobile" data-testid="enquiry-mobile" required type="tel" className="field-input"
                        value={form.mobile} onChange={(e) => setForm({ ...form, mobile: e.target.value })} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="field-label" htmlFor="email">Email *</label>
                      <input id="email" data-testid="enquiry-email" required type="email" className="field-input"
                        value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                    </div>
                    <div>
                      <label className="field-label" htmlFor="city">City *</label>
                      <input id="city" data-testid="enquiry-city" required type="text" className="field-input"
                        value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
                    </div>
                  </div>
                  <div>
                    <label className="field-label" htmlFor="subject">Subject</label>
                    <select id="subject" data-testid="enquiry-subject" className="field-input"
                      value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}>
                      {SUBJECTS.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="field-label" htmlFor="message">Message *</label>
                    <textarea id="message" data-testid="enquiry-message" required rows={5} className="field-input"
                      value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                  </div>
                  <label className="flex items-start gap-2.5 text-xs text-[#5b6479] cursor-pointer">
                    <input type="checkbox" required data-testid="enquiry-consent" className="mt-0.5"
                      checked={form.consent} onChange={(e) => setForm({ ...form, consent: e.target.checked })} />
                    <span>
                      I consent to Logix Finance contacting me. I have read the{" "}
                      <Link to="/policies/privacy-policy">Privacy Policy</Link> and{" "}
                      <Link to="/policies/terms-conditions">Terms &amp; Conditions</Link>.
                    </span>
                  </label>
                  <button type="submit" data-testid="enquiry-submit"
                    disabled={!form.consent || status.state === "sending"}
                    className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed">
                    {status.state === "sending" ? "Sending..." : (<>Submit Enquiry <Send size={14} /></>)}
                  </button>

                  {status.state === "success" && (
                    <div className="card-soft" style={{ background: "#e7f7ed", borderColor: "#bfe5cc" }} data-testid="enquiry-success">
                      <strong className="text-[#1f7a3a]">Thank you!</strong>{" "}
                      <span className="text-sm text-[#2b2f3a]">{status.message}</span>
                    </div>
                  )}
                  {status.state === "error" && (
                    <div className="card-soft" style={{ background: "#fdecea", borderColor: "#f5c2c0" }} data-testid="enquiry-error">
                      <strong className="text-[#b00020]">Could not send.</strong>{" "}
                      <span className="text-sm text-[#2b2f3a]">{status.message}</span>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP placeholder */}
      <section className="section">
        <div className="container-x">
          <div className="eyebrow mb-3">Find Us</div>
          <div className="card-soft p-0 overflow-hidden" data-testid="map-placeholder">
            <div style={{
              height: 320,
              background: "linear-gradient(135deg, #eef2fb 0%, #f7faff 100%)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <div className="text-center">
                <MapPin size={32} className="text-[#F58220] mx-auto" />
                <p className="mt-3 font-bold text-[#133e8a]" style={{ fontFamily: "Poppins" }}>
                  Embedded Google Map
                </p>
                <p className="text-sm text-[#5b6479] mt-1">
                  Map for the <X /> office will be embedded here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
