import React from "react";
import "./InfoCard.css";

export default function InfoCard({hobby1, hobby2, hobby3 }) {
  return (
    <section className="info-card">
      <h2>Hobbyer</h2>
      <ul>
        <li className='li'>{hobby1}</li>
        <li className='li2'>{hobby2}</li>
        <li>{hobby3}</li>
      </ul>
    </section>
  );
}