import React from "react";
import StockGlance from "./components/StockGlance";
import { findByTestAttr, storeFactory } from "../test/testUtils";
import { shallow } from "enzyme";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<StockGlance store={store} />);
  // console.log(wrapper.debug);
};

setup();

test("renders without error", () => {
  //   const wrapper = setup({ stockDay: {HMM ... THIS WILL END UP BEING SUPER LONG} });
  //   const component = findByTestAttr(wrapper, "component-stockGlance");
  //   expect(component.length).toBe(1);
});

test("renders no text when stockDay is an empty object", () => {});

test("renders non-empty data when stockDay has a key/value inside it", () => {});

//Test that the component renders
//Test that it doesn't render any text at all
//Test that it renders non-empty text (for now we don't care what it says)
