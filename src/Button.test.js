import React from "react";
import Button from "./components/Button";

import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without error", () => {
  const wrapper = shallow(<Button />);
  const appComponent = wrapper.find("[data-test='component-button']");
  expect(appComponent.length).toBe(1);
});
test("renders button", () => {});
