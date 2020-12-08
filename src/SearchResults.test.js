import React from "react";
import SearchResults from "./components/SearchResults";

import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<SearchResults />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

// test("renders without error", () => {
//   const wrapper = setup();
//   const appComponent = findByTestAttr(wrapper, "component-searchResults");
//   expect(appComponent.length).toBe(1);
// });
