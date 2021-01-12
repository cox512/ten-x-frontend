import React from "react";
import UserDelete from "./UserDelete";
import { findByTestAttr } from "../../../test/testUtils";
import { shallow } from "enzyme";

const setup = (props = {}) => {
  //   const store = storeFactory({ ...props });
  const wrapper = shallow(<UserDelete {...props} />);

  return wrapper;
};

test("renders component w/o error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-user-delete");
  expect(component.length).toBe(1);
});
