"use client";

import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { useCallback, useState } from "react";
import { customPieces } from "./customPieces";
import { useChessGameContext } from "@/context/chess-game-context";

export default function Board() {
  const [game, setGame] = useState(new Chess());
  const { setGameStatus, setThinking } = useChessGameContext();

  const checkGameOver = useCallback(() => {
    if (game.in_checkmate()) {
      const winner = game.turn() === "w" ? "Black" : "White";
      const playerWon = winner === "White";
      setGameStatus({
        title: playerWon ? "Victory!" : "Defeat",
        message: playerWon
          ? "You checkmated the bot."
          : "The bot checkmated you.",
        type: playerWon ? "win" : "loss",
      });
    } else if (
      game.in_draw() ||
      game.in_stalemate() ||
      game.in_threefold_repetition() ||
      game.insufficient_material()
    ) {
      setGameStatus({
        title: "Draw",
        message: "The game ended in a draw.",
        type: "draw",
      });
    } else setGameStatus(null);
  }, [game]);

  const chessboardOptions = {
    id: "basicBoard",
    position: game.fen(),
    darkSquareStyle: { backgroundColor: "#334155" },
    lightSquareStyle: { backgroundColor: "#94a3b8" },
    animationDurationInMs: 300,
    pieces: customPieces,
    draggingPieceGhostStyle: { opacity: 0 },
    draggingPieceStyle: { transform: "scale(1.2)" },
    allowDragging: !setThinking && !setGameStatus && game.turn() === "w",
  };
  return (
    <section className="relative transition-all duration-500">
      <div
        className={
          "rounded-lg overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-700/50 w-95 sm:w-190"
        }
      >
        <Chessboard options={chessboardOptions} />
      </div>
    </section>
  );
}
