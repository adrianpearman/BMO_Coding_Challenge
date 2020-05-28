import ACTIONS from "../actions/types";

const initialState = {
  address: "",
  city: "",
  country: "",
  page: 1, // value between 1 and 4
  perPage: 25, // value can be either  [5, 10, 15, 25, 50, 100]
  price: 1,
  restaurantName: "",
  showRefineSearch: false,
  state: "",
  zipCode: "",
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.DISPLAY_REFINE_SEARCH: {
      return {
        ...state,
        showRefineSearch: action.payload,
      };
    }
    case ACTIONS.UPDATE_CITY: {
      return {
        ...state,
        city: action.payload,
      };
    }
    case ACTIONS.UPDATE_PRICE: {
      return {
        ...state,
        price: action.payload,
      };
    }
    case ACTIONS.UPDATE_RESTAURANT_NAME: {
      return {
        ...state,
        restaurantName: action.payload,
      };
    }
    case ACTIONS.UPDATE_ADDRESS: {
      return {
        ...state,
        address: action.payload,
      };
    }
    case ACTIONS.UPDATE_STATE: {
      return {
        ...state,
        state: action.payload,
      };
    }
    case ACTIONS.UPDATE_ZIPCODE: {
      return {
        ...state,
        zipCode: action.payload,
      };
    }
    case ACTIONS.UPDATE_COUNTRY: {
      return {
        ...state,
        country: action.payload,
      };
    }
    case ACTIONS.UPDATE_PAGE: {
      return {
        ...state,
        page: action.payload,
      };
    }
    case ACTIONS.UPDATE_PER_PAGE: {
      return {
        ...state,
        perPage: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
