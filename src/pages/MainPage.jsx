import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductData,
  setError,
  setLoading,
  setProducts,
} from "../redux/actions/productActions";
import Loading from "../components/Loading";
import axios from "axios";
import Card from "../components/Card";
import {
  getBasketData,
  setBasketLoading,
} from "../redux/actions/basketActions";

const MainPage = () => {
  const dispatch = useDispatch();

  const state = useSelector((store) => store.productReducer);

  useEffect(() => {
    dispatch(setLoading());
    dispatch(setBasketLoading());
    // api isteği atacağız cevaba göre store u bilgilendireceğiz
    // axios
    //   .get("http://localhost:4000/products")
    //   .then((res) => dispatch(setProducts(res.data)))
    //   .catch((err) => dispatch(setError()));

    // 2- yol thunk aksiyonu ile
    dispatch(getProductData());

    dispatch(getBasketData());
  }, []);

  return (
    <div>
      {state.isLoading && <Loading></Loading>}

      {state.isError && <p>Üzgünüz verileri alırken bir hata oluştu...</p>}

      <div className="d-flex flex-wrap gap-4 p-5 justify-content-center">
        {state?.products.map((product) => (
          <Card product={product}></Card>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
