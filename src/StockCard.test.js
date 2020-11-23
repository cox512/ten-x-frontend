import React from "react";
import StockCard from "./components/StockCard";

import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without error", () => {
  const wrapper = shallow(<StockCard />);
  // expect(wrapper).toBeFalsy();
});
