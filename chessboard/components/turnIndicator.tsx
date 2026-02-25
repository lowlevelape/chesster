"use client";

import { useChessGameContext } from "@/hooks/useContext";

export default function TurnIndicator() {
  const { game } = useChessGameContext();
  return (
    <section className="flex-1 flex flex-col items-center justify-start px-4 relative">
      <div className="mt-8 grid grid-cols-2 gap-4 w-full max-w-150">
        {/* Player */}
        <div
          className={`flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-300 ${game.turn() === "w" ? "bg-slate-800/50 border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.1)]" : "border-transparent opacity-50"}`}
        >
          <span className="text-sm uppercase tracking-widest text-slate-400 mb-1">
            You
          </span>
          <div className="flex items-center gap-2">
            <div
              className={`w-2 h-2 rounded-full ${game.turn() === "w" ? "bg-blue-400 animate-pulse" : "bg-slate-600"}`}
            />
            <span className="font-bold text-lg">White</span>
          </div>
        </div>

        {/* Bot */}
        <div
          className={`flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-300 ${game.turn() === "b" ? "bg-slate-800/50 border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.1)]" : "border-transparent opacity-50"}`}
        >
          <span className="text-sm uppercase tracking-widest text-slate-400 mb-1">
            Opponent
          </span>
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg">Black</span>
            <div
              className={`w-2 h-2 rounded-full ${game.turn() === "b" ? "bg-red-400 animate-pulse" : "bg-slate-600"}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
