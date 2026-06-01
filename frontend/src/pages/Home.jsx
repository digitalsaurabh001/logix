import React from "react";
import { Link } from "react-router-dom";
import { X } from "../components/common/Placeholder";

const PRODUCTS = [
  { title: "Pay Day Loan", amt: "₹5,000 – ₹1,00,000", ten: "7 days – 12 months", roi: "0.10% – 1.00% per day" },
  { title: "Business Loan", amt: "₹5,000 – ₹1,00,000", ten: "Up to 12 months", roi: "8% – 25% per annum" },
  { title: "Loan Against Property (LAP)", amt: "₹1,00,000 – ₹25,00,000", ten: "As per agreement", roi: "12% – 15% per annum" },
  { title: "EMI Loan", amt: "₹25,000 – ₹5,00,000", ten: "Up to 6 months", roi: "24% – 365% per annum" },
];

const NOTICES = [
  { d: <X>DD MMM YYYY</X>, t: "Updated Interest Rate Policy approved by Board.", to: "/policies/interest-rate-policy" },
  { d: <X>DD MMM YYYY</X>, t: "Revised Fair Practices Code published.", to: "/policies/fair-practices-code" },
  { d: <X>DD MMM YYYY</X>, t: "Grievance Redressal contact updated.", to: "/policies/grievance-redressal" },
  { d: <X>DD MMM YYYY</X>, t: "Privacy Policy updated.", to: "/policies/privacy-policy" },
];

