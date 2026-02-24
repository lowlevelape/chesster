"use client";

import React, {
  createContext,
  useState,
  useRef,
  useEffect,
  useContext,
} from "react";
import { GameStatus } from "@/lib/types";

type ChessGameContextProviderProps = {
  children: React.ReactNode;
};

type ChessGameContextType = {
  containerRef: React.RefObject<HTMLDivElement | null>;
  setThinking: React.Dispatch<React.SetStateAction<boolean>>;
  setGameStatus: React.Dispatch<React.SetStateAction<GameStatus>>;
};

export const ChessGameContext = createContext<ChessGameContextType | null>(
  null,
);

export default function ChessGameContextProvider({
  children,
}: ChessGameContextProviderProps) {
  const [thinking, setThinking] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [gameStatus, setGameStatus] = useState<GameStatus>("");

  return (
    <ChessGameContext.Provider
      value={{
        containerRef,
        setThinking,
        setGameStatus,
      }}
    >
      {children}
    </ChessGameContext.Provider>
  );
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
