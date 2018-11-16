import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import Enzyme, { shallow } from "enzyme";

import ProductInformation from "../components/ProductInformation";

it("Matches snapshot", () => {
  const renderer = new ShallowRenderer();
  const result = renderer.render(
    <ProductInformation
      productItem={[
        {
          Volum: 0.7,
          Pris: 325.9,
          Literpris: 465.57,
          Farge: "Vannklar.",
          Lukt: "Ren og nøytral aroma.",
          Smak: "Lett. ren og nøytral drikk.",
          Land: "Sverige"
        }
      ]}
    />
  );
  expect(result).toMatchSnapshot();
});

it("renders without crashing", () => {
  shallow(
    <ProductInformation
      productItem={[
        {
          Volum: 0.7,
          Pris: 325.9,
          Literpris: 465.57,
          Farge: "Vannklar.",
          Lukt: "Ren og nøytral aroma.",
          Smak: "Lett. ren og nøytral drikk.",
          Land: "Sverige"
        }
      ]}
    />
  );
});
