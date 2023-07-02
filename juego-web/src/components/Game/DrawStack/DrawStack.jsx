import React, { useEffect, useState } from "react";
import UnoCard from "../UnoCard/UnoCard";
import axios from "axios";
import "./DrawStack.css";
import API_URL from "../../../common/config";
export default function DrawStack({ gameId, getTurn, currentTurn }) {
  // Función para tomar una carta
  const drawCard = async () => {
    try {
      const valores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      const response = await axios.post(
        `${API_URL}/juego/${gameId}/draw`,
        {
          user_id: currentTurn,
        }
      );
      const cartaRobada = response.data.card;
      const valueOrAction = cartaRobada.value
        ? cartaRobada.value
        : cartaRobada.action;
      console.log(`Carta robada: 
      -id: ${cartaRobada.id}
      -type: ${cartaRobada.type}
      -color: ${cartaRobada.color}
      -value: ${valueOrAction}`);
      await axios.post(
        `${API_URL}/juego/${gameId}/turn`,
        {
          user_id: currentTurn,
        }
      );
      getTurn();
    } catch (error) {
      console.error("Error al tomar una carta:", error);
    }
  };

  return (
    <>
      <div className="drawStack">
        <UnoCard
          type={"back"}
          color={"back"}
          value={"uno"}
          gameId={gameId}
          clickCard={drawCard}
        ></UnoCard>
      </div>
    </>
  );
}
