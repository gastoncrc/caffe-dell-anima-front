import "./products.css";
import CardProduct from "../../components/card_product/CardProduct";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../../slices/filterSlice";
import { useEffect } from "react";
import Filters from "../../components/filters/Filters";

const Products = () => {
  const products = useSelector((state) => state.filterSlice.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className="products_container">
      <h2 className="products-title">Productos</h2>
      <hr className="hr" />
      <Filters />
      <div className="featured-container">
        <div className="cards-container">
          {products.map((product) => {
            return <CardProduct key={product.id} productInfo={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
