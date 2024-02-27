import { ActionTypes } from "../ActionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  basket: [],
};

const basketReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_BASKET_LOADING:
      return { ...state, isLoading: true };
    case ActionTypes.SET_BASKET_ERROR:
      return { ...state, isLoading: false, isError: true };
    case ActionTypes.SET_BASKET:
      return { ...state, isLoading: false, isError: false, basket: payload };
    case ActionTypes.ADD_TO_BASET:
      return { ...state, basket: state.basket.concat(payload) };
    case ActionTypes.UPDATE_ITEM:
      const newItems = state.basket.map((item) => {
        if (item.id === payload) {
          return { ...item, adet: item.adet + 1 };
        } else {
          return item;
        }
      });
      return { ...state, basket: newItems };

    case ActionTypes.REMOVE_ITEM:
      const filtered = state.basket.filter((i) => i.id !== payload);
      return { ...state, basket: filtered };

    case ActionTypes.DECREASE_ITEM:
      const newBasket = state.basket.map((item) => {
        if (item.id === payload) {
          return { ...item, adet: item.adet - 1 };
        } else {
          return item;
        }
      });
      return { ...state, basket: newBasket };
    default:
      return state;
  }
};
export default basketReducer;
