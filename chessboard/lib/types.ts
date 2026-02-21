const gameState = [
  {
    state: "win",
  },
  {
    state: "loss",
  },
  {
    state: "draw",
  },
  {
    state: "",
  },
];

export type GameStatus = (typeof gameState)[number]["state"];
