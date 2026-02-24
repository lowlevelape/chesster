import { useContext } from "react";
import { BoardContext } from "@/context/board-context";
import { ChessGameContext } from "@/context/chess-game-context";

export function useBoardContext() {
  const context = useContext(BoardContext);

  if (context === null) {
    throw new Error(
      "useBoardContext hook must be used within useBoardContextProvider",
    );
  }

  return context;
}

export function useChessGameContext() {
  const context = useContext(ChessGameContext);

  if (context === null) {
    throw new Error(
      "useChessGameContext hook must be used within ChessGameContextProvider",
    );
  }

  return context;
}
