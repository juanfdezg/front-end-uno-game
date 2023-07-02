import React from "react";
import "./Instructions.css";
import UnoCard from "../../components/Game/UnoCard/UnoCard";
import { motion } from "framer-motion";
import { useState } from "react";
import InstructionsHero from "../../components/Instructions/InstructionsHero";

export default function Instructions() {
  const [click, setClick] = useState(false);

  return (
    <>
      <InstructionsHero
        cName="instructions-hero"
        instructionsImg="/minimalist_uno.jpg"
        title="¡Aprende a jugar, es muy sencillo!"
        text="Baja para encontrar las reglas de juego"
        buttonText="Ver reglas"
        url="#show-info"
        btnClass="show"
      />
      <div id="show-info" className="instructions-container">
        <div className="instructions-content">
          <div className="start-game">
            <div className="start-text">
              <h2>Inicio del juego</h2>
              <p>
                Al inicio del juego, se revuelve el mazo de cartas UNO. Luego, a
                cada jugador se le entregan 5 cartas aleatorias para formar su
                mano de juego. El jugador debe ver sus cartas y no mostrarlas al
                resto de jugadores.
              </p>
            </div>
            <motion.div
              className="start-uno-card"
              animate={{ rotate: [0, 5, 5, -5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 0.3 }}
              initial={{ scale: 1.2 }}
              onClick={() => {
                setClick(!click);
              }}
            >
              <UnoCard type="back" color="back" value="uno"></UnoCard>
              <h2>¡Aprétame!</h2>
            </motion.div>
          </div>
          <div className="start-hidden-cards">
            <motion.div
              animate={
                click
                  ? { x: 0, y: 0, scale: 1.4 }
                  : { x: 852, y: -325, scale: 0 }
              }
              transition={{ duration: 1 }}
            >
              <UnoCard type="number" color="blue" value="4"></UnoCard>
            </motion.div>
            <motion.div
              animate={
                click
                  ? { x: 0, y: 0, scale: 1.4 }
                  : { x: 610, y: -325, scale: 0 }
              }
              transition={{ duration: 1 }}
            >
              <UnoCard type="number" color="yellow" value="7"></UnoCard>
            </motion.div>
            <motion.div
              animate={
                click
                  ? { x: 0, y: 0, scale: 1.4 }
                  : { x: 368, y: -325, scale: 0 }
              }
              transition={{ duration: 1 }}
            >
              <UnoCard type="number" color="red" value="9"></UnoCard>
            </motion.div>
            <motion.div
              animate={
                click
                  ? { x: 0, y: 0, scale: 1.4 }
                  : { x: 126, y: -325, scale: 0 }
              }
              transition={{ duration: 1 }}
            >
              <UnoCard type="number" color="blue" value="2"></UnoCard>
            </motion.div>
            <motion.div
              animate={
                click
                  ? { x: 0, y: 0, scale: 1.4 }
                  : { x: -116, y: -325, scale: 0 }
              }
              transition={{ duration: 1 }}
            >
              <UnoCard type="number" color="green" value="5"></UnoCard>
            </motion.div>
          </div>
          <div className="mid-game">
            <div className="mid-text">
              <h2>Desarrollo del juego</h2>
              <p>
                La partida empieza cuando cada jugador tiene 5 cartas en sus
                manos. Se escoge aleatoriamente el jugador con el primer turno.
                Para jugar una carta de la mano, debe ser del mismo color o
                valor de la carta que se encuentra sobre la mesa. Luego de
                jugarla, se pasa al turno del siguiente jugador. Si el jugador
                no tiene una carta que pueda jugar, debe tomar una carta del
                mazo. Si después de sacar 2 cartas el jugador aún no tiene una
                carta para jugar, se termina su turno y se pasa al siguiente
                jugador.
              </p>
            </div>
            <motion.div
              className="mid-uno-card"
              animate={{ rotate: [0, 5, 5, -5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 0.3 }}
              initial={{ scale: 1.2 }}
            >
              <UnoCard type="number" color="yellow" value="8"></UnoCard>
            </motion.div>
          </div>
          <div className="end-game">
            <div className="end-text">
              <h2>Fin del juego</h2>
              <p>
                Cuando un jugador se queda sin cartas en la mano, debe sacar una
                carta del mazo especial. En este mazo existen cartas con habilidades especiales, como cambiar el sentido de los turnos, que el 
                próximo jugador robe 4 cartas, y muchas más sorpresas. En este mazo especial también existen cartas que otorgan 1 punto de victoria.
                Cuando un jugador saca una carta de este mazo especial, luego saca 4 cartas del mazo normal y continua con el juego. El primer jugador 
                en llegar a los 3 puntos de victoria gana la partida.
              </p>
            </div>
            <motion.div
              className="mid-uno-card"
              animate={{ rotate: [0, 5, 5, -5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 0.3 }}
              initial={{ scale: 1.2 }}
            >
              <UnoCard type="number" color="red" value="1"></UnoCard>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
