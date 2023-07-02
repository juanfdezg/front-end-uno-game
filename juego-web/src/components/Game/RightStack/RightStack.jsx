import React, { useEffect, useState } from "react";
import CardsColumn from "../CardsColumn/CardsColumn";
import axios from "axios";
import "./RightStack.css";

export default function RightStack({
  updateTableStack,
  getTurn,
  currentTurn,
  rightCards,
  gameId,
  rightPlayer,
}) {
  // Función para jugar una carta
  const playCard = (id, gameId, playerId) => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/partidas/${gameId}/cardInfo/${id}`
      )
      .then((response) => {
        const cardType = response.data.type;
        const cardAction = response.data.action;

        // Si es que la carta es de action Wild o Wild Draw Four, debe escoger un color
        if (
          cardType === "ActionCard" &&
          (cardAction === "Wild" || cardAction === "Wild Draw Four")
        ) {
          // Debe escoger un color
          const selectedColor = prompt(
            "Escoge un color: red, blue, green o yellow"
          );

          // Validar que el color sea válido
          if (
            selectedColor === "red" ||
            selectedColor === "blue" ||
            selectedColor === "green" ||
            selectedColor === "yellow"
          ) {
            axios
              .post(
                `${
                  import.meta.env.VITE_BACKEND_URL
                }/juego/${gameId}/play/${id}`,
                {
                  user_id: playerId,
                  color: selectedColor,
                }
              )
              .then((response) => {
                // Respuesta exitosa
                console.log(response.data.detail);
                const valueOrAction = response.data.card.value ? response.data.card.value : response.data.card.action;
                console.log(
                  `Carta jugada:\n-id: ${response.data.card.id}\n-type: ${response.data.card.type}\n-color: ${response.data.card.color}\n-value: ${valueOrAction}`
                );
                updateTableStack();
                getTurn();
              })
              .catch((error) => {
                // Error
                if (
                  error.response &&
                  error.response.data &&
                  error.response.data.detail
                ) {
                  console.log(error.response.data.detail);
                } else {
                  console.log("Error al jugar carta:", error.message);
                }
              });
          }
        } else {
          axios
            .post(
              `${import.meta.env.VITE_BACKEND_URL}/juego/${gameId}/play/${id}`,
              {
                user_id: playerId,
              }
            )
            .then((response) => {
              // Respuesta exitosa
              console.log(response.data.detail);
              const valueOrAction = response.data.card.value ? response.data.card.value : response.data.card.action;
              console.log(
                `Carta jugada:\n-id: ${response.data.card.id}\n-type: ${response.data.card.type}\n-color: ${response.data.card.color}\n-value: ${valueOrAction}`
              );
              updateTableStack();
              getTurn();
            })
            .catch((error) => {
              // Error
              if (
                error.response &&
                error.response.data &&
                error.response.data.detail
              ) {
                console.log(error.response.data.detail);
              } else {
                console.log("Error al jugar carta:", error.message);
              }
            });
        }
      });
  };
  return (
    <>
      <div className="rightStack">
        {rightCards.length > 0 ? (
          <CardsColumn
            cards={rightCards}
            gameId={gameId}
            playerId={rightPlayer}
            clickCard={playCard}
            isTurn={currentTurn === rightPlayer}
          ></CardsColumn>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </>
  );
}
