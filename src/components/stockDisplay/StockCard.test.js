import React from "react";
import {
  findByTestAttr,
  storeFactory,
  checkProps,
} from "../../../test/testUtils";
import { shallow } from "enzyme";
import StockCard from "./StockCard";

// const defaultProps = {
//   stockDay: [{ "01. symbol": "F" }],
// };

const setup = (initialState = {}) => {
  // const setupProps = { ...defaultProps };
  const store = storeFactory(initialState);
  const wrapper = shallow(<StockCard store={store} />)
    .dive()
    .dive();
  return wrapper;
};

test("renders componenet without error", () => {
  const wrapper = setup({});
  const component = findByTestAttr(wrapper, "component-stockCard");
  expect(component.length).toBe(1);
});

//I'm just testing to see if the actual components render or not in these next 2 describe statements. I'll test the text values of each in their individual test files.
describe("stockDay state is an empty object", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = { stockDay: {} };
    wrapper = setup(initialState);
  });
  test("does not Render StockGlance component", () => {
    const component = findByTestAttr(wrapper, "component-stockGlance");
    expect(component.length).toBe(0);
  });
  test("does not Render Button", () => {
    const component = findByTestAttr(wrapper, "component-button");
    expect(component.length).toBe(0);
  });
});

describe("stockDay holds stock data", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = { stockDay: { "01. symbol": "F" } };
    wrapper = setup(initialState);
  });
  test("renders stockGlance component", () => {
    const component = findByTestAttr(wrapper, "component-stockGlance");
    expect(component.length).toBe(1);
  });
  test("renders Button component", () => {
    const component = findByTestAttr(wrapper, "component-button");
    expect(component.length).toBe(1);
  });
});

//Checking propTypes
test("does not throw warning with expected props", () => {
  // const expectedProps = { stockDay: {} };
  // checkProps(StockCard, expectedProps);
});
