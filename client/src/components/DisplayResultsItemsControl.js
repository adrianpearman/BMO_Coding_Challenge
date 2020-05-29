// NPM Modules
import React from "react";
import { connect } from "react-redux";
// Actions
import actions from "../redux/actions";

const DisplayResultsItemsControl = ({
  fetchNextPage,
  fetchPreviousPage,
  restaurantState,
  uiState,
}) => {
  const {
    fetchRestaurantSuccess,
    numberOfRestaurants,
    restaurantList,
  } = restaurantState;
  const displayControls =
    numberOfRestaurants === restaurantList.length ? null : (
      <div className="display-results-item-container">
        <div className="display-results-item-container-control">
          <button
            className="previous-button button button-primary"
            disabled={uiState.page === 1 ? true : false}
            onClick={(e) => {
              fetchPreviousPage(e);
            }}
          >
            Previous Page
          </button>

          <p className="text-center current-page">
            Current Page: {uiState.page}
          </p>
          <button
            className="next-button button button-primary"
            disabled={
              uiState.page ===
              Math.ceil(restaurantState.numberOfRestaurants / uiState.perPage)
                ? true
                : false
            }
            onClick={(e) => fetchNextPage(e)}
          >
            Next Page
          </button>
        </div>
      </div>
    );

  return <>{fetchRestaurantSuccess === true ? displayControls : null}</>;
};

const mapStateToProps = ({ restaurantState, uiState }) => {
  return {
    restaurantState,
    uiState,
  };
};

const mapDispatchToProps = {
  fetchNextPage: actions.fetchNextPage,
  fetchPreviousPage: actions.fetchPreviousPage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayResultsItemsControl);
