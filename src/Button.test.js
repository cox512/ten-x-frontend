import React from "react";
import Button from "./components/Button";
import { findByTestAttr } from "../test/testUtils";

import { shallow } from "enzyme";

const setup = () => shallow(<Button />);

test("renders without error", () => {
  const wrapper = setup();
  const appComponent = wrapper.find("[data-test='component-button']");
  expect(appComponent.length).toBe(1);
});
