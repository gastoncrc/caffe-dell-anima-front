import "./error.css";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error-container">
      <h2 className="error-title">
        La página no existe. Te invitamos a seguir navegando con nosotros.
      </h2>
      <Link to="/">
        <button className="error-btn">volver a inicio</button>
      </Link>
    </div>
  );
}

export default Error;
