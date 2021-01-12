import React from "react";
import UserShow from "./UserShow";
import { findByTestAttr } from "../../../test/testUtils";
import { shallow } from "enzyme";

const setup = (props = {}) => {
  //   const store = storeFactory({ ...props });
  const wrapper = shallow(<UserShow {...props} />);

  return wrapper;
};

test("renders component w/o error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-user-show");
  expect(component.length).toBe(1);
});
