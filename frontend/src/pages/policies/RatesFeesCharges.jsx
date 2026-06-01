import React from "react";
import PolicyLayout from "../../components/common/PolicyLayout";
import { X } from "../../components/common/Placeholder";

export default function RatesFeesCharges() {
  return (
    <PolicyLayout title="Rates, Fees & Charges" lastUpdated={<X>DD MMM YYYY</X>}>
      <h2>Summary</h2>
      <p>
        This page summarises the rates of interest and the schedule of fees and charges
        levied by Logix Finance &amp; Investment Private Limited across its loan
        products, as approved by the Board under the Interest Rate Policy. The exact
        figures applicable to a particular loan are disclosed in the sanction letter
        and Key Fact Statement (KFS) issued to the borrower before loan execution.
      </p>

      <h2>Interest Rates</h2>
      <table className="gov-table">
        <thead>
          <tr>
            <th>Sl. No.</th>
            <th>Loan Product</th>
            <th>Loan Amount</th>
            <th>Tenure</th>
            <th>Rate of Interest</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>Pay Day Loan</td><td>₹5,000 – ₹1,00,000</td><td>7 days – 12 months</td><td>0.10% – 1.00% per day</td></tr>
          <tr><td>2</td><td>Business Loan</td><td>₹5,000 – ₹1,00,000</td><td>Up to 12 months</td><td>8% – 25% per annum</td></tr>
          <tr><td>3</td><td>Loan Against Property</td><td>₹1,00,000 – ₹25,00,000</td><td>As per agreement</td><td>12% – 15% per annum</td></tr>
          <tr><td>4</td><td>EMI Loan</td><td>₹25,000 – ₹5,00,000</td><td>Up to 6 months</td><td>24% – 365% per annum</td></tr>
        </tbody>
      </table>

      <h2>Penal Charges</h2>
      <table className="gov-table">
        <tbody>
          <tr><td style={{ width: "40%" }}><strong>Penal charges on overdue amount</strong></td><td>1.25% per day on outstanding principal</td></tr>
          <tr><td><strong>Unregistered NACH charges</strong></td><td>Up to ₹500 per instance</td></tr>
        </tbody>
      </table>
      <p>
        Penal charges are levied for non-compliance of material terms and conditions of
        the loan agreement and are <strong>not capitalised</strong> to the loan
        principal. They are not levied as 'penal interest' added to the rate of
        interest.
      </p>

      <h2>Other Fees and Charges</h2>
      <p>Besides interest, the following financial charges may apply, subject to product and customer segment:</p>
      <ul>
        <li>Processing fees</li>
        <li>Origination fees</li>
        <li>Prepayment / foreclosure charges</li>
        <li>Recovery / collection charges</li>
        <li>Re-scheduling charges</li>
        <li>Payment gateway charges</li>
        <li>Cheque swap charges</li>
        <li>Security swap charges</li>
        <li>Statement of account charges</li>
        <li>Customer care charges</li>
        <li>Credit assessment charges</li>
        <li>ECS / Direct Debit / NACH charges</li>
      </ul>

      <h2>Loan Cancellation, Foreclosure &amp; Prepayment</h2>
      <table className="gov-table">
        <tbody>
          <tr><td style={{ width: "40%" }}><strong>Cancellation before disbursal</strong></td><td>Nil</td></tr>
          <tr><td><strong>Free look / cooling-off period</strong></td><td>3 days from loan disbursement – principal and applicable charges payable; no prepayment penalty</td></tr>
          <tr><td><strong>Foreclosure</strong></td><td>No foreclosure charges. Interest payable at contracted rate up to date of final repayment</td></tr>
          <tr><td><strong>Part prepayment</strong></td><td>Strictly not permitted</td></tr>
        </tbody>
      </table>

      <h2>Goods &amp; Services Tax (GST)</h2>
      <p>
        All fees and charges are exclusive of applicable Goods &amp; Services Tax (GST)
        and any other levies, which shall be charged in addition, as per prevailing
        rates.
      </p>

      <h2>Notes</h2>
      <ul>
        <li>The above schedule is indicative. The actual charges applicable to a particular loan are disclosed in the sanction letter and KFS.</li>
        <li>The Company may revise the rates and charges from time to time. Any change shall be applied prospectively in accordance with the Interest Rate Policy.</li>
        <li>For any clarification, please write to <strong>info@logixfinance&amp;investment.com</strong> or call <strong>879624245</strong>.</li>
      </ul>
    </PolicyLayout>
  );
}
