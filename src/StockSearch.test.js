import React from "react";
import StockSearch from "./components/StockSearch";

import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<StockSearch />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

// test("renders without error", () => {
//   const wrapper = setup();
//   const appComponent = findByTestAttr(wrapper, "component-stockSearch");

//   expect(appComponent.length).toBe(1);
// });
