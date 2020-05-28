import ACTIONS from "./types";
import axios from "axios";

const restaurantActions = {
  fetchRestaurantList: (e) => async (dispatch, getState) => {
    e.preventDefault();
    const {
      city,
      price,
      restaurantName,
      address,
      state,
      zipCode,
      country,
      perPage,
    } = getState().uiState;

    const page = 1;

    const url = `https://opentable.herokuapp.com/api/restaurants?city=${city}&price=${price}&name=${restaurantName}&address=${address}&state=${state}&zip=${zipCode}&country=${country}&page=${page}&per_page=${perPage}`;

    try {
      let response = await axios.get(url);
      dispatch({
        type: ACTIONS.UPDATE_PAGE,
        payload: 1,
      });
      dispatch({
        type: ACTIONS.FETCH_RESTAURANTS_SUCCESS,
        payload: { ...response.data, city },
      });
    } catch (err) {
      dispatch({
        type: ACTIONS.FETCH_RESTAURANTS_ERROR,
        payload: err,
      });
    }
  },
  fetchNextPage: (e) => async (dispatch, getState) => {
    e.preventDefault();
    const {
      city,
      price,
      restaurantName,
      address,
      state,
      zipCode,
      country,
      page,
      perPage,
    } = getState().uiState;

    const { numberOfRestaurants } = getState().restaurantState;

    // Find max number of pages
    const maxPage = Math.ceil(numberOfRestaurants / perPage);
    // Increment page if not at page limit
    let newPage = page < maxPage ? page + 1 : page;

    const url = `https://opentable.herokuapp.com/api/restaurants?city=${city}&price=${price}&name=${restaurantName}&address=${address}&state=${state}&zip=${zipCode}&country=${country}&page=${newPage}&per_page=${perPage}`;

    try {
      let response = await axios.get(url);
      dispatch({
        type: ACTIONS.UPDATE_PAGE,
        payload: newPage,
      });
      dispatch({
        type: ACTIONS.FETCH_RESTAURANTS_SUCCESS,
        payload: { ...response.data, city },
      });
    } catch (err) {
      dispatch({
        type: ACTIONS.FETCH_RESTAURANTS_ERROR,
        payload: err,
      });
    }
  },
  fetchPreviousPage: (e) => async (dispatch, getState) => {
    e.preventDefault();
    const {
      city,
      price,
      restaurantName,
      address,
      state,
      zipCode,
      country,
      page,
      perPage,
    } = getState().uiState;

    // Decrement page if not at page limit
    let newPage = page > 1 ? page - 1 : page;

    const url = `https://opentable.herokuapp.com/api/restaurants?city=${city}&price=${price}&name=${restaurantName}&address=${address}&state=${state}&zip=${zipCode}&country=${country}&page=${newPage}&per_page=${perPage}`;

    try {
      let response = await axios.get(url);
      dispatch({
        type: ACTIONS.UPDATE_PAGE,
        payload: newPage,
      });
      dispatch({
        type: ACTIONS.FETCH_RESTAURANTS_SUCCESS,
        payload: { ...response.data, city },
      });
    } catch (err) {
      dispatch({
        type: ACTIONS.FETCH_RESTAURANTS_ERROR,
        payload: err,
      });
    }
  },
};

export default restaurantActions;
