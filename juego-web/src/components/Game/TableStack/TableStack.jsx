import React, { useEffect, useState } from "react";
import UnoCard from "../UnoCard/UnoCard";
import axios from "axios";
import "./TableStack.css";

export default function TableStack({ tableStack, gameId }) {
  return (
    <>
      <div className="tableStack">
        {tableStack.length > 0 ? (
          <UnoCard
            id={tableStack[0].id}
            type={tableStack[0].type}
            color={tableStack[0].color}
            value={tableStack[0].value}
            gameId={gameId}
            playerId={tableStack[0].player_id}
            deckId={tableStack[0].deck_id}
          ></UnoCard>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </>
  );
}
