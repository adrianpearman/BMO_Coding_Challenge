// NPM Modules
import React from "react";
// Components
import DisplayPrice from "./DisplayPrice";

const DisplayResultsItem = ({ data }) => {
  return (
    <div className="display-result-item" id={data.id}>
      <h3 className="display-result-item_header">{data.name}</h3>

      <div className="display-result-item_body">
        <div className="display-result-item_container">
          <div className="display-result-item_container-img">
            <img
              alt={`Showcasing the decor and apperance of ${data.name}`}
              className="display-result-item_img"
              meta={data.name}
              src={data.image_url}
            />
          </div>
          <div className="display-result-item_container-content">
            <h4 className="display-result-item_title">Restaurant Details</h4>
            <p className="display-result-item_text">{data.address}</p>
            <p className="display-result-item_text">
              {data.city}, {data.state}, {data.postal_code}
            </p>
            <DisplayPrice price={data.price} />
            <h5 className="display-result-item_title">Contact Information</h5>
            <p className="display-result-item_text">{data.phone}</p>
            <a
              className="display-result-item_text reserve_link"
              href={data.reserve_url}
              target="blank"
            >
              Reservation Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DisplayResultsItem;
