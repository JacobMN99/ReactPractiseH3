import React from "react";
import "./Header.css";

export default function Header({headerText }) {
  return (
    <header className="header">
        <h1>{headerText}</h1>
    </header>
  );
}