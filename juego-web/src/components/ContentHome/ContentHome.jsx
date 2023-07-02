import React from "react";

import Foto1 from "/uno-home-content1.jpg";
import Foto2 from "/uno-home-content2.jpg";
import Foto3 from "/uno-home-content3.jpg";
import Foto4 from "/uno-home-content4.jpg";
import ContentData from "./ContentData";
import ContentDataButton from "./ContentDataButton";
import "./ContentHome.css";

export default function ContentHome() {
  return (
    <>
      <div className="content-home">
        <h1>Resumen General</h1>
        <p>
          El juego consiste en jugar con tus cartas en mano y conseguir puntos
          de victoria. Estos puntos de victoria se consiguen mediante cartas
          especiales, a las cuales el jugador tiene acceso al momento de acabar
          su mano de cartas. El juego se desarrolla en turnos, donde cada
          jugador debe jugar una carta de su mano y colocarla junto al mazo que
          está en la mesa. Para poder jugar una carta de su mano, la carta debe
          ser del mismo color o del mismo valor que la carta que se encuentra en
          la mesa. Si el jugador no tiene ninguna carta que pueda jugar, debe
          robar una carta del mazo. Cuando un jugador acaba sus cartas, tiene
          acceso a un mazo especial, de donde puede retirar una carta que le
          permite ganar puntos de victoria. En este mazo especial no solo
          existen cartas de victoria, también hay cartas que tienen habilidades
          especiales, como por ejemplo, cambiar el sentido del juego, cambiar el
          color de la carta que se encuentra en la mesa, o que un jugador deba
          robar 4 cartas del mazo. El juego termina cuando un jugador llega a 3
          puntos de victoria.
        </p>

        <ContentDataButton
          className="first-content"
          heading="Estadísticas"
          text="En este apartado puedes ver todas tus estadísticas relacionadas a tus juegos jugados, como: partidas ganadas, partidas perdidas, puntos de victoria obtenidos, cartas robadas, ¡entre otras!"
          button="Ver estadísticas"
          img1={Foto1}
          img2={Foto2}
        />

        <ContentData
          className="first-content-reverse"
          heading="Partidas"
          text="El juego Uno es un juego de cartas simple y emocionante que puede ser disfrutado por personas de todas las edades y habilidades. Es una excelente manera de fomentar la interacción social y la competencia amistosa entre amigos y familiares.

          Además, el juego Uno requiere de habilidades de observación, pensamiento crítico y toma de decisiones rápidas, lo que lo convierte en una excelente actividad para desarrollar estas habilidades en los niños y adultos por igual. También es una excelente manera de enseñar a los niños a seguir reglas y a respetar los turnos de juego."
          img1={Foto3}
          img2={Foto4}
        />
      </div>
    </>
  );
}
