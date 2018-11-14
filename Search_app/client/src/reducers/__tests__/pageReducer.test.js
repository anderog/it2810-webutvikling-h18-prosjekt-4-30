import {
  PAGE_INCREMENT,
  PAGE_DECREMENT,
  PAGE_RESET
} from "../../actions/types";

import reducer from "../pageReducer";

const initialState = {
  page: 1
};

describe("authenticate reducer", () => {
  it("returns the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe("authenticate reducer PAGE_INCREMENT, PAGE_DECREMENT, PAGE_RESET", () => {
    it("handles PAGE_INCREMENT", () => {
      expect(reducer(initialState, { type: PAGE_INCREMENT })).toEqual({
        page: initialState.page + 1
      });
    });

    it("handles PAGE_DECREMENT", () => {
      expect(reducer(initialState, { type: PAGE_DECREMENT })).toEqual({
        page: initialState.page - 1
      });
    });

    it("handles PAGE_RESET", () => {
      expect(reducer(initialState, { type: PAGE_RESET })).toEqual({
        page: 1
      });
    });
  });
});
