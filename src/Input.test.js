import React from "react";
import Input from "./components/Input";
import { findByTestAttr } from "../test/testUtils";
import { shallow } from "enzyme";

const setup = () => shallow(<Input />);

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-input");

  expect(component.length).toBe(1);
});
