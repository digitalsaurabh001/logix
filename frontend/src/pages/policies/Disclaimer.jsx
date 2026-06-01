import React from "react";
import PolicyLayout from "../../components/common/PolicyLayout";
import { X } from "../../components/common/Placeholder";

export default function Disclaimer() {
  return (
    <PolicyLayout title="Disclaimer" lastUpdated={<X>DD MMM YYYY</X>}>
      <h2>1. General Information</h2>
      <p>
        The content on this website is provided for general information purposes only
        and does not constitute an offer, solicitation or commitment to provide a loan
        or any other financial service. All credit decisions are made by Logix Finance
        &amp; Investment Private Limited in accordance with its internal credit policy
        and applicable laws.
      </p>

      <h2>2. Indicative Information</h2>
      <p>
        Information regarding interest rates, fees, charges, eligibility criteria,
        tenures and processing times is indicative and may change from time to time.
        The actual terms applicable to a particular loan are disclosed in the sanction
        letter and Key Fact Statement (KFS) before execution.
      </p>

      <h2>3. Not Financial Advice</h2>
      <p>
        Nothing on this website should be construed as financial, legal, tax,
        accounting or investment advice. You should consult an appropriate professional
        advisor before making any financial decision.
      </p>

      <h2>4. Third-Party Content</h2>
      <p>
        This website may contain links to or content from third parties. The Company
        is not responsible for the accuracy, completeness or reliability of such
        third-party content.
      </p>

      <h2>5. Accuracy</h2>
      <p>
        While reasonable care has been taken to ensure that the information on this
        website is accurate, Logix Finance &amp; Investment Private Limited makes no
        representation or warranty, express or implied, regarding the accuracy,
        completeness or reliability of any information on this website. The Company
        shall not be liable for any loss arising from the use of such information.
      </p>

      <h2>6. Beware of Fraud</h2>
      <p>
        Logix Finance &amp; Investment Private Limited <strong>never demands any
        advance fee, security deposit or upfront payment</strong> for sanctioning a
        loan. All fees are deducted from the disbursed amount or collected through
        verified channels and are disclosed in the Key Fact Statement.
      </p>
      <ul>
        <li>Do not share your OTP, PAN, Aadhaar number, debit/credit card or bank credentials with anyone claiming to represent the Company.</li>
        <li>Always verify communications — the official email is <strong>info@logixfinance&amp;investment.com</strong> and the official phone is <strong>879624245</strong>.</li>
        <li>If you receive a suspicious call, message or email, please report it to <strong>grievance@logixfinance&amp;investment.com</strong> and to the National Cyber Crime Reporting Portal at <a href="https://cybercrime.gov.in" target="_blank" rel="noreferrer">cybercrime.gov.in</a>.</li>
      </ul>
    </PolicyLayout>
  );
}
