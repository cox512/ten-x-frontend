import React from "react";
import WatchlistsEdit from "./WatchlistsEdit";
import { findByTestAttr } from "../../../test/testUtils";
import { shallow } from "enzyme";

const setup = (props = {}) => {
  //   const store = storeFactory({ ...props });
  const wrapper = shallow(<WatchlistsEdit {...props} />);

  return wrapper;
};

test("renders component w/o error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-watchlists-edit");
  expect(component.length).toBe(1);
});
