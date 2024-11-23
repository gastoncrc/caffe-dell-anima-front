import "./menu.css";
import { Link } from "react-router-dom";

const Menu = ({ isOpen, closeMenuCategory }) => {
  return (
    <nav className={`navbar-menu ${isOpen && "open"}`}>
      <Link to="/" onClick={closeMenuCategory}>
        Destacados
      </Link>

      <Link to="/about" onClick={closeMenuCategory}>
        Nosotros
      </Link>

      <Link to="/products" onClick={closeMenuCategory}>
        Productos
      </Link>

      <Link to="/contact" onClick={closeMenuCategory}>
        Contacto
      </Link>
    </nav>
  );
};

export default Menu;
