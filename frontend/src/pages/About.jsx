import React from "react";
import { Link } from "react-router-dom";
import { X } from "../components/common/Placeholder";

export default function About() {
  return (
    <main id="main-content" data-testid="about-page">
      <div className="gov-page-title">
        <div className="gov-container">
          <h1>About Us</h1>
          <div className="crumb"><Link to="/">Home</Link> &raquo; <strong>About Us</strong></div>
        </div>
      </div>

      <div className="gov-container py-5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          <aside className="md:col-span-3">
            <div className="gov-side">
              <div className="head">About the Company</div>
              <ul>
                <li><a href="#profile" className="active">Company Profile</a></li>
                <li><a href="#vision">Vision &amp; Mission</a></li>
                <li><a href="#values">Core Values</a></li>
                <li><a href="#board">Board of Directors</a></li>
                <li><a href="#identity">Statutory Identity</a></li>
              </ul>
            </div>
          </aside>

          <article className="md:col-span-9">
            <div className="gov-box">
              <div className="gov-content">
                <section id="profile">
                  <h2>Company Profile</h2>
                  <p>
                    <strong>Logix Finance &amp; Investment Private Limited</strong> is a
                    Non-Banking Financial Company (NBFC) registered with the Reserve Bank of
                    India. The Company is engaged in providing simple, transparent and
                    responsible credit to individuals, self-employed professionals,
                    traders, shopkeepers and small businesses across India.
                  </p>
                  <p>
                    Our lending operations are conducted primarily through digital
                    platforms in compliance with the Reserve Bank of India's directions
                    for Non-Banking Financial Companies, including the Master Direction –
                    Reserve Bank of India (Non-Banking Financial Companies – Responsible
                    Business Conduct) Directions, 2025.
                  </p>
                </section>

                <section id="vision">
                  <h2>Vision &amp; Mission</h2>
                  <h3>Vision</h3>
                  <p>
                    To make formal credit simple, fair and accessible to every Indian
                    household and small business, without compromising on compliance,
                    transparency or customer dignity.
                  </p>
                  <h3>Mission</h3>
                  <ul>
                    <li>Provide transparent loan terms through written sanction letters and Key Fact Statements.</li>
                    <li>Adopt responsible lending practices based on assessed repayment capacity.</li>
                    <li>Maintain ethical, lawful and fair recovery practices in line with the Fair Practices Code.</li>
                    <li>Ensure complete compliance with RBI directions and the laws applicable to NBFCs.</li>
                  </ul>
                </section>

                <section id="values">
                  <h2>Core Values</h2>
                  <table className="gov-table">
                    <tbody>
                      <tr><td style={{ width: "25%" }}><strong>Transparency</strong></td><td>Clear disclosure of interest rates, processing fees, penal charges and all material terms before loan execution.</td></tr>
                      <tr><td><strong>Customer Dignity</strong></td><td>Borrowers are treated with respect at every stage, including during recovery proceedings.</td></tr>
                      <tr><td><strong>Compliance</strong></td><td>Strict adherence to RBI directions, the Fair Practices Code and applicable laws.</td></tr>
                      <tr><td><strong>Confidentiality</strong></td><td>Customer information is handled in accordance with the Company's Privacy Policy.</td></tr>
                    </tbody>
                  </table>
                </section>

                <section id="board">
                  <h2>Board of Directors</h2>
                  <p>
                    The Company is governed by a Board of Directors which is responsible
                    for the approval and periodic review of all key policies including the
                    Fair Practices Code, Interest Rate Policy, KYC &amp; AML Policy and
                    Grievance Redressal Mechanism.
                  </p>
                  <table className="gov-table">
                    <thead>
                      <tr><th>Sl. No.</th><th>Name</th><th>Designation</th><th>DIN</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>1</td><td><X /></td><td>Director</td><td><X /></td></tr>
                      <tr><td>2</td><td><X /></td><td>Director</td><td><X /></td></tr>
                      <tr><td>3</td><td><X /></td><td>Director</td><td><X /></td></tr>
                      <tr><td>4</td><td><X /></td><td>Compliance Officer</td><td><X /></td></tr>
                    </tbody>
                  </table>
                </section>

                <section id="identity">
                  <h2>Statutory Identity</h2>
                  <table className="gov-table">
                    <tbody>
                      <tr><td style={{ width: "35%" }}><strong>Legal Entity Name</strong></td><td>Logix Finance &amp; Investment Private Limited</td></tr>
                      <tr><td><strong>Corporate Identity Number (CIN)</strong></td><td><X /></td></tr>
                      <tr><td><strong>RBI Certificate of Registration No.</strong></td><td><X /></td></tr>
                      <tr><td><strong>Category of Registration</strong></td><td><X>NBFC – Non-Deposit Taking</X></td></tr>
                      <tr><td><strong>GSTIN</strong></td><td><X /></td></tr>
                      <tr><td><strong>Registered Office</strong></td><td><X />, <X />, <X /> – <X />, India</td></tr>
                      <tr><td><strong>Corporate Office</strong></td><td><X />, <X />, <X /> – <X />, India</td></tr>
                      <tr><td><strong>Statutory Auditor</strong></td><td><X /></td></tr>
                      <tr><td><strong>Customer Care</strong></td><td>879624245</td></tr>
                      <tr><td><strong>Email</strong></td><td>info@logixfinance&amp;investment.com</td></tr>
                    </tbody>
                  </table>
                </section>
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
