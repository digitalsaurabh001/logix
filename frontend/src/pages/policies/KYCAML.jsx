import React from "react";
import PolicyLayout from "../../components/common/PolicyLayout";
import { X } from "../../components/common/Placeholder";

export default function KYCAML() {
  return (
    <PolicyLayout title="KYC & Anti-Money Laundering Policy" lastUpdated={<X>DD MMM YYYY</X>}>
      <h2>1. Overview</h2>
      <p>
        Logix Finance &amp; Investment Private Limited has adopted this Know Your
        Customer (KYC) and Anti-Money Laundering (AML) Policy in compliance with the
        Prevention of Money Laundering Act, 2002 and the Reserve Bank of India's
        Master Directions on Know Your Customer. The Policy is reviewed by the Board
        of Directors at least once every financial year.
      </p>

      <h2>2. Customer Acceptance</h2>
      <ul>
        <li>No account or loan shall be opened in anonymous or fictitious / benami names.</li>
        <li>Customers shall not be on-boarded where appropriate KYC documents cannot be obtained or where the identity matches lists notified under applicable laws.</li>
        <li>Customers shall be classified into Low, Medium and High risk categories based on the Company's risk perception.</li>
      </ul>

      <h2>3. Customer Identification &amp; Due Diligence</h2>
      <p>
        The Company undertakes Customer Due Diligence (CDD) measures including the
        identification and verification of customer identity using Officially Valid
        Documents (OVDs) prescribed by the RBI:
      </p>
      <ul>
        <li>PAN card (mandatory)</li>
        <li>Aadhaar (subject to applicable safeguards) or any other OVD</li>
        <li>Recent photograph</li>
        <li>Address proof (where different from OVD)</li>
      </ul>
      <p>
        KYC may be undertaken through Aadhaar-based e-KYC, Digital KYC, Video KYC or
        in-person verification, as permitted under applicable RBI guidelines.
      </p>

      <h2>4. Ongoing Monitoring</h2>
      <ul>
        <li>Transactions are monitored on an ongoing basis to detect any unusual or suspicious activity.</li>
        <li>Suspicious Transaction Reports (STRs), Cash Transaction Reports (CTRs) and other reports prescribed under PMLA are filed with FIU-IND within the stipulated timelines.</li>
        <li>Enhanced Due Diligence is applied to higher-risk customers and Politically Exposed Persons (PEPs).</li>
      </ul>

      <h2>5. Record Keeping</h2>
      <p>
        KYC records and transaction records are retained for a period of at least 5
        years from the date of the transaction or the date of cessation of the
        relationship, as required under applicable law.
      </p>

      <h2>6. Customer Cooperation</h2>
      <p>
        Customers are required to cooperate with the Company in providing accurate
        information and updating their KYC details periodically. Failure to provide
        requested KYC information may result in the Company being unable to continue
        the relationship.
      </p>

      <h2>7. Designated Officers</h2>
      <table className="gov-table">
        <tbody>
          <tr><td style={{ width: "35%" }}><strong>Principal Officer (PMLA)</strong></td><td><X /></td></tr>
          <tr><td><strong>Designated Director (PMLA)</strong></td><td><X /></td></tr>
          <tr><td><strong>Compliance Officer</strong></td><td><X /></td></tr>
        </tbody>
      </table>
    </PolicyLayout>
  );
}
