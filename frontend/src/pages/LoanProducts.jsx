import React from "react";
import { Link } from "react-router-dom";

const PRODUCTS = [
  {
    title: "Pay Day Loan",
    purpose: "Short-tenure unsecured personal loan to bridge a temporary cash-flow gap until the borrower's next pay cycle.",
    amount: "₹5,000 to ₹1,00,000",
    tenure: "7 days to 12 months",
    rate: "0.10% to 1.00% per day",
    fee: "As per sanction letter",
    docs: ["PAN Card", "Aadhaar Card", "Latest bank statements", "Address proof", "Latest income proof"],
    eligibility: ["Indian resident, 21 years and above", "Steady source of income", "Active bank account", "Valid PAN and Aadhaar"],
  },
  {
    title: "Business Loan",
    purpose: "Working capital and growth funding for self-employed professionals, shopkeepers, traders and small enterprises.",
    amount: "₹5,000 to ₹1,00,000",
    tenure: "Up to 12 months",
    rate: "8% to 25% per annum",
    fee: "As per sanction letter",
    docs: ["PAN of entity and promoter", "Aadhaar of promoter", "Business registration / GST", "Latest bank statements", "Latest ITR / financials"],
    eligibility: ["Indian resident proprietor / partner / director", "Active current account", "Business vintage as per credit policy", "Valid KYC documents"],
  },
  {
    title: "Loan Against Property (LAP)",
    purpose: "Secured loan against residential or commercial property for personal or business funding requirements.",
    amount: "₹1,00,000 to ₹25,00,000",
    tenure: "As per loan agreement",
    rate: "12% to 15% per annum",
    fee: "As per sanction letter",
    docs: ["PAN and Aadhaar", "Property documents (title deed / sale deed)", "Latest property tax receipt", "Latest bank statements", "Income proof / ITR"],
    eligibility: ["Indian resident, 21 years and above", "Clear and marketable title to the offered property", "Adequate repayment capacity"],
  },
  {
    title: "EMI Loan",
    purpose: "Short-tenure loan repayable in equated monthly instalments for personal financial requirements.",
    amount: "₹25,000 to ₹5,00,000",
    tenure: "Up to 6 months",
    rate: "24% to 365% per annum",
    fee: "As per sanction letter",
    docs: ["PAN Card", "Aadhaar Card", "Latest bank statements", "Address proof"],
    eligibility: ["Indian resident, 21 years and above", "Steady source of income", "Valid KYC documents"],
  },
];

export default function LoanProducts() {
  return (
    <main id="main-content" data-testid="loan-products-page">
      <div className="gov-page-title">
        <div className="gov-container">
          <h1>Loan Products</h1>
          <div className="crumb"><Link to="/">Home</Link> &raquo; <strong>Loan Products</strong></div>
        </div>
      </div>

      <div className="gov-container py-5">
        <div className="gov-box mb-4">
          <h2 style={{ fontSize: 17, color: "#0B3D91", marginBottom: 8 }}>Summary of Loan Products</h2>
          <p style={{ fontSize: 13 }}>
            The Company offers the following loan products in accordance with its
            Board-approved Interest Rate Policy. The rate of interest applicable to a
            particular borrower depends on the risk-gradation criteria set out in the{" "}
            <Link to="/policies/interest-rate-policy">Interest Rate Policy</Link> and is
            communicated to the borrower in the sanction letter and Key Fact Statement
            (KFS) before loan execution.
          </p>
          <table className="gov-table" data-testid="products-summary-table">
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
              {PRODUCTS.map((p, i) => (
                <tr key={p.title}>
                  <td>{i + 1}</td>
                  <td><strong>{p.title}</strong></td>
                  <td>{p.amount}</td>
                  <td>{p.tenure}</td>
                  <td>{p.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {PRODUCTS.map((p, i) => (
          <div className="gov-box mb-4" key={p.title} data-testid={`product-${i}`}>
            <h2 style={{ fontSize: 17, color: "#0B3D91", marginBottom: 6 }}>{i + 1}. {p.title}</h2>
            <p style={{ marginBottom: 6 }}><strong>Purpose:</strong> {p.purpose}</p>
            <table className="gov-table">
              <tbody>
                <tr><td style={{ width: "30%" }}><strong>Loan Amount</strong></td><td>{p.amount}</td></tr>
                <tr><td><strong>Tenure</strong></td><td>{p.tenure}</td></tr>
                <tr><td><strong>Rate of Interest</strong></td><td>{p.rate}</td></tr>
                <tr><td><strong>Processing Fee</strong></td><td>{p.fee}</td></tr>
              </tbody>
            </table>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 style={{ fontSize: 14, color: "#0B3D91", marginTop: 6 }}>Eligibility</h3>
                <ul style={{ listStyle: "disc", paddingLeft: 22, fontSize: 13 }}>
                  {p.eligibility.map((e, idx) => (<li key={idx}>{e}</li>))}
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: 14, color: "#0B3D91", marginTop: 6 }}>Documents Required</h3>
                <ul style={{ listStyle: "disc", paddingLeft: 22, fontSize: 13 }}>
                  {p.docs.map((d, idx) => (<li key={idx}>{d}</li>))}
                </ul>
              </div>
            </div>
            <p style={{ marginTop: 8, fontSize: 12, color: "#555" }}>
              For applicable fees, charges and penal charges, please refer to the{" "}
              <Link to="/policies/rates-fees-charges">Rates, Fees &amp; Charges</Link> page and the{" "}
              <Link to="/policies/interest-rate-policy">Interest Rate Policy</Link>.
            </p>
          </div>
        ))}

        <div className="gov-notice" data-testid="cooling-off-notice">
          <strong>Free Look / Cooling-Off Period:</strong> A borrower may exit the loan
          within <strong>3 days of disbursement</strong> by repaying the principal and
          applicable charges as set out in the Interest Rate Policy. No prepayment
          penalty shall be charged during such period.
        </div>
      </div>
    </main>
  );
}
