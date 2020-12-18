import React from "react";
import { findByTestAttr, storeFactory } from "../test/testUtils";
import { shallow } from "enzyme";

import StockCard from "./components/StockCard";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<StockCard store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("No stock currently looked up", () => {
  test("renders without error", () => {
    const initialState = { stockDay: { "01. symbol": "F" } };
    const wrapper = setup(initialState);
    const component = findByTestAttr(wrapper, "component-stockCard");
    expect(component.length).toBe(1);
  });
});
