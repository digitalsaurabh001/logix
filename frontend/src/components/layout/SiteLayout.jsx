import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function SiteLayout({ children }) {
  return (
    <div id="top" className="min-h-screen flex flex-col" style={{ background: "#ffffff" }}>
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
