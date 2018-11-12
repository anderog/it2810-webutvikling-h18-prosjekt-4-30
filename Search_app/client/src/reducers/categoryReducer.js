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
    case SET_DRUEBRENNEVIN:
      return {
        type: "Druebrennevin"
      };
    case SET_LIKØR:
      return {
        type: "Likør"
      };
    case SET_VODKA:
      return {
        type: "Vodka"
      };
    case SET_IPA:
      return {
        type: "India pale ale"
      };
    case SET_SIDER:
      return {
        type: "Sider"
      };
    default:
      return state;
  }
}
