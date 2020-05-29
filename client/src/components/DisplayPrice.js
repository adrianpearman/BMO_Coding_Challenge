// NPM Modules
import React from "react";
// Utilities
import RenderPrice from "../utils/RenderPrice";

const DisplayPrice = ({ price }) => {
  return (
    <p className="display-result-item_text">
      Price Rating:
      {RenderPrice(price)}
    </p>
  );
};

export default DisplayPrice;
