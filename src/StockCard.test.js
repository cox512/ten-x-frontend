import React from "react";
import StockCard from "./components/StockCard";

import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without error", () => {
  const wrapper = shallow(<StockCard />);
  const appComponent = wrapper.find("[data-test='component-stockCard']");
  expect(appComponent.length).toBe(1);
});
