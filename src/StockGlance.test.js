import React from "react";
import StockGlance from "./components/StockGlance";

import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without error", () => {
  const wrapper = shallow(<StockGlance />);
  const appComponent = wrapper.find("[data-test='component-stockGlance']");
  expect(appComponent.length).toBe(1);
});
test("renders stock information", () => {});
