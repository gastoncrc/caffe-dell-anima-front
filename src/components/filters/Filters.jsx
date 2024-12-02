import React, { useState } from "react";

const Filters = ({ allProducts, setFilteredProducts }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = allProducts.filter((product) =>
      product.name.toLowerCase().includes(term)
    );
    setFilteredProducts(filtered);
  };
  if (!Array.isArray(allProducts)) {
    console.error("allProducts no es un arreglo válido:", allProducts);
    return <p>No hay productos disponibles para filtrar.</p>;
  }

  return (
    <div className="filters-container">
      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={handleSearch}
        className="filters-search-input"
      />
      <div className="filters-additional-options"></div>
    </div>
  );
};

export default Filters;
