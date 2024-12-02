import "./footer.css";

const Footer = () => {
  return (
    <footer id="contact">
      <div className="footer-top-container">
        <a href="http://www.instagram.com" target="_blank">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="http://www.x.com" target="_blank">
          <i className="fa-brands fa-x-twitter"></i>
        </a>
        <a href="http://www.facebook.com" target="_blank">
          <i className="fa-brands fa-square-facebook"></i>
        </a>
      </div>
      <div className="footer-middle-container">
        <p className="phone-footer">
          <a href="https://wa.me/+549351351351" target="_blank">
            <i className="fa-brands fa-whatsapp"></i> +54 9 351 351351
          </a>
        </p>
        <p className="adress-footer">
          <a href="https://maps.app.goo.gl/fWhsDMsUZhno9fv58" target="_blank">
            <i className="fa-sharp fa-solid fa-map-pin"></i> Local 22 - Patio
            Olmos Shopping, Córdoba, Argentina.
          </a>
        </p>
      </div>
      <div className="footer-bottom-container">
        <p>Todos los derechos reservados. Copyright 2024.</p>
        <p>Desarrollado por Gastón Capdevila.</p>
      </div>
    </footer>
  );
};

export default Footer;
