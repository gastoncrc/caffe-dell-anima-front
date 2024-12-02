import "./registerUser.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { alertMsg } from "../../components/alerts/alerts";
import { Link } from "react-router-dom";
import { createUser } from "../../services/userServices";
import { useNavigate } from "react-router-dom";

function RegisterUser() {
  const navigate = useNavigate();
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
    city: Yup.string()
      .trim()
      .min(3, "El ciudad debe tener mínimo 3 caracteres")
      .required("El apellido es obligatorio"),
    adress: Yup.string()
      .trim()
      .min(3, "El domicilio debe tener mínimo 3 caracteres")
      .required("El apellido es obligatorio"),
    password: Yup.string()
      .trim()
      .max(300, "Se permiten solo 300 caracteres")
      .required("No puede enviar un mensaje vacío"),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Las contraseñas deben coincidir")
      .required("La contraseña repetida es obligatoria"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      adress: "",
      city: "",
      country: "Argentina",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await createUser(values);
        alertMsg({
          title: `El usuario ${values.name} ha sido creado correctamente`,
        });
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="form-register-container">
      <h2 className="contact-register-title">Crear Usuario</h2>
      <hr className="hr" />
      <form
        action="#"
        className="form-register-contact"
        onSubmit={formik.handleSubmit}
      >
        <div className="form-register-name">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            placeholder="Nombre"
            className={
              formik.touched.name && formik.errors.name
                ? "register-input-error"
                : ""
            }
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name && (
            <p className="register-error-text">{formik.errors.name}</p>
          )}
        </div>

        <div className="form-register-surname">
          <label htmlFor="surname">Apellido</label>
          <input
            type="text"
            id="surname"
            placeholder="Apellido"
            className={
              formik.touched.surname && formik.errors.surname
                ? "register-input-error"
                : ""
            }
            {...formik.getFieldProps("surname")}
          />
          {formik.touched.surname && formik.errors.surname && (
            <p className="register-error-text">{formik.errors.surname}</p>
          )}
        </div>

        <div className="form-register-email">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            placeholder="Correo Electrónico"
            className={
              formik.touched.email && formik.errors.email
                ? "register-input-error"
                : ""
            }
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="register-error-text">{formik.errors.email}</p>
          )}
        </div>
        <div className="form-register-adress">
          <label htmlFor="adress">Domicilio</label>
          <input
            type="text"
            id="adress"
            placeholder="Domicilio"
            className={
              formik.touched.email && formik.errors.email
                ? "register-input-error"
                : ""
            }
            {...formik.getFieldProps("adress")}
          />
          {formik.touched.adress && formik.errors.adress && (
            <p className="register-error-text">{formik.errors.adress}</p>
          )}
        </div>

        <div className="form-register-city">
          <label htmlFor="adress">Ciudad</label>
          <input
            type="text"
            id="city"
            placeholder="Ciudad"
            className={
              formik.touched.city && formik.errors.city
                ? "register-input-error"
                : ""
            }
            {...formik.getFieldProps("city")}
          />
          {formik.touched.city && formik.errors.city && (
            <p className="register-error-text">{formik.errors.city}</p>
          )}
        </div>

        <div className="form-register-country">
          <label htmlFor="adress">País</label>
          <input
            type="text"
            id="country"
            placeholder="Argentina"
            className={
              formik.touched.country && formik.errors.country
                ? "register-input-error"
                : ""
            }
            {...formik.getFieldProps("country")}
          />
          {formik.touched.country && formik.errors.country && (
            <p className="register-error-text">{formik.errors.country}</p>
          )}
        </div>

        <div className="form-register-password">
          <label htmlFor="password">Constraseña</label>
          <input
            type="password"
            id="password"
            placeholder="Contraseña"
            className={
              formik.touched.password && formik.errors.password
                ? "register-input-error"
                : ""
            }
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password && (
            <p className="register-error-text">{formik.errors.password}</p>
          )}
        </div>
        <div className="form-register-password">
          <label htmlFor="rePassword">Repetir Constraseña</label>
          <input
            type="password"
            id="rePassword"
            placeholder="Repetir Contraseña"
            className={
              formik.touched.rePassword && formik.errors.rePassword
                ? "register-input-error"
                : ""
            }
            {...formik.getFieldProps("rePassword")}
          />
          {formik.touched.rePassword && formik.errors.rePassword && (
            <p className="register-error-text">{formik.errors.rePassword}</p>
          )}
        </div>
        <button type="submit" className="form-register-btn">
          Crear Usuario
        </button>
      </form>
      <div className="redirect-login-container">
        <h3>¿Ya tienes cuenta?</h3>
        <Link to="/login">
          <p>Iniciar Sesión</p>
        </Link>
      </div>
    </div>
  );
}
export default RegisterUser;
