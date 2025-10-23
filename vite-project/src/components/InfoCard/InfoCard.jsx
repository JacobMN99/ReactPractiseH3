import React from "react";
import "./InfoCard.css";

export default function InfoCard({hobby1, hobby2, hobby3 }) {
  return (
    <section className="info-card">
      <h2>Hobbyer</h2>
      <ul>
        <li>{hobby1}</li>
        <li>{hobby2}</li>
        <li>{hobby3}</li>
      </ul>
    </section>
  );
}