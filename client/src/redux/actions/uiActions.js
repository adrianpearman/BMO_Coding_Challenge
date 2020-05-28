import ACTIONS from "./types";

const uiActions = {
  displayRefineSearch: (e) => async (dispatch, getState) => {
    e.preventDefault();
    const { showRefineSearch } = getState().uiState;
    dispatch({
      type: ACTIONS.DISPLAY_REFINE_SEARCH,
      payload: !showRefineSearch,
    });
  },
  updateCity: (e) => {
    let event = e.target.value;
    return {
      type: ACTIONS.UPDATE_CITY,
      payload: event.trim(),
    };
  },
  updatePrice: (e) => {
    let event = e.target.value;
    return {
      type: ACTIONS.UPDATE_PRICE,
      payload: event,
    };
  },
  updateRestaurantName: (e) => {
    let event = e.target.value;
    return {
      type: ACTIONS.UPDATE_RESTAURANT_NAME,
      payload: event.trim(),
    };
  },
  updateAddress: (e) => {
    let event = e.target.value;
    return {
      type: ACTIONS.UPDATE_ADDRESS,
      payload: event.trim(),
    };
  },
  updateState: (e) => {
    let event = e.target.value;
    return {
      type: ACTIONS.UPDATE_STATE,
      payload: event.trim(),
    };
  },
  updateZipCode: (e) => {
    let event = e.target.value;
    return {
      type: ACTIONS.UPDATE_ZIPCODE,
      payload: event.trim(),
    };
  },
  updateCountry: (e) => {
    let event = e.target.value;
    return {
      type: ACTIONS.UPDATE_COUNTRY,
      payload: event.trim(),
    };
  },
  updatePage: (e) => {
    let event = e.target.value;
    return {
      type: ACTIONS.UPDATE_PAGE,
      payload: event,
    };
  },
  updatePerPage: (e) => {
    let event = e.target.value;
    return {
      type: ACTIONS.UPDATE_PER_PAGE,
      payload: event,
    };
  },
};

export default uiActions;
