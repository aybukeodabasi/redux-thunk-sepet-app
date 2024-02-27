// senkron aksiyonlar

import { ActionTypes } from "../ActionTypes";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";

export const setBasketLoading = () => ({
  type: ActionTypes.SET_BASKET_LOADING,
});

export const setBasket = (payload) => ({
  type: ActionTypes.SET_BASKET,
  payload,
});

export const setBasketError = () => ({
  type: ActionTypes.SET_BASKET_ERROR,
});

// asenkron aksiyonlar

//apiden sepetteki ürünleri alıp store a aktarır
export const getBasketData = () => (dispatch) => {
  axios
    .get("/basket")
    .then((res) => dispatch(setBasket(res.data)))
    .catch((err) => dispatch(setBasketError()));
};
export const addToBasket = (product) => (dispatch) => {
  // ürünün bilgilerine adet ekleme
  const newProduct = { ...product, adet: 1 };
  // veritabanına eklenmesini istemediğimiz verileri kaldırma
  delete newProduct.renk;
  delete newProduct.ozellikler;
  delete newProduct.baslik;
  axios
    .post("/basket", newProduct)
    .then((res) =>
      dispatch({ type: ActionTypes.ADD_TO_BASET, payload: newProduct })
    )
    .catch((err) => setBasketError());
};
// apideki ürünün miktarını bir artırır ve reducer a bilgi gönderir
export const updateItem = (product) => (dispatch) => {
  axios
    .patch(`/basket/${product.id}`, { adet: product.adet + 1 })
    .then(() =>
      dispatch({ type: ActionTypes.UPDATE_ITEM, payload: product.id })
    )
    .catch(() => setBasketError());
};

// apiden bir ürünü kaldırır
// devamında kaldırdığı ürünün idsini reducer'a gönderir
export const removeItem = (delete_id) => (dispatch) => {
  axios
    .delete(`/basket/${delete_id}`)
    .then(() =>
      dispatch({ type: ActionTypes.REMOVE_ITEM, payload: delete_id })
    );
};

export const decreaseItem = (product) => (dispatch) => {
  axios
    .patch(`/basket/${product.id}`, { adet: product.adet - 1 })
    .then(() =>
      dispatch({ type: ActionTypes.DECREASE_ITEM, payload: product.id })
    );
};
