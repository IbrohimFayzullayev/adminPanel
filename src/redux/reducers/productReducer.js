import { ActionTypes } from "../contans/action-types";

const initialState = {
  products: [
    {
      id: 1,
      title: "Dipesh",
      category: "programer",
    },
  ],
};
export const productReducer = (state, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCT:
      return state;
    default:
      return state;
  }
};
