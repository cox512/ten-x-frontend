import React from "react";
import WatchlistsList from "./WatchlistsList";
import { findByTestAttr } from "../../../test/testUtils";
import { shallow } from "enzyme";

const setup = (props = {}) => {
  //   const store = storeFactory({ ...props });
  const wrapper = shallow(<WatchlistsList {...props} />);

  return wrapper;
};

test("renders component w/o error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-watchlists-list");
  expect(component.length).toBe(1);
});
