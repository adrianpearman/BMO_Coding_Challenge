import types from "../../../redux/actions/types";
import actions from "../../../redux/actions";
import beforeEachTest from "../../utils/beforeEach";
import { mockData } from "../../utils/mockData";

const {
  per_page,
  current_page,
  restaurants,
} = mockData.restaurantDataSuccess.data;

const {
  name: restaurantName,
  address,
  city,
  state,
  postal_code,
  country,
  price,
} = restaurants[0];

describe("testing updateCity()", () => {
  beforeEachTest;
  const event = {
    preventDefault() {},
    target: { value: city },
  };
  const action = actions.updateCity(event);

  it("has the correct type", () => {
    expect(action.type).toEqual(types.UPDATE_CITY);
  });

  it("has the correct payload", () => {
    expect(action.payload).toEqual(event.target.value);
  });
});

describe("testing updatePrice()", () => {
  beforeEachTest;
  const event = {
    preventDefault() {},
    target: { value: price },
  };
  const action = actions.updatePrice(event);

  it("has the correct type", () => {
    expect(action.type).toEqual(types.UPDATE_PRICE);
  });

  it("has the correct payload", () => {
    expect(action.payload).toEqual(event.target.value);
  });
});

describe("testing updateRestaurantName()", () => {
  beforeEachTest;
  const event = {
    preventDefault() {},
    target: { value: restaurantName },
  };
  const action = actions.updateRestaurantName(event);

  it("has the correct type", () => {
    expect(action.type).toEqual(types.UPDATE_RESTAURANT_NAME);
  });

  it("has the correct payload", () => {
    expect(action.payload).toEqual(event.target.value);
  });
});

describe("testing updateAddress()", () => {
  beforeEachTest;
  const event = {
    preventDefault() {},
    target: { value: address },
  };
  const action = actions.updateAddress(event);

  it("has the correct type", () => {
    expect(action.type).toEqual(types.UPDATE_ADDRESS);
  });

  it("has the correct payload", () => {
    expect(action.payload).toEqual(event.target.value);
  });
});

describe("testing updateState()", () => {
  beforeEachTest;
  const event = {
    preventDefault() {},
    target: { value: state },
  };
  const action = actions.updateState(event);

  it("has the correct type", () => {
    expect(action.type).toEqual(types.UPDATE_STATE);
  });

  it("has the correct payload", () => {
    expect(action.payload).toEqual(event.target.value);
  });
});

describe("testing updateZipCode()", () => {
  beforeEachTest;
  const event = {
    preventDefault() {},
    target: { value: postal_code },
  };
  const action = actions.updateZipCode(event);

  it("has the correct type", () => {
    expect(action.type).toEqual(types.UPDATE_ZIPCODE);
  });

  it("has the correct payload", () => {
    expect(action.payload).toEqual(event.target.value);
  });
});

describe("testing updateCountry()", () => {
  beforeEachTest;
  const event = {
    preventDefault() {},
    target: { value: country },
  };
  const action = actions.updateCountry(event);

  it("has the correct type", () => {
    expect(action.type).toEqual(types.UPDATE_COUNTRY);
  });

  it("has the correct payload", () => {
    expect(action.payload).toEqual(event.target.value);
  });
});

describe("testing updatePage()", () => {
  beforeEachTest;
  const event = {
    preventDefault() {},
    target: { value: current_page + 1 },
  };
  const action = actions.updatePage(event);

  it("has the correct type", () => {
    expect(action.type).toEqual(types.UPDATE_PAGE);
  });

  it("has the correct payload", () => {
    expect(action.payload).toEqual(event.target.value);
  });
});

describe("testing updatePerPage()", () => {
  beforeEachTest;
  const event = {
    preventDefault() {},
    target: { value: per_page },
  };
  const action = actions.updatePerPage(event);

  it("has the correct type", () => {
    expect(action.type).toEqual(types.UPDATE_PER_PAGE);
  });

  it("has the correct payload", () => {
    expect(action.payload).toEqual(event.target.value);
  });
});
