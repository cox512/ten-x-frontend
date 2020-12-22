import React from "react";
import StockGlance from "./StockGlance";
import { findByTestAttr, storeFactory } from "../../../test/testUtils";
import { shallow } from "enzyme";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<StockGlance store={store} />)
    .dive()
    .dive();
  // console.log(wrapper.debug());
  return wrapper;
};

test("component renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-stockGlance");
  expect(component.length).toBe(1);
});

describe("stockDay and stockOverview are empty", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      stockDay: {},
      stockOverview: {},
    };
    wrapper = setup(initialState);
  });
  test("renders no text when stockDay is an empty object", () => {
    const component = findByTestAttr(wrapper, "element-stock-symbol");
    expect(component.text()).toBe("");
  });

  test("renders no text when stockOverview is an empty object", () => {
    const component = findByTestAttr(wrapper, "element-stock-name");
    expect(component.text()).toBe("");
  });
});

describe("stockDay and stockOverview have data", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      stockDay: { "01. symbol": "F" },
      stockOverview: { Name: "Ford Motor Company" },
      stockOverview: { Symbol: "F" },
    };
    wrapper = setup(initialState);
  });
  test("renders non-empty text when stockDay has data", () => {
    const component = findByTestAttr(wrapper, "element-stock-symbol");
    expect(component.text()).not.toBe("");
  });

  test("renders non-empty text when stockOverview has data", () => {
    const component = findByTestAttr(wrapper, "element-stock-name");
    expect(component.text()).not.toBe("");
  });
});
