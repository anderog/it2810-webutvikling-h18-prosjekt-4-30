import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import Enzyme, { shallow } from "enzyme";

import SearchField from "../components/SearchField";

it("Matches snapshot", () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(<SearchField />);
  expect(result).toMatchSnapshot();
});
