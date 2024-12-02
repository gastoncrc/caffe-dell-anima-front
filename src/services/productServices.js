import axios from "axios";

const URL = import.meta.env.VITE_REACT_APP_URL;
console.log(URL);
export const fetchAllProducts = async () => {
  try {
    const res = await axios.get(`${URL}/products`);
    return res.data;
  } catch (error) {
    console.error("Error al obtener productos:", error);
    throw error;
  }
};

export const fetchFeatureProducts = async () => {
  try {
    const res = await axios.get(`${URL}/products/feature-product`);
    return res.data.products;
  } catch (error) {
    console.error("Error al obtener los productos", error);
    throw error;
  }
};
