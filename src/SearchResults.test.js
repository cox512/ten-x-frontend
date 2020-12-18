import React from "react";
import SearchResults from "./components/SearchResults";
import { findByTestAttr } from "../test/testUtils";
import { shallow } from "enzyme";

const setup = () => shallow(<SearchResults />);

test("renders without error", () => {
  //   const wrapper = setup();
  //   const appComponent = findByTestAttr(wrapper, "component-searchResults");
  //   expect(appComponent.length).toBe(1);
});