export default function Home() {
  return (
    <main id="main-content" data-testid="home-page">
      <div className="gov-page-title">
        <div className="gov-container">
          <h1>Welcome to Logix Finance &amp; Investment Pvt Ltd</h1>
          <div className="crumb">
            <Link to="/">Home</Link> &raquo; <strong>Welcome</strong>
          </div>
        </div>
      </div>

      <div className="gov-container py-5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Sidebar */}
          <aside className="md:col-span-3">
            <div className="gov-side">
              <div className="head">About the Company</div>
              <ul>
                <li><Link to="/about">Company Profile</Link></li>
                <li><Link to="/about">Vision &amp; Mission</Link></li>
                <li><Link to="/about">Board of Directors</Link></li>
                <li><Link to="/policies/regulatory-disclosures">Regulatory Disclosures</Link></li>
              </ul>
            </div>

            <div className="gov-side mt-3">
              <div className="head">Loan Products</div>
              <ul>
                <li><Link to="/loan-products">Pay Day Loan</Link></li>
                <li><Link to="/loan-products">Business Loan</Link></li>
                <li><Link to="/loan-products">Loan Against Property</Link></li>
                <li><Link to="/loan-products">EMI Loan</Link></li>
              </ul>
            </div>

            <div className="gov-side mt-3">
              <div className="head">Customer Corner</div>
              <ul>
                <li><Link to="/how-it-works">How to Apply</Link></li>
                <li><Link to="/policies/rates-fees-charges">Rates, Fees &amp; Charges</Link></li>
                <li><Link to="/policies/grievance-redressal">File a Grievance</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
          </aside>

          {/* Main content */}
          <section className="md:col-span-9">
            {/* Hero photo + intro */}
            <div className="gov-box mb-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="md:col-span-2">
                  <h2 style={{ fontSize: 18, color: "#0B3D91", marginBottom: 8 }}>
                    About Logix Finance &amp; Investment Pvt Ltd
                  </h2>
                  <p>
                    Logix Finance &amp; Investment Private Limited is a Non-Banking Financial
                    Company (NBFC) registered with the Reserve Bank of India. The Company is
                    engaged in providing simple, transparent and responsible credit to
                    individuals, self-employed professionals, traders and small businesses
                    across India through Pay Day Loans, Business Loans, Loans Against Property
                    (LAP) and EMI Loans.
                  </p>
                  <p>
                    All lending activities are governed by the Company's Board-approved{" "}
                    <Link to="/policies/fair-practices-code">Fair Practices Code</Link>,{" "}
                    <Link to="/policies/interest-rate-policy">Interest Rate Policy</Link> and
                    the Reserve Bank of India's directions for NBFCs.
                  </p>
                  <p style={{ marginBottom: 0 }}>
                    <Link to="/about" className="gov-btn">Read more about us &raquo;</Link>
                    &nbsp;
                    <Link to="/loan-products" className="gov-btn outline">View loan products &raquo;</Link>
                  </p>
                </div>
                <div className="md:col-span-1">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=60"
                    alt="Office building"
                    style={{ width: "100%", height: "auto", border: "1px solid #d8d8d8" }}
                  />
                  <div style={{ fontSize: 11, color: "#666", marginTop: 4 }}>
                    Registered Office, <span className="ph">xxxxxxxx</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Loan products at a glance */}
            <div className="gov-box mb-4">
              <h2 style={{ fontSize: 17, color: "#0B3D91", marginBottom: 8 }}>
                Loan Products at a Glance
              </h2>
              <p style={{ fontSize: 13, color: "#444" }}>
                The interest rate ranges and tenures below are as per the Company's
                Board-approved Interest Rate Policy. Final rates applicable to a borrower
                are disclosed in the sanction letter and Key Fact Statement (KFS).
              </p>
              <table className="gov-table" data-testid="home-products-table">
                <thead>
                  <tr>
                    <th style={{ width: "5%" }}>Sl. No.</th>
                    <th>Product</th>
                    <th>Loan Amount</th>
                    <th>Tenure</th>
                    <th>Rate of Interest</th>
                    <th>Apply</th>
                  </tr>
                </thead>
                <tbody>
                  {PRODUCTS.map((p, i) => (
                    <tr key={p.title}>
                      <td>{i + 1}</td>
                      <td><strong>{p.title}</strong></td>
                      <td>{p.amt}</td>
                      <td>{p.ten}</td>
                      <td>{p.roi}</td>
                      <td><Link to="/loan-products">Details &raquo;</Link></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p style={{ fontSize: 12, color: "#555", marginTop: 4 }}>
                * Penal charges of 1.25% per day on outstanding principal apply on
                non-compliance of material loan terms. Refer to{" "}
                <Link to="/policies/interest-rate-policy">Interest Rate Policy</Link> for details.
              </p>
            </div>

            {/* Notices + Quick contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="gov-box">
                <div className="flex items-center justify-between" style={{ borderBottom: "1px solid #d8d8d8", paddingBottom: 6, marginBottom: 8 }}>
                  <h2 style={{ fontSize: 15, color: "#0B3D91" }}>What's New</h2>
                  <a href="#all-notices" style={{ fontSize: 12 }}>View All »</a>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 13 }}>
                  {NOTICES.map((n, i) => (
                    <li key={i} style={{ padding: "5px 0", borderBottom: "1px dotted #e0e0e0" }}>
                      <span style={{ background: "#ED6F12", color: "#fff", fontSize: 10, padding: "1px 5px", marginRight: 8 }}>NEW</span>
                      <span style={{ color: "#666", marginRight: 6 }}>[{n.d}]</span>
                      <Link to={n.to}>{n.t}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="gov-box">
                <h2 style={{ fontSize: 15, color: "#0B3D91", borderBottom: "1px solid #d8d8d8", paddingBottom: 6, marginBottom: 8 }}>
                  Customer Care &amp; Grievance
                </h2>
                <table className="gov-table">
                  <tbody>
                    <tr>
                      <td><strong>Customer Care</strong></td>
                      <td>879624245</td>
                    </tr>
                    <tr>
                      <td><strong>Grievance Email</strong></td>
                      <td>grievance@logixfinance&amp;investment.com</td>
                    </tr>
                    <tr>
                      <td><strong>General Email</strong></td>
                      <td>info@logixfinance&amp;investment.com</td>
                    </tr>
                    <tr>
                      <td><strong>Working Hours</strong></td>
                      <td>10:30 AM – 6:30 PM (Mon – Sat)</td>
                    </tr>
                  </tbody>
                </table>
                <p style={{ marginTop: 6, fontSize: 12, color: "#555" }}>
                  If your grievance is not resolved within 30 days, you may escalate to the
                  RBI Ombudsman via{" "}
                  <a href="https://cms.rbi.org.in" target="_blank" rel="noreferrer">cms.rbi.org.in</a>.
                </p>
              </div>
            </div>

            {/* Beware of Fraud */}
            <div className="gov-notice" data-testid="fraud-notice">
              <strong style={{ color: "#a05a00" }}>⚠ Beware of Fraud:</strong>{" "}
              Logix Finance &amp; Investment Pvt Ltd <u>never</u> asks for any advance fee,
              security deposit, OTP, PIN, debit/credit card or bank login credentials.
              Always verify communications using the official email{" "}
              <em>info@logixfinance&amp;investment.com</em> and phone <em>879624245</em>.
              Report fraud at{" "}
              <a href="https://cybercrime.gov.in" target="_blank" rel="noreferrer">cybercrime.gov.in</a>.
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
