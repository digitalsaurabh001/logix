import React from "react";
import PolicyLayout from "../../components/common/PolicyLayout";
import { X } from "../../components/common/Placeholder";

const TOC = [
  { id: "scope", label: "Scope" },
  { id: "collect", label: "Information We Collect" },
  { id: "use", label: "How We Use Information" },
  { id: "consent", label: "Consent & Digital Lending" },
  { id: "sharing", label: "Sharing of Information" },
  { id: "security", label: "Data Security" },
  { id: "cookies", label: "Cookies" },
  { id: "rights", label: "Your Rights" },
  { id: "grievance", label: "Privacy Grievances" },
];

export default function PrivacyPolicy() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      intro="How we collect, use, share and protect your personal information — including specific commitments for our digital lending operations."
      toc={TOC}
    >
      <section id="scope">
        <h2>1. Scope</h2>
        <p>
          This Privacy Policy applies to all information collected by Logix Finance and
          Investment ("we", "us", "our") through our website, mobile applications,
          customer service channels and lending operations.
        </p>
      </section>

      <section id="collect">
        <h2>2. Information We Collect</h2>
        <h4>2.1 Identity Information</h4>
        <p>Name, date of birth, gender, PAN, Aadhaar (last four digits / masked, as permitted), photograph, signature.</p>
        <h4>2.2 Contact Information</h4>
        <p>Postal address, email address, mobile number.</p>
        <h4>2.3 Financial Information</h4>
        <p>Income details, bank statements, ITRs, employer details, business details, credit bureau information.</p>
        <h4>2.4 Transactional Information</h4>
        <p>Loan application, sanction, disbursement and repayment data.</p>
        <h4>2.5 Technical Information</h4>
        <p>IP address, device identifiers, browser type, OS, app crash logs and geo-location (only where required, with consent).</p>
      </section>

      <section id="use">
        <h2>3. How We Use Information</h2>
        <ul>
          <li>To process loan applications and assess eligibility.</li>
          <li>To complete KYC and meet regulatory requirements.</li>
          <li>To service your loan, including communication of EMIs and statements.</li>
          <li>To prevent fraud and protect the security of our services.</li>
          <li>To improve our products and services and conduct internal analytics.</li>
        </ul>
      </section>

      <section id="consent">
        <h2>4. Consent & Digital Lending</h2>
        <p>
          In line with the RBI's Digital Lending Guidelines, we follow these
          principles:
        </p>
        <ul>
          <li>Data is collected on a need-basis only and with the borrower's explicit consent.</li>
          <li>The purpose, type and recipients of data collected are clearly disclosed at the time of consent.</li>
          <li>Biometric data is not stored, except where permitted by law.</li>
          <li>Borrowers may revoke consent and request deletion of data, subject to retention requirements under applicable law.</li>
          <li>Lending Service Providers and Digital Lending Apps engaged by us are disclosed on our <a href="/policies/regulatory-disclosures">Regulatory & Statutory Disclosures</a> page.</li>
        </ul>
      </section>

      <section id="sharing">
        <h2>5. Sharing of Information</h2>
        <p>We may share your information with:</p>
        <ul>
          <li>Credit Information Companies (CIBIL, Experian, Equifax, CRIF Highmark).</li>
          <li>Banking and payment partners required to disburse and collect loans.</li>
          <li>Regulators, statutory authorities and law-enforcement agencies, where legally mandated.</li>
          <li>Service providers acting on our behalf under contractual obligations of confidentiality.</li>
        </ul>
        <p>
          We do not sell your personal information to third parties for marketing
          purposes.
        </p>
      </section>

      <section id="security">
        <h2>6. Data Security</h2>
        <p>
          We employ reasonable security practices and procedures, including
          encryption-in-transit, encryption-at-rest, role-based access controls,
          periodic audits and staff training. Servers are hosted in India in
          accordance with applicable regulatory requirements.
        </p>
      </section>

      <section id="cookies">
        <h2>7. Cookies</h2>
        <p>
          We use cookies and similar technologies to operate our website, remember your
          preferences, measure performance and improve user experience. You may
          control cookies through your browser settings.
        </p>
      </section>

      <section id="rights">
        <h2>8. Your Rights</h2>
        <ul>
          <li>Right to access and obtain a copy of your personal information.</li>
          <li>Right to correct or update inaccurate information.</li>
          <li>Right to withdraw consent, subject to legal and contractual obligations.</li>
          <li>Right to portability and erasure, as applicable under law.</li>
        </ul>
        <p>
          To exercise these rights, please write to <X />@<X />.in.
        </p>
      </section>

      <section id="grievance">
        <h2>9. Privacy Grievances</h2>
        <p>
          For any privacy-related complaints, please contact our Grievance Redressal
          Officer as listed on the{" "}
          <a href="/policies/grievance-redressal">Grievance Redressal Mechanism</a>{" "}
          page.
        </p>
      </section>
    </PolicyLayout>
  );
}
