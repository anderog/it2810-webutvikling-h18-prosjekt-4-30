import { SET_RØDVIN } from "../actions/types";
import { SET_HVITVIN } from "../actions/types";

const initialState = {
  type: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_RØDVIN:
      return {
        type: "Rødvin"
      };
    case SET_HVITVIN:
      return {
        type: "Hvitvin"
      };
    default:
      return state;
  }
}
