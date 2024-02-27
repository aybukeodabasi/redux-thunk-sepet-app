import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
  const state = useSelector((store) => store.basketReducer);

  const total_count = state.basket.reduce(
    (toplam, item) => toplam + item.adet,
    0
  );

  return (
    <header className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Offcanvas dark navbar
        </a>

        <nav className="d-flex gap-5">
          <NavLink to={"/"}>Anasayfa</NavLink>
          <NavLink to={"/basket"}>
            <span>Sepet</span>
            <span className="badge bg-danger ms-2">{total_count}</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
