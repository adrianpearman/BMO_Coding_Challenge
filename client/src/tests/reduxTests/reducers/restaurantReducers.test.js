import types from "../../../redux/actions/types";
import { restaurantReducer } from "../../../redux/reducers/restaurantReducer";
import beforeEachTest from "../../utils/beforeEach";
import { mockAction } from "../../utils/mockAction";
import { mockData } from "../../utils/mockData";

describe("testing restaurant reducer", () => {
  beforeEachTest;
  // ACTIONS.FETCH_RESTAURANTS_SUCCESS
  it("handles ACTIONS.FETCH_RESTAURANTS_SUCCESS properly", () => {
    const action = mockAction(
      types.FETCH_RESTAURANTS_SUCCESS,
      mockData.restaurantDataSuccess.data
    );
    const newState = restaurantReducer([], action);

    const { per_page, current_page, restaurants } = action.payload;

    const restaurantListCount = restaurants.length;
    const displayResultsNumberBeginning =
      current_page * per_page - per_page + 1;
    const displayResultsNumberEnding =
      current_page * per_page + restaurantListCount - per_page;

    expect(newState).toEqual({
      displayResultsNumberBeginning,
      displayResultsNumberEnding,
      restaurantList: mockData.restaurantDataSuccess.data.restaurants,
      numberOfRestaurants: mockData.restaurantDataSuccess.data.total_entries,
      fetchRestaurantSuccess: true,
      fetchRestaurantErrorMsg: null,
    });
  });
  // ACTIONS.FETCH_RESTAURANTS_ERROR
  it("handles ACTIONS.FETCH_RESTAURANTS_ERROR properly", () => {
    const action = mockAction(
      types.FETCH_RESTAURANTS_ERROR,
      mockData.restaurantDataError
    );
    const newState = restaurantReducer([], action);
    expect(newState).toEqual({
      fetchRestaurantSuccess: false,
      fetchRestaurantErrorMsg: mockData.restaurantDataError.message,
    });
  });
  // UKNOWN TYPE OF ACTION
  it("handles actions with an unknown type", () => {
    const action = mockAction("kakdhjhaskdhjasd", 50);
    const newState = restaurantReducer([], action);
    expect(newState).toEqual([]);
  });
});
