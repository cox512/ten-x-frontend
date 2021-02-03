import React from "react";
import WatchlistEdit from "./WatchlistEdit";
import { findByTestAttr } from "../../../test/testUtils";
import { shallow } from "enzyme";

const setup = (props = {}) => {
  //   const store = storeFactory({ ...props });
  const wrapper = shallow(<WatchlistEdit {...props} />);

  return wrapper;
};

test("renders component w/o error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-watchlists-edit");
  expect(component.length).toBe(1);
});
