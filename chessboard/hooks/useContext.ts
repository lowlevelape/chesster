import { useContext } from "react";
import { ChessGameContext } from "@/context/chess-game-context";

export function useChessGameContext() {
  const context = useContext(ChessGameContext);

  if (context === null) {
    throw new Error(
      "useChessGameContext hook must be used within ChessGameContextProvider",
    );
  }

  return context;
}
