import React from "react";
import PolicyLayout from "../../components/common/PolicyLayout";
import { X } from "../../components/common/Placeholder";

export default function RegulatoryDisclosures() {
  return (
    <PolicyLayout title="Regulatory & Statutory Disclosures" lastUpdated={<X>DD MMM YYYY</X>}>
      <h2>1. Corporate Information</h2>
      <table className="gov-table">
        <tbody>
          <tr><td style={{ width: "40%" }}><strong>Legal Entity Name</strong></td><td>Logix Finance &amp; Investment Private Limited</td></tr>
          <tr><td><strong>Corporate Identity Number (CIN)</strong></td><td><X /></td></tr>
          <tr><td><strong>RBI Certificate of Registration No.</strong></td><td><X /></td></tr>
          <tr><td><strong>Category of Registration</strong></td><td><X>NBFC – Non-Deposit Taking</X></td></tr>
          <tr><td><strong>GSTIN</strong></td><td><X /></td></tr>
          <tr><td><strong>Registered Office</strong></td><td><X />, <X />, <X /> – <X />, India</td></tr>
          <tr><td><strong>Corporate Office</strong></td><td><X />, <X />, <X /> – <X />, India</td></tr>
          <tr><td><strong>Statutory Auditor</strong></td><td><X /></td></tr>
          <tr><td><strong>Customer Care</strong></td><td>879624245</td></tr>
          <tr><td><strong>Email</strong></td><td>info@logixfinance&amp;investment.com</td></tr>
          <tr><td><strong>Grievance Email</strong></td><td>grievance@logixfinance&amp;investment.com</td></tr>
        </tbody>
      </table>

      <h2>2. Board of Directors &amp; Key Management Personnel</h2>
      <table className="gov-table">
        <thead>
          <tr><th>Sl. No.</th><th>Name</th><th>Designation</th><th>DIN / Identifier</th></tr>
        </thead>
        <tbody>
          <tr><td>1</td><td><X /></td><td>Director</td><td><X /></td></tr>
          <tr><td>2</td><td><X /></td><td>Director</td><td><X /></td></tr>
          <tr><td>3</td><td><X /></td><td>Director</td><td><X /></td></tr>
          <tr><td>4</td><td><X /></td><td>Compliance Officer</td><td><X /></td></tr>
          <tr><td>5</td><td><X /></td><td>Grievance Redressal Officer</td><td><X /></td></tr>
          <tr><td>6</td><td><X /></td><td>Principal Officer (PMLA)</td><td><X /></td></tr>
        </tbody>
      </table>

      <h2>3. Digital Lending Disclosures</h2>
      <p>
        In line with the Reserve Bank of India's Digital Lending Guidelines, the Company
        maintains the following disclosures:
      </p>
      <h3>3.1 Partner Lender(s)</h3>
      <ul>
        <li><X /> — <X /></li>
        <li><X /> — <X /></li>
      </ul>
      <h3>3.2 Lending Service Providers (LSPs)</h3>
      <ul>
        <li><X /> — <X /></li>
        <li><X /> — <X /></li>
      </ul>
      <h3>3.3 Digital Lending Apps / Platforms (DLAs)</h3>
      <ul>
        <li><X /> — <X /></li>
        <li><X /> — <X /></li>
      </ul>
      <h3>3.4 Recovery Agents</h3>
      <p>
        List of authorised recovery / collection agencies engaged by the Company is
        maintained internally and shared on request, in line with the Fair Practices
        Code.
      </p>

      <h2>4. Board-Approved Policies</h2>
      <ul>
        <li><a href="/policies/fair-practices-code">Fair Practices Code</a></li>
        <li><a href="/policies/interest-rate-policy">Interest Rate Policy</a></li>
        <li><a href="/policies/grievance-redressal">Grievance Redressal Mechanism</a></li>
        <li><a href="/policies/kyc-aml-policy">KYC &amp; AML Policy</a></li>
        <li><a href="/policies/privacy-policy">Privacy Policy</a></li>
        <li><a href="/policies/refund-cancellation">Refund &amp; Cancellation Policy</a></li>
        <li><a href="/policies/rates-fees-charges">Rates, Fees &amp; Charges</a></li>
        <li><a href="/policies/terms-conditions">Terms &amp; Conditions</a></li>
        <li><a href="/policies/disclaimer">Disclaimer</a></li>
      </ul>

      <h2>5. Regulator &amp; Reference Links</h2>
      <ul>
        <li><a href="https://www.rbi.org.in" target="_blank" rel="noreferrer">Reserve Bank of India (RBI)</a></li>
        <li><a href="https://cms.rbi.org.in" target="_blank" rel="noreferrer">RBI Complaint Management System (CMS)</a></li>
        <li><a href="https://sachet.rbi.org.in" target="_blank" rel="noreferrer">RBI Sachet — Report Unregistered Entities</a></li>
        <li><a href="https://www.mca.gov.in" target="_blank" rel="noreferrer">Ministry of Corporate Affairs (MCA)</a></li>
        <li><a href="https://www.cibil.com" target="_blank" rel="noreferrer">TransUnion CIBIL</a></li>
        <li><a href="https://cybercrime.gov.in" target="_blank" rel="noreferrer">National Cyber Crime Reporting Portal</a></li>
      </ul>
    </PolicyLayout>
  );
}
