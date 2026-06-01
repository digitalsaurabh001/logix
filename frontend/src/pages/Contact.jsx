import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 6000);
  };

  return (
    <main id="main-content" data-testid="contact-page">
      <div className="gov-page-title">
        <div className="gov-container">
          <h1>Contact Us</h1>
          <div className="crumb"><Link to="/">Home</Link> &raquo; <strong>Contact Us</strong></div>
        </div>
      </div>

      <div className="gov-container py-5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          <aside className="md:col-span-4">
            <div className="gov-side">
              <div className="head">Contact Information</div>
              <ul>
                <li><a href="#registered">Registered Office</a></li>
                <li><a href="#corporate">Corporate Office</a></li>
                <li><a href="#care">Customer Care</a></li>
                <li><a href="#grievance">Grievance Officer</a></li>
                <li><a href="#enquiry">Enquiry Form</a></li>
              </ul>
            </div>

            <div className="gov-box mt-3">
              <h2 style={{ fontSize: 14, color: "#0B3D91", marginBottom: 6 }}>Quick Contact</h2>
              <table className="gov-table">
                <tbody>
                  <tr><td><strong>Phone</strong></td><td>879624245</td></tr>
                  <tr><td><strong>Email</strong></td><td style={{ wordBreak: "break-all" }}>info@logixfinance&amp;investment.com</td></tr>
                  <tr><td><strong>Grievance</strong></td><td style={{ wordBreak: "break-all" }}>grievance@logixfinance&amp;investment.com</td></tr>
                  <tr><td><strong>Working Hours</strong></td><td>10:30 AM – 6:30 PM</td></tr>
                </tbody>
              </table>
            </div>
          </aside>

          <section className="md:col-span-8">
            <div className="gov-box mb-4" id="registered">
              <h2 style={{ fontSize: 17, color: "#0B3D91", marginBottom: 6 }}>Registered Office</h2>
              <p style={{ fontSize: 13 }}>
                <X />, <X />, <X /> – <X />,<br />
                <X /> State, India.
              </p>
            </div>

            <div className="gov-box mb-4" id="corporate">
              <h2 style={{ fontSize: 17, color: "#0B3D91", marginBottom: 6 }}>Corporate / Operations Office</h2>
              <p style={{ fontSize: 13 }}>
                <X />, <X />, <X /> – <X />,<br />
                <X /> State, India.
              </p>
            </div>

            <div className="gov-box mb-4" id="care">
              <h2 style={{ fontSize: 17, color: "#0B3D91", marginBottom: 6 }}>Customer Care</h2>
              <table className="gov-table">
                <tbody>
                  <tr><td style={{ width: "30%" }}><strong>Phone</strong></td><td>879624245</td></tr>
                  <tr><td><strong>Email</strong></td><td>info@logixfinance&amp;investment.com</td></tr>
                  <tr><td><strong>Working Hours</strong></td><td>10:30 AM – 6:30 PM (Monday to Saturday)</td></tr>
                </tbody>
              </table>
            </div>

            <div className="gov-box mb-4" id="grievance">
              <h2 style={{ fontSize: 17, color: "#0B3D91", marginBottom: 6 }}>Grievance Redressal Officer</h2>
              <table className="gov-table">
                <tbody>
                  <tr><td style={{ width: "30%" }}><strong>Name</strong></td><td><X /></td></tr>
                  <tr><td><strong>Designation</strong></td><td>Grievance Redressal Officer</td></tr>
                  <tr><td><strong>Phone</strong></td><td>879624245</td></tr>
                  <tr><td><strong>Email</strong></td><td>grievance@logixfinance&amp;investment.com</td></tr>
                  <tr><td><strong>Address</strong></td><td><X /></td></tr>
                </tbody>
              </table>
              <p style={{ marginTop: 8, fontSize: 12 }}>
                For the complete escalation matrix, please refer to{" "}
                <Link to="/policies/grievance-redressal">Grievance Redressal Mechanism</Link>.
              </p>
            </div>

            <div className="gov-box" id="enquiry">
              <h2 style={{ fontSize: 17, color: "#0B3D91", marginBottom: 6 }}>Enquiry Form</h2>
              <p style={{ fontSize: 12, color: "#555" }}>
                Fields marked <span className="req">*</span> are mandatory.
              </p>
              <form onSubmit={submit} data-testid="enquiry-form">
                <table className="gov-table">
                  <tbody>
                    <tr>
                      <td style={{ width: "30%" }}><label className="gov-label" htmlFor="name">Full Name <span className="req">*</span></label></td>
                      <td>
                        <input id="name" data-testid="enquiry-name" required type="text" className="gov-input"
                          value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                      </td>
                    </tr>
                    <tr>
                      <td><label className="gov-label" htmlFor="mobile">Mobile Number <span className="req">*</span></label></td>
                      <td>
                        <input id="mobile" data-testid="enquiry-mobile" required type="tel" className="gov-input"
                          value={form.mobile} onChange={(e) => setForm({ ...form, mobile: e.target.value })} />
                      </td>
                    </tr>
                    <tr>
                      <td><label className="gov-label" htmlFor="email">Email <span className="req">*</span></label></td>
                      <td>
                        <input id="email" data-testid="enquiry-email" required type="email" className="gov-input"
                          value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                      </td>
                    </tr>
                    <tr>
                      <td><label className="gov-label" htmlFor="city">City <span className="req">*</span></label></td>
                      <td>
                        <input id="city" data-testid="enquiry-city" required type="text" className="gov-input"
                          value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
                      </td>
                    </tr>
                    <tr>
                      <td><label className="gov-label" htmlFor="subject">Subject <span className="req">*</span></label></td>
                      <td>
                        <select id="subject" data-testid="enquiry-subject" className="gov-select"
                          value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}>
                          {SUBJECTS.map((s) => <option key={s}>{s}</option>)}
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ verticalAlign: "top" }}><label className="gov-label" htmlFor="message">Message <span className="req">*</span></label></td>
                      <td>
                        <textarea id="message" data-testid="enquiry-message" required rows={5} className="gov-textarea"
                          value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>
                        <label style={{ fontSize: 12 }}>
                          <input type="checkbox" required data-testid="enquiry-consent"
                            checked={form.consent} onChange={(e) => setForm({ ...form, consent: e.target.checked })} />
                          &nbsp; I have read and agree to the{" "}
                          <Link to="/policies/privacy-policy">Privacy Policy</Link> and{" "}
                          <Link to="/policies/terms-conditions">Terms &amp; Conditions</Link>.
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>
                        <button type="submit" data-testid="enquiry-submit" className="gov-btn" disabled={!form.consent}
                          style={{ opacity: form.consent ? 1 : 0.5, cursor: form.consent ? "pointer" : "not-allowed" }}>
                          Submit Enquiry
                        </button>
                        &nbsp;
                        <button type="reset" data-testid="enquiry-reset" className="gov-btn outline"
                          onClick={() => setForm({ name: "", mobile: "", email: "", city: "", subject: SUBJECTS[0], message: "", consent: false })}>
                          Reset
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
              {sent && (
                <div className="gov-notice mt-3" data-testid="enquiry-success">
                  <strong>Thank you.</strong> Your enquiry has been received. Our team will
                  respond within working hours.
                </div>
              )}
            </div>

            <div className="gov-box mt-4" data-testid="map-placeholder">
              <h2 style={{ fontSize: 15, color: "#0B3D91", marginBottom: 6 }}>Location Map</h2>
              <div style={{
                border: "1px solid #d8d8d8",
                background: "#f0f0f0",
                height: 240,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 13,
                color: "#666",
              }}>
                Google Map for <X /> office to be embedded here.
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
