import React from "react";
import { motion } from "framer-motion";
import "./UnoCard.css";

export default function UnoCard({
  id,
  type,
  color,
  value,
  gameId,
  playerId,
  clickCard,
}) {
  const className1 = `card ${type} ${color} num-${value}`;
  const className2 = `mark-${type}`;

  // Definimos la función que se ejecutará al hacer click en una carta
  const handleClick = () => {
    if (playerId) {
      clickCard(id, gameId, playerId);
    } else {
      clickCard(gameId, playerId)
    }
  };

  // type: number, back, special
  return (
    <motion.div
      className={className1}
      onClick={handleClick}
    >
      <span className="inner">
        <span className={className2}>{value}</span>
      </span>
    </motion.div>
  );
}
