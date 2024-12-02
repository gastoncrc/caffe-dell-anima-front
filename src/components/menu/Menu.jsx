import "./menu.css";
import { Link } from "react-router-dom";

const Menu = ({ isOpen, closeMenuCategory }) => {
  return (
    <nav className={`navbar-menu ${isOpen && "open"}`}>
      <Link to="/" onClick={closeMenuCategory} className="features-item">
        Destacados
      </Link>

      <Link to="/about" onClick={closeMenuCategory} className="about-item">
        Nosotros
      </Link>

      <Link
        to="/products"
        onClick={closeMenuCategory}
        className="products-item"
      >
        Productos
      </Link>

      <Link to="/contact" onClick={closeMenuCategory} className="contact-item">
        Contacto
      </Link>
    </nav>
  );
};

export default Menu;
