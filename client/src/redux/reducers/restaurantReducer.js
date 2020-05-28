import ACTIONS from "../actions/types";

const initialState = {
  displayResultsNumberBeginning: 0,
  displayResultsNumberEnding: 0,
  fetchedCity: null,
  fetchRestaurantErrorMsg: null,
  fetchRestaurantSuccess: null,
  numberOfRestaurants: 0,
  restaurantList: [],
};

export const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_RESTAURANTS_SUCCESS: {
      const {
        city,
        current_page,
        per_page,
        restaurants,
        total_entries,
      } = action.payload;

      const restaurantListCount = restaurants.length;
      const displayResultsNumberBeginning =
        current_page * per_page - per_page + 1;
      const displayResultsNumberEnding =
        current_page * per_page + restaurantListCount - per_page;

      return {
        ...state,
        displayResultsNumberBeginning,
        displayResultsNumberEnding,
        fetchedCity: city,
        fetchRestaurantErrorMsg: null,
        fetchRestaurantSuccess: true,
        restaurantList: restaurants,
        numberOfRestaurants: total_entries,
      };
    }
    case ACTIONS.FETCH_RESTAURANTS_ERROR: {
      return {
        ...state,
        fetchRestaurantErrorMsg: action.payload.message,
        fetchRestaurantSuccess: false,
      };
    }
    default: {
      return state;
    }
  }
};
