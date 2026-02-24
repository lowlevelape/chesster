import React, { useState, createContext, useContext, useCallback } from "react";
import { Chess, ChessInstance } from "chess.js";
import { useChessGameContext } from "@/hooks/useContext";

type BoardContextProviderProps = {
  children: React.ReactNode;
};

type BoardContextType = {
  game: ChessInstance;
  setGame: React.Dispatch<React.SetStateAction<ChessInstance>>;
};

export const BoardContext = createContext<BoardContextType | null>(null);

export default function BoardContextProvider({
  children,
}: BoardContextProviderProps) {
  const { setGameStatus } = useChessGameContext();
  const [game, setGame] = useState(new Chess());

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
  return (
    <BoardContext.Provider
      value={{
        game,
        setGame,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
}
