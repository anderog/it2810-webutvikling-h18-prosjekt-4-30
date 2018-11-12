import { SET_HVITVIN, SET_RØDVIN, TYPE_RESET } from "../actions/types";

const initialState = {
  type: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TYPE_RESET:
      return {
        type: ""
      };
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
