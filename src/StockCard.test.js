import React from "react";
import { findByTestAttr } from "./test/testUtils";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import StockCard from "./components/StockCard";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<StockCard />);

// test("renders without error", () => {
//   const wrapper = setup();
//   const appComponent = findByTestAttr(wrapper, "component-stockCard");
//   expect(appComponent.length).toBe(1);
// });
