import React from "react";
import PolicyLayout from "../../components/common/PolicyLayout";
import { X } from "../../components/common/Placeholder";

export default function RefundCancellation() {
  return (
    <PolicyLayout title="Refund & Cancellation Policy" lastUpdated={<X>DD MMM YYYY</X>}>
      <h2>1. Scope</h2>
      <p>
        This policy explains the circumstances under which loans may be cancelled and
        fees may be refunded by Logix Finance &amp; Investment Private Limited. The
        policy is to be read together with the Company's{" "}
        <a href="/policies/interest-rate-policy">Interest Rate Policy</a>.
      </p>

      <h2>2. Cancellation Before Disbursal</h2>
      <p>
        A borrower may withdraw the loan application at any time before disbursement at
        no cost. To do so, please write to{" "}
        <strong>info@logixfinance&amp;investment.com</strong> or call{" "}
        <strong>879624245</strong>.
      </p>

      <h2>3. Free Look / Cooling-Off Period</h2>
      <p>
        In accordance with the Interest Rate Policy, a borrower may exit the loan
        within <strong>3 days of loan disbursement</strong> by:
      </p>
      <ul>
        <li>Repaying the principal amount in full; and</li>
        <li>Paying the applicable charges for the period during which the loan was outstanding.</li>
      </ul>
      <p>No prepayment penalty shall be levied during the free look period.</p>

      <h2>4. Foreclosure &amp; Part Prepayment</h2>
      <p>
        Foreclosure of a facility shall not attract any charges; however, the borrower
        shall be liable to pay interest at the contracted rate up to the date of final
        repayment. <strong>Part prepayment of the facility is strictly not permitted.</strong>
      </p>

      <h2>5. Waiver / Refund of Charges</h2>
      <p>
        No claims for refund or waiver of charges / penal charges / additional charges
        for loan documentation, portfolio monitoring, recovery of loan or for other
        shall normally be entertained by the Company, and it is at the sole discretion
        of the Company to deal with such requests, if any.
      </p>

      <h2>6. Refund for Errors / Excess Payments</h2>
      <p>
        Where a borrower has made an excess payment, or where charges have been levied
        in error, the excess shall be refunded to the borrower's registered bank
        account on verification.
      </p>

      <h2>7. Refund Method &amp; Timeline</h2>
      <ul>
        <li>Refunds are processed only to the registered bank account from which the original payment was made.</li>
        <li>Refunds are typically processed within <X>xx</X> working days of approval.</li>
        <li>For any clarification on a refund, please contact <strong>info@logixfinance&amp;investment.com</strong>.</li>
      </ul>
    </PolicyLayout>
  );
}
