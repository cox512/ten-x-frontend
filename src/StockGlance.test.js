import React from "react";
import StockGlance from "./components/StockGlance";

import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<StockGlance />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

// test("renders without error", () => {
//   const wrapper = setup();
//   const appComponent = findByTestAttr(wrapper, "component-stockGlance");
//   expect(appComponent.length).toBe(1);
// });
