import React from "react";
import PolicyLayout from "../../components/common/PolicyLayout";
import { X } from "../../components/common/Placeholder";

const TOC = [
  { id: "acceptance", label: "Acceptance of Terms" },
  { id: "eligibility", label: "Eligibility" },
  { id: "use", label: "Use of the Website" },
  { id: "offer", label: "No Offer / No Guarantee" },
  { id: "ip", label: "Intellectual Property" },
  { id: "links", label: "Third-Party Links" },
  { id: "liability", label: "Limitation of Liability" },
  { id: "amend", label: "Amendments" },
  { id: "law", label: "Governing Law & Jurisdiction" },
];

export default function TermsConditions() {
  return (
    <PolicyLayout
      title="Terms & Conditions"
      intro="These Terms govern your access to and use of the website and services of Logix Finance and Investment. Please read them carefully."
      toc={TOC}
    >
      <section id="acceptance">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using this website, you agree to be bound by these Terms,
          our <a href="/policies/privacy-policy">Privacy Policy</a> and all applicable
          laws. If you do not agree, please do not use the website.
        </p>
      </section>

      <section id="eligibility">
        <h2>2. Eligibility</h2>
        <ul>
          <li>You must be at least 18 years of age and legally capable of entering into a contract under the Indian Contract Act, 1872.</li>
          <li>You must provide accurate, current and complete information when applying for any product or service.</li>
        </ul>
      </section>

      <section id="use">
        <h2>3. Use of the Website</h2>
        <p>You agree to use the website only for lawful purposes and undertake not to:</p>
        <ul>
          <li>Misrepresent your identity or impersonate any other person.</li>
          <li>Upload or transmit any material that is unlawful, harmful, defamatory or otherwise objectionable.</li>
          <li>Attempt to gain unauthorised access to our systems or interfere with their operation.</li>
        </ul>
      </section>

      <section id="offer">
        <h2>4. No Offer / No Guarantee</h2>
        <p>
          The information provided on this website is for general information only and
          does not constitute an offer or invitation to provide any loan or financial
          service. All sanctions are subject to the Company's internal credit policy,
          documentation and applicable laws.
        </p>
      </section>

      <section id="ip">
        <h2>5. Intellectual Property</h2>
        <p>
          All content on this website — including text, graphics, logos, icons and
          images — is the property of Logix Finance and Investment or its licensors
          and is protected by applicable intellectual property laws. You may not
          reproduce, distribute or create derivative works from this content without
          our written permission.
        </p>
      </section>

      <section id="links">
        <h2>6. Third-Party Links</h2>
        <p>
          This website may contain links to third-party websites. We do not endorse
          and are not responsible for the content, accuracy or practices of such
          websites. You access them at your own risk.
        </p>
      </section>

      <section id="liability">
        <h2>7. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, Logix Finance and Investment shall
          not be liable for any indirect, incidental, special, consequential or
          punitive damages arising out of or in connection with your use of the
          website.
        </p>
      </section>

      <section id="amend">
        <h2>8. Amendments</h2>
        <p>
          We may amend these Terms from time to time. The amended Terms will be
          effective from the date of publication on this website. Your continued use
          of the website constitutes acceptance of the amended Terms.
        </p>
      </section>

      <section id="law">
        <h2>9. Governing Law & Jurisdiction</h2>
        <p>
          These Terms are governed by the laws of India. Any disputes arising under
          or in connection with these Terms shall be subject to the exclusive
          jurisdiction of the competent courts at <X />, <X /> State.
        </p>
      </section>
    </PolicyLayout>
  );
}
