import React from "react";
import { findByTestAttr } from "../../test/testUtils";
import { shallow } from "enzyme";
import Header from "./Header";

const setup = (initialState) => {
  return shallow(<Header {...initialState} />);
};

test("renders component w/o error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-header");
  expect(component.length).toBe(1);
});
