"use client";

import { Chessboard, PieceDropHandlerArgs } from "react-chessboard";
import { useCallback, useEffect } from "react";
import { customPieces } from "./customPieces";
import { useChessGameContext } from "@/hooks/useContext";
import { Chess } from "chess.js";
import { motion, AnimatePresence } from "framer-motion";
import { RefreshCcw, Trophy, AlertTriangle } from "lucide-react";

export default function Board() {
  const { thinking, setThinking, game, setGame, gameStatus, setGameStatus } =
    useChessGameContext();

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

  const makeBotMove = useCallback(() => {
    setThinking(true);

    // Simulate random thinking delay
    setTimeout(() => {
      const moves = game.moves();

      if (game.game_over() || game.in_draw() || moves.length === 0) {
        setThinking(false);
        return;
      }
    });
  }, [game]);

  useEffect(() => {
    if (game.turn() === "b" && !gameStatus) makeBotMove();
  }, [game, gameStatus, makeBotMove]);

  const onDrop = ({
    sourceSquare,
    targetSquare,
    piece,
  }: PieceDropHandlerArgs) => {
    if (thinking || gameStatus || game.turn() !== "w") return false;
    return true;
  };

  const resetGame = () => {
    const newGame = new Chess();
    setGame(newGame);
    setGameStatus(null);
    setThinking(false);
  };
  const chessboardOptions = {
    id: "basicBoard",
    position: game.fen(),
    onPieceDrop: onDrop,
    darkSquareStyle: { backgroundColor: "#334155" },
    lightSquareStyle: { backgroundColor: "#94a3b8" },
    animationDurationInMs: 300,
    pieces: customPieces,
    draggingPieceGhostStyle: { opacity: 0 },
    draggingPieceStyle: { transform: "scale(1.2)" },
    allowDragging: !setThinking && !setGameStatus && game.turn() === "w",
  };

  return (
    <section className="flex-1 flex flex-col items-center justify-start pt-8 px-4 relative">
      {/* Game status */}
      <AnimatePresence>
        {gameStatus && (
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-slate-900/95
            backdrop-blur-xl border border-slate-700 p-8 rounded-2xl shadow-2xl flex flex-col items-center gap-4
            text-center max-w-sm w-full"
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
          >
            {gameStatus.type === "win" && (
              <Trophy className="w-16 h-16 text-yellow-500 mb-2" />
            )}
            {gameStatus.type === "loss" && (
              <AlertTriangle className="w-16 h-16 text-red-500 mb-2" />
            )}
            {gameStatus.type === "draw" && (
              <RefreshCcw className="w-16 h-16 text-slate-400 mb-2" />
            )}

            <h2 className="text-3xl font-bold text-white tracking-tight">
              {gameStatus.title}
            </h2>
            <p className="text-slate-400 mb-4">{gameStatus.message}</p>

            <button
              onClick={resetGame}
              className="w-full py-3 bg-white text-slate-900 hover:bg-slate-200 rounded-lg font-bold transition-colors flex items-center justify-center gap-2"
            >
              Play Again
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Chessboard */}
      <div
        className={`relative transition-all duration-500 ${gameStatus ? "blur-sm grayscale opacity-50" : ""}`}
      >
        <div
          className={
            "rounded-lg overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-700/50 w-95 sm:w-150"
          }
        >
          <Chessboard options={chessboardOptions} />
        </div>
      </div>
    </section>
  );
}
