import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import "./UserLogin.css";
import axios from 'axios';
import { AuthContext } from '../../../auth/AuthContext';
import API_URL from "../../../common/config";

export default function UserLogin() {
  const { token, setToken } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Obtiene la función navigate

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("Apretaste el form");
    // Enviar un post a la ruta login
    axios.post(`${API_URL}/login`, 
    {
      email,
      password 
    }).then((response) => {
      // Uno entra acá si no hay error en el request.
      console.log(response);

      const access_token = response.data.access_token;
      setToken(access_token);
      navigate("/home-page"); // Redirige a la página de inicio
    
    }).catch((error) => {
      // Uno entra acá si hay error en el request.
      console.log(error);
    });
  };

  return (
    <>
      <div className="login-container">
        <div className="login-card">
          <div className="column">
            <h1>Login</h1>
            <p>Después de iniciar sesión, puedes disfrutar del juego.</p>
            <form onSubmit={handleSubmit}>
              <div className="form-item">
                <input
                  type="text"
                  name= "email"
                  value = {email}
                  onChange = {e => setEmail(e.target.value)}
                  className="form-element"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-item">
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="form-element"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="form-checkbox-item">
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe">Remember Me</label>
              </div>
              <div className="flex">
                <a href="/home-page">
                  <div className="button-class">
                    <input type="submit" value="Iniciar sesión" />
                  </div>
                </a>
                <a href="/home-page">Reestablece tu contraseña</a>
              </div>
              <p className="social-paragraph">Otras formas de iniciar sesión</p>
              <div className="social-buttons">
                <a href="facebook.com" className="facebook">
                  <img src="/square-facebook.svg" alt="Facebook" />
                </a>
                <a href="twitter.com" className="linkedin">
                  <img src="/linkedin.svg" alt="Linkedin" />
                </a>
                <a href="github.com" className="github">
                  <img src="/githublogo.svg" alt="Twitter" />
                </a>
              </div>
            </form>
          </div>
          <div className="column">
            <h2>Bienvenido a UNO</h2>
            <p>Si no tienes una cuenta, ¿te gustaría registrarte ahora?</p>
            <a href="/sign-up">Registrarse</a>
          </div>
        </div>
      </div>
    </>
  );
}
