import React from "react";
import { shallow } from "enzyme";
import Watchlists from "./Watchlists";
import { findByTestAttr } from "../../../test/testUtils";

const setup = (props = {}) => {
  //   const store = storeFactory({ ...props });
  const wrapper = shallow(<Watchlists {...props} />);

  return wrapper;
};

test("renders component w/o error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-watchlists-list");
  expect(component.length).toBe(1);
});
