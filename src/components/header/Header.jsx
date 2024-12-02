import "./header.css";
import logo from "../../assets/img/caffe-logo-white.png";
import Menu from "../menu/Menu";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { filterByFeature } from "../../slices/filterSlice";
import { selectTotalItems } from "../../slices/cartSlice";
import { useState } from "react";
import { userLogout } from "../../services/userServices";
import { logout } from "../../slices/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const totalItems = useSelector(selectTotalItems);

  const [isOpen, setIsOpen] = useState(false);
  const { name } = useSelector((state) => state.user);

  const closeMenuCategory = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    userLogout();
    dispatch(logout());
  };

  return (
    <header>
      <Link to="/" onClick={() => dispatch(filterByFeature())}>
        <img src={logo} alt="prueba" className="logo-coffee" />
      </Link>
      <Menu isOpen={isOpen} closeMenuCategory={closeMenuCategory} />
      <div className="menu-tools">
        <div
          className={`menu-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Link to="/login">
          <div className="login-icon">
            <p>¡Hola!</p>
            {name ? name : "Iniciar Sesión"}
          </div>
        </Link>
        <Link to="/" onClick={handleLogout}>
          <i class="fa-solid fa-right-from-bracket"></i>
        </Link>
        <Link to="/cart">
          <i className="fa-sharp fa-solid fa-cart-shopping cart-icon"></i>

          <div className="counter-cart">{totalItems}</div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
