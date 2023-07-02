import React, { useEffect, useState } from "react";
import axios from "axios";
import TopStack from "../../components/Game/TopStack/TopStack";
import LeftStack from "../../components/Game/LeftStack/LeftStack";
import RightStack from "../../components/Game/RightStack/RightStack";
import PlayerStack from "../../components/Game/PlayerStack/PlayerStack";
import DrawStack from "../../components/Game/DrawStack/DrawStack";
import TableStack from "../../components/Game/TableStack/TableStack";
import { AuthContext, useAuth } from "../../auth/AuthContext";
import API_URL from "../../common/config";

export default function Game() {
  const gameId = 1;
  const [userId, setUserId] = useState(null);
  const [currentNumPlayer, setCurrentNumPlayer] = useState(null);
  const [rightNumPlayer, setRightNumPlayer] = useState(null);
  const [topNumPlayer, setTopNumPlayer] = useState(null);
  const [leftNumPlayer, setLeftNumPlayer] = useState(null);
  const [playerCards, setPlayerCards] = useState([]);
  const [rightCards, setRightCards] = useState([]);
  const [topCards, setTopCards] = useState([]);
  const [leftCards, setLeftCards] = useState([]);
  const [tableStack, setTableStack] = useState([]);
  const [turnoActual, setTurnoActual] = useState(null);
  const { username } = useAuth(AuthContext);

  // Obtener el orden de los jugadores
  const getPlayersOrder = async (userId) => {
    try {
      const response = await axios.get(
        `${API_URL}/jugadores/${gameId}`
      );
      const players = response.data.map((player) => ({
        user_id: player.user_id,
        num_player: player.num_player,
      }));

      // Encontrar el num_player del jugador actual
      const currentNumPlayer = players.find(
        (player) => player.user_id === userId
      ).num_player;

      let rightNumPlayer = null;
      let topNumPlayer = null;
      let leftNumPlayer = null;

      if (players.length >= 3) {
        rightNumPlayer =
          currentNumPlayer === players.length ? 1 : currentNumPlayer + 1;
        topNumPlayer =
          currentNumPlayer === players.length ? 2 : currentNumPlayer + 2;
      } else if (players.length === 2) {
        rightNumPlayer =
          currentNumPlayer === players.length ? 1 : currentNumPlayer + 1;
      }

      if (players.length === 4) {
        leftNumPlayer =
          currentNumPlayer === 1 ? players.length : currentNumPlayer - 1;
      }

      return { currentNumPlayer, rightNumPlayer, topNumPlayer, leftNumPlayer };
    } catch (error) {
      console.error("Error al obtener el orden de los jugadores:", error);
    }
  };

  // Request para obtener el id del usuario logueado
  const getUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `${API_URL}/users/username/${username}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const userId = response.data.id;
      setUserId(userId);

      const playersOrder = await getPlayersOrder(userId);
      if (playersOrder) {
        setCurrentNumPlayer(playersOrder.currentNumPlayer);
        setRightNumPlayer(playersOrder.rightNumPlayer);
        setTopNumPlayer(playersOrder.topNumPlayer);
        setLeftNumPlayer(playersOrder.leftNumPlayer);
      }
    } catch (error) {
      console.error("Error al obtener el usuario:", error);
    }
  };

  useEffect(() => {
    if (username) {
      getUser();
    }
  }, [username]);

  // Buscamos el turno actual
  const getTurn = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/partidas/show/${gameId}`
      );
      const turnoActual = response.data.current_player;
      setTurnoActual(turnoActual);
      // localStorage.setItem("turnoActual", turnoActual);

      // // Enviar mensaje a las otras ventanas
      // window.postMessage({ type: "turnoActual", value: turnoActual }, "*");
    } catch (error) {
      console.error("Error al obtener el turno actual:", error);
    }
  };

  // Obtener las cartas de los jugadores
  const getPlayerHands = async () => {
    try {
      const valores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

      // Obtener mano de PlayerStack
      const playerHandResponse = await axios.get(
        `${
          API_URL
        }/partidas/${gameId}/hand/${currentNumPlayer}`
      );
      const playerHand = playerHandResponse.data.cartasMano;
      const playerCards = playerHand.map((card) => {
        return {
          key: card.id,
          type: card.type,
          color: card.color === "none" ? "lightgrey" : card.color,
          value: valores.includes(card.value) ? card.value : card.action,
          player_id: card.player_id,
          deck_id: card.deck_id,
        };
      });
      setPlayerCards(playerCards);

      // Obtener mano de RightStack
      const rightHandResponse = await axios.get(
        `${
          API_URL
        }/partidas/${gameId}/hand/${rightNumPlayer}`
      );
      const rightHand = rightHandResponse.data.cartasMano;
      const rightCards = rightHand.map((card) => {
        return {
          key: card.id,
          type: card.type,
          color: card.color === "none" ? "lightgrey" : card.color,
          value: valores.includes(card.value) ? card.value : card.action,
          player_id: card.player_id,
          deck_id: card.deck_id,
        };
      });
      setRightCards(rightCards);

      // Obtener mano de LeftStack
      const leftHandResponse = await axios.get(
        `${
          API_URL
        }/partidas/${gameId}/hand/${leftNumPlayer}`
      );
      const leftHand = leftHandResponse.data.cartasMano;
      const leftCards = leftHand.map((card) => {
        return {
          key: card.id,
          type: card.type,
          color: card.color === "none" ? "lightgrey" : card.color,
          value: valores.includes(card.value) ? card.value : card.action,
          player_id: card.player_id,
          deck_id: card.deck_id,
        };
      });
      setLeftCards(leftCards);

      // Obtener mano de TopStack
      const topHandResponse = await axios.get(
        `${
          API_URL
        }/partidas/${gameId}/hand/${topNumPlayer}`
      );
      const topHand = topHandResponse.data.cartasMano;
      const topCards = topHand.map((card) => {
        return {
          key: card.id,
          type: card.type,
          color: card.color === "none" ? "lightgrey" : card.color,
          value: valores.includes(card.value) ? card.value : card.action,
          player_id: card.player_id,
          deck_id: card.deck_id,
        };
      });
      setTopCards(topCards);
    } catch (error) {
      console.error("Error al obtener las cartas del jugador:", error);
    }
  };

  // Obtener el turno actual
  useEffect(() => {
    if (userId !== null) {
      getTurn();
    }
    // Obtener el turno actual y establecerlo como estado inicial
  }, [userId]);

  // Obtener las cartas de los jugadores
  useEffect(() => {
    if (turnoActual !== null) {
      getPlayerHands();
    }
  }, [turnoActual]);

  // Función para obtener la carta del mazo descarte
  const getTableCard = async () => {
    try {
      const valores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      const response = await axios.get(
        `${API_URL}/partidas/${gameId}/descarte`
      );
      const cartasMazoDescarte = response.data.cartasMazoDescarte;
      const topCard = cartasMazoDescarte[0];
      const card = {
        key: topCard.id,
        type: topCard.type,
        color: topCard.color === "none" ? "lightgrey" : topCard.color,
        value: valores.includes(topCard.value) ? topCard.value : topCard.action,
        player_id: topCard.player_id,
        deck_id: topCard.deck_id,
      };
      setTableStack([card]);
    } catch (error) {
      console.error("Error al obtener las cartas del mazo descarte:", error);
    }
  };
  useEffect(() => {
    getTableCard();
  }, [gameId]);

  // Escuchar mensajes de otras ventanas
