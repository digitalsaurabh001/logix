import React from "react";
import PolicyLayout from "../../components/common/PolicyLayout";
import { X } from "../../components/common/Placeholder";

const TOC = [
  { id: "objective", label: "Objective" },
  { id: "application", label: "Loan Application & Processing" },
  { id: "appraisal", label: "Appraisal & Loan Terms" },
  { id: "disbursement", label: "Disbursement" },
  { id: "recovery", label: "Recovery of Loans" },
  { id: "confidentiality", label: "Confidentiality" },
  { id: "review", label: "Review" },
];

export default function FairPracticesCode() {
  return (
    <PolicyLayout
      title="Fair Practices Code"
      intro="Our commitment, in writing, to fair, transparent and dignified practices across the lending lifecycle — from application to recovery."
      toc={TOC}
    >
      <section id="objective">
        <h2>1. Objective</h2>
        <p>
          This Fair Practices Code (FPC) has been adopted by Logix Finance and
          Investment in line with the Reserve Bank of India's guidelines on Fair
          Practices for NBFCs. The objective is to:
        </p>
        <ul>
          <li>Promote good and fair practices in dealings with customers.</li>
          <li>Increase transparency so customers have a clear understanding of services.</li>
          <li>Encourage market forces to achieve higher operating standards through competition.</li>
          <li>Foster a fair and cordial relationship between customer and lender.</li>
        </ul>
      </section>

      <section id="application">
        <h2>2. Loan Application & Processing</h2>
        <ul>
          <li>All communication with borrowers will be in a language understood by the borrower.</li>
          <li>The loan application form will include necessary information that affects the interest of the borrower, enabling a meaningful comparison with other lenders.</li>
          <li>The application form indicates the list of documents required to be submitted along with the form.</li>
          <li>An acknowledgement is provided for all loan applications received, along with the expected timeframe within which a decision will be communicated.</li>
        </ul>
      </section>

      <section id="appraisal">
        <h2>3. Appraisal & Loan Terms</h2>
        <ul>
          <li>Loan applications are appraised based on the Company's credit policy.</li>
          <li>Sanction letters / Key Fact Statements convey the amount sanctioned, APR, EMI, all charges and the terms and conditions.</li>
          <li>Borrowers' written acceptance of these terms is recorded on file.</li>
          <li>A copy of the loan agreement, along with a copy of all enclosures quoted therein, is furnished to the borrower at the time of sanction / disbursement.</li>
        </ul>
      </section>

      <section id="disbursement">
        <h2>4. Disbursement</h2>
        <ul>
          <li>Disbursement is made in accordance with the disbursement schedule incorporated in the loan agreement.</li>
          <li>Any decision to recall / accelerate payment or to seek additional securities is taken in accordance with the loan agreement.</li>
          <li>The Company releases all securities on repayment of all dues, subject to any legitimate right or lien for any other claim against the borrower.</li>
        </ul>
      </section>

      <section id="recovery">
        <h2>5. Recovery of Loans</h2>
        <p>
          The Company's recovery practices are guided by courtesy, fair treatment and
          persuasion. Field staff and recovery agents are trained to act in a
          professional, lawful and humane manner.
        </p>
        <ul>
          <li>Borrowers are contacted ordinarily between <X>08:00 hrs and 19:00 hrs</X>, unless the special circumstances of the borrower's business or occupation require otherwise.</li>
          <li>Customers' requests to avoid calls at a particular time or place will be honoured, subject to the borrower providing alternate channels.</li>
          <li>Privacy of the borrower will be respected and recovery practices will not involve persistent or anti-social behaviour.</li>
          <li>The Company will engage recovery agents only after their due verification and training, and a list of authorised agencies / agents will be made available on request.</li>
        </ul>
      </section>

      <section id="confidentiality">
        <h2>6. Confidentiality</h2>
        <p>
          All personal information of borrowers will be treated as confidential and
          shall not be disclosed to any third party, except as required by law or with
          the borrower's express consent, in accordance with our{" "}
          <a href="/policies/privacy-policy">Privacy Policy</a>.
        </p>
      </section>

      <section id="review">
        <h2>7. Review</h2>
        <p>
          This Fair Practices Code is reviewed by the Board of Directors at least once
          every <X>xx</X> months. Any complaints regarding adherence to this Code may
          be raised through our{" "}
          <a href="/policies/grievance-redressal">Grievance Redressal Mechanism</a>.
        </p>
      </section>
    </PolicyLayout>
  );
}
