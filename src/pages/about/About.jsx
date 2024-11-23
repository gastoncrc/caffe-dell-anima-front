import "./about.css";
import imgAbout from "../../assets/img/origin-coffee.png";

function About() {
  return (
    <div className="about-us-container">
      <h2 className="about-us">Sobre Nosotros</h2>

      <div className="data-container">
        <h2 className="about-us-title">Donde el Café se Convierte en Arte</h2>
        <hr className="hr" />
        <p>
          Desde 1978, Caffé dell'Anima ha sido un faro para los amantes del café
          de especialidad. Fundada por Giuseppe Bernotti, nuestro espacio nació
          de una pasión compartida por el café de calidad y la comunidad.
        </p>
        <img className="img-origin" src={imgAbout} alt="coffe" />

        <p>
          Cada taza que servimos es un homenaje a la artesanía y la tradición,
          con granos seleccionados cuidadosamente y preparados con precisión. En
          nuestro refugio, el café se convierte en una experiencia sensorial que
          deleita los sentidos y nutre el alma.
        </p>

        <p>
          Únete a nosotros en este viaje de descubrimiento y deleite, donde cada
          sorbo es una invitación a explorar el infinito universo del café de
          especialidad.
        </p>
      </div>
    </div>
  );
}

export default About;
