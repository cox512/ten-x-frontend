import React from "react";
import Button from "./components/Button";

import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<Button />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

// test("renders without error", () => {
//   const wrapper = setup();
//   const appComponent = wrapper.find("[data-test='component-button']");
//   expect(appComponent.length).toBe(1);
// });
