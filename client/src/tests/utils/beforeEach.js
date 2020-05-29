import configureStore from "redux-mock-store";

const middlewares = [];
const mockStore = configureStore(middlewares);
const store = mockStore({});

export const beforeEachTest = beforeEach(() => {
  store.clearActions();
});
