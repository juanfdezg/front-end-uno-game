import React, { useState, useEffect } from "react";
import axios from "axios";
import "./HomePage.css";
import Hero from "../../components/Hero/Hero";
import ContentHome from "../../components/ContentHome/ContentHome";
import Games from "../../components/ContentHome/Games";
import LogoutButton from "../../components/User/Login/Logout";
import { AuthContext, useAuth } from "../../auth/AuthContext";
import API_URL from "../../common/config";

export default function HomePage() {
  const [partidaExistente, setPartidaExistente] = useState(false);

  // Verificar si existe una partida al cargar el componente
  useEffect(() => {
    verificarPartidaExistente();
  }, []);

  // Verificar si existe una partida
  const verificarPartidaExistente = async () => {
    try {
      const response = await axios.get(`${API_URL}/partidas/list`);
      console.log(response.data.detail);
      const partidas = response.data;
      const existePartida = partidas.length > 0;
      setPartidaExistente(existePartida);
    } catch (error) {
      console.error("Error al verificar la existencia de la partida:", error);
    }
  };

  // Función para crear la partida
  const crearPartida = async () => {
    try {
      console.log("Creando partida...");
      const response = await axios.post(`${API_URL}/partidas/create`, {
        usernames: [
          "juanfernandez",
          "paulmacguire",
          "fernandosmith",
          "antonioossa",
        ],
        victory_points: 2,
        turn_time: 30.0,
      });
      const partida = response.data;
      console.log("Partida creada:", partida);
      setPartidaExistente(true);
    } catch (error) {
      console.error("Error al crear la partida:", error);
    }
  };

  const { username } = useAuth(AuthContext);
  return (
    <>
      <Hero
        cName="hero"
        heroImg="\uno-home-hero1.jpeg"
        title={`¡Bienvenido, ${username}!`} // Agrega el username al título
        text="Podrás jugar al Uno de manera rápida y sencilla. ¡No te lo pierdas!"
        buttonText={partidaExistente ? "Continuar partida" : "Crear partida"}
        url="/game"
        btnClass="show"
        buttonClick={partidaExistente ? null : crearPartida}
      />

      <ContentHome />
      <Games />
    </>
  );
}
