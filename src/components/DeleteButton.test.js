import React from "react";
import { shallow } from "enzyme";

import DeleteButton from "./DeleteButton";
import { findByTestAttr } from "../../../test/testUtils";

const setup = (props = {}) => {
  //   const store = storeFactory({ ...props });
  const wrapper = shallow(<DeleteButton {...props} />);

  return wrapper;
};

test("renders component w/o error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-watchlists-delete");
  expect(component.length).toBe(1);
});
