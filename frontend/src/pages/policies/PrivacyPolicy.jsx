import React from "react";
import PolicyLayout from "../../components/common/PolicyLayout";
import { X } from "../../components/common/Placeholder";

export default function PrivacyPolicy() {
  return (
    <PolicyLayout title="Privacy Policy" lastUpdated={<X>DD MMM YYYY</X>}>
      <p>
        At Logix Finance &amp; Investment Private Limited, accessible from
        www.logixfinance&amp;investment.com, protecting the privacy and confidentiality
        of our customers and website visitors is one of our highest priorities. This
        Privacy Policy explains how we collect, use, store, process, and safeguard your
        information when you access our website, services, and digital platforms. If
        you have any questions or require further information regarding this Privacy
        Policy, you may contact us through the details provided below.
      </p>
      <p>
        This Privacy Policy applies solely to information collected through our website
        and digital platforms and does not apply to information collected offline or
        through any other channels unless specifically stated.
      </p>

      <h2>Consent</h2>
      <p>
        By using our website and services, you hereby consent to this Privacy Policy
        and agree to its terms and conditions.
      </p>

      <h2>Information We Collect</h2>
      <p>
        The personal information that you are asked to provide, and the reasons why
        you are asked to provide it, will be made clear to you at the point we ask you
        to provide your personal information. If you contact us directly, we may
        receive additional information about you such as your name, email address,
        phone number, the contents of the message and/or attachments you may send us,
        and any other information you may choose to provide. When you register for an
        Account, we may ask for your contact information, including items such as name,
        company name, address, email address, and telephone number.
      </p>

      <h2>How We Use Your Information</h2>
      <p>The information collected by us may be used for the following purposes:</p>
      <ul>
        <li>To provide, operate, and maintain our website and services</li>
        <li>To process loan applications and customer requests</li>
        <li>To verify identity and conduct KYC checks</li>
        <li>To assess creditworthiness and eligibility</li>
        <li>To improve, personalize, and enhance user experience</li>
        <li>To communicate with customers regarding services, updates, and support</li>
        <li>To send service-related notifications and promotional communications</li>
        <li>To prevent fraud, unauthorized access, and misuse</li>
        <li>To comply with legal, regulatory, and statutory obligations</li>
        <li>To develop new products, services, and features</li>
      </ul>

      <h2>Cookies and Tracking Technologies</h2>
      <p>
        Our website may use cookies and similar tracking technologies to improve
        functionality and user experience. Cookies help us:
      </p>
      <ul>
        <li>Remember user preferences</li>
        <li>Analyze website traffic and performance</li>
        <li>Improve website functionality</li>
        <li>Customize website content and user experience</li>
      </ul>
      <p>
        Users may choose to disable cookies through browser settings; however, certain
        features of the website may not function properly.
      </p>

      <h2>Log Files</h2>
      <p>
        We follow standard industry practices of using log files. These files may
        collect information such as IP addresses, browser type, ISP details,
        timestamps, referring/exit pages, and click activity. This information is used
        for:
      </p>
      <ul>
        <li>Website administration</li>
        <li>Trend analysis</li>
        <li>Security monitoring</li>
        <li>User behavior analysis</li>
        <li>Improving website performance</li>
      </ul>
      <p>Such information is not linked to personally identifiable information.</p>

      <h2>Sharing and Disclosure of Information</h2>
      <p>
        We do not sell, rent, or trade customer personal information to third parties.
        However, information may be shared with:
      </p>
      <ul>
        <li>Regulatory authorities and government agencies</li>
        <li>Credit bureaus and financial institutions</li>
        <li>Technology partners and service providers</li>
        <li>Recovery and collection agencies</li>
        <li>Auditors, consultants, and legal advisors</li>
        <li>Law enforcement authorities where required under applicable law</li>
      </ul>
      <p>
        All disclosures are made strictly on a need-to-know basis and in compliance
        with applicable laws and regulations.
      </p>

      <h2>Data Security</h2>
      <p>
        We maintain appropriate administrative, technical, and physical safeguards to
        protect customer information against unauthorized access, misuse, alteration,
        disclosure, or destruction. We strive to use commercially acceptable means to
        protect your information.
      </p>

      <h2>Third-Party Links</h2>
      <p>
        Our website may contain links to third-party websites or services. We are not
        responsible for the privacy practices or content of such third-party platforms.
        Users are advised to review the respective privacy policies of external
        websites before providing any information.
      </p>

      <h2>Children's Privacy</h2>
      <p>
        At Logix Finance &amp; Investment Private Limited, we do not knowingly gather
        any Personal Identifiable Information from individuals under the age of 13. If
        you suspect that your child has inadvertently provided such information on our
        platform, we strongly advise you to promptly reach out to us. We are dedicated
        to taking swift action to eliminate any such data from our records. As part of
        our commitment to safeguarding children online, we urge parents and guardians
        to actively engage in, supervise, and guide their children's internet usage.
      </p>

      <h2>Changes to This Privacy Policy</h2>
      <p>
        Logix Finance &amp; Investment Private Limited reserves the right to update,
        modify, or revise this Privacy Policy at any time without prior notice. Changes
        shall become effective immediately upon posting on the website. Users are
        encouraged to review this page periodically.
      </p>

      <h2>For More Information</h2>
      <table className="gov-table">
        <tbody>
          <tr><td style={{ width: "30%" }}><strong>Email</strong></td><td>info@logixfinance&amp;investment.com</td></tr>
          <tr><td><strong>Phone No.</strong></td><td>879624245</td></tr>
        </tbody>
      </table>
    </PolicyLayout>
  );
}
