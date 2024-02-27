import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBasketData,
  setBasketLoading,
} from "../redux/actions/basketActions";
import Loading from "../components/Loading";
import BasketItem from "../components/BasketItem";

const BasketPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.basketReducer);
  useEffect(() => {
    dispatch(setBasketLoading());
    // sepetteki ürünleri apiden alıp storea aktarıcak asenkron aksiyonu çaqlıştır
    dispatch(getBasketData());
  }, []);

  const total_count = state.basket.reduce(
    (toplam, item) => toplam + item.adet * item.fiyat,
    0
  );
  return (
    <div className="container">
      {state.isLoading && <Loading></Loading>}

      {state.isError && <p>Üzgünüz sepet verilerini alırken bir hata oluştu</p>}

      {state.basket.length > 0 ? (
        state.basket.map((item) => (
          <BasketItem item={item} key={item.id}></BasketItem>
        ))
      ) : (
        <p className="my-5 text-center">Sepetiniz Boştur...</p>
      )}

      <div>
        <h5>Toplam Tutar : {total_count}</h5>
      </div>
    </div>
  );
};

export default BasketPage;
