import {
  SET_HVITVIN,
  SET_RØDVIN,
  TYPE_RESET,
  SET_AKEVITT,
  SET_WHISKY,
  SET_DRUEBRENNEVIN,
  SET_LIKØR,
  SET_VODKA,
  SET_IPA,
  SET_SIDER
} from "../../actions/types";

import reducer from "../categoryReducer";

const initialState = {
  type: ""
};

describe("authenticate reducer", () => {
  it("returns the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe("authenticate categoryReducer", () => {
    it("handles SET_HVITVIN", () => {
      expect(reducer(initialState, { type: SET_HVITVIN })).toEqual({
        type: "Hvitvin"
      });
    });
    it("handles SET_RØDVIN", () => {
      expect(reducer(initialState, { type: SET_RØDVIN })).toEqual({
        type: "Rødvin"
      });
    });
    it("handles SET_AKEVITT", () => {
      expect(reducer(initialState, { type: SET_AKEVITT })).toEqual({
        type: "Akevitt"
      });
    });
    it("handles SET_WHISKY", () => {
      expect(reducer(initialState, { type: SET_WHISKY })).toEqual({
        type: "Whisky"
      });
    });
    it("handles SET_DRUEBRENNEVIN", () => {
      expect(reducer(initialState, { type: SET_DRUEBRENNEVIN })).toEqual({
        type: "Druebrennevin"
      });
    });
    it("handles SET_LIKØR", () => {
      expect(reducer(initialState, { type: SET_LIKØR })).toEqual({
        type: "Likør"
      });
    });
    it("handles SET_VODKA", () => {
      expect(reducer(initialState, { type: SET_VODKA })).toEqual({
        type: "Vodka"
      });
    });
    it("handles SET_IPA", () => {
      expect(reducer(initialState, { type: SET_IPA })).toEqual({
        type: "India pale ale"
      });
    });
    it("handles SET_SIDER", () => {
      expect(reducer(initialState, { type: SET_SIDER })).toEqual({
        type: "Sider"
      });
    });
    it("handles TYPE_RESET", () => {
      expect(reducer(initialState, { type: TYPE_RESET })).toEqual({
        type: ""
      });
    });
    it("handles TYPE_RESET should fail", () => {
      expect(reducer(initialState, { type: TYPE_RESET })).not.toEqual({
        type: "Rødvin"
      });
    });
  });
});
