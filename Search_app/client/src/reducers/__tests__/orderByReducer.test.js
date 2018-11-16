import {
  PRICE_ASC,
  PRICE_DESC,
  NAME_ASC,
  NAME_DESC
} from "../../actions/types";

import reducer from "../orderByReducer";

const initialState = {
  orderBy: "Varenavn",
  order: 1
};

describe("authenticate reducer", () => {
  it("returns the initialstate", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe("Check reducer cases PRICE_ASC, PRICE_DESC, NAME_ASC, NAME_DESC", () => {
    it("handles PRICE_ASC", () => {
      expect(reducer(initialState, { type: PRICE_ASC })).toEqual({
        orderBy: "Pris",
        order: 1
      });
    });

    it("handles PRICE_ASC should fail", () => {
      expect(reducer(initialState, { type: PRICE_ASC })).not.toEqual({
        orderBy: "Varenavn",
        order: 1
      });
    });

    it("handles PRICE_DESC", () => {
      expect(reducer(initialState, { type: PRICE_DESC })).toEqual({
        orderBy: "Pris",
        order: -1
      });
    });

    it("handles PRICE_DESC should fail", () => {
      expect(reducer(initialState, { type: PRICE_DESC })).not.toEqual({
        orderBy: "Pris",
        order: 1
      });
    });

    it("handles NAME_ASC", () => {
      expect(reducer(initialState, { type: NAME_ASC })).toEqual({
        orderBy: "Varenavn",
        order: 1
      });
    });

    it("handles NAME_DESC", () => {
      expect(reducer(initialState, { type: NAME_DESC })).toEqual({
        orderBy: "Varenavn",
        order: -1
      });
    });
  });
});
