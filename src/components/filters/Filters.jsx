import "./filters.css";
import { categories } from "../../data/products";
import { useDispatch } from "react-redux";
import { filterByOrigin } from "../../slices/filterSlice";

const Filters = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(filterByOrigin(e.target.value));
  };

  return (
    <div className="filter-container">
      <p>Filtrar por país</p>

      <select name="origin" onChange={handleChange} defaultValue={"Todos"}>
        {categories.map((category, index) => {
          return (
            <option key={index} value={category}>
              {category}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Filters;
