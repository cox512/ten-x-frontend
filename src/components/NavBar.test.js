import React from "react";
import { findByTestAttr } from "../../test/testUtils";
import { shallow } from "enzyme";
import NavBar from "./NavBar";

const setup = (initialState) => {
  return shallow(<NavBar {...initialState} />);
};

test("renders component w/o error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-navbar");
  expect(component.length).toBe(1);
});
