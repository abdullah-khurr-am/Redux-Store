import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [{
      id:1,
      title:"Polo T-Shirt",
      category:"T-Shirt"
  }],
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCT:
      return state;

    default:
      return state;
  }
};
