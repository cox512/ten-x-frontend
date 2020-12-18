import React from "react";
import StockSearch from "./components/StockSearch";
import { findByTestAttr } from "../test/testUtils";
import { shallow } from "enzyme";

const setup = () => shallow(<StockSearch />);

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-stockSearch");

  expect(component.length).toBe(1);
});
