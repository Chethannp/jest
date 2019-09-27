import React from "react";
import Gift from "./gift";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

test("matches the snapshot", () => {
  const wrapper = shallow(<Gift />);
});
