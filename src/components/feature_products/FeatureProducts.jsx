import CardProduct from "../card_product/CardProduct";
import { useEffect, useState } from "react";
import Hero from "../hero/Hero";
import "./featureProducts.css";
import { fetchFeatureProducts } from "../../services/productServices";

const FeatureProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchFeatureProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error al obtener los productos destacados", error);
      }
    };

    getProducts();
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
          {products?.map((product) => {
            return <CardProduct key={product._id} productInfo={product} />;
          })}
        </div>
      </div>
    </>
  );
};

export default FeatureProducts;
