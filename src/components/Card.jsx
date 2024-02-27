import { useDispatch, useSelector } from "react-redux";
import { addToBasket, updateItem } from "../redux/actions/basketActions";

const Card = ({ product }) => {
  const state = useSelector((store) => store.basketReducer);
  const dispatch = useDispatch();

  // eleman sepete eklendi mi ?
  const found = state.basket.find((i) => i.id === product.id);

  const handleClick = () => {
    if (found) {
      // sepetteki elemanı güncelle patch
      dispatch(updateItem(found));
    } else {
      // sepete ekle post
      dispatch(addToBasket(product));
    }
  };

  return (
    <div className="card pt-4" style={{ width: "18rem" }}>
      <div className="d-flex justify-content-center">
        <img
          className="rounded"
          width={200}
          height={200}
          src={product.resim}
          alt=""
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{product.baslik}</h5>
        <p>
          {product.marka} {product.model}
        </p>
        <p className="d-flex flex-column">
          {product.ozellikler.map((line) => (
            <span>{line}</span>
          ))}
        </p>

        <button
          onClick={handleClick}
          className="btn btn-primary w-100 d-flex justify-content-between"
        >
          <span>
            {found ? `Miktarı Arttır (${found.adet})` : "Sepete Ekle"}
          </span>
          <span>{product.fiyat}₺</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