// window.addEventListener('message', (event) => {
//   if (event.data.type === 'turnoActual') {
//     const nuevoNumeroTurno = event.data.value;
//     // Actualizar el número de turno y gatillar el useEffect correspondiente
//     setTurnoActual(nuevoNumeroTurno);
//   }
// });

  return (
    <>
      <TableStack tableStack={tableStack} gameId={gameId}></TableStack>
      <TopStack
        updateTableStack={getTableCard}
        getTurn={getTurn}
        currentTurn={turnoActual}
        topCards={topCards}
        gameId={gameId}
        topPlayer={topNumPlayer}
      ></TopStack>
      <LeftStack
        updateTableStack={getTableCard}
        getTurn={getTurn}
        currentTurn={turnoActual}
        leftCards={leftCards}
        gameId={gameId}
        leftPlayer={leftNumPlayer}
      ></LeftStack>
      <RightStack
        updateTableStack={getTableCard}
        getTurn={getTurn}
        currentTurn={turnoActual}
        rightCards={rightCards}
        gameId={gameId}
        rightPlayer={rightNumPlayer}
      ></RightStack>
      <PlayerStack
        updateTableStack={getTableCard}
        getTurn={getTurn}
        currentTurn={turnoActual}
        playerCards={playerCards}
        gameId={gameId}
        currentPlayer={currentNumPlayer}
      ></PlayerStack>
      <DrawStack
        // drawStack={drawStack}
        gameId={gameId}
        getTurn={getTurn}
        currentTurn={turnoActual}
      ></DrawStack>
    </>
  );
}
