import { title } from "framer-motion/m";

const gameState = [
  {
    title: "",
    message: "",
    type: "win",
  },
  {
    title: "",
    message: "",
    type: "loss",
  },
  {
    title: "",
    message: "",
    type: "draw",
  },
];

export type GameStatus = (typeof gameState)[number];
