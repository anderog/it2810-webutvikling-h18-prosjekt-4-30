import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import { shallow } from "enzyme";

import TitleBar from "../components/TitleBar";

it("Matches snapshot", () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(<TitleBar />);
  expect(result).toMatchSnapshot();
});

it("renders without crashing", () => {
  shallow(<TitleBar />);
});
