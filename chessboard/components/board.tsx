"use client";

import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { useState } from "react";

export default function Board() {
  const [game, setGame] = useState(new Chess());
  const chessboardOptions = {
    id: "basicBoard",
    position: game.fen(),
  };
  return (
    <section className="relative transition-all duration-500">
      <div
        className={`rounded-lg overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-700/50 w-200`}
      >
        <Chessboard options={chessboardOptions} />
      </div>
    </section>
  );
}
