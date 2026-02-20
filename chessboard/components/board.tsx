"use client";
import { Chessboard } from "react-chessboard";

export default function Board() {
  return (
    <section className="pt-5">
      <div className="w-200 m-auto">
        <Chessboard />
      </div>
    </section>
  );
}
