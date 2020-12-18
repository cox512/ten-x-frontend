import React from "react";
import { findByTestAttr } from "../test/testUtils";
import { shallow } from "enzyme";
import App from "./components/App";

const setup = (props = {}) => {
  return shallow(<App {...props} />);
};

test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});
