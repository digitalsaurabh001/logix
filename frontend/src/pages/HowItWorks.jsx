import React from "react";
import { Link } from "react-router-dom";

const STEPS = [
  { t: "Application", d: "The borrower submits a loan application along with the prescribed documents through the Company's website or digital platform. Loan application forms clearly indicate the information required, documents to be submitted, applicable terms, conditions and charges." },
  { t: "Acknowledgement", d: "The Company acknowledges the receipt of every loan application. Where additional information or documents are required, the borrower is informed appropriately." },
  { t: "Identity & KYC Verification", d: "The borrower's identity is verified using Officially Valid Documents (OVDs) such as PAN and Aadhaar, in accordance with the Company's KYC & AML Policy and the Reserve Bank of India's Master Directions on KYC." },
  { t: "Credit Appraisal", d: "The loan application is appraised based on the Company's credit policy, taking into account the borrower's risk profile, repayment capacity and credit bureau information." },
  { t: "Sanction Letter & Key Fact Statement (KFS)", d: "If the application is approved, a sanction letter and Key Fact Statement are issued setting out the loan amount, rate of interest, method of application of interest, repayment terms, applicable charges, penal charges, if any, and other material terms and conditions." },
  { t: "Acceptance & Execution of Loan Agreement", d: "On acceptance of the sanction terms, the loan agreement is executed and a copy of the agreement and relevant documents is furnished to the borrower." },
  { t: "Disbursement", d: "The loan is disbursed in accordance with the terms agreed with the borrower, directly to the borrower's registered bank account." },
  { t: "Repayment", d: "The borrower repays the loan in accordance with the agreed repayment schedule. Recovery, if required, is conducted strictly in accordance with applicable laws and the Fair Practices Code." },
];

export default function HowItWorks() {
  return (
    <main id="main-content" data-testid="how-it-works-page">
      <div className="gov-page-title">
        <div className="gov-container">
          <h1>How It Works</h1>
          <div className="crumb"><Link to="/">Home</Link> &raquo; <strong>How It Works</strong></div>
        </div>
      </div>

      <div className="gov-container py-5">
        <div className="gov-box mb-4">
          <h2 style={{ fontSize: 17, color: "#0B3D91", marginBottom: 6 }}>The Loan Process — From Application to Repayment</h2>
          <p style={{ fontSize: 13 }}>
            The Company's lending operations are conducted in accordance with the
            Board-approved Fair Practices Code and the Reserve Bank of India's directions
            for Non-Banking Financial Companies. The principal steps in the loan process
            are set out below:
          </p>

          <table className="gov-table" data-testid="how-it-works-table">
            <thead>
              <tr>
                <th style={{ width: "5%" }}>Step</th>
                <th style={{ width: "25%" }}>Stage</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {STEPS.map((s, i) => (
                <tr key={s.t} data-testid={`step-${i}`}>
                  <td><strong>{i + 1}.</strong></td>
                  <td><strong>{s.t}</strong></td>
                  <td>{s.d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="gov-box">
            <h2 style={{ fontSize: 15, color: "#0B3D91", marginBottom: 6 }}>
              Free Look / Cooling-Off Period
            </h2>
            <p style={{ fontSize: 13 }}>
              In accordance with the Company's Interest Rate Policy, a borrower may exit
              the loan within <strong>3 days of loan disbursement</strong> by repaying the
              principal amount and applicable charges. No prepayment penalty shall be
              charged during the cooling-off period.
            </p>
          </div>
          <div className="gov-box">
            <h2 style={{ fontSize: 15, color: "#0B3D91", marginBottom: 6 }}>
              Key Fact Statement (KFS)
            </h2>
            <p style={{ fontSize: 13 }}>
              Every borrower is issued a Key Fact Statement disclosing the loan amount,
              rate of interest, processing fees, penal charges, repayment schedule and
              the grievance escalation path, before signing the loan agreement.
            </p>
          </div>
        </div>

        <div className="gov-notice mt-4">
          <strong>Recovery practices:</strong> The Company and its representatives treat
          borrowers with dignity and respect, avoid harassment or coercive recovery
          methods, refrain from contacting borrowers at inappropriate hours and follow
          ethical, lawful and fair recovery practices at all times, as set out in the{" "}
          <Link to="/policies/fair-practices-code">Fair Practices Code</Link>.
        </div>
      </div>
    </main>
  );
}
