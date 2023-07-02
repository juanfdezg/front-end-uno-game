import React from "react";
import UnoCard from "../UnoCard/UnoCard";
import "./CardsColumn.css";

export default function CardsColumn({ cards, gameId, playerId, clickCard, isTurn }) {
  return (
    <div className={`cards-column ${isTurn ? "isTurn" : ""}`}>
      {cards.map((card) => (
        <div className="card-container" key={card.key}>
          <UnoCard
            id={card.key}
            type={card.type}
            color={card.color}
            value={card.value}
            gameId={gameId}
            playerId={playerId}
            clickCard={clickCard}
          ></UnoCard>
        </div>
      ))}
    </div>
  );
}
