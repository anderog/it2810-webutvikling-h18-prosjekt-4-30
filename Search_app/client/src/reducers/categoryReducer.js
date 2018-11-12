import {
  SET_HVITVIN,
  SET_RØDVIN,
  TYPE_RESET,
  SET_AKEVITT,
  SET_WHISKY
} from "../actions/types";

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
    case SET_AKEVITT:
      return {
        type: "Akevitt"
      };
    case SET_WHISKY:
      return {
        type: "Whisky"
      };
    default:
      return state;
  }
}
