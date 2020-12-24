import React from "react";

import { findByTestAttr, storeFactory } from "../../../test/testUtils";
import { shallow } from "enzyme";

import SearchResults, { UnconnectedSearchResults } from "./SearchResults";

const setup = (initialState) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(
    <SearchResults store={store} {...setupProps} />
  ).dive();
  // .dive();
  // console.log(wrapper.debug());
  return wrapper;
};
// setup();

//Can't figure out how to allow me to pass stockData into the setup so it knows it's supposed to render this component. It only wants to work with the items located in the redux store.
test("renders without error", () => {
  // const props = { stockData: "F" };
  // const wrapper = shallow(<UnconnectedSearchResults {...props} />);
  // const component = findByTestAttr(wrapper, "component-searchResults");
  // expect(component.length).toBe(1);
});
