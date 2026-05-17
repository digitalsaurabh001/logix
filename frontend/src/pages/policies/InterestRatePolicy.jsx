import React from "react";
import PolicyLayout from "../../components/common/PolicyLayout";
import { X } from "../../components/common/Placeholder";

const TOC = [
  { id: "purpose", label: "Purpose" },
  { id: "model", label: "Interest Rate Model" },
  { id: "range", label: "Range of Rates" },
  { id: "risk", label: "Approach to Risk Gradation" },
  { id: "penal", label: "Penal Charges" },
  { id: "communication", label: "Communication & Transparency" },
];

export default function InterestRatePolicy() {
  return (
    <PolicyLayout
      title="Interest Rate Policy & Gradation of Risk"
      intro="Our Board-approved policy on how we determine interest rates and gradate risk, in line with the Reserve Bank of India's directions on fair lending."
      toc={TOC}
    >
      <section id="purpose">
        <h2>1. Purpose</h2>
        <p>
          Logix Finance and Investment (the "Company") has adopted this Interest Rate
          Policy in compliance with the directions issued by the Reserve Bank of India
          ("RBI") and applicable laws. This policy explains the principles, factors
          and approach used to determine the interest rates and other charges levied
          on loans extended by the Company.
        </p>
        <p>
          The policy is reviewed by the Board of Directors at least once every <X>xx</X>
          months or as required by regulatory amendments.
        </p>
      </section>

      <section id="model">
        <h2>2. Interest Rate Model</h2>
        <p>
          Interest rates offered to borrowers are determined on a risk-based pricing
          model that considers, but is not limited to, the following factors:
        </p>
        <ul>
          <li>Cost of funds, including borrowing cost and capital adequacy.</li>
          <li>Operating cost, including credit underwriting, collection and servicing.</li>
          <li>Credit and default risk premium based on borrower profile.</li>
          <li>Tenure, loan amount and end-use of the loan.</li>
          <li>Internal and external credit scores, and bureau-reported data.</li>
          <li>Industry benchmarks and prevailing market conditions.</li>
        </ul>
      </section>

      <section id="range">
        <h2>3. Range of Rates</h2>
        <p>
          The interest rate range, the corresponding representative APR and the
          processing fee for each loan product is published on the{" "}
          <a href="/policies/rates-fees-charges">Rates, Fees & Charges</a> page and is
          summarised below:
        </p>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Interest Rate (p.a.)</th>
              <th>Representative APR</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Personal Loan</td><td><X />% – <X />%</td><td><X />%</td></tr>
            <tr><td>Business Loan</td><td><X />% – <X />%</td><td><X />%</td></tr>
            <tr><td>Consumer / EMI Finance</td><td><X />% – <X />%</td><td><X />%</td></tr>
            <tr><td>Short-Term Loan</td><td><X />% – <X />%</td><td><X />%</td></tr>
          </tbody>
        </table>
      </section>

      <section id="risk">
        <h2>4. Approach to Risk Gradation</h2>
        <p>
          Risk gradation is the process of classifying borrowers into categories based
          on their assessed risk profile. The Company considers the following factors,
          among others, in arriving at a borrower's risk grade:
        </p>
        <ul>
          <li>Income stability, employment type and vintage.</li>
          <li>Existing financial obligations and debt-to-income ratio.</li>
          <li>Credit bureau score and history.</li>
          <li>Loan-to-value, collateral (where applicable) and end-use.</li>
          <li>Past relationship with the Company and repayment behaviour.</li>
        </ul>
        <p>
          Lower-risk borrowers may be offered rates at the lower end of the published
          range; higher-risk borrowers, where eligible, may be offered rates at the
          upper end. The applicable rate is disclosed in the Key Fact Statement before
          loan execution.
        </p>
      </section>

      <section id="penal">
        <h2>5. Penal Charges</h2>
        <p>
          In line with the RBI's directions on penal charges, the Company levies penal
          charges (not penal interest) on delayed payment of EMIs. The penal charge is
          reasonable and proportionate to the contravention of the loan agreement and
          is disclosed in the Key Fact Statement and Most Important Terms & Conditions.
        </p>
        <ul>
          <li>Penal charge: <X />% of overdue amount, subject to applicable taxes.</li>
          <li>Penal charges are not capitalised into the loan principal.</li>
          <li>Reminder of overdue is sent via SMS / email / call as per the borrower's communication preferences.</li>
        </ul>
      </section>

      <section id="communication">
        <h2>6. Communication & Transparency</h2>
        <p>
          The annualised rate of interest (APR), the rationale for the rate offered,
          the gradation of risk and the schedule of all fees and charges is communicated
          to the borrower in writing in the Key Fact Statement before loan execution.
        </p>
        <p>
          Any change in the rate of interest or charges applicable to floating-rate
          loans will be communicated to the borrower in advance, and the borrower will
          have the option to exit or switch as per the terms of the agreement.
        </p>
        <p>
          For queries on the rate applied to your loan, please contact us at{" "}
          <X />@<X />.in.
        </p>
      </section>
    </PolicyLayout>
  );
}
