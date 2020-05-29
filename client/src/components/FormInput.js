// NPM Modules
import React from "react";
import { connect } from "react-redux";
// Actions
import actions from "../redux/actions";

const FormInput = ({
  displayShowMenuHandler,
  fetchRestaurantList,
  restaurantState,
  uiState,
  updateCity,
  updatePrice,
  updateRestaurantName,
  updateAddress,
  updateState,
  updateZipCode,
  updateCountry,
  updatePage,
  updatePerPage,
}) => {
  const { numberOfRestaurants } = restaurantState;
  const { perPage, showRefineSearch } = uiState;
  const numberOfPages = Math.ceil(numberOfRestaurants / perPage);
  let availablePages = [];
  for (let index = 0; index < numberOfPages; index++) {
    availablePages.push(index + 1);
  }

  return (
    <form className="form-container" onSubmit={(e) => fetchRestaurantList(e)}>
      <div className="form-container_search">
        <div className="form-group column-1">
          <label className="form-group-label" htmlFor="updateCity">
            Select City
          </label>
          <input
            className="form-group-input"
            id="updateCity"
            onChange={(e) => updateCity(e)}
            placeholder="Please Select a City"
          />
        </div>
      </div>

      <div className="form-container_refine-search">
        <h2 className="text-center">Refine Search:</h2>
        <p
          className="refine-search text-center"
          onClick={(e) => {
            displayShowMenuHandler(e);
          }}
        >
          {showRefineSearch ? "Close Menu " : "Show Menu"}
        </p>
        {showRefineSearch ? (
          <div className="form-container_refine-search-menu">
            <div className="form-container-row my-1">
              <div className="form-group column-2 ">
                <label
                  className="form-group-label"
                  htmlFor="updateRestaurantName"
                >
                  Search by Restaurant Name
                </label>
                <input
                  className="form-group-input"
                  id="updateRestaurantName"
                  onChange={(e) => updateRestaurantName(e)}
                  placeholder="Please Enter an Restaurant Name"
                />
              </div>

              <div className="form-group column-2">
                <label className="form-group-label" htmlFor="updateAddress">
                  Search by Restaurant Name
                </label>
                <input
                  className="form-group-input"
                  id="updateAddress"
                  onChange={(e) => updateAddress(e)}
                  placeholder="Please Enter an Address"
                />
              </div>
            </div>
            <div className="form-container-row my-1">
              <div className="form-group column-2">
                <label className="form-group-label" htmlFor="updateState">
                  Search by State
                </label>
                <input
                  className="form-group-input"
                  id="updateState"
                  onChange={(e) => updateState(e)}
                  placeholder="Please Enter a State"
                />
              </div>

              <div className="form-group column-2">
                <label className="form-group-label" htmlFor="updateZipCode">
                  Zip Code
                </label>
                <input
                  className="form-group-input"
                  id="updateZipCode"
                  maxLength={2}
                  onChange={(e) => updateZipCode(e)}
                  placeholder="Input a Zip Code"
                />
              </div>
            </div>
            <div className="form-container-row my-1">
              <div className="form-group column-2">
                <label className="form-group-label" htmlFor="updateCountry">
                  Country
                </label>
                <input
                  className="form-group-input"
                  id="updateCountry"
                  maxLength={2}
                  onChange={(e) => updateCountry(e)}
                  placeholder="Enter a Country"
                />
              </div>

              <div className="form-group column-2">
                <label className="form-group-label" htmlFor="updatePrice">
                  Select a Price
                </label>
                <select
                  className="form-group-select"
                  defaultValue={"default"}
                  id="updatePrice"
                  onChange={(e) => updatePrice(e)}
                >
                  <option value="default" disabled>
                    Please Select a Price
                  </option>
                  <option value="1">1 - $</option>
                  <option value="2">2 - $$</option>
                  <option value="3">3 - $$$</option>
                  <option value="4">4 - $$$$</option>
                </select>
              </div>
            </div>
            <div className="form-container-row my-1">
              <div className="form-group column-2">
                <label className="form-group-label" htmlFor="updatePerPage">
                  Select Result Page
                </label>
                <select
                  className="form-group-select"
                  defaultValue={"default"}
                  id="updatePerPage"
                  onChange={(e) => updatePage(e)}
                >
                  <option value="default">---</option>
                  {availablePages.map((index, key) => {
                    return (
                      <option key={key} value={index}>
                        {index}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="form-group column-2">
                <label className="form-group-label" htmlFor="updatePerPage">
                  Results Per Page
                </label>
                <select
                  className="form-group-select"
                  defaultValue={"default"}
                  id="updatePerPage"
                  onChange={(e) => updatePerPage(e)}
                >
                  <option value="default" disabled>
                    Please Select a Price
                  </option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
              </div>
            </div>
          </div>
        ) : null}

        <div className="form-container-row my-2">
          <span className="column-1">
            <button
              className="button button-primary full-width"
              onClick={(e) => fetchRestaurantList(e)}
            >
              Search
            </button>
          </span>
        </div>
      </div>
    </form>
  );
};

const mapStateToProps = ({ restaurantState, uiState }) => {
  return {
    restaurantState,
    uiState,
  };
};

const mapDispatchToProps = {
  displayShowMenuHandler: actions.displayRefineSearch,
  fetchRestaurantList: actions.fetchRestaurantList,
  updateCity: actions.updateCity,
  updatePrice: actions.updatePrice,
  updateRestaurantName: actions.updateRestaurantName,
  updateAddress: actions.updateAddress,
  updateState: actions.updateState,
  updateZipCode: actions.updateZipCode,
  updateCountry: actions.updateCountry,
  updatePage: actions.updatePage,
  updatePerPage: actions.updatePerPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormInput);
