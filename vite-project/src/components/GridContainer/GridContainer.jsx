import React from "react";
import "./GridContainer.css";

function GridContainer({ children }) {
    return <div className="gridBase">{children}</div>;
}

export default GridContainer;