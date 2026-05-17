import React from "react";
import PolicyLayout from "../../components/common/PolicyLayout";
import { X } from "../../components/common/Placeholder";

const TOC = [
  { id: "general", label: "General Information" },
  { id: "indicative", label: "Indicative Information" },
  { id: "advice", label: "Not Financial Advice" },
  { id: "third", label: "Third-Party Content" },
  { id: "accuracy", label: "Accuracy" },
  { id: "fraud", label: "Beware of Fraud" },
];

export default function Disclaimer() {
  return (
    <PolicyLayout
      title="Disclaimer"
      intro="Important notices regarding the use of information presented on this website."
      toc={TOC}
    >
      <section id="general">
        <h2>1. General Information</h2>
        <p>
          The content on this website is provided for general information purposes
          only and does not constitute an offer, solicitation or commitment to provide
          a loan or any other financial service. All credit decisions are made by the
          Company in accordance with its internal credit policy and applicable laws.
        </p>
      </section>

      <section id="indicative">
        <h2>2. Indicative Information</h2>
        <p>
          Information regarding interest rates, fees, charges, eligibility criteria,
          tenures and processing times is indicative and may change from time to time.
          The actual terms applicable to your loan will be disclosed in the Key Fact
          Statement before execution.
        </p>
      </section>

      <section id="advice">
        <h2>3. Not Financial Advice</h2>
        <p>
          Nothing on this website should be construed as financial, legal, tax,
          accounting or investment advice. You should consult an appropriate
          professional advisor before making any financial decision.
        </p>
      </section>

      <section id="third">
        <h2>4. Third-Party Content</h2>
        <p>
          This website may contain links to or content from third parties. We are not
          responsible for the accuracy, completeness or reliability of such third-party
          content.
        </p>
      </section>

      <section id="accuracy">
        <h2>5. Accuracy</h2>
        <p>
          While reasonable care has been taken to ensure that the information on this
          website is accurate, Logix Finance and Investment makes no representation or
          warranty, express or implied, regarding the accuracy, completeness or
          reliability of any information on this website. The Company shall not be
          liable for any loss arising from the use of such information.
        </p>
      </section>

      <section id="fraud">
        <h2>6. Beware of Fraud</h2>
        <p>
          Logix Finance and Investment never demands any advance fee, security deposit
          or upfront payment for sanctioning a loan. All fees are deducted from the
          disbursed amount or collected through verified channels and are disclosed in
          the Key Fact Statement.
        </p>
        <ul>
          <li>Do not share your OTP, PAN, Aadhaar number, debit/credit card or bank credentials with anyone claiming to represent us.</li>
          <li>Always verify communication channels — official email is <X />@<X />.in and official phone is +91 <X />.</li>
          <li>If you receive a suspicious call, message or email, please report it to <X />@<X />.in and to the local cyber crime cell (<a href="https://cybercrime.gov.in" target="_blank" rel="noreferrer">cybercrime.gov.in</a>).</li>
        </ul>
      </section>
    </PolicyLayout>
  );
}
