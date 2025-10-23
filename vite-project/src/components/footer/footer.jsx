import React from "react";
import "./Footer.css";

export default function Footer({footertext }) {
  return (
    <footer className="footer">
          <p>{footertext}</p>
    </footer>
  );
}