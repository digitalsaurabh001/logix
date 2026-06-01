import React from "react";
import PolicyLayout from "../../components/common/PolicyLayout";
import { X } from "../../components/common/Placeholder";

export default function InterestRatePolicy() {
  return (
    <PolicyLayout title="Interest Rate Policy" lastUpdated={<X>DD MMM YYYY</X>}>
      <h2>Introduction</h2>
      <p>
        The Reserve Bank of India ("RBI") vide Master Direction – Reserve Bank of India
        (Non-Banking Financial Companies – Responsible Business Conduct) Directions,
        2025 has stipulated at Chapter III - Fair Practices Code for all applicable
        Non-Banking Financial Companies ("NBFCs") and has directed all NBFCs to lay
        down appropriate internal policies and procedures in determining rates of
        interest, processing fees, other charges and display the rates of interest and
        the approach for gradation of risks on their website.
      </p>
      <p>
        The objective of adopting and implementing this policy is to institute fair and
        transparent dealings in the lending business in accordance with the aforesaid
        regulatory requirements and the Fair Practices Code adopted by LOGIX FINANCE
        &amp; INVESTMENT PRIVATE LIMITED (hereinafter referred to as the "Company").
        The said Interest Rate and Penal Charges Policy broadly outline the Interest
        Rate Model, applicable penal charges in case of delay in repayment of loan and
        the Company's approach of risk gradation in this regard. This Policy also
        aligns with RBI instructions on Key Fact Statement (KFS), transparency in
        digital lending, and customer protection measures as applicable from time to
        time.
      </p>

      <h2>Objective</h2>
      <p>The main objectives of this Policy are to:</p>
      <ul>
        <li>Ensure that interest rates are determined in a manner as to ensure long term sustainability of business by taking into account the interests of all stakeholders</li>
        <li>Develop and adopt a suitable model for calculation of interest rate</li>
        <li>Enable fixation of interest rates which are reasonable: both actual and perceived</li>
        <li>Ensure that computation of interest is accurate, fair and transparent in line with regulatory guidelines and market practices</li>
        <li>Charge differential rates of interest linked to the risk factors as applicable</li>
        <li>Decide on the principles, methodology and approach of charging spreads to arrive at final rates charged from customers</li>
      </ul>

      <h2>Review and Approval of the Policy</h2>
      <p>
        This policy is approved by the Board of Directors of the Company and the
        Company has adopted the Policy on Interest Rate and Penal Charges taking into
        account relevant factors such as cost of funds, margin and risk premium and
        determining the rate of interest to be charged for loans and advances. Any
        revision in the Policy shall be reviewed by the relevant internal units and
        approved by the Board of Directors. This Policy shall always be read in
        conjunction with extant RBI guidelines, directives, circulars and instructions.
      </p>

      <h2>Disclosures</h2>
      <p>As per extant regulations and in terms of this Policy, the following disclosures shall be made:</p>
      <ul>
        <li>The rate of interest and the approach for gradation of risks and the rationale for charging different rates of interest to different categories of borrowers shall be disclosed by the Company to the borrower or customer and will be communicated explicitly in the sanction letter.</li>
        <li>The rate of interest and the approach for gradation of risks shall also be made available on the website of the Company.</li>
        <li>The information published on the website shall be updated whenever there is a change in the rate of interest.</li>
        <li>The annualized rate of interest shall be disclosed so that the borrower is aware of the exact rates that would be charged in relation to the loan amount.</li>
        <li>Any change in the rate of interest or other charges, as applicable, shall be made prospectively and the same shall be adequately disclosed in the loan agreement, sanction letter and Key Fact Statement ("KFS").</li>
        <li>The quantum and reason for Penal charges shall be clearly disclosed to the customers in the loan agreement, Key Fact Statement, in addition to rate of interest and other charges being displayed on the Company's website.</li>
      </ul>

      <h2>Principles for Determining Interest Rates</h2>
      <p>
        The Company lends money to its customers mainly through digital platforms and
        has various products to cater to the needs of different categories of
        customers. The interest rate of each product is decided from time to time,
        giving due consideration to the following factors:
      </p>

      <h3>Cost of Capital</h3>
      <p>
        The Company has been infused with equity share capital, and accordingly the
        cost of such equity share capital shall be taken into consideration.
      </p>

      <h3>Weighted Average Cost of Borrowing</h3>
      <p>
        Since the Company borrows funds from various banks, financial institutions and
        other external lender(s), the weighted average borrowing cost, as well as
        costs incidental to those borrowings shall be taken into consideration.
      </p>

      <h3>Risk Premium</h3>
      <p>
        Risk related to loss of credit due to short tenure of loan, nature of facility,
        ticket size, geographical condition, customer segment, sourcing channels,
        stability in earnings, past repayment track record, credit reports, etc.
      </p>

      <h3>Opex Cost</h3>
      <p>
        Includes employee expenses, office and infrastructure related fixed and
        variable costs, operations costs, sales and marketing expenses, etc.
      </p>

      <h3>Profit Margin</h3>
      <p>
        Fair profit margin is added to arrive at the lending rate. The company may
        fix different margins for different customers, considering the risk of default.
      </p>

      <h2>Additional Factors Impacting Interest Rate</h2>
      <ul>
        <li>Risk profile of the borrower</li>
        <li>Tenor of the Loan</li>
        <li>Credit score of the borrower</li>
        <li>Credit and default risk in the related business segment</li>
        <li>Historical performance of similar kind of customers</li>
        <li>Prevailing Interest rate trends in the money market</li>
        <li>Treasury bill rates and the sovereign yield curve</li>
        <li>Market scenario relating to credit risk premia/default premia including CDS spreads</li>
        <li>Internal Cost of doing business</li>
        <li>Interest rates offered by other NBFCs in the industry</li>
        <li>Loan documentation and maintenance fees/costs</li>
        <li>Cost for portfolio monitoring</li>
        <li>Customer communication costs</li>
        <li>Recovery costs</li>
      </ul>

      <h2>Rate of Interest</h2>
      <p>
        Rate of Interest shall be offered based on the parameters as explained above.
        Our loans range from INR 5,000/- to INR 1,00,000/- with repayment periods
        starting from 7 days to 12 months for Unsecured consumer loans and 1,00,000 to
        25,00,000 for LAP and 25,000 to 5,00,000 for EMI Loans.
      </p>
      <p>
        The Board of Directors, in its meeting held on <X>DD MMM YYYY</X>, reviewed
        and approved the revised Interest Rate and Penal Charges Policy. The Board
        further resolved to update the interest rate structure as follows:
      </p>

      <table className="gov-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Rate of Interest</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>Pay Day Loan</strong></td><td>0.10% to 1.00% per day</td><td>Unsecured consumer loan</td></tr>
          <tr><td><strong>Business Loan</strong></td><td>8% to 25% per annum</td><td>For self-employed / small businesses</td></tr>
          <tr><td><strong>Loan Against Property (LAP)</strong></td><td>12% to 15% per annum</td><td>Secured against residential / commercial property</td></tr>
          <tr><td><strong>EMI Loan</strong></td><td>24% to 365% per annum</td><td>Maximum tenure: 6 months</td></tr>
        </tbody>
      </table>

      <p>
        The Company shall ensure that interest rates, including for short-tenure or
        high-risk products, are reasonable, transparent, and commensurate with the risk
        profile and cost structure, and do not result in unfair or excessive burden on
        borrowers.
      </p>

      <h2>Types of Interest Rate</h2>
      <ul>
        <li><strong>Fixed Interest Rate:</strong> In fixed rate loans, lenders charge a constant personal loan rate throughout the tenure. Here the total interest payable remains fixed.</li>
        <li><strong>Floating Interest Rate:</strong> Floating or variable personal loan interest rates are susceptible to fluctuating economic conditions and may be revised as per the repo rate.</li>
      </ul>
      <p>
        Currently, all loans offered by LOGIX FINANCE &amp; INVESTMENT PRIVATE LIMITED
        to its customers are at <strong>Fixed Interest rates</strong>.
      </p>

      <h2>Penal Charges in Loan Accounts</h2>
      <p>
        The Company shall ensure that Penalty, if charged, shall be for non-compliance
        of material terms and conditions of the loan agreements by customers. It shall
        not be levied in the form of 'Penal Interest' that is added to the rate of
        interest being levied on the loans and advances.
      </p>
      <p>
        <strong>No Capitalization:</strong> There shall be no capitalization of Penal
        Charges (i.e. no further interest computed on such charges). However, this will
        not affect the normal procedures for compounding of interest in the loan
        account.
      </p>

      <h3>Events of Default Attracting Penal Charges</h3>
      <ul>
        <li>When the repayment of loan amount becomes overdue.</li>
        <li>Breaches to any other important or material terms and conditions of the loan contract.</li>
      </ul>

      <h3>Penal Charges Rate</h3>
      <ul>
        <li><strong>1.25% per day</strong> of outstanding principal loan amount.</li>
      </ul>
      <p>
        The Company shall display the quantum and reason for penal charges to the
        customers in the loan agreement and/or Key Fact Statement (KFS) as applicable.
        The applicable penal charges, as updated from time to time, shall be displayed
        on the Company's website. The Company shall ensure that the applicable penal
        charges are clearly communicated to the borrowers, whenever reminders for
        non-compliance of loan terms are sent. Any instance of levy of penal charges
        and the reason therefore shall also be appropriately communicated to the
        borrowers.
      </p>

      <h3>Unregistered NACH Charges</h3>
      <ul>
        <li>Up to Rs. 500</li>
      </ul>

      <h2>Other Fees and Charges</h2>
      <p>Besides interest, other financial charges may include:</p>
      <ul>
        <li>Processing fees</li>
        <li>Origination fees</li>
        <li>Prepayment/foreclosure charges</li>
        <li>Recovery/collection charges</li>
        <li>Re-scheduling charges</li>
        <li>Penal charges on late repayment</li>
        <li>Payment gateway charges</li>
        <li>Cheque swap charges</li>
        <li>Security swap charges</li>
        <li>Statement of account charges</li>
        <li>Customer care charges</li>
        <li>Credit assessment charges</li>
        <li>ECS/Direct Debit/NACH charges</li>
      </ul>
      <p>
        These fees and charges may vary based on the loan type, exposure limit,
        expenses incurred, and customer segment. All such fees and charges shall be
        clearly communicated to the customer by way of a sanction letter, KFS,
        financing documents and the schedule of charges.
      </p>

      <h2>Loan Cancellation, Waiver &amp; Foreclosure</h2>
      <h3>Loan Cancellation (Free Look Period)</h3>
      <p>
        If a borrower wishes to exit the loan after it has been sanctioned, he/she can
        do so within <strong>3 days of loan disbursement</strong> which shall be the
        free look up period. The principal amount and other applicable charges will
        have to be paid. However, no penalty shall be charged during such period.
      </p>

      <h3>Waiver / Refund</h3>
      <p>
        No claims for refund or waiver of charges / penal charges / additional charges
        for loan documentation, portfolio monitoring, recovery of loan or for other
        shall normally be entertained by the Company and it is at the sole discretion
        of the Company to deal with such requests, if any.
      </p>

      <h3>Foreclosure and Part Prepayment</h3>
      <p>
        Foreclosure of the facility shall not attract any charges; however, the
        borrower shall be liable to pay interest at the contracted rate up to the date
        of final repayment. <strong>Part pre-payment of the facility is strictly not
        permitted.</strong>
      </p>

      <h2>Communication to Customer</h2>
      <p>
        The Company shall communicate the effective rate of interest to customers at
        the time of sanction / availing of the loan through the acceptable mode of
        communication. Interest Rate Policy would be uploaded on the website of the
        company and any change therein would be uploaded on the website of the Company.
        Changes in the rates and charges for existing customers, if any, would be
        communicated to them through various modes of communication such as on the
        website, digital platform and/or via email, letters, SMS, etc. The company
        would ensure that there is no change during the tenure of the loan for such
        loans which had already been contracted with customers.
      </p>

      <h2>Amendments to This Policy</h2>
      <p>
        The Board of Directors is authorized to make appropriate changes to this Policy
        taking into account changes in the money market scenario in the Country which
        includes the upward / downward revision in interest rates applicable to various
        loan products and the relevant charges applicable for such loan products.
      </p>
    </PolicyLayout>
  );
}
