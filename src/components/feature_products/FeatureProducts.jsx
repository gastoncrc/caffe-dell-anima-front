import { useDispatch, useSelector } from "react-redux";
import CardProduct from "../card_product/CardProduct";
import { useEffect } from "react";
import { filterByFeature } from "../../slices/filterSlice";
import Hero from "../hero/Hero";
import "./featureProducts.css";

const FeatureProducts = () => {
  const products = useSelector((state) => state.filterSlice.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterByFeature());
  }, []);

  return (
    <>
      <div className="header-hero-container">
        <Hero />
      </div>
      <div className="featured_container">
        <h2 className="feature-title">Destacados</h2>
        <hr className="hr" />
        <div className="cards-container">
          {products.map((product) => {
            return <CardProduct key={product.id} productInfo={product} />;
          })}
        </div>
      </div>
    </>
  );
};

export default FeatureProducts;
