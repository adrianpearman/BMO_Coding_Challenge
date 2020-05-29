// NPM Modules
import React from "react";
import { connect } from "react-redux";
// Utilities
import capitalize from "../utils/Capitalize";
// Components
import DisplayResultsItem from "./DisplayResultsItem";
import DisplayResultsItemsControl from "./DisplayResultsItemsControl";

const DisplayResults = ({ restaurantState }) => {
  const {
    displayResultsNumberBeginning,
    displayResultsNumberEnding,
    fetchedCity,
    fetchRestaurantSuccess,
    numberOfRestaurants,
  } = restaurantState;

  let displayResultsInfo =
    fetchRestaurantSuccess === true ? (
      <div className="display-results-container">
        <p className="display-results-container-text text-center">
          Displaying results for: {capitalize(fetchedCity)}
        </p>
        <p className="display-results-container-text text-center">
          Total Results: {numberOfRestaurants}
        </p>
        {numberOfRestaurants > 0 ? (
          <p className="display-results-container-text text-center">
            Displaying Results {displayResultsNumberBeginning} of{" "}
            {displayResultsNumberEnding}
          </p>
        ) : null}
      </div>
    ) : null;

  let displayResultsError =
    fetchRestaurantSuccess === false ? (
      <p className="display-results-error-message">Error Retriving Results</p>
    ) : null;

  let displayResults =
    fetchRestaurantSuccess === true ? (
      <div className="display-results-content">
        {restaurantState.restaurantList.map((restaurant, index) => {
          return <DisplayResultsItem key={index} data={restaurant} />;
        })}
      </div>
    ) : null;

  return (
    <div className="display-results">
      <DisplayResultsItemsControl />
      {displayResultsInfo}
      {displayResultsError}
      {displayResults}
    </div>
  );
};

const mapStateToProps = ({ restaurantState }) => {
  return {
    restaurantState,
  };
};

export default connect(mapStateToProps)(DisplayResults);
