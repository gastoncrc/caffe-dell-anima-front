import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  deleteProductCart,
  selectSubTotalPrice,
} from "../../slices/cartSlice";
import { confirmAlert } from "../alerts/alerts.js";
import "../cart_product/cartProduct.css";

const CartProduct = ({ cartProduct }) => {
  const { img, name, origin, price, quantity, id } = cartProduct;
  const dispatch = useDispatch();

  const subTotal = useSelector((state) => selectSubTotalPrice(state, id));

  return (
    <div className="product_cart_item">
      <img src={img} alt={name} className="img_product" />
      <div className="info_cart_item">
        <h2 className="title_cart_item">{name}</h2>
        <p className="origin_cart_item">{origin}</p>
        <h3 className="price_cart_item">${price.toLocaleString("de-DE")}</h3>
      </div>
      <div className="quantity_cart_item">
        <div className="quantity-selector-container">
          <div className="quantity-selector">
            <button
              className="btn-cart-product"
              onClick={() => dispatch(decrementQuantity(id))}
            >
              -
            </button>
            <p>{quantity}</p>
            <button
              className="btn-cart-product"
              onClick={() => dispatch(incrementQuantity(id))}
            >
              +
            </button>
          </div>
          <p>${subTotal.toLocaleString("de-DE")}</p>
        </div>

        <button
          className="btn-delete-cart-product"
          onClick={() =>
            confirmAlert({
              dispatch,
              id,
              title: "¿Desea eliminar el producto?",
              button: "Eliminar",
              titleSuccess: "Producto Eliminado",
              action: deleteProductCart,
            })
          }
        >
          <i class="fa-solid fa-trash-can trash-cart"></i>
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
