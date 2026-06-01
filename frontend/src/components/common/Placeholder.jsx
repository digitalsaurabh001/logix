import React from "react";

// X — placeholder badge for company-specific fields user will edit.
export const X = ({ children = "xxxxxxxx", as: Tag = "span", className = "" }) => (
  <Tag data-testid="placeholder-x" className={`ph ${className}`}>
    {children}
  </Tag>
);

export default X;
