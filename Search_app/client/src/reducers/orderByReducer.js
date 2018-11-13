import { PRICE_ASC, PRICE_DESC } from "../actions/types";

const initialState = {
  order: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PRICE_ASC:
      return {
        orderBy: "Pris",
        order: 1
      };
    case PRICE_DESC:
      return {
        orderBy: "Pris",
        order: -1
      };
    default:
      return state;
  }
}
