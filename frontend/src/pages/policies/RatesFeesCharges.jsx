import React from "react";
import PolicyLayout from "../../components/common/PolicyLayout";
import { X } from "../../components/common/Placeholder";

const TOC = [
  { id: "summary", label: "Summary" },
  { id: "interest", label: "Interest Rates & APR" },
  { id: "fees", label: "Processing & Documentation Fees" },
  { id: "penal", label: "Penal & Bounce Charges" },
  { id: "prepayment", label: "Prepayment & Cancellation" },
  { id: "taxes", label: "Taxes" },
  { id: "notes", label: "Notes" },
];

export default function RatesFeesCharges() {
  return (
    <PolicyLayout
      title="Rates, Fees & Charges"
      intro="A consolidated schedule of all interest rates, fees and charges levied across our loan products. All charges are also disclosed in your Key Fact Statement before loan execution."
      toc={TOC}
    >
      <section id="summary">
        <h2>1. Summary</h2>
        <p>
          This page summarises all charges associated with availing a loan from Logix
          Finance and Investment. The exact figures applicable to your loan will be
          disclosed in writing in your Key Fact Statement (KFS) and Most Important
          Terms & Conditions (MITC) before signing the loan agreement.
        </p>
      </section>

      <section id="interest">
        <h2>2. Interest Rates & APR</h2>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Interest Rate (p.a.)</th>
              <th>Representative APR</th>
              <th>Tenure</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Personal Loan</td><td><X />% – <X />%</td><td><X />%</td><td><X /> months</td></tr>
            <tr><td>Business Loan</td><td><X />% – <X />%</td><td><X />%</td><td><X /> months</td></tr>
            <tr><td>Consumer / EMI Finance</td><td><X />% – <X />%</td><td><X />%</td><td><X /> months</td></tr>
            <tr><td>Short-Term Loan</td><td><X />% – <X />%</td><td><X />%</td><td><X /> months</td></tr>
          </tbody>
        </table>
      </section>

      <section id="fees">
        <h2>3. Processing & Documentation Fees</h2>
        <table>
          <thead>
            <tr><th>Particulars</th><th>Amount / Rate</th></tr>
          </thead>
          <tbody>
            <tr><td>Processing fee</td><td>Up to <X />% of sanctioned loan amount + GST</td></tr>
            <tr><td>Documentation / stamping</td><td>At actuals as per state</td></tr>
            <tr><td>e-NACH / e-mandate setup</td><td>₹<X /> + GST</td></tr>
            <tr><td>Loan statement / NOC (after first free)</td><td>₹<X /> + GST</td></tr>
            <tr><td>Duplicate copy of agreement</td><td>₹<X /> + GST</td></tr>
          </tbody>
        </table>
        <p>
          Processing fee status — whether refundable, partially refundable or
          non-refundable in case of cancellation — is detailed on our{" "}
          <a href="/policies/refund-cancellation">Refund & Cancellation</a> page.
        </p>
      </section>

      <section id="penal">
        <h2>4. Penal & Bounce Charges</h2>
        <table>
          <thead>
            <tr><th>Particulars</th><th>Amount / Rate</th></tr>
          </thead>
          <tbody>
            <tr><td>Penal charge on overdue EMI</td><td><X />% on overdue amount + GST</td></tr>
            <tr><td>Bounce / dishonour charges (per instance)</td><td>₹<X /> + GST</td></tr>
            <tr><td>Legal & collection costs</td><td>At actuals, where applicable</td></tr>
          </tbody>
        </table>
        <p>
          Penal charges are levied for non-compliance with the material terms of the
          loan agreement and are not capitalised to the loan principal.
        </p>
      </section>

      <section id="prepayment">
        <h2>5. Prepayment & Cancellation</h2>
        <table>
          <thead>
            <tr><th>Particulars</th><th>Amount / Rate</th></tr>
          </thead>
          <tbody>
            <tr><td>Foreclosure / part-prepayment (Personal Loan)</td><td><X />% on outstanding principal + GST</td></tr>
            <tr><td>Foreclosure / part-prepayment (Business Loan)</td><td><X />% on outstanding principal + GST</td></tr>
            <tr><td>Cancellation before disbursal</td><td>Nil</td></tr>
            <tr><td>Cancellation within cooling-off period</td><td>Nil prepayment penalty · proportionate APR applies</td></tr>
          </tbody>
        </table>
      </section>

      <section id="taxes">
        <h2>6. Taxes</h2>
        <p>
          All fees and charges mentioned above are exclusive of applicable Goods &
          Services Tax (GST) and any other levies, which will be charged in addition,
          as per prevailing rates.
        </p>
      </section>

      <section id="notes">
        <h2>7. Notes</h2>
        <ul>
          <li>The above schedule is indicative; final charges applicable to your loan will be specified in the KFS.</li>
          <li>Charges may be revised by the Company from time to time with appropriate communication to borrowers.</li>
          <li>For any clarification, please write to <X />@<X />.in.</li>
        </ul>
      </section>
    </PolicyLayout>
  );
}
