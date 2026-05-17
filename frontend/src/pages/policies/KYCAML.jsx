import React from "react";
import PolicyLayout from "../../components/common/PolicyLayout";
import { X } from "../../components/common/Placeholder";

const TOC = [
  { id: "overview", label: "Overview" },
  { id: "acceptance", label: "Customer Acceptance" },
  { id: "identification", label: "Customer Identification & Due Diligence" },
  { id: "monitoring", label: "Ongoing Monitoring" },
  { id: "records", label: "Record Keeping" },
  { id: "cooperation", label: "Customer Cooperation" },
];

export default function KYCAML() {
  return (
    <PolicyLayout
      title="KYC & Anti-Money Laundering Policy"
      intro="Our Know Your Customer (KYC) and Anti-Money Laundering (AML) framework, in accordance with the Prevention of Money Laundering Act, 2002 and RBI Master Directions on KYC."
      toc={TOC}
    >
      <section id="overview">
        <h2>1. Overview</h2>
        <p>
          The Company has adopted this KYC & AML Policy to prevent its services from
          being misused for money laundering, terrorism financing or other illegal
          activities. The policy is reviewed by the Board at least once every <X>xx</X>
          months.
        </p>
      </section>

      <section id="acceptance">
        <h2>2. Customer Acceptance</h2>
        <ul>
          <li>No account / loan is opened in anonymous or fictitious / benami names.</li>
          <li>Customers are not on-boarded where appropriate KYC documents cannot be obtained or where the identity matches lists notified under applicable laws.</li>
          <li>The Company classifies customers into Low, Medium and High risk categories based on the risk perception.</li>
        </ul>
      </section>

      <section id="identification">
        <h2>3. Customer Identification & Due Diligence</h2>
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
      </section>

      <section id="monitoring">
        <h2>4. Ongoing Monitoring</h2>
        <ul>
          <li>Transactions are monitored on an ongoing basis to detect any unusual or suspicious activity.</li>
          <li>Suspicious Transaction Reports (STRs), Cash Transaction Reports (CTRs) and other reports prescribed under PMLA are filed with FIU-IND within the stipulated timelines.</li>
          <li>Enhanced Due Diligence is applied to higher-risk customers and PEPs (Politically Exposed Persons).</li>
        </ul>
      </section>

      <section id="records">
        <h2>5. Record Keeping</h2>
        <p>
          KYC records and transaction records are retained for a period of at least
          <X>5</X> years from the date of the transaction or the date of cessation of
          the relationship, as required under applicable law.
        </p>
      </section>

      <section id="cooperation">
        <h2>6. Customer Cooperation</h2>
        <p>
          Customers are required to cooperate with the Company in providing accurate
          information and updating their KYC details periodically. Failure to provide
          requested KYC information may result in the Company being unable to continue
          the relationship.
        </p>
      </section>
    </PolicyLayout>
  );
}
