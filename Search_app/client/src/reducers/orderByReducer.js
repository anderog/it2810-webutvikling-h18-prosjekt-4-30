import { PRICE_ASC, PRICE_DESC, NAME_ASC, NAME_DESC } from "../actions/types";

const initialState = {
  orderBy: "Varenavn",
  order: 1
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
    case NAME_ASC:
      return {
        orderBy: "Varenavn",
        order: 1
      };
    case NAME_DESC:
      return {
        orderBy: "Varenavn",
        order: -1
      };

    default:
      return state;
  }
}
