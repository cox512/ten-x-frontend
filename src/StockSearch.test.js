import React from "react";
import StockSearch from "./components/StockSearch";

import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without error", () => {
  const wrapper = shallow(<StockSearch />);
  // expect(wrapper).toBeFalsy();
});
test("renders search input", () => {});
