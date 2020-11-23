import React from "react";
import Button from "./components/Button";

import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without error", () => {
  const wrapper = shallow(<Button />);
  // expect(wrapper).toBeFalsy();
});
test("renders button", () => {});
