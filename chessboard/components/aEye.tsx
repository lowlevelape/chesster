"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { GameStatus } from "@/lib/types";

interface AEyeProps {
  isThinking?: boolean;
  gameStatus?: GameStatus;
}

export default function AEye({
  isThinking = false,
  gameStatus = "",
}: AEyeProps) {
  const [pupilPos, setPupilPos] = useState({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  // Mousetrack
  useEffect(() => {
    const handleMouseMovements = (e: MouseEvent) => {
      if (!containerRef.current || isThinking || gameStatus) return;

      const rect = containerRef.current.getBoundingClientRect();

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      const maxMove = 12;

      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const maxDistance = Math.min(window.innerWidth, window.innerHeight) / 2;

      const factor = Math.min(distance / maxDistance, 1);
      const angle = Math.atan2(deltaY, deltaX);

      setPupilPos({
        x: Math.cos(angle) * maxMove * factor,
        y: Math.sin(angle) * maxMove * factor,
      });
    };
    window.addEventListener("mousemove", handleMouseMovements);

    // Random blinking effect
    const blinkInterval = setInterval(() => {
      if (Math.random() > 0.85) {
        setIsBlinking(true);
        setTimeout(() => setIsBlinking(false), 150);
      }
    }, 4000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMovements);
      clearInterval(blinkInterval);
    };
  }, [isThinking, gameStatus]);

  return (
    <div className="w-full py-6 flex flex-col items-center justify-center relative z-20">
      {/* Text box */}
      <div className="absolute top-4 left-6 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-green-500" />
        <span className="text-xs font-mono tracking-widest uppercase text-slate-500">
          I see...
        </span>
      </div>
      {/* Eye of God */}
      <div
        className="relative w-32 h-16 bg-white rounded-[100%] overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0,15)]
        border-4 transition-colors duration-500 flex items-center justify-center border-slate-300"
      >
        <div className="relative w-14 h-14 rounded-full flex items-center justify-center">
          {/* Iris */}
          <motion.div
            className="w-full h-full rounded-full absolute inset-0 shadow-inner transition-colors duration-500
            bg-linear-to-b from-red-500 to-red-900"
            animate={{ x: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            {/* Pupil */}
            <div className="w-6 h-6 bg-black rounded-full absolute z-10 transition-all duration-300 scale(1)" />
            {/* Highlight */}
            <div className="w-2 h-2 bg-white rounded-full absolute top-3 right-3 z-20 opacity-80" />
          </motion.div>
        </div>

        {/* Eye lids */}
        <motion.div
          className="absolute top-0 left-0 right-0 bg-slate-900 z-30 h-1/2 origin-top"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 0.1 }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-slate-900 z-30 h-1/2 origin-bottom"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.1 }}
        />
      </div>
    </div>
  );
}
