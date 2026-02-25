"use client";

import React, { useState, createContext, useRef, useCallback } from "react";
import { Chess, ChessInstance } from "chess.js";
import { useChessGameContext } from "@/hooks/useContext";
import { GameStatus } from "@/lib/types";

type ChessGameContextProviderProps = {
  children: React.ReactNode;
};

type ChessGameContextType = {
  game: ChessInstance;
  setGame: React.Dispatch<React.SetStateAction<ChessInstance>>;
  thinking: boolean;
  setThinking: React.Dispatch<React.SetStateAction<boolean>>;
  gameStatus: GameStatus | null;
  setGameStatus: React.Dispatch<React.SetStateAction<GameStatus | null>>;
  containerRef: React.RefObject<HTMLDivElement | null>;
};

export const ChessGameContext = createContext<ChessGameContextType | null>(
  null,
);

export default function ChessGameContextProvider({
  children,
}: ChessGameContextProviderProps) {
  const [thinking, setThinking] = useState(false);
  const [game, setGame] = useState(new Chess());
  const [gameStatus, setGameStatus] = useState<GameStatus | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <ChessGameContext.Provider
      value={{
        game,
        setGame,
        thinking,
        setThinking,
        gameStatus,
        setGameStatus,
        containerRef,
      }}
    >
      {children}
    </ChessGameContext.Provider>
  );
}
