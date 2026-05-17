import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SiteLayout from "./components/layout/SiteLayout";
import ScrollToTop from "./components/common/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import LoanProducts from "./pages/LoanProducts";
import HowItWorks from "./pages/HowItWorks";
import Contact from "./pages/Contact";

import InterestRatePolicy from "./pages/policies/InterestRatePolicy";
import RatesFeesCharges from "./pages/policies/RatesFeesCharges";
import FairPracticesCode from "./pages/policies/FairPracticesCode";
import GrievanceRedressal from "./pages/policies/GrievanceRedressal";
import KYCAML from "./pages/policies/KYCAML";
import PrivacyPolicy from "./pages/policies/PrivacyPolicy";
import TermsConditions from "./pages/policies/TermsConditions";
import RefundCancellation from "./pages/policies/RefundCancellation";
import Disclaimer from "./pages/policies/Disclaimer";
import RegulatoryDisclosures from "./pages/policies/RegulatoryDisclosures";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <SiteLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/loan-products" element={<LoanProducts />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/policies/interest-rate-policy" element={<InterestRatePolicy />} />
            <Route path="/policies/rates-fees-charges" element={<RatesFeesCharges />} />
            <Route path="/policies/fair-practices-code" element={<FairPracticesCode />} />
            <Route path="/policies/grievance-redressal" element={<GrievanceRedressal />} />
            <Route path="/policies/kyc-aml-policy" element={<KYCAML />} />
            <Route path="/policies/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/policies/terms-conditions" element={<TermsConditions />} />
            <Route path="/policies/refund-cancellation" element={<RefundCancellation />} />
            <Route path="/policies/disclaimer" element={<Disclaimer />} />
            <Route path="/policies/regulatory-disclosures" element={<RegulatoryDisclosures />} />
          </Routes>
        </SiteLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
