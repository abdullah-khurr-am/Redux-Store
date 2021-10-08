import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [{}],
  loading:true
};

// const initialState2 = {
//   product: [{}],
//   loading:true
// };

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCT:
      return {
        ...state,
        products : action.payload
      };
    case ActionTypes.SET_LOADING:
      return {
        ...state,
        loading : false
      };
    default:
      return state;
  }
};

export const selectedproductReducer = (state = {},{type,payload}) =>{
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:      
      return {
        ...state,
        ...payload,
      }; 
    case ActionTypes.REMOVE_SELECTED_PRODUCT:      
      return {  }; 
    default:
      return state;
  }
}
