import "./cart.css";
import { useSelector, useDispatch } from "react-redux";
import CartProduct from "../../components/cart_product/CartProduct";
import { emptyCart, selectTotalPrice } from "../../slices/cartSlice";
import { confirmAlert } from "../../components/alerts/alerts.js";
import { selectTotalItems } from "../../slices/cartSlice";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cartSlice.cart);
  const isEmptyCart = useSelector((state) => state.cartSlice.isEmpty);
  const totalPrice = useSelector(selectTotalPrice);
  const dispatch = useDispatch();
  const totalItems = useSelector(selectTotalItems);

  return (
    <div className="cart_container">
      <h2 className="cart-title">Mi Carrito</h2>
      <hr className="hr" />
      {isEmptyCart ? (
        <h3 className="cart-title">El carrito está vacío</h3>
      ) : (
        <div className="cart-details-container">
          <div className="products_container_cart">
            {cartProducts.map((product) => {
              return <CartProduct key={product.id} cartProduct={product} />;
            })}
          </div>
          <div className="total_resume_container">
            <h2>Resumen de Compra</h2>
            <div className="resume_details_container">
              <div className="resume_items">
                <p>Productos: {totalItems}</p>
                <p>${totalPrice.toLocaleString("de-DE")}</p>
              </div>
              <div className="btn-price-container">
                <button
                  className="btn-cart-buy"
                  onClick={() =>
                    confirmAlert({
                      dispatch,
                      title: "¿Desea realizar la compra?",
                      button: "Comprar",
                      titleSuccess: "Gracias por su compra",
                      action: emptyCart,
                    })
                  }
                >
                  Comprar
                </button>
                <button
                  className="btn-cart-empty"
                  onClick={() =>
                    confirmAlert({
                      dispatch,
                      title: "¿Desea vaciar el carrito?",
                      button: "Vaciar",
                      titleSuccess: "Carrito Vacío",
                      action: emptyCart,
                    })
                  }
                >
                  Vaciar Carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
