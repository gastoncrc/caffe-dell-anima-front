import "../login/login.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { alertMsg } from "../../components/alerts/alerts";
import { Link } from "react-router-dom";
import { userLogin } from "../../services/userServices";
import { useDispatch } from "react-redux";
import { login } from "../../slices/userSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(null);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("El email no es válido")
      .required("el email es obligatorio"),
    password: Yup.string()
      .trim()
      .max(300, "Se permiten solo 300 caracteres")
      .required("Debe ingresar una contraseña"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        setLoginError(null);
        const userData = await userLogin(values);
        dispatch(login(userData));
        alertMsg({
          title: `El usuario ${userData.name} ha iniciado sesión correctamente`,
        });
        navigate("/");
      } catch (error) {
        console.error(
          "No se pudo iniciar sesión. Verifica su usuario y/o contraseña",
          error
        );
        setLoginError("Correo electrónico o contraseña incorrectos");
      }
    },
  });
  return (
    <div className="form-login-container">
      <h2 className="contact-login-title">Iniciar Sesión</h2>
      <hr className="hr" />
      <form
        action="#"
        className="form-login-contact"
        onSubmit={formik.handleSubmit}
      >
        <div className="form-login-email">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            placeholder="Correo Electrónico"
            className={
              formik.touched.email && formik.errors.email
                ? "login-input-error"
                : ""
            }
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="login-error-text">{formik.errors.email}</p>
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
          {loginError && <p className="login-error-text">{loginError}</p>}
        </div>

        <button type="submit" className="login-form-btn">
          Iniciar Sesión
        </button>
      </form>
      <div className="redirect-register-container">
        <h3>¿Aun no eres usuario registrado?</h3>
        <Link to="/register">
          <p>Crear Usuario</p>
        </Link>
      </div>
    </div>
  );
}

export default Login;
