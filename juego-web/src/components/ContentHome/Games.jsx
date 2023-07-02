import React from "react";
import Foto1 from "../../assets/uno-home-content1.jpg";
import Foto2 from "../../assets/uno-home-content2.jpg";
import Foto3 from "../../assets/uno-home-content3.jpg";
import GameData from "./GameData";
import "./Games.css";

export default function Games() {
  return (
    <>
      <div className="game">
        <h1>Tipos de Partida</h1>
        <p> Acá puedes seleccionar el tipo de partida que quieras</p>
        <div className="gamecard">
          <GameData
            image={Foto1}
            heading="Partida Rápida"
            text="¡Una partida rápida de Uno es perfecta para aquellos momentos en los que solo tienes unos minutos libres para jugar!"
          />
          <GameData
            image={Foto2}
            heading="Partida de Práctica"
            text="Antes de participar en un torneo, ¡asegúrate de practicar lo suficiente! ¡Una partida de práctica es una excelente manera de perfeccionar tus habilidades antes de competir en un torneo!"
          />
          <GameData
            image={Foto3}
            heading="Partida de Torneo"
            text="¡Prepárate para la emoción de una partida de torneo de Uno!

            ¡La competencia es intensa en una partida de torneo de Uno, pero es una experiencia emocionante que no querrás perderte!"
          />
        </div>
      </div>
    </>
  );
}
