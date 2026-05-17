import React from "react";
import PolicyLayout from "../../components/common/PolicyLayout";
import { X } from "../../components/common/Placeholder";

const TOC = [
  { id: "corporate", label: "Corporate Information" },
  { id: "leadership", label: "Board & Leadership" },
  { id: "digital", label: "Digital Lending Disclosures" },
  { id: "policies", label: "Board-Approved Policies" },
  { id: "links", label: "Regulator & Reference Links" },
];

export default function RegulatoryDisclosures() {
  return (
    <PolicyLayout
      title="Regulatory & Statutory Disclosures"
      intro="A consolidated, RBI audit-ready set of corporate, regulatory and digital lending disclosures, maintained for borrowers, partners and regulators."
      toc={TOC}
    >
      <section id="corporate">
        <h2>1. Corporate Information</h2>
        <table>
          <tbody>
            <tr><td>Legal Entity Name</td><td><X /></td></tr>
            <tr><td>Brand Name</td><td>Logix Finance & Investment</td></tr>
            <tr><td>Corporate Identity Number (CIN)</td><td><X /></td></tr>
            <tr><td>RBI Certificate of Registration No.</td><td><X /></td></tr>
            <tr><td>Category of Registration</td><td><X>NBFC – Non-Deposit / LSP</X></td></tr>
            <tr><td>GSTIN</td><td><X /></td></tr>
            <tr><td>Registered Office</td><td><X /></td></tr>
            <tr><td>Corporate / Operations Office</td><td><X /></td></tr>
            <tr><td>Statutory Auditor</td><td><X /></td></tr>
            <tr><td>Email</td><td><X />@<X />.in</td></tr>
            <tr><td>Phone</td><td>+91 <X /></td></tr>
          </tbody>
        </table>
      </section>

      <section id="leadership">
        <h2>2. Board of Directors & Key Management</h2>
        <table>
          <thead>
            <tr><th>Name</th><th>Designation</th><th>DIN / Identifier</th></tr>
          </thead>
          <tbody>
            <tr><td><X /></td><td>Director</td><td><X /></td></tr>
            <tr><td><X /></td><td>Director</td><td><X /></td></tr>
            <tr><td><X /></td><td>Director</td><td><X /></td></tr>
            <tr><td><X /></td><td>Compliance Officer</td><td><X /></td></tr>
            <tr><td><X /></td><td>Grievance Redressal Officer</td><td><X /></td></tr>
          </tbody>
        </table>
      </section>

      <section id="digital">
        <h2>3. Digital Lending Disclosures</h2>
        <p>
          In line with the RBI's Digital Lending Guidelines, the Company maintains the
          following disclosures:
        </p>
        <h4>3.1 Partner Lender(s)</h4>
        <ul>
          <li><X>Partner Lender 1</X> — <X>RBI Registration / details</X></li>
          <li><X>Partner Lender 2</X> — <X>RBI Registration / details</X></li>
        </ul>

        <h4>3.2 Lending Service Providers (LSPs)</h4>
        <ul>
          <li><X>LSP 1</X> — <X>scope of services</X></li>
          <li><X>LSP 2</X> — <X>scope of services</X></li>
        </ul>

        <h4>3.3 Digital Lending Apps / Platforms (DLAs)</h4>
        <ul>
          <li><X>DLA 1</X> — <X>app / platform link</X></li>
          <li><X>DLA 2</X> — <X>app / platform link</X></li>
        </ul>

        <h4>3.4 Recovery Agents</h4>
        <p>
          List of authorised recovery / collection agencies engaged by the Company is
          maintained internally and shared on request, in line with the Fair Practices
          Code.
        </p>
      </section>

      <section id="policies">
        <h2>4. Board-Approved Policies</h2>
        <ul>
          <li><a href="/policies/interest-rate-policy">Interest Rate Policy & Gradation of Risk</a></li>
          <li><a href="/policies/fair-practices-code">Fair Practices Code</a></li>
          <li><a href="/policies/kyc-aml-policy">KYC & AML Policy</a></li>
          <li><a href="/policies/grievance-redressal">Grievance Redressal Mechanism</a></li>
          <li><a href="/policies/privacy-policy">Privacy Policy</a></li>
          <li><a href="/policies/refund-cancellation">Refund & Cancellation Policy</a></li>
          <li><a href="/policies/rates-fees-charges">Rates, Fees & Charges</a></li>
          <li><a href="/policies/terms-conditions">Terms & Conditions</a></li>
          <li><a href="/policies/disclaimer">Disclaimer</a></li>
        </ul>
      </section>

      <section id="links">
        <h2>5. Regulator & Reference Links</h2>
        <ul>
          <li><a href="https://www.rbi.org.in" target="_blank" rel="noreferrer">Reserve Bank of India (RBI)</a></li>
          <li><a href="https://cms.rbi.org.in" target="_blank" rel="noreferrer">RBI Complaint Management System (CMS)</a></li>
          <li><a href="https://sachet.rbi.org.in" target="_blank" rel="noreferrer">RBI Sachet — Report Unregistered Entities</a></li>
          <li><a href="https://www.mca.gov.in" target="_blank" rel="noreferrer">Ministry of Corporate Affairs (MCA)</a></li>
          <li><a href="https://www.cibil.com" target="_blank" rel="noreferrer">TransUnion CIBIL</a></li>
          <li><a href="https://cybercrime.gov.in" target="_blank" rel="noreferrer">National Cyber Crime Reporting Portal</a></li>
        </ul>
      </section>
    </PolicyLayout>
  );
}
