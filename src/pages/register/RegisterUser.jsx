import "./registerUser.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { alertMsg } from "../../components/alerts/alerts";
import { Link } from "react-router-dom";

function RegisterUser() {
  const validationSchema = Yup.object({
    name: Yup.string()
      .trim()
      .min(3, "El nombre debe tener mínimo 3 caracteres")
      .required("El nombre es obligatorio"),
    surname: Yup.string()
      .trim()
      .min(3, "El apellido debe tener mínimo 3 caracteres")
      .required("El apellido es obligatorio"),
    email: Yup.string()
      .email("El email no es válido")
      .required("el email es obligatorio"),
    message: Yup.string()
      .trim()
      .max(300, "Se permiten solo 300 caracteres")
      .required("No puede enviar un mensaje vacío"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values) =>
      alertMsg({
        title: `Gracias ${values.name} por enviarnos un mensaje`,
      }),
  });
  return (
    <div className="form-container">
      <h2 className="contact-title">Crear Usuario</h2>
      <hr className="hr" />
      <form action="#" className="form-contact" onSubmit={formik.handleSubmit}>
        <div className="form-name">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            placeholder="Nombre"
            className={
              formik.touched.name && formik.errors.name ? "input-error" : ""
            }
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name && (
            <p className="error-text">{formik.errors.name}</p>
          )}
        </div>

        <div className="form-surname">
          <label htmlFor="surname">Apellido</label>
          <input
            type="text"
            id="surname"
            placeholder="Apellido"
            className={
              formik.touched.surname && formik.errors.surname
                ? "input-error"
                : ""
            }
            {...formik.getFieldProps("surname")}
          />
          {formik.touched.surname && formik.errors.surname && (
            <p className="error-text">{formik.errors.surname}</p>
          )}
        </div>

        <div className="form-email">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            placeholder="Correo Electrónico"
            className={
              formik.touched.email && formik.errors.email ? "input-error" : ""
            }
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="error-text">{formik.errors.email}</p>
          )}
        </div>

        <div className="form-login-password">
          <label htmlFor="password">Constraseña</label>
          <input
            type="password"
            id="password"
            placeholder="Contraseña"
            className={
              formik.touched.password && formik.errors.password
                ? "login-input-error"
                : ""
            }
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password && (
            <p className="login-error-text">{formik.errors.password}</p>
          )}
        </div>
        <div className="form-login-password">
          <label htmlFor="password">Repetir Constraseña</label>
          <input
            type="password"
            id="password"
            placeholder="Repetir Contraseña"
            className={
              formik.touched.password && formik.errors.password
                ? "login-input-error"
                : ""
            }
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password && (
            <p className="login-error-text">{formik.errors.password}</p>
          )}
        </div>
        <button type="subnmit" className="form-btn">
          Crear Usuario
        </button>
      </form>
      <div>
        <p>¿Ya tienes cuenta?</p>
        <Link to="/login">Iniciar Sesión</Link>
      </div>
    </div>
  );
}

export default RegisterUser;
