import React from "react";
import PolicyLayout from "../../components/common/PolicyLayout";
import { X } from "../../components/common/Placeholder";

const TOC = [
  { id: "scope", label: "Scope" },
  { id: "pre", label: "Cancellation Before Disbursal" },
  { id: "cooling", label: "Cooling-off Period" },
  { id: "fee", label: "Refund of Fees" },
  { id: "errors", label: "Refund for Errors / Excess Payments" },
  { id: "method", label: "Refund Method & Timeline" },
];

export default function RefundCancellation() {
  return (
    <PolicyLayout
      title="Refund & Cancellation Policy"
      intro="A clear, written explanation of your right to cancel, your cooling-off period and how refunds — where applicable — are processed."
      toc={TOC}
    >
      <section id="scope">
        <h2>1. Scope</h2>
        <p>
          This policy explains the circumstances under which loans may be cancelled
          and fees may be refunded by Logix Finance and Investment.
        </p>
      </section>

      <section id="pre">
        <h2>2. Cancellation Before Disbursal</h2>
        <p>
          You may withdraw your loan application at any time before disbursement at no
          cost. To do so, please write to <X />@<X />.in or call +91 <X />.
        </p>
      </section>

      <section id="cooling">
        <h2>3. Cooling-off Period</h2>
        <p>
          In accordance with the RBI's directions on digital lending, you have the
          right to exit the loan within <X>xx</X> days of disbursal by:
        </p>
        <ul>
          <li>Repaying the principal amount in full; and</li>
          <li>Paying the proportionate APR for the period during which the loan was outstanding.</li>
        </ul>
        <p>
          No prepayment penalty will be levied during the cooling-off period.
        </p>
      </section>

      <section id="fee">
        <h2>4. Refund of Fees</h2>
        <ul>
          <li>
            <strong>Processing Fee:</strong> The processing fee is{" "}
            <X>refundable / partially refundable / non-refundable</X> in the case of
            cancellation. Please refer to your Key Fact Statement.
          </li>
          <li>
            <strong>Documentation / Stamping:</strong> Charges paid to third parties
            (e.g., e-stamping, KYC verification) are not refundable, since they have
            been paid to the respective authorities.
          </li>
          <li>
            <strong>GST:</strong> Any GST paid on non-refundable charges is also
            non-refundable.
          </li>
        </ul>
      </section>

      <section id="errors">
        <h2>5. Refund for Errors / Excess Payments</h2>
        <p>
          Where you have made an excess payment, or where charges have been levied in
          error, the excess will be refunded to your registered bank account on
          verification.
        </p>
      </section>

      <section id="method">
        <h2>6. Refund Method & Timeline</h2>
        <ul>
          <li>Refunds are processed only to the registered bank account from which the original payment was made.</li>
          <li>Refunds are typically processed within <X>xx</X> working days of approval.</li>
          <li>For any clarification on a refund, please contact <X />@<X />.in.</li>
        </ul>
      </section>
    </PolicyLayout>
  );
}
