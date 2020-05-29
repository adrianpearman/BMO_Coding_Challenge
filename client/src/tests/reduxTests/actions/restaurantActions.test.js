import types from "../../../redux/actions/types";
import actions from "../../../redux/actions";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import beforeEachTest from "../../utils/beforeEach";
import { mockData } from "../../utils/mockData";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const mock = new MockAdapter(axios);
const store = mockStore({});

const data = mockData.restaurantData;

describe("testing fetchRestaurantList()", () => {
  beforeEachTest;
  // FETCH_RESTAURANTS
  it("should have the correct payload of all restaurants", () => {
    mock
      .onGet("http://opentable.herokuapp.com/api/restaurants?city=toronto")
      .reply(200, {
        data,
      });

    store.dispatch(actions.fetchRestaurantList()).then(() => {
      let expectedActions = [
        {
          type: types.FETCH_RESTAURANTS_SUCCESS,
          payload: {
            data,
          },
        },
      ];

      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
