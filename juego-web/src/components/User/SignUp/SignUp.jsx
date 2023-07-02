import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import { AuthContext } from "../../../auth/AuthContext";
import "./SignUp.css";

export default function SignUp() {
  const { token, setToken } = useContext(AuthContext);
  const [username, setUsername] = useState(""); // Agregué username
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Obtiene la función navigate

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("Apretaste el form");
    // Enviar un post a la ruta signup
    console.log(`${import.meta.env.VITE_BACKEND_URL}`);
    // Se envía como objeto el username, email y password
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/signup`, {
        username,
        email,
        password,
      })
      .then((response) => {
        // Uno entra acá si no hay error en el request.
        console.log(response);

        const access_token = response.data.access_token;
        setToken(access_token);
        navigate("/signup-sign-in"); // Redirige a la página de inicio
      })
      .catch((error) => {
        // Uno entra acá si hay error en el request.
        console.log(error);
      });
  };

  return (
    <>
      <div className="signup-container">
        <div className="signup-card">
          <div className="column-signup">
            <h1>Sign Up</h1>
            <p>Registrate para disfrutar de la experiencia.</p>
            <form onSubmit={handleSubmit}>
              <div className="form-item-signup">
                <label className="labels-form-signup">Usuario</label>
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-element-signup"
                  placeholder="Ingrese su nombre de usuario"
                  required
                />
              </div>
              <div className="form-item-signup">
                <label className="labels-form-signup">Mail</label>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-element-signup"
                  placeholder="Ingrese su mail"
                  required
                />
              </div>
              <div className="form-item-signup">
                <label className="labels-form-signup">Contraseña</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-element-signup"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="form-checkbox-item-signup">
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe">Remember Me</label>
              </div>
              <div className="flex-signup">
                <a href="/home-page">
                  <div className="button-class-signup">
                    <input type="submit" value="Registrar" />
                  </div>
                </a>
              </div>
            </form>
          </div>
          <div className="column-signup">
            <h2>Una experiencia inolvidable</h2>
            <p>
              Empieza tu viaje hacia el éxito registrándote como usuario.
              ¡Convierte tus sueños en realidad y desata tu potencial ilimitado!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
