import "./products.css";
import CardProduct from "../../components/card_product/CardProduct";
import Filters from "../../components/filters/Filters";
import { useEffect, useState } from "react";
import { fetchAllProducts } from "../../services/productServices";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchAllProducts();
        console.log("Productos recibidos:", data);
        const productsData = data.products || [];
        setProducts(productsData);
        setFilteredProducts(productsData);
      } catch (error) {
        console.error("Error al obtener todos los productos", error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);
  if (loading) {
    return <div>Cargando productos...</div>;
  }
  return (
    <div className="products_container">
      <h2 className="products-title">Productos</h2>
      <hr className="hr" />
      <Filters
        allProducts={products}
        setFilteredProducts={setFilteredProducts}
      />

      <div className="featured-container">
        <div className="cards-container">
          {filteredProducts.map((product) => (
            <CardProduct key={product._id} productInfo={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
