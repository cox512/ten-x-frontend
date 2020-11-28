import React from "react";
import StockSearch from "./components/StockSearch";

import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without error", () => {
  const wrapper = shallow(<StockSearch />);
  const appComponent = wrapper.find("[data-test='component-stockSearch']");
  expect(appComponent.length).toBe(1);
});
test("renders search input", () => {});
