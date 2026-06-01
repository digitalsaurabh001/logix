import React from "react";
import PolicyLayout from "../../components/common/PolicyLayout";
import { X } from "../../components/common/Placeholder";

export default function GrievanceRedressal() {
  return (
    <PolicyLayout title="Grievance Redressal Cell" lastUpdated={<X>DD MMM YYYY</X>}>
      <h2>Our Commitment to You</h2>
      <p>
        At Logix Finance &amp; Investment Private Limited, customer satisfaction and
        ethical business practices are our top priorities. We are committed to
        providing prompt assistance and transparent communication to all our customers.
        If you face any concerns relating to loan application, disbursal, repayment,
        customer service, or any interruption in our services, we encourage you to
        reach out to us through the contact details provided below. We value your time
        and strive to resolve every grievance in a fair, transparent, and timely manner.
      </p>

      <h2>Our Ethical Standards</h2>
      <p>
        We strictly adhere to the guidelines and directives issued by the Reserve Bank
        of India (RBI) and have established an efficient Grievance Redressal Mechanism
        to address and resolve customer concerns effectively. Every complaint received
        by us is treated with utmost seriousness and handled with complete
        confidentiality and professionalism.
      </p>

      <h2>Contact Details</h2>
      <table className="gov-table">
        <tbody>
          <tr><td style={{ width: "30%" }}><strong>Number</strong></td><td>879624245</td></tr>
          <tr><td><strong>Timing</strong></td><td>10:30 AM to 6:30 PM</td></tr>
          <tr><td><strong>Email</strong></td><td>grievance@logixfinance&amp;investment.com</td></tr>
        </tbody>
      </table>

      <h2>Grievance Resolution Timeline</h2>
      <ol>
        <li>
          <strong>Acknowledgment</strong> — Your grievance will be acknowledged within
          <strong> 48 hours </strong> of receipt.
        </li>
        <li>
          <strong>Initial Response</strong> — Our team will provide an initial response
          within <strong> 7 working days</strong>.
        </li>
        <li>
          <strong>Resolution</strong> — We aim to resolve all grievances within
          <strong> 15 working days</strong>, subject to the nature and complexity of
          the issue.
        </li>
      </ol>

      <h2>Escalation to RBI Ombudsman</h2>
      <p>
        If your complaint is not resolved to your satisfaction or if you do not receive
        a response within 30 days, you may approach the Reserve Bank of India under
        the Integrated Ombudsman Scheme:
      </p>
      <ul>
        <li>Online portal: <a href="https://cms.rbi.org.in" target="_blank" rel="noreferrer">https://cms.rbi.org.in</a></li>
        <li>Toll-free number: 14448</li>
        <li>
          By post: Centralised Receipt and Processing Centre, Reserve Bank of India,
          4th Floor, Sector 17, Chandigarh – 160017.
        </li>
      </ul>
    </PolicyLayout>
  );
}
