import React from "react";
import { Link, useLocation } from "react-router-dom";

const POLICIES = [
  { to: "/policies/fair-practices-code", label: "Fair Practices Code" },
  { to: "/policies/interest-rate-policy", label: "Interest Rate Policy" },
  { to: "/policies/grievance-redressal", label: "Grievance Redressal" },
  { to: "/policies/privacy-policy", label: "Privacy Policy" },
  { to: "/policies/kyc-aml-policy", label: "KYC & AML Policy" },
  { to: "/policies/rates-fees-charges", label: "Rates, Fees & Charges" },
  { to: "/policies/terms-conditions", label: "Terms & Conditions" },
  { to: "/policies/refund-cancellation", label: "Refund & Cancellation" },
  { to: "/policies/disclaimer", label: "Disclaimer" },
  { to: "/policies/regulatory-disclosures", label: "Regulatory Disclosures" },
];

/*
  Government-style policy layout.
  - Page title band with breadcrumb
  - 2-col: left sidebar with policy links, right content area in plain table-like style
*/
export default function PolicyLayout({ title, lastUpdated, children }) {
  const loc = useLocation();
  return (
    <main id="main-content" data-testid="policy-layout">
      <div className="gov-page-title">
        <div className="gov-container">
          <h1>{title}</h1>
          <div className="crumb" data-testid="breadcrumb">
            <Link to="/">Home</Link> &raquo; Policies &raquo; <strong>{title}</strong>
          </div>
        </div>
      </div>

      <div className="gov-container py-5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Sidebar */}
          <aside className="md:col-span-3">
            <div className="gov-side" data-testid="policy-sidebar">
              <div className="head">Policies &amp; Disclosures</div>
              <ul>
                {POLICIES.map((p) => (
                  <li key={p.to}>
                    <Link
                      to={p.to}
                      data-testid={`sidebar-${p.to.split("/").pop()}`}
                      className={loc.pathname === p.to ? "active" : ""}
                    >
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="gov-notice mt-3" style={{ fontSize: 12 }} data-testid="sidebar-notice">
              <strong>Note:</strong> Documents on this page are also available in printed form
              at our registered office on request.
            </div>
          </aside>

          {/* Main content */}
          <article className="md:col-span-9">
            <div className="gov-box">
              <div className="gov-content">
                {children}
              </div>

              <hr style={{ borderColor: "#d8d8d8", margin: "16px 0" }} />

              <div style={{ fontSize: 12, color: "#555" }}>
                <strong>Last Updated:</strong> {lastUpdated || <span className="ph">DD MMM YYYY</span>} &nbsp;|&nbsp;
                <strong>Approved by:</strong> Board of Directors, Logix Finance &amp; Investment Pvt Ltd
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
