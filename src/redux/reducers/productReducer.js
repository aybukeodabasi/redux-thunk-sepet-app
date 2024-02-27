import { ActionTypes } from "../ActionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_LOADING:
      return { ...state, isLoading: true };

    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload, isLoading: false, isError: false };

    case ActionTypes.SET_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
export default productReducer;
