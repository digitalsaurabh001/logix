import React from "react";

// Reusable placeholder — wraps user-editable text in a distinctly monospaced badge
export const X = ({ children = "xxxxxxxx", as: Tag = "span", className = "" }) => (
  <Tag data-testid="placeholder-x" className={`ph ${className}`}>
    {children}
  </Tag>
);

export default X;
