import React from "react";
import "./Card.css";

function Card({ title, image, price, description, buttonText }) {
    return (
        <article className="cardBase">
            <h3 className="cardTitle">{title}</h3>

            {image ? (
                <img className="cardImage" src={image} alt={title} />
            ) : (
                <div className="cardImage placeholder">No image</div>
            )}

            <p className="cardPrice">{price}</p>
            <p className="cardDescription">{description}</p>
            <button className="cardButton">{buttonText}</button>
        </article>
    );
}

export default Card;