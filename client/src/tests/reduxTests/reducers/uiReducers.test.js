import types from "../../../redux/actions/types";
import { uiReducer } from "../../../redux/reducers/uiReducer";
import beforeEachTest from "../../utils/beforeEach";
import { mockAction } from "../../utils/mockAction";

describe("testing ui reducer", () => {
  beforeEachTest;
  // UPDATE_CITY
  it("handles actions of type UPDATE_CITY", () => {
    const action = mockAction(types.UPDATE_CITY, "Toronto");
    const newState = uiReducer({}, action);
    expect(newState).toEqual({ city: newState.city });
  });
  // UPDATE_PRICE
  it("handles actions of type UPDATE_PRICE", () => {
    const action = mockAction(types.UPDATE_PRICE, 30);
    const newState = uiReducer({}, action);
    expect(newState).toEqual({ price: newState.price });
  });
  // UPDATE_NAME
  it("handles actions of type UPDATE_RESTAURANT_NAME", () => {
    const action = mockAction(types.UPDATE_RESTAURANT_NAME, "Lisa Marie");
    const newState = uiReducer({}, action);
    expect(newState).toEqual({ restaurantName: newState.restaurantName });
  });
  // UPDATE_ADDRESS
  it("handles actions of type UPDATE_ADDRESS", () => {
    const action = mockAction(types.UPDATE_ADDRESS, 30);
    const newState = uiReducer({}, action);
    expect(newState).toEqual({ address: newState.address });
  });
  // UPDATE_STATE
  it("handles actions of type UPDATE_STATE", () => {
    const action = mockAction(types.UPDATE_STATE, "ON");
    const newState = uiReducer({}, action);
    expect(newState).toEqual({ state: newState.state });
  });
  // UPDATE_ZIPCODE
  it("handles actions of type UPDATE_ZIPCODE", () => {
    const action = mockAction(types.UPDATE_ZIPCODE, "M6J 1E3");
    const newState = uiReducer({}, action);
    expect(newState).toEqual({ zipCode: newState.zipCode });
  });
  // UPDATE_COUNTRY
  it("handles actions of type UPDATE_COUNTRY", () => {
    const action = mockAction(types.UPDATE_COUNTRY, "CA");
    const newState = uiReducer({}, action);
    expect(newState).toEqual({ country: newState.country });
  });
  // UPDATE_PAGE
  it("handles actions of type UPDATE_PAGE", () => {
    const action = mockAction(types.UPDATE_PAGE, 2);
    const newState = uiReducer({}, action);
    expect(newState).toEqual({ page: newState.page });
  });
  // UPDATE_PER_PAGE
  it("handles actions of type UPDATE_PER_PAGE", () => {
    const action = mockAction(types.UPDATE_PER_PAGE, 50);
    const newState = uiReducer({}, action);
    expect(newState).toEqual({ perPage: newState.perPage });
  });
  // UNKWON TYPE OF ACTION
  it("handles actions with an unknown type", () => {
    const action = mockAction("kakdhjhaskdhjasd", 50);
    const newState = uiReducer([], action);
    expect(newState).toEqual([]);
  });
});
