import { FETCH_PRODUCTS } from "../../actions/types";
import reducer from "../productReducer";

const initialState = {
  items: [],
  loading: true
};

describe("authenticate reducer", () => {
  it("returns the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("handles default FETCH_PRODUCTS", () => {
    expect(reducer(initialState, { type: FETCH_PRODUCTS })).toEqual({
      items: undefined,
      loading: false
    });
  });

  it("handles successful FETCH_PRODUCTS", () => {
    expect(
      reducer(initialState, {
        type: FETCH_PRODUCTS,
        payload: [
          {
            _id: "1",
            Varenummer: 1101,
            Varenavn: "Løiten",
            Volum: 0.7,
            Pris: 409.9,
            Literpris: 585.57,
            Varetype: "Akevitt",
            Fylde: 0,
            Friskhet: 0,
            Garvestoffer: 0,
            Bitterhet: 0,
            Sodme: 0,
            Farge: "Lys gyllen."
          },
          {
            _id: "1",
            Varenummer: 1101,
            Varenavn: "Løiten 02",
            Volum: 0.7,
            Pris: 409.9,
            Literpris: 585.57,
            Varetype: "Akevitt",
            Fylde: 0,
            Friskhet: 0,
            Garvestoffer: 0,
            Bitterhet: 0,
            Sodme: 0,
            Farge: "Lys gyllen."
          }
        ],
        loading: false
      })
    ).toEqual({
      ...initialState,
      items: [
        {
          _id: "1",
          Varenummer: 1101,
          Varenavn: "Løiten",
          Volum: 0.7,
          Pris: 409.9,
          Literpris: 585.57,
          Varetype: "Akevitt",
          Fylde: 0,
          Friskhet: 0,
          Garvestoffer: 0,
          Bitterhet: 0,
          Sodme: 0,
          Farge: "Lys gyllen."
        },
        {
          _id: "1",
          Varenummer: 1101,
          Varenavn: "Løiten 02",
          Volum: 0.7,
          Pris: 409.9,
          Literpris: 585.57,
          Varetype: "Akevitt",
          Fylde: 0,
          Friskhet: 0,
          Garvestoffer: 0,
          Bitterhet: 0,
          Sodme: 0,
          Farge: "Lys gyllen."
        }
      ],
      loading: false,
      totalPages: undefined
    });
  });
});
