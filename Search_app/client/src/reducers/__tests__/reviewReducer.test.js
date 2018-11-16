import { FETCH_REVIEWS, UPDATE_REVIEW, ADD_REVIEW } from "../../actions/types";
import reducer from "../reviewReducer";

const initialState = {
  reviewItems: []
};

describe("authenticate reviewReducer", () => {
  it("returns the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("handles default FETCH_REVIEWS", () => {
    expect(reducer(initialState, { type: FETCH_REVIEWS })).toEqual({
      reviewItems: [undefined]
    });
  });
  describe("add and update reviews", () => {
    it("handles ADD_REVIEW for empty state", () => {
      expect(
        reducer(initialState, {
          type: ADD_REVIEW,
          payload: [{ productID: "1", reviews: [4] }]
        })
      ).toEqual({ reviewItems: [{ productID: "1", reviews: [4] }] });
    });

    const state = { reviewItems: [{ productID: "1", reviews: [4] }] };
    it("handles ADD_REVIEW for nonempty state", () => {
      expect(
        reducer(state, {
          type: ADD_REVIEW,
          payload: [{ productID: "2", reviews: [1] }]
        })
      ).toEqual({
        reviewItems: [
          { productID: "1", reviews: [4] },
          { productID: "2", reviews: [1] }
        ]
      });
    });
    let updateState = {
      reviewItems: [
        { productID: "1", reviews: [4] },
        { productID: "2", reviews: [1] }
      ]
    };
    it("handles UPDATE_REVIEW for adding more reviews to existing reviewItem", () => {
      expect(
        reducer(updateState, {
          type: UPDATE_REVIEW,
          payload: { productID: "1", reviews: [4, 3] }
        })
      ).toEqual({
        reviewItems: [
          { productID: "1", reviews: [4, 3] },
          { productID: "2", reviews: [1] }
        ]
      });
    });
  });
});
