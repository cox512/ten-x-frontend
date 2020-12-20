import React from "react";
import Button from "./components/Button";
import { findByTestAttr } from "../test/testUtils";
import { shallow } from "enzyme";

const setup = (props = { text: "More Info" }) => {
  return shallow(<Button {...props} />);
};

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-button");
  expect(component.length).toBe(1);
});

test("renders no text when stockDay is empty", () => {
  const wrapper = setup({ stockDay: {} });
  const component = findByTestAttr(wrapper, "component-button");
  expect(component.text()).toBe("");
});

test("renders non-empty text when stockDay has data in it", () => {
  const wrapper = setup({ stockDay: { "01. symbol": "F" }, text: "More Info" });
  const component = findByTestAttr(wrapper, "component-button");
  expect(component.text()).not.toBe("");
});
