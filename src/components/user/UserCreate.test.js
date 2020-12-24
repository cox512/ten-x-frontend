import React from "react";
import UserCreate from "./UserCreate";
import { findByTestAttr } from "../../../test/testUtils";
import { shallow } from "enzyme";

const setup = (props = {}) => {
  //   const store = storeFactory({ ...props });
  const wrapper = shallow(<UserCreate {...props} />);

  return wrapper;
};

test("renders component w/o error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-user-create");
  expect(component.length).toBe(1);
});
